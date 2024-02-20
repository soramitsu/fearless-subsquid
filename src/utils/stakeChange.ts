import { BlockContext, Event, Call } from '../types'
import { getBlockTimestamp, getEventId, toCamelCase } from '../utils'
import { StakeChange } from '../model'

const createHistoryElement = async (
	ctx: BlockContext,
	entity: Event<any>,
  historyData: Record<string, any>,
	isCall = true
): Promise<void> => {
	let stakeChange = new StakeChange()

  stakeChange.id = getEventId(ctx, entity)
	stakeChange.blockHeight = ctx.block.header.height
	stakeChange.blockHash = ctx.block.header.hash.toString()
	stakeChange.timestamp = getBlockTimestamp(ctx)
  stakeChange.module = toCamelCase(entity.name.split('.')[0])
	stakeChange.method = toCamelCase(entity.name.split('.')[1])
	stakeChange.name = stakeChange.module + '.' + stakeChange.method

	stakeChange = { ...stakeChange, ...historyData }

	await ctx.store.save(stakeChange)
}