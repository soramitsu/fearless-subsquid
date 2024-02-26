import { BlockContext, Event, Call } from '../types'
import { getBlockTimestamp, getCallId, getEventId, toCamelCase } from '../utils'
import {  HistoryElement, HistoryElementType } from '../model'

export const createCallHistoryElement = async (
	ctx: BlockContext,
	call: Call<any>,
  historyData: Record<string, any>
): Promise<void> => {
	createHistoryElement(ctx, call, historyData)
}

export const createEventHistoryElement = async (
	ctx: BlockContext,
	event: Event<any>,
  historyData: Record<string, any>
): Promise<void> => {
	createHistoryElement(ctx, event, historyData, false)
}

const createHistoryElement = async (
	ctx: BlockContext,
	entity: Call<any> | Event<any>,
  historyData: Record<string, any>,
	isCall = true
): Promise<void> => {
	let historyElement = new HistoryElement()

  historyElement.id = isCall ? getCallId(ctx, entity as Call<any>) : getEventId(ctx, entity as Event<any>)
	historyElement.timestamp = getBlockTimestamp(ctx)
	historyElement.type = isCall ? HistoryElementType.CALL  : HistoryElementType.EVENT

	historyElement.success = entity?.extrinsic?.success ?? false
	historyElement.data = {}

	historyElement.blockHeight = ctx.block.header.height
	historyElement.blockHash = ctx.block.header.hash

  historyElement.module = toCamelCase(entity.name.split('.')[0])
	historyElement.method = toCamelCase(entity.name.split('.')[1])
	historyElement.name = historyElement.module + '.' + historyElement.method

	historyElement.extrinsicIdx = entity.extrinsicIndex
	historyElement.extrinsicHash = entity.extrinsic?.hash

	historyElement.address = historyData?.address
	historyElement.transfer = historyData?.transfer ?? null
	historyElement.reward = historyData?.reward ?? null
	historyElement.data = historyData?.data ?? {}

	await ctx.store.save(historyElement)
}