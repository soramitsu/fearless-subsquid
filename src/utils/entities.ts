import { BlockContext, Call, Event } from '../types'
import { CallType as CallTypePolkadot, EventType as EventTypePolkadot } from '../types/generated/sora-polkadot/support'
import { CallType as CallTypeKusama, EventType as EventTypeKusama } from '../types/generated/sora-kusama/support'
import * as sts from '@subsquid/substrate-runtime/lib/sts'
import { decodeHex } from '@subsquid/util-internal-hex'
import * as ss58 from '@subsquid/ss58'

type VersionedObject = {
	[key: string]: any
}

type EntityItem = {
	kind: 'call',
	entity: Call<any>,
} | {
	kind: 'event',
	entity: Event<any>,
} | {
	kind: 'storage',
}

type ExtractType<T> = T extends sts.Type<infer U> ? U : never;
export type ExtractCallType<T> = ExtractType<
	T extends CallTypeKusama<infer U> ? U
	: T extends CallTypePolkadot<infer U> ? U
	: never
>
export type ExtractEventType<T> = ExtractType<
	T extends EventTypeKusama<infer U> ? U
	: T extends EventTypePolkadot<infer U> ? U
	: never
>

type NarrowVersions<T, V extends readonly string[]> = {
	[K in Extract<keyof T, `v${string}`> as K extends `v${infer R}`
		? R extends `${V[number]}`
			? K
			: never
		: K extends `v${infer R}`
		? R extends `${V[number]}`
			? K
			: never
		: never]: T[K]
}

function getVersionedObjectKeys(obj: any): string[] {
	return Object.keys(obj)
}

function getAllVersions(obj: any): readonly string[] {
	return getVersionedObjectKeys(obj)
		.filter((key) => key.startsWith('v') && !isNaN(parseInt(key.slice(1))))
		.map((key) => key.slice(1))
}

function isVersionedObject(obj: any): obj is VersionedObject {
    const keys = getVersionedObjectKeys(obj)
    return keys.some((key) => key.startsWith('v') && !isNaN(parseInt(key.slice(1))))
}

function getDataFromVersionedObject<T extends VersionedObject>(ctx: BlockContext, obj: T, entityItem: EntityItem): Exclude<T[keyof T], boolean> | null {
	if (!isVersionedObject(obj)) {
		throw new Error(`[${ctx.block.header.height}] Object does not conform to VersionedObject pattern`)
	}

	const entity = entityItem.kind === 'storage'
		? ctx.block.header
		: entityItem.entity

	for (const key of getVersionedObjectKeys(obj)) {
		if (obj[key].is(entity)) {

			return obj[key]
		}
	}

	return null
}

// Make sure to add "as const" after the versions array to properly narrow the entity object
export function narrowVersionedObject<T extends VersionedObject, V extends readonly string[]>(types: T, versions: V): NarrowVersions<T, V> {
	const narrowed: any = {}

	versions.forEach((version) => {
		const vKey = `v${version}`
		const versionType = types[vKey as keyof T]
		if (versionType) {
			narrowed[vKey] = versionType
		}
	})

	return narrowed as NarrowVersions<T, V>
}

export function findCurrentSpecVersion<T extends VersionedObject>(ctx: BlockContext, types: T, entityItem: EntityItem): string | null {
	const entity = entityItem.kind === 'storage'
		? ctx.block.header
		: entityItem.entity

	for (const key of getVersionedObjectKeys(types)) {
		if (key.startsWith('v') && !isNaN(parseInt(key[1])) && types[key].is(entity) === true) {
			return key.slice(1)
		}
	}
	return null
}

export function isCurrentVersionIncluded<T extends VersionedObject, V extends readonly string[]>(ctx: BlockContext, types: T, entityItem: EntityItem, versions: V): boolean {
	return versions.includes(findCurrentSpecVersion(ctx, types, entityItem) as any)
}

type IncludeVersions<T, V extends readonly string[]> = {
    [K in keyof T as K extends `v${infer R}` ? (R extends V[number] ? K : never) : never]: T[K]
}
type ExcludeVersions<T, V extends readonly string[]> = {
    [K in keyof T as K extends `v${infer R}` ? (R extends V[number] ? never : K) : K]: T[K]
}

// Make sure to add "as const" after the versions array to properly narrow the entity object

type FilterKind = 'include' | 'exclude'
type VersionFilter<
	T extends VersionedObject,
	K extends FilterKind = 'exclude',
	V extends readonly string[] = []
> = K extends 'include'
	? Exclude<IncludeVersions<T, V>[keyof IncludeVersions<T, V>], string>
	: Exclude<ExcludeVersions<T, V>[keyof ExcludeVersions<T, V>], string>
type FilterArgs<K, V> = { kind: K , versions: V }

export function getEntityRepresentation<T extends VersionedObject, K extends FilterKind, V extends readonly string[] = [], C extends boolean = false>(
	ctx: BlockContext,
	types: T,
	entityItem: EntityItem,
	filter: FilterArgs<K, V> = { kind: 'exclude' as unknown as K, versions: [] as unknown as V },
	couldBeNull?: C,
): C extends true ? VersionFilter<T, K, V> | null : VersionFilter<T, K, V> {
	const allVersions = getAllVersions(types) as V
	// Filter by the specified versions
	let versions = [] as unknown as V
	if (filter.kind === 'include') {
		versions = filter.versions
	} else if (filter.kind === 'exclude') {
		versions = allVersions.filter((v) => !filter.versions.includes(v)) as unknown as V
	}

	const narrowedObject = narrowVersionedObject(types, versions)
	let data = getDataFromVersionedObject(ctx, narrowedObject, entityItem)

	if (data === null) {
		if (entityItem.kind === 'call') {
			data = {
				decode(call: Call<any>) {
					return entityItem.entity.block._runtime.decodeJsonCallRecordArguments(call)
				}
			} as any
		} else if (entityItem.kind === 'event') {
			data = {
				decode(event: Event<any>) {
					return entityItem.entity.block._runtime.decodeJsonEventRecordArguments(event)
				}
			} as any
		}
	}
	if (data === null && !couldBeNull) {
		throw new Error(`[${ctx.block.header.height}] Entity data is null`)
	}

	return data as any
}

export function getCallRepresentation<
	T extends VersionedObject,
	K extends FilterKind,
	V extends readonly string[] = []
>(
	ctx: BlockContext,
	types: T,
	call: Call<any>,
	filter?: FilterArgs<K, V>,
) {
	return getEntityRepresentation<T, K, V, false>(ctx, types, { kind: 'call', entity: call }, filter)
}
export function decodeCall<R>(representation: R, call: Call<any>): ExtractCallType<R> {
	return (representation as any).decode(call)
}
export function getCallData<
	T extends VersionedObject,
	K extends FilterKind,
	V extends readonly string[] = []
>(
	ctx: BlockContext,
	types: T,
	call: Call<any>,
	filter?: FilterArgs<K, V>,
) {
	const representation = getCallRepresentation<T, K, V>(ctx, types, call, filter)
	return decodeCall(representation, call)
}

export function getEventRepresentation<
	T extends VersionedObject,
	K extends FilterKind,
	V extends readonly string[] = []
>(
	ctx: BlockContext,
	types: T,
	event: Event<any>,
	filter?: FilterArgs<K, V>,
) {
	return getEntityRepresentation<T, K, V, false>(ctx, types, { kind: 'event', entity: event }, filter)
}
export function decodeEvent<R>(representation: R, event: Event<any>): ExtractEventType<R> {
	return (representation as any).decode(event)
}
export function getEventData<
	T extends VersionedObject,
	K extends FilterKind,
	V extends readonly string[] = []
>(
	ctx: BlockContext,
	types: T,
	event: Event<any>,
	filter?: FilterArgs<K, V>,
) {
	const representation = getEventRepresentation<T, K, V>(ctx, types, event, filter)
	return decodeEvent(representation, event)
}

export function getStorageRepresentation<
	T extends VersionedObject,
	K extends FilterKind,
	V extends readonly string[] = []
>(
	ctx: BlockContext,
	types: T,
	filter?: FilterArgs<K, V>,
) {
	return getEntityRepresentation<T, K, V, true>(ctx, types, { kind: 'storage' }, filter, true)
}

const ss58codec = ss58.codec(config.prefix)

export function encodeId(id: Uint8Array) {
	return ss58codec.encode(typeof id === 'string' ? decodeHex(id) : id)
}

export function getOriginAccountId(origin: any): string | undefined {
	if (origin && origin.__kind === 'system' && origin.value.__kind === 'Signed') {
			const id = origin.value.value
			if (id.__kind === 'Id') {
					return encodeId(id.value)
			} else {
					return encodeId(id)
			}
	} else {
			return undefined
	}
}

export function isAdressSS58(address: Uint8Array) {
	switch (address.length) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 32:
			case 33:
					return true
			default:
					return false
	}
}