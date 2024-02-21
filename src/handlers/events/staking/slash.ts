import { BlockContext, Event } from '../../../types'
import { getEventData, encodeId } from '../../../utils/entities'
import { events } from '../../../types/generated/merged'
import { createEventHistoryElement } from '../../../utils/history'
import { logStartProcessingEvent } from '../../../utils/logs'
import { handleAccumulatedStake } from '../../../utils/staking'

export async function slashEventHandler(
	ctx: BlockContext,
	event: Event<'Staking.Slashed'>
): Promise<void> {
	// logStartProcessingEvent(ctx, event)

  // const type = events.transactionPayment.transactionFeePaid
	// const data = getEventData(ctx, type, event)
  // const accumulatedAmount = await handleAccumulatedStake(ctx, data);

	// const historyData = {
	// 	id: ctx.event.id,
  //   timestamp: ctx.block.header.timestamp,
  //   blockNumber: ctx.block.header.height,
  //   extrinsicHash: ctx.event.extrinsic?.hash,
  //   address: encodeId(data.account),
  //   amount: data.amount,
  //   type: 'slashed',
  //   accumulatedAmount,
	// }

	// createEventHistoryElement(ctx, event, historyData)
}