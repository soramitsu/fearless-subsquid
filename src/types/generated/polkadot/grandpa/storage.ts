import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v9110 from '../v9110'

export const state =  {
    /**
     *  State of the current authority set.
     */
    v0: new StorageType('GrandpaFinality.State', 'Default', [], v0.StoredState) as StateV0,
    /**
     *  State of the current authority set.
     */
    v9110: new StorageType('Grandpa.State', 'Default', [], v9110.StoredState) as StateV9110,
}

/**
 *  State of the current authority set.
 */
export interface StateV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.StoredState
    get(block: Block): Promise<(v0.StoredState | undefined)>
}

/**
 *  State of the current authority set.
 */
export interface StateV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9110.StoredState
    get(block: Block): Promise<(v9110.StoredState | undefined)>
}

export const pendingChange =  {
    /**
     *  Pending change: (signaled at, scheduled change).
     */
    v0: new StorageType('GrandpaFinality.PendingChange', 'Optional', [], v0.StoredPendingChange) as PendingChangeV0,
    /**
     *  Pending change: (signaled at, scheduled change).
     */
    v9110: new StorageType('Grandpa.PendingChange', 'Optional', [], v9110.StoredPendingChange) as PendingChangeV9110,
}

/**
 *  Pending change: (signaled at, scheduled change).
 */
export interface PendingChangeV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v0.StoredPendingChange | undefined)>
}

/**
 *  Pending change: (signaled at, scheduled change).
 */
export interface PendingChangeV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v9110.StoredPendingChange | undefined)>
}

export const nextForced =  {
    /**
     *  next block number where we can force a change.
     */
    v0: new StorageType('GrandpaFinality.NextForced', 'Optional', [], v0.BlockNumber) as NextForcedV0,
}

/**
 *  next block number where we can force a change.
 */
export interface NextForcedV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v0.BlockNumber | undefined)>
}

export const stalled =  {
    /**
     *  `true` if we are currently stalled.
     */
    v0: new StorageType('GrandpaFinality.Stalled', 'Optional', [], sts.tuple(() => [v0.BlockNumber, v0.BlockNumber])) as StalledV0,
}

/**
 *  `true` if we are currently stalled.
 */
export interface StalledV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<([v0.BlockNumber, v0.BlockNumber] | undefined)>
}

export const currentSetId =  {
    /**
     *  The number of changes (both in terms of keys and underlying economic responsibilities)
     *  in the "set" of Grandpa validators from genesis.
     */
    v0: new StorageType('GrandpaFinality.CurrentSetId', 'Default', [], v0.SetId) as CurrentSetIdV0,
}

/**
 *  The number of changes (both in terms of keys and underlying economic responsibilities)
 *  in the "set" of Grandpa validators from genesis.
 */
export interface CurrentSetIdV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.SetId
    get(block: Block): Promise<(v0.SetId | undefined)>
}

export const setIdSession =  {
    /**
     *  A mapping from grandpa set ID to the index of the *most recent* session for which its
     *  members were responsible.
     * 
     *  TWOX-NOTE: `SetId` is not under user control.
     */
    v0: new StorageType('GrandpaFinality.SetIdSession', 'Optional', [v0.SetId], v0.SessionIndex) as SetIdSessionV0,
}

/**
 *  A mapping from grandpa set ID to the index of the *most recent* session for which its
 *  members were responsible.
 * 
 *  TWOX-NOTE: `SetId` is not under user control.
 */
export interface SetIdSessionV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.SetId): Promise<(v0.SessionIndex | undefined)>
    getMany(block: Block, keys: v0.SetId[]): Promise<(v0.SessionIndex | undefined)[]>
    getKeys(block: Block): Promise<v0.SetId[]>
    getKeys(block: Block, key: v0.SetId): Promise<v0.SetId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.SetId[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.SetId): AsyncIterable<v0.SetId[]>
    getPairs(block: Block): Promise<[k: v0.SetId, v: (v0.SessionIndex | undefined)][]>
    getPairs(block: Block, key: v0.SetId): Promise<[k: v0.SetId, v: (v0.SessionIndex | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.SetId, v: (v0.SessionIndex | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.SetId): AsyncIterable<[k: v0.SetId, v: (v0.SessionIndex | undefined)][]>
}
