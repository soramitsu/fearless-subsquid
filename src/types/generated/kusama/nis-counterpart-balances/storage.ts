import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9340 from '../v9340'
import * as v9420 from '../v9420'
import * as v1000000 from '../v1000000'
import * as v1001000 from '../v1001000'

export const totalIssuance =  {
    /**
     *  The total units issued in the system.
     */
    v9340: new StorageType('NisCounterpartBalances.TotalIssuance', 'Default', [], sts.bigint()) as TotalIssuanceV9340,
}

/**
 *  The total units issued in the system.
 */
export interface TotalIssuanceV9340  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const inactiveIssuance =  {
    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    v9340: new StorageType('NisCounterpartBalances.InactiveIssuance', 'Default', [], sts.bigint()) as InactiveIssuanceV9340,
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface InactiveIssuanceV9340  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const account =  {
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
    v9340: new StorageType('NisCounterpartBalances.Account', 'Default', [v9340.AccountId32], v9340.AccountData) as AccountV9340,
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
    v9420: new StorageType('NisCounterpartBalances.Account', 'Default', [v9420.AccountId32], v9420.AccountData) as AccountV9420,
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
export interface AccountV9340  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9340.AccountData
    get(block: Block, key: v9340.AccountId32): Promise<(v9340.AccountData | undefined)>
    getMany(block: Block, keys: v9340.AccountId32[]): Promise<(v9340.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v9340.AccountId32[]>
    getKeys(block: Block, key: v9340.AccountId32): Promise<v9340.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9340.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9340.AccountId32): AsyncIterable<v9340.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9340.AccountId32, v: (v9340.AccountData | undefined)][]>
    getPairs(block: Block, key: v9340.AccountId32): Promise<[k: v9340.AccountId32, v: (v9340.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9340.AccountId32, v: (v9340.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9340.AccountId32): AsyncIterable<[k: v9340.AccountId32, v: (v9340.AccountData | undefined)][]>
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
    v9340: new StorageType('NisCounterpartBalances.Locks', 'Default', [v9340.AccountId32], sts.array(() => v9340.BalanceLock)) as LocksV9340,
}

/**
 *  Any liquidity locks on some account balances.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface LocksV9340  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9340.BalanceLock[]
    get(block: Block, key: v9340.AccountId32): Promise<(v9340.BalanceLock[] | undefined)>
    getMany(block: Block, keys: v9340.AccountId32[]): Promise<(v9340.BalanceLock[] | undefined)[]>
    getKeys(block: Block): Promise<v9340.AccountId32[]>
    getKeys(block: Block, key: v9340.AccountId32): Promise<v9340.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9340.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9340.AccountId32): AsyncIterable<v9340.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9340.AccountId32, v: (v9340.BalanceLock[] | undefined)][]>
    getPairs(block: Block, key: v9340.AccountId32): Promise<[k: v9340.AccountId32, v: (v9340.BalanceLock[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9340.AccountId32, v: (v9340.BalanceLock[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9340.AccountId32): AsyncIterable<[k: v9340.AccountId32, v: (v9340.BalanceLock[] | undefined)][]>
}

export const reserves =  {
    /**
     *  Named reserves on some account balances.
     */
    v9340: new StorageType('NisCounterpartBalances.Reserves', 'Default', [v9340.AccountId32], sts.array(() => v9340.ReserveData)) as ReservesV9340,
}

/**
 *  Named reserves on some account balances.
 */
export interface ReservesV9340  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9340.ReserveData[]
    get(block: Block, key: v9340.AccountId32): Promise<(v9340.ReserveData[] | undefined)>
    getMany(block: Block, keys: v9340.AccountId32[]): Promise<(v9340.ReserveData[] | undefined)[]>
    getKeys(block: Block): Promise<v9340.AccountId32[]>
    getKeys(block: Block, key: v9340.AccountId32): Promise<v9340.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9340.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9340.AccountId32): AsyncIterable<v9340.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9340.AccountId32, v: (v9340.ReserveData[] | undefined)][]>
    getPairs(block: Block, key: v9340.AccountId32): Promise<[k: v9340.AccountId32, v: (v9340.ReserveData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9340.AccountId32, v: (v9340.ReserveData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9340.AccountId32): AsyncIterable<[k: v9340.AccountId32, v: (v9340.ReserveData[] | undefined)][]>
}

export const holds =  {
    /**
     *  Holds on account balances.
     */
    v9420: new StorageType('NisCounterpartBalances.Holds', 'Default', [v9420.AccountId32], sts.array(() => v9420.Type_544)) as HoldsV9420,
    /**
     *  Holds on account balances.
     */
    v1000000: new StorageType('NisCounterpartBalances.Holds', 'Default', [v1000000.AccountId32], sts.array(() => v1000000.IdAmount)) as HoldsV1000000,
    /**
     *  Holds on account balances.
     */
    v1001000: new StorageType('NisCounterpartBalances.Holds', 'Default', [v1001000.AccountId32], sts.array(() => v1001000.IdAmount)) as HoldsV1001000,
}

/**
 *  Holds on account balances.
 */
export interface HoldsV9420  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9420.Type_544[]
    get(block: Block, key: v9420.AccountId32): Promise<(v9420.Type_544[] | undefined)>
    getMany(block: Block, keys: v9420.AccountId32[]): Promise<(v9420.Type_544[] | undefined)[]>
    getKeys(block: Block): Promise<v9420.AccountId32[]>
    getKeys(block: Block, key: v9420.AccountId32): Promise<v9420.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9420.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9420.AccountId32): AsyncIterable<v9420.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9420.AccountId32, v: (v9420.Type_544[] | undefined)][]>
    getPairs(block: Block, key: v9420.AccountId32): Promise<[k: v9420.AccountId32, v: (v9420.Type_544[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9420.AccountId32, v: (v9420.Type_544[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9420.AccountId32): AsyncIterable<[k: v9420.AccountId32, v: (v9420.Type_544[] | undefined)][]>
}

/**
 *  Holds on account balances.
 */
export interface HoldsV1000000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1000000.IdAmount[]
    get(block: Block, key: v1000000.AccountId32): Promise<(v1000000.IdAmount[] | undefined)>
    getMany(block: Block, keys: v1000000.AccountId32[]): Promise<(v1000000.IdAmount[] | undefined)[]>
    getKeys(block: Block): Promise<v1000000.AccountId32[]>
    getKeys(block: Block, key: v1000000.AccountId32): Promise<v1000000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1000000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1000000.AccountId32): AsyncIterable<v1000000.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1000000.AccountId32, v: (v1000000.IdAmount[] | undefined)][]>
    getPairs(block: Block, key: v1000000.AccountId32): Promise<[k: v1000000.AccountId32, v: (v1000000.IdAmount[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1000000.AccountId32, v: (v1000000.IdAmount[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1000000.AccountId32): AsyncIterable<[k: v1000000.AccountId32, v: (v1000000.IdAmount[] | undefined)][]>
}

/**
 *  Holds on account balances.
 */
export interface HoldsV1001000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1001000.IdAmount[]
    get(block: Block, key: v1001000.AccountId32): Promise<(v1001000.IdAmount[] | undefined)>
    getMany(block: Block, keys: v1001000.AccountId32[]): Promise<(v1001000.IdAmount[] | undefined)[]>
    getKeys(block: Block): Promise<v1001000.AccountId32[]>
    getKeys(block: Block, key: v1001000.AccountId32): Promise<v1001000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1001000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1001000.AccountId32): AsyncIterable<v1001000.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1001000.AccountId32, v: (v1001000.IdAmount[] | undefined)][]>
    getPairs(block: Block, key: v1001000.AccountId32): Promise<[k: v1001000.AccountId32, v: (v1001000.IdAmount[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1001000.AccountId32, v: (v1001000.IdAmount[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1001000.AccountId32): AsyncIterable<[k: v1001000.AccountId32, v: (v1001000.IdAmount[] | undefined)][]>
}

export const freezes =  {
    /**
     *  Freeze locks on account balances.
     */
    v9420: new StorageType('NisCounterpartBalances.Freezes', 'Default', [v9420.AccountId32], sts.array(() => v9420.Type_544)) as FreezesV9420,
}

/**
 *  Freeze locks on account balances.
 */
export interface FreezesV9420  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9420.Type_544[]
    get(block: Block, key: v9420.AccountId32): Promise<(v9420.Type_544[] | undefined)>
    getMany(block: Block, keys: v9420.AccountId32[]): Promise<(v9420.Type_544[] | undefined)[]>
    getKeys(block: Block): Promise<v9420.AccountId32[]>
    getKeys(block: Block, key: v9420.AccountId32): Promise<v9420.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9420.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9420.AccountId32): AsyncIterable<v9420.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9420.AccountId32, v: (v9420.Type_544[] | undefined)][]>
    getPairs(block: Block, key: v9420.AccountId32): Promise<[k: v9420.AccountId32, v: (v9420.Type_544[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9420.AccountId32, v: (v9420.Type_544[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9420.AccountId32): AsyncIterable<[k: v9420.AccountId32, v: (v9420.Type_544[] | undefined)][]>
}
