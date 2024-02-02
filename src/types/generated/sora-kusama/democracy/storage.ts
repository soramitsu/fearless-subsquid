import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v7 from '../v7'

export const publicPropCount =  {
    /**
     *  The number of (public) proposals that have been made so far.
     */
    v7: new StorageType('Democracy.PublicPropCount', 'Default', [], sts.number()) as PublicPropCountV7,
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface PublicPropCountV7  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const publicProps =  {
    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    v7: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v7.Bounded, v7.AccountId32]))) as PublicPropsV7,
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface PublicPropsV7  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v7.Bounded, v7.AccountId32][]
    get(block: Block): Promise<([number, v7.Bounded, v7.AccountId32][] | undefined)>
}

export const depositOf =  {
    /**
     *  Those who have locked a deposit.
     * 
     *  TWOX-NOTE: Safe, as increasing integer keys are safe.
     */
    v7: new StorageType('Democracy.DepositOf', 'Optional', [sts.number()], sts.tuple(() => [sts.array(() => v7.AccountId32), sts.bigint()])) as DepositOfV7,
}

/**
 *  Those who have locked a deposit.
 * 
 *  TWOX-NOTE: Safe, as increasing integer keys are safe.
 */
export interface DepositOfV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<([v7.AccountId32[], bigint] | undefined)>
    getMany(block: Block, keys: number[]): Promise<([v7.AccountId32[], bigint] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ([v7.AccountId32[], bigint] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ([v7.AccountId32[], bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ([v7.AccountId32[], bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ([v7.AccountId32[], bigint] | undefined)][]>
}

export const referendumCount =  {
    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    v7: new StorageType('Democracy.ReferendumCount', 'Default', [], sts.number()) as ReferendumCountV7,
}

/**
 *  The next free referendum index, aka the number of referenda started so far.
 */
export interface ReferendumCountV7  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const lowestUnbaked =  {
    /**
     *  The lowest referendum index representing an unbaked referendum. Equal to
     *  `ReferendumCount` if there isn't a unbaked referendum.
     */
    v7: new StorageType('Democracy.LowestUnbaked', 'Default', [], sts.number()) as LowestUnbakedV7,
}

/**
 *  The lowest referendum index representing an unbaked referendum. Equal to
 *  `ReferendumCount` if there isn't a unbaked referendum.
 */
export interface LowestUnbakedV7  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const referendumInfoOf =  {
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v7: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], v7.ReferendumInfo) as ReferendumInfoOfV7,
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v7.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v7.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v7.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v7.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v7.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v7.ReferendumInfo | undefined)][]>
}

export const votingOf =  {
    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    v7: new StorageType('Democracy.VotingOf', 'Default', [v7.AccountId32], v7.Voting) as VotingOfV7,
}

/**
 *  All votes for a particular voter. We store the balance for the number of votes that we
 *  have recorded. The second item is the total amount of delegations, that will be added.
 * 
 *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
 */
export interface VotingOfV7  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v7.Voting
    get(block: Block, key: v7.AccountId32): Promise<(v7.Voting | undefined)>
    getMany(block: Block, keys: v7.AccountId32[]): Promise<(v7.Voting | undefined)[]>
    getKeys(block: Block): Promise<v7.AccountId32[]>
    getKeys(block: Block, key: v7.AccountId32): Promise<v7.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v7.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v7.AccountId32): AsyncIterable<v7.AccountId32[]>
    getPairs(block: Block): Promise<[k: v7.AccountId32, v: (v7.Voting | undefined)][]>
    getPairs(block: Block, key: v7.AccountId32): Promise<[k: v7.AccountId32, v: (v7.Voting | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v7.AccountId32, v: (v7.Voting | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v7.AccountId32): AsyncIterable<[k: v7.AccountId32, v: (v7.Voting | undefined)][]>
}

export const lastTabledWasExternal =  {
    /**
     *  True if the last referendum tabled was submitted externally. False if it was a public
     *  proposal.
     */
    v7: new StorageType('Democracy.LastTabledWasExternal', 'Default', [], sts.boolean()) as LastTabledWasExternalV7,
}

/**
 *  True if the last referendum tabled was submitted externally. False if it was a public
 *  proposal.
 */
export interface LastTabledWasExternalV7  {
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
    v7: new StorageType('Democracy.NextExternal', 'Optional', [], sts.tuple(() => [v7.Bounded, v7.VoteThreshold])) as NextExternalV7,
}

/**
 *  The referendum to be tabled whenever it would be valid to table an external proposal.
 *  This happens when a referendum needs to be tabled and one of two conditions are met:
 *  - `LastTabledWasExternal` is `false`; or
 *  - `PublicProps` is empty.
 */
export interface NextExternalV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<([v7.Bounded, v7.VoteThreshold] | undefined)>
}

export const blacklist =  {
    /**
     *  A record of who vetoed what. Maps proposal hash to a possible existent block number
     *  (until when it may not be resubmitted) and who vetoed it.
     */
    v7: new StorageType('Democracy.Blacklist', 'Optional', [v7.H256], sts.tuple(() => [sts.number(), sts.array(() => v7.AccountId32)])) as BlacklistV7,
}

/**
 *  A record of who vetoed what. Maps proposal hash to a possible existent block number
 *  (until when it may not be resubmitted) and who vetoed it.
 */
export interface BlacklistV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v7.H256): Promise<([number, v7.AccountId32[]] | undefined)>
    getMany(block: Block, keys: v7.H256[]): Promise<([number, v7.AccountId32[]] | undefined)[]>
    getKeys(block: Block): Promise<v7.H256[]>
    getKeys(block: Block, key: v7.H256): Promise<v7.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v7.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v7.H256): AsyncIterable<v7.H256[]>
    getPairs(block: Block): Promise<[k: v7.H256, v: ([number, v7.AccountId32[]] | undefined)][]>
    getPairs(block: Block, key: v7.H256): Promise<[k: v7.H256, v: ([number, v7.AccountId32[]] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v7.H256, v: ([number, v7.AccountId32[]] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v7.H256): AsyncIterable<[k: v7.H256, v: ([number, v7.AccountId32[]] | undefined)][]>
}

export const cancellations =  {
    /**
     *  Record of all proposals that have been subject to emergency cancellation.
     */
    v7: new StorageType('Democracy.Cancellations', 'Default', [v7.H256], sts.boolean()) as CancellationsV7,
}

/**
 *  Record of all proposals that have been subject to emergency cancellation.
 */
export interface CancellationsV7  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block, key: v7.H256): Promise<(boolean | undefined)>
    getMany(block: Block, keys: v7.H256[]): Promise<(boolean | undefined)[]>
    getKeys(block: Block): Promise<v7.H256[]>
    getKeys(block: Block, key: v7.H256): Promise<v7.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v7.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v7.H256): AsyncIterable<v7.H256[]>
    getPairs(block: Block): Promise<[k: v7.H256, v: (boolean | undefined)][]>
    getPairs(block: Block, key: v7.H256): Promise<[k: v7.H256, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v7.H256, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v7.H256): AsyncIterable<[k: v7.H256, v: (boolean | undefined)][]>
}
