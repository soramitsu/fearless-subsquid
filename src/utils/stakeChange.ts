import { BlockContext, Event, Call } from '../types'
import { getBlockTimestamp, getCallId, getEventId, toCamelCase } from '../utils'
import { StakeChange } from '../model'

export const createStakeChange = async (
	ctx: BlockContext,
	entity: Call<any> | Event<any>,
  stakeChangeData: Record<string, any>,
	isCall = true
): Promise<void> => {
	let stakeChange = new StakeChange()

  stakeChange.id = isCall ? getCallId(ctx, entity as Call<any>) : getEventId(ctx, entity as Event<any>)
	stakeChange.timestamp = getBlockTimestamp(ctx)
	stakeChange.success = entity?.extrinsic?.success ?? false

	stakeChange.blockHeight = ctx.block.header.height
	stakeChange.blockHash = ctx.block.header.hash.toString()

  stakeChange.module = toCamelCase(entity.name.split('.')[0])
	stakeChange.method = toCamelCase(entity.name.split('.')[1])
	stakeChange.name = stakeChange.module + '.' + stakeChange.method

	stakeChange = { ...stakeChange, ...stakeChangeData }

	await ctx.store.save(stakeChange)
}