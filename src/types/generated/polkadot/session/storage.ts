import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v28 from '../v28'
import * as v9110 from '../v9110'
import * as v1001002 from '../v1001002'

export const validators =  {
    /**
     *  The current set of validators.
     */
    v0: new StorageType('Session.Validators', 'Default', [], sts.array(() => v0.ValidatorId)) as ValidatorsV0,
}

/**
 *  The current set of validators.
 */
export interface ValidatorsV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.ValidatorId[]
    get(block: Block): Promise<(v0.ValidatorId[] | undefined)>
}

export const currentIndex =  {
    /**
     *  Current index of the session.
     */
    v0: new StorageType('Session.CurrentIndex', 'Default', [], v0.SessionIndex) as CurrentIndexV0,
}

/**
 *  Current index of the session.
 */
export interface CurrentIndexV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.SessionIndex
    get(block: Block): Promise<(v0.SessionIndex | undefined)>
}

export const queuedChanged =  {
    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    v0: new StorageType('Session.QueuedChanged', 'Default', [], sts.boolean()) as QueuedChangedV0,
}

/**
 *  True if the underlying economic identities or weighting behind the validators
 *  has changed in the queued validator set.
 */
export interface QueuedChangedV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const queuedKeys =  {
    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    v0: new StorageType('Session.QueuedKeys', 'Default', [], sts.array(() => sts.tuple(() => [v0.ValidatorId, v0.Keys]))) as QueuedKeysV0,
    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    v28: new StorageType('Session.QueuedKeys', 'Default', [], sts.array(() => sts.tuple(() => [v28.ValidatorId, v28.Keys]))) as QueuedKeysV28,
    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    v9110: new StorageType('Session.QueuedKeys', 'Default', [], sts.array(() => sts.tuple(() => [v9110.AccountId32, v9110.SessionKeys]))) as QueuedKeysV9110,
    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    v1001002: new StorageType('Session.QueuedKeys', 'Default', [], sts.array(() => sts.tuple(() => [v1001002.AccountId32, v1001002.SessionKeys]))) as QueuedKeysV1001002,
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface QueuedKeysV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v0.ValidatorId, v0.Keys][]
    get(block: Block): Promise<([v0.ValidatorId, v0.Keys][] | undefined)>
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface QueuedKeysV28  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v28.ValidatorId, v28.Keys][]
    get(block: Block): Promise<([v28.ValidatorId, v28.Keys][] | undefined)>
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface QueuedKeysV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v9110.AccountId32, v9110.SessionKeys][]
    get(block: Block): Promise<([v9110.AccountId32, v9110.SessionKeys][] | undefined)>
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface QueuedKeysV1001002  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1001002.AccountId32, v1001002.SessionKeys][]
    get(block: Block): Promise<([v1001002.AccountId32, v1001002.SessionKeys][] | undefined)>
}

export const disabledValidators =  {
    /**
     *  Indices of disabled validators.
     * 
     *  The set is cleared when `on_session_ending` returns a new set of identities.
     */
    v0: new StorageType('Session.DisabledValidators', 'Default', [], sts.array(() => sts.number())) as DisabledValidatorsV0,
}

/**
 *  Indices of disabled validators.
 * 
 *  The set is cleared when `on_session_ending` returns a new set of identities.
 */
export interface DisabledValidatorsV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number[]
    get(block: Block): Promise<(number[] | undefined)>
}

export const nextKeys =  {
    /**
     *  The next session keys for a validator.
     */
    v0: new StorageType('Session.NextKeys', 'Optional', [v0.ValidatorId], v0.Keys) as NextKeysV0,
    /**
     *  The next session keys for a validator.
     */
    v28: new StorageType('Session.NextKeys', 'Optional', [v28.ValidatorId], v28.Keys) as NextKeysV28,
    /**
     *  The next session keys for a validator.
     */
    v9110: new StorageType('Session.NextKeys', 'Optional', [v9110.AccountId32], v9110.SessionKeys) as NextKeysV9110,
    /**
     *  The next session keys for a validator.
     */
    v1001002: new StorageType('Session.NextKeys', 'Optional', [v1001002.AccountId32], v1001002.SessionKeys) as NextKeysV1001002,
}

/**
 *  The next session keys for a validator.
 */
export interface NextKeysV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.ValidatorId): Promise<(v0.Keys | undefined)>
    getMany(block: Block, keys: v0.ValidatorId[]): Promise<(v0.Keys | undefined)[]>
    getKeys(block: Block): Promise<v0.ValidatorId[]>
    getKeys(block: Block, key: v0.ValidatorId): Promise<v0.ValidatorId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.ValidatorId[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.ValidatorId): AsyncIterable<v0.ValidatorId[]>
    getPairs(block: Block): Promise<[k: v0.ValidatorId, v: (v0.Keys | undefined)][]>
    getPairs(block: Block, key: v0.ValidatorId): Promise<[k: v0.ValidatorId, v: (v0.Keys | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.ValidatorId, v: (v0.Keys | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.ValidatorId): AsyncIterable<[k: v0.ValidatorId, v: (v0.Keys | undefined)][]>
}

/**
 *  The next session keys for a validator.
 */
export interface NextKeysV28  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v28.ValidatorId): Promise<(v28.Keys | undefined)>
    getMany(block: Block, keys: v28.ValidatorId[]): Promise<(v28.Keys | undefined)[]>
    getKeys(block: Block): Promise<v28.ValidatorId[]>
    getKeys(block: Block, key: v28.ValidatorId): Promise<v28.ValidatorId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v28.ValidatorId[]>
    getKeysPaged(pageSize: number, block: Block, key: v28.ValidatorId): AsyncIterable<v28.ValidatorId[]>
    getPairs(block: Block): Promise<[k: v28.ValidatorId, v: (v28.Keys | undefined)][]>
    getPairs(block: Block, key: v28.ValidatorId): Promise<[k: v28.ValidatorId, v: (v28.Keys | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v28.ValidatorId, v: (v28.Keys | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v28.ValidatorId): AsyncIterable<[k: v28.ValidatorId, v: (v28.Keys | undefined)][]>
}

/**
 *  The next session keys for a validator.
 */
export interface NextKeysV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9110.AccountId32): Promise<(v9110.SessionKeys | undefined)>
    getMany(block: Block, keys: v9110.AccountId32[]): Promise<(v9110.SessionKeys | undefined)[]>
    getKeys(block: Block): Promise<v9110.AccountId32[]>
    getKeys(block: Block, key: v9110.AccountId32): Promise<v9110.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.AccountId32): AsyncIterable<v9110.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9110.AccountId32, v: (v9110.SessionKeys | undefined)][]>
    getPairs(block: Block, key: v9110.AccountId32): Promise<[k: v9110.AccountId32, v: (v9110.SessionKeys | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.AccountId32, v: (v9110.SessionKeys | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.AccountId32): AsyncIterable<[k: v9110.AccountId32, v: (v9110.SessionKeys | undefined)][]>
}

/**
 *  The next session keys for a validator.
 */
export interface NextKeysV1001002  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1001002.AccountId32): Promise<(v1001002.SessionKeys | undefined)>
    getMany(block: Block, keys: v1001002.AccountId32[]): Promise<(v1001002.SessionKeys | undefined)[]>
    getKeys(block: Block): Promise<v1001002.AccountId32[]>
    getKeys(block: Block, key: v1001002.AccountId32): Promise<v1001002.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1001002.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1001002.AccountId32): AsyncIterable<v1001002.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1001002.AccountId32, v: (v1001002.SessionKeys | undefined)][]>
    getPairs(block: Block, key: v1001002.AccountId32): Promise<[k: v1001002.AccountId32, v: (v1001002.SessionKeys | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1001002.AccountId32, v: (v1001002.SessionKeys | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1001002.AccountId32): AsyncIterable<[k: v1001002.AccountId32, v: (v1001002.SessionKeys | undefined)][]>
}

export const keyOwner =  {
    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    v0: new StorageType('Session.KeyOwner', 'Optional', [sts.tuple(() => [v0.KeyTypeId, sts.bytes()])], v0.ValidatorId) as KeyOwnerV0,
    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    v9110: new StorageType('Session.KeyOwner', 'Optional', [sts.tuple(() => [v9110.KeyTypeId, sts.bytes()])], v9110.AccountId32) as KeyOwnerV9110,
}

/**
 *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
 */
export interface KeyOwnerV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v0.KeyTypeId, Bytes]): Promise<(v0.ValidatorId | undefined)>
    getMany(block: Block, keys: [v0.KeyTypeId, Bytes][]): Promise<(v0.ValidatorId | undefined)[]>
    getKeys(block: Block): Promise<[v0.KeyTypeId, Bytes][]>
    getKeys(block: Block, key: [v0.KeyTypeId, Bytes]): Promise<[v0.KeyTypeId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v0.KeyTypeId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key: [v0.KeyTypeId, Bytes]): AsyncIterable<[v0.KeyTypeId, Bytes][]>
    getPairs(block: Block): Promise<[k: [v0.KeyTypeId, Bytes], v: (v0.ValidatorId | undefined)][]>
    getPairs(block: Block, key: [v0.KeyTypeId, Bytes]): Promise<[k: [v0.KeyTypeId, Bytes], v: (v0.ValidatorId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v0.KeyTypeId, Bytes], v: (v0.ValidatorId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v0.KeyTypeId, Bytes]): AsyncIterable<[k: [v0.KeyTypeId, Bytes], v: (v0.ValidatorId | undefined)][]>
}

/**
 *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
 */
export interface KeyOwnerV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v9110.KeyTypeId, Bytes]): Promise<(v9110.AccountId32 | undefined)>
    getMany(block: Block, keys: [v9110.KeyTypeId, Bytes][]): Promise<(v9110.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<[v9110.KeyTypeId, Bytes][]>
    getKeys(block: Block, key: [v9110.KeyTypeId, Bytes]): Promise<[v9110.KeyTypeId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v9110.KeyTypeId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key: [v9110.KeyTypeId, Bytes]): AsyncIterable<[v9110.KeyTypeId, Bytes][]>
    getPairs(block: Block): Promise<[k: [v9110.KeyTypeId, Bytes], v: (v9110.AccountId32 | undefined)][]>
    getPairs(block: Block, key: [v9110.KeyTypeId, Bytes]): Promise<[k: [v9110.KeyTypeId, Bytes], v: (v9110.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v9110.KeyTypeId, Bytes], v: (v9110.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v9110.KeyTypeId, Bytes]): AsyncIterable<[k: [v9110.KeyTypeId, Bytes], v: (v9110.AccountId32 | undefined)][]>
}
