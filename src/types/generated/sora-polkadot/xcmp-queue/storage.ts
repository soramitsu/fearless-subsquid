import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'

export const inboundXcmpStatus =  {
    /**
     *  Status of the inbound XCMP channels.
     */
    v1: new StorageType('XcmpQueue.InboundXcmpStatus', 'Default', [], sts.array(() => v1.InboundChannelDetails)) as InboundXcmpStatusV1,
}

/**
 *  Status of the inbound XCMP channels.
 */
export interface InboundXcmpStatusV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.InboundChannelDetails[]
    get(block: Block): Promise<(v1.InboundChannelDetails[] | undefined)>
}

export const inboundXcmpMessages =  {
    /**
     *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
     */
    v1: new StorageType('XcmpQueue.InboundXcmpMessages', 'Default', [v1.Id, sts.number()], sts.bytes()) as InboundXcmpMessagesV1,
}

/**
 *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
 */
export interface InboundXcmpMessagesV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
    get(block: Block, key1: v1.Id, key2: number): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: [v1.Id, number][]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<[v1.Id, number][]>
    getKeys(block: Block, key1: v1.Id): Promise<[v1.Id, number][]>
    getKeys(block: Block, key1: v1.Id, key2: number): Promise<[v1.Id, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1.Id, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.Id): AsyncIterable<[v1.Id, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.Id, key2: number): AsyncIterable<[v1.Id, number][]>
    getPairs(block: Block): Promise<[k: [v1.Id, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key1: v1.Id): Promise<[k: [v1.Id, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key1: v1.Id, key2: number): Promise<[k: [v1.Id, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1.Id, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.Id): AsyncIterable<[k: [v1.Id, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.Id, key2: number): AsyncIterable<[k: [v1.Id, number], v: (Bytes | undefined)][]>
}

export const outboundXcmpStatus =  {
    /**
     *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
     *  and last outbound message. If the two indices are equal, then it indicates an empty
     *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
     *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
     *  case of the need to send a high-priority signal message this block.
     *  The bool is true if there is a signal message waiting to be sent.
     */
    v1: new StorageType('XcmpQueue.OutboundXcmpStatus', 'Default', [], sts.array(() => v1.OutboundChannelDetails)) as OutboundXcmpStatusV1,
}

/**
 *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
 *  and last outbound message. If the two indices are equal, then it indicates an empty
 *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
 *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
 *  case of the need to send a high-priority signal message this block.
 *  The bool is true if there is a signal message waiting to be sent.
 */
export interface OutboundXcmpStatusV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.OutboundChannelDetails[]
    get(block: Block): Promise<(v1.OutboundChannelDetails[] | undefined)>
}

export const outboundXcmpMessages =  {
    /**
     *  The messages outbound in a given XCMP channel.
     */
    v1: new StorageType('XcmpQueue.OutboundXcmpMessages', 'Default', [v1.Id, sts.number()], sts.bytes()) as OutboundXcmpMessagesV1,
}

/**
 *  The messages outbound in a given XCMP channel.
 */
export interface OutboundXcmpMessagesV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
    get(block: Block, key1: v1.Id, key2: number): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: [v1.Id, number][]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<[v1.Id, number][]>
    getKeys(block: Block, key1: v1.Id): Promise<[v1.Id, number][]>
    getKeys(block: Block, key1: v1.Id, key2: number): Promise<[v1.Id, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1.Id, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.Id): AsyncIterable<[v1.Id, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.Id, key2: number): AsyncIterable<[v1.Id, number][]>
    getPairs(block: Block): Promise<[k: [v1.Id, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key1: v1.Id): Promise<[k: [v1.Id, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key1: v1.Id, key2: number): Promise<[k: [v1.Id, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1.Id, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.Id): AsyncIterable<[k: [v1.Id, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.Id, key2: number): AsyncIterable<[k: [v1.Id, number], v: (Bytes | undefined)][]>
}

export const signalMessages =  {
    /**
     *  Any signal messages waiting to be sent.
     */
    v1: new StorageType('XcmpQueue.SignalMessages', 'Default', [v1.Id], sts.bytes()) as SignalMessagesV1,
}

/**
 *  Any signal messages waiting to be sent.
 */
export interface SignalMessagesV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
    get(block: Block, key: v1.Id): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: v1.Id[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<v1.Id[]>
    getKeys(block: Block, key: v1.Id): Promise<v1.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.Id): AsyncIterable<v1.Id[]>
    getPairs(block: Block): Promise<[k: v1.Id, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: v1.Id): Promise<[k: v1.Id, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.Id, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.Id): AsyncIterable<[k: v1.Id, v: (Bytes | undefined)][]>
}

export const queueConfig =  {
    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    v1: new StorageType('XcmpQueue.QueueConfig', 'Default', [], v1.QueueConfigData) as QueueConfigV1,
}

/**
 *  The configuration which controls the dynamics of the outbound queue.
 */
export interface QueueConfigV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.QueueConfigData
    get(block: Block): Promise<(v1.QueueConfigData | undefined)>
}

export const overweight =  {
    /**
     *  The messages that exceeded max individual message weight budget.
     * 
     *  These message stay in this storage map until they are manually dispatched via
     *  `service_overweight`.
     */
    v1: new StorageType('XcmpQueue.Overweight', 'Optional', [sts.bigint()], sts.tuple(() => [v1.Id, sts.number(), sts.bytes()])) as OverweightV1,
}

/**
 *  The messages that exceeded max individual message weight budget.
 * 
 *  These message stay in this storage map until they are manually dispatched via
 *  `service_overweight`.
 */
export interface OverweightV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<([v1.Id, number, Bytes] | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<([v1.Id, number, Bytes] | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: ([v1.Id, number, Bytes] | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: ([v1.Id, number, Bytes] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: ([v1.Id, number, Bytes] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: ([v1.Id, number, Bytes] | undefined)][]>
}

export const overweightCount =  {
    /**
     *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
     *  available free overweight index.
     */
    v1: new StorageType('XcmpQueue.OverweightCount', 'Default', [], sts.bigint()) as OverweightCountV1,
}

/**
 *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
 *  available free overweight index.
 */
export interface OverweightCountV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const queueSuspended =  {
    /**
     *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
     */
    v1: new StorageType('XcmpQueue.QueueSuspended', 'Default', [], sts.boolean()) as QueueSuspendedV1,
}

/**
 *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
 */
export interface QueueSuspendedV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const counterForOverweight =  {
    /**
     * Counter for the related counted storage map
     */
    v10: new StorageType('XcmpQueue.CounterForOverweight', 'Default', [], sts.number()) as CounterForOverweightV10,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForOverweightV10  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}
