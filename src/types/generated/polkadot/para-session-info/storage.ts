import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9110 from '../v9110'
import * as v9170 from '../v9170'
import * as v9230 from '../v9230'
import * as v9420 from '../v9420'

export const assignmentKeysUnsafe =  {
    /**
     *  Assignment keys for the current session.
     *  Note that this API is private due to it being prone to 'off-by-one' at session boundaries.
     *  When in doubt, use `Sessions` API instead.
     */
    v9110: new StorageType('ParaSessionInfo.AssignmentKeysUnsafe', 'Default', [], sts.array(() => v9110.V1Public)) as AssignmentKeysUnsafeV9110,
}

/**
 *  Assignment keys for the current session.
 *  Note that this API is private due to it being prone to 'off-by-one' at session boundaries.
 *  When in doubt, use `Sessions` API instead.
 */
export interface AssignmentKeysUnsafeV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9110.V1Public[]
    get(block: Block): Promise<(v9110.V1Public[] | undefined)>
}

export const earliestStoredSession =  {
    /**
     *  The earliest session for which previous session info is stored.
     */
    v9110: new StorageType('ParaSessionInfo.EarliestStoredSession', 'Default', [], sts.number()) as EarliestStoredSessionV9110,
}

/**
 *  The earliest session for which previous session info is stored.
 */
export interface EarliestStoredSessionV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const sessions =  {
    /**
     *  Session information in a rolling window.
     *  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
     *  Does not have any entries before the session index in the first session change notification.
     */
    v9110: new StorageType('ParaSessionInfo.Sessions', 'Optional', [sts.number()], v9110.V1SessionInfo) as SessionsV9110,
    /**
     *  Session information in a rolling window.
     *  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
     *  Does not have any entries before the session index in the first session change notification.
     */
    v9170: new StorageType('ParaSessionInfo.Sessions', 'Optional', [sts.number()], v9170.V2SessionInfo) as SessionsV9170,
}

/**
 *  Session information in a rolling window.
 *  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
 *  Does not have any entries before the session index in the first session change notification.
 */
export interface SessionsV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9110.V1SessionInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9110.V1SessionInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9110.V1SessionInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9110.V1SessionInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9110.V1SessionInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9110.V1SessionInfo | undefined)][]>
}

/**
 *  Session information in a rolling window.
 *  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
 *  Does not have any entries before the session index in the first session change notification.
 */
export interface SessionsV9170  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9170.V2SessionInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9170.V2SessionInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9170.V2SessionInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9170.V2SessionInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9170.V2SessionInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9170.V2SessionInfo | undefined)][]>
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
