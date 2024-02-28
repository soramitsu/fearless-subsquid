import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9140 from '../v9140'
import * as v9170 from '../v9170'
import * as v9370 from '../v9370'
import * as v9420 from '../v9420'
import * as v9430 from '../v9430'

export const queryCounter =  {
    /**
     *  The latest available query index.
     */
    v9140: new StorageType('XcmPallet.QueryCounter', 'Default', [], sts.bigint()) as QueryCounterV9140,
}

/**
 *  The latest available query index.
 */
export interface QueryCounterV9140  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const queries =  {
    /**
     *  The ongoing queries.
     */
    v9140: new StorageType('XcmPallet.Queries', 'Optional', [sts.bigint()], v9140.QueryStatus) as QueriesV9140,
    /**
     *  The ongoing queries.
     */
    v9170: new StorageType('XcmPallet.Queries', 'Optional', [sts.bigint()], v9170.QueryStatus) as QueriesV9170,
    /**
     *  The ongoing queries.
     */
    v9370: new StorageType('XcmPallet.Queries', 'Optional', [sts.bigint()], v9370.QueryStatus) as QueriesV9370,
    /**
     *  The ongoing queries.
     */
    v9420: new StorageType('XcmPallet.Queries', 'Optional', [sts.bigint()], v9420.QueryStatus) as QueriesV9420,
}

/**
 *  The ongoing queries.
 */
export interface QueriesV9140  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v9140.QueryStatus | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v9140.QueryStatus | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v9140.QueryStatus | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v9140.QueryStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v9140.QueryStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v9140.QueryStatus | undefined)][]>
}

/**
 *  The ongoing queries.
 */
export interface QueriesV9170  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v9170.QueryStatus | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v9170.QueryStatus | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v9170.QueryStatus | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v9170.QueryStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v9170.QueryStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v9170.QueryStatus | undefined)][]>
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
export interface QueriesV9420  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v9420.QueryStatus | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v9420.QueryStatus | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v9420.QueryStatus | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v9420.QueryStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v9420.QueryStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v9420.QueryStatus | undefined)][]>
}

export const assetTraps =  {
    /**
     *  The existing asset traps.
     * 
     *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
     *  times this pair has been trapped (usually just 1 if it exists at all).
     */
    v9140: new StorageType('XcmPallet.AssetTraps', 'Default', [v9140.H256], sts.number()) as AssetTrapsV9140,
}

/**
 *  The existing asset traps.
 * 
 *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
 *  times this pair has been trapped (usually just 1 if it exists at all).
 */
export interface AssetTrapsV9140  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key: v9140.H256): Promise<(number | undefined)>
    getMany(block: Block, keys: v9140.H256[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<v9140.H256[]>
    getKeys(block: Block, key: v9140.H256): Promise<v9140.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9140.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9140.H256): AsyncIterable<v9140.H256[]>
    getPairs(block: Block): Promise<[k: v9140.H256, v: (number | undefined)][]>
    getPairs(block: Block, key: v9140.H256): Promise<[k: v9140.H256, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9140.H256, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9140.H256): AsyncIterable<[k: v9140.H256, v: (number | undefined)][]>
}

export const safeXcmVersion =  {
    /**
     *  Default version to encode XCM when latest version of destination is unknown. If `None`,
     *  then the destinations whose XCM version is unknown are considered unreachable.
     */
    v9140: new StorageType('XcmPallet.SafeXcmVersion', 'Optional', [], sts.number()) as SafeXcmVersionV9140,
}

/**
 *  Default version to encode XCM when latest version of destination is unknown. If `None`,
 *  then the destinations whose XCM version is unknown are considered unreachable.
 */
export interface SafeXcmVersionV9140  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const supportedVersion =  {
    /**
     *  The Latest versions that we know various locations support.
     */
    v9140: new StorageType('XcmPallet.SupportedVersion', 'Optional', [sts.number(), v9140.VersionedMultiLocation], sts.number()) as SupportedVersionV9140,
    /**
     *  The Latest versions that we know various locations support.
     */
    v9370: new StorageType('XcmPallet.SupportedVersion', 'Optional', [sts.number(), v9370.VersionedMultiLocation], sts.number()) as SupportedVersionV9370,
    /**
     *  The Latest versions that we know various locations support.
     */
    v9420: new StorageType('XcmPallet.SupportedVersion', 'Optional', [sts.number(), v9420.VersionedMultiLocation], sts.number()) as SupportedVersionV9420,
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface SupportedVersionV9140  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v9140.VersionedMultiLocation): Promise<(number | undefined)>
    getMany(block: Block, keys: [number, v9140.VersionedMultiLocation][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[number, v9140.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, v9140.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number, key2: v9140.VersionedMultiLocation): Promise<[number, v9140.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v9140.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v9140.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v9140.VersionedMultiLocation): AsyncIterable<[number, v9140.VersionedMultiLocation][]>
    getPairs(block: Block): Promise<[k: [number, v9140.VersionedMultiLocation], v: (number | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v9140.VersionedMultiLocation], v: (number | undefined)][]>
    getPairs(block: Block, key1: number, key2: v9140.VersionedMultiLocation): Promise<[k: [number, v9140.VersionedMultiLocation], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v9140.VersionedMultiLocation], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v9140.VersionedMultiLocation], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v9140.VersionedMultiLocation): AsyncIterable<[k: [number, v9140.VersionedMultiLocation], v: (number | undefined)][]>
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
export interface SupportedVersionV9420  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v9420.VersionedMultiLocation): Promise<(number | undefined)>
    getMany(block: Block, keys: [number, v9420.VersionedMultiLocation][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[number, v9420.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, v9420.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number, key2: v9420.VersionedMultiLocation): Promise<[number, v9420.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v9420.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v9420.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v9420.VersionedMultiLocation): AsyncIterable<[number, v9420.VersionedMultiLocation][]>
    getPairs(block: Block): Promise<[k: [number, v9420.VersionedMultiLocation], v: (number | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v9420.VersionedMultiLocation], v: (number | undefined)][]>
    getPairs(block: Block, key1: number, key2: v9420.VersionedMultiLocation): Promise<[k: [number, v9420.VersionedMultiLocation], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v9420.VersionedMultiLocation], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v9420.VersionedMultiLocation], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v9420.VersionedMultiLocation): AsyncIterable<[k: [number, v9420.VersionedMultiLocation], v: (number | undefined)][]>
}

export const versionNotifiers =  {
    /**
     *  All locations that we have requested version notifications from.
     */
    v9140: new StorageType('XcmPallet.VersionNotifiers', 'Optional', [sts.number(), v9140.VersionedMultiLocation], sts.bigint()) as VersionNotifiersV9140,
    /**
     *  All locations that we have requested version notifications from.
     */
    v9370: new StorageType('XcmPallet.VersionNotifiers', 'Optional', [sts.number(), v9370.VersionedMultiLocation], sts.bigint()) as VersionNotifiersV9370,
    /**
     *  All locations that we have requested version notifications from.
     */
    v9420: new StorageType('XcmPallet.VersionNotifiers', 'Optional', [sts.number(), v9420.VersionedMultiLocation], sts.bigint()) as VersionNotifiersV9420,
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface VersionNotifiersV9140  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v9140.VersionedMultiLocation): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [number, v9140.VersionedMultiLocation][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[number, v9140.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, v9140.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number, key2: v9140.VersionedMultiLocation): Promise<[number, v9140.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v9140.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v9140.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v9140.VersionedMultiLocation): AsyncIterable<[number, v9140.VersionedMultiLocation][]>
    getPairs(block: Block): Promise<[k: [number, v9140.VersionedMultiLocation], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v9140.VersionedMultiLocation], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: number, key2: v9140.VersionedMultiLocation): Promise<[k: [number, v9140.VersionedMultiLocation], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v9140.VersionedMultiLocation], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v9140.VersionedMultiLocation], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v9140.VersionedMultiLocation): AsyncIterable<[k: [number, v9140.VersionedMultiLocation], v: (bigint | undefined)][]>
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
export interface VersionNotifiersV9420  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v9420.VersionedMultiLocation): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [number, v9420.VersionedMultiLocation][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[number, v9420.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, v9420.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number, key2: v9420.VersionedMultiLocation): Promise<[number, v9420.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v9420.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v9420.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v9420.VersionedMultiLocation): AsyncIterable<[number, v9420.VersionedMultiLocation][]>
    getPairs(block: Block): Promise<[k: [number, v9420.VersionedMultiLocation], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v9420.VersionedMultiLocation], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: number, key2: v9420.VersionedMultiLocation): Promise<[k: [number, v9420.VersionedMultiLocation], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v9420.VersionedMultiLocation], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v9420.VersionedMultiLocation], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v9420.VersionedMultiLocation): AsyncIterable<[k: [number, v9420.VersionedMultiLocation], v: (bigint | undefined)][]>
}

export const versionNotifyTargets =  {
    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    v9140: new StorageType('XcmPallet.VersionNotifyTargets', 'Optional', [sts.number(), v9140.VersionedMultiLocation], sts.tuple(() => [sts.bigint(), sts.bigint(), sts.number()])) as VersionNotifyTargetsV9140,
    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    v9370: new StorageType('XcmPallet.VersionNotifyTargets', 'Optional', [sts.number(), v9370.VersionedMultiLocation], sts.tuple(() => [sts.bigint(), sts.bigint(), sts.number()])) as VersionNotifyTargetsV9370,
    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    v9420: new StorageType('XcmPallet.VersionNotifyTargets', 'Optional', [sts.number(), v9420.VersionedMultiLocation], sts.tuple(() => [sts.bigint(), v9420.Weight, sts.number()])) as VersionNotifyTargetsV9420,
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface VersionNotifyTargetsV9140  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v9140.VersionedMultiLocation): Promise<([bigint, bigint, number] | undefined)>
    getMany(block: Block, keys: [number, v9140.VersionedMultiLocation][]): Promise<([bigint, bigint, number] | undefined)[]>
    getKeys(block: Block): Promise<[number, v9140.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, v9140.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number, key2: v9140.VersionedMultiLocation): Promise<[number, v9140.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v9140.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v9140.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v9140.VersionedMultiLocation): AsyncIterable<[number, v9140.VersionedMultiLocation][]>
    getPairs(block: Block): Promise<[k: [number, v9140.VersionedMultiLocation], v: ([bigint, bigint, number] | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v9140.VersionedMultiLocation], v: ([bigint, bigint, number] | undefined)][]>
    getPairs(block: Block, key1: number, key2: v9140.VersionedMultiLocation): Promise<[k: [number, v9140.VersionedMultiLocation], v: ([bigint, bigint, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v9140.VersionedMultiLocation], v: ([bigint, bigint, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v9140.VersionedMultiLocation], v: ([bigint, bigint, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v9140.VersionedMultiLocation): AsyncIterable<[k: [number, v9140.VersionedMultiLocation], v: ([bigint, bigint, number] | undefined)][]>
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
export interface VersionNotifyTargetsV9420  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v9420.VersionedMultiLocation): Promise<([bigint, v9420.Weight, number] | undefined)>
    getMany(block: Block, keys: [number, v9420.VersionedMultiLocation][]): Promise<([bigint, v9420.Weight, number] | undefined)[]>
    getKeys(block: Block): Promise<[number, v9420.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, v9420.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number, key2: v9420.VersionedMultiLocation): Promise<[number, v9420.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v9420.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v9420.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v9420.VersionedMultiLocation): AsyncIterable<[number, v9420.VersionedMultiLocation][]>
    getPairs(block: Block): Promise<[k: [number, v9420.VersionedMultiLocation], v: ([bigint, v9420.Weight, number] | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v9420.VersionedMultiLocation], v: ([bigint, v9420.Weight, number] | undefined)][]>
    getPairs(block: Block, key1: number, key2: v9420.VersionedMultiLocation): Promise<[k: [number, v9420.VersionedMultiLocation], v: ([bigint, v9420.Weight, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v9420.VersionedMultiLocation], v: ([bigint, v9420.Weight, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v9420.VersionedMultiLocation], v: ([bigint, v9420.Weight, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v9420.VersionedMultiLocation): AsyncIterable<[k: [number, v9420.VersionedMultiLocation], v: ([bigint, v9420.Weight, number] | undefined)][]>
}

export const versionDiscoveryQueue =  {
    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    v9140: new StorageType('XcmPallet.VersionDiscoveryQueue', 'Default', [], sts.array(() => sts.tuple(() => [v9140.VersionedMultiLocation, sts.number()]))) as VersionDiscoveryQueueV9140,
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
    v9420: new StorageType('XcmPallet.VersionDiscoveryQueue', 'Default', [], sts.array(() => sts.tuple(() => [v9420.VersionedMultiLocation, sts.number()]))) as VersionDiscoveryQueueV9420,
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface VersionDiscoveryQueueV9140  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v9140.VersionedMultiLocation, number][]
    get(block: Block): Promise<([v9140.VersionedMultiLocation, number][] | undefined)>
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
export interface VersionDiscoveryQueueV9420  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v9420.VersionedMultiLocation, number][]
    get(block: Block): Promise<([v9420.VersionedMultiLocation, number][] | undefined)>
}

export const currentMigration =  {
    /**
     *  The current migration's stage, if any.
     */
    v9140: new StorageType('XcmPallet.CurrentMigration', 'Optional', [], v9140.VersionMigrationStage) as CurrentMigrationV9140,
}

/**
 *  The current migration's stage, if any.
 */
export interface CurrentMigrationV9140  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v9140.VersionMigrationStage | undefined)>
}

export const remoteLockedFungibles =  {
    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    v9420: new StorageType('XcmPallet.RemoteLockedFungibles', 'Optional', [sts.number(), v9420.AccountId32, v9420.VersionedAssetId], v9420.RemoteLockedFungibleRecord) as RemoteLockedFungiblesV9420,
    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    v9430: new StorageType('XcmPallet.RemoteLockedFungibles', 'Optional', [sts.number(), v9430.AccountId32, v9430.VersionedAssetId], v9430.RemoteLockedFungibleRecord) as RemoteLockedFungiblesV9430,
}

/**
 *  Fungible assets which we know are locked on a remote chain.
 */
export interface RemoteLockedFungiblesV9420  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v9420.AccountId32, key3: v9420.VersionedAssetId): Promise<(v9420.RemoteLockedFungibleRecord | undefined)>
    getMany(block: Block, keys: [number, v9420.AccountId32, v9420.VersionedAssetId][]): Promise<(v9420.RemoteLockedFungibleRecord | undefined)[]>
    getKeys(block: Block): Promise<[number, v9420.AccountId32, v9420.VersionedAssetId][]>
    getKeys(block: Block, key1: number): Promise<[number, v9420.AccountId32, v9420.VersionedAssetId][]>
    getKeys(block: Block, key1: number, key2: v9420.AccountId32): Promise<[number, v9420.AccountId32, v9420.VersionedAssetId][]>
    getKeys(block: Block, key1: number, key2: v9420.AccountId32, key3: v9420.VersionedAssetId): Promise<[number, v9420.AccountId32, v9420.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v9420.AccountId32, v9420.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v9420.AccountId32, v9420.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v9420.AccountId32): AsyncIterable<[number, v9420.AccountId32, v9420.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v9420.AccountId32, key3: v9420.VersionedAssetId): AsyncIterable<[number, v9420.AccountId32, v9420.VersionedAssetId][]>
    getPairs(block: Block): Promise<[k: [number, v9420.AccountId32, v9420.VersionedAssetId], v: (v9420.RemoteLockedFungibleRecord | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v9420.AccountId32, v9420.VersionedAssetId], v: (v9420.RemoteLockedFungibleRecord | undefined)][]>
    getPairs(block: Block, key1: number, key2: v9420.AccountId32): Promise<[k: [number, v9420.AccountId32, v9420.VersionedAssetId], v: (v9420.RemoteLockedFungibleRecord | undefined)][]>
    getPairs(block: Block, key1: number, key2: v9420.AccountId32, key3: v9420.VersionedAssetId): Promise<[k: [number, v9420.AccountId32, v9420.VersionedAssetId], v: (v9420.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v9420.AccountId32, v9420.VersionedAssetId], v: (v9420.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v9420.AccountId32, v9420.VersionedAssetId], v: (v9420.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v9420.AccountId32): AsyncIterable<[k: [number, v9420.AccountId32, v9420.VersionedAssetId], v: (v9420.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v9420.AccountId32, key3: v9420.VersionedAssetId): AsyncIterable<[k: [number, v9420.AccountId32, v9420.VersionedAssetId], v: (v9420.RemoteLockedFungibleRecord | undefined)][]>
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
    v9420: new StorageType('XcmPallet.LockedFungibles', 'Optional', [v9420.AccountId32], sts.array(() => sts.tuple(() => [sts.bigint(), v9420.VersionedMultiLocation]))) as LockedFungiblesV9420,
}

/**
 *  Fungible assets which we know are locked on this chain.
 */
export interface LockedFungiblesV9420  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9420.AccountId32): Promise<([bigint, v9420.VersionedMultiLocation][] | undefined)>
    getMany(block: Block, keys: v9420.AccountId32[]): Promise<([bigint, v9420.VersionedMultiLocation][] | undefined)[]>
    getKeys(block: Block): Promise<v9420.AccountId32[]>
    getKeys(block: Block, key: v9420.AccountId32): Promise<v9420.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9420.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9420.AccountId32): AsyncIterable<v9420.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9420.AccountId32, v: ([bigint, v9420.VersionedMultiLocation][] | undefined)][]>
    getPairs(block: Block, key: v9420.AccountId32): Promise<[k: v9420.AccountId32, v: ([bigint, v9420.VersionedMultiLocation][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9420.AccountId32, v: ([bigint, v9420.VersionedMultiLocation][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9420.AccountId32): AsyncIterable<[k: v9420.AccountId32, v: ([bigint, v9420.VersionedMultiLocation][] | undefined)][]>
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
