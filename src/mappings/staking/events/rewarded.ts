import assert from 'assert'
import { UnknownVersionError } from '../../../common/errors'
import { encodeId } from '../../../common/tools'
import { HistoryElement, Reward, Round, RoundCollator, Delegator, Collator, Staker } from '../../../model'
import { ParachainStakingRewardedEvent } from '../../../types/generated/events'
import { CommonHandlerContext, EventContext, EventHandlerContext } from '../../types/contexts'
import { ActionData } from '../../types/data'
import { getMeta } from '../../util/actions'
import { RewardPaymentDelay } from '../../util/consts'
import { getOrCreateStaker } from '../../util/entities'

interface EventData {
    amount: bigint
    account: Uint8Array
}

function getEventData(ctx: EventContext): EventData {
    const event = new ParachainStakingRewardedEvent(ctx)

    if (event.isV49) {
        const [account, amount] = event.asV49
        return {
            account,
            amount,
        }
    } else if (event.isV1300) {
        const { account, rewards: amount } = event.asV1300
        return {
            account,
            amount,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleRewarded(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    await saveReward(ctx, {
        id: ctx.event.id,
        blockNumber: ctx.block.height,
        timestamp: new Date(ctx.block.timestamp),
        extrinsicHash: ctx.event.extrinsic?.hash,
        accountId: encodeId(data.account),
        amount: data.amount,
    })
}

export interface RewardData extends ActionData {
    amount: bigint
    accountId: string
}

export async function saveReward(ctx: CommonHandlerContext, data: RewardData) {
    const staker = await getOrCreateStaker(ctx, data.accountId)
    if (staker != null && staker?.role === 'delegator') {
            const round = await ctx.store.get(Round, { where: {}, order: { index: 'DESC' } })
            assert(round != null)
            const rewRound = await ctx.store.get(Round, { where: {index : round.index - 2} })
            assert(rewRound != null)
            const delegator = await ctx.store.get(Delegator, { where: { id: data.accountId } })
            const delStaker = await ctx.store.get(Staker, { where: { id: data.accountId } })
            await ctx.store.insert(
                new Reward({
                    ...getMeta(data),
                    account: staker.stash,
                    amount: data.amount,
                    round: Math.min((round?.index || 0) - RewardPaymentDelay, 0),
                    staker: delStaker,
                })
            )
            await ctx.store.insert(
                new HistoryElement({
                    id: data.id,
                    blockNumber: ctx.block.height,
                    timestamp: new Date(ctx.block.timestamp),
                    type: 2,
                    round: rewRound,
                    amount: data.amount,
                    staker: delStaker,
                    delegator: delegator,
                })
            )
    }
    if (staker != null && staker?.role === 'collator') {
        staker.totalReward += data.amount

        await ctx.store.save(staker)

        const round = await ctx.store.get(Round, { where: {}, order: { index: 'DESC' } })
        assert(round != null)

        const collatorRound = await ctx.store.get(RoundCollator, {
            where: { id: `${round.index - 2}-${staker.stashId}` },
        })
        const collator = await ctx.store.get(Collator, { where: { id: staker.stashId } })

        if (collatorRound != null) {
            if (collatorRound.ownBond && collatorRound.totalBond != null && collatorRound.totalBond > 0) {
                const colStakeShare = collatorRound.ownBond / collatorRound.totalBond
                const amountDue = Number(data.amount) / (0.2 + 0.5 * Number(colStakeShare))
                const colRew = 0.2 * amountDue + 0.5 * amountDue * Number(colStakeShare)
                const colAnnualRew = colRew * Number(1460)
                collatorRound.apr = colAnnualRew / Number(collatorRound.ownBond)
                collatorRound.round = round
                await ctx.store.save(collatorRound)
                const collatorLastRound = await ctx.store.get(RoundCollator, {
                    where: { id: `${round.index - 6}-${staker.stashId}` },
                })
                if (collatorLastRound) {
                    const lastApr = collatorLastRound.apr || 0
                    if (lastApr > 0) {
                        const Apr = staker.apr24h || 0
                        const avgApr = Apr * 4
                        if (avgApr > 0) {
                            staker.apr24h = (avgApr - lastApr + collatorRound.apr) / 4
                        } else {
                            const collatorLastRound3 = await ctx.store.get(RoundCollator, {
                                where: { id: `${round.index - 5}-${staker.stashId}` },
                            })
                            const collatorLastRound3Apr = collatorLastRound3?.apr || 0
                            const collatorLastRound2 = await ctx.store.get(RoundCollator, {
                                where: { id: `${round.index - 4}-${staker.stashId}` },
                            })
                            const collatorLastRound2Apr = collatorLastRound2?.apr || 0
                            const collatorLastRound1 = await ctx.store.get(RoundCollator, {
                                where: { id: `${round.index - 3}-${staker.stashId}` },
                            })
                            const collatorLastRound1Apr = collatorLastRound1?.apr || 0

                            const eqapr =
                                (collatorLastRound3Apr +
                                    collatorLastRound2Apr +
                                    collatorLastRound1Apr +
                                    collatorRound.apr) /
                                4


                            staker.apr24h =
                                (collatorLastRound3Apr +
                                    collatorLastRound2Apr +
                                    collatorLastRound1Apr +
                                    collatorRound.apr) /
                                4
                            await ctx.store.save(staker)
                            if (collator) {
                                collator.apr24h =
                                    (collatorLastRound3Apr +
                                        collatorLastRound2Apr +
                                        collatorLastRound1Apr +
                                        collatorRound.apr) /
                                    4
                                await ctx.store.save(collator)
                            }
                        }
                    } else {
                        staker.apr24h = collatorRound.apr / 4
                        await ctx.store.save(staker)
                        if (collator) {
                            collator.apr24h = collatorRound.apr / 4
                            await ctx.store.save(collator)
                        }
                    }
                } else {
                    staker.apr24h = collatorRound.apr / 4
                    await ctx.store.save(staker)
                    if (collator) {
                        collator.apr24h = collatorRound.apr / 4
                        await ctx.store.save(collator)
                    }

                }
            }

            await ctx.store.insert(
                new Reward({
                    ...getMeta(data),
                    account: staker.stash,
                    amount: data.amount,
                    round: Math.min((round?.index || 0) - RewardPaymentDelay, 0),
                    staker,
                })
            )
            if (collator) {
                await ctx.store.insert(
                    new HistoryElement({
                        id: data.id,
                        blockNumber: ctx.block.height,
                        timestamp: new Date(ctx.block.timestamp),
                        type: 2,
                        round: round,
                        amount: data.amount,
                        staker: staker,
                        collator: collator,
                    })
                )
            } else {
                await ctx.store.insert(
                    new HistoryElement({
                        id: data.id,
                        blockNumber: ctx.block.height,
                        timestamp: new Date(ctx.block.timestamp),
                        type: 2,
                        round: round,
                        amount: data.amount,
                        staker: staker,
                    })
                )
            }
        } else {
            const delegator = await ctx.store.get(Delegator, { where: { id: data.accountId } })
            await ctx.store.insert(
                new Reward({
                    ...getMeta(data),
                    account: staker.stash,
                    amount: data.amount,
                    round: Math.min((round?.index || 0) - RewardPaymentDelay, 0),
                    staker,
                })
            )
            await ctx.store.insert(
                new HistoryElement({
                    id: data.id,
                    blockNumber: ctx.block.height,
                    timestamp: new Date(ctx.block.timestamp),
                    type: 2,
                    round: round,
                    amount: data.amount,
                    staker: staker,
                    delegator: delegator,
                })
            )
        }
    }
}
