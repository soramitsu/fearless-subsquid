import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v1050 from '../v1050'
import * as v2007 from '../v2007'

export const nextEnumSet =  {
    /**
     *  The next free enumeration set.
     */
    v1020: new StorageType('Indices.NextEnumSet', 'Default', [], v1020.AccountIndex) as NextEnumSetV1020,
}

/**
 *  The next free enumeration set.
 */
export interface NextEnumSetV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.AccountIndex
    get(block: Block): Promise<(v1020.AccountIndex | undefined)>
}

export const enumSet =  {
    /**
     *  The enumeration sets.
     */
    v1020: new StorageType('Indices.EnumSet', 'Default', [v1020.AccountIndex], sts.array(() => v1020.AccountId)) as EnumSetV1020,
}

/**
 *  The enumeration sets.
 */
export interface EnumSetV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.AccountId[]
    get(block: Block, key: v1020.AccountIndex): Promise<(v1020.AccountId[] | undefined)>
    getMany(block: Block, keys: v1020.AccountIndex[]): Promise<(v1020.AccountId[] | undefined)[]>
}

export const accounts =  {
    /**
     *  The lookup from index to account.
     */
    v1050: new StorageType('Indices.Accounts', 'Optional', [v1050.AccountIndex], sts.tuple(() => [v1050.AccountId, v1050.BalanceOf])) as AccountsV1050,
    /**
     *  The lookup from index to account.
     */
    v2007: new StorageType('Indices.Accounts', 'Optional', [v2007.AccountIndex], sts.tuple(() => [v2007.AccountId, v2007.BalanceOf, sts.boolean()])) as AccountsV2007,
}

/**
 *  The lookup from index to account.
 */
export interface AccountsV1050  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1050.AccountIndex): Promise<([v1050.AccountId, v1050.BalanceOf] | undefined)>
    getMany(block: Block, keys: v1050.AccountIndex[]): Promise<([v1050.AccountId, v1050.BalanceOf] | undefined)[]>
    getKeys(block: Block): Promise<v1050.AccountIndex[]>
    getKeys(block: Block, key: v1050.AccountIndex): Promise<v1050.AccountIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1050.AccountIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v1050.AccountIndex): AsyncIterable<v1050.AccountIndex[]>
    getPairs(block: Block): Promise<[k: v1050.AccountIndex, v: ([v1050.AccountId, v1050.BalanceOf] | undefined)][]>
    getPairs(block: Block, key: v1050.AccountIndex): Promise<[k: v1050.AccountIndex, v: ([v1050.AccountId, v1050.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1050.AccountIndex, v: ([v1050.AccountId, v1050.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1050.AccountIndex): AsyncIterable<[k: v1050.AccountIndex, v: ([v1050.AccountId, v1050.BalanceOf] | undefined)][]>
}

/**
 *  The lookup from index to account.
 */
export interface AccountsV2007  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v2007.AccountIndex): Promise<([v2007.AccountId, v2007.BalanceOf, boolean] | undefined)>
    getMany(block: Block, keys: v2007.AccountIndex[]): Promise<([v2007.AccountId, v2007.BalanceOf, boolean] | undefined)[]>
    getKeys(block: Block): Promise<v2007.AccountIndex[]>
    getKeys(block: Block, key: v2007.AccountIndex): Promise<v2007.AccountIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2007.AccountIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v2007.AccountIndex): AsyncIterable<v2007.AccountIndex[]>
    getPairs(block: Block): Promise<[k: v2007.AccountIndex, v: ([v2007.AccountId, v2007.BalanceOf, boolean] | undefined)][]>
    getPairs(block: Block, key: v2007.AccountIndex): Promise<[k: v2007.AccountIndex, v: ([v2007.AccountId, v2007.BalanceOf, boolean] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2007.AccountIndex, v: ([v2007.AccountId, v2007.BalanceOf, boolean] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2007.AccountIndex): AsyncIterable<[k: v2007.AccountIndex, v: ([v2007.AccountId, v2007.BalanceOf, boolean] | undefined)][]>
}
