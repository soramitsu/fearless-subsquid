import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9090 from '../v9090'
import * as v9100 from '../v9100'

export const relayDispatchQueues =  {
    /**
     *  The messages waiting to be handled by the relay-chain originating from a certain parachain.
     * 
     *  Note that some upward messages might have been already processed by the inclusion logic. E.g.
     *  channel management messages.
     * 
     *  The messages are processed in FIFO order.
     */
    v9090: new StorageType('Ump.RelayDispatchQueues', 'Default', [v9090.ParaId], sts.array(() => v9090.UpwardMessage)) as RelayDispatchQueuesV9090,
}

/**
 *  The messages waiting to be handled by the relay-chain originating from a certain parachain.
 * 
 *  Note that some upward messages might have been already processed by the inclusion logic. E.g.
 *  channel management messages.
 * 
 *  The messages are processed in FIFO order.
 */
export interface RelayDispatchQueuesV9090  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9090.UpwardMessage[]
    get(block: Block, key: v9090.ParaId): Promise<(v9090.UpwardMessage[] | undefined)>
    getMany(block: Block, keys: v9090.ParaId[]): Promise<(v9090.UpwardMessage[] | undefined)[]>
    getKeys(block: Block): Promise<v9090.ParaId[]>
    getKeys(block: Block, key: v9090.ParaId): Promise<v9090.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9090.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9090.ParaId): AsyncIterable<v9090.ParaId[]>
    getPairs(block: Block): Promise<[k: v9090.ParaId, v: (v9090.UpwardMessage[] | undefined)][]>
    getPairs(block: Block, key: v9090.ParaId): Promise<[k: v9090.ParaId, v: (v9090.UpwardMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9090.ParaId, v: (v9090.UpwardMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9090.ParaId): AsyncIterable<[k: v9090.ParaId, v: (v9090.UpwardMessage[] | undefined)][]>
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
    v9090: new StorageType('Ump.RelayDispatchQueueSize', 'Default', [v9090.ParaId], sts.tuple(() => [sts.number(), sts.number()])) as RelayDispatchQueueSizeV9090,
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
export interface RelayDispatchQueueSizeV9090  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, number]
    get(block: Block, key: v9090.ParaId): Promise<([number, number] | undefined)>
    getMany(block: Block, keys: v9090.ParaId[]): Promise<([number, number] | undefined)[]>
    getKeys(block: Block): Promise<v9090.ParaId[]>
    getKeys(block: Block, key: v9090.ParaId): Promise<v9090.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9090.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9090.ParaId): AsyncIterable<v9090.ParaId[]>
    getPairs(block: Block): Promise<[k: v9090.ParaId, v: ([number, number] | undefined)][]>
    getPairs(block: Block, key: v9090.ParaId): Promise<[k: v9090.ParaId, v: ([number, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9090.ParaId, v: ([number, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9090.ParaId): AsyncIterable<[k: v9090.ParaId, v: ([number, number] | undefined)][]>
}

export const needsDispatch =  {
    /**
     *  The ordered list of `ParaId`s that have a `RelayDispatchQueue` entry.
     * 
     *  Invariant:
     *  - The set of items from this vector should be exactly the set of the keys in
     *    `RelayDispatchQueues` and `RelayDispatchQueueSize`.
     */
    v9090: new StorageType('Ump.NeedsDispatch', 'Default', [], sts.array(() => v9090.ParaId)) as NeedsDispatchV9090,
}

/**
 *  The ordered list of `ParaId`s that have a `RelayDispatchQueue` entry.
 * 
 *  Invariant:
 *  - The set of items from this vector should be exactly the set of the keys in
 *    `RelayDispatchQueues` and `RelayDispatchQueueSize`.
 */
export interface NeedsDispatchV9090  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9090.ParaId[]
    get(block: Block): Promise<(v9090.ParaId[] | undefined)>
}

export const nextDispatchRoundStartWith =  {
    /**
     *  This is the para that gets will get dispatched first during the next upward dispatchable queue
     *  execution round.
     * 
     *  Invariant:
     *  - If `Some(para)`, then `para` must be present in `NeedsDispatch`.
     */
    v9090: new StorageType('Ump.NextDispatchRoundStartWith', 'Optional', [], v9090.ParaId) as NextDispatchRoundStartWithV9090,
}

/**
 *  This is the para that gets will get dispatched first during the next upward dispatchable queue
 *  execution round.
 * 
 *  Invariant:
 *  - If `Some(para)`, then `para` must be present in `NeedsDispatch`.
 */
export interface NextDispatchRoundStartWithV9090  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v9090.ParaId | undefined)>
}

export const overweight =  {
    /**
     *  The messages that exceeded max individual message weight budget.
     * 
     *  These messages stay there until manually dispatched.
     */
    v9100: new StorageType('Ump.Overweight', 'Optional', [v9100.OverweightIndex], sts.tuple(() => [v9100.ParaId, sts.bytes()])) as OverweightV9100,
}

/**
 *  The messages that exceeded max individual message weight budget.
 * 
 *  These messages stay there until manually dispatched.
 */
export interface OverweightV9100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9100.OverweightIndex): Promise<([v9100.ParaId, Bytes] | undefined)>
    getMany(block: Block, keys: v9100.OverweightIndex[]): Promise<([v9100.ParaId, Bytes] | undefined)[]>
    getKeys(block: Block): Promise<v9100.OverweightIndex[]>
    getKeys(block: Block, key: v9100.OverweightIndex): Promise<v9100.OverweightIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9100.OverweightIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v9100.OverweightIndex): AsyncIterable<v9100.OverweightIndex[]>
    getPairs(block: Block): Promise<[k: v9100.OverweightIndex, v: ([v9100.ParaId, Bytes] | undefined)][]>
    getPairs(block: Block, key: v9100.OverweightIndex): Promise<[k: v9100.OverweightIndex, v: ([v9100.ParaId, Bytes] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9100.OverweightIndex, v: ([v9100.ParaId, Bytes] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9100.OverweightIndex): AsyncIterable<[k: v9100.OverweightIndex, v: ([v9100.ParaId, Bytes] | undefined)][]>
}

export const overweightCount =  {
    /**
     *  The number of overweight messages ever recorded in `Overweight` (and thus the lowest free
     *  index).
     */
    v9100: new StorageType('Ump.OverweightCount', 'Default', [], v9100.OverweightIndex) as OverweightCountV9100,
}

/**
 *  The number of overweight messages ever recorded in `Overweight` (and thus the lowest free
 *  index).
 */
export interface OverweightCountV9100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9100.OverweightIndex
    get(block: Block): Promise<(v9100.OverweightIndex | undefined)>
}

export const counterForOverweight =  {
    /**
     * Counter for the related counted storage map
     */
    v9381: new StorageType('Ump.CounterForOverweight', 'Default', [], sts.number()) as CounterForOverweightV9381,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForOverweightV9381  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}
