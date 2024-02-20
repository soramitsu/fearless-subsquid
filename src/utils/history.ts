import { BlockContext, Event, Call } from '../types'
import { nToU8a } from '@polkadot/util'
import { getBlockTimestamp, getEventId, toCamelCase } from '../utils'
import { ExecutionResult, ExecutionError, HistoryElement, HistoryElementType } from '../model'

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
	entity: Event<any>,
  historyData: Record<string, any>,
	isCall = true
): Promise<void> => {
	let historyElement = new HistoryElement()

  historyElement.id = getEventId(ctx, entity)
	historyElement.type = isCall ? HistoryElementType.CALL  : HistoryElementType.EVENT
	historyElement.blockHeight = ctx.block.header.height
	historyElement.blockHash = ctx.block.header.hash.toString()
	historyElement.timestamp = getBlockTimestamp(ctx)
  historyElement.module = toCamelCase(entity.name.split('.')[0])
	historyElement.method = toCamelCase(entity.name.split('.')[1])
	historyElement.name = historyElement.module + '.' + historyElement.method

	if (isCall) historyElement = { ...historyElement, ...historyData }
	else historyElement.data = historyData

	const extrinsic = entity.extrinsic
	const success = extrinsic?.success

  if (success)
		historyElement.execution = new ExecutionResult({ success })
	else if (extrinsic) {
		const extrinsicError = extrinsic.error as any
		const error =
			extrinsicError.__kind === 'Module'
				? new ExecutionError({
						moduleErrorId: nToU8a(extrinsicError.value.error).at(-1),
						moduleErrorIndex: extrinsicError.value.index,
				  })
				: new ExecutionError({ nonModuleErrorMessage: JSON.stringify(extrinsicError) })

		historyElement.execution = new ExecutionResult({
			success,
			error,
		})
	}

	await ctx.store.save(historyElement)
}