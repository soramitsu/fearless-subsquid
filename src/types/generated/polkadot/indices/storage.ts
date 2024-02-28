import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v7 from '../v7'

export const accounts =  {
    /**
     *  The lookup from index to account.
     */
    v0: new StorageType('Indices.Accounts', 'Optional', [v0.AccountIndex], sts.tuple(() => [v0.AccountId, v0.BalanceOf])) as AccountsV0,
    /**
     *  The lookup from index to account.
     */
    v7: new StorageType('Indices.Accounts', 'Optional', [v7.AccountIndex], sts.tuple(() => [v7.AccountId, v7.BalanceOf, sts.boolean()])) as AccountsV7,
}

/**
 *  The lookup from index to account.
 */
export interface AccountsV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.AccountIndex): Promise<([v0.AccountId, v0.BalanceOf] | undefined)>
    getMany(block: Block, keys: v0.AccountIndex[]): Promise<([v0.AccountId, v0.BalanceOf] | undefined)[]>
    getKeys(block: Block): Promise<v0.AccountIndex[]>
    getKeys(block: Block, key: v0.AccountIndex): Promise<v0.AccountIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.AccountIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.AccountIndex): AsyncIterable<v0.AccountIndex[]>
    getPairs(block: Block): Promise<[k: v0.AccountIndex, v: ([v0.AccountId, v0.BalanceOf] | undefined)][]>
    getPairs(block: Block, key: v0.AccountIndex): Promise<[k: v0.AccountIndex, v: ([v0.AccountId, v0.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.AccountIndex, v: ([v0.AccountId, v0.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.AccountIndex): AsyncIterable<[k: v0.AccountIndex, v: ([v0.AccountId, v0.BalanceOf] | undefined)][]>
}

/**
 *  The lookup from index to account.
 */
export interface AccountsV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v7.AccountIndex): Promise<([v7.AccountId, v7.BalanceOf, boolean] | undefined)>
    getMany(block: Block, keys: v7.AccountIndex[]): Promise<([v7.AccountId, v7.BalanceOf, boolean] | undefined)[]>
    getKeys(block: Block): Promise<v7.AccountIndex[]>
    getKeys(block: Block, key: v7.AccountIndex): Promise<v7.AccountIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v7.AccountIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v7.AccountIndex): AsyncIterable<v7.AccountIndex[]>
    getPairs(block: Block): Promise<[k: v7.AccountIndex, v: ([v7.AccountId, v7.BalanceOf, boolean] | undefined)][]>
    getPairs(block: Block, key: v7.AccountIndex): Promise<[k: v7.AccountIndex, v: ([v7.AccountId, v7.BalanceOf, boolean] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v7.AccountIndex, v: ([v7.AccountId, v7.BalanceOf, boolean] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v7.AccountIndex): AsyncIterable<[k: v7.AccountIndex, v: ([v7.AccountId, v7.BalanceOf, boolean] | undefined)][]>
}
