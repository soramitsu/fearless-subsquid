import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9010 from '../v9010'

export const assignmentKeysUnsafe =  {
    /**
     *  Assignment keys for the current session.
     *  Note that this API is private due to it being prone to 'off-by-one' at session boundaries.
     *  When in doubt, use `Sessions` API instead.
     */
    v9010: new StorageType('ParaSessionInfo.AssignmentKeysUnsafe', 'Default', [], sts.array(() => v9010.AssignmentId)) as AssignmentKeysUnsafeV9010,
}

/**
 *  Assignment keys for the current session.
 *  Note that this API is private due to it being prone to 'off-by-one' at session boundaries.
 *  When in doubt, use `Sessions` API instead.
 */
export interface AssignmentKeysUnsafeV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9010.AssignmentId[]
    get(block: Block): Promise<(v9010.AssignmentId[] | undefined)>
}

export const earliestStoredSession =  {
    /**
     *  The earliest session for which previous session info is stored.
     */
    v9010: new StorageType('ParaSessionInfo.EarliestStoredSession', 'Default', [], v9010.SessionIndex) as EarliestStoredSessionV9010,
}

/**
 *  The earliest session for which previous session info is stored.
 */
export interface EarliestStoredSessionV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9010.SessionIndex
    get(block: Block): Promise<(v9010.SessionIndex | undefined)>
}

export const sessions =  {
    /**
     *  Session information in a rolling window.
     *  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
     *  Does not have any entries before the session index in the first session change notification.
     */
    v9010: new StorageType('ParaSessionInfo.Sessions', 'Optional', [v9010.SessionIndex], v9010.SessionInfo) as SessionsV9010,
}

/**
 *  Session information in a rolling window.
 *  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
 *  Does not have any entries before the session index in the first session change notification.
 */
export interface SessionsV9010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9010.SessionIndex): Promise<(v9010.SessionInfo | undefined)>
    getMany(block: Block, keys: v9010.SessionIndex[]): Promise<(v9010.SessionInfo | undefined)[]>
    getKeys(block: Block): Promise<v9010.SessionIndex[]>
    getKeys(block: Block, key: v9010.SessionIndex): Promise<v9010.SessionIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9010.SessionIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v9010.SessionIndex): AsyncIterable<v9010.SessionIndex[]>
    getPairs(block: Block): Promise<[k: v9010.SessionIndex, v: (v9010.SessionInfo | undefined)][]>
    getPairs(block: Block, key: v9010.SessionIndex): Promise<[k: v9010.SessionIndex, v: (v9010.SessionInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9010.SessionIndex, v: (v9010.SessionInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9010.SessionIndex): AsyncIterable<[k: v9010.SessionIndex, v: (v9010.SessionInfo | undefined)][]>
}
