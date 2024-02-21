import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1040 from '../v1040'
import * as v1050 from '../v1050'

export const recoverable =  {
    /**
     *  The set of recoverable accounts and their recovery configuration.
     */
    v1040: new StorageType('Recovery.Recoverable', 'Optional', [v1040.AccountId], v1040.RecoveryConfig) as RecoverableV1040,
}

/**
 *  The set of recoverable accounts and their recovery configuration.
 */
export interface RecoverableV1040  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1040.AccountId): Promise<(v1040.RecoveryConfig | undefined)>
    getMany(block: Block, keys: v1040.AccountId[]): Promise<(v1040.RecoveryConfig | undefined)[]>
}

export const activeRecoveries =  {
    /**
     *  Active recovery attempts.
     * 
     *  First account is the account to be recovered, and the second account
     *  is the user trying to recover the account.
     */
    v1040: new StorageType('Recovery.ActiveRecoveries', 'Optional', [v1040.AccountId, v1040.AccountId], v1040.ActiveRecovery) as ActiveRecoveriesV1040,
}

/**
 *  Active recovery attempts.
 * 
 *  First account is the account to be recovered, and the second account
 *  is the user trying to recover the account.
 */
export interface ActiveRecoveriesV1040  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v1040.AccountId, key2: v1040.AccountId): Promise<(v1040.ActiveRecovery | undefined)>
    getMany(block: Block, keys: [v1040.AccountId, v1040.AccountId][]): Promise<(v1040.ActiveRecovery | undefined)[]>
    getKeys(block: Block): Promise<[v1040.AccountId, v1040.AccountId][]>
    getKeys(block: Block, key1: v1040.AccountId): Promise<[v1040.AccountId, v1040.AccountId][]>
    getKeys(block: Block, key1: v1040.AccountId, key2: v1040.AccountId): Promise<[v1040.AccountId, v1040.AccountId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1040.AccountId, v1040.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1040.AccountId): AsyncIterable<[v1040.AccountId, v1040.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1040.AccountId, key2: v1040.AccountId): AsyncIterable<[v1040.AccountId, v1040.AccountId][]>
    getPairs(block: Block): Promise<[k: [v1040.AccountId, v1040.AccountId], v: (v1040.ActiveRecovery | undefined)][]>
    getPairs(block: Block, key1: v1040.AccountId): Promise<[k: [v1040.AccountId, v1040.AccountId], v: (v1040.ActiveRecovery | undefined)][]>
    getPairs(block: Block, key1: v1040.AccountId, key2: v1040.AccountId): Promise<[k: [v1040.AccountId, v1040.AccountId], v: (v1040.ActiveRecovery | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1040.AccountId, v1040.AccountId], v: (v1040.ActiveRecovery | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1040.AccountId): AsyncIterable<[k: [v1040.AccountId, v1040.AccountId], v: (v1040.ActiveRecovery | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1040.AccountId, key2: v1040.AccountId): AsyncIterable<[k: [v1040.AccountId, v1040.AccountId], v: (v1040.ActiveRecovery | undefined)][]>
}

export const recovered =  {
    /**
     *  The final list of recovered accounts.
     * 
     *  Map from the recovered account to the user who can access it.
     */
    v1040: new StorageType('Recovery.Recovered', 'Optional', [v1040.AccountId], v1040.AccountId) as RecoveredV1040,
}

/**
 *  The final list of recovered accounts.
 * 
 *  Map from the recovered account to the user who can access it.
 */
export interface RecoveredV1040  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1040.AccountId): Promise<(v1040.AccountId | undefined)>
    getMany(block: Block, keys: v1040.AccountId[]): Promise<(v1040.AccountId | undefined)[]>
}

export const proxy =  {
    /**
     *  The list of allowed proxy accounts.
     * 
     *  Map from the user who can access it to the recovered account.
     */
    v1050: new StorageType('Recovery.Proxy', 'Optional', [v1050.AccountId], v1050.AccountId) as ProxyV1050,
}

/**
 *  The list of allowed proxy accounts.
 * 
 *  Map from the user who can access it to the recovered account.
 */
export interface ProxyV1050  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1050.AccountId): Promise<(v1050.AccountId | undefined)>
    getMany(block: Block, keys: v1050.AccountId[]): Promise<(v1050.AccountId | undefined)[]>
}
