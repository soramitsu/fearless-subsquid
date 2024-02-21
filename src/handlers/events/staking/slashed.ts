import { BlockContext, Event } from '../../../types'
import { getEventData } from '../../../utils/entities'
import { events } from '../../../types/generated/merged'
import { createEventHistoryElement } from '../../../utils/history'
import { logStartProcessingEvent } from '../../../utils/logs'
import { handleAccumulatedStake } from '../../../utils/staking'

export async function slashedEventHandler(
	ctx: BlockContext,
	event: Event<'Staking.Slash'>
): Promise<void> {
	logStartProcessingEvent(ctx, event)

  const type = events.staking.slashed
	const data = getEventData(ctx, type, event)

  const address = 'staker' in data ? data.staker : data[0]
  const amount = 'amount' in data ? data.amount : data[1]

  const accumulatedAmount = await handleAccumulatedStake(ctx, { address, amount });

	const historyData = {
    amount: amount.toString(),
    address,
    type: 'slashed',
    accumulatedAmount,
	}

	createEventHistoryElement(ctx, event, historyData)
}