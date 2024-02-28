import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v14 from '../v14'

export const voteOf =  {
    /**
     *  Votes, so far.
     */
    v14: new StorageType('Poll.VoteOf', 'Default', [v14.AccountId], sts.tuple(() => [v14.Approvals, v14.BalanceOf])) as VoteOfV14,
}

/**
 *  Votes, so far.
 */
export interface VoteOfV14  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v14.Approvals, v14.BalanceOf]
    get(block: Block, key: v14.AccountId): Promise<([v14.Approvals, v14.BalanceOf] | undefined)>
    getMany(block: Block, keys: v14.AccountId[]): Promise<([v14.Approvals, v14.BalanceOf] | undefined)[]>
    getKeys(block: Block): Promise<v14.AccountId[]>
    getKeys(block: Block, key: v14.AccountId): Promise<v14.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v14.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v14.AccountId): AsyncIterable<v14.AccountId[]>
    getPairs(block: Block): Promise<[k: v14.AccountId, v: ([v14.Approvals, v14.BalanceOf] | undefined)][]>
    getPairs(block: Block, key: v14.AccountId): Promise<[k: v14.AccountId, v: ([v14.Approvals, v14.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v14.AccountId, v: ([v14.Approvals, v14.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v14.AccountId): AsyncIterable<[k: v14.AccountId, v: ([v14.Approvals, v14.BalanceOf] | undefined)][]>
}

export const totals =  {
    /**
     *  The total balances voting for each option.
     */
    v14: new StorageType('Poll.Totals', 'Default', [], sts.array(() => v14.BalanceOf)) as TotalsV14,
}

/**
 *  The total balances voting for each option.
 */
export interface TotalsV14  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v14.BalanceOf[]
    get(block: Block): Promise<(v14.BalanceOf[] | undefined)>
}
