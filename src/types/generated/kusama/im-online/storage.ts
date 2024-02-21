import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v1045 from '../v1045'
import * as v9111 from '../v9111'

export const gossipAt =  {
    /**
     *  The block number when we should gossip.
     */
    v1020: new StorageType('ImOnline.GossipAt', 'Default', [], v1020.BlockNumber) as GossipAtV1020,
}

/**
 *  The block number when we should gossip.
 */
export interface GossipAtV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.BlockNumber
    get(block: Block): Promise<(v1020.BlockNumber | undefined)>
}

export const keys =  {
    /**
     *  The current set of keys that may issue a heartbeat.
     */
    v1020: new StorageType('ImOnline.Keys', 'Default', [], sts.array(() => v1020.AuthorityId)) as KeysV1020,
}

/**
 *  The current set of keys that may issue a heartbeat.
 */
export interface KeysV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.AuthorityId[]
    get(block: Block): Promise<(v1020.AuthorityId[] | undefined)>
}

export const receivedHeartbeats =  {
    /**
     *  For each session index, we keep a mapping of `AuthIndex`
     *  to `offchain::OpaqueNetworkState`.
     */
    v1020: new StorageType('ImOnline.ReceivedHeartbeats', 'Optional', [v1020.SessionIndex, v1020.AuthIndex], sts.bytes()) as ReceivedHeartbeatsV1020,
    /**
     *  For each session index, we keep a mapping of 'SessionIndex` and `AuthIndex` to
     *  `WrapperOpaque<BoundedOpaqueNetworkState>`.
     */
    v9111: new StorageType('ImOnline.ReceivedHeartbeats', 'Optional', [sts.number(), sts.number()], v9111.WrapperOpaque) as ReceivedHeartbeatsV9111,
    /**
     *  For each session index, we keep a mapping of `SessionIndex` and `AuthIndex`.
     */
    v1000000: new StorageType('ImOnline.ReceivedHeartbeats', 'Optional', [sts.number(), sts.number()], sts.boolean()) as ReceivedHeartbeatsV1000000,
}

/**
 *  For each session index, we keep a mapping of `AuthIndex`
 *  to `offchain::OpaqueNetworkState`.
 */
export interface ReceivedHeartbeatsV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v1020.SessionIndex, key2: v1020.AuthIndex): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: [v1020.SessionIndex, v1020.AuthIndex][]): Promise<(Bytes | undefined)[]>
}

/**
 *  For each session index, we keep a mapping of 'SessionIndex` and `AuthIndex` to
 *  `WrapperOpaque<BoundedOpaqueNetworkState>`.
 */
export interface ReceivedHeartbeatsV9111  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: number): Promise<(v9111.WrapperOpaque | undefined)>
    getMany(block: Block, keys: [number, number][]): Promise<(v9111.WrapperOpaque | undefined)[]>
    getKeys(block: Block): Promise<[number, number][]>
    getKeys(block: Block, key1: number): Promise<[number, number][]>
    getKeys(block: Block, key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(block: Block): Promise<[k: [number, number], v: (v9111.WrapperOpaque | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, number], v: (v9111.WrapperOpaque | undefined)][]>
    getPairs(block: Block, key1: number, key2: number): Promise<[k: [number, number], v: (v9111.WrapperOpaque | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, number], v: (v9111.WrapperOpaque | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, number], v: (v9111.WrapperOpaque | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: number): AsyncIterable<[k: [number, number], v: (v9111.WrapperOpaque | undefined)][]>
}

/**
 *  For each session index, we keep a mapping of `SessionIndex` and `AuthIndex`.
 */
export interface ReceivedHeartbeatsV1000000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: number): Promise<(boolean | undefined)>
    getMany(block: Block, keys: [number, number][]): Promise<(boolean | undefined)[]>
    getKeys(block: Block): Promise<[number, number][]>
    getKeys(block: Block, key1: number): Promise<[number, number][]>
    getKeys(block: Block, key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(block: Block): Promise<[k: [number, number], v: (boolean | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, number], v: (boolean | undefined)][]>
    getPairs(block: Block, key1: number, key2: number): Promise<[k: [number, number], v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, number], v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, number], v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: number): AsyncIterable<[k: [number, number], v: (boolean | undefined)][]>
}

export const authoredBlocks =  {
    /**
     *  For each session index, we keep a mapping of `T::ValidatorId` to the
     *  number of blocks authored by the given authority.
     */
    v1020: new StorageType('ImOnline.AuthoredBlocks', 'Default', [v1020.SessionIndex, v1020.ValidatorId], sts.number()) as AuthoredBlocksV1020,
}

/**
 *  For each session index, we keep a mapping of `T::ValidatorId` to the
 *  number of blocks authored by the given authority.
 */
export interface AuthoredBlocksV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key1: v1020.SessionIndex, key2: v1020.ValidatorId): Promise<(number | undefined)>
    getMany(block: Block, keys: [v1020.SessionIndex, v1020.ValidatorId][]): Promise<(number | undefined)[]>
}

export const heartbeatAfter =  {
    /**
     *  The block number after which it's ok to send heartbeats in current session.
     * 
     *  At the beginning of each session we set this to a value that should
     *  fall roughly in the middle of the session duration.
     *  The idea is to first wait for the validators to produce a block
     *  in the current session, so that the heartbeat later on will not be necessary.
     */
    v1045: new StorageType('ImOnline.HeartbeatAfter', 'Default', [], v1045.BlockNumber) as HeartbeatAfterV1045,
}

/**
 *  The block number after which it's ok to send heartbeats in current session.
 * 
 *  At the beginning of each session we set this to a value that should
 *  fall roughly in the middle of the session duration.
 *  The idea is to first wait for the validators to produce a block
 *  in the current session, so that the heartbeat later on will not be necessary.
 */
export interface HeartbeatAfterV1045  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1045.BlockNumber
    get(block: Block): Promise<(v1045.BlockNumber | undefined)>
}
