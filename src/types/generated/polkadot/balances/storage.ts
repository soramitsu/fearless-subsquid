import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v9050 from '../v9050'
import * as v9110 from '../v9110'
import * as v9420 from '../v9420'
import * as v1000001 from '../v1000001'
import * as v1001002 from '../v1001002'

export const totalIssuance =  {
    /**
     *  The total units issued in the system.
     */
    v0: new StorageType('Balances.TotalIssuance', 'Default', [], v0.Balance) as TotalIssuanceV0,
}

/**
 *  The total units issued in the system.
 */
export interface TotalIssuanceV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.Balance
    get(block: Block): Promise<(v0.Balance | undefined)>
}

export const account =  {
    /**
     *  The balance of an account.
     * 
     *  NOTE: THIS MAY NEVER BE IN EXISTENCE AND YET HAVE A `total().is_zero()`. If the total
     *  is ever zero, then the entry *MUST* be removed.
     * 
     *  NOTE: This is only used in the case that this module is used to store balances.
     */
    v0: new StorageType('Balances.Account', 'Default', [v0.AccountId], v0.AccountData) as AccountV0,
    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    v9420: new StorageType('Balances.Account', 'Default', [v9420.AccountId32], v9420.AccountData) as AccountV9420,
}

/**
 *  The balance of an account.
 * 
 *  NOTE: THIS MAY NEVER BE IN EXISTENCE AND YET HAVE A `total().is_zero()`. If the total
 *  is ever zero, then the entry *MUST* be removed.
 * 
 *  NOTE: This is only used in the case that this module is used to store balances.
 */
export interface AccountV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.AccountData
    get(block: Block, key: v0.AccountId): Promise<(v0.AccountData | undefined)>
    getMany(block: Block, keys: v0.AccountId[]): Promise<(v0.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v0.AccountId[]>
    getKeys(block: Block, key: v0.AccountId): Promise<v0.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.AccountId): AsyncIterable<v0.AccountId[]>
    getPairs(block: Block): Promise<[k: v0.AccountId, v: (v0.AccountData | undefined)][]>
    getPairs(block: Block, key: v0.AccountId): Promise<[k: v0.AccountId, v: (v0.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.AccountId, v: (v0.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.AccountId): AsyncIterable<[k: v0.AccountId, v: (v0.AccountData | undefined)][]>
}

/**
 *  The Balances pallet example of storing the balance of an account.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
 *   }
 *  ```
 * 
 *  You can also store the balance of an account in the `System` pallet.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *    type AccountStore = System
 *   }
 *  ```
 * 
 *  But this comes with tradeoffs, storing account balances in the system pallet stores
 *  `frame_system` data alongside the account data contrary to storing account balances in the
 *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface AccountV9420  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9420.AccountData
    get(block: Block, key: v9420.AccountId32): Promise<(v9420.AccountData | undefined)>
    getMany(block: Block, keys: v9420.AccountId32[]): Promise<(v9420.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v9420.AccountId32[]>
    getKeys(block: Block, key: v9420.AccountId32): Promise<v9420.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9420.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9420.AccountId32): AsyncIterable<v9420.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9420.AccountId32, v: (v9420.AccountData | undefined)][]>
    getPairs(block: Block, key: v9420.AccountId32): Promise<[k: v9420.AccountId32, v: (v9420.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9420.AccountId32, v: (v9420.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9420.AccountId32): AsyncIterable<[k: v9420.AccountId32, v: (v9420.AccountData | undefined)][]>
}

export const locks =  {
    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    v0: new StorageType('Balances.Locks', 'Default', [v0.AccountId], sts.array(() => v0.BalanceLock)) as LocksV0,
}

/**
 *  Any liquidity locks on some account balances.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface LocksV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.BalanceLock[]
    get(block: Block, key: v0.AccountId): Promise<(v0.BalanceLock[] | undefined)>
    getMany(block: Block, keys: v0.AccountId[]): Promise<(v0.BalanceLock[] | undefined)[]>
    getKeys(block: Block): Promise<v0.AccountId[]>
    getKeys(block: Block, key: v0.AccountId): Promise<v0.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.AccountId): AsyncIterable<v0.AccountId[]>
    getPairs(block: Block): Promise<[k: v0.AccountId, v: (v0.BalanceLock[] | undefined)][]>
    getPairs(block: Block, key: v0.AccountId): Promise<[k: v0.AccountId, v: (v0.BalanceLock[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.AccountId, v: (v0.BalanceLock[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.AccountId): AsyncIterable<[k: v0.AccountId, v: (v0.BalanceLock[] | undefined)][]>
}

export const storageVersion =  {
    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    v0: new StorageType('Balances.StorageVersion', 'Default', [], v0.Releases) as StorageVersionV0,
    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    v9110: new StorageType('Balances.StorageVersion', 'Default', [], v9110.Type_382) as StorageVersionV9110,
}

/**
 *  Storage version of the pallet.
 * 
 *  This is set to v2.0.0 for new networks.
 */
export interface StorageVersionV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.Releases
    get(block: Block): Promise<(v0.Releases | undefined)>
}

/**
 *  Storage version of the pallet.
 * 
 *  This is set to v2.0.0 for new networks.
 */
export interface StorageVersionV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9110.Type_382
    get(block: Block): Promise<(v9110.Type_382 | undefined)>
}

export const reserves =  {
    /**
     *  Named reserves on some account balances.
     */
    v9050: new StorageType('Balances.Reserves', 'Default', [v9050.AccountId], sts.array(() => v9050.ReserveData)) as ReservesV9050,
}

/**
 *  Named reserves on some account balances.
 */
export interface ReservesV9050  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9050.ReserveData[]
    get(block: Block, key: v9050.AccountId): Promise<(v9050.ReserveData[] | undefined)>
    getMany(block: Block, keys: v9050.AccountId[]): Promise<(v9050.ReserveData[] | undefined)[]>
    getKeys(block: Block): Promise<v9050.AccountId[]>
    getKeys(block: Block, key: v9050.AccountId): Promise<v9050.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9050.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9050.AccountId): AsyncIterable<v9050.AccountId[]>
    getPairs(block: Block): Promise<[k: v9050.AccountId, v: (v9050.ReserveData[] | undefined)][]>
    getPairs(block: Block, key: v9050.AccountId): Promise<[k: v9050.AccountId, v: (v9050.ReserveData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9050.AccountId, v: (v9050.ReserveData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9050.AccountId): AsyncIterable<[k: v9050.AccountId, v: (v9050.ReserveData[] | undefined)][]>
}

export const inactiveIssuance =  {
    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    v9340: new StorageType('Balances.InactiveIssuance', 'Default', [], sts.bigint()) as InactiveIssuanceV9340,
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface InactiveIssuanceV9340  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const holds =  {
    /**
     *  Holds on account balances.
     */
    v9420: new StorageType('Balances.Holds', 'Default', [v9420.AccountId32], sts.array(() => v9420.IdAmount)) as HoldsV9420,
    /**
     *  Holds on account balances.
     */
    v1000001: new StorageType('Balances.Holds', 'Default', [v1000001.AccountId32], sts.array(() => v1000001.IdAmount)) as HoldsV1000001,
    /**
     *  Holds on account balances.
     */
    v1001002: new StorageType('Balances.Holds', 'Default', [v1001002.AccountId32], sts.array(() => v1001002.IdAmount)) as HoldsV1001002,
}

/**
 *  Holds on account balances.
 */
export interface HoldsV9420  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9420.IdAmount[]
    get(block: Block, key: v9420.AccountId32): Promise<(v9420.IdAmount[] | undefined)>
    getMany(block: Block, keys: v9420.AccountId32[]): Promise<(v9420.IdAmount[] | undefined)[]>
    getKeys(block: Block): Promise<v9420.AccountId32[]>
    getKeys(block: Block, key: v9420.AccountId32): Promise<v9420.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9420.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9420.AccountId32): AsyncIterable<v9420.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9420.AccountId32, v: (v9420.IdAmount[] | undefined)][]>
    getPairs(block: Block, key: v9420.AccountId32): Promise<[k: v9420.AccountId32, v: (v9420.IdAmount[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9420.AccountId32, v: (v9420.IdAmount[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9420.AccountId32): AsyncIterable<[k: v9420.AccountId32, v: (v9420.IdAmount[] | undefined)][]>
}

/**
 *  Holds on account balances.
 */
export interface HoldsV1000001  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1000001.IdAmount[]
    get(block: Block, key: v1000001.AccountId32): Promise<(v1000001.IdAmount[] | undefined)>
    getMany(block: Block, keys: v1000001.AccountId32[]): Promise<(v1000001.IdAmount[] | undefined)[]>
    getKeys(block: Block): Promise<v1000001.AccountId32[]>
    getKeys(block: Block, key: v1000001.AccountId32): Promise<v1000001.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1000001.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1000001.AccountId32): AsyncIterable<v1000001.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1000001.AccountId32, v: (v1000001.IdAmount[] | undefined)][]>
    getPairs(block: Block, key: v1000001.AccountId32): Promise<[k: v1000001.AccountId32, v: (v1000001.IdAmount[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1000001.AccountId32, v: (v1000001.IdAmount[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1000001.AccountId32): AsyncIterable<[k: v1000001.AccountId32, v: (v1000001.IdAmount[] | undefined)][]>
}

/**
 *  Holds on account balances.
 */
export interface HoldsV1001002  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1001002.IdAmount[]
    get(block: Block, key: v1001002.AccountId32): Promise<(v1001002.IdAmount[] | undefined)>
    getMany(block: Block, keys: v1001002.AccountId32[]): Promise<(v1001002.IdAmount[] | undefined)[]>
    getKeys(block: Block): Promise<v1001002.AccountId32[]>
    getKeys(block: Block, key: v1001002.AccountId32): Promise<v1001002.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1001002.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1001002.AccountId32): AsyncIterable<v1001002.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1001002.AccountId32, v: (v1001002.IdAmount[] | undefined)][]>
    getPairs(block: Block, key: v1001002.AccountId32): Promise<[k: v1001002.AccountId32, v: (v1001002.IdAmount[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1001002.AccountId32, v: (v1001002.IdAmount[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1001002.AccountId32): AsyncIterable<[k: v1001002.AccountId32, v: (v1001002.IdAmount[] | undefined)][]>
}

export const freezes =  {
    /**
     *  Freeze locks on account balances.
     */
    v9420: new StorageType('Balances.Freezes', 'Default', [v9420.AccountId32], sts.array(() => v9420.IdAmount)) as FreezesV9420,
    /**
     *  Freeze locks on account balances.
     */
    v1001002: new StorageType('Balances.Freezes', 'Default', [v1001002.AccountId32], sts.array(() => v1001002.Type_529)) as FreezesV1001002,
}

/**
 *  Freeze locks on account balances.
 */
export interface FreezesV9420  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9420.IdAmount[]
    get(block: Block, key: v9420.AccountId32): Promise<(v9420.IdAmount[] | undefined)>
    getMany(block: Block, keys: v9420.AccountId32[]): Promise<(v9420.IdAmount[] | undefined)[]>
    getKeys(block: Block): Promise<v9420.AccountId32[]>
    getKeys(block: Block, key: v9420.AccountId32): Promise<v9420.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9420.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9420.AccountId32): AsyncIterable<v9420.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9420.AccountId32, v: (v9420.IdAmount[] | undefined)][]>
    getPairs(block: Block, key: v9420.AccountId32): Promise<[k: v9420.AccountId32, v: (v9420.IdAmount[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9420.AccountId32, v: (v9420.IdAmount[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9420.AccountId32): AsyncIterable<[k: v9420.AccountId32, v: (v9420.IdAmount[] | undefined)][]>
}

/**
 *  Freeze locks on account balances.
 */
export interface FreezesV1001002  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1001002.Type_529[]
    get(block: Block, key: v1001002.AccountId32): Promise<(v1001002.Type_529[] | undefined)>
    getMany(block: Block, keys: v1001002.AccountId32[]): Promise<(v1001002.Type_529[] | undefined)[]>
    getKeys(block: Block): Promise<v1001002.AccountId32[]>
    getKeys(block: Block, key: v1001002.AccountId32): Promise<v1001002.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1001002.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1001002.AccountId32): AsyncIterable<v1001002.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1001002.AccountId32, v: (v1001002.Type_529[] | undefined)][]>
    getPairs(block: Block, key: v1001002.AccountId32): Promise<[k: v1001002.AccountId32, v: (v1001002.Type_529[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1001002.AccountId32, v: (v1001002.Type_529[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1001002.AccountId32): AsyncIterable<[k: v1001002.AccountId32, v: (v1001002.Type_529[] | undefined)][]>
}
