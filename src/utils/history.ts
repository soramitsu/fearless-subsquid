import { BlockContext, Event } from '../types'
import { getBlockTimestamp, getEventId, toCamelCase } from '../utils'
import { HistoryElement, HistoryElementType } from '../model'

export const createHistoryElement = async (
	ctx: BlockContext,
	event: Event<any>,
  historyData: Record<string, any>
): Promise<void> => {
	const historyElement = new HistoryElement()

  historyElement.id = getEventId(ctx, event)
	historyElement.type = HistoryElementType.EVENT
	historyElement.blockHeight = ctx.block.header.height
	historyElement.blockHash = ctx.block.header.hash.toString()
	historyElement.timestamp = getBlockTimestamp(ctx)
  historyElement.module = toCamelCase(event.name.split('.')[0])
	historyElement.method = toCamelCase(event.name.split('.')[1])
	historyElement.name = historyElement.module + '.' + historyElement.method

	historyElement.data = historyData

	const extrinsic = event.extrinsic
	const success = extrinsic?.success ?? false

	historyElement.success = success

	await ctx.store.save(historyElement)
}