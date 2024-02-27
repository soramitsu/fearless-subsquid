import { events } from '../../../types/generated/merged'
import { Reward } from "../../../model";
import { BlockContext, Event } from "../../../types";
import { ERA_MS, FIRST_BLOCK_TIMESTAMP } from "../../../utils/consts";
import { getEventData } from "../../../utils/entities";
import { logStartProcessingEvent } from "../../../utils/logs";
import { createEventHistoryElement } from '../../../utils/history';

export async function xcmPalletAttemptedEventHandler(
	ctx: BlockContext,
	event: Event<'XcmPallet.Attempted'>
): Promise<void> {
	logStartProcessingEvent(ctx, event)

  const type = events.xcmPallet.attempted
	const data = getEventData(ctx, type, event)

  const status = 'outcome' in data ? data.outcome.__kind : data.__kind
  const value = 'outcome' in data ? data.outcome.value : data.value

	const historyData = {
    type: 'bridge',
    status,
    value
	}

	createEventHistoryElement(ctx, event, historyData)
}