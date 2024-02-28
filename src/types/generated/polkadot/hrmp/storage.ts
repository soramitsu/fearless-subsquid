import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9110 from '../v9110'

export const hrmpOpenChannelRequests =  {
    /**
     *  The set of pending HRMP open channel requests.
     * 
     *  The set is accompanied by a list for iteration.
     * 
     *  Invariant:
     *  - There are no channels that exists in list but not in the set and vice versa.
     */
    v9110: new StorageType('Hrmp.HrmpOpenChannelRequests', 'Optional', [v9110.HrmpChannelId], v9110.HrmpOpenChannelRequest) as HrmpOpenChannelRequestsV9110,
}

/**
 *  The set of pending HRMP open channel requests.
 * 
 *  The set is accompanied by a list for iteration.
 * 
 *  Invariant:
 *  - There are no channels that exists in list but not in the set and vice versa.
 */
export interface HrmpOpenChannelRequestsV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9110.HrmpChannelId): Promise<(v9110.HrmpOpenChannelRequest | undefined)>
    getMany(block: Block, keys: v9110.HrmpChannelId[]): Promise<(v9110.HrmpOpenChannelRequest | undefined)[]>
    getKeys(block: Block): Promise<v9110.HrmpChannelId[]>
    getKeys(block: Block, key: v9110.HrmpChannelId): Promise<v9110.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.HrmpChannelId): AsyncIterable<v9110.HrmpChannelId[]>
    getPairs(block: Block): Promise<[k: v9110.HrmpChannelId, v: (v9110.HrmpOpenChannelRequest | undefined)][]>
    getPairs(block: Block, key: v9110.HrmpChannelId): Promise<[k: v9110.HrmpChannelId, v: (v9110.HrmpOpenChannelRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.HrmpChannelId, v: (v9110.HrmpOpenChannelRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.HrmpChannelId): AsyncIterable<[k: v9110.HrmpChannelId, v: (v9110.HrmpOpenChannelRequest | undefined)][]>
}

export const hrmpOpenChannelRequestsList =  {
    v9110: new StorageType('Hrmp.HrmpOpenChannelRequestsList', 'Default', [], sts.array(() => v9110.HrmpChannelId)) as HrmpOpenChannelRequestsListV9110,
}

export interface HrmpOpenChannelRequestsListV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9110.HrmpChannelId[]
    get(block: Block): Promise<(v9110.HrmpChannelId[] | undefined)>
}

export const hrmpOpenChannelRequestCount =  {
    /**
     *  This mapping tracks how many open channel requests are initiated by a given sender para.
     *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items that has `(X, _)`
     *  as the number of `HrmpOpenChannelRequestCount` for `X`.
     */
    v9110: new StorageType('Hrmp.HrmpOpenChannelRequestCount', 'Default', [v9110.Id], sts.number()) as HrmpOpenChannelRequestCountV9110,
}

/**
 *  This mapping tracks how many open channel requests are initiated by a given sender para.
 *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items that has `(X, _)`
 *  as the number of `HrmpOpenChannelRequestCount` for `X`.
 */
export interface HrmpOpenChannelRequestCountV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key: v9110.Id): Promise<(number | undefined)>
    getMany(block: Block, keys: v9110.Id[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<v9110.Id[]>
    getKeys(block: Block, key: v9110.Id): Promise<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<v9110.Id[]>
    getPairs(block: Block): Promise<[k: v9110.Id, v: (number | undefined)][]>
    getPairs(block: Block, key: v9110.Id): Promise<[k: v9110.Id, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.Id, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<[k: v9110.Id, v: (number | undefined)][]>
}

export const hrmpAcceptedChannelRequestCount =  {
    /**
     *  This mapping tracks how many open channel requests were accepted by a given recipient para.
     *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items `(_, X)` with
     *  `confirmed` set to true, as the number of `HrmpAcceptedChannelRequestCount` for `X`.
     */
    v9110: new StorageType('Hrmp.HrmpAcceptedChannelRequestCount', 'Default', [v9110.Id], sts.number()) as HrmpAcceptedChannelRequestCountV9110,
}

/**
 *  This mapping tracks how many open channel requests were accepted by a given recipient para.
 *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items `(_, X)` with
 *  `confirmed` set to true, as the number of `HrmpAcceptedChannelRequestCount` for `X`.
 */
export interface HrmpAcceptedChannelRequestCountV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key: v9110.Id): Promise<(number | undefined)>
    getMany(block: Block, keys: v9110.Id[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<v9110.Id[]>
    getKeys(block: Block, key: v9110.Id): Promise<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<v9110.Id[]>
    getPairs(block: Block): Promise<[k: v9110.Id, v: (number | undefined)][]>
    getPairs(block: Block, key: v9110.Id): Promise<[k: v9110.Id, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.Id, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<[k: v9110.Id, v: (number | undefined)][]>
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
    v9110: new StorageType('Hrmp.HrmpCloseChannelRequests', 'Optional', [v9110.HrmpChannelId], sts.unit()) as HrmpCloseChannelRequestsV9110,
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
export interface HrmpCloseChannelRequestsV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9110.HrmpChannelId): Promise<(null | undefined)>
    getMany(block: Block, keys: v9110.HrmpChannelId[]): Promise<(null | undefined)[]>
    getKeys(block: Block): Promise<v9110.HrmpChannelId[]>
    getKeys(block: Block, key: v9110.HrmpChannelId): Promise<v9110.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.HrmpChannelId): AsyncIterable<v9110.HrmpChannelId[]>
    getPairs(block: Block): Promise<[k: v9110.HrmpChannelId, v: (null | undefined)][]>
    getPairs(block: Block, key: v9110.HrmpChannelId): Promise<[k: v9110.HrmpChannelId, v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.HrmpChannelId, v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.HrmpChannelId): AsyncIterable<[k: v9110.HrmpChannelId, v: (null | undefined)][]>
}

export const hrmpCloseChannelRequestsList =  {
    v9110: new StorageType('Hrmp.HrmpCloseChannelRequestsList', 'Default', [], sts.array(() => v9110.HrmpChannelId)) as HrmpCloseChannelRequestsListV9110,
}

export interface HrmpCloseChannelRequestsListV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9110.HrmpChannelId[]
    get(block: Block): Promise<(v9110.HrmpChannelId[] | undefined)>
}

export const hrmpWatermarks =  {
    /**
     *  The HRMP watermark associated with each para.
     *  Invariant:
     *  - each para `P` used here as a key should satisfy `Paras::is_valid_para(P)` within a session.
     */
    v9110: new StorageType('Hrmp.HrmpWatermarks', 'Optional', [v9110.Id], sts.number()) as HrmpWatermarksV9110,
}

/**
 *  The HRMP watermark associated with each para.
 *  Invariant:
 *  - each para `P` used here as a key should satisfy `Paras::is_valid_para(P)` within a session.
 */
export interface HrmpWatermarksV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9110.Id): Promise<(number | undefined)>
    getMany(block: Block, keys: v9110.Id[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<v9110.Id[]>
    getKeys(block: Block, key: v9110.Id): Promise<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<v9110.Id[]>
    getPairs(block: Block): Promise<[k: v9110.Id, v: (number | undefined)][]>
    getPairs(block: Block, key: v9110.Id): Promise<[k: v9110.Id, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.Id, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<[k: v9110.Id, v: (number | undefined)][]>
}

export const hrmpChannels =  {
    /**
     *  HRMP channel data associated with each para.
     *  Invariant:
     *  - each participant in the channel should satisfy `Paras::is_valid_para(P)` within a session.
     */
    v9110: new StorageType('Hrmp.HrmpChannels', 'Optional', [v9110.HrmpChannelId], v9110.HrmpChannel) as HrmpChannelsV9110,
}

/**
 *  HRMP channel data associated with each para.
 *  Invariant:
 *  - each participant in the channel should satisfy `Paras::is_valid_para(P)` within a session.
 */
export interface HrmpChannelsV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9110.HrmpChannelId): Promise<(v9110.HrmpChannel | undefined)>
    getMany(block: Block, keys: v9110.HrmpChannelId[]): Promise<(v9110.HrmpChannel | undefined)[]>
    getKeys(block: Block): Promise<v9110.HrmpChannelId[]>
    getKeys(block: Block, key: v9110.HrmpChannelId): Promise<v9110.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.HrmpChannelId): AsyncIterable<v9110.HrmpChannelId[]>
    getPairs(block: Block): Promise<[k: v9110.HrmpChannelId, v: (v9110.HrmpChannel | undefined)][]>
    getPairs(block: Block, key: v9110.HrmpChannelId): Promise<[k: v9110.HrmpChannelId, v: (v9110.HrmpChannel | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.HrmpChannelId, v: (v9110.HrmpChannel | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.HrmpChannelId): AsyncIterable<[k: v9110.HrmpChannelId, v: (v9110.HrmpChannel | undefined)][]>
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
    v9110: new StorageType('Hrmp.HrmpIngressChannelsIndex', 'Default', [v9110.Id], sts.array(() => v9110.Id)) as HrmpIngressChannelsIndexV9110,
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
export interface HrmpIngressChannelsIndexV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9110.Id[]
    get(block: Block, key: v9110.Id): Promise<(v9110.Id[] | undefined)>
    getMany(block: Block, keys: v9110.Id[]): Promise<(v9110.Id[] | undefined)[]>
    getKeys(block: Block): Promise<v9110.Id[]>
    getKeys(block: Block, key: v9110.Id): Promise<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<v9110.Id[]>
    getPairs(block: Block): Promise<[k: v9110.Id, v: (v9110.Id[] | undefined)][]>
    getPairs(block: Block, key: v9110.Id): Promise<[k: v9110.Id, v: (v9110.Id[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.Id, v: (v9110.Id[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<[k: v9110.Id, v: (v9110.Id[] | undefined)][]>
}

export const hrmpEgressChannelsIndex =  {
    v9110: new StorageType('Hrmp.HrmpEgressChannelsIndex', 'Default', [v9110.Id], sts.array(() => v9110.Id)) as HrmpEgressChannelsIndexV9110,
}

export interface HrmpEgressChannelsIndexV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9110.Id[]
    get(block: Block, key: v9110.Id): Promise<(v9110.Id[] | undefined)>
    getMany(block: Block, keys: v9110.Id[]): Promise<(v9110.Id[] | undefined)[]>
    getKeys(block: Block): Promise<v9110.Id[]>
    getKeys(block: Block, key: v9110.Id): Promise<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<v9110.Id[]>
    getPairs(block: Block): Promise<[k: v9110.Id, v: (v9110.Id[] | undefined)][]>
    getPairs(block: Block, key: v9110.Id): Promise<[k: v9110.Id, v: (v9110.Id[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.Id, v: (v9110.Id[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<[k: v9110.Id, v: (v9110.Id[] | undefined)][]>
}

export const hrmpChannelContents =  {
    /**
     *  Storage for the messages for each channel.
     *  Invariant: cannot be non-empty if the corresponding channel in `HrmpChannels` is `None`.
     */
    v9110: new StorageType('Hrmp.HrmpChannelContents', 'Default', [v9110.HrmpChannelId], sts.array(() => v9110.InboundHrmpMessage)) as HrmpChannelContentsV9110,
}

/**
 *  Storage for the messages for each channel.
 *  Invariant: cannot be non-empty if the corresponding channel in `HrmpChannels` is `None`.
 */
export interface HrmpChannelContentsV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9110.InboundHrmpMessage[]
    get(block: Block, key: v9110.HrmpChannelId): Promise<(v9110.InboundHrmpMessage[] | undefined)>
    getMany(block: Block, keys: v9110.HrmpChannelId[]): Promise<(v9110.InboundHrmpMessage[] | undefined)[]>
    getKeys(block: Block): Promise<v9110.HrmpChannelId[]>
    getKeys(block: Block, key: v9110.HrmpChannelId): Promise<v9110.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.HrmpChannelId): AsyncIterable<v9110.HrmpChannelId[]>
    getPairs(block: Block): Promise<[k: v9110.HrmpChannelId, v: (v9110.InboundHrmpMessage[] | undefined)][]>
    getPairs(block: Block, key: v9110.HrmpChannelId): Promise<[k: v9110.HrmpChannelId, v: (v9110.InboundHrmpMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.HrmpChannelId, v: (v9110.InboundHrmpMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.HrmpChannelId): AsyncIterable<[k: v9110.HrmpChannelId, v: (v9110.InboundHrmpMessage[] | undefined)][]>
}

export const hrmpChannelDigests =  {
    /**
     *  Maintains a mapping that can be used to answer the question:
     *  What paras sent a message at the given block number for a given receiver.
     *  Invariants:
     *  - The inner `Vec<ParaId>` is never empty.
     *  - The inner `Vec<ParaId>` cannot store two same `ParaId`.
     *  - The outer vector is sorted ascending by block number and cannot store two items with the same
     *    block number.
     */
    v9110: new StorageType('Hrmp.HrmpChannelDigests', 'Default', [v9110.Id], sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => v9110.Id)]))) as HrmpChannelDigestsV9110,
}

/**
 *  Maintains a mapping that can be used to answer the question:
 *  What paras sent a message at the given block number for a given receiver.
 *  Invariants:
 *  - The inner `Vec<ParaId>` is never empty.
 *  - The inner `Vec<ParaId>` cannot store two same `ParaId`.
 *  - The outer vector is sorted ascending by block number and cannot store two items with the same
 *    block number.
 */
export interface HrmpChannelDigestsV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v9110.Id[]][]
    get(block: Block, key: v9110.Id): Promise<([number, v9110.Id[]][] | undefined)>
    getMany(block: Block, keys: v9110.Id[]): Promise<([number, v9110.Id[]][] | undefined)[]>
    getKeys(block: Block): Promise<v9110.Id[]>
    getKeys(block: Block, key: v9110.Id): Promise<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<v9110.Id[]>
    getPairs(block: Block): Promise<[k: v9110.Id, v: ([number, v9110.Id[]][] | undefined)][]>
    getPairs(block: Block, key: v9110.Id): Promise<[k: v9110.Id, v: ([number, v9110.Id[]][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.Id, v: ([number, v9110.Id[]][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<[k: v9110.Id, v: ([number, v9110.Id[]][] | undefined)][]>
}
