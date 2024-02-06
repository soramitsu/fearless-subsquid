import { BlockContext, Event } from '../../types'
import { getEventData } from '../../utils/entities'
import { events } from '../../types/generated/merged'
import { createHistoryElement } from '../../utils/history'

export async function transactionFeePaidHandler(
	ctx: BlockContext,
	event: Event<'TransactionPayment.TransactionFeePaid'>
): Promise<void> {
  const type = events.transactionPayment.transactionFeePaid
	const data = getEventData(ctx, type, event)

  const actualFee = data.actualFee?.toString()
  const tip = data.tip?.toString()
  const who = data.who?.toString()

	const historyData = {
    actualFee,
    tip,
    who
  }

	createHistoryElement(ctx, event, historyData)
}

export async function xcmPalletAttemptedHandler(
	ctx: BlockContext,
	event: Event<'XcmPallet.Attempted'>
): Promise<void> {
  // const type = events.xcmPallet.attempted
	// const data = getEventData(ctx, type, event)
}

export async function messageAcceptedHandler(
	ctx: BlockContext,
	event: Event<'SubstrateBridgeOutboundChannel.MessageAccepted'>
): Promise<void> {
  const type = events.substrateBridgeOutboundChannel.messageAccepted
	const data = getEventData(ctx, type, event)

  const networkId = 'networkId' in data ? data.networkId : data[0]
  const batchNonce = 'batchNonce' in data ? data.batchNonce.toString() : null
  const messageNonce = 'messageNonce' in data ? data.messageNonce.toString() : null

	const historyData = {
    networkId: networkId.__kind,
    batchNonce,
    messageNonce
  }

	createHistoryElement(ctx, event, historyData)
}

export async function downwardMessagesProcessedHandler(
	ctx: BlockContext,
	event: Event<'ParachainSystem.DownwardMessagesProcessed'>
): Promise<void> {
  const type = events.parachainSystem.downwardMessagesProcessed
	const data = getEventData(ctx, type, event)

  const weightUsed = 'weightUsed' in data ? data.weightUsed : data[0]
  const refTime = 'refTime' in data ? data.refTime : null
  const proofSize = 'proofSize' in data ? data.proofSize : weightUsed

  const dmqHead = 'dmqHead' in data ? data.dmqHead : data[1]

	const historyData = {
    dmqHead,
    refTime,
    proofSize
  }

	createHistoryElement(ctx, event, historyData)
}

export async function systemExtrinsicFailedHandler(
	ctx: BlockContext,
	event: Event<'system.ExtrinsicFailed'>
): Promise<void> {
  const type = events.system.extrinsicFailed
	const data = getEventData(ctx, type, event)

  const dispatchError = 'dispatchError' in data ? data.dispatchError : data[0]
  const dispatchInfo = 'dispatchInfo' in data ? data.dispatchInfo : data[1]

  const classInfo = dispatchInfo?.class
  const paysFee = dispatchInfo?.paysFee
  const weight = dispatchInfo?.weight

  const proofSize = typeof weight === 'object' ? weight.proofSize.toString() : null
  const refTime = typeof weight === 'object' ? weight.refTime.toString() : null

	const historyData: Record<string, any> = {
    dispatchError,
    classInfo,
    paysFee,
    proofSize,
    refTime
  }

  if (typeof weight !== 'object') historyData.weight = weight.toString()

	createHistoryElement(ctx, event, historyData)
}

export async function systemExtrinsicSuccessHandler(
	ctx: BlockContext,
	event: Event<'system.ExtrinsicSuccess'>
): Promise<void> {
  const type = events.system.extrinsicSuccess
	const data = getEventData(ctx, type, event)

  const dispatchInfo = 'dispatchInfo' in data ? data.dispatchInfo : data

  const classInfo = dispatchInfo?.class
  const paysFee = dispatchInfo?.paysFee
  const weight = dispatchInfo?.weight

  const proofSize = typeof weight === 'object' ? weight.proofSize.toString() : null
  const refTime = typeof weight === 'object' ? weight.refTime.toString() : null

	const historyData: Record<string, any> = {
    classInfo,
    paysFee,
    proofSize,
    refTime
  }

  if (typeof weight !== 'object') historyData.weight = weight.toString()

	createHistoryElement(ctx, event, historyData)
}

export async function messageDispatchedHandler(
	ctx: BlockContext,
	event: Event<'SubstrateDispatch.MessageDispatched'>
): Promise<void> {
  const type = events.substrateDispatch.messageDispatched
	const data = getEventData(ctx, type, event)

  const messageId = data[0]
  const result = data[1]

  const sender = 'sender' in messageId ? messageId.sender : null
  const receiver = 'receiver' in messageId ? messageId.receiver : null
  const batchNonce = 'batchNonce' in messageId ? messageId.batchNonce ?? null : null
  const messageNonce = 'messageNonce' in messageId ? messageId.messageNonce : null

	const historyData: Record<string, any>  = {
    sender,
    receiver,
    batchNonce,
    messageNonce,
    result
  }

  if (!('sender' in messageId)) {
    historyData.direction = messageId.direction
    historyData.messageNonce = messageId.nonce
  }

	createHistoryElement(ctx, event, historyData)
}

export async function upwardMessageSentHandler(
	ctx: BlockContext,
	event: Event<'ParachainSystem.UpwardMessageSent'>
): Promise<void> {
  const type = events.parachainSystem.upwardMessageSent
	const data = getEventData(ctx, type, event)

  const messageHash = data.messageHash?.toString()

	const historyData = {
    messageHash
  }

	createHistoryElement(ctx, event, historyData)
}

export async function requestStatusUpdateHandler(
	ctx: BlockContext,
	event: Event<'BridgeProxy.RequestStatusUpdate'>
): Promise<void> {
  // const type = events.bridgeProxy.requestStatusUpdate
	// const data = getEventData(ctx, type, event)
}

export async function mintedHandler(
	ctx: BlockContext,
	event: Event<'ParachainBridgeApp.Minted'>
): Promise<void> {
  // const type = events.parachainBridgeApp.minted
	// const data = getEventData(ctx, type, event)
}

export async function assetAddedToChannelHandler(
	ctx: BlockContext,
	event: Event<'XcmApp.AssetAddedToChannel'>
): Promise<void> {
  const type = events.xcmApp.assetAddedToChannel
	const data = getEventData(ctx, type, event)

  const kind = data.__kind?.toString()

	const historyData = {
    kind
  }

	createHistoryElement(ctx, event, historyData)
}
