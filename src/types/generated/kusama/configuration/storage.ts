import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9090 from '../v9090'
import * as v9111 from '../v9111'
import * as v9160 from '../v9160'
import * as v9291 from '../v9291'
import * as v9320 from '../v9320'
import * as v9370 from '../v9370'
import * as v9420 from '../v9420'
import * as v9430 from '../v9430'
import * as v1000000 from '../v1000000'

export const activeConfig =  {
    /**
     *  The active configuration for the current session.
     */
    v9090: new StorageType('Configuration.ActiveConfig', 'Default', [], v9090.HostConfiguration) as ActiveConfigV9090,
    /**
     *  The active configuration for the current session.
     */
    v9111: new StorageType('Configuration.ActiveConfig', 'Default', [], v9111.HostConfiguration) as ActiveConfigV9111,
    /**
     *  The active configuration for the current session.
     */
    v9160: new StorageType('Configuration.ActiveConfig', 'Default', [], v9160.HostConfiguration) as ActiveConfigV9160,
    /**
     *  The active configuration for the current session.
     */
    v9291: new StorageType('Configuration.ActiveConfig', 'Default', [], v9291.HostConfiguration) as ActiveConfigV9291,
    /**
     *  The active configuration for the current session.
     */
    v9320: new StorageType('Configuration.ActiveConfig', 'Default', [], v9320.HostConfiguration) as ActiveConfigV9320,
    /**
     *  The active configuration for the current session.
     */
    v9370: new StorageType('Configuration.ActiveConfig', 'Default', [], v9370.HostConfiguration) as ActiveConfigV9370,
    /**
     *  The active configuration for the current session.
     */
    v9420: new StorageType('Configuration.ActiveConfig', 'Default', [], v9420.HostConfiguration) as ActiveConfigV9420,
    /**
     *  The active configuration for the current session.
     */
    v9430: new StorageType('Configuration.ActiveConfig', 'Default', [], v9430.HostConfiguration) as ActiveConfigV9430,
    /**
     *  The active configuration for the current session.
     */
    v1000000: new StorageType('Configuration.ActiveConfig', 'Default', [], v1000000.HostConfiguration) as ActiveConfigV1000000,
}

/**
 *  The active configuration for the current session.
 */
export interface ActiveConfigV9090  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9090.HostConfiguration
    get(block: Block): Promise<(v9090.HostConfiguration | undefined)>
}

/**
 *  The active configuration for the current session.
 */
export interface ActiveConfigV9111  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9111.HostConfiguration
    get(block: Block): Promise<(v9111.HostConfiguration | undefined)>
}

/**
 *  The active configuration for the current session.
 */
export interface ActiveConfigV9160  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9160.HostConfiguration
    get(block: Block): Promise<(v9160.HostConfiguration | undefined)>
}

/**
 *  The active configuration for the current session.
 */
export interface ActiveConfigV9291  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9291.HostConfiguration
    get(block: Block): Promise<(v9291.HostConfiguration | undefined)>
}

/**
 *  The active configuration for the current session.
 */
export interface ActiveConfigV9320  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9320.HostConfiguration
    get(block: Block): Promise<(v9320.HostConfiguration | undefined)>
}

/**
 *  The active configuration for the current session.
 */
export interface ActiveConfigV9370  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9370.HostConfiguration
    get(block: Block): Promise<(v9370.HostConfiguration | undefined)>
}

/**
 *  The active configuration for the current session.
 */
export interface ActiveConfigV9420  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9420.HostConfiguration
    get(block: Block): Promise<(v9420.HostConfiguration | undefined)>
}

/**
 *  The active configuration for the current session.
 */
export interface ActiveConfigV9430  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9430.HostConfiguration
    get(block: Block): Promise<(v9430.HostConfiguration | undefined)>
}

/**
 *  The active configuration for the current session.
 */
export interface ActiveConfigV1000000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1000000.HostConfiguration
    get(block: Block): Promise<(v1000000.HostConfiguration | undefined)>
}

export const pendingConfig =  {
    /**
     *  Pending configuration (if any) for the next session.
     */
    v9090: new StorageType('Configuration.PendingConfig', 'Optional', [v9090.SessionIndex], v9090.HostConfiguration) as PendingConfigV9090,
    /**
     *  Pending configuration (if any) for the next session.
     */
    v9111: new StorageType('Configuration.PendingConfig', 'Optional', [sts.number()], v9111.HostConfiguration) as PendingConfigV9111,
}

/**
 *  Pending configuration (if any) for the next session.
 */
export interface PendingConfigV9090  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9090.SessionIndex): Promise<(v9090.HostConfiguration | undefined)>
    getMany(block: Block, keys: v9090.SessionIndex[]): Promise<(v9090.HostConfiguration | undefined)[]>
    getKeys(block: Block): Promise<v9090.SessionIndex[]>
    getKeys(block: Block, key: v9090.SessionIndex): Promise<v9090.SessionIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9090.SessionIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v9090.SessionIndex): AsyncIterable<v9090.SessionIndex[]>
    getPairs(block: Block): Promise<[k: v9090.SessionIndex, v: (v9090.HostConfiguration | undefined)][]>
    getPairs(block: Block, key: v9090.SessionIndex): Promise<[k: v9090.SessionIndex, v: (v9090.HostConfiguration | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9090.SessionIndex, v: (v9090.HostConfiguration | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9090.SessionIndex): AsyncIterable<[k: v9090.SessionIndex, v: (v9090.HostConfiguration | undefined)][]>
}

/**
 *  Pending configuration (if any) for the next session.
 */
export interface PendingConfigV9111  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9111.HostConfiguration | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9111.HostConfiguration | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9111.HostConfiguration | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9111.HostConfiguration | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9111.HostConfiguration | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9111.HostConfiguration | undefined)][]>
}

export const pendingConfigs =  {
    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    v9160: new StorageType('Configuration.PendingConfigs', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v9160.HostConfiguration]))) as PendingConfigsV9160,
    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    v9291: new StorageType('Configuration.PendingConfigs', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v9291.HostConfiguration]))) as PendingConfigsV9291,
    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    v9320: new StorageType('Configuration.PendingConfigs', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v9320.HostConfiguration]))) as PendingConfigsV9320,
    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    v9370: new StorageType('Configuration.PendingConfigs', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v9370.HostConfiguration]))) as PendingConfigsV9370,
    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    v9420: new StorageType('Configuration.PendingConfigs', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v9420.HostConfiguration]))) as PendingConfigsV9420,
    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    v9430: new StorageType('Configuration.PendingConfigs', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v9430.HostConfiguration]))) as PendingConfigsV9430,
    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    v1000000: new StorageType('Configuration.PendingConfigs', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v1000000.HostConfiguration]))) as PendingConfigsV1000000,
}

/**
 *  Pending configuration changes.
 * 
 *  This is a list of configuration changes, each with a session index at which it should
 *  be applied.
 * 
 *  The list is sorted ascending by session index. Also, this list can only contain at most
 *  2 items: for the next session and for the `scheduled_session`.
 */
export interface PendingConfigsV9160  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v9160.HostConfiguration][]
    get(block: Block): Promise<([number, v9160.HostConfiguration][] | undefined)>
}

/**
 *  Pending configuration changes.
 * 
 *  This is a list of configuration changes, each with a session index at which it should
 *  be applied.
 * 
 *  The list is sorted ascending by session index. Also, this list can only contain at most
 *  2 items: for the next session and for the `scheduled_session`.
 */
export interface PendingConfigsV9291  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v9291.HostConfiguration][]
    get(block: Block): Promise<([number, v9291.HostConfiguration][] | undefined)>
}

/**
 *  Pending configuration changes.
 * 
 *  This is a list of configuration changes, each with a session index at which it should
 *  be applied.
 * 
 *  The list is sorted ascending by session index. Also, this list can only contain at most
 *  2 items: for the next session and for the `scheduled_session`.
 */
export interface PendingConfigsV9320  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v9320.HostConfiguration][]
    get(block: Block): Promise<([number, v9320.HostConfiguration][] | undefined)>
}

/**
 *  Pending configuration changes.
 * 
 *  This is a list of configuration changes, each with a session index at which it should
 *  be applied.
 * 
 *  The list is sorted ascending by session index. Also, this list can only contain at most
 *  2 items: for the next session and for the `scheduled_session`.
 */
export interface PendingConfigsV9370  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v9370.HostConfiguration][]
    get(block: Block): Promise<([number, v9370.HostConfiguration][] | undefined)>
}

/**
 *  Pending configuration changes.
 * 
 *  This is a list of configuration changes, each with a session index at which it should
 *  be applied.
 * 
 *  The list is sorted ascending by session index. Also, this list can only contain at most
 *  2 items: for the next session and for the `scheduled_session`.
 */
export interface PendingConfigsV9420  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v9420.HostConfiguration][]
    get(block: Block): Promise<([number, v9420.HostConfiguration][] | undefined)>
}

/**
 *  Pending configuration changes.
 * 
 *  This is a list of configuration changes, each with a session index at which it should
 *  be applied.
 * 
 *  The list is sorted ascending by session index. Also, this list can only contain at most
 *  2 items: for the next session and for the `scheduled_session`.
 */
export interface PendingConfigsV9430  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v9430.HostConfiguration][]
    get(block: Block): Promise<([number, v9430.HostConfiguration][] | undefined)>
}

/**
 *  Pending configuration changes.
 * 
 *  This is a list of configuration changes, each with a session index at which it should
 *  be applied.
 * 
 *  The list is sorted ascending by session index. Also, this list can only contain at most
 *  2 items: for the next session and for the `scheduled_session`.
 */
export interface PendingConfigsV1000000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v1000000.HostConfiguration][]
    get(block: Block): Promise<([number, v1000000.HostConfiguration][] | undefined)>
}

export const bypassConsistencyCheck =  {
    /**
     *  If this is set, then the configuration setters will bypass the consistency checks. This
     *  is meant to be used only as the last resort.
     */
    v9160: new StorageType('Configuration.BypassConsistencyCheck', 'Default', [], sts.boolean()) as BypassConsistencyCheckV9160,
}

/**
 *  If this is set, then the configuration setters will bypass the consistency checks. This
 *  is meant to be used only as the last resort.
 */
export interface BypassConsistencyCheckV9160  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}
