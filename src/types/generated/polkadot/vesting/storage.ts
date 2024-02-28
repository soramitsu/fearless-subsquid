import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v9110 from '../v9110'

export const vesting =  {
    /**
     *  Information regarding the vesting of a given account.
     */
    v0: new StorageType('Vesting.Vesting', 'Optional', [v0.AccountId], v0.VestingInfo) as VestingV0,
    /**
     *  Information regarding the vesting of a given account.
     */
    v9110: new StorageType('Vesting.Vesting', 'Optional', [v9110.AccountId32], sts.array(() => v9110.VestingInfo)) as VestingV9110,
}

/**
 *  Information regarding the vesting of a given account.
 */
export interface VestingV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.AccountId): Promise<(v0.VestingInfo | undefined)>
    getMany(block: Block, keys: v0.AccountId[]): Promise<(v0.VestingInfo | undefined)[]>
    getKeys(block: Block): Promise<v0.AccountId[]>
    getKeys(block: Block, key: v0.AccountId): Promise<v0.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.AccountId): AsyncIterable<v0.AccountId[]>
    getPairs(block: Block): Promise<[k: v0.AccountId, v: (v0.VestingInfo | undefined)][]>
    getPairs(block: Block, key: v0.AccountId): Promise<[k: v0.AccountId, v: (v0.VestingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.AccountId, v: (v0.VestingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.AccountId): AsyncIterable<[k: v0.AccountId, v: (v0.VestingInfo | undefined)][]>
}

/**
 *  Information regarding the vesting of a given account.
 */
export interface VestingV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9110.AccountId32): Promise<(v9110.VestingInfo[] | undefined)>
    getMany(block: Block, keys: v9110.AccountId32[]): Promise<(v9110.VestingInfo[] | undefined)[]>
    getKeys(block: Block): Promise<v9110.AccountId32[]>
    getKeys(block: Block, key: v9110.AccountId32): Promise<v9110.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.AccountId32): AsyncIterable<v9110.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9110.AccountId32, v: (v9110.VestingInfo[] | undefined)][]>
    getPairs(block: Block, key: v9110.AccountId32): Promise<[k: v9110.AccountId32, v: (v9110.VestingInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.AccountId32, v: (v9110.VestingInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.AccountId32): AsyncIterable<[k: v9110.AccountId32, v: (v9110.VestingInfo[] | undefined)][]>
}

export const storageVersion =  {
    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with latest version, as determined by the genesis build.
     */
    v9110: new StorageType('Vesting.StorageVersion', 'Default', [], v9110.Type_462) as StorageVersionV9110,
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with latest version, as determined by the genesis build.
 */
export interface StorageVersionV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9110.Type_462
    get(block: Block): Promise<(v9110.Type_462 | undefined)>
}
