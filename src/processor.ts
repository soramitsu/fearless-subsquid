import { SubstrateBatchProcessor } from '@subsquid/substrate-processor'
import typesBundle from './typesBundle.json'
import { TypeormDatabase } from '@subsquid/typeorm-store'
import { eventNames } from './consts'
import { chain, startBlock } from './config'
import { getSortedItems } from './utils/processor'
import { assetAddedToChannelHandler, downwardMessagesProcessedHandler, messageAcceptedHandler } from './handlers/events/bridge'

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

// callNames.forEach((callName) => {
// 	processor.addCall({ name: [callName], extrinsic: true })
// })

eventNames.forEach((eventName) => {
	processor.addEvent({ name: [eventName], extrinsic: true })
})

processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (ctx) => {
	ctx._chain
	const context = ctx

	for (let block of context.blocks) {
		let blockContext = {
			...context,
			block,
			now: performance.now(),
		}

		for (let item of getSortedItems(block)) {
			// if (item.kind === 'call') {
			// 	const { call } = item

			// 	if (call.name !== call.extrinsic?.call?.name) continue
			// }

			if (item.kind === 'event') {
				const { event } = item

				if (event.name === 'SubstrateBridgeOutboundChannel.MessageAccepted') await messageAcceptedHandler(blockContext, event)

				if (event.name === 'ParachainSystem.DownwardMessagesProcessed') await downwardMessagesProcessedHandler(blockContext, event)

				if (event.name === 'XcmApp.') await assetAddedToChannelHandler(blockContext, event)
			}
		}
	}
})
