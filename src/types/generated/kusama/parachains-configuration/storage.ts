import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9010 from '../v9010'

export const activeConfig =  {
    /**
     *  The active configuration for the current session.
     */
    v9010: new StorageType('Configuration.ActiveConfig', 'Default', [], v9010.HostConfiguration) as ActiveConfigV9010,
}

/**
 *  The active configuration for the current session.
 */
export interface ActiveConfigV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9010.HostConfiguration
    get(block: Block): Promise<(v9010.HostConfiguration | undefined)>
}

export const pendingConfig =  {
    /**
     *  Pending configuration (if any) for the next session.
     */
    v9010: new StorageType('Configuration.PendingConfig', 'Optional', [v9010.SessionIndex], v9010.HostConfiguration) as PendingConfigV9010,
}

/**
 *  Pending configuration (if any) for the next session.
 */
export interface PendingConfigV9010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9010.SessionIndex): Promise<(v9010.HostConfiguration | undefined)>
    getMany(block: Block, keys: v9010.SessionIndex[]): Promise<(v9010.HostConfiguration | undefined)[]>
    getKeys(block: Block): Promise<v9010.SessionIndex[]>
    getKeys(block: Block, key: v9010.SessionIndex): Promise<v9010.SessionIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9010.SessionIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v9010.SessionIndex): AsyncIterable<v9010.SessionIndex[]>
    getPairs(block: Block): Promise<[k: v9010.SessionIndex, v: (v9010.HostConfiguration | undefined)][]>
    getPairs(block: Block, key: v9010.SessionIndex): Promise<[k: v9010.SessionIndex, v: (v9010.HostConfiguration | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9010.SessionIndex, v: (v9010.HostConfiguration | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9010.SessionIndex): AsyncIterable<[k: v9010.SessionIndex, v: (v9010.HostConfiguration | undefined)][]>
}
