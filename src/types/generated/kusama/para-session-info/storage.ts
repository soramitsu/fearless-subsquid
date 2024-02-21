import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9090 from '../v9090'
import * as v9160 from '../v9160'
import * as v9230 from '../v9230'
import * as v9420 from '../v9420'

export const assignmentKeysUnsafe =  {
    /**
     *  Assignment keys for the current session.
     *  Note that this API is private due to it being prone to 'off-by-one' at session boundaries.
     *  When in doubt, use `Sessions` API instead.
     */
    v9090: new StorageType('ParaSessionInfo.AssignmentKeysUnsafe', 'Default', [], sts.array(() => v9090.AssignmentId)) as AssignmentKeysUnsafeV9090,
}

/**
 *  Assignment keys for the current session.
 *  Note that this API is private due to it being prone to 'off-by-one' at session boundaries.
 *  When in doubt, use `Sessions` API instead.
 */
export interface AssignmentKeysUnsafeV9090  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9090.AssignmentId[]
    get(block: Block): Promise<(v9090.AssignmentId[] | undefined)>
}

export const earliestStoredSession =  {
    /**
     *  The earliest session for which previous session info is stored.
     */
    v9090: new StorageType('ParaSessionInfo.EarliestStoredSession', 'Default', [], v9090.SessionIndex) as EarliestStoredSessionV9090,
}

/**
 *  The earliest session for which previous session info is stored.
 */
export interface EarliestStoredSessionV9090  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9090.SessionIndex
    get(block: Block): Promise<(v9090.SessionIndex | undefined)>
}

export const sessions =  {
    /**
     *  Session information in a rolling window.
     *  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
     *  Does not have any entries before the session index in the first session change notification.
     */
    v9090: new StorageType('ParaSessionInfo.Sessions', 'Optional', [v9090.SessionIndex], v9090.SessionInfo) as SessionsV9090,
    /**
     *  Session information in a rolling window.
     *  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
     *  Does not have any entries before the session index in the first session change notification.
     */
    v9160: new StorageType('ParaSessionInfo.Sessions', 'Optional', [sts.number()], v9160.V2SessionInfo) as SessionsV9160,
}

/**
 *  Session information in a rolling window.
 *  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
 *  Does not have any entries before the session index in the first session change notification.
 */
export interface SessionsV9090  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9090.SessionIndex): Promise<(v9090.SessionInfo | undefined)>
    getMany(block: Block, keys: v9090.SessionIndex[]): Promise<(v9090.SessionInfo | undefined)[]>
    getKeys(block: Block): Promise<v9090.SessionIndex[]>
    getKeys(block: Block, key: v9090.SessionIndex): Promise<v9090.SessionIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9090.SessionIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v9090.SessionIndex): AsyncIterable<v9090.SessionIndex[]>
    getPairs(block: Block): Promise<[k: v9090.SessionIndex, v: (v9090.SessionInfo | undefined)][]>
    getPairs(block: Block, key: v9090.SessionIndex): Promise<[k: v9090.SessionIndex, v: (v9090.SessionInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9090.SessionIndex, v: (v9090.SessionInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9090.SessionIndex): AsyncIterable<[k: v9090.SessionIndex, v: (v9090.SessionInfo | undefined)][]>
}

/**
 *  Session information in a rolling window.
 *  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
 *  Does not have any entries before the session index in the first session change notification.
 */
export interface SessionsV9160  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9160.V2SessionInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9160.V2SessionInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9160.V2SessionInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9160.V2SessionInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9160.V2SessionInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9160.V2SessionInfo | undefined)][]>
}

export const accountKeys =  {
    /**
     *  The validator account keys of the validators actively participating in parachain consensus.
     */
    v9230: new StorageType('ParaSessionInfo.AccountKeys', 'Optional', [sts.number()], sts.array(() => v9230.AccountId32)) as AccountKeysV9230,
}

/**
 *  The validator account keys of the validators actively participating in parachain consensus.
 */
export interface AccountKeysV9230  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9230.AccountId32[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9230.AccountId32[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9230.AccountId32[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9230.AccountId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9230.AccountId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9230.AccountId32[] | undefined)][]>
}

export const sessionExecutorParams =  {
    /**
     *  Executor parameter set for a given session index
     */
    v9420: new StorageType('ParaSessionInfo.SessionExecutorParams', 'Optional', [sts.number()], sts.array(() => v9420.V4ExecutorParam)) as SessionExecutorParamsV9420,
}

/**
 *  Executor parameter set for a given session index
 */
export interface SessionExecutorParamsV9420  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9420.V4ExecutorParam[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9420.V4ExecutorParam[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9420.V4ExecutorParam[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9420.V4ExecutorParam[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9420.V4ExecutorParam[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9420.V4ExecutorParam[] | undefined)][]>
}
