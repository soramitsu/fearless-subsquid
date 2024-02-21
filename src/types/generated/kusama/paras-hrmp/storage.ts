import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9010 from '../v9010'

export const hrmpOpenChannelRequests =  {
    /**
     *  The set of pending HRMP open channel requests.
     * 
     *  The set is accompanied by a list for iteration.
     * 
     *  Invariant:
     *  - There are no channels that exists in list but not in the set and vice versa.
     */
    v9010: new StorageType('Hrmp.HrmpOpenChannelRequests', 'Optional', [v9010.HrmpChannelId], v9010.HrmpOpenChannelRequest) as HrmpOpenChannelRequestsV9010,
}

/**
 *  The set of pending HRMP open channel requests.
 * 
 *  The set is accompanied by a list for iteration.
 * 
 *  Invariant:
 *  - There are no channels that exists in list but not in the set and vice versa.
 */
export interface HrmpOpenChannelRequestsV9010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9010.HrmpChannelId): Promise<(v9010.HrmpOpenChannelRequest | undefined)>
    getMany(block: Block, keys: v9010.HrmpChannelId[]): Promise<(v9010.HrmpOpenChannelRequest | undefined)[]>
    getKeys(block: Block): Promise<v9010.HrmpChannelId[]>
    getKeys(block: Block, key: v9010.HrmpChannelId): Promise<v9010.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9010.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9010.HrmpChannelId): AsyncIterable<v9010.HrmpChannelId[]>
    getPairs(block: Block): Promise<[k: v9010.HrmpChannelId, v: (v9010.HrmpOpenChannelRequest | undefined)][]>
    getPairs(block: Block, key: v9010.HrmpChannelId): Promise<[k: v9010.HrmpChannelId, v: (v9010.HrmpOpenChannelRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9010.HrmpChannelId, v: (v9010.HrmpOpenChannelRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9010.HrmpChannelId): AsyncIterable<[k: v9010.HrmpChannelId, v: (v9010.HrmpOpenChannelRequest | undefined)][]>
}

export const hrmpOpenChannelRequestsList =  {
    v9010: new StorageType('Hrmp.HrmpOpenChannelRequestsList', 'Default', [], sts.array(() => v9010.HrmpChannelId)) as HrmpOpenChannelRequestsListV9010,
}

export interface HrmpOpenChannelRequestsListV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9010.HrmpChannelId[]
    get(block: Block): Promise<(v9010.HrmpChannelId[] | undefined)>
}

export const hrmpOpenChannelRequestCount =  {
    /**
     *  This mapping tracks how many open channel requests are inititated by a given sender para.
     *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items that has `(X, _)`
     *  as the number of `HrmpOpenChannelRequestCount` for `X`.
     */
    v9010: new StorageType('Hrmp.HrmpOpenChannelRequestCount', 'Default', [v9010.ParaId], sts.number()) as HrmpOpenChannelRequestCountV9010,
}

/**
 *  This mapping tracks how many open channel requests are inititated by a given sender para.
 *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items that has `(X, _)`
 *  as the number of `HrmpOpenChannelRequestCount` for `X`.
 */
export interface HrmpOpenChannelRequestCountV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key: v9010.ParaId): Promise<(number | undefined)>
    getMany(block: Block, keys: v9010.ParaId[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<v9010.ParaId[]>
    getKeys(block: Block, key: v9010.ParaId): Promise<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<v9010.ParaId[]>
    getPairs(block: Block): Promise<[k: v9010.ParaId, v: (number | undefined)][]>
    getPairs(block: Block, key: v9010.ParaId): Promise<[k: v9010.ParaId, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9010.ParaId, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<[k: v9010.ParaId, v: (number | undefined)][]>
}

export const hrmpAcceptedChannelRequestCount =  {
    /**
     *  This mapping tracks how many open channel requests were accepted by a given recipient para.
     *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items `(_, X)` with
     *  `confirmed` set to true, as the number of `HrmpAcceptedChannelRequestCount` for `X`.
     */
    v9010: new StorageType('Hrmp.HrmpAcceptedChannelRequestCount', 'Default', [v9010.ParaId], sts.number()) as HrmpAcceptedChannelRequestCountV9010,
}

/**
 *  This mapping tracks how many open channel requests were accepted by a given recipient para.
 *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items `(_, X)` with
 *  `confirmed` set to true, as the number of `HrmpAcceptedChannelRequestCount` for `X`.
 */
export interface HrmpAcceptedChannelRequestCountV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key: v9010.ParaId): Promise<(number | undefined)>
    getMany(block: Block, keys: v9010.ParaId[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<v9010.ParaId[]>
    getKeys(block: Block, key: v9010.ParaId): Promise<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<v9010.ParaId[]>
    getPairs(block: Block): Promise<[k: v9010.ParaId, v: (number | undefined)][]>
    getPairs(block: Block, key: v9010.ParaId): Promise<[k: v9010.ParaId, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9010.ParaId, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<[k: v9010.ParaId, v: (number | undefined)][]>
}

export const hrmpCloseChannelRequests =  {
    /**
     *  A set of pending HRMP close channel requests that are going to be closed during the session change.
     *  Used for checking if a given channel is registered for closure.
     * 
     *  The set is accompanied by a list for iteration.
     * 
     *  Invariant:
     *  - There are no channels that exists in list but not in the set and vice versa.
     */
    v9010: new StorageType('Hrmp.HrmpCloseChannelRequests', 'Optional', [v9010.HrmpChannelId], sts.unit()) as HrmpCloseChannelRequestsV9010,
}

/**
 *  A set of pending HRMP close channel requests that are going to be closed during the session change.
 *  Used for checking if a given channel is registered for closure.
 * 
 *  The set is accompanied by a list for iteration.
 * 
 *  Invariant:
 *  - There are no channels that exists in list but not in the set and vice versa.
 */
export interface HrmpCloseChannelRequestsV9010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9010.HrmpChannelId): Promise<(null | undefined)>
    getMany(block: Block, keys: v9010.HrmpChannelId[]): Promise<(null | undefined)[]>
    getKeys(block: Block): Promise<v9010.HrmpChannelId[]>
    getKeys(block: Block, key: v9010.HrmpChannelId): Promise<v9010.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9010.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9010.HrmpChannelId): AsyncIterable<v9010.HrmpChannelId[]>
    getPairs(block: Block): Promise<[k: v9010.HrmpChannelId, v: (null | undefined)][]>
    getPairs(block: Block, key: v9010.HrmpChannelId): Promise<[k: v9010.HrmpChannelId, v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9010.HrmpChannelId, v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9010.HrmpChannelId): AsyncIterable<[k: v9010.HrmpChannelId, v: (null | undefined)][]>
}

export const hrmpCloseChannelRequestsList =  {
    v9010: new StorageType('Hrmp.HrmpCloseChannelRequestsList', 'Default', [], sts.array(() => v9010.HrmpChannelId)) as HrmpCloseChannelRequestsListV9010,
}

export interface HrmpCloseChannelRequestsListV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9010.HrmpChannelId[]
    get(block: Block): Promise<(v9010.HrmpChannelId[] | undefined)>
}

export const hrmpWatermarks =  {
    /**
     *  The HRMP watermark associated with each para.
     *  Invariant:
     *  - each para `P` used here as a key should satisfy `Paras::is_valid_para(P)` within a session.
     */
    v9010: new StorageType('Hrmp.HrmpWatermarks', 'Optional', [v9010.ParaId], v9010.BlockNumber) as HrmpWatermarksV9010,
}

/**
 *  The HRMP watermark associated with each para.
 *  Invariant:
 *  - each para `P` used here as a key should satisfy `Paras::is_valid_para(P)` within a session.
 */
export interface HrmpWatermarksV9010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9010.ParaId): Promise<(v9010.BlockNumber | undefined)>
    getMany(block: Block, keys: v9010.ParaId[]): Promise<(v9010.BlockNumber | undefined)[]>
    getKeys(block: Block): Promise<v9010.ParaId[]>
    getKeys(block: Block, key: v9010.ParaId): Promise<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<v9010.ParaId[]>
    getPairs(block: Block): Promise<[k: v9010.ParaId, v: (v9010.BlockNumber | undefined)][]>
    getPairs(block: Block, key: v9010.ParaId): Promise<[k: v9010.ParaId, v: (v9010.BlockNumber | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9010.ParaId, v: (v9010.BlockNumber | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<[k: v9010.ParaId, v: (v9010.BlockNumber | undefined)][]>
}

export const hrmpChannels =  {
    /**
     *  HRMP channel data associated with each para.
     *  Invariant:
     *  - each participant in the channel should satisfy `Paras::is_valid_para(P)` within a session.
     */
    v9010: new StorageType('Hrmp.HrmpChannels', 'Optional', [v9010.HrmpChannelId], v9010.HrmpChannel) as HrmpChannelsV9010,
}

/**
 *  HRMP channel data associated with each para.
 *  Invariant:
 *  - each participant in the channel should satisfy `Paras::is_valid_para(P)` within a session.
 */
export interface HrmpChannelsV9010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9010.HrmpChannelId): Promise<(v9010.HrmpChannel | undefined)>
    getMany(block: Block, keys: v9010.HrmpChannelId[]): Promise<(v9010.HrmpChannel | undefined)[]>
    getKeys(block: Block): Promise<v9010.HrmpChannelId[]>
    getKeys(block: Block, key: v9010.HrmpChannelId): Promise<v9010.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9010.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9010.HrmpChannelId): AsyncIterable<v9010.HrmpChannelId[]>
    getPairs(block: Block): Promise<[k: v9010.HrmpChannelId, v: (v9010.HrmpChannel | undefined)][]>
    getPairs(block: Block, key: v9010.HrmpChannelId): Promise<[k: v9010.HrmpChannelId, v: (v9010.HrmpChannel | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9010.HrmpChannelId, v: (v9010.HrmpChannel | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9010.HrmpChannelId): AsyncIterable<[k: v9010.HrmpChannelId, v: (v9010.HrmpChannel | undefined)][]>
}

export const hrmpIngressChannelsIndex =  {
    /**
     *  Ingress/egress indexes allow to find all the senders and receivers given the opposite
     *  side. I.e.
     * 
     *  (a) ingress index allows to find all the senders for a given recipient.
     *  (b) egress index allows to find all the recipients for a given sender.
     * 
     *  Invariants:
     *  - for each ingress index entry for `P` each item `I` in the index should present in `HrmpChannels`
     *    as `(I, P)`.
     *  - for each egress index entry for `P` each item `E` in the index should present in `HrmpChannels`
     *    as `(P, E)`.
     *  - there should be no other dangling channels in `HrmpChannels`.
     *  - the vectors are sorted.
     */
    v9010: new StorageType('Hrmp.HrmpIngressChannelsIndex', 'Default', [v9010.ParaId], sts.array(() => v9010.ParaId)) as HrmpIngressChannelsIndexV9010,
}

/**
 *  Ingress/egress indexes allow to find all the senders and receivers given the opposite
 *  side. I.e.
 * 
 *  (a) ingress index allows to find all the senders for a given recipient.
 *  (b) egress index allows to find all the recipients for a given sender.
 * 
 *  Invariants:
 *  - for each ingress index entry for `P` each item `I` in the index should present in `HrmpChannels`
 *    as `(I, P)`.
 *  - for each egress index entry for `P` each item `E` in the index should present in `HrmpChannels`
 *    as `(P, E)`.
 *  - there should be no other dangling channels in `HrmpChannels`.
 *  - the vectors are sorted.
 */
export interface HrmpIngressChannelsIndexV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9010.ParaId[]
    get(block: Block, key: v9010.ParaId): Promise<(v9010.ParaId[] | undefined)>
    getMany(block: Block, keys: v9010.ParaId[]): Promise<(v9010.ParaId[] | undefined)[]>
    getKeys(block: Block): Promise<v9010.ParaId[]>
    getKeys(block: Block, key: v9010.ParaId): Promise<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<v9010.ParaId[]>
    getPairs(block: Block): Promise<[k: v9010.ParaId, v: (v9010.ParaId[] | undefined)][]>
    getPairs(block: Block, key: v9010.ParaId): Promise<[k: v9010.ParaId, v: (v9010.ParaId[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9010.ParaId, v: (v9010.ParaId[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<[k: v9010.ParaId, v: (v9010.ParaId[] | undefined)][]>
}

export const hrmpEgressChannelsIndex =  {
    v9010: new StorageType('Hrmp.HrmpEgressChannelsIndex', 'Default', [v9010.ParaId], sts.array(() => v9010.ParaId)) as HrmpEgressChannelsIndexV9010,
}

export interface HrmpEgressChannelsIndexV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9010.ParaId[]
    get(block: Block, key: v9010.ParaId): Promise<(v9010.ParaId[] | undefined)>
    getMany(block: Block, keys: v9010.ParaId[]): Promise<(v9010.ParaId[] | undefined)[]>
    getKeys(block: Block): Promise<v9010.ParaId[]>
    getKeys(block: Block, key: v9010.ParaId): Promise<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<v9010.ParaId[]>
    getPairs(block: Block): Promise<[k: v9010.ParaId, v: (v9010.ParaId[] | undefined)][]>
    getPairs(block: Block, key: v9010.ParaId): Promise<[k: v9010.ParaId, v: (v9010.ParaId[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9010.ParaId, v: (v9010.ParaId[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<[k: v9010.ParaId, v: (v9010.ParaId[] | undefined)][]>
}

export const hrmpChannelContents =  {
    /**
     *  Storage for the messages for each channel.
     *  Invariant: cannot be non-empty if the corresponding channel in `HrmpChannels` is `None`.
     */
    v9010: new StorageType('Hrmp.HrmpChannelContents', 'Default', [v9010.HrmpChannelId], sts.array(() => v9010.InboundHrmpMessage)) as HrmpChannelContentsV9010,
}

/**
 *  Storage for the messages for each channel.
 *  Invariant: cannot be non-empty if the corresponding channel in `HrmpChannels` is `None`.
 */
export interface HrmpChannelContentsV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9010.InboundHrmpMessage[]
    get(block: Block, key: v9010.HrmpChannelId): Promise<(v9010.InboundHrmpMessage[] | undefined)>
    getMany(block: Block, keys: v9010.HrmpChannelId[]): Promise<(v9010.InboundHrmpMessage[] | undefined)[]>
    getKeys(block: Block): Promise<v9010.HrmpChannelId[]>
    getKeys(block: Block, key: v9010.HrmpChannelId): Promise<v9010.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9010.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9010.HrmpChannelId): AsyncIterable<v9010.HrmpChannelId[]>
    getPairs(block: Block): Promise<[k: v9010.HrmpChannelId, v: (v9010.InboundHrmpMessage[] | undefined)][]>
    getPairs(block: Block, key: v9010.HrmpChannelId): Promise<[k: v9010.HrmpChannelId, v: (v9010.InboundHrmpMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9010.HrmpChannelId, v: (v9010.InboundHrmpMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9010.HrmpChannelId): AsyncIterable<[k: v9010.HrmpChannelId, v: (v9010.InboundHrmpMessage[] | undefined)][]>
}

export const hrmpChannelDigests =  {
    /**
     *  Maintains a mapping that can be used to answer the question:
     *  What paras sent a message at the given block number for a given reciever.
     *  Invariants:
     *  - The inner `Vec<ParaId>` is never empty.
     *  - The inner `Vec<ParaId>` cannot store two same `ParaId`.
     *  - The outer vector is sorted ascending by block number and cannot store two items with the same
     *    block number.
     */
    v9010: new StorageType('Hrmp.HrmpChannelDigests', 'Default', [v9010.ParaId], sts.array(() => sts.tuple(() => [v9010.BlockNumber, sts.array(() => v9010.ParaId)]))) as HrmpChannelDigestsV9010,
}

/**
 *  Maintains a mapping that can be used to answer the question:
 *  What paras sent a message at the given block number for a given reciever.
 *  Invariants:
 *  - The inner `Vec<ParaId>` is never empty.
 *  - The inner `Vec<ParaId>` cannot store two same `ParaId`.
 *  - The outer vector is sorted ascending by block number and cannot store two items with the same
 *    block number.
 */
export interface HrmpChannelDigestsV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v9010.BlockNumber, v9010.ParaId[]][]
    get(block: Block, key: v9010.ParaId): Promise<([v9010.BlockNumber, v9010.ParaId[]][] | undefined)>
    getMany(block: Block, keys: v9010.ParaId[]): Promise<([v9010.BlockNumber, v9010.ParaId[]][] | undefined)[]>
    getKeys(block: Block): Promise<v9010.ParaId[]>
    getKeys(block: Block, key: v9010.ParaId): Promise<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<v9010.ParaId[]>
    getPairs(block: Block): Promise<[k: v9010.ParaId, v: ([v9010.BlockNumber, v9010.ParaId[]][] | undefined)][]>
    getPairs(block: Block, key: v9010.ParaId): Promise<[k: v9010.ParaId, v: ([v9010.BlockNumber, v9010.ParaId[]][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9010.ParaId, v: ([v9010.BlockNumber, v9010.ParaId[]][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<[k: v9010.ParaId, v: ([v9010.BlockNumber, v9010.ParaId[]][] | undefined)][]>
}
