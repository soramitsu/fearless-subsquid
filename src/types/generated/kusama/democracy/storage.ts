import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v1022 from '../v1022'
import * as v1030 from '../v1030'
import * as v1050 from '../v1050'
import * as v1055 from '../v1055'
import * as v1058 from '../v1058'
import * as v2005 from '../v2005'
import * as v9111 from '../v9111'
import * as v9320 from '../v9320'

export const publicPropCount =  {
    /**
     *  The number of (public) proposals that have been made so far.
     */
    v1020: new StorageType('Democracy.PublicPropCount', 'Default', [], v1020.PropIndex) as PublicPropCountV1020,
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface PublicPropCountV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.PropIndex
    get(block: Block): Promise<(v1020.PropIndex | undefined)>
}

export const publicProps =  {
    /**
     *  The public proposals. Unsorted.
     */
    v1020: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [v1020.PropIndex, v1020.Proposal, v1020.AccountId]))) as PublicPropsV1020,
    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    v1022: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [v1022.PropIndex, v1022.Hash, v1022.AccountId]))) as PublicPropsV1022,
    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    v9320: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v9320.Bounded, v9320.AccountId32]))) as PublicPropsV9320,
}

/**
 *  The public proposals. Unsorted.
 */
export interface PublicPropsV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1020.PropIndex, v1020.Proposal, v1020.AccountId][]
    get(block: Block): Promise<([v1020.PropIndex, v1020.Proposal, v1020.AccountId][] | undefined)>
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface PublicPropsV1022  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1022.PropIndex, v1022.Hash, v1022.AccountId][]
    get(block: Block): Promise<([v1022.PropIndex, v1022.Hash, v1022.AccountId][] | undefined)>
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface PublicPropsV9320  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v9320.Bounded, v9320.AccountId32][]
    get(block: Block): Promise<([number, v9320.Bounded, v9320.AccountId32][] | undefined)>
}

export const depositOf =  {
    /**
     *  Those who have locked a deposit.
     */
    v1020: new StorageType('Democracy.DepositOf', 'Optional', [v1020.PropIndex], sts.tuple(() => [v1020.BalanceOf, sts.array(() => v1020.AccountId)])) as DepositOfV1020,
    /**
     *  Those who have locked a deposit.
     * 
     *  TWOX-NOTE: Safe, as increasing integer keys are safe.
     */
    v2005: new StorageType('Democracy.DepositOf', 'Optional', [v2005.PropIndex], sts.tuple(() => [sts.array(() => v2005.AccountId), v2005.BalanceOf])) as DepositOfV2005,
}

/**
 *  Those who have locked a deposit.
 */
export interface DepositOfV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1020.PropIndex): Promise<([v1020.BalanceOf, v1020.AccountId[]] | undefined)>
    getMany(block: Block, keys: v1020.PropIndex[]): Promise<([v1020.BalanceOf, v1020.AccountId[]] | undefined)[]>
}

/**
 *  Those who have locked a deposit.
 * 
 *  TWOX-NOTE: Safe, as increasing integer keys are safe.
 */
export interface DepositOfV2005  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v2005.PropIndex): Promise<([v2005.AccountId[], v2005.BalanceOf] | undefined)>
    getMany(block: Block, keys: v2005.PropIndex[]): Promise<([v2005.AccountId[], v2005.BalanceOf] | undefined)[]>
    getKeys(block: Block): Promise<v2005.PropIndex[]>
    getKeys(block: Block, key: v2005.PropIndex): Promise<v2005.PropIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2005.PropIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v2005.PropIndex): AsyncIterable<v2005.PropIndex[]>
    getPairs(block: Block): Promise<[k: v2005.PropIndex, v: ([v2005.AccountId[], v2005.BalanceOf] | undefined)][]>
    getPairs(block: Block, key: v2005.PropIndex): Promise<[k: v2005.PropIndex, v: ([v2005.AccountId[], v2005.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2005.PropIndex, v: ([v2005.AccountId[], v2005.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2005.PropIndex): AsyncIterable<[k: v2005.PropIndex, v: ([v2005.AccountId[], v2005.BalanceOf] | undefined)][]>
}

export const referendumCount =  {
    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    v1020: new StorageType('Democracy.ReferendumCount', 'Default', [], v1020.ReferendumIndex) as ReferendumCountV1020,
}

/**
 *  The next free referendum index, aka the number of referenda started so far.
 */
export interface ReferendumCountV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.ReferendumIndex
    get(block: Block): Promise<(v1020.ReferendumIndex | undefined)>
}

export const nextTally =  {
    /**
     *  The next referendum index that should be tallied.
     */
    v1020: new StorageType('Democracy.NextTally', 'Default', [], v1020.ReferendumIndex) as NextTallyV1020,
}

/**
 *  The next referendum index that should be tallied.
 */
export interface NextTallyV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.ReferendumIndex
    get(block: Block): Promise<(v1020.ReferendumIndex | undefined)>
}

export const referendumInfoOf =  {
    /**
     *  Information concerning any given referendum.
     */
    v1020: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [v1020.ReferendumIndex], v1020.Type_283) as ReferendumInfoOfV1020,
    /**
     *  Information concerning any given referendum.
     */
    v1055: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [v1055.ReferendumIndex], v1055.ReferendumInfo) as ReferendumInfoOfV1055,
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v9111: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], v9111.ReferendumInfo) as ReferendumInfoOfV9111,
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v9320: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], v9320.ReferendumInfo) as ReferendumInfoOfV9320,
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoOfV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1020.ReferendumIndex): Promise<(v1020.Type_283 | undefined)>
    getMany(block: Block, keys: v1020.ReferendumIndex[]): Promise<(v1020.Type_283 | undefined)[]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoOfV1055  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1055.ReferendumIndex): Promise<(v1055.ReferendumInfo | undefined)>
    getMany(block: Block, keys: v1055.ReferendumIndex[]): Promise<(v1055.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<v1055.ReferendumIndex[]>
    getKeys(block: Block, key: v1055.ReferendumIndex): Promise<v1055.ReferendumIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1055.ReferendumIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v1055.ReferendumIndex): AsyncIterable<v1055.ReferendumIndex[]>
    getPairs(block: Block): Promise<[k: v1055.ReferendumIndex, v: (v1055.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: v1055.ReferendumIndex): Promise<[k: v1055.ReferendumIndex, v: (v1055.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1055.ReferendumIndex, v: (v1055.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1055.ReferendumIndex): AsyncIterable<[k: v1055.ReferendumIndex, v: (v1055.ReferendumInfo | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV9111  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9111.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9111.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9111.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9111.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9111.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9111.ReferendumInfo | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV9320  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9320.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9320.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9320.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9320.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9320.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9320.ReferendumInfo | undefined)][]>
}

export const dispatchQueue =  {
    /**
     *  Queue of successful referenda to be dispatched.
     */
    v1020: new StorageType('Democracy.DispatchQueue', 'Default', [v1020.BlockNumber], sts.array(() => sts.option(() => sts.tuple(() => [v1020.Proposal, v1020.ReferendumIndex])))) as DispatchQueueV1020,
    /**
     *  Queue of successful referenda to be dispatched.
     */
    v1022: new StorageType('Democracy.DispatchQueue', 'Default', [v1022.BlockNumber], sts.array(() => sts.option(() => sts.tuple(() => [v1022.Hash, v1022.ReferendumIndex])))) as DispatchQueueV1022,
    /**
     *  Queue of successful referenda to be dispatched. Stored ordered by block number.
     */
    v1030: new StorageType('Democracy.DispatchQueue', 'Default', [], sts.array(() => sts.tuple(() => [v1030.BlockNumber, v1030.Hash, v1030.ReferendumIndex]))) as DispatchQueueV1030,
}

/**
 *  Queue of successful referenda to be dispatched.
 */
export interface DispatchQueueV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): ([v1020.Proposal, v1020.ReferendumIndex] | undefined)[]
    get(block: Block, key: v1020.BlockNumber): Promise<(([v1020.Proposal, v1020.ReferendumIndex] | undefined)[] | undefined)>
    getMany(block: Block, keys: v1020.BlockNumber[]): Promise<(([v1020.Proposal, v1020.ReferendumIndex] | undefined)[] | undefined)[]>
}

/**
 *  Queue of successful referenda to be dispatched.
 */
export interface DispatchQueueV1022  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): ([v1022.Hash, v1022.ReferendumIndex] | undefined)[]
    get(block: Block, key: v1022.BlockNumber): Promise<(([v1022.Hash, v1022.ReferendumIndex] | undefined)[] | undefined)>
    getMany(block: Block, keys: v1022.BlockNumber[]): Promise<(([v1022.Hash, v1022.ReferendumIndex] | undefined)[] | undefined)[]>
}

/**
 *  Queue of successful referenda to be dispatched. Stored ordered by block number.
 */
export interface DispatchQueueV1030  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1030.BlockNumber, v1030.Hash, v1030.ReferendumIndex][]
    get(block: Block): Promise<([v1030.BlockNumber, v1030.Hash, v1030.ReferendumIndex][] | undefined)>
}

export const votersFor =  {
    /**
     *  Get the voters for the current proposal.
     */
    v1020: new StorageType('Democracy.VotersFor', 'Default', [v1020.ReferendumIndex], sts.array(() => v1020.AccountId)) as VotersForV1020,
}

/**
 *  Get the voters for the current proposal.
 */
export interface VotersForV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.AccountId[]
    get(block: Block, key: v1020.ReferendumIndex): Promise<(v1020.AccountId[] | undefined)>
    getMany(block: Block, keys: v1020.ReferendumIndex[]): Promise<(v1020.AccountId[] | undefined)[]>
}

export const voteOf =  {
    /**
     *  Get the vote in a given referendum of a particular voter. The result is meaningful only
     *  if `voters_for` includes the voter when called with the referendum (you'll get the
     *  default `Vote` value otherwise). If you don't want to check `voters_for`, then you can
     *  also check for simple existence with `VoteOf::exists` first.
     */
    v1020: new StorageType('Democracy.VoteOf', 'Default', [sts.tuple(() => [v1020.ReferendumIndex, v1020.AccountId])], v1020.Vote) as VoteOfV1020,
}

/**
 *  Get the vote in a given referendum of a particular voter. The result is meaningful only
 *  if `voters_for` includes the voter when called with the referendum (you'll get the
 *  default `Vote` value otherwise). If you don't want to check `voters_for`, then you can
 *  also check for simple existence with `VoteOf::exists` first.
 */
export interface VoteOfV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.Vote
    get(block: Block, key: [v1020.ReferendumIndex, v1020.AccountId]): Promise<(v1020.Vote | undefined)>
    getMany(block: Block, keys: [v1020.ReferendumIndex, v1020.AccountId][]): Promise<(v1020.Vote | undefined)[]>
}

export const proxy =  {
    /**
     *  Who is able to vote for whom. Value is the fund-holding account, key is the
     *  vote-transaction-sending account.
     */
    v1020: new StorageType('Democracy.Proxy', 'Optional', [v1020.AccountId], v1020.AccountId) as ProxyV1020,
    /**
     *  Who is able to vote for whom. Value is the fund-holding account, key is the
     *  vote-transaction-sending account.
     */
    v1050: new StorageType('Democracy.Proxy', 'Optional', [v1050.AccountId], v1050.ProxyState) as ProxyV1050,
}

/**
 *  Who is able to vote for whom. Value is the fund-holding account, key is the
 *  vote-transaction-sending account.
 */
export interface ProxyV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1020.AccountId): Promise<(v1020.AccountId | undefined)>
    getMany(block: Block, keys: v1020.AccountId[]): Promise<(v1020.AccountId | undefined)[]>
}

/**
 *  Who is able to vote for whom. Value is the fund-holding account, key is the
 *  vote-transaction-sending account.
 */
export interface ProxyV1050  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1050.AccountId): Promise<(v1050.ProxyState | undefined)>
    getMany(block: Block, keys: v1050.AccountId[]): Promise<(v1050.ProxyState | undefined)[]>
}

export const delegations =  {
    /**
     *  Get the account (and lock periods) to which another account is delegating vote.
     */
    v1020: new StorageType('Democracy.Delegations', 'Default', [v1020.AccountId], sts.tuple(() => [v1020.AccountId, v1020.Conviction])) as DelegationsV1020,
}

/**
 *  Get the account (and lock periods) to which another account is delegating vote.
 */
export interface DelegationsV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1020.AccountId, v1020.Conviction]
    get(block: Block, key: v1020.AccountId): Promise<([v1020.AccountId, v1020.Conviction] | undefined)>
    getMany(block: Block, keys: v1020.AccountId[]): Promise<([v1020.AccountId, v1020.Conviction] | undefined)[]>
}

export const lastTabledWasExternal =  {
    /**
     *  True if the last referendum tabled was submitted externally. False if it was a public
     *  proposal.
     */
    v1020: new StorageType('Democracy.LastTabledWasExternal', 'Default', [], sts.boolean()) as LastTabledWasExternalV1020,
}

/**
 *  True if the last referendum tabled was submitted externally. False if it was a public
 *  proposal.
 */
export interface LastTabledWasExternalV1020  {
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
    v1020: new StorageType('Democracy.NextExternal', 'Optional', [], sts.tuple(() => [v1020.Proposal, v1020.VoteThreshold])) as NextExternalV1020,
    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    v1022: new StorageType('Democracy.NextExternal', 'Optional', [], sts.tuple(() => [v1022.Hash, v1022.VoteThreshold])) as NextExternalV1022,
    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    v9320: new StorageType('Democracy.NextExternal', 'Optional', [], sts.tuple(() => [v9320.Bounded, v9320.VoteThreshold])) as NextExternalV9320,
}

/**
 *  The referendum to be tabled whenever it would be valid to table an external proposal.
 *  This happens when a referendum needs to be tabled and one of two conditions are met:
 *  - `LastTabledWasExternal` is `false`; or
 *  - `PublicProps` is empty.
 */
export interface NextExternalV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<([v1020.Proposal, v1020.VoteThreshold] | undefined)>
}

/**
 *  The referendum to be tabled whenever it would be valid to table an external proposal.
 *  This happens when a referendum needs to be tabled and one of two conditions are met:
 *  - `LastTabledWasExternal` is `false`; or
 *  - `PublicProps` is empty.
 */
export interface NextExternalV1022  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<([v1022.Hash, v1022.VoteThreshold] | undefined)>
}

/**
 *  The referendum to be tabled whenever it would be valid to table an external proposal.
 *  This happens when a referendum needs to be tabled and one of two conditions are met:
 *  - `LastTabledWasExternal` is `false`; or
 *  - `PublicProps` is empty.
 */
export interface NextExternalV9320  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<([v9320.Bounded, v9320.VoteThreshold] | undefined)>
}

export const blacklist =  {
    /**
     *  A record of who vetoed what. Maps proposal hash to a possible existent block number
     *  (until when it may not be resubmitted) and who vetoed it.
     */
    v1020: new StorageType('Democracy.Blacklist', 'Optional', [v1020.Hash], sts.tuple(() => [v1020.BlockNumber, sts.array(() => v1020.AccountId)])) as BlacklistV1020,
}

/**
 *  A record of who vetoed what. Maps proposal hash to a possible existent block number
 *  (until when it may not be resubmitted) and who vetoed it.
 */
export interface BlacklistV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1020.Hash): Promise<([v1020.BlockNumber, v1020.AccountId[]] | undefined)>
    getMany(block: Block, keys: v1020.Hash[]): Promise<([v1020.BlockNumber, v1020.AccountId[]] | undefined)[]>
}

export const cancellations =  {
    /**
     *  Record of all proposals that have been subject to emergency cancellation.
     */
    v1020: new StorageType('Democracy.Cancellations', 'Default', [v1020.Hash], sts.boolean()) as CancellationsV1020,
}

/**
 *  Record of all proposals that have been subject to emergency cancellation.
 */
export interface CancellationsV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block, key: v1020.Hash): Promise<(boolean | undefined)>
    getMany(block: Block, keys: v1020.Hash[]): Promise<(boolean | undefined)[]>
}

export const preimages =  {
    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    v1022: new StorageType('Democracy.Preimages', 'Optional', [v1022.Hash], sts.tuple(() => [sts.bytes(), v1022.AccountId, v1022.BalanceOf, v1022.BlockNumber])) as PreimagesV1022,
    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    v1058: new StorageType('Democracy.Preimages', 'Optional', [v1058.Hash], v1058.PreimageStatus) as PreimagesV1058,
    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    v9111: new StorageType('Democracy.Preimages', 'Optional', [v9111.H256], v9111.PreimageStatus) as PreimagesV9111,
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface PreimagesV1022  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1022.Hash): Promise<([Bytes, v1022.AccountId, v1022.BalanceOf, v1022.BlockNumber] | undefined)>
    getMany(block: Block, keys: v1022.Hash[]): Promise<([Bytes, v1022.AccountId, v1022.BalanceOf, v1022.BlockNumber] | undefined)[]>
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface PreimagesV1058  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1058.Hash): Promise<(v1058.PreimageStatus | undefined)>
    getMany(block: Block, keys: v1058.Hash[]): Promise<(v1058.PreimageStatus | undefined)[]>
    getKeys(block: Block): Promise<v1058.Hash[]>
    getKeys(block: Block, key: v1058.Hash): Promise<v1058.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1058.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v1058.Hash): AsyncIterable<v1058.Hash[]>
    getPairs(block: Block): Promise<[k: v1058.Hash, v: (v1058.PreimageStatus | undefined)][]>
    getPairs(block: Block, key: v1058.Hash): Promise<[k: v1058.Hash, v: (v1058.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1058.Hash, v: (v1058.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1058.Hash): AsyncIterable<[k: v1058.Hash, v: (v1058.PreimageStatus | undefined)][]>
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface PreimagesV9111  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9111.H256): Promise<(v9111.PreimageStatus | undefined)>
    getMany(block: Block, keys: v9111.H256[]): Promise<(v9111.PreimageStatus | undefined)[]>
    getKeys(block: Block): Promise<v9111.H256[]>
    getKeys(block: Block, key: v9111.H256): Promise<v9111.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9111.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9111.H256): AsyncIterable<v9111.H256[]>
    getPairs(block: Block): Promise<[k: v9111.H256, v: (v9111.PreimageStatus | undefined)][]>
    getPairs(block: Block, key: v9111.H256): Promise<[k: v9111.H256, v: (v9111.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9111.H256, v: (v9111.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9111.H256): AsyncIterable<[k: v9111.H256, v: (v9111.PreimageStatus | undefined)][]>
}

export const lowestUnbaked =  {
    /**
     *  The lowest referendum index representing an unbaked referendum. Equal to
     *  `ReferendumCount` if there isn't a unbaked referendum.
     */
    v1030: new StorageType('Democracy.LowestUnbaked', 'Default', [], v1030.ReferendumIndex) as LowestUnbakedV1030,
}

/**
 *  The lowest referendum index representing an unbaked referendum. Equal to
 *  `ReferendumCount` if there isn't a unbaked referendum.
 */
export interface LowestUnbakedV1030  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1030.ReferendumIndex
    get(block: Block): Promise<(v1030.ReferendumIndex | undefined)>
}

export const locks =  {
    /**
     *  Accounts for which there are locks in action which may be removed at some point in the
     *  future. The value is the block number at which the lock expires and may be removed.
     */
    v1050: new StorageType('Democracy.Locks', 'Optional', [v1050.AccountId], v1050.BlockNumber) as LocksV1050,
}

/**
 *  Accounts for which there are locks in action which may be removed at some point in the
 *  future. The value is the block number at which the lock expires and may be removed.
 */
export interface LocksV1050  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1050.AccountId): Promise<(v1050.BlockNumber | undefined)>
    getMany(block: Block, keys: v1050.AccountId[]): Promise<(v1050.BlockNumber | undefined)[]>
}

export const votingOf =  {
    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     */
    v1055: new StorageType('Democracy.VotingOf', 'Default', [v1055.AccountId], v1055.Voting) as VotingOfV1055,
    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    v9111: new StorageType('Democracy.VotingOf', 'Default', [v9111.AccountId32], v9111.Voting) as VotingOfV9111,
}

/**
 *  All votes for a particular voter. We store the balance for the number of votes that we
 *  have recorded. The second item is the total amount of delegations, that will be added.
 */
export interface VotingOfV1055  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1055.Voting
    get(block: Block, key: v1055.AccountId): Promise<(v1055.Voting | undefined)>
    getMany(block: Block, keys: v1055.AccountId[]): Promise<(v1055.Voting | undefined)[]>
    getKeys(block: Block): Promise<v1055.AccountId[]>
    getKeys(block: Block, key: v1055.AccountId): Promise<v1055.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1055.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1055.AccountId): AsyncIterable<v1055.AccountId[]>
    getPairs(block: Block): Promise<[k: v1055.AccountId, v: (v1055.Voting | undefined)][]>
    getPairs(block: Block, key: v1055.AccountId): Promise<[k: v1055.AccountId, v: (v1055.Voting | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1055.AccountId, v: (v1055.Voting | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1055.AccountId): AsyncIterable<[k: v1055.AccountId, v: (v1055.Voting | undefined)][]>
}

/**
 *  All votes for a particular voter. We store the balance for the number of votes that we
 *  have recorded. The second item is the total amount of delegations, that will be added.
 * 
 *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
 */
export interface VotingOfV9111  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9111.Voting
    get(block: Block, key: v9111.AccountId32): Promise<(v9111.Voting | undefined)>
    getMany(block: Block, keys: v9111.AccountId32[]): Promise<(v9111.Voting | undefined)[]>
    getKeys(block: Block): Promise<v9111.AccountId32[]>
    getKeys(block: Block, key: v9111.AccountId32): Promise<v9111.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9111.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9111.AccountId32): AsyncIterable<v9111.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9111.AccountId32, v: (v9111.Voting | undefined)][]>
    getPairs(block: Block, key: v9111.AccountId32): Promise<[k: v9111.AccountId32, v: (v9111.Voting | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9111.AccountId32, v: (v9111.Voting | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9111.AccountId32): AsyncIterable<[k: v9111.AccountId32, v: (v9111.Voting | undefined)][]>
}

export const storageVersion =  {
    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    v2005: new StorageType('Democracy.StorageVersion', 'Optional', [], v2005.Releases) as StorageVersionV2005,
    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    v9111: new StorageType('Democracy.StorageVersion', 'Optional', [], v9111.Type_294) as StorageVersionV9111,
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface StorageVersionV2005  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v2005.Releases | undefined)>
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface StorageVersionV9111  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v9111.Type_294 | undefined)>
}
