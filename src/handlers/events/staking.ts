import { BlockContext, Event } from '../../types'
import { getEventData, encodeId } from '../../utils/entities'
import { events } from '../../types/generated/merged'
import { createEventHistoryElement } from '../../utils/history'
import { logStartProcessingEvent } from '../../utils/logs'
import { ERA_MS, FIRST_BLOCK_TIMESTAMP } from '../../utils/consts'
import { handleAccumulatedStake } from '../../utils/staking'
import { Reward } from '../../model'

export async function rewardedEventHandler(
	ctx: BlockContext,
	event: Event<'Staking.Rewarded' | 'Staking.Reward'>
): Promise<void> {
	logStartProcessingEvent(ctx, event)

  const type = events.transactionPayment.transactionFeePaid
	const data = getEventData(ctx, type, event)

  const timestamp = ctx.block.header.timestamp ?? 0
  const era = Math.ceil((timestamp - FIRST_BLOCK_TIMESTAMP) / ERA_MS);

  const reward = new Reward({
    amount: data.amount,
    isReward: true,
    era,
    eventIdx: ctx.event.id,
    stash: encodeId(data.account),
    validator: ctx.block.validator
  })

	const historyData = {
		id: ctx.event.id,
    extrinsicHash: ctx.event.extrinsic?.hash,
    extrinsicIdx: ctx.event.extrinsic?.id,
    timestamp,
    blockNumber: ctx.block.header.height,
    validator: ctx.block.validator,
    amount: data.amount,
    accountId: encodeId(data.account),
    reward
	}

	createEventHistoryElement(ctx, event, historyData)
}

export async function slashedEventHandler(
	ctx: BlockContext,
	event: Event<'Staking.Slashed' | 'Staking.Slash'>
): Promise<void> {
	logStartProcessingEvent(ctx, event)

  const type = events.transactionPayment.transactionFeePaid
	const data = getEventData(ctx, type, event)
  const accumulatedAmount = await handleAccumulatedStake(ctx, data);

	const historyData = {
		id: ctx.event.id,
    timestamp: ctx.block.header.timestamp,
    blockNumber: ctx.block.header.height,
    extrinsicHash: ctx.event.extrinsic?.hash,
    address: encodeId(data.account),
    amount: data.amount,
    type: 'slashed',
    accumulatedAmount,
	}

	createEventHistoryElement(ctx, event, historyData)
}

export async function stakersElectedEventHandler(
	ctx: BlockContext,
	event: Event<'Staking.StakersElected' | 'Staking.StakingElection'>
): Promise<void> {
	logStartProcessingEvent(ctx, event)

  const type = events.transactionPayment.transactionFeePaid
	const data = getEventData(ctx, type, event)

  // const exposures = await storage.staking.getStakingErasStakersClipped(ctx, currentEraData.index!)

	// const historyData = {
	// 	id: `${id}-${address}`,
	// 	address,
	// 	era: currentEraData?.index,
	// 	own,
	// 	total,
	// 	others,
	// 	othersWho: others.map(({ who }) => who).join(' ')
	// }

	// exposures.forEach(async ([[, validatorId], { others: othersTemp, own, total }]) => {
  //   const others = othersTemp.map(({ value, who }) => new IndividualExposure({
  //     who: encodeId(who),
  //     value: value.toString()
  //   }))
  //   const address = encodeId(validatorId)

  //   const eraValidator = new EraValidatorInfo({
  //     id: `${id}-${address}`,
  //     address,
  //     era: currentEraData?.index,
  //     own,
  //     total,
  //     others,
  //     othersWho: others.map(({ who }) => who).join(' ')
  //   })

	// 	await createEventHistoryElement(ctx, event, historyData)
  // })

}