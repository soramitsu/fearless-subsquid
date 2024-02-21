import { SubstrateBatchProcessor } from '@subsquid/substrate-processor'
import { TypeormDatabase } from '@subsquid/typeorm-store'
import { eventNames, callNames } from './consts'
import { chain, startBlock, archive } from './config'
import { getSortedItems } from './utils/processor'
import { rewardedEventHandler, slashedEventHandler, stakersElectedEventHandler } from './handlers/events/staking'
import { lookupArchive } from '@subsquid/archive-registry'
import { transferAllowDeathCallHandler, transferCallHandler, transferKeepAliveCallHandler } from './handlers/calls/transfers'

export const processor = new SubstrateBatchProcessor()
.setRpcEndpoint({
	url: chain,
	rateLimit: 10
})
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

if (archive) processor.setGateway(lookupArchive(archive, { type: 'Substrate', release: 'ArrowSquid' }))

callNames.forEach((callName) => {
	processor.addCall({ name: [callName], extrinsic: true })
})

eventNames.forEach((eventName) => {
	processor.addEvent({ name: [eventName], extrinsic: true })
})

processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (ctx) => {
	const context = ctx

	for (let block of context.blocks) {
		let blockContext = {
			...context,
			block,
			now: performance.now(),
		}

		for (let item of getSortedItems(block)) {
			if (item.kind === 'call') {
				const { call } = item

        if (call.name !== call.extrinsic?.call?.name) continue

				if (call.name === 'Balances.transfer') await transferCallHandler(blockContext, call)

				if (call.name === 'Balances.transfer_keep_alive') await transferKeepAliveCallHandler(blockContext, call)

				if (call.name === 'Balances.transfer_allow_death') await transferAllowDeathCallHandler(blockContext, call)

				if (call.name === 'Staking.bond') await bondCallHandler(blockContext, call)

				if (call.name === 'Staking.unbond') await unbondCallHandler(blockContext, call)

      }

			if (item.kind === 'event') {
				const { event } = item

				if (event.name === 'Staking.Rewarded') await rewardedEventHandler(blockContext, event)
				if (event.name === 'Staking.Reward') await rewardedEventHandler(blockContext, event)

				if (event.name === 'Staking.Slashed') await slashedEventHandler(blockContext, event)
				if (event.name === 'Staking.Slash') await slashedEventHandler(blockContext, event)

				if (event.name === 'Staking.StakersElected') await stakersElectedEventHandler(blockContext, event)
				if (event.name === 'Staking.StakingElection') await stakersElectedEventHandler(blockContext, event)


			}
		}
	}
})
