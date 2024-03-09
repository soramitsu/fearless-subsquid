import { events } from '../../../types/generated/merged'
import { Reward } from "../../../model";
import { BlockContext, Event } from "../../../types";
import { ERA_MS, FIRST_BLOCK_TIMESTAMP } from "../../../utils/consts";
import { getEventData } from "../../../utils/entities";
import { logStartProcessingEvent } from "../../../utils/logs";
import { createEventHistoryElement } from '../../../utils/history';
import { toAddress } from '../../../utils';

export async function rewardedEventHandler(
	ctx: BlockContext,
	event: Event<'Staking.Rewarded'>
): Promise<void> {
	logStartProcessingEvent(ctx, event)

  const type = events.staking.rewarded
	const data = getEventData(ctx, type, event)

  const address = toAddress('stash' in data ? data.stash : data[0])
  const amount = 'amount' in data ? data.amount : data[1]

  const timestamp = ctx.block.header.timestamp ?? 0
  const era = Math.ceil((timestamp - FIRST_BLOCK_TIMESTAMP) / ERA_MS);

  const reward = new Reward({
    amount: amount.toString(),
    era,
    stash: address,
  })

	const historyData = {
    address,
    type: 'rewarded',
    reward
	}

	await createEventHistoryElement(ctx, event, historyData)
}