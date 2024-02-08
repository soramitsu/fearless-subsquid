import { SubstrateBatchProcessor } from '@subsquid/substrate-processor'
import typesBundle from './typesBundle.json'
import { TypeormDatabase } from '@subsquid/typeorm-store'
import { eventNames } from './consts'
import { chain, startBlock } from './config'
import { getSortedItems } from './utils/processor'
import { downwardMessagesProcessedHandler, messageAcceptedHandler, messageDispatchedHandler, mintedHandler, requestStatusUpdateHandler, systemExtrinsicFailedHandler, systemExtrinsicSuccessHandler, transactionFeePaidHandler, upwardMessageSentHandler, xcmPalletAttemptedHandler } from './handlers/events/bridge'
import { checkSkipBlock } from './utils/blocks'

export const processor = new SubstrateBatchProcessor()
	.setRpcEndpoint({
		url: chain,
		rateLimit: 10
	})
	.setTypesBundle(typesBundle as any)
	.setBlockRange({ from: startBlock })
	.setFields({
		extrinsic: {
			success: true,
			error: true,
			hash: true,
			signature: true,
		},
		block: {
			timestamp: true,
		}
	})


eventNames.forEach((eventName) => {
	processor.addEvent({ name: [eventName], extrinsic: true })
})

processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (ctx) => {
	const context = ctx

	for (let block of context.blocks) {
    const skip = checkSkipBlock(block.header.height)

    if (skip) return

		let blockContext = {
			...context,
			block,
			now: performance.now(),
		}

		for (let item of getSortedItems(block)) {
			if (item.kind === 'event') {
				const { event } = item

				if (event.name === 'TransactionPayment.TransactionFeePaid') await transactionFeePaidHandler(blockContext, event)

				if (event.name === 'XcmPallet.Attempted') await xcmPalletAttemptedHandler(blockContext, event) // TODO не доделан

				if (event.name === 'SubstrateBridgeOutboundChannel.MessageAccepted') await messageAcceptedHandler(blockContext, event)

				if (event.name === 'ParachainSystem.DownwardMessagesProcessed') await downwardMessagesProcessedHandler(blockContext, event)

				if (event.name === 'system.ExtrinsicFailed') await systemExtrinsicFailedHandler(blockContext, event)

				if (event.name === 'system.ExtrinsicSuccess') await systemExtrinsicSuccessHandler(blockContext, event)

				if (event.name === 'SubstrateDispatch.MessageDispatched') await messageDispatchedHandler(blockContext, event)

				if (event.name === 'ParachainSystem.UpwardMessageSent') await upwardMessageSentHandler(blockContext, event)

				if (event.name === 'BridgeProxy.RequestStatusUpdate') await requestStatusUpdateHandler(blockContext, event) // TODO не доделан

				if (event.name === 'ParachainBridgeApp.Minted') await mintedHandler(blockContext, event) // TODO не доделан
			}
		}
	}
})
