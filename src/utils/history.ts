import { BlockContext, Event } from '../types'
import { nToU8a } from '@polkadot/util'
import { getBlockTimestamp, getEventId, toCamelCase } from '../utils'
import { ExecutionResult, ExecutionError, HistoryElement, HistoryElementType } from '../model'

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