import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9110 from '../v9110'

export const relayDispatchQueues =  {
    /**
     *  The messages waiting to be handled by the relay-chain originating from a certain parachain.
     * 
     *  Note that some upward messages might have been already processed by the inclusion logic. E.g.
     *  channel management messages.
     * 
     *  The messages are processed in FIFO order.
     */
    v9110: new StorageType('Ump.RelayDispatchQueues', 'Default', [v9110.Id], sts.array(() => sts.bytes())) as RelayDispatchQueuesV9110,
}

/**
 *  The messages waiting to be handled by the relay-chain originating from a certain parachain.
 * 
 *  Note that some upward messages might have been already processed by the inclusion logic. E.g.
 *  channel management messages.
 * 
 *  The messages are processed in FIFO order.
 */
export interface RelayDispatchQueuesV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes[]
    get(block: Block, key: v9110.Id): Promise<(Bytes[] | undefined)>
    getMany(block: Block, keys: v9110.Id[]): Promise<(Bytes[] | undefined)[]>
    getKeys(block: Block): Promise<v9110.Id[]>
    getKeys(block: Block, key: v9110.Id): Promise<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<v9110.Id[]>
    getPairs(block: Block): Promise<[k: v9110.Id, v: (Bytes[] | undefined)][]>
    getPairs(block: Block, key: v9110.Id): Promise<[k: v9110.Id, v: (Bytes[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.Id, v: (Bytes[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<[k: v9110.Id, v: (Bytes[] | undefined)][]>
}

export const relayDispatchQueueSize =  {
    /**
     *  Size of the dispatch queues. Caches sizes of the queues in `RelayDispatchQueue`.
     * 
     *  First item in the tuple is the count of messages and second
     *  is the total length (in bytes) of the message payloads.
     * 
     *  Note that this is an auxiliary mapping: it's possible to tell the byte size and the number of
     *  messages only looking at `RelayDispatchQueues`. This mapping is separate to avoid the cost of
     *  loading the whole message queue if only the total size and count are required.
     * 
     *  Invariant:
     *  - The set of keys should exactly match the set of keys of `RelayDispatchQueues`.
     */
    v9110: new StorageType('Ump.RelayDispatchQueueSize', 'Default', [v9110.Id], sts.tuple(() => [sts.number(), sts.number()])) as RelayDispatchQueueSizeV9110,
}

/**
 *  Size of the dispatch queues. Caches sizes of the queues in `RelayDispatchQueue`.
 * 
 *  First item in the tuple is the count of messages and second
 *  is the total length (in bytes) of the message payloads.
 * 
 *  Note that this is an auxiliary mapping: it's possible to tell the byte size and the number of
 *  messages only looking at `RelayDispatchQueues`. This mapping is separate to avoid the cost of
 *  loading the whole message queue if only the total size and count are required.
 * 
 *  Invariant:
 *  - The set of keys should exactly match the set of keys of `RelayDispatchQueues`.
 */
export interface RelayDispatchQueueSizeV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, number]
    get(block: Block, key: v9110.Id): Promise<([number, number] | undefined)>
    getMany(block: Block, keys: v9110.Id[]): Promise<([number, number] | undefined)[]>
    getKeys(block: Block): Promise<v9110.Id[]>
    getKeys(block: Block, key: v9110.Id): Promise<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<v9110.Id[]>
    getPairs(block: Block): Promise<[k: v9110.Id, v: ([number, number] | undefined)][]>
    getPairs(block: Block, key: v9110.Id): Promise<[k: v9110.Id, v: ([number, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.Id, v: ([number, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<[k: v9110.Id, v: ([number, number] | undefined)][]>
}

export const needsDispatch =  {
    /**
     *  The ordered list of `ParaId`s that have a `RelayDispatchQueue` entry.
     * 
     *  Invariant:
     *  - The set of items from this vector should be exactly the set of the keys in
     *    `RelayDispatchQueues` and `RelayDispatchQueueSize`.
     */
    v9110: new StorageType('Ump.NeedsDispatch', 'Default', [], sts.array(() => v9110.Id)) as NeedsDispatchV9110,
}

/**
 *  The ordered list of `ParaId`s that have a `RelayDispatchQueue` entry.
 * 
 *  Invariant:
 *  - The set of items from this vector should be exactly the set of the keys in
 *    `RelayDispatchQueues` and `RelayDispatchQueueSize`.
 */
export interface NeedsDispatchV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9110.Id[]
    get(block: Block): Promise<(v9110.Id[] | undefined)>
}

export const nextDispatchRoundStartWith =  {
    /**
     *  This is the para that gets will get dispatched first during the next upward dispatchable queue
     *  execution round.
     * 
     *  Invariant:
     *  - If `Some(para)`, then `para` must be present in `NeedsDispatch`.
     */
    v9110: new StorageType('Ump.NextDispatchRoundStartWith', 'Optional', [], v9110.Id) as NextDispatchRoundStartWithV9110,
}

/**
 *  This is the para that gets will get dispatched first during the next upward dispatchable queue
 *  execution round.
 * 
 *  Invariant:
 *  - If `Some(para)`, then `para` must be present in `NeedsDispatch`.
 */
export interface NextDispatchRoundStartWithV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v9110.Id | undefined)>
}

export const overweight =  {
    /**
     *  The messages that exceeded max individual message weight budget.
     * 
     *  These messages stay there until manually dispatched.
     */
    v9110: new StorageType('Ump.Overweight', 'Optional', [sts.bigint()], sts.tuple(() => [v9110.Id, sts.bytes()])) as OverweightV9110,
}

/**
 *  The messages that exceeded max individual message weight budget.
 * 
 *  These messages stay there until manually dispatched.
 */
export interface OverweightV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<([v9110.Id, Bytes] | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<([v9110.Id, Bytes] | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: ([v9110.Id, Bytes] | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: ([v9110.Id, Bytes] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: ([v9110.Id, Bytes] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: ([v9110.Id, Bytes] | undefined)][]>
}

export const overweightCount =  {
    /**
     *  The number of overweight messages ever recorded in `Overweight` (and thus the lowest free
     *  index).
     */
    v9110: new StorageType('Ump.OverweightCount', 'Default', [], sts.bigint()) as OverweightCountV9110,
}

/**
 *  The number of overweight messages ever recorded in `Overweight` (and thus the lowest free
 *  index).
 */
export interface OverweightCountV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const counterForOverweight =  {
    /**
     * Counter for the related counted storage map
     */
    v9420: new StorageType('Ump.CounterForOverweight', 'Default', [], sts.number()) as CounterForOverweightV9420,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForOverweightV9420  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}
