import { events } from '../../../types/generated/merged'
import { Reward } from "../../../model";
import { BlockContext, Event } from "../../../types";
import { ERA_MS, FIRST_BLOCK_TIMESTAMP } from "../../../utils/consts";
import { encodeId, getEventData } from "../../../utils/entities";
import { logStartProcessingEvent } from "../../../utils/logs";
import { createEventHistoryElement } from '../../../utils/history';

export async function rewardEventHandler(
	ctx: BlockContext,
	event: Event<'Staking.Rewarded'>
): Promise<void> {
	// logStartProcessingEvent(ctx, event)

  // const type = events.staking.reward
	// const data = getEventData(ctx, type, event)

  // const timestamp = ctx.block.header.timestamp ?? 0
  // const era = Math.ceil((timestamp - FIRST_BLOCK_TIMESTAMP) / ERA_MS);

  // const reward = new Reward({
  //   amount: data.amount,
  //   isReward: true,
  //   era,
  //   eventIdx: ctx.event.id,
  //   stash: encodeId(data.account),
  //   validator: ctx.block.validator
  // })

	// const historyData = {
	// 	id: ctx.event.id,
  //   extrinsicHash: ctx.event.extrinsic?.hash,
  //   extrinsicIdx: ctx.event.extrinsic?.id,
  //   timestamp,
  //   blockNumber: ctx.block.header.height,
  //   validator: ctx.block.validator,
  //   amount: data.amount,
  //   accountId: encodeId(data.account),
  //   reward
	// }

	// createEventHistoryElement(ctx, event, historyData)
}