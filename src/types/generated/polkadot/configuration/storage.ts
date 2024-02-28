import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9110 from '../v9110'
import * as v9170 from '../v9170'
import * as v9291 from '../v9291'
import * as v9340 from '../v9340'
import * as v9370 from '../v9370'
import * as v9420 from '../v9420'
import * as v9430 from '../v9430'
import * as v1000001 from '../v1000001'

export const activeConfig =  {
    /**
     *  The active configuration for the current session.
     */
    v9110: new StorageType('Configuration.ActiveConfig', 'Default', [], v9110.HostConfiguration) as ActiveConfigV9110,
    /**
     *  The active configuration for the current session.
     */
    v9170: new StorageType('Configuration.ActiveConfig', 'Default', [], v9170.HostConfiguration) as ActiveConfigV9170,
    /**
     *  The active configuration for the current session.
     */
    v9291: new StorageType('Configuration.ActiveConfig', 'Default', [], v9291.HostConfiguration) as ActiveConfigV9291,
    /**
     *  The active configuration for the current session.
     */
    v9340: new StorageType('Configuration.ActiveConfig', 'Default', [], v9340.HostConfiguration) as ActiveConfigV9340,
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
    v1000001: new StorageType('Configuration.ActiveConfig', 'Default', [], v1000001.HostConfiguration) as ActiveConfigV1000001,
}

/**
 *  The active configuration for the current session.
 */
export interface ActiveConfigV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9110.HostConfiguration
    get(block: Block): Promise<(v9110.HostConfiguration | undefined)>
}

/**
 *  The active configuration for the current session.
 */
export interface ActiveConfigV9170  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9170.HostConfiguration
    get(block: Block): Promise<(v9170.HostConfiguration | undefined)>
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
export interface ActiveConfigV9340  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9340.HostConfiguration
    get(block: Block): Promise<(v9340.HostConfiguration | undefined)>
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
export interface ActiveConfigV1000001  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1000001.HostConfiguration
    get(block: Block): Promise<(v1000001.HostConfiguration | undefined)>
}

export const pendingConfig =  {
    /**
     *  Pending configuration (if any) for the next session.
     */
    v9110: new StorageType('Configuration.PendingConfig', 'Optional', [sts.number()], v9110.HostConfiguration) as PendingConfigV9110,
}

/**
 *  Pending configuration (if any) for the next session.
 */
export interface PendingConfigV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9110.HostConfiguration | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9110.HostConfiguration | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9110.HostConfiguration | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9110.HostConfiguration | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9110.HostConfiguration | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9110.HostConfiguration | undefined)][]>
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
    v9170: new StorageType('Configuration.PendingConfigs', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v9170.HostConfiguration]))) as PendingConfigsV9170,
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
    v9340: new StorageType('Configuration.PendingConfigs', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v9340.HostConfiguration]))) as PendingConfigsV9340,
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
    v1000001: new StorageType('Configuration.PendingConfigs', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v1000001.HostConfiguration]))) as PendingConfigsV1000001,
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
export interface PendingConfigsV9170  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v9170.HostConfiguration][]
    get(block: Block): Promise<([number, v9170.HostConfiguration][] | undefined)>
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
export interface PendingConfigsV9340  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v9340.HostConfiguration][]
    get(block: Block): Promise<([number, v9340.HostConfiguration][] | undefined)>
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
export interface PendingConfigsV1000001  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v1000001.HostConfiguration][]
    get(block: Block): Promise<([number, v1000001.HostConfiguration][] | undefined)>
}

export const bypassConsistencyCheck =  {
    /**
     *  If this is set, then the configuration setters will bypass the consistency checks. This
     *  is meant to be used only as the last resort.
     */
    v9170: new StorageType('Configuration.BypassConsistencyCheck', 'Default', [], sts.boolean()) as BypassConsistencyCheckV9170,
}

/**
 *  If this is set, then the configuration setters will bypass the consistency checks. This
 *  is meant to be used only as the last resort.
 */
export interface BypassConsistencyCheckV9170  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}
