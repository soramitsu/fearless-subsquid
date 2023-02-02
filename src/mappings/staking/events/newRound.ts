import { UnknownVersionError } from '../../../common/errors'
import { ParachainStakingNewRoundEvent } from '../../../types/generated/events'
import { ParachainStakingNominatorStateStorage, ParachainStakingNominatorState2Storage } from '../../../types/generated/storage'
import { EventContext, EventHandlerContext } from '../../types/contexts'
import { Round, RoundCollator, RoundNomination, RoundNominator, Collator,
  Delegator, Staker } from '../../../model'
import assert from 'assert'
import storage from '../../../storage'
import { getCollatorsData, getNominatorsData } from '../../util/stakers'
import { getOrCreateStakers, getOrCreateStaker, createStaker } from '../../util/entities'
import { DefaultCollatorCommission } from '../../util/consts'
import { createPrevStorageContext } from '../../util/actions'

export interface EventData {
    startingBlock: number
    round: number
    selectedCollatorsNumber: number
    totalBalance: bigint
}

function getEventData(ctx: EventContext): EventData {
    const event = new ParachainStakingNewRoundEvent(ctx)

    if (event.isV49) {
        const [startingBlock, round, selectedCollatorsNumber, totalBalance] = event.asV49
        return { startingBlock, round, selectedCollatorsNumber, totalBalance }
    } else if (event.isV1300) {
        return event.asV1300
    }
    throw new UnknownVersionError(event.constructor.name)
}

// eslint-disable-next-line sonarjs/cognitive-complexity
export async function handleNewRound(ctx: EventHandlerContext) {
    const roundData = getEventData(ctx)

    const round = new Round({
        id: roundData.round.toString(),
        index: roundData.round,
        timestamp: new Date(ctx.block.timestamp),
        startedAt: ctx.block.height,
        collatorsCount: roundData.selectedCollatorsNumber,
        total: roundData.totalBalance,
    })

    await ctx.store.insert(round)

    const collatorIds = await storage.parachainStaking.getSelectedCandidates(ctx)
    if (!collatorIds) return

    const prevCtx = createPrevStorageContext(ctx)

    const collatorsData = await getCollatorsData(prevCtx, collatorIds)
    if (!collatorsData) return

    const collators = new Map<string, RoundCollator>()
    const collatorStakers = new Map((await getOrCreateStakers(ctx, collatorIds)).map((s) => [s.id, s]))

    const nominatorIds = new Array<string>()
    const delegationsData = new Array<{ vote: bigint; nominatorId: string; collatorId: string }>()
    for (const collatorData of collatorsData) {
        if (!collatorData || collators.has(collatorData.id)) continue

        let totalBond = collatorData.bond

        for (const nomination of collatorData.nominators) {
            totalBond += nomination.amount
            nominatorIds.push(nomination.id)
            delegationsData.push({ vote: nomination.amount, nominatorId: nomination.id, collatorId: collatorData.id })
        }

        const staker = collatorStakers.get(collatorData.id)
        if (!staker) {
            const staker = await getOrCreateStaker(ctx, collatorData.id)
        }
        if (staker) {
            collators.set(
                collatorData.id,
                new RoundCollator({
                    id: `${round.index}-${collatorData.id}`,
                    round,
                    staker,
                    ownBond: collatorData.bond,
                    totalBond: totalBond,
                    rewardAmount: DefaultCollatorCommission,
                    nominatorsCount: collatorData.nominators.length,
                })
            )
        }

    }

    await ctx.store.save([...collators.values()])

    const nominators = new Map<string, RoundNominator>()

    const nominatorStakers = new Map((await getOrCreateStakers(ctx, nominatorIds)).map((s) => [s.id, s]))

    const delegatorState = await storage.parachainStaking.old.getNominatorState(ctx, nominatorIds)

   const newStakers: Map<string, Staker> = new Map()
   if (delegatorState) {
        for (const nominatorData of delegatorState) {
            if (!nominatorData) continue

            const stashId = nominatorData.id

            const staker = await createStaker(ctx, {
                stashId,
                activeBond: nominatorData.bond,
                role: 'delegator',
            })
            newStakers.set(stashId, staker)


        }
    }


    for (const nominatorId of nominatorIds) {
        const staker = await getOrCreateStaker(ctx, nominatorId)

        if (staker) {
            nominators.set(
                nominatorId,
                new RoundNominator({
                    id: `${round.index}-${nominatorId}`,
                    round,
                    staker: staker,
                    stakerId: staker.id,
                    bond: staker.activeBond,
                    collatorsCount: delegationsData.reduce(
                        (count, d) => (d.nominatorId === nominatorId ? count++ : count),
                        0
                    ),
                })
            )
    }

    await ctx.store.save([...nominators.values()])

    const delegations = new Array<RoundNomination>(delegationsData.length)

    for (let i = 0; i < delegationsData.length; i++) {
        const collator = collators.get(delegationsData[i].collatorId)
        const delegator = await ctx.store.get(RoundNominator, { where: { id:
                                                            `${round.index}-${delegationsData[i].nominatorId}` } })
        const delStaker = await ctx.store.get(Staker, { where: { id: delegationsData[i].nominatorId } })
        assert(collator != null)
        assert(delStaker != null)
        ctx.log.info('here')
        ctx.log.info(`here 2 ${collator.staker}`)
        ctx.log.info(`here 23 ${delStaker.id}`)
        if (delegator) {
            const delegation = new RoundNomination({
                    id: `${round.index}-${collator.staker.id}-${delStaker.id}`,
                    round,
                    collator,
                    nominator: delegator,
                    amount: delegationsData[i].vote,
                })
            ctx.log.info('here 22')
            ctx.log.info(`here 2222${delegation.id}`)
            await ctx.store.save(delegation)
        } else {
            const nominatorR = new RoundNominator({
                    id: `${round.index}-${delegationsData[i].nominatorId}`,
                    round,
                    staker: delStaker,
                    stakerId: delStaker.id,
                    bond: delStaker.activeBond,
                    collatorsCount: 0,
                })
            await ctx.store.save(nominatorR)

            const delegation = new RoundNomination({
                    id: `${round.index}-${collator.staker.id}-${nominatorR.staker.id}`,
                    round,
                    collator,
                    nominator: nominatorR,
                    amount: delegationsData[i].vote,
                })
            await ctx.store.save(delegation)
        }
    }
}
}

