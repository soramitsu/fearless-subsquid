import { events } from '../../../types/generated/merged'
import { Reward } from "../../../model";
import { BlockContext, Event } from "../../../types";
import { ERA_MS, FIRST_BLOCK_TIMESTAMP } from "../../../utils/consts";
import { getEventData } from "../../../utils/entities";
import { logStartProcessingEvent } from "../../../utils/logs";
import { createEventHistoryElement } from '../../../utils/history';

export async function messageQueueProcessedEventHandler(
	ctx: BlockContext,
	event: Event<'MessageQueue.Processed'>
): Promise<void> {
	logStartProcessingEvent(ctx, event)

  const type = events.messageQueue.processed
	const data = getEventData(ctx, type, event)

  const id = data.id
  const success = data.success

  const origin = data.origin
  const weightUsed = data.weightUsed

	const historyData = {
    type: 'bridge',
    id,
    success,
    origin,
    weightUsed
	}

	await createEventHistoryElement(ctx, event, historyData)
}