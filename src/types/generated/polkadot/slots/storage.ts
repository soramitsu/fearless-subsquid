import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v9110 from '../v9110'

export const auctionCounter =  {
    /**
     *  The number of auctions that have been started so far.
     */
    v0: new StorageType('Slots.AuctionCounter', 'Default', [], v0.AuctionIndex) as AuctionCounterV0,
}

/**
 *  The number of auctions that have been started so far.
 */
export interface AuctionCounterV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.AuctionIndex
    get(block: Block): Promise<(v0.AuctionIndex | undefined)>
}

export const managedIds =  {
    /**
     *  Ordered list of all `ParaId` values that are managed by this module. This includes
     *  chains that are not yet deployed (but have won an auction in the future).
     */
    v0: new StorageType('Slots.ManagedIds', 'Default', [], sts.array(() => v0.ParaId)) as ManagedIdsV0,
}

/**
 *  Ordered list of all `ParaId` values that are managed by this module. This includes
 *  chains that are not yet deployed (but have won an auction in the future).
 */
export interface ManagedIdsV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.ParaId[]
    get(block: Block): Promise<(v0.ParaId[] | undefined)>
}

export const deposits =  {
    /**
     *  Various amounts on deposit for each parachain. An entry in `ManagedIds` implies a non-
     *  default entry here.
     * 
     *  The actual amount locked on its behalf at any time is the maximum item in this list. The
     *  first item in the list is the amount locked for the current Lease Period. Following
     *  items are for the subsequent lease periods.
     * 
     *  The default value (an empty list) implies that the parachain no longer exists (or never
     *  existed) as far as this module is concerned.
     * 
     *  If a parachain doesn't exist *yet* but is scheduled to exist in the future, then it
     *  will be left-padded with one or more zeroes to denote the fact that nothing is held on
     *  deposit for the non-existent chain currently, but is held at some point in the future.
     */
    v0: new StorageType('Slots.Deposits', 'Default', [v0.ParaId], sts.array(() => v0.BalanceOf)) as DepositsV0,
}

/**
 *  Various amounts on deposit for each parachain. An entry in `ManagedIds` implies a non-
 *  default entry here.
 * 
 *  The actual amount locked on its behalf at any time is the maximum item in this list. The
 *  first item in the list is the amount locked for the current Lease Period. Following
 *  items are for the subsequent lease periods.
 * 
 *  The default value (an empty list) implies that the parachain no longer exists (or never
 *  existed) as far as this module is concerned.
 * 
 *  If a parachain doesn't exist *yet* but is scheduled to exist in the future, then it
 *  will be left-padded with one or more zeroes to denote the fact that nothing is held on
 *  deposit for the non-existent chain currently, but is held at some point in the future.
 */
export interface DepositsV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.BalanceOf[]
    get(block: Block, key: v0.ParaId): Promise<(v0.BalanceOf[] | undefined)>
    getMany(block: Block, keys: v0.ParaId[]): Promise<(v0.BalanceOf[] | undefined)[]>
    getKeys(block: Block): Promise<v0.ParaId[]>
    getKeys(block: Block, key: v0.ParaId): Promise<v0.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.ParaId): AsyncIterable<v0.ParaId[]>
    getPairs(block: Block): Promise<[k: v0.ParaId, v: (v0.BalanceOf[] | undefined)][]>
    getPairs(block: Block, key: v0.ParaId): Promise<[k: v0.ParaId, v: (v0.BalanceOf[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.ParaId, v: (v0.BalanceOf[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.ParaId): AsyncIterable<[k: v0.ParaId, v: (v0.BalanceOf[] | undefined)][]>
}

export const auctionInfo =  {
    /**
     *  Information relating to the current auction, if there is one.
     * 
     *  The first item in the tuple is the lease period index that the first of the four
     *  contiguous lease periods on auction is for. The second is the block number when the
     *  auction will "begin to end", i.e. the first block of the Ending Period of the auction.
     */
    v0: new StorageType('Slots.AuctionInfo', 'Optional', [], sts.tuple(() => [v0.LeasePeriodOf, v0.BlockNumber])) as AuctionInfoV0,
}

/**
 *  Information relating to the current auction, if there is one.
 * 
 *  The first item in the tuple is the lease period index that the first of the four
 *  contiguous lease periods on auction is for. The second is the block number when the
 *  auction will "begin to end", i.e. the first block of the Ending Period of the auction.
 */
export interface AuctionInfoV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<([v0.LeasePeriodOf, v0.BlockNumber] | undefined)>
}

export const winning =  {
    /**
     *  The winning bids for each of the 10 ranges at each block in the final Ending Period of
     *  the current auction. The map's key is the 0-based index into the Ending Period. The
     *  first block of the ending period is 0; the last is `EndingPeriod - 1`.
     */
    v0: new StorageType('Slots.Winning', 'Optional', [v0.BlockNumber], v0.WinningData) as WinningV0,
}

/**
 *  The winning bids for each of the 10 ranges at each block in the final Ending Period of
 *  the current auction. The map's key is the 0-based index into the Ending Period. The
 *  first block of the ending period is 0; the last is `EndingPeriod - 1`.
 */
export interface WinningV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.BlockNumber): Promise<(v0.WinningData | undefined)>
    getMany(block: Block, keys: v0.BlockNumber[]): Promise<(v0.WinningData | undefined)[]>
    getKeys(block: Block): Promise<v0.BlockNumber[]>
    getKeys(block: Block, key: v0.BlockNumber): Promise<v0.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.BlockNumber): AsyncIterable<v0.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v0.BlockNumber, v: (v0.WinningData | undefined)][]>
    getPairs(block: Block, key: v0.BlockNumber): Promise<[k: v0.BlockNumber, v: (v0.WinningData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.BlockNumber, v: (v0.WinningData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.BlockNumber): AsyncIterable<[k: v0.BlockNumber, v: (v0.WinningData | undefined)][]>
}

export const reservedAmounts =  {
    /**
     *  Amounts currently reserved in the accounts of the bidders currently winning
     *  (sub-)ranges.
     */
    v0: new StorageType('Slots.ReservedAmounts', 'Optional', [v0.Bidder], v0.BalanceOf) as ReservedAmountsV0,
}

/**
 *  Amounts currently reserved in the accounts of the bidders currently winning
 *  (sub-)ranges.
 */
export interface ReservedAmountsV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.Bidder): Promise<(v0.BalanceOf | undefined)>
    getMany(block: Block, keys: v0.Bidder[]): Promise<(v0.BalanceOf | undefined)[]>
    getKeys(block: Block): Promise<v0.Bidder[]>
    getKeys(block: Block, key: v0.Bidder): Promise<v0.Bidder[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.Bidder[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.Bidder): AsyncIterable<v0.Bidder[]>
    getPairs(block: Block): Promise<[k: v0.Bidder, v: (v0.BalanceOf | undefined)][]>
    getPairs(block: Block, key: v0.Bidder): Promise<[k: v0.Bidder, v: (v0.BalanceOf | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.Bidder, v: (v0.BalanceOf | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.Bidder): AsyncIterable<[k: v0.Bidder, v: (v0.BalanceOf | undefined)][]>
}

export const onboardQueue =  {
    /**
     *  The set of Para IDs that have won and need to be on-boarded at an upcoming lease-period.
     *  This is cleared out on the first block of the lease period.
     */
    v0: new StorageType('Slots.OnboardQueue', 'Default', [v0.LeasePeriodOf], sts.array(() => v0.ParaId)) as OnboardQueueV0,
}

/**
 *  The set of Para IDs that have won and need to be on-boarded at an upcoming lease-period.
 *  This is cleared out on the first block of the lease period.
 */
export interface OnboardQueueV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.ParaId[]
    get(block: Block, key: v0.LeasePeriodOf): Promise<(v0.ParaId[] | undefined)>
    getMany(block: Block, keys: v0.LeasePeriodOf[]): Promise<(v0.ParaId[] | undefined)[]>
    getKeys(block: Block): Promise<v0.LeasePeriodOf[]>
    getKeys(block: Block, key: v0.LeasePeriodOf): Promise<v0.LeasePeriodOf[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.LeasePeriodOf[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.LeasePeriodOf): AsyncIterable<v0.LeasePeriodOf[]>
    getPairs(block: Block): Promise<[k: v0.LeasePeriodOf, v: (v0.ParaId[] | undefined)][]>
    getPairs(block: Block, key: v0.LeasePeriodOf): Promise<[k: v0.LeasePeriodOf, v: (v0.ParaId[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.LeasePeriodOf, v: (v0.ParaId[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.LeasePeriodOf): AsyncIterable<[k: v0.LeasePeriodOf, v: (v0.ParaId[] | undefined)][]>
}

export const onboarding =  {
    /**
     *  The actual on-boarding information. Only exists when one of the following is true:
     *  - It is before the lease period that the parachain should be on-boarded.
     *  - The full on-boarding information has not yet been provided and the parachain is not
     *  yet due to be off-boarded.
     */
    v0: new StorageType('Slots.Onboarding', 'Optional', [v0.ParaId], sts.tuple(() => [v0.LeasePeriodOf, v0.IncomingParachain])) as OnboardingV0,
}

/**
 *  The actual on-boarding information. Only exists when one of the following is true:
 *  - It is before the lease period that the parachain should be on-boarded.
 *  - The full on-boarding information has not yet been provided and the parachain is not
 *  yet due to be off-boarded.
 */
export interface OnboardingV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.ParaId): Promise<([v0.LeasePeriodOf, v0.IncomingParachain] | undefined)>
    getMany(block: Block, keys: v0.ParaId[]): Promise<([v0.LeasePeriodOf, v0.IncomingParachain] | undefined)[]>
    getKeys(block: Block): Promise<v0.ParaId[]>
    getKeys(block: Block, key: v0.ParaId): Promise<v0.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.ParaId): AsyncIterable<v0.ParaId[]>
    getPairs(block: Block): Promise<[k: v0.ParaId, v: ([v0.LeasePeriodOf, v0.IncomingParachain] | undefined)][]>
    getPairs(block: Block, key: v0.ParaId): Promise<[k: v0.ParaId, v: ([v0.LeasePeriodOf, v0.IncomingParachain] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.ParaId, v: ([v0.LeasePeriodOf, v0.IncomingParachain] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.ParaId): AsyncIterable<[k: v0.ParaId, v: ([v0.LeasePeriodOf, v0.IncomingParachain] | undefined)][]>
}

export const offboarding =  {
    /**
     *  Off-boarding account; currency held on deposit for the parachain gets placed here if the
     *  parachain gets off-boarded; i.e. its lease period is up and it isn't renewed.
     */
    v0: new StorageType('Slots.Offboarding', 'Default', [v0.ParaId], v0.AccountId) as OffboardingV0,
}

/**
 *  Off-boarding account; currency held on deposit for the parachain gets placed here if the
 *  parachain gets off-boarded; i.e. its lease period is up and it isn't renewed.
 */
export interface OffboardingV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.AccountId
    get(block: Block, key: v0.ParaId): Promise<(v0.AccountId | undefined)>
    getMany(block: Block, keys: v0.ParaId[]): Promise<(v0.AccountId | undefined)[]>
    getKeys(block: Block): Promise<v0.ParaId[]>
    getKeys(block: Block, key: v0.ParaId): Promise<v0.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.ParaId): AsyncIterable<v0.ParaId[]>
    getPairs(block: Block): Promise<[k: v0.ParaId, v: (v0.AccountId | undefined)][]>
    getPairs(block: Block, key: v0.ParaId): Promise<[k: v0.ParaId, v: (v0.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.ParaId, v: (v0.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.ParaId): AsyncIterable<[k: v0.ParaId, v: (v0.AccountId | undefined)][]>
}

export const leases =  {
    /**
     *  Amounts held on deposit for each (possibly future) leased parachain.
     * 
     *  The actual amount locked on its behalf by any account at any time is the maximum of the second values
     *  of the items in this list whose first value is the account.
     * 
     *  The first item in the list is the amount locked for the current Lease Period. Following
     *  items are for the subsequent lease periods.
     * 
     *  The default value (an empty list) implies that the parachain no longer exists (or never
     *  existed) as far as this pallet is concerned.
     * 
     *  If a parachain doesn't exist *yet* but is scheduled to exist in the future, then it
     *  will be left-padded with one or more `None`s to denote the fact that nothing is held on
     *  deposit for the non-existent chain currently, but is held at some point in the future.
     * 
     *  It is illegal for a `None` value to trail in the list.
     */
    v9110: new StorageType('Slots.Leases', 'Default', [v9110.Id], sts.array(() => sts.option(() => sts.tuple(() => [v9110.AccountId32, sts.bigint()])))) as LeasesV9110,
}

/**
 *  Amounts held on deposit for each (possibly future) leased parachain.
 * 
 *  The actual amount locked on its behalf by any account at any time is the maximum of the second values
 *  of the items in this list whose first value is the account.
 * 
 *  The first item in the list is the amount locked for the current Lease Period. Following
 *  items are for the subsequent lease periods.
 * 
 *  The default value (an empty list) implies that the parachain no longer exists (or never
 *  existed) as far as this pallet is concerned.
 * 
 *  If a parachain doesn't exist *yet* but is scheduled to exist in the future, then it
 *  will be left-padded with one or more `None`s to denote the fact that nothing is held on
 *  deposit for the non-existent chain currently, but is held at some point in the future.
 * 
 *  It is illegal for a `None` value to trail in the list.
 */
export interface LeasesV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): ([v9110.AccountId32, bigint] | undefined)[]
    get(block: Block, key: v9110.Id): Promise<(([v9110.AccountId32, bigint] | undefined)[] | undefined)>
    getMany(block: Block, keys: v9110.Id[]): Promise<(([v9110.AccountId32, bigint] | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v9110.Id[]>
    getKeys(block: Block, key: v9110.Id): Promise<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<v9110.Id[]>
    getPairs(block: Block): Promise<[k: v9110.Id, v: (([v9110.AccountId32, bigint] | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v9110.Id): Promise<[k: v9110.Id, v: (([v9110.AccountId32, bigint] | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.Id, v: (([v9110.AccountId32, bigint] | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<[k: v9110.Id, v: (([v9110.AccountId32, bigint] | undefined)[] | undefined)][]>
}
