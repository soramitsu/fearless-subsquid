import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1050 from '../v1050'
import * as v9111 from '../v9111'

export const vesting =  {
    /**
     *  Information regarding the vesting of a given account.
     */
    v1050: new StorageType('Vesting.Vesting', 'Optional', [v1050.AccountId], v1050.VestingInfo) as VestingV1050,
    /**
     *  Information regarding the vesting of a given account.
     */
    v9111: new StorageType('Vesting.Vesting', 'Optional', [v9111.AccountId32], sts.array(() => v9111.VestingInfo)) as VestingV9111,
}

/**
 *  Information regarding the vesting of a given account.
 */
export interface VestingV1050  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1050.AccountId): Promise<(v1050.VestingInfo | undefined)>
    getMany(block: Block, keys: v1050.AccountId[]): Promise<(v1050.VestingInfo | undefined)[]>
}

/**
 *  Information regarding the vesting of a given account.
 */
export interface VestingV9111  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9111.AccountId32): Promise<(v9111.VestingInfo[] | undefined)>
    getMany(block: Block, keys: v9111.AccountId32[]): Promise<(v9111.VestingInfo[] | undefined)[]>
    getKeys(block: Block): Promise<v9111.AccountId32[]>
    getKeys(block: Block, key: v9111.AccountId32): Promise<v9111.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9111.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9111.AccountId32): AsyncIterable<v9111.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9111.AccountId32, v: (v9111.VestingInfo[] | undefined)][]>
    getPairs(block: Block, key: v9111.AccountId32): Promise<[k: v9111.AccountId32, v: (v9111.VestingInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9111.AccountId32, v: (v9111.VestingInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9111.AccountId32): AsyncIterable<[k: v9111.AccountId32, v: (v9111.VestingInfo[] | undefined)][]>
}

export const storageVersion =  {
    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with latest version, as determined by the genesis build.
     */
    v9111: new StorageType('Vesting.StorageVersion', 'Default', [], v9111.Type_568) as StorageVersionV9111,
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with latest version, as determined by the genesis build.
 */
export interface StorageVersionV9111  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9111.Type_568
    get(block: Block): Promise<(v9111.Type_568 | undefined)>
}
