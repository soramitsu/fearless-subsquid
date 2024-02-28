import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v9110 from '../v9110'
import * as v9340 from '../v9340'
import * as v9420 from '../v9420'

export const publicPropCount =  {
    /**
     *  The number of (public) proposals that have been made so far.
     */
    v0: new StorageType('Democracy.PublicPropCount', 'Default', [], v0.PropIndex) as PublicPropCountV0,
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface PublicPropCountV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.PropIndex
    get(block: Block): Promise<(v0.PropIndex | undefined)>
}

export const publicProps =  {
    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    v0: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [v0.PropIndex, v0.Hash, v0.AccountId]))) as PublicPropsV0,
    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    v9340: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v9340.Bounded, v9340.AccountId32]))) as PublicPropsV9340,
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface PublicPropsV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v0.PropIndex, v0.Hash, v0.AccountId][]
    get(block: Block): Promise<([v0.PropIndex, v0.Hash, v0.AccountId][] | undefined)>
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface PublicPropsV9340  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v9340.Bounded, v9340.AccountId32][]
    get(block: Block): Promise<([number, v9340.Bounded, v9340.AccountId32][] | undefined)>
}

export const depositOf =  {
    /**
     *  Those who have locked a deposit.
     * 
     *  TWOX-NOTE: Safe, as increasing integer keys are safe.
     */
    v0: new StorageType('Democracy.DepositOf', 'Optional', [v0.PropIndex], sts.tuple(() => [sts.array(() => v0.AccountId), v0.BalanceOf])) as DepositOfV0,
}

/**
 *  Those who have locked a deposit.
 * 
 *  TWOX-NOTE: Safe, as increasing integer keys are safe.
 */
export interface DepositOfV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.PropIndex): Promise<([v0.AccountId[], v0.BalanceOf] | undefined)>
    getMany(block: Block, keys: v0.PropIndex[]): Promise<([v0.AccountId[], v0.BalanceOf] | undefined)[]>
    getKeys(block: Block): Promise<v0.PropIndex[]>
    getKeys(block: Block, key: v0.PropIndex): Promise<v0.PropIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.PropIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.PropIndex): AsyncIterable<v0.PropIndex[]>
    getPairs(block: Block): Promise<[k: v0.PropIndex, v: ([v0.AccountId[], v0.BalanceOf] | undefined)][]>
    getPairs(block: Block, key: v0.PropIndex): Promise<[k: v0.PropIndex, v: ([v0.AccountId[], v0.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.PropIndex, v: ([v0.AccountId[], v0.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.PropIndex): AsyncIterable<[k: v0.PropIndex, v: ([v0.AccountId[], v0.BalanceOf] | undefined)][]>
}

export const preimages =  {
    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    v0: new StorageType('Democracy.Preimages', 'Optional', [v0.Hash], v0.PreimageStatus) as PreimagesV0,
    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    v9110: new StorageType('Democracy.Preimages', 'Optional', [v9110.H256], v9110.PreimageStatus) as PreimagesV9110,
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface PreimagesV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.Hash): Promise<(v0.PreimageStatus | undefined)>
    getMany(block: Block, keys: v0.Hash[]): Promise<(v0.PreimageStatus | undefined)[]>
    getKeys(block: Block): Promise<v0.Hash[]>
    getKeys(block: Block, key: v0.Hash): Promise<v0.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.Hash): AsyncIterable<v0.Hash[]>
    getPairs(block: Block): Promise<[k: v0.Hash, v: (v0.PreimageStatus | undefined)][]>
    getPairs(block: Block, key: v0.Hash): Promise<[k: v0.Hash, v: (v0.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.Hash, v: (v0.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.Hash): AsyncIterable<[k: v0.Hash, v: (v0.PreimageStatus | undefined)][]>
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface PreimagesV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9110.H256): Promise<(v9110.PreimageStatus | undefined)>
    getMany(block: Block, keys: v9110.H256[]): Promise<(v9110.PreimageStatus | undefined)[]>
    getKeys(block: Block): Promise<v9110.H256[]>
    getKeys(block: Block, key: v9110.H256): Promise<v9110.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.H256): AsyncIterable<v9110.H256[]>
    getPairs(block: Block): Promise<[k: v9110.H256, v: (v9110.PreimageStatus | undefined)][]>
    getPairs(block: Block, key: v9110.H256): Promise<[k: v9110.H256, v: (v9110.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.H256, v: (v9110.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.H256): AsyncIterable<[k: v9110.H256, v: (v9110.PreimageStatus | undefined)][]>
}

export const referendumCount =  {
    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    v0: new StorageType('Democracy.ReferendumCount', 'Default', [], v0.ReferendumIndex) as ReferendumCountV0,
}

/**
 *  The next free referendum index, aka the number of referenda started so far.
 */
export interface ReferendumCountV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.ReferendumIndex
    get(block: Block): Promise<(v0.ReferendumIndex | undefined)>
}

export const lowestUnbaked =  {
    /**
     *  The lowest referendum index representing an unbaked referendum. Equal to
     *  `ReferendumCount` if there isn't a unbaked referendum.
     */
    v0: new StorageType('Democracy.LowestUnbaked', 'Default', [], v0.ReferendumIndex) as LowestUnbakedV0,
}

/**
 *  The lowest referendum index representing an unbaked referendum. Equal to
 *  `ReferendumCount` if there isn't a unbaked referendum.
 */
export interface LowestUnbakedV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.ReferendumIndex
    get(block: Block): Promise<(v0.ReferendumIndex | undefined)>
}

export const referendumInfoOf =  {
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v0: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [v0.ReferendumIndex], v0.ReferendumInfo) as ReferendumInfoOfV0,
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v9110: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], v9110.ReferendumInfo) as ReferendumInfoOfV9110,
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v9340: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], v9340.ReferendumInfo) as ReferendumInfoOfV9340,
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.ReferendumIndex): Promise<(v0.ReferendumInfo | undefined)>
    getMany(block: Block, keys: v0.ReferendumIndex[]): Promise<(v0.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<v0.ReferendumIndex[]>
    getKeys(block: Block, key: v0.ReferendumIndex): Promise<v0.ReferendumIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.ReferendumIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.ReferendumIndex): AsyncIterable<v0.ReferendumIndex[]>
    getPairs(block: Block): Promise<[k: v0.ReferendumIndex, v: (v0.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: v0.ReferendumIndex): Promise<[k: v0.ReferendumIndex, v: (v0.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.ReferendumIndex, v: (v0.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.ReferendumIndex): AsyncIterable<[k: v0.ReferendumIndex, v: (v0.ReferendumInfo | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9110.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9110.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9110.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9110.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9110.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9110.ReferendumInfo | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV9340  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9340.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9340.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9340.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9340.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9340.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9340.ReferendumInfo | undefined)][]>
}

export const votingOf =  {
    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    v0: new StorageType('Democracy.VotingOf', 'Default', [v0.AccountId], v0.Voting) as VotingOfV0,
    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    v9110: new StorageType('Democracy.VotingOf', 'Default', [v9110.AccountId32], v9110.Voting) as VotingOfV9110,
}

/**
 *  All votes for a particular voter. We store the balance for the number of votes that we
 *  have recorded. The second item is the total amount of delegations, that will be added.
 * 
 *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
 */
export interface VotingOfV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.Voting
    get(block: Block, key: v0.AccountId): Promise<(v0.Voting | undefined)>
    getMany(block: Block, keys: v0.AccountId[]): Promise<(v0.Voting | undefined)[]>
    getKeys(block: Block): Promise<v0.AccountId[]>
    getKeys(block: Block, key: v0.AccountId): Promise<v0.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.AccountId): AsyncIterable<v0.AccountId[]>
    getPairs(block: Block): Promise<[k: v0.AccountId, v: (v0.Voting | undefined)][]>
    getPairs(block: Block, key: v0.AccountId): Promise<[k: v0.AccountId, v: (v0.Voting | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.AccountId, v: (v0.Voting | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.AccountId): AsyncIterable<[k: v0.AccountId, v: (v0.Voting | undefined)][]>
}

/**
 *  All votes for a particular voter. We store the balance for the number of votes that we
 *  have recorded. The second item is the total amount of delegations, that will be added.
 * 
 *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
 */
export interface VotingOfV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9110.Voting
    get(block: Block, key: v9110.AccountId32): Promise<(v9110.Voting | undefined)>
    getMany(block: Block, keys: v9110.AccountId32[]): Promise<(v9110.Voting | undefined)[]>
    getKeys(block: Block): Promise<v9110.AccountId32[]>
    getKeys(block: Block, key: v9110.AccountId32): Promise<v9110.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.AccountId32): AsyncIterable<v9110.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9110.AccountId32, v: (v9110.Voting | undefined)][]>
    getPairs(block: Block, key: v9110.AccountId32): Promise<[k: v9110.AccountId32, v: (v9110.Voting | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.AccountId32, v: (v9110.Voting | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.AccountId32): AsyncIterable<[k: v9110.AccountId32, v: (v9110.Voting | undefined)][]>
}

export const proxy =  {
    /**
     *  Who is able to vote for whom. Value is the fund-holding account, key is the
     *  vote-transaction-sending account.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    v0: new StorageType('Democracy.Proxy', 'Optional', [v0.AccountId], v0.ProxyState) as ProxyV0,
}

/**
 *  Who is able to vote for whom. Value is the fund-holding account, key is the
 *  vote-transaction-sending account.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface ProxyV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.AccountId): Promise<(v0.ProxyState | undefined)>
    getMany(block: Block, keys: v0.AccountId[]): Promise<(v0.ProxyState | undefined)[]>
    getKeys(block: Block): Promise<v0.AccountId[]>
    getKeys(block: Block, key: v0.AccountId): Promise<v0.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.AccountId): AsyncIterable<v0.AccountId[]>
    getPairs(block: Block): Promise<[k: v0.AccountId, v: (v0.ProxyState | undefined)][]>
    getPairs(block: Block, key: v0.AccountId): Promise<[k: v0.AccountId, v: (v0.ProxyState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.AccountId, v: (v0.ProxyState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.AccountId): AsyncIterable<[k: v0.AccountId, v: (v0.ProxyState | undefined)][]>
}

export const locks =  {
    /**
     *  Accounts for which there are locks in action which may be removed at some point in the
     *  future. The value is the block number at which the lock expires and may be removed.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    v0: new StorageType('Democracy.Locks', 'Optional', [v0.AccountId], v0.BlockNumber) as LocksV0,
}

/**
 *  Accounts for which there are locks in action which may be removed at some point in the
 *  future. The value is the block number at which the lock expires and may be removed.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface LocksV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.AccountId): Promise<(v0.BlockNumber | undefined)>
    getMany(block: Block, keys: v0.AccountId[]): Promise<(v0.BlockNumber | undefined)[]>
    getKeys(block: Block): Promise<v0.AccountId[]>
    getKeys(block: Block, key: v0.AccountId): Promise<v0.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.AccountId): AsyncIterable<v0.AccountId[]>
    getPairs(block: Block): Promise<[k: v0.AccountId, v: (v0.BlockNumber | undefined)][]>
    getPairs(block: Block, key: v0.AccountId): Promise<[k: v0.AccountId, v: (v0.BlockNumber | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.AccountId, v: (v0.BlockNumber | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.AccountId): AsyncIterable<[k: v0.AccountId, v: (v0.BlockNumber | undefined)][]>
}

export const lastTabledWasExternal =  {
    /**
     *  True if the last referendum tabled was submitted externally. False if it was a public
     *  proposal.
     */
    v0: new StorageType('Democracy.LastTabledWasExternal', 'Default', [], sts.boolean()) as LastTabledWasExternalV0,
}

/**
 *  True if the last referendum tabled was submitted externally. False if it was a public
 *  proposal.
 */
export interface LastTabledWasExternalV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const nextExternal =  {
    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    v0: new StorageType('Democracy.NextExternal', 'Optional', [], sts.tuple(() => [v0.Hash, v0.VoteThreshold])) as NextExternalV0,
    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    v9340: new StorageType('Democracy.NextExternal', 'Optional', [], sts.tuple(() => [v9340.Bounded, v9340.VoteThreshold])) as NextExternalV9340,
}

/**
 *  The referendum to be tabled whenever it would be valid to table an external proposal.
 *  This happens when a referendum needs to be tabled and one of two conditions are met:
 *  - `LastTabledWasExternal` is `false`; or
 *  - `PublicProps` is empty.
 */
export interface NextExternalV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<([v0.Hash, v0.VoteThreshold] | undefined)>
}

/**
 *  The referendum to be tabled whenever it would be valid to table an external proposal.
 *  This happens when a referendum needs to be tabled and one of two conditions are met:
 *  - `LastTabledWasExternal` is `false`; or
 *  - `PublicProps` is empty.
 */
export interface NextExternalV9340  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<([v9340.Bounded, v9340.VoteThreshold] | undefined)>
}

export const blacklist =  {
    /**
     *  A record of who vetoed what. Maps proposal hash to a possible existent block number
     *  (until when it may not be resubmitted) and who vetoed it.
     */
    v0: new StorageType('Democracy.Blacklist', 'Optional', [v0.Hash], sts.tuple(() => [v0.BlockNumber, sts.array(() => v0.AccountId)])) as BlacklistV0,
}

/**
 *  A record of who vetoed what. Maps proposal hash to a possible existent block number
 *  (until when it may not be resubmitted) and who vetoed it.
 */
export interface BlacklistV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.Hash): Promise<([v0.BlockNumber, v0.AccountId[]] | undefined)>
    getMany(block: Block, keys: v0.Hash[]): Promise<([v0.BlockNumber, v0.AccountId[]] | undefined)[]>
    getKeys(block: Block): Promise<v0.Hash[]>
    getKeys(block: Block, key: v0.Hash): Promise<v0.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.Hash): AsyncIterable<v0.Hash[]>
    getPairs(block: Block): Promise<[k: v0.Hash, v: ([v0.BlockNumber, v0.AccountId[]] | undefined)][]>
    getPairs(block: Block, key: v0.Hash): Promise<[k: v0.Hash, v: ([v0.BlockNumber, v0.AccountId[]] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.Hash, v: ([v0.BlockNumber, v0.AccountId[]] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.Hash): AsyncIterable<[k: v0.Hash, v: ([v0.BlockNumber, v0.AccountId[]] | undefined)][]>
}

export const cancellations =  {
    /**
     *  Record of all proposals that have been subject to emergency cancellation.
     */
    v0: new StorageType('Democracy.Cancellations', 'Default', [v0.Hash], sts.boolean()) as CancellationsV0,
}

/**
 *  Record of all proposals that have been subject to emergency cancellation.
 */
export interface CancellationsV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block, key: v0.Hash): Promise<(boolean | undefined)>
    getMany(block: Block, keys: v0.Hash[]): Promise<(boolean | undefined)[]>
    getKeys(block: Block): Promise<v0.Hash[]>
    getKeys(block: Block, key: v0.Hash): Promise<v0.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.Hash): AsyncIterable<v0.Hash[]>
    getPairs(block: Block): Promise<[k: v0.Hash, v: (boolean | undefined)][]>
    getPairs(block: Block, key: v0.Hash): Promise<[k: v0.Hash, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.Hash, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.Hash): AsyncIterable<[k: v0.Hash, v: (boolean | undefined)][]>
}

export const storageVersion =  {
    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    v0: new StorageType('Democracy.StorageVersion', 'Optional', [], v0.Releases) as StorageVersionV0,
    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    v9110: new StorageType('Democracy.StorageVersion', 'Optional', [], v9110.Type_442) as StorageVersionV9110,
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface StorageVersionV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v0.Releases | undefined)>
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface StorageVersionV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v9110.Type_442 | undefined)>
}

export const metadataOf =  {
    /**
     *  General information concerning any proposal or referendum.
     *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
     *  dump or IPFS hash of a JSON file.
     * 
     *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
     *  large preimages.
     */
    v9420: new StorageType('Democracy.MetadataOf', 'Optional', [v9420.MetadataOwner], v9420.H256) as MetadataOfV9420,
}

/**
 *  General information concerning any proposal or referendum.
 *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
 *  dump or IPFS hash of a JSON file.
 * 
 *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
 *  large preimages.
 */
export interface MetadataOfV9420  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9420.MetadataOwner): Promise<(v9420.H256 | undefined)>
    getMany(block: Block, keys: v9420.MetadataOwner[]): Promise<(v9420.H256 | undefined)[]>
    getKeys(block: Block): Promise<v9420.MetadataOwner[]>
    getKeys(block: Block, key: v9420.MetadataOwner): Promise<v9420.MetadataOwner[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9420.MetadataOwner[]>
    getKeysPaged(pageSize: number, block: Block, key: v9420.MetadataOwner): AsyncIterable<v9420.MetadataOwner[]>
    getPairs(block: Block): Promise<[k: v9420.MetadataOwner, v: (v9420.H256 | undefined)][]>
    getPairs(block: Block, key: v9420.MetadataOwner): Promise<[k: v9420.MetadataOwner, v: (v9420.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9420.MetadataOwner, v: (v9420.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9420.MetadataOwner): AsyncIterable<[k: v9420.MetadataOwner, v: (v9420.H256 | undefined)][]>
}
