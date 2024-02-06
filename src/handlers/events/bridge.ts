import { BlockContext, Event } from '../../types'
import { getEventData } from '../../utils/entities'
import { events } from '../../types/generated/merged'
import { nToU8a } from '@polkadot/util'
import { getBlockTimestamp, getEventId } from '../../utils'
import { ExecutionResult, ExecutionError, HistoryElement, HistoryElementType } from '../../model'

export async function downwardMessagesProcessedHandler(
	ctx: BlockContext,
	event: Event<'ParachainSystem.DownwardMessagesProcessed'>
): Promise<void> {
	// await ctx.store.save(stakingReward)
}


export async function assetAddedToChannelHandler(
	ctx: BlockContext,
	event: Event<'XcmApp.AssetAddedToChannel'>
): Promise<void> {
	// await ctx.store.save(stakingReward)
}

export async function messageAcceptedHandler(
	ctx: BlockContext,
	event: Event<'SubstrateBridgeOutboundChannel.MessageAccepted'>
): Promise<void> {
  const type = events.substrateBridgeOutboundChannel.messageAccepted
	const data = getEventData(ctx, type, event)

  console.log('data', data);

  if (Array.isArray(data)) return // TODO v1 полкадота не обрабатывается

  const networkId = data.networkId
  const batchNonce = data.batchNonce.toString()
  const messageNonce = data.messageNonce.toString()

	const historyData = {
    networkId,
    batchNonce,
    messageNonce
  }

	createHistoryElement(ctx, event, historyData)
}

export const createHistoryElement = async (
	ctx: BlockContext,
	event: Event<'SubstrateBridgeOutboundChannel.MessageAccepted'>,
  historyData: Record<string, any>
): Promise<void> => {
	const historyElement = new HistoryElement()

  historyElement.id = getEventId(ctx, event)
	historyElement.type = HistoryElementType.EVENT
	historyElement.blockHeight = ctx.block.header.height
	historyElement.blockHash = ctx.block.header.hash.toString()
	historyElement.timestamp = getBlockTimestamp(ctx)
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