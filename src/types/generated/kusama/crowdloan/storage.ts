import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9010 from '../v9010'
import * as v9180 from '../v9180'

export const funds =  {
    /**
     *  Info on all of the funds.
     */
    v9010: new StorageType('Crowdloan.Funds', 'Optional', [v9010.ParaId], v9010.FundInfo) as FundsV9010,
    /**
     *  Info on all of the funds.
     */
    v9180: new StorageType('Crowdloan.Funds', 'Optional', [v9180.Id], v9180.FundInfo) as FundsV9180,
}

/**
 *  Info on all of the funds.
 */
export interface FundsV9010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9010.ParaId): Promise<(v9010.FundInfo | undefined)>
    getMany(block: Block, keys: v9010.ParaId[]): Promise<(v9010.FundInfo | undefined)[]>
    getKeys(block: Block): Promise<v9010.ParaId[]>
    getKeys(block: Block, key: v9010.ParaId): Promise<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<v9010.ParaId[]>
    getPairs(block: Block): Promise<[k: v9010.ParaId, v: (v9010.FundInfo | undefined)][]>
    getPairs(block: Block, key: v9010.ParaId): Promise<[k: v9010.ParaId, v: (v9010.FundInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9010.ParaId, v: (v9010.FundInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<[k: v9010.ParaId, v: (v9010.FundInfo | undefined)][]>
}

/**
 *  Info on all of the funds.
 */
export interface FundsV9180  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9180.Id): Promise<(v9180.FundInfo | undefined)>
    getMany(block: Block, keys: v9180.Id[]): Promise<(v9180.FundInfo | undefined)[]>
    getKeys(block: Block): Promise<v9180.Id[]>
    getKeys(block: Block, key: v9180.Id): Promise<v9180.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9180.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v9180.Id): AsyncIterable<v9180.Id[]>
    getPairs(block: Block): Promise<[k: v9180.Id, v: (v9180.FundInfo | undefined)][]>
    getPairs(block: Block, key: v9180.Id): Promise<[k: v9180.Id, v: (v9180.FundInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9180.Id, v: (v9180.FundInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9180.Id): AsyncIterable<[k: v9180.Id, v: (v9180.FundInfo | undefined)][]>
}

export const newRaise =  {
    /**
     *  The funds that have had additional contributions during the last block. This is used
     *  in order to determine which funds should submit new or updated bids.
     */
    v9010: new StorageType('Crowdloan.NewRaise', 'Default', [], sts.array(() => v9010.ParaId)) as NewRaiseV9010,
}

/**
 *  The funds that have had additional contributions during the last block. This is used
 *  in order to determine which funds should submit new or updated bids.
 */
export interface NewRaiseV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9010.ParaId[]
    get(block: Block): Promise<(v9010.ParaId[] | undefined)>
}

export const endingsCount =  {
    /**
     *  The number of auctions that have entered into their ending period so far.
     */
    v9010: new StorageType('Crowdloan.EndingsCount', 'Default', [], sts.number()) as EndingsCountV9010,
}

/**
 *  The number of auctions that have entered into their ending period so far.
 */
export interface EndingsCountV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const nextTrieIndex =  {
    /**
     *  Tracker for the next available trie index
     */
    v9010: new StorageType('Crowdloan.NextTrieIndex', 'Default', [], sts.number()) as NextTrieIndexV9010,
}

/**
 *  Tracker for the next available trie index
 */
export interface NextTrieIndexV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const nextFundIndex =  {
    /**
     *  Tracker for the next available fund index
     */
    v9180: new StorageType('Crowdloan.NextFundIndex', 'Default', [], sts.number()) as NextFundIndexV9180,
}

/**
 *  Tracker for the next available fund index
 */
export interface NextFundIndexV9180  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}
