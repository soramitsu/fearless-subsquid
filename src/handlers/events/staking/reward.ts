import { events } from '../../../types/generated/merged'
import { Reward } from "../../../model";
import { BlockContext, Event } from "../../../types";
import { ERA_MS, FIRST_BLOCK_TIMESTAMP } from "../../../utils/consts";
import { getEventData } from "../../../utils/entities";
import { logStartProcessingEvent } from "../../../utils/logs";
import { createEventHistoryElement } from '../../../utils/history';

export async function rewardEventHandler(
	ctx: BlockContext,
	event: Event<'Staking.Rewarded'>
): Promise<void> {
	logStartProcessingEvent(ctx, event)

  const type = events.staking.reward
	const data = getEventData(ctx, type, event)

  if (typeof data[0] !== 'string') return;

  const address = data[0]
  const amount = data[1].toString()

  const timestamp = ctx.block.header.timestamp ?? 0
  const era = Math.ceil((timestamp - FIRST_BLOCK_TIMESTAMP) / ERA_MS);

  const reward = new Reward({
    amount,
    era,
    isReward: true,
    stash: address,
    eventIdx: event.id,
  })

	const historyData = {
    address,
    reward
	}

	createEventHistoryElement(ctx, event, historyData)
}