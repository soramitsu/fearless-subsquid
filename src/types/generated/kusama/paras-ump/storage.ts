import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9010 from '../v9010'

export const relayDispatchQueues =  {
    /**
     *  The messages waiting to be handled by the relay-chain originating from a certain parachain.
     * 
     *  Note that some upward messages might have been already processed by the inclusion logic. E.g.
     *  channel management messages.
     * 
     *  The messages are processed in FIFO order.
     */
    v9010: new StorageType('Ump.RelayDispatchQueues', 'Default', [v9010.ParaId], sts.array(() => v9010.UpwardMessage)) as RelayDispatchQueuesV9010,
}

/**
 *  The messages waiting to be handled by the relay-chain originating from a certain parachain.
 * 
 *  Note that some upward messages might have been already processed by the inclusion logic. E.g.
 *  channel management messages.
 * 
 *  The messages are processed in FIFO order.
 */
export interface RelayDispatchQueuesV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9010.UpwardMessage[]
    get(block: Block, key: v9010.ParaId): Promise<(v9010.UpwardMessage[] | undefined)>
    getMany(block: Block, keys: v9010.ParaId[]): Promise<(v9010.UpwardMessage[] | undefined)[]>
    getKeys(block: Block): Promise<v9010.ParaId[]>
    getKeys(block: Block, key: v9010.ParaId): Promise<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<v9010.ParaId[]>
    getPairs(block: Block): Promise<[k: v9010.ParaId, v: (v9010.UpwardMessage[] | undefined)][]>
    getPairs(block: Block, key: v9010.ParaId): Promise<[k: v9010.ParaId, v: (v9010.UpwardMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9010.ParaId, v: (v9010.UpwardMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<[k: v9010.ParaId, v: (v9010.UpwardMessage[] | undefined)][]>
}

export const relayDispatchQueueSize =  {
    /**
     *  Size of the dispatch queues. Caches sizes of the queues in `RelayDispatchQueue`.
     * 
     *  First item in the tuple is the count of messages and second
     *  is the total length (in bytes) of the message payloads.
     * 
     *  Note that this is an auxilary mapping: it's possible to tell the byte size and the number of
     *  messages only looking at `RelayDispatchQueues`. This mapping is separate to avoid the cost of
     *  loading the whole message queue if only the total size and count are required.
     * 
     *  Invariant:
     *  - The set of keys should exactly match the set of keys of `RelayDispatchQueues`.
     */
    v9010: new StorageType('Ump.RelayDispatchQueueSize', 'Default', [v9010.ParaId], sts.tuple(() => [sts.number(), sts.number()])) as RelayDispatchQueueSizeV9010,
}

/**
 *  Size of the dispatch queues. Caches sizes of the queues in `RelayDispatchQueue`.
 * 
 *  First item in the tuple is the count of messages and second
 *  is the total length (in bytes) of the message payloads.
 * 
 *  Note that this is an auxilary mapping: it's possible to tell the byte size and the number of
 *  messages only looking at `RelayDispatchQueues`. This mapping is separate to avoid the cost of
 *  loading the whole message queue if only the total size and count are required.
 * 
 *  Invariant:
 *  - The set of keys should exactly match the set of keys of `RelayDispatchQueues`.
 */
export interface RelayDispatchQueueSizeV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, number]
    get(block: Block, key: v9010.ParaId): Promise<([number, number] | undefined)>
    getMany(block: Block, keys: v9010.ParaId[]): Promise<([number, number] | undefined)[]>
    getKeys(block: Block): Promise<v9010.ParaId[]>
    getKeys(block: Block, key: v9010.ParaId): Promise<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<v9010.ParaId[]>
    getPairs(block: Block): Promise<[k: v9010.ParaId, v: ([number, number] | undefined)][]>
    getPairs(block: Block, key: v9010.ParaId): Promise<[k: v9010.ParaId, v: ([number, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9010.ParaId, v: ([number, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<[k: v9010.ParaId, v: ([number, number] | undefined)][]>
}

export const needsDispatch =  {
    /**
     *  The ordered list of `ParaId`s that have a `RelayDispatchQueue` entry.
     * 
     *  Invariant:
     *  - The set of items from this vector should be exactly the set of the keys in
     *    `RelayDispatchQueues` and `RelayDispatchQueueSize`.
     */
    v9010: new StorageType('Ump.NeedsDispatch', 'Default', [], sts.array(() => v9010.ParaId)) as NeedsDispatchV9010,
}

/**
 *  The ordered list of `ParaId`s that have a `RelayDispatchQueue` entry.
 * 
 *  Invariant:
 *  - The set of items from this vector should be exactly the set of the keys in
 *    `RelayDispatchQueues` and `RelayDispatchQueueSize`.
 */
export interface NeedsDispatchV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9010.ParaId[]
    get(block: Block): Promise<(v9010.ParaId[] | undefined)>
}

export const nextDispatchRoundStartWith =  {
    /**
     *  This is the para that gets will get dispatched first during the next upward dispatchable queue
     *  execution round.
     * 
     *  Invariant:
     *  - If `Some(para)`, then `para` must be present in `NeedsDispatch`.
     */
    v9010: new StorageType('Ump.NextDispatchRoundStartWith', 'Optional', [], v9010.ParaId) as NextDispatchRoundStartWithV9010,
}

/**
 *  This is the para that gets will get dispatched first during the next upward dispatchable queue
 *  execution round.
 * 
 *  Invariant:
 *  - If `Some(para)`, then `para` must be present in `NeedsDispatch`.
 */
export interface NextDispatchRoundStartWithV9010  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v9010.ParaId | undefined)>
}
