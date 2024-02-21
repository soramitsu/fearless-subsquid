import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9090 from '../v9090'
import * as v9111 from '../v9111'

export const hrmpOpenChannelRequests =  {
    /**
     *  The set of pending HRMP open channel requests.
     * 
     *  The set is accompanied by a list for iteration.
     * 
     *  Invariant:
     *  - There are no channels that exists in list but not in the set and vice versa.
     */
    v9090: new StorageType('Hrmp.HrmpOpenChannelRequests', 'Optional', [v9090.HrmpChannelId], v9090.HrmpOpenChannelRequest) as HrmpOpenChannelRequestsV9090,
    /**
     *  The set of pending HRMP open channel requests.
     * 
     *  The set is accompanied by a list for iteration.
     * 
     *  Invariant:
     *  - There are no channels that exists in list but not in the set and vice versa.
     */
    v9111: new StorageType('Hrmp.HrmpOpenChannelRequests', 'Optional', [v9111.HrmpChannelId], v9111.HrmpOpenChannelRequest) as HrmpOpenChannelRequestsV9111,
}

/**
 *  The set of pending HRMP open channel requests.
 * 
 *  The set is accompanied by a list for iteration.
 * 
 *  Invariant:
 *  - There are no channels that exists in list but not in the set and vice versa.
 */
export interface HrmpOpenChannelRequestsV9090  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9090.HrmpChannelId): Promise<(v9090.HrmpOpenChannelRequest | undefined)>
    getMany(block: Block, keys: v9090.HrmpChannelId[]): Promise<(v9090.HrmpOpenChannelRequest | undefined)[]>
    getKeys(block: Block): Promise<v9090.HrmpChannelId[]>
    getKeys(block: Block, key: v9090.HrmpChannelId): Promise<v9090.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9090.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9090.HrmpChannelId): AsyncIterable<v9090.HrmpChannelId[]>
    getPairs(block: Block): Promise<[k: v9090.HrmpChannelId, v: (v9090.HrmpOpenChannelRequest | undefined)][]>
    getPairs(block: Block, key: v9090.HrmpChannelId): Promise<[k: v9090.HrmpChannelId, v: (v9090.HrmpOpenChannelRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9090.HrmpChannelId, v: (v9090.HrmpOpenChannelRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9090.HrmpChannelId): AsyncIterable<[k: v9090.HrmpChannelId, v: (v9090.HrmpOpenChannelRequest | undefined)][]>
}

/**
 *  The set of pending HRMP open channel requests.
 * 
 *  The set is accompanied by a list for iteration.
 * 
 *  Invariant:
 *  - There are no channels that exists in list but not in the set and vice versa.
 */
export interface HrmpOpenChannelRequestsV9111  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9111.HrmpChannelId): Promise<(v9111.HrmpOpenChannelRequest | undefined)>
    getMany(block: Block, keys: v9111.HrmpChannelId[]): Promise<(v9111.HrmpOpenChannelRequest | undefined)[]>
    getKeys(block: Block): Promise<v9111.HrmpChannelId[]>
    getKeys(block: Block, key: v9111.HrmpChannelId): Promise<v9111.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9111.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9111.HrmpChannelId): AsyncIterable<v9111.HrmpChannelId[]>
    getPairs(block: Block): Promise<[k: v9111.HrmpChannelId, v: (v9111.HrmpOpenChannelRequest | undefined)][]>
    getPairs(block: Block, key: v9111.HrmpChannelId): Promise<[k: v9111.HrmpChannelId, v: (v9111.HrmpOpenChannelRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9111.HrmpChannelId, v: (v9111.HrmpOpenChannelRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9111.HrmpChannelId): AsyncIterable<[k: v9111.HrmpChannelId, v: (v9111.HrmpOpenChannelRequest | undefined)][]>
}

export const hrmpOpenChannelRequestsList =  {
    v9090: new StorageType('Hrmp.HrmpOpenChannelRequestsList', 'Default', [], sts.array(() => v9090.HrmpChannelId)) as HrmpOpenChannelRequestsListV9090,
    v9111: new StorageType('Hrmp.HrmpOpenChannelRequestsList', 'Default', [], sts.array(() => v9111.HrmpChannelId)) as HrmpOpenChannelRequestsListV9111,
}

export interface HrmpOpenChannelRequestsListV9090  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9090.HrmpChannelId[]
    get(block: Block): Promise<(v9090.HrmpChannelId[] | undefined)>
}

export interface HrmpOpenChannelRequestsListV9111  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9111.HrmpChannelId[]
    get(block: Block): Promise<(v9111.HrmpChannelId[] | undefined)>
}

export const hrmpOpenChannelRequestCount =  {
    /**
     *  This mapping tracks how many open channel requests are initiated by a given sender para.
     *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items that has `(X, _)`
     *  as the number of `HrmpOpenChannelRequestCount` for `X`.
     */
    v9090: new StorageType('Hrmp.HrmpOpenChannelRequestCount', 'Default', [v9090.ParaId], sts.number()) as HrmpOpenChannelRequestCountV9090,
}

/**
 *  This mapping tracks how many open channel requests are initiated by a given sender para.
 *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items that has `(X, _)`
 *  as the number of `HrmpOpenChannelRequestCount` for `X`.
 */
export interface HrmpOpenChannelRequestCountV9090  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key: v9090.ParaId): Promise<(number | undefined)>
    getMany(block: Block, keys: v9090.ParaId[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<v9090.ParaId[]>
    getKeys(block: Block, key: v9090.ParaId): Promise<v9090.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9090.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9090.ParaId): AsyncIterable<v9090.ParaId[]>
    getPairs(block: Block): Promise<[k: v9090.ParaId, v: (number | undefined)][]>
    getPairs(block: Block, key: v9090.ParaId): Promise<[k: v9090.ParaId, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9090.ParaId, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9090.ParaId): AsyncIterable<[k: v9090.ParaId, v: (number | undefined)][]>
}

export const hrmpAcceptedChannelRequestCount =  {
    /**
     *  This mapping tracks how many open channel requests were accepted by a given recipient para.
     *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items `(_, X)` with
     *  `confirmed` set to true, as the number of `HrmpAcceptedChannelRequestCount` for `X`.
     */
    v9090: new StorageType('Hrmp.HrmpAcceptedChannelRequestCount', 'Default', [v9090.ParaId], sts.number()) as HrmpAcceptedChannelRequestCountV9090,
}

/**
 *  This mapping tracks how many open channel requests were accepted by a given recipient para.
 *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items `(_, X)` with
 *  `confirmed` set to true, as the number of `HrmpAcceptedChannelRequestCount` for `X`.
 */
export interface HrmpAcceptedChannelRequestCountV9090  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key: v9090.ParaId): Promise<(number | undefined)>
    getMany(block: Block, keys: v9090.ParaId[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<v9090.ParaId[]>
    getKeys(block: Block, key: v9090.ParaId): Promise<v9090.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9090.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9090.ParaId): AsyncIterable<v9090.ParaId[]>
    getPairs(block: Block): Promise<[k: v9090.ParaId, v: (number | undefined)][]>
    getPairs(block: Block, key: v9090.ParaId): Promise<[k: v9090.ParaId, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9090.ParaId, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9090.ParaId): AsyncIterable<[k: v9090.ParaId, v: (number | undefined)][]>
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
    v9090: new StorageType('Hrmp.HrmpCloseChannelRequests', 'Optional', [v9090.HrmpChannelId], sts.unit()) as HrmpCloseChannelRequestsV9090,
    /**
     *  A set of pending HRMP close channel requests that are going to be closed during the session change.
     *  Used for checking if a given channel is registered for closure.
     * 
     *  The set is accompanied by a list for iteration.
     * 
     *  Invariant:
     *  - There are no channels that exists in list but not in the set and vice versa.
     */
    v9111: new StorageType('Hrmp.HrmpCloseChannelRequests', 'Optional', [v9111.HrmpChannelId], sts.unit()) as HrmpCloseChannelRequestsV9111,
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
export interface HrmpCloseChannelRequestsV9090  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9090.HrmpChannelId): Promise<(null | undefined)>
    getMany(block: Block, keys: v9090.HrmpChannelId[]): Promise<(null | undefined)[]>
    getKeys(block: Block): Promise<v9090.HrmpChannelId[]>
    getKeys(block: Block, key: v9090.HrmpChannelId): Promise<v9090.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9090.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9090.HrmpChannelId): AsyncIterable<v9090.HrmpChannelId[]>
    getPairs(block: Block): Promise<[k: v9090.HrmpChannelId, v: (null | undefined)][]>
    getPairs(block: Block, key: v9090.HrmpChannelId): Promise<[k: v9090.HrmpChannelId, v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9090.HrmpChannelId, v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9090.HrmpChannelId): AsyncIterable<[k: v9090.HrmpChannelId, v: (null | undefined)][]>
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
export interface HrmpCloseChannelRequestsV9111  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9111.HrmpChannelId): Promise<(null | undefined)>
    getMany(block: Block, keys: v9111.HrmpChannelId[]): Promise<(null | undefined)[]>
    getKeys(block: Block): Promise<v9111.HrmpChannelId[]>
    getKeys(block: Block, key: v9111.HrmpChannelId): Promise<v9111.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9111.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9111.HrmpChannelId): AsyncIterable<v9111.HrmpChannelId[]>
    getPairs(block: Block): Promise<[k: v9111.HrmpChannelId, v: (null | undefined)][]>
    getPairs(block: Block, key: v9111.HrmpChannelId): Promise<[k: v9111.HrmpChannelId, v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9111.HrmpChannelId, v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9111.HrmpChannelId): AsyncIterable<[k: v9111.HrmpChannelId, v: (null | undefined)][]>
}

export const hrmpCloseChannelRequestsList =  {
    v9090: new StorageType('Hrmp.HrmpCloseChannelRequestsList', 'Default', [], sts.array(() => v9090.HrmpChannelId)) as HrmpCloseChannelRequestsListV9090,
    v9111: new StorageType('Hrmp.HrmpCloseChannelRequestsList', 'Default', [], sts.array(() => v9111.HrmpChannelId)) as HrmpCloseChannelRequestsListV9111,
}

export interface HrmpCloseChannelRequestsListV9090  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9090.HrmpChannelId[]
    get(block: Block): Promise<(v9090.HrmpChannelId[] | undefined)>
}

export interface HrmpCloseChannelRequestsListV9111  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9111.HrmpChannelId[]
    get(block: Block): Promise<(v9111.HrmpChannelId[] | undefined)>
}

export const hrmpWatermarks =  {
    /**
     *  The HRMP watermark associated with each para.
     *  Invariant:
     *  - each para `P` used here as a key should satisfy `Paras::is_valid_para(P)` within a session.
     */
    v9090: new StorageType('Hrmp.HrmpWatermarks', 'Optional', [v9090.ParaId], v9090.BlockNumber) as HrmpWatermarksV9090,
}

/**
 *  The HRMP watermark associated with each para.
 *  Invariant:
 *  - each para `P` used here as a key should satisfy `Paras::is_valid_para(P)` within a session.
 */
export interface HrmpWatermarksV9090  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9090.ParaId): Promise<(v9090.BlockNumber | undefined)>
    getMany(block: Block, keys: v9090.ParaId[]): Promise<(v9090.BlockNumber | undefined)[]>
    getKeys(block: Block): Promise<v9090.ParaId[]>
    getKeys(block: Block, key: v9090.ParaId): Promise<v9090.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9090.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9090.ParaId): AsyncIterable<v9090.ParaId[]>
    getPairs(block: Block): Promise<[k: v9090.ParaId, v: (v9090.BlockNumber | undefined)][]>
    getPairs(block: Block, key: v9090.ParaId): Promise<[k: v9090.ParaId, v: (v9090.BlockNumber | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9090.ParaId, v: (v9090.BlockNumber | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9090.ParaId): AsyncIterable<[k: v9090.ParaId, v: (v9090.BlockNumber | undefined)][]>
}

export const hrmpChannels =  {
    /**
     *  HRMP channel data associated with each para.
     *  Invariant:
     *  - each participant in the channel should satisfy `Paras::is_valid_para(P)` within a session.
     */
    v9090: new StorageType('Hrmp.HrmpChannels', 'Optional', [v9090.HrmpChannelId], v9090.HrmpChannel) as HrmpChannelsV9090,
    /**
     *  HRMP channel data associated with each para.
     *  Invariant:
     *  - each participant in the channel should satisfy `Paras::is_valid_para(P)` within a session.
     */
    v9111: new StorageType('Hrmp.HrmpChannels', 'Optional', [v9111.HrmpChannelId], v9111.HrmpChannel) as HrmpChannelsV9111,
}

/**
 *  HRMP channel data associated with each para.
 *  Invariant:
 *  - each participant in the channel should satisfy `Paras::is_valid_para(P)` within a session.
 */
export interface HrmpChannelsV9090  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9090.HrmpChannelId): Promise<(v9090.HrmpChannel | undefined)>
    getMany(block: Block, keys: v9090.HrmpChannelId[]): Promise<(v9090.HrmpChannel | undefined)[]>
    getKeys(block: Block): Promise<v9090.HrmpChannelId[]>
    getKeys(block: Block, key: v9090.HrmpChannelId): Promise<v9090.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9090.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9090.HrmpChannelId): AsyncIterable<v9090.HrmpChannelId[]>
    getPairs(block: Block): Promise<[k: v9090.HrmpChannelId, v: (v9090.HrmpChannel | undefined)][]>
    getPairs(block: Block, key: v9090.HrmpChannelId): Promise<[k: v9090.HrmpChannelId, v: (v9090.HrmpChannel | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9090.HrmpChannelId, v: (v9090.HrmpChannel | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9090.HrmpChannelId): AsyncIterable<[k: v9090.HrmpChannelId, v: (v9090.HrmpChannel | undefined)][]>
}

/**
 *  HRMP channel data associated with each para.
 *  Invariant:
 *  - each participant in the channel should satisfy `Paras::is_valid_para(P)` within a session.
 */
export interface HrmpChannelsV9111  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9111.HrmpChannelId): Promise<(v9111.HrmpChannel | undefined)>
    getMany(block: Block, keys: v9111.HrmpChannelId[]): Promise<(v9111.HrmpChannel | undefined)[]>
    getKeys(block: Block): Promise<v9111.HrmpChannelId[]>
    getKeys(block: Block, key: v9111.HrmpChannelId): Promise<v9111.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9111.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9111.HrmpChannelId): AsyncIterable<v9111.HrmpChannelId[]>
    getPairs(block: Block): Promise<[k: v9111.HrmpChannelId, v: (v9111.HrmpChannel | undefined)][]>
    getPairs(block: Block, key: v9111.HrmpChannelId): Promise<[k: v9111.HrmpChannelId, v: (v9111.HrmpChannel | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9111.HrmpChannelId, v: (v9111.HrmpChannel | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9111.HrmpChannelId): AsyncIterable<[k: v9111.HrmpChannelId, v: (v9111.HrmpChannel | undefined)][]>
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
    v9090: new StorageType('Hrmp.HrmpIngressChannelsIndex', 'Default', [v9090.ParaId], sts.array(() => v9090.ParaId)) as HrmpIngressChannelsIndexV9090,
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
export interface HrmpIngressChannelsIndexV9090  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9090.ParaId[]
    get(block: Block, key: v9090.ParaId): Promise<(v9090.ParaId[] | undefined)>
    getMany(block: Block, keys: v9090.ParaId[]): Promise<(v9090.ParaId[] | undefined)[]>
    getKeys(block: Block): Promise<v9090.ParaId[]>
    getKeys(block: Block, key: v9090.ParaId): Promise<v9090.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9090.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9090.ParaId): AsyncIterable<v9090.ParaId[]>
    getPairs(block: Block): Promise<[k: v9090.ParaId, v: (v9090.ParaId[] | undefined)][]>
    getPairs(block: Block, key: v9090.ParaId): Promise<[k: v9090.ParaId, v: (v9090.ParaId[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9090.ParaId, v: (v9090.ParaId[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9090.ParaId): AsyncIterable<[k: v9090.ParaId, v: (v9090.ParaId[] | undefined)][]>
}

export const hrmpEgressChannelsIndex =  {
    v9090: new StorageType('Hrmp.HrmpEgressChannelsIndex', 'Default', [v9090.ParaId], sts.array(() => v9090.ParaId)) as HrmpEgressChannelsIndexV9090,
}

export interface HrmpEgressChannelsIndexV9090  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9090.ParaId[]
    get(block: Block, key: v9090.ParaId): Promise<(v9090.ParaId[] | undefined)>
    getMany(block: Block, keys: v9090.ParaId[]): Promise<(v9090.ParaId[] | undefined)[]>
    getKeys(block: Block): Promise<v9090.ParaId[]>
    getKeys(block: Block, key: v9090.ParaId): Promise<v9090.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9090.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9090.ParaId): AsyncIterable<v9090.ParaId[]>
    getPairs(block: Block): Promise<[k: v9090.ParaId, v: (v9090.ParaId[] | undefined)][]>
    getPairs(block: Block, key: v9090.ParaId): Promise<[k: v9090.ParaId, v: (v9090.ParaId[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9090.ParaId, v: (v9090.ParaId[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9090.ParaId): AsyncIterable<[k: v9090.ParaId, v: (v9090.ParaId[] | undefined)][]>
}

export const hrmpChannelContents =  {
    /**
     *  Storage for the messages for each channel.
     *  Invariant: cannot be non-empty if the corresponding channel in `HrmpChannels` is `None`.
     */
    v9090: new StorageType('Hrmp.HrmpChannelContents', 'Default', [v9090.HrmpChannelId], sts.array(() => v9090.InboundHrmpMessage)) as HrmpChannelContentsV9090,
    /**
     *  Storage for the messages for each channel.
     *  Invariant: cannot be non-empty if the corresponding channel in `HrmpChannels` is `None`.
     */
    v9111: new StorageType('Hrmp.HrmpChannelContents', 'Default', [v9111.HrmpChannelId], sts.array(() => v9111.InboundHrmpMessage)) as HrmpChannelContentsV9111,
}

/**
 *  Storage for the messages for each channel.
 *  Invariant: cannot be non-empty if the corresponding channel in `HrmpChannels` is `None`.
 */
export interface HrmpChannelContentsV9090  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9090.InboundHrmpMessage[]
    get(block: Block, key: v9090.HrmpChannelId): Promise<(v9090.InboundHrmpMessage[] | undefined)>
    getMany(block: Block, keys: v9090.HrmpChannelId[]): Promise<(v9090.InboundHrmpMessage[] | undefined)[]>
    getKeys(block: Block): Promise<v9090.HrmpChannelId[]>
    getKeys(block: Block, key: v9090.HrmpChannelId): Promise<v9090.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9090.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9090.HrmpChannelId): AsyncIterable<v9090.HrmpChannelId[]>
    getPairs(block: Block): Promise<[k: v9090.HrmpChannelId, v: (v9090.InboundHrmpMessage[] | undefined)][]>
    getPairs(block: Block, key: v9090.HrmpChannelId): Promise<[k: v9090.HrmpChannelId, v: (v9090.InboundHrmpMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9090.HrmpChannelId, v: (v9090.InboundHrmpMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9090.HrmpChannelId): AsyncIterable<[k: v9090.HrmpChannelId, v: (v9090.InboundHrmpMessage[] | undefined)][]>
}

/**
 *  Storage for the messages for each channel.
 *  Invariant: cannot be non-empty if the corresponding channel in `HrmpChannels` is `None`.
 */
export interface HrmpChannelContentsV9111  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9111.InboundHrmpMessage[]
    get(block: Block, key: v9111.HrmpChannelId): Promise<(v9111.InboundHrmpMessage[] | undefined)>
    getMany(block: Block, keys: v9111.HrmpChannelId[]): Promise<(v9111.InboundHrmpMessage[] | undefined)[]>
    getKeys(block: Block): Promise<v9111.HrmpChannelId[]>
    getKeys(block: Block, key: v9111.HrmpChannelId): Promise<v9111.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9111.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9111.HrmpChannelId): AsyncIterable<v9111.HrmpChannelId[]>
    getPairs(block: Block): Promise<[k: v9111.HrmpChannelId, v: (v9111.InboundHrmpMessage[] | undefined)][]>
    getPairs(block: Block, key: v9111.HrmpChannelId): Promise<[k: v9111.HrmpChannelId, v: (v9111.InboundHrmpMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9111.HrmpChannelId, v: (v9111.InboundHrmpMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9111.HrmpChannelId): AsyncIterable<[k: v9111.HrmpChannelId, v: (v9111.InboundHrmpMessage[] | undefined)][]>
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
    v9090: new StorageType('Hrmp.HrmpChannelDigests', 'Default', [v9090.ParaId], sts.array(() => sts.tuple(() => [v9090.BlockNumber, sts.array(() => v9090.ParaId)]))) as HrmpChannelDigestsV9090,
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
export interface HrmpChannelDigestsV9090  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v9090.BlockNumber, v9090.ParaId[]][]
    get(block: Block, key: v9090.ParaId): Promise<([v9090.BlockNumber, v9090.ParaId[]][] | undefined)>
    getMany(block: Block, keys: v9090.ParaId[]): Promise<([v9090.BlockNumber, v9090.ParaId[]][] | undefined)[]>
    getKeys(block: Block): Promise<v9090.ParaId[]>
    getKeys(block: Block, key: v9090.ParaId): Promise<v9090.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9090.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9090.ParaId): AsyncIterable<v9090.ParaId[]>
    getPairs(block: Block): Promise<[k: v9090.ParaId, v: ([v9090.BlockNumber, v9090.ParaId[]][] | undefined)][]>
    getPairs(block: Block, key: v9090.ParaId): Promise<[k: v9090.ParaId, v: ([v9090.BlockNumber, v9090.ParaId[]][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9090.ParaId, v: ([v9090.BlockNumber, v9090.ParaId[]][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9090.ParaId): AsyncIterable<[k: v9090.ParaId, v: ([v9090.BlockNumber, v9090.ParaId[]][] | undefined)][]>
}
