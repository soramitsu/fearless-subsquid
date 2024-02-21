import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v9010 from '../v9010'

export const auctionCounter =  {
    /**
     *  The number of auctions that been started so far.
     */
    v1020: new StorageType('Slots.AuctionCounter', 'Default', [], v1020.AuctionIndex) as AuctionCounterV1020,
}

/**
 *  The number of auctions that been started so far.
 */
export interface AuctionCounterV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.AuctionIndex
    get(block: Block): Promise<(v1020.AuctionIndex | undefined)>
}

export const managedIds =  {
    /**
     *  Ordered list of all `ParaId` values that are managed by this module. This includes
     *  chains that are not yet deployed (but have won an auction in the future).
     */
    v1020: new StorageType('Slots.ManagedIds', 'Default', [], sts.array(() => v1020.ParaId)) as ManagedIdsV1020,
}

/**
 *  Ordered list of all `ParaId` values that are managed by this module. This includes
 *  chains that are not yet deployed (but have won an auction in the future).
 */
export interface ManagedIdsV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.ParaId[]
    get(block: Block): Promise<(v1020.ParaId[] | undefined)>
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
    v1020: new StorageType('Slots.Deposits', 'Default', [v1020.ParaId], sts.array(() => v1020.BalanceOf)) as DepositsV1020,
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
export interface DepositsV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.BalanceOf[]
    get(block: Block, key: v1020.ParaId): Promise<(v1020.BalanceOf[] | undefined)>
    getMany(block: Block, keys: v1020.ParaId[]): Promise<(v1020.BalanceOf[] | undefined)[]>
}

export const auctionInfo =  {
    /**
     *  Information relating to the current auction, if there is one.
     * 
     *  The first item in the tuple is the lease period index that the first of the four
     *  contiguous lease periods on auction is for. The second is the block number when the
     *  auction will "begin to end", i.e. the first block of the Ending Period of the auction.
     */
    v1020: new StorageType('Slots.AuctionInfo', 'Optional', [], sts.tuple(() => [v1020.LeasePeriodOf, v1020.BlockNumber])) as AuctionInfoV1020,
}

/**
 *  Information relating to the current auction, if there is one.
 * 
 *  The first item in the tuple is the lease period index that the first of the four
 *  contiguous lease periods on auction is for. The second is the block number when the
 *  auction will "begin to end", i.e. the first block of the Ending Period of the auction.
 */
export interface AuctionInfoV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<([v1020.LeasePeriodOf, v1020.BlockNumber] | undefined)>
}

export const winning =  {
    /**
     *  The winning bids for each of the 10 ranges at each block in the final Ending Period of
     *  the current auction. The map's key is the 0-based index into the Ending Period. The
     *  first block of the ending period is 0; the last is `EndingPeriod - 1`.
     */
    v1020: new StorageType('Slots.Winning', 'Optional', [v1020.BlockNumber], v1020.WinningData) as WinningV1020,
}

/**
 *  The winning bids for each of the 10 ranges at each block in the final Ending Period of
 *  the current auction. The map's key is the 0-based index into the Ending Period. The
 *  first block of the ending period is 0; the last is `EndingPeriod - 1`.
 */
export interface WinningV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1020.BlockNumber): Promise<(v1020.WinningData | undefined)>
    getMany(block: Block, keys: v1020.BlockNumber[]): Promise<(v1020.WinningData | undefined)[]>
}

export const reservedAmounts =  {
    /**
     *  Amounts currently reserved in the accounts of the bidders currently winning
     *  (sub-)ranges.
     */
    v1020: new StorageType('Slots.ReservedAmounts', 'Optional', [v1020.Bidder], v1020.BalanceOf) as ReservedAmountsV1020,
}

/**
 *  Amounts currently reserved in the accounts of the bidders currently winning
 *  (sub-)ranges.
 */
export interface ReservedAmountsV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1020.Bidder): Promise<(v1020.BalanceOf | undefined)>
    getMany(block: Block, keys: v1020.Bidder[]): Promise<(v1020.BalanceOf | undefined)[]>
}

export const onboardQueue =  {
    /**
     *  The set of Para IDs that have won and need to be on-boarded at an upcoming lease-period.
     *  This is cleared out on the first block of the lease period.
     */
    v1020: new StorageType('Slots.OnboardQueue', 'Default', [v1020.LeasePeriodOf], sts.array(() => v1020.ParaId)) as OnboardQueueV1020,
}

/**
 *  The set of Para IDs that have won and need to be on-boarded at an upcoming lease-period.
 *  This is cleared out on the first block of the lease period.
 */
export interface OnboardQueueV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.ParaId[]
    get(block: Block, key: v1020.LeasePeriodOf): Promise<(v1020.ParaId[] | undefined)>
    getMany(block: Block, keys: v1020.LeasePeriodOf[]): Promise<(v1020.ParaId[] | undefined)[]>
}

export const onboarding =  {
    /**
     *  The actual on-boarding information. Only exists when one of the following is true:
     *  - It is before the lease period that the parachain should be on-boarded.
     *  - The full on-boarding information has not yet been provided and the parachain is not
     *  yet due to be off-boarded.
     */
    v1020: new StorageType('Slots.Onboarding', 'Optional', [v1020.ParaId], sts.tuple(() => [v1020.LeasePeriodOf, v1020.IncomingParachain])) as OnboardingV1020,
}

/**
 *  The actual on-boarding information. Only exists when one of the following is true:
 *  - It is before the lease period that the parachain should be on-boarded.
 *  - The full on-boarding information has not yet been provided and the parachain is not
 *  yet due to be off-boarded.
 */
export interface OnboardingV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1020.ParaId): Promise<([v1020.LeasePeriodOf, v1020.IncomingParachain] | undefined)>
    getMany(block: Block, keys: v1020.ParaId[]): Promise<([v1020.LeasePeriodOf, v1020.IncomingParachain] | undefined)[]>
}

export const offboarding =  {
    /**
     *  Off-boarding account; currency held on deposit for the parachain gets placed here if the
     *  parachain gets off-boarded; i.e. its lease period is up and it isn't renewed.
     */
    v1020: new StorageType('Slots.Offboarding', 'Default', [v1020.ParaId], v1020.AccountId) as OffboardingV1020,
}

/**
 *  Off-boarding account; currency held on deposit for the parachain gets placed here if the
 *  parachain gets off-boarded; i.e. its lease period is up and it isn't renewed.
 */
export interface OffboardingV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.AccountId
    get(block: Block, key: v1020.ParaId): Promise<(v1020.AccountId | undefined)>
    getMany(block: Block, keys: v1020.ParaId[]): Promise<(v1020.AccountId | undefined)[]>
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
     *  existed) as far as this module is concerned.
     * 
     *  If a parachain doesn't exist *yet* but is scheduled to exist in the future, then it
     *  will be left-padded with one or more `None`s to denote the fact that nothing is held on
     *  deposit for the non-existent chain currently, but is held at some point in the future.
     * 
     *  It is illegal for a `None` value to trail in the list.
     */
    v9010: new StorageType('Slots.Leases', 'Default', [v9010.ParaId], sts.array(() => sts.option(() => sts.tuple(() => [v9010.AccountId, v9010.BalanceOf])))) as LeasesV9010,
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
 *  existed) as far as this module is concerned.
 * 
 *  If a parachain doesn't exist *yet* but is scheduled to exist in the future, then it
 *  will be left-padded with one or more `None`s to denote the fact that nothing is held on
 *  deposit for the non-existent chain currently, but is held at some point in the future.
 * 
 *  It is illegal for a `None` value to trail in the list.
 */
export interface LeasesV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): ([v9010.AccountId, v9010.BalanceOf] | undefined)[]
    get(block: Block, key: v9010.ParaId): Promise<(([v9010.AccountId, v9010.BalanceOf] | undefined)[] | undefined)>
    getMany(block: Block, keys: v9010.ParaId[]): Promise<(([v9010.AccountId, v9010.BalanceOf] | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v9010.ParaId[]>
    getKeys(block: Block, key: v9010.ParaId): Promise<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<v9010.ParaId[]>
    getPairs(block: Block): Promise<[k: v9010.ParaId, v: (([v9010.AccountId, v9010.BalanceOf] | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v9010.ParaId): Promise<[k: v9010.ParaId, v: (([v9010.AccountId, v9010.BalanceOf] | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9010.ParaId, v: (([v9010.AccountId, v9010.BalanceOf] | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<[k: v9010.ParaId, v: (([v9010.AccountId, v9010.BalanceOf] | undefined)[] | undefined)][]>
}
