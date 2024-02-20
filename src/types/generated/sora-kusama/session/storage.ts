import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v7 from '../v7'

export const validators =  {
    /**
     *  The current set of validators.
     */
    v1: new StorageType('Session.Validators', 'Default', [], sts.array(() => v1.AccountId32)) as ValidatorsV1,
}

/**
 *  The current set of validators.
 */
export interface ValidatorsV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.AccountId32[]
    get(block: Block): Promise<(v1.AccountId32[] | undefined)>
}

export const currentIndex =  {
    /**
     *  Current index of the session.
     */
    v1: new StorageType('Session.CurrentIndex', 'Default', [], sts.number()) as CurrentIndexV1,
}

/**
 *  Current index of the session.
 */
export interface CurrentIndexV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const queuedChanged =  {
    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    v1: new StorageType('Session.QueuedChanged', 'Default', [], sts.boolean()) as QueuedChangedV1,
}

/**
 *  True if the underlying economic identities or weighting behind the validators
 *  has changed in the queued validator set.
 */
export interface QueuedChangedV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const queuedKeys =  {
    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    v1: new StorageType('Session.QueuedKeys', 'Default', [], sts.array(() => sts.tuple(() => [v1.AccountId32, v1.SessionKeys]))) as QueuedKeysV1,
    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    v7: new StorageType('Session.QueuedKeys', 'Default', [], sts.array(() => sts.tuple(() => [v7.AccountId32, v7.SessionKeys]))) as QueuedKeysV7,
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface QueuedKeysV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1.AccountId32, v1.SessionKeys][]
    get(block: Block): Promise<([v1.AccountId32, v1.SessionKeys][] | undefined)>
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface QueuedKeysV7  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v7.AccountId32, v7.SessionKeys][]
    get(block: Block): Promise<([v7.AccountId32, v7.SessionKeys][] | undefined)>
}

export const disabledValidators =  {
    /**
     *  Indices of disabled validators.
     * 
     *  The vec is always kept sorted so that we can find whether a given validator is
     *  disabled using binary search. It gets cleared when `on_session_ending` returns
     *  a new set of identities.
     */
    v1: new StorageType('Session.DisabledValidators', 'Default', [], sts.array(() => sts.number())) as DisabledValidatorsV1,
}

/**
 *  Indices of disabled validators.
 * 
 *  The vec is always kept sorted so that we can find whether a given validator is
 *  disabled using binary search. It gets cleared when `on_session_ending` returns
 *  a new set of identities.
 */
export interface DisabledValidatorsV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number[]
    get(block: Block): Promise<(number[] | undefined)>
}

export const nextKeys =  {
    /**
     *  The next session keys for a validator.
     */
    v1: new StorageType('Session.NextKeys', 'Optional', [v1.AccountId32], v1.SessionKeys) as NextKeysV1,
    /**
     *  The next session keys for a validator.
     */
    v7: new StorageType('Session.NextKeys', 'Optional', [v7.AccountId32], v7.SessionKeys) as NextKeysV7,
}

/**
 *  The next session keys for a validator.
 */
export interface NextKeysV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.AccountId32): Promise<(v1.SessionKeys | undefined)>
    getMany(block: Block, keys: v1.AccountId32[]): Promise<(v1.SessionKeys | undefined)[]>
    getKeys(block: Block): Promise<v1.AccountId32[]>
    getKeys(block: Block, key: v1.AccountId32): Promise<v1.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.AccountId32): AsyncIterable<v1.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1.AccountId32, v: (v1.SessionKeys | undefined)][]>
    getPairs(block: Block, key: v1.AccountId32): Promise<[k: v1.AccountId32, v: (v1.SessionKeys | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.AccountId32, v: (v1.SessionKeys | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.AccountId32): AsyncIterable<[k: v1.AccountId32, v: (v1.SessionKeys | undefined)][]>
}

/**
 *  The next session keys for a validator.
 */
export interface NextKeysV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v7.AccountId32): Promise<(v7.SessionKeys | undefined)>
    getMany(block: Block, keys: v7.AccountId32[]): Promise<(v7.SessionKeys | undefined)[]>
    getKeys(block: Block): Promise<v7.AccountId32[]>
    getKeys(block: Block, key: v7.AccountId32): Promise<v7.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v7.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v7.AccountId32): AsyncIterable<v7.AccountId32[]>
    getPairs(block: Block): Promise<[k: v7.AccountId32, v: (v7.SessionKeys | undefined)][]>
    getPairs(block: Block, key: v7.AccountId32): Promise<[k: v7.AccountId32, v: (v7.SessionKeys | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v7.AccountId32, v: (v7.SessionKeys | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v7.AccountId32): AsyncIterable<[k: v7.AccountId32, v: (v7.SessionKeys | undefined)][]>
}

export const keyOwner =  {
    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    v1: new StorageType('Session.KeyOwner', 'Optional', [sts.tuple(() => [v1.KeyTypeId, sts.bytes()])], v1.AccountId32) as KeyOwnerV1,
}

/**
 *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
 */
export interface KeyOwnerV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v1.KeyTypeId, Bytes]): Promise<(v1.AccountId32 | undefined)>
    getMany(block: Block, keys: [v1.KeyTypeId, Bytes][]): Promise<(v1.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<[v1.KeyTypeId, Bytes][]>
    getKeys(block: Block, key: [v1.KeyTypeId, Bytes]): Promise<[v1.KeyTypeId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1.KeyTypeId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key: [v1.KeyTypeId, Bytes]): AsyncIterable<[v1.KeyTypeId, Bytes][]>
    getPairs(block: Block): Promise<[k: [v1.KeyTypeId, Bytes], v: (v1.AccountId32 | undefined)][]>
    getPairs(block: Block, key: [v1.KeyTypeId, Bytes]): Promise<[k: [v1.KeyTypeId, Bytes], v: (v1.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1.KeyTypeId, Bytes], v: (v1.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v1.KeyTypeId, Bytes]): AsyncIterable<[k: [v1.KeyTypeId, Bytes], v: (v1.AccountId32 | undefined)][]>
}
