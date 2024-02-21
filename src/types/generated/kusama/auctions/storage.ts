import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9010 from '../v9010'

export const auctionCounter =  {
    /**
     *  Number of auctions started so far.
     */
    v9010: new StorageType('Auctions.AuctionCounter', 'Default', [], v9010.AuctionIndex) as AuctionCounterV9010,
}

/**
 *  Number of auctions started so far.
 */
export interface AuctionCounterV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9010.AuctionIndex
    get(block: Block): Promise<(v9010.AuctionIndex | undefined)>
}

export const auctionInfo =  {
    /**
     *  Information relating to the current auction, if there is one.
     * 
     *  The first item in the tuple is the lease period index that the first of the four
     *  contiguous lease periods on auction is for. The second is the block number when the
     *  auction will "begin to end", i.e. the first block of the Ending Period of the auction.
     */
    v9010: new StorageType('Auctions.AuctionInfo', 'Optional', [], sts.tuple(() => [v9010.LeasePeriodOf, v9010.BlockNumber])) as AuctionInfoV9010,
}

/**
 *  Information relating to the current auction, if there is one.
 * 
 *  The first item in the tuple is the lease period index that the first of the four
 *  contiguous lease periods on auction is for. The second is the block number when the
 *  auction will "begin to end", i.e. the first block of the Ending Period of the auction.
 */
export interface AuctionInfoV9010  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<([v9010.LeasePeriodOf, v9010.BlockNumber] | undefined)>
}

export const reservedAmounts =  {
    /**
     *  Amounts currently reserved in the accounts of the bidders currently winning
     *  (sub-)ranges.
     */
    v9010: new StorageType('Auctions.ReservedAmounts', 'Optional', [sts.tuple(() => [v9010.AccountId, v9010.ParaId])], v9010.BalanceOf) as ReservedAmountsV9010,
}

/**
 *  Amounts currently reserved in the accounts of the bidders currently winning
 *  (sub-)ranges.
 */
export interface ReservedAmountsV9010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v9010.AccountId, v9010.ParaId]): Promise<(v9010.BalanceOf | undefined)>
    getMany(block: Block, keys: [v9010.AccountId, v9010.ParaId][]): Promise<(v9010.BalanceOf | undefined)[]>
    getKeys(block: Block): Promise<[v9010.AccountId, v9010.ParaId][]>
    getKeys(block: Block, key: [v9010.AccountId, v9010.ParaId]): Promise<[v9010.AccountId, v9010.ParaId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v9010.AccountId, v9010.ParaId][]>
    getKeysPaged(pageSize: number, block: Block, key: [v9010.AccountId, v9010.ParaId]): AsyncIterable<[v9010.AccountId, v9010.ParaId][]>
    getPairs(block: Block): Promise<[k: [v9010.AccountId, v9010.ParaId], v: (v9010.BalanceOf | undefined)][]>
    getPairs(block: Block, key: [v9010.AccountId, v9010.ParaId]): Promise<[k: [v9010.AccountId, v9010.ParaId], v: (v9010.BalanceOf | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v9010.AccountId, v9010.ParaId], v: (v9010.BalanceOf | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v9010.AccountId, v9010.ParaId]): AsyncIterable<[k: [v9010.AccountId, v9010.ParaId], v: (v9010.BalanceOf | undefined)][]>
}

export const winning =  {
    /**
     *  The winning bids for each of the 10 ranges at each sample in the final Ending Period of
     *  the current auction. The map's key is the 0-based index into the Sample Size. The
     *  first sample of the ending period is 0; the last is `Sample Size - 1`.
     */
    v9010: new StorageType('Auctions.Winning', 'Optional', [v9010.BlockNumber], v9010.WinningData) as WinningV9010,
}

/**
 *  The winning bids for each of the 10 ranges at each sample in the final Ending Period of
 *  the current auction. The map's key is the 0-based index into the Sample Size. The
 *  first sample of the ending period is 0; the last is `Sample Size - 1`.
 */
export interface WinningV9010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9010.BlockNumber): Promise<(v9010.WinningData | undefined)>
    getMany(block: Block, keys: v9010.BlockNumber[]): Promise<(v9010.WinningData | undefined)[]>
    getKeys(block: Block): Promise<v9010.BlockNumber[]>
    getKeys(block: Block, key: v9010.BlockNumber): Promise<v9010.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9010.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v9010.BlockNumber): AsyncIterable<v9010.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v9010.BlockNumber, v: (v9010.WinningData | undefined)][]>
    getPairs(block: Block, key: v9010.BlockNumber): Promise<[k: v9010.BlockNumber, v: (v9010.WinningData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9010.BlockNumber, v: (v9010.WinningData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9010.BlockNumber): AsyncIterable<[k: v9010.BlockNumber, v: (v9010.WinningData | undefined)][]>
}
