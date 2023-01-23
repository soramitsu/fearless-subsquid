import { UnknownVersionError } from '../../../common/errors'
import { ParachainStakingNewRoundEvent } from '../../../types/generated/events'
import { ParachainStakingNominatorStateStorage } from '../../../types/generated/storage'
import { EventContext, EventHandlerContext } from '../../types/contexts'
import { Round, RoundCollator, RoundNomination, RoundNominator, Collator,
  Delegator } from '../../../model'
import assert from 'assert'
import storage from '../../../storage'
import { getCollatorsData } from '../../util/stakers'
import { getOrCreateStakers, getOrCreateStaker } from '../../util/entities'
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
        const new_collator = await getOrCreateStaker(ctx,collatorData.id)
        if (new_collator) {
        const collator_entity = new RoundCollator({
                        id: `${round.index}-${collatorData.id}`,
                        round,
                        staker: new_collator,
                        ownBond: collatorData.bond,
                        totalBond: totalBond,
                        rewardAmount: DefaultCollatorCommission,
                        nominatorsCount: 0,
                    })
        await ctx.store.save(collator_entity)
        }
    }

    const nominators = new Map<string, RoundNominator>()

    const nominatorStakers = new Map((await getOrCreateStakers(ctx, nominatorIds)).map((s) => [s.id, s]))

    for (const nominatorId of nominatorIds) {
        const staker = await getOrCreateStaker(ctx,nominatorId)

        if (staker) {
            nominators.set(
            nominatorId,
            new RoundNominator({
                id: `${round.index}-${nominatorId}`,
                round,
                staker,
                bond: staker.activeBond,
                collatorsCount: 0,
            })
        )
        }
    }

    await ctx.store.save([...nominators.values()])
    const delegations = new Array<RoundNomination>(delegationsData.length)

    for (let i = 0; i < delegationsData.length; i++) {
        const collator = collators.get(delegationsData[i].collatorId)
        const nominator = nominators.get(delegationsData[i].nominatorId)
        if (!collator) {
            const collator = await getOrCreateStaker(ctx,delegationsData[i].collatorId)
        }
        if (collator && nominator ) {
            const delegation = new RoundNomination({
                id: `${round.index}-${collator.staker.id}-${nominator.staker.id}`,
                round,
                collator,
                nominator,
                amount: delegationsData[i].vote,
            })
            await ctx.store.save(delegation)
        }
    }
}
