import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9110 from '../v9110'

export const auctionCounter =  {
    /**
     *  Number of auctions started so far.
     */
    v9110: new StorageType('Auctions.AuctionCounter', 'Default', [], sts.number()) as AuctionCounterV9110,
}

/**
 *  Number of auctions started so far.
 */
export interface AuctionCounterV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const auctionInfo =  {
    /**
     *  Information relating to the current auction, if there is one.
     * 
     *  The first item in the tuple is the lease period index that the first of the four
     *  contiguous lease periods on auction is for. The second is the block number when the
     *  auction will "begin to end", i.e. the first block of the Ending Period of the auction.
     */
    v9110: new StorageType('Auctions.AuctionInfo', 'Optional', [], sts.tuple(() => [sts.number(), sts.number()])) as AuctionInfoV9110,
}

/**
 *  Information relating to the current auction, if there is one.
 * 
 *  The first item in the tuple is the lease period index that the first of the four
 *  contiguous lease periods on auction is for. The second is the block number when the
 *  auction will "begin to end", i.e. the first block of the Ending Period of the auction.
 */
export interface AuctionInfoV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<([number, number] | undefined)>
}

export const reservedAmounts =  {
    /**
     *  Amounts currently reserved in the accounts of the bidders currently winning
     *  (sub-)ranges.
     */
    v9110: new StorageType('Auctions.ReservedAmounts', 'Optional', [sts.tuple(() => [v9110.AccountId32, v9110.Id])], sts.bigint()) as ReservedAmountsV9110,
}

/**
 *  Amounts currently reserved in the accounts of the bidders currently winning
 *  (sub-)ranges.
 */
export interface ReservedAmountsV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v9110.AccountId32, v9110.Id]): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [v9110.AccountId32, v9110.Id][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[v9110.AccountId32, v9110.Id][]>
    getKeys(block: Block, key: [v9110.AccountId32, v9110.Id]): Promise<[v9110.AccountId32, v9110.Id][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v9110.AccountId32, v9110.Id][]>
    getKeysPaged(pageSize: number, block: Block, key: [v9110.AccountId32, v9110.Id]): AsyncIterable<[v9110.AccountId32, v9110.Id][]>
    getPairs(block: Block): Promise<[k: [v9110.AccountId32, v9110.Id], v: (bigint | undefined)][]>
    getPairs(block: Block, key: [v9110.AccountId32, v9110.Id]): Promise<[k: [v9110.AccountId32, v9110.Id], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v9110.AccountId32, v9110.Id], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v9110.AccountId32, v9110.Id]): AsyncIterable<[k: [v9110.AccountId32, v9110.Id], v: (bigint | undefined)][]>
}

export const winning =  {
    /**
     *  The winning bids for each of the 10 ranges at each sample in the final Ending Period of
     *  the current auction. The map's key is the 0-based index into the Sample Size. The
     *  first sample of the ending period is 0; the last is `Sample Size - 1`.
     */
    v9110: new StorageType('Auctions.Winning', 'Optional', [sts.number()], sts.array(() => sts.option(() => sts.tuple(() => [v9110.AccountId32, v9110.Id, sts.bigint()])))) as WinningV9110,
}

/**
 *  The winning bids for each of the 10 ranges at each sample in the final Ending Period of
 *  the current auction. The map's key is the 0-based index into the Sample Size. The
 *  first sample of the ending period is 0; the last is `Sample Size - 1`.
 */
export interface WinningV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(([v9110.AccountId32, v9110.Id, bigint] | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<(([v9110.AccountId32, v9110.Id, bigint] | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (([v9110.AccountId32, v9110.Id, bigint] | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (([v9110.AccountId32, v9110.Id, bigint] | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (([v9110.AccountId32, v9110.Id, bigint] | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (([v9110.AccountId32, v9110.Id, bigint] | undefined)[] | undefined)][]>
}
