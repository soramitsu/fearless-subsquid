import { BlockContext, Event } from '../../types'
import { getEventData } from '../../utils/entities'
import { events } from '../../types/generated/merged'
import { createEventHistoryElement } from '../../utils/history'
import { logStartProcessingEvent } from '../../utils/logs'

export async function rewardedEventHandler(
	ctx: BlockContext,
	event: Event<'Staking.Rewarded' | 'Staking.Reward'>
): Promise<void> {
	logStartProcessingEvent(ctx, event)

  const type = events.transactionPayment.transactionFeePaid
	const data = getEventData(ctx, type, event)

	const historyData = {}

	createEventHistoryElement(ctx, event, historyData)
}

export async function slashedEventHandler(
	ctx: BlockContext,
	event: Event<'Staking.Slashed' | 'Staking.Slash'>
): Promise<void> {
	logStartProcessingEvent(ctx, event)

  const type = events.transactionPayment.transactionFeePaid
	const data = getEventData(ctx, type, event)

	const historyData = {}

	createEventHistoryElement(ctx, event, historyData)
}

export async function stakersElectedEventHandler(
	ctx: BlockContext,
	event: Event<'Staking.StakersElected' | 'Staking.StakingElection'>
): Promise<void> {
	logStartProcessingEvent(ctx, event)

  const type = events.transactionPayment.transactionFeePaid
	const data = getEventData(ctx, type, event)

	const historyData = {}

	createEventHistoryElement(ctx, event, historyData)
}