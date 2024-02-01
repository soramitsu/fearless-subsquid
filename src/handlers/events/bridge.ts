import { BlockContext, Event } from '../../types'

export async function downwardMessagesProcessedHandler(
	ctx: BlockContext,
	event: Event<'ParachainSystem.DownwardMessagesProcessed'>
): Promise<void> {
}

export async function assetAddedToChannelHandler(
	ctx: BlockContext,
	event: Event<'XcmApp.AssetAddedToChannel'>
): Promise<void> {
}

export async function messageAcceptedHandler(
	ctx: BlockContext,
	event: Event<'SubstrateBridgeOutboundChannel.MessageAccepted'>
): Promise<void> {
}
