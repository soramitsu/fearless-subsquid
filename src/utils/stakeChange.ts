import { BlockContext, Event, Call } from '../types'
import { getBlockTimestamp, getEventId, toCamelCase } from '../utils'
import { StakeChange } from '../model'

const createHistoryElement = async (
	ctx: BlockContext,
	entity: Event<any>,
  historyData: Record<string, any>,
	isCall = true
): Promise<void> => {
	let historyElement = new StakeChange()

  historyElement.id = getEventId(ctx, entity)
	historyElement.blockHeight = ctx.block.header.height
	historyElement.blockHash = ctx.block.header.hash.toString()
	historyElement.timestamp = getBlockTimestamp(ctx)
  historyElement.module = toCamelCase(entity.name.split('.')[0])
	historyElement.method = toCamelCase(entity.name.split('.')[1])
	historyElement.name = historyElement.module + '.' + historyElement.method

	historyElement = { ...historyElement, ...historyData }

	await ctx.store.save(historyElement)
}