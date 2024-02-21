import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v1051 from '../v1051'
import * as v2028 from '../v2028'
import * as v9111 from '../v9111'
import * as v1000000 from '../v1000000'

export const validators =  {
    /**
     *  The current set of validators.
     */
    v1020: new StorageType('Session.Validators', 'Default', [], sts.array(() => v1020.ValidatorId)) as ValidatorsV1020,
}

/**
 *  The current set of validators.
 */
export interface ValidatorsV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.ValidatorId[]
    get(block: Block): Promise<(v1020.ValidatorId[] | undefined)>
}

export const currentIndex =  {
    /**
     *  Current index of the session.
     */
    v1020: new StorageType('Session.CurrentIndex', 'Default', [], v1020.SessionIndex) as CurrentIndexV1020,
}

/**
 *  Current index of the session.
 */
export interface CurrentIndexV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.SessionIndex
    get(block: Block): Promise<(v1020.SessionIndex | undefined)>
}

export const queuedChanged =  {
    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    v1020: new StorageType('Session.QueuedChanged', 'Default', [], sts.boolean()) as QueuedChangedV1020,
}

/**
 *  True if the underlying economic identities or weighting behind the validators
 *  has changed in the queued validator set.
 */
export interface QueuedChangedV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const queuedKeys =  {
    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    v1020: new StorageType('Session.QueuedKeys', 'Default', [], sts.array(() => sts.tuple(() => [v1020.ValidatorId, v1020.Keys]))) as QueuedKeysV1020,
    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    v2028: new StorageType('Session.QueuedKeys', 'Default', [], sts.array(() => sts.tuple(() => [v2028.ValidatorId, v2028.Keys]))) as QueuedKeysV2028,
    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    v9111: new StorageType('Session.QueuedKeys', 'Default', [], sts.array(() => sts.tuple(() => [v9111.AccountId32, v9111.SessionKeys]))) as QueuedKeysV9111,
    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    v1000000: new StorageType('Session.QueuedKeys', 'Default', [], sts.array(() => sts.tuple(() => [v1000000.AccountId32, v1000000.SessionKeys]))) as QueuedKeysV1000000,
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface QueuedKeysV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1020.ValidatorId, v1020.Keys][]
    get(block: Block): Promise<([v1020.ValidatorId, v1020.Keys][] | undefined)>
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface QueuedKeysV2028  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v2028.ValidatorId, v2028.Keys][]
    get(block: Block): Promise<([v2028.ValidatorId, v2028.Keys][] | undefined)>
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface QueuedKeysV9111  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v9111.AccountId32, v9111.SessionKeys][]
    get(block: Block): Promise<([v9111.AccountId32, v9111.SessionKeys][] | undefined)>
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface QueuedKeysV1000000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1000000.AccountId32, v1000000.SessionKeys][]
    get(block: Block): Promise<([v1000000.AccountId32, v1000000.SessionKeys][] | undefined)>
}

export const disabledValidators =  {
    /**
     *  Indices of disabled validators.
     * 
     *  The set is cleared when `on_session_ending` returns a new set of identities.
     */
    v1020: new StorageType('Session.DisabledValidators', 'Default', [], sts.array(() => sts.number())) as DisabledValidatorsV1020,
}

/**
 *  Indices of disabled validators.
 * 
 *  The set is cleared when `on_session_ending` returns a new set of identities.
 */
export interface DisabledValidatorsV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number[]
    get(block: Block): Promise<(number[] | undefined)>
}

export const nextKeys =  {
    /**
     *  The next session keys for a validator.
     * 
     *  The first key is always `DEDUP_KEY_PREFIX` to have all the data in the same branch of
     *  the trie. Having all data in the same branch should prevent slowing down other queries.
     */
    v1020: new StorageType('Session.NextKeys', 'Optional', [sts.bytes(), v1020.ValidatorId], v1020.Keys) as NextKeysV1020,
    /**
     *  The next session keys for a validator.
     */
    v1051: new StorageType('Session.NextKeys', 'Optional', [v1051.ValidatorId], v1051.Keys) as NextKeysV1051,
    /**
     *  The next session keys for a validator.
     */
    v2028: new StorageType('Session.NextKeys', 'Optional', [v2028.ValidatorId], v2028.Keys) as NextKeysV2028,
    /**
     *  The next session keys for a validator.
     */
    v9111: new StorageType('Session.NextKeys', 'Optional', [v9111.AccountId32], v9111.SessionKeys) as NextKeysV9111,
    /**
     *  The next session keys for a validator.
     */
    v1000000: new StorageType('Session.NextKeys', 'Optional', [v1000000.AccountId32], v1000000.SessionKeys) as NextKeysV1000000,
}

/**
 *  The next session keys for a validator.
 * 
 *  The first key is always `DEDUP_KEY_PREFIX` to have all the data in the same branch of
 *  the trie. Having all data in the same branch should prevent slowing down other queries.
 */
export interface NextKeysV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: Bytes, key2: v1020.ValidatorId): Promise<(v1020.Keys | undefined)>
    getMany(block: Block, keys: [Bytes, v1020.ValidatorId][]): Promise<(v1020.Keys | undefined)[]>
}

/**
 *  The next session keys for a validator.
 */
export interface NextKeysV1051  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1051.ValidatorId): Promise<(v1051.Keys | undefined)>
    getMany(block: Block, keys: v1051.ValidatorId[]): Promise<(v1051.Keys | undefined)[]>
}

/**
 *  The next session keys for a validator.
 */
export interface NextKeysV2028  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v2028.ValidatorId): Promise<(v2028.Keys | undefined)>
    getMany(block: Block, keys: v2028.ValidatorId[]): Promise<(v2028.Keys | undefined)[]>
    getKeys(block: Block): Promise<v2028.ValidatorId[]>
    getKeys(block: Block, key: v2028.ValidatorId): Promise<v2028.ValidatorId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2028.ValidatorId[]>
    getKeysPaged(pageSize: number, block: Block, key: v2028.ValidatorId): AsyncIterable<v2028.ValidatorId[]>
    getPairs(block: Block): Promise<[k: v2028.ValidatorId, v: (v2028.Keys | undefined)][]>
    getPairs(block: Block, key: v2028.ValidatorId): Promise<[k: v2028.ValidatorId, v: (v2028.Keys | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2028.ValidatorId, v: (v2028.Keys | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2028.ValidatorId): AsyncIterable<[k: v2028.ValidatorId, v: (v2028.Keys | undefined)][]>
}

/**
 *  The next session keys for a validator.
 */
export interface NextKeysV9111  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9111.AccountId32): Promise<(v9111.SessionKeys | undefined)>
    getMany(block: Block, keys: v9111.AccountId32[]): Promise<(v9111.SessionKeys | undefined)[]>
    getKeys(block: Block): Promise<v9111.AccountId32[]>
    getKeys(block: Block, key: v9111.AccountId32): Promise<v9111.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9111.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9111.AccountId32): AsyncIterable<v9111.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9111.AccountId32, v: (v9111.SessionKeys | undefined)][]>
    getPairs(block: Block, key: v9111.AccountId32): Promise<[k: v9111.AccountId32, v: (v9111.SessionKeys | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9111.AccountId32, v: (v9111.SessionKeys | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9111.AccountId32): AsyncIterable<[k: v9111.AccountId32, v: (v9111.SessionKeys | undefined)][]>
}

/**
 *  The next session keys for a validator.
 */
export interface NextKeysV1000000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1000000.AccountId32): Promise<(v1000000.SessionKeys | undefined)>
    getMany(block: Block, keys: v1000000.AccountId32[]): Promise<(v1000000.SessionKeys | undefined)[]>
    getKeys(block: Block): Promise<v1000000.AccountId32[]>
    getKeys(block: Block, key: v1000000.AccountId32): Promise<v1000000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1000000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1000000.AccountId32): AsyncIterable<v1000000.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1000000.AccountId32, v: (v1000000.SessionKeys | undefined)][]>
    getPairs(block: Block, key: v1000000.AccountId32): Promise<[k: v1000000.AccountId32, v: (v1000000.SessionKeys | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1000000.AccountId32, v: (v1000000.SessionKeys | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1000000.AccountId32): AsyncIterable<[k: v1000000.AccountId32, v: (v1000000.SessionKeys | undefined)][]>
}

export const keyOwner =  {
    /**
     *  The owner of a key. The second key is the `KeyTypeId` + the encoded key.
     * 
     *  The first key is always `DEDUP_KEY_PREFIX` to have all the data in the same branch of
     *  the trie. Having all data in the same branch should prevent slowing down other queries.
     */
    v1020: new StorageType('Session.KeyOwner', 'Optional', [sts.bytes(), sts.tuple(() => [v1020.KeyTypeId, sts.bytes()])], v1020.ValidatorId) as KeyOwnerV1020,
    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    v1051: new StorageType('Session.KeyOwner', 'Optional', [sts.tuple(() => [v1051.KeyTypeId, sts.bytes()])], v1051.ValidatorId) as KeyOwnerV1051,
    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    v9111: new StorageType('Session.KeyOwner', 'Optional', [sts.tuple(() => [v9111.KeyTypeId, sts.bytes()])], v9111.AccountId32) as KeyOwnerV9111,
}

/**
 *  The owner of a key. The second key is the `KeyTypeId` + the encoded key.
 * 
 *  The first key is always `DEDUP_KEY_PREFIX` to have all the data in the same branch of
 *  the trie. Having all data in the same branch should prevent slowing down other queries.
 */
export interface KeyOwnerV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: Bytes, key2: [v1020.KeyTypeId, Bytes]): Promise<(v1020.ValidatorId | undefined)>
    getMany(block: Block, keys: [Bytes, [v1020.KeyTypeId, Bytes]][]): Promise<(v1020.ValidatorId | undefined)[]>
}

/**
 *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
 */
export interface KeyOwnerV1051  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v1051.KeyTypeId, Bytes]): Promise<(v1051.ValidatorId | undefined)>
    getMany(block: Block, keys: [v1051.KeyTypeId, Bytes][]): Promise<(v1051.ValidatorId | undefined)[]>
}

/**
 *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
 */
export interface KeyOwnerV9111  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v9111.KeyTypeId, Bytes]): Promise<(v9111.AccountId32 | undefined)>
    getMany(block: Block, keys: [v9111.KeyTypeId, Bytes][]): Promise<(v9111.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<[v9111.KeyTypeId, Bytes][]>
    getKeys(block: Block, key: [v9111.KeyTypeId, Bytes]): Promise<[v9111.KeyTypeId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v9111.KeyTypeId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key: [v9111.KeyTypeId, Bytes]): AsyncIterable<[v9111.KeyTypeId, Bytes][]>
    getPairs(block: Block): Promise<[k: [v9111.KeyTypeId, Bytes], v: (v9111.AccountId32 | undefined)][]>
    getPairs(block: Block, key: [v9111.KeyTypeId, Bytes]): Promise<[k: [v9111.KeyTypeId, Bytes], v: (v9111.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v9111.KeyTypeId, Bytes], v: (v9111.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v9111.KeyTypeId, Bytes]): AsyncIterable<[k: [v9111.KeyTypeId, Bytes], v: (v9111.AccountId32 | undefined)][]>
}
