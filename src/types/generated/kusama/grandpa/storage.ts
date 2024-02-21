import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v9111 from '../v9111'

export const authorities =  {
    /**
     *  DEPRECATED
     * 
     *  This used to store the current authority set, which has been migrated to the well-known
     *  GRANDPA_AUTHORITES_KEY unhashed key.
     */
    v1020: new StorageType('GrandpaFinality.Authorities', 'Default', [], sts.array(() => v1020.NextAuthority)) as AuthoritiesV1020,
}

/**
 *  DEPRECATED
 * 
 *  This used to store the current authority set, which has been migrated to the well-known
 *  GRANDPA_AUTHORITES_KEY unhashed key.
 */
export interface AuthoritiesV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.NextAuthority[]
    get(block: Block): Promise<(v1020.NextAuthority[] | undefined)>
}

export const state =  {
    /**
     *  State of the current authority set.
     */
    v1020: new StorageType('GrandpaFinality.State', 'Default', [], v1020.StoredState) as StateV1020,
    /**
     *  State of the current authority set.
     */
    v9111: new StorageType('Grandpa.State', 'Default', [], v9111.StoredState) as StateV9111,
}

/**
 *  State of the current authority set.
 */
export interface StateV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.StoredState
    get(block: Block): Promise<(v1020.StoredState | undefined)>
}

/**
 *  State of the current authority set.
 */
export interface StateV9111  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9111.StoredState
    get(block: Block): Promise<(v9111.StoredState | undefined)>
}

export const pendingChange =  {
    /**
     *  Pending change: (signaled at, scheduled change).
     */
    v1020: new StorageType('GrandpaFinality.PendingChange', 'Optional', [], v1020.StoredPendingChange) as PendingChangeV1020,
    /**
     *  Pending change: (signaled at, scheduled change).
     */
    v9111: new StorageType('Grandpa.PendingChange', 'Optional', [], v9111.StoredPendingChange) as PendingChangeV9111,
}

/**
 *  Pending change: (signaled at, scheduled change).
 */
export interface PendingChangeV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1020.StoredPendingChange | undefined)>
}

/**
 *  Pending change: (signaled at, scheduled change).
 */
export interface PendingChangeV9111  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v9111.StoredPendingChange | undefined)>
}

export const nextForced =  {
    /**
     *  next block number where we can force a change.
     */
    v1020: new StorageType('GrandpaFinality.NextForced', 'Optional', [], v1020.BlockNumber) as NextForcedV1020,
}

/**
 *  next block number where we can force a change.
 */
export interface NextForcedV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1020.BlockNumber | undefined)>
}

export const stalled =  {
    /**
     *  `true` if we are currently stalled.
     */
    v1020: new StorageType('GrandpaFinality.Stalled', 'Optional', [], sts.tuple(() => [v1020.BlockNumber, v1020.BlockNumber])) as StalledV1020,
}

/**
 *  `true` if we are currently stalled.
 */
export interface StalledV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<([v1020.BlockNumber, v1020.BlockNumber] | undefined)>
}

export const currentSetId =  {
    /**
     *  The number of changes (both in terms of keys and underlying economic responsibilities)
     *  in the "set" of Grandpa validators from genesis.
     */
    v1020: new StorageType('GrandpaFinality.CurrentSetId', 'Default', [], v1020.SetId) as CurrentSetIdV1020,
}

/**
 *  The number of changes (both in terms of keys and underlying economic responsibilities)
 *  in the "set" of Grandpa validators from genesis.
 */
export interface CurrentSetIdV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.SetId
    get(block: Block): Promise<(v1020.SetId | undefined)>
}

export const setIdSession =  {
    /**
     *  A mapping from grandpa set ID to the index of the *most recent* session for which its members were responsible.
     */
    v1020: new StorageType('GrandpaFinality.SetIdSession', 'Optional', [v1020.SetId], v1020.SessionIndex) as SetIdSessionV1020,
}

/**
 *  A mapping from grandpa set ID to the index of the *most recent* session for which its members were responsible.
 */
export interface SetIdSessionV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1020.SetId): Promise<(v1020.SessionIndex | undefined)>
    getMany(block: Block, keys: v1020.SetId[]): Promise<(v1020.SessionIndex | undefined)[]>
}
