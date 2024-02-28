import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v9110 from '../v9110'

export const heartbeatAfter =  {
    /**
     *  The block number after which it's ok to send heartbeats in current session.
     * 
     *  At the beginning of each session we set this to a value that should
     *  fall roughly in the middle of the session duration.
     *  The idea is to first wait for the validators to produce a block
     *  in the current session, so that the heartbeat later on will not be necessary.
     */
    v0: new StorageType('ImOnline.HeartbeatAfter', 'Default', [], v0.BlockNumber) as HeartbeatAfterV0,
}

/**
 *  The block number after which it's ok to send heartbeats in current session.
 * 
 *  At the beginning of each session we set this to a value that should
 *  fall roughly in the middle of the session duration.
 *  The idea is to first wait for the validators to produce a block
 *  in the current session, so that the heartbeat later on will not be necessary.
 */
export interface HeartbeatAfterV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.BlockNumber
    get(block: Block): Promise<(v0.BlockNumber | undefined)>
}

export const keys =  {
    /**
     *  The current set of keys that may issue a heartbeat.
     */
    v0: new StorageType('ImOnline.Keys', 'Default', [], sts.array(() => v0.AuthorityId)) as KeysV0,
}

/**
 *  The current set of keys that may issue a heartbeat.
 */
export interface KeysV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.AuthorityId[]
    get(block: Block): Promise<(v0.AuthorityId[] | undefined)>
}

export const receivedHeartbeats =  {
    /**
     *  For each session index, we keep a mapping of `AuthIndex` to
     *  `offchain::OpaqueNetworkState`.
     */
    v0: new StorageType('ImOnline.ReceivedHeartbeats', 'Optional', [v0.SessionIndex, v0.AuthIndex], sts.bytes()) as ReceivedHeartbeatsV0,
    /**
     *  For each session index, we keep a mapping of 'SessionIndex` and `AuthIndex` to
     *  `WrapperOpaque<BoundedOpaqueNetworkState>`.
     */
    v9110: new StorageType('ImOnline.ReceivedHeartbeats', 'Optional', [sts.number(), sts.number()], v9110.WrapperOpaque) as ReceivedHeartbeatsV9110,
    /**
     *  For each session index, we keep a mapping of `SessionIndex` and `AuthIndex`.
     */
    v1000001: new StorageType('ImOnline.ReceivedHeartbeats', 'Optional', [sts.number(), sts.number()], sts.boolean()) as ReceivedHeartbeatsV1000001,
}

/**
 *  For each session index, we keep a mapping of `AuthIndex` to
 *  `offchain::OpaqueNetworkState`.
 */
export interface ReceivedHeartbeatsV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v0.SessionIndex, key2: v0.AuthIndex): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: [v0.SessionIndex, v0.AuthIndex][]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<[v0.SessionIndex, v0.AuthIndex][]>
    getKeys(block: Block, key1: v0.SessionIndex): Promise<[v0.SessionIndex, v0.AuthIndex][]>
    getKeys(block: Block, key1: v0.SessionIndex, key2: v0.AuthIndex): Promise<[v0.SessionIndex, v0.AuthIndex][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v0.SessionIndex, v0.AuthIndex][]>
    getKeysPaged(pageSize: number, block: Block, key1: v0.SessionIndex): AsyncIterable<[v0.SessionIndex, v0.AuthIndex][]>
    getKeysPaged(pageSize: number, block: Block, key1: v0.SessionIndex, key2: v0.AuthIndex): AsyncIterable<[v0.SessionIndex, v0.AuthIndex][]>
    getPairs(block: Block): Promise<[k: [v0.SessionIndex, v0.AuthIndex], v: (Bytes | undefined)][]>
    getPairs(block: Block, key1: v0.SessionIndex): Promise<[k: [v0.SessionIndex, v0.AuthIndex], v: (Bytes | undefined)][]>
    getPairs(block: Block, key1: v0.SessionIndex, key2: v0.AuthIndex): Promise<[k: [v0.SessionIndex, v0.AuthIndex], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v0.SessionIndex, v0.AuthIndex], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v0.SessionIndex): AsyncIterable<[k: [v0.SessionIndex, v0.AuthIndex], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v0.SessionIndex, key2: v0.AuthIndex): AsyncIterable<[k: [v0.SessionIndex, v0.AuthIndex], v: (Bytes | undefined)][]>
}

/**
 *  For each session index, we keep a mapping of 'SessionIndex` and `AuthIndex` to
 *  `WrapperOpaque<BoundedOpaqueNetworkState>`.
 */
export interface ReceivedHeartbeatsV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: number): Promise<(v9110.WrapperOpaque | undefined)>
    getMany(block: Block, keys: [number, number][]): Promise<(v9110.WrapperOpaque | undefined)[]>
    getKeys(block: Block): Promise<[number, number][]>
    getKeys(block: Block, key1: number): Promise<[number, number][]>
    getKeys(block: Block, key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(block: Block): Promise<[k: [number, number], v: (v9110.WrapperOpaque | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, number], v: (v9110.WrapperOpaque | undefined)][]>
    getPairs(block: Block, key1: number, key2: number): Promise<[k: [number, number], v: (v9110.WrapperOpaque | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, number], v: (v9110.WrapperOpaque | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, number], v: (v9110.WrapperOpaque | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: number): AsyncIterable<[k: [number, number], v: (v9110.WrapperOpaque | undefined)][]>
}

/**
 *  For each session index, we keep a mapping of `SessionIndex` and `AuthIndex`.
 */
export interface ReceivedHeartbeatsV1000001  {
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
    v0: new StorageType('ImOnline.AuthoredBlocks', 'Default', [v0.SessionIndex, v0.ValidatorId], sts.number()) as AuthoredBlocksV0,
}

/**
 *  For each session index, we keep a mapping of `T::ValidatorId` to the
 *  number of blocks authored by the given authority.
 */
export interface AuthoredBlocksV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key1: v0.SessionIndex, key2: v0.ValidatorId): Promise<(number | undefined)>
    getMany(block: Block, keys: [v0.SessionIndex, v0.ValidatorId][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[v0.SessionIndex, v0.ValidatorId][]>
    getKeys(block: Block, key1: v0.SessionIndex): Promise<[v0.SessionIndex, v0.ValidatorId][]>
    getKeys(block: Block, key1: v0.SessionIndex, key2: v0.ValidatorId): Promise<[v0.SessionIndex, v0.ValidatorId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v0.SessionIndex, v0.ValidatorId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v0.SessionIndex): AsyncIterable<[v0.SessionIndex, v0.ValidatorId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v0.SessionIndex, key2: v0.ValidatorId): AsyncIterable<[v0.SessionIndex, v0.ValidatorId][]>
    getPairs(block: Block): Promise<[k: [v0.SessionIndex, v0.ValidatorId], v: (number | undefined)][]>
    getPairs(block: Block, key1: v0.SessionIndex): Promise<[k: [v0.SessionIndex, v0.ValidatorId], v: (number | undefined)][]>
    getPairs(block: Block, key1: v0.SessionIndex, key2: v0.ValidatorId): Promise<[k: [v0.SessionIndex, v0.ValidatorId], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v0.SessionIndex, v0.ValidatorId], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v0.SessionIndex): AsyncIterable<[k: [v0.SessionIndex, v0.ValidatorId], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v0.SessionIndex, key2: v0.ValidatorId): AsyncIterable<[k: [v0.SessionIndex, v0.ValidatorId], v: (number | undefined)][]>
}
