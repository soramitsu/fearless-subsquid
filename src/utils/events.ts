import { BlockContext, Event, EventName } from '../types'
import { Address, AssetId } from '../types'

type SpecificEvent<T extends EventName> = Event<T>

export type TransferEventData = {
	assetId: AssetId
	from: Address
	to: Address
	amount: bigint
}

export type DepositEventData = {
	assetId: AssetId
	to: Address
	amount: bigint
}

export function findEventsByExtrinsicHash<T extends EventName[]>(
	ctx: BlockContext,
	extrinsicHash: string,
	eventNames?: T,
): { [K in T[number]]: SpecificEvent<K> }[T[number]][] {
	const events = ctx.block.events.filter(
		(e) => (!eventNames || eventNames.includes(e.name as any)) && e.extrinsic?.hash === extrinsicHash,
	)
	// TODO: get rid of this unknown type
	return events as unknown as {
		[K in T[number]]: SpecificEvent<K>
	}[T[number]][]
}
