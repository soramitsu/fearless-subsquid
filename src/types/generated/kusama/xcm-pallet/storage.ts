import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9100 from '../v9100'
import * as v9111 from '../v9111'
import * as v9160 from '../v9160'
import * as v9370 from '../v9370'
import * as v9381 from '../v9381'
import * as v9430 from '../v9430'

export const versionNotifyTargets =  {
    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    v9100: new StorageType('XcmPallet.VersionNotifyTargets', 'Optional', [v9100.XcmVersion, v9100.VersionedMultiLocation], sts.tuple(() => [sts.bigint(), sts.bigint(), v9100.XcmVersion])) as VersionNotifyTargetsV9100,
    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    v9111: new StorageType('XcmPallet.VersionNotifyTargets', 'Optional', [sts.number(), v9111.VersionedMultiLocation], sts.tuple(() => [sts.bigint(), sts.bigint(), sts.number()])) as VersionNotifyTargetsV9111,
    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    v9370: new StorageType('XcmPallet.VersionNotifyTargets', 'Optional', [sts.number(), v9370.VersionedMultiLocation], sts.tuple(() => [sts.bigint(), sts.bigint(), sts.number()])) as VersionNotifyTargetsV9370,
    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    v9381: new StorageType('XcmPallet.VersionNotifyTargets', 'Optional', [sts.number(), v9381.VersionedMultiLocation], sts.tuple(() => [sts.bigint(), v9381.Weight, sts.number()])) as VersionNotifyTargetsV9381,
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface VersionNotifyTargetsV9100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v9100.XcmVersion, key2: v9100.VersionedMultiLocation): Promise<([bigint, bigint, v9100.XcmVersion] | undefined)>
    getMany(block: Block, keys: [v9100.XcmVersion, v9100.VersionedMultiLocation][]): Promise<([bigint, bigint, v9100.XcmVersion] | undefined)[]>
    getKeys(block: Block): Promise<[v9100.XcmVersion, v9100.VersionedMultiLocation][]>
    getKeys(block: Block, key1: v9100.XcmVersion): Promise<[v9100.XcmVersion, v9100.VersionedMultiLocation][]>
    getKeys(block: Block, key1: v9100.XcmVersion, key2: v9100.VersionedMultiLocation): Promise<[v9100.XcmVersion, v9100.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v9100.XcmVersion, v9100.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: v9100.XcmVersion): AsyncIterable<[v9100.XcmVersion, v9100.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: v9100.XcmVersion, key2: v9100.VersionedMultiLocation): AsyncIterable<[v9100.XcmVersion, v9100.VersionedMultiLocation][]>
    getPairs(block: Block): Promise<[k: [v9100.XcmVersion, v9100.VersionedMultiLocation], v: ([bigint, bigint, v9100.XcmVersion] | undefined)][]>
    getPairs(block: Block, key1: v9100.XcmVersion): Promise<[k: [v9100.XcmVersion, v9100.VersionedMultiLocation], v: ([bigint, bigint, v9100.XcmVersion] | undefined)][]>
    getPairs(block: Block, key1: v9100.XcmVersion, key2: v9100.VersionedMultiLocation): Promise<[k: [v9100.XcmVersion, v9100.VersionedMultiLocation], v: ([bigint, bigint, v9100.XcmVersion] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v9100.XcmVersion, v9100.VersionedMultiLocation], v: ([bigint, bigint, v9100.XcmVersion] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v9100.XcmVersion): AsyncIterable<[k: [v9100.XcmVersion, v9100.VersionedMultiLocation], v: ([bigint, bigint, v9100.XcmVersion] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v9100.XcmVersion, key2: v9100.VersionedMultiLocation): AsyncIterable<[k: [v9100.XcmVersion, v9100.VersionedMultiLocation], v: ([bigint, bigint, v9100.XcmVersion] | undefined)][]>
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface VersionNotifyTargetsV9111  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v9111.VersionedMultiLocation): Promise<([bigint, bigint, number] | undefined)>
    getMany(block: Block, keys: [number, v9111.VersionedMultiLocation][]): Promise<([bigint, bigint, number] | undefined)[]>
    getKeys(block: Block): Promise<[number, v9111.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, v9111.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number, key2: v9111.VersionedMultiLocation): Promise<[number, v9111.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v9111.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v9111.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v9111.VersionedMultiLocation): AsyncIterable<[number, v9111.VersionedMultiLocation][]>
    getPairs(block: Block): Promise<[k: [number, v9111.VersionedMultiLocation], v: ([bigint, bigint, number] | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v9111.VersionedMultiLocation], v: ([bigint, bigint, number] | undefined)][]>
    getPairs(block: Block, key1: number, key2: v9111.VersionedMultiLocation): Promise<[k: [number, v9111.VersionedMultiLocation], v: ([bigint, bigint, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v9111.VersionedMultiLocation], v: ([bigint, bigint, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v9111.VersionedMultiLocation], v: ([bigint, bigint, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v9111.VersionedMultiLocation): AsyncIterable<[k: [number, v9111.VersionedMultiLocation], v: ([bigint, bigint, number] | undefined)][]>
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface VersionNotifyTargetsV9370  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v9370.VersionedMultiLocation): Promise<([bigint, bigint, number] | undefined)>
    getMany(block: Block, keys: [number, v9370.VersionedMultiLocation][]): Promise<([bigint, bigint, number] | undefined)[]>
    getKeys(block: Block): Promise<[number, v9370.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, v9370.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number, key2: v9370.VersionedMultiLocation): Promise<[number, v9370.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v9370.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v9370.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v9370.VersionedMultiLocation): AsyncIterable<[number, v9370.VersionedMultiLocation][]>
    getPairs(block: Block): Promise<[k: [number, v9370.VersionedMultiLocation], v: ([bigint, bigint, number] | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v9370.VersionedMultiLocation], v: ([bigint, bigint, number] | undefined)][]>
    getPairs(block: Block, key1: number, key2: v9370.VersionedMultiLocation): Promise<[k: [number, v9370.VersionedMultiLocation], v: ([bigint, bigint, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v9370.VersionedMultiLocation], v: ([bigint, bigint, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v9370.VersionedMultiLocation], v: ([bigint, bigint, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v9370.VersionedMultiLocation): AsyncIterable<[k: [number, v9370.VersionedMultiLocation], v: ([bigint, bigint, number] | undefined)][]>
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface VersionNotifyTargetsV9381  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v9381.VersionedMultiLocation): Promise<([bigint, v9381.Weight, number] | undefined)>
    getMany(block: Block, keys: [number, v9381.VersionedMultiLocation][]): Promise<([bigint, v9381.Weight, number] | undefined)[]>
    getKeys(block: Block): Promise<[number, v9381.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, v9381.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number, key2: v9381.VersionedMultiLocation): Promise<[number, v9381.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v9381.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v9381.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v9381.VersionedMultiLocation): AsyncIterable<[number, v9381.VersionedMultiLocation][]>
    getPairs(block: Block): Promise<[k: [number, v9381.VersionedMultiLocation], v: ([bigint, v9381.Weight, number] | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v9381.VersionedMultiLocation], v: ([bigint, v9381.Weight, number] | undefined)][]>
    getPairs(block: Block, key1: number, key2: v9381.VersionedMultiLocation): Promise<[k: [number, v9381.VersionedMultiLocation], v: ([bigint, v9381.Weight, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v9381.VersionedMultiLocation], v: ([bigint, v9381.Weight, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v9381.VersionedMultiLocation], v: ([bigint, v9381.Weight, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v9381.VersionedMultiLocation): AsyncIterable<[k: [number, v9381.VersionedMultiLocation], v: ([bigint, v9381.Weight, number] | undefined)][]>
}

export const queryCounter =  {
    /**
     *  The latest available query index.
     */
    v9111: new StorageType('XcmPallet.QueryCounter', 'Default', [], sts.bigint()) as QueryCounterV9111,
}

/**
 *  The latest available query index.
 */
export interface QueryCounterV9111  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const queries =  {
    /**
     *  The ongoing queries.
     */
    v9111: new StorageType('XcmPallet.Queries', 'Optional', [sts.bigint()], v9111.QueryStatus) as QueriesV9111,
    /**
     *  The ongoing queries.
     */
    v9160: new StorageType('XcmPallet.Queries', 'Optional', [sts.bigint()], v9160.QueryStatus) as QueriesV9160,
    /**
     *  The ongoing queries.
     */
    v9370: new StorageType('XcmPallet.Queries', 'Optional', [sts.bigint()], v9370.QueryStatus) as QueriesV9370,
    /**
     *  The ongoing queries.
     */
    v9381: new StorageType('XcmPallet.Queries', 'Optional', [sts.bigint()], v9381.QueryStatus) as QueriesV9381,
}

/**
 *  The ongoing queries.
 */
export interface QueriesV9111  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v9111.QueryStatus | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v9111.QueryStatus | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v9111.QueryStatus | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v9111.QueryStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v9111.QueryStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v9111.QueryStatus | undefined)][]>
}

/**
 *  The ongoing queries.
 */
export interface QueriesV9160  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v9160.QueryStatus | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v9160.QueryStatus | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v9160.QueryStatus | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v9160.QueryStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v9160.QueryStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v9160.QueryStatus | undefined)][]>
}

/**
 *  The ongoing queries.
 */
export interface QueriesV9370  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v9370.QueryStatus | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v9370.QueryStatus | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v9370.QueryStatus | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v9370.QueryStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v9370.QueryStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v9370.QueryStatus | undefined)][]>
}

/**
 *  The ongoing queries.
 */
export interface QueriesV9381  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v9381.QueryStatus | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v9381.QueryStatus | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v9381.QueryStatus | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v9381.QueryStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v9381.QueryStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v9381.QueryStatus | undefined)][]>
}

export const assetTraps =  {
    /**
     *  The existing asset traps.
     * 
     *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
     *  times this pair has been trapped (usually just 1 if it exists at all).
     */
    v9111: new StorageType('XcmPallet.AssetTraps', 'Default', [v9111.H256], sts.number()) as AssetTrapsV9111,
}

/**
 *  The existing asset traps.
 * 
 *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
 *  times this pair has been trapped (usually just 1 if it exists at all).
 */
export interface AssetTrapsV9111  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key: v9111.H256): Promise<(number | undefined)>
    getMany(block: Block, keys: v9111.H256[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<v9111.H256[]>
    getKeys(block: Block, key: v9111.H256): Promise<v9111.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9111.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9111.H256): AsyncIterable<v9111.H256[]>
    getPairs(block: Block): Promise<[k: v9111.H256, v: (number | undefined)][]>
    getPairs(block: Block, key: v9111.H256): Promise<[k: v9111.H256, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9111.H256, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9111.H256): AsyncIterable<[k: v9111.H256, v: (number | undefined)][]>
}

export const safeXcmVersion =  {
    /**
     *  Default version to encode XCM when latest version of destination is unknown. If `None`,
     *  then the destinations whose XCM version is unknown are considered unreachable.
     */
    v9111: new StorageType('XcmPallet.SafeXcmVersion', 'Optional', [], sts.number()) as SafeXcmVersionV9111,
}

/**
 *  Default version to encode XCM when latest version of destination is unknown. If `None`,
 *  then the destinations whose XCM version is unknown are considered unreachable.
 */
export interface SafeXcmVersionV9111  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const supportedVersion =  {
    /**
     *  The Latest versions that we know various locations support.
     */
    v9111: new StorageType('XcmPallet.SupportedVersion', 'Optional', [sts.number(), v9111.VersionedMultiLocation], sts.number()) as SupportedVersionV9111,
    /**
     *  The Latest versions that we know various locations support.
     */
    v9370: new StorageType('XcmPallet.SupportedVersion', 'Optional', [sts.number(), v9370.VersionedMultiLocation], sts.number()) as SupportedVersionV9370,
    /**
     *  The Latest versions that we know various locations support.
     */
    v9381: new StorageType('XcmPallet.SupportedVersion', 'Optional', [sts.number(), v9381.VersionedMultiLocation], sts.number()) as SupportedVersionV9381,
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface SupportedVersionV9111  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v9111.VersionedMultiLocation): Promise<(number | undefined)>
    getMany(block: Block, keys: [number, v9111.VersionedMultiLocation][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[number, v9111.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, v9111.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number, key2: v9111.VersionedMultiLocation): Promise<[number, v9111.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v9111.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v9111.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v9111.VersionedMultiLocation): AsyncIterable<[number, v9111.VersionedMultiLocation][]>
    getPairs(block: Block): Promise<[k: [number, v9111.VersionedMultiLocation], v: (number | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v9111.VersionedMultiLocation], v: (number | undefined)][]>
    getPairs(block: Block, key1: number, key2: v9111.VersionedMultiLocation): Promise<[k: [number, v9111.VersionedMultiLocation], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v9111.VersionedMultiLocation], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v9111.VersionedMultiLocation], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v9111.VersionedMultiLocation): AsyncIterable<[k: [number, v9111.VersionedMultiLocation], v: (number | undefined)][]>
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface SupportedVersionV9370  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v9370.VersionedMultiLocation): Promise<(number | undefined)>
    getMany(block: Block, keys: [number, v9370.VersionedMultiLocation][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[number, v9370.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, v9370.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number, key2: v9370.VersionedMultiLocation): Promise<[number, v9370.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v9370.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v9370.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v9370.VersionedMultiLocation): AsyncIterable<[number, v9370.VersionedMultiLocation][]>
    getPairs(block: Block): Promise<[k: [number, v9370.VersionedMultiLocation], v: (number | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v9370.VersionedMultiLocation], v: (number | undefined)][]>
    getPairs(block: Block, key1: number, key2: v9370.VersionedMultiLocation): Promise<[k: [number, v9370.VersionedMultiLocation], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v9370.VersionedMultiLocation], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v9370.VersionedMultiLocation], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v9370.VersionedMultiLocation): AsyncIterable<[k: [number, v9370.VersionedMultiLocation], v: (number | undefined)][]>
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface SupportedVersionV9381  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v9381.VersionedMultiLocation): Promise<(number | undefined)>
    getMany(block: Block, keys: [number, v9381.VersionedMultiLocation][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[number, v9381.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, v9381.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number, key2: v9381.VersionedMultiLocation): Promise<[number, v9381.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v9381.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v9381.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v9381.VersionedMultiLocation): AsyncIterable<[number, v9381.VersionedMultiLocation][]>
    getPairs(block: Block): Promise<[k: [number, v9381.VersionedMultiLocation], v: (number | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v9381.VersionedMultiLocation], v: (number | undefined)][]>
    getPairs(block: Block, key1: number, key2: v9381.VersionedMultiLocation): Promise<[k: [number, v9381.VersionedMultiLocation], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v9381.VersionedMultiLocation], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v9381.VersionedMultiLocation], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v9381.VersionedMultiLocation): AsyncIterable<[k: [number, v9381.VersionedMultiLocation], v: (number | undefined)][]>
}

export const versionNotifiers =  {
    /**
     *  All locations that we have requested version notifications from.
     */
    v9111: new StorageType('XcmPallet.VersionNotifiers', 'Optional', [sts.number(), v9111.VersionedMultiLocation], sts.bigint()) as VersionNotifiersV9111,
    /**
     *  All locations that we have requested version notifications from.
     */
    v9370: new StorageType('XcmPallet.VersionNotifiers', 'Optional', [sts.number(), v9370.VersionedMultiLocation], sts.bigint()) as VersionNotifiersV9370,
    /**
     *  All locations that we have requested version notifications from.
     */
    v9381: new StorageType('XcmPallet.VersionNotifiers', 'Optional', [sts.number(), v9381.VersionedMultiLocation], sts.bigint()) as VersionNotifiersV9381,
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface VersionNotifiersV9111  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v9111.VersionedMultiLocation): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [number, v9111.VersionedMultiLocation][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[number, v9111.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, v9111.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number, key2: v9111.VersionedMultiLocation): Promise<[number, v9111.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v9111.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v9111.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v9111.VersionedMultiLocation): AsyncIterable<[number, v9111.VersionedMultiLocation][]>
    getPairs(block: Block): Promise<[k: [number, v9111.VersionedMultiLocation], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v9111.VersionedMultiLocation], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: number, key2: v9111.VersionedMultiLocation): Promise<[k: [number, v9111.VersionedMultiLocation], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v9111.VersionedMultiLocation], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v9111.VersionedMultiLocation], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v9111.VersionedMultiLocation): AsyncIterable<[k: [number, v9111.VersionedMultiLocation], v: (bigint | undefined)][]>
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface VersionNotifiersV9370  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v9370.VersionedMultiLocation): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [number, v9370.VersionedMultiLocation][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[number, v9370.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, v9370.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number, key2: v9370.VersionedMultiLocation): Promise<[number, v9370.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v9370.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v9370.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v9370.VersionedMultiLocation): AsyncIterable<[number, v9370.VersionedMultiLocation][]>
    getPairs(block: Block): Promise<[k: [number, v9370.VersionedMultiLocation], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v9370.VersionedMultiLocation], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: number, key2: v9370.VersionedMultiLocation): Promise<[k: [number, v9370.VersionedMultiLocation], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v9370.VersionedMultiLocation], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v9370.VersionedMultiLocation], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v9370.VersionedMultiLocation): AsyncIterable<[k: [number, v9370.VersionedMultiLocation], v: (bigint | undefined)][]>
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface VersionNotifiersV9381  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v9381.VersionedMultiLocation): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [number, v9381.VersionedMultiLocation][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[number, v9381.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, v9381.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number, key2: v9381.VersionedMultiLocation): Promise<[number, v9381.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v9381.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v9381.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v9381.VersionedMultiLocation): AsyncIterable<[number, v9381.VersionedMultiLocation][]>
    getPairs(block: Block): Promise<[k: [number, v9381.VersionedMultiLocation], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v9381.VersionedMultiLocation], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: number, key2: v9381.VersionedMultiLocation): Promise<[k: [number, v9381.VersionedMultiLocation], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v9381.VersionedMultiLocation], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v9381.VersionedMultiLocation], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v9381.VersionedMultiLocation): AsyncIterable<[k: [number, v9381.VersionedMultiLocation], v: (bigint | undefined)][]>
}

export const versionDiscoveryQueue =  {
    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    v9111: new StorageType('XcmPallet.VersionDiscoveryQueue', 'Default', [], sts.array(() => sts.tuple(() => [v9111.VersionedMultiLocation, sts.number()]))) as VersionDiscoveryQueueV9111,
    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    v9370: new StorageType('XcmPallet.VersionDiscoveryQueue', 'Default', [], sts.array(() => sts.tuple(() => [v9370.VersionedMultiLocation, sts.number()]))) as VersionDiscoveryQueueV9370,
    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    v9381: new StorageType('XcmPallet.VersionDiscoveryQueue', 'Default', [], sts.array(() => sts.tuple(() => [v9381.VersionedMultiLocation, sts.number()]))) as VersionDiscoveryQueueV9381,
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface VersionDiscoveryQueueV9111  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v9111.VersionedMultiLocation, number][]
    get(block: Block): Promise<([v9111.VersionedMultiLocation, number][] | undefined)>
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface VersionDiscoveryQueueV9370  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v9370.VersionedMultiLocation, number][]
    get(block: Block): Promise<([v9370.VersionedMultiLocation, number][] | undefined)>
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface VersionDiscoveryQueueV9381  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v9381.VersionedMultiLocation, number][]
    get(block: Block): Promise<([v9381.VersionedMultiLocation, number][] | undefined)>
}

export const currentMigration =  {
    /**
     *  The current migration's stage, if any.
     */
    v9111: new StorageType('XcmPallet.CurrentMigration', 'Optional', [], v9111.VersionMigrationStage) as CurrentMigrationV9111,
}

/**
 *  The current migration's stage, if any.
 */
export interface CurrentMigrationV9111  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v9111.VersionMigrationStage | undefined)>
}

export const remoteLockedFungibles =  {
    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    v9381: new StorageType('XcmPallet.RemoteLockedFungibles', 'Optional', [sts.number(), v9381.AccountId32, v9381.VersionedAssetId], v9381.RemoteLockedFungibleRecord) as RemoteLockedFungiblesV9381,
    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    v9430: new StorageType('XcmPallet.RemoteLockedFungibles', 'Optional', [sts.number(), v9430.AccountId32, v9430.VersionedAssetId], v9430.RemoteLockedFungibleRecord) as RemoteLockedFungiblesV9430,
}

/**
 *  Fungible assets which we know are locked on a remote chain.
 */
export interface RemoteLockedFungiblesV9381  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v9381.AccountId32, key3: v9381.VersionedAssetId): Promise<(v9381.RemoteLockedFungibleRecord | undefined)>
    getMany(block: Block, keys: [number, v9381.AccountId32, v9381.VersionedAssetId][]): Promise<(v9381.RemoteLockedFungibleRecord | undefined)[]>
    getKeys(block: Block): Promise<[number, v9381.AccountId32, v9381.VersionedAssetId][]>
    getKeys(block: Block, key1: number): Promise<[number, v9381.AccountId32, v9381.VersionedAssetId][]>
    getKeys(block: Block, key1: number, key2: v9381.AccountId32): Promise<[number, v9381.AccountId32, v9381.VersionedAssetId][]>
    getKeys(block: Block, key1: number, key2: v9381.AccountId32, key3: v9381.VersionedAssetId): Promise<[number, v9381.AccountId32, v9381.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v9381.AccountId32, v9381.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v9381.AccountId32, v9381.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v9381.AccountId32): AsyncIterable<[number, v9381.AccountId32, v9381.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v9381.AccountId32, key3: v9381.VersionedAssetId): AsyncIterable<[number, v9381.AccountId32, v9381.VersionedAssetId][]>
    getPairs(block: Block): Promise<[k: [number, v9381.AccountId32, v9381.VersionedAssetId], v: (v9381.RemoteLockedFungibleRecord | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v9381.AccountId32, v9381.VersionedAssetId], v: (v9381.RemoteLockedFungibleRecord | undefined)][]>
    getPairs(block: Block, key1: number, key2: v9381.AccountId32): Promise<[k: [number, v9381.AccountId32, v9381.VersionedAssetId], v: (v9381.RemoteLockedFungibleRecord | undefined)][]>
    getPairs(block: Block, key1: number, key2: v9381.AccountId32, key3: v9381.VersionedAssetId): Promise<[k: [number, v9381.AccountId32, v9381.VersionedAssetId], v: (v9381.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v9381.AccountId32, v9381.VersionedAssetId], v: (v9381.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v9381.AccountId32, v9381.VersionedAssetId], v: (v9381.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v9381.AccountId32): AsyncIterable<[k: [number, v9381.AccountId32, v9381.VersionedAssetId], v: (v9381.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v9381.AccountId32, key3: v9381.VersionedAssetId): AsyncIterable<[k: [number, v9381.AccountId32, v9381.VersionedAssetId], v: (v9381.RemoteLockedFungibleRecord | undefined)][]>
}

/**
 *  Fungible assets which we know are locked on a remote chain.
 */
export interface RemoteLockedFungiblesV9430  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v9430.AccountId32, key3: v9430.VersionedAssetId): Promise<(v9430.RemoteLockedFungibleRecord | undefined)>
    getMany(block: Block, keys: [number, v9430.AccountId32, v9430.VersionedAssetId][]): Promise<(v9430.RemoteLockedFungibleRecord | undefined)[]>
    getKeys(block: Block): Promise<[number, v9430.AccountId32, v9430.VersionedAssetId][]>
    getKeys(block: Block, key1: number): Promise<[number, v9430.AccountId32, v9430.VersionedAssetId][]>
    getKeys(block: Block, key1: number, key2: v9430.AccountId32): Promise<[number, v9430.AccountId32, v9430.VersionedAssetId][]>
    getKeys(block: Block, key1: number, key2: v9430.AccountId32, key3: v9430.VersionedAssetId): Promise<[number, v9430.AccountId32, v9430.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v9430.AccountId32, v9430.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v9430.AccountId32, v9430.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v9430.AccountId32): AsyncIterable<[number, v9430.AccountId32, v9430.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v9430.AccountId32, key3: v9430.VersionedAssetId): AsyncIterable<[number, v9430.AccountId32, v9430.VersionedAssetId][]>
    getPairs(block: Block): Promise<[k: [number, v9430.AccountId32, v9430.VersionedAssetId], v: (v9430.RemoteLockedFungibleRecord | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v9430.AccountId32, v9430.VersionedAssetId], v: (v9430.RemoteLockedFungibleRecord | undefined)][]>
    getPairs(block: Block, key1: number, key2: v9430.AccountId32): Promise<[k: [number, v9430.AccountId32, v9430.VersionedAssetId], v: (v9430.RemoteLockedFungibleRecord | undefined)][]>
    getPairs(block: Block, key1: number, key2: v9430.AccountId32, key3: v9430.VersionedAssetId): Promise<[k: [number, v9430.AccountId32, v9430.VersionedAssetId], v: (v9430.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v9430.AccountId32, v9430.VersionedAssetId], v: (v9430.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v9430.AccountId32, v9430.VersionedAssetId], v: (v9430.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v9430.AccountId32): AsyncIterable<[k: [number, v9430.AccountId32, v9430.VersionedAssetId], v: (v9430.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v9430.AccountId32, key3: v9430.VersionedAssetId): AsyncIterable<[k: [number, v9430.AccountId32, v9430.VersionedAssetId], v: (v9430.RemoteLockedFungibleRecord | undefined)][]>
}

export const lockedFungibles =  {
    /**
     *  Fungible assets which we know are locked on this chain.
     */
    v9381: new StorageType('XcmPallet.LockedFungibles', 'Optional', [v9381.AccountId32], sts.array(() => sts.tuple(() => [sts.bigint(), v9381.VersionedMultiLocation]))) as LockedFungiblesV9381,
}

/**
 *  Fungible assets which we know are locked on this chain.
 */
export interface LockedFungiblesV9381  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9381.AccountId32): Promise<([bigint, v9381.VersionedMultiLocation][] | undefined)>
    getMany(block: Block, keys: v9381.AccountId32[]): Promise<([bigint, v9381.VersionedMultiLocation][] | undefined)[]>
    getKeys(block: Block): Promise<v9381.AccountId32[]>
    getKeys(block: Block, key: v9381.AccountId32): Promise<v9381.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9381.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9381.AccountId32): AsyncIterable<v9381.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9381.AccountId32, v: ([bigint, v9381.VersionedMultiLocation][] | undefined)][]>
    getPairs(block: Block, key: v9381.AccountId32): Promise<[k: v9381.AccountId32, v: ([bigint, v9381.VersionedMultiLocation][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9381.AccountId32, v: ([bigint, v9381.VersionedMultiLocation][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9381.AccountId32): AsyncIterable<[k: v9381.AccountId32, v: ([bigint, v9381.VersionedMultiLocation][] | undefined)][]>
}

export const xcmExecutionSuspended =  {
    /**
     *  Global suspension state of the XCM executor.
     */
    v9420: new StorageType('XcmPallet.XcmExecutionSuspended', 'Default', [], sts.boolean()) as XcmExecutionSuspendedV9420,
}

/**
 *  Global suspension state of the XCM executor.
 */
export interface XcmExecutionSuspendedV9420  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}
