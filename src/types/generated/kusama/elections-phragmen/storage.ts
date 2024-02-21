import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v1058 from '../v1058'
import * as v2028 from '../v2028'

export const members =  {
    /**
     *  The current elected membership. Sorted based on account id.
     */
    v1020: new StorageType('PhragmenElection.Members', 'Default', [], sts.array(() => sts.tuple(() => [v1020.AccountId, v1020.BalanceOf]))) as MembersV1020,
    /**
     *  The current elected members.
     * 
     *  Invariant: Always sorted based on account id.
     */
    v2028: new StorageType('PhragmenElection.Members', 'Default', [], sts.array(() => v2028.SeatHolder)) as MembersV2028,
}

/**
 *  The current elected membership. Sorted based on account id.
 */
export interface MembersV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1020.AccountId, v1020.BalanceOf][]
    get(block: Block): Promise<([v1020.AccountId, v1020.BalanceOf][] | undefined)>
}

/**
 *  The current elected members.
 * 
 *  Invariant: Always sorted based on account id.
 */
export interface MembersV2028  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v2028.SeatHolder[]
    get(block: Block): Promise<(v2028.SeatHolder[] | undefined)>
}

export const runnersUp =  {
    /**
     *  The current runners_up. Sorted based on low to high merit (worse to best runner).
     */
    v1020: new StorageType('PhragmenElection.RunnersUp', 'Default', [], sts.array(() => sts.tuple(() => [v1020.AccountId, v1020.BalanceOf]))) as RunnersUpV1020,
    /**
     *  The current reserved runners-up.
     * 
     *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
     *  last (i.e. _best_) runner-up will be replaced.
     */
    v2028: new StorageType('PhragmenElection.RunnersUp', 'Default', [], sts.array(() => v2028.SeatHolder)) as RunnersUpV2028,
}

/**
 *  The current runners_up. Sorted based on low to high merit (worse to best runner).
 */
export interface RunnersUpV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1020.AccountId, v1020.BalanceOf][]
    get(block: Block): Promise<([v1020.AccountId, v1020.BalanceOf][] | undefined)>
}

/**
 *  The current reserved runners-up.
 * 
 *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
 *  last (i.e. _best_) runner-up will be replaced.
 */
export interface RunnersUpV2028  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v2028.SeatHolder[]
    get(block: Block): Promise<(v2028.SeatHolder[] | undefined)>
}

export const electionRounds =  {
    /**
     *  The total number of vote rounds that have happened, excluding the upcoming one.
     */
    v1020: new StorageType('PhragmenElection.ElectionRounds', 'Default', [], sts.number()) as ElectionRoundsV1020,
}

/**
 *  The total number of vote rounds that have happened, excluding the upcoming one.
 */
export interface ElectionRoundsV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const votesOf =  {
    /**
     *  Votes of a particular voter, with the round index of the votes.
     */
    v1020: new StorageType('PhragmenElection.VotesOf', 'Default', [v1020.AccountId], sts.array(() => v1020.AccountId)) as VotesOfV1020,
}

/**
 *  Votes of a particular voter, with the round index of the votes.
 */
export interface VotesOfV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.AccountId[]
    get(block: Block, key: v1020.AccountId): Promise<(v1020.AccountId[] | undefined)>
    getMany(block: Block, keys: v1020.AccountId[]): Promise<(v1020.AccountId[] | undefined)[]>
}

export const stakeOf =  {
    /**
     *  Locked stake of a voter.
     */
    v1020: new StorageType('PhragmenElection.StakeOf', 'Default', [v1020.AccountId], v1020.BalanceOf) as StakeOfV1020,
}

/**
 *  Locked stake of a voter.
 */
export interface StakeOfV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.BalanceOf
    get(block: Block, key: v1020.AccountId): Promise<(v1020.BalanceOf | undefined)>
    getMany(block: Block, keys: v1020.AccountId[]): Promise<(v1020.BalanceOf | undefined)[]>
}

export const candidates =  {
    /**
     *  The present candidate list. Sorted based on account id. A current member can never enter
     *  this vector and is always implicitly assumed to be a candidate.
     */
    v1020: new StorageType('PhragmenElection.Candidates', 'Default', [], sts.array(() => v1020.AccountId)) as CandidatesV1020,
    /**
     *  The present candidate list. A current member or runner-up can never enter this vector
     *  and is always implicitly assumed to be a candidate.
     * 
     *  Second element is the deposit.
     * 
     *  Invariant: Always sorted based on account id.
     */
    v2028: new StorageType('PhragmenElection.Candidates', 'Default', [], sts.array(() => sts.tuple(() => [v2028.AccountId, v2028.BalanceOf]))) as CandidatesV2028,
}

/**
 *  The present candidate list. Sorted based on account id. A current member can never enter
 *  this vector and is always implicitly assumed to be a candidate.
 */
export interface CandidatesV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.AccountId[]
    get(block: Block): Promise<(v1020.AccountId[] | undefined)>
}

/**
 *  The present candidate list. A current member or runner-up can never enter this vector
 *  and is always implicitly assumed to be a candidate.
 * 
 *  Second element is the deposit.
 * 
 *  Invariant: Always sorted based on account id.
 */
export interface CandidatesV2028  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v2028.AccountId, v2028.BalanceOf][]
    get(block: Block): Promise<([v2028.AccountId, v2028.BalanceOf][] | undefined)>
}

export const voting =  {
    /**
     *  Votes and locked stake of a particular voter.
     */
    v1058: new StorageType('PhragmenElection.Voting', 'Default', [v1058.AccountId], sts.tuple(() => [v1058.BalanceOf, sts.array(() => v1058.AccountId)])) as VotingV1058,
    /**
     *  Votes and locked stake of a particular voter.
     * 
     *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
     */
    v2028: new StorageType('PhragmenElection.Voting', 'Default', [v2028.AccountId], v2028.Voter) as VotingV2028,
}

/**
 *  Votes and locked stake of a particular voter.
 */
export interface VotingV1058  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1058.BalanceOf, v1058.AccountId[]]
    get(block: Block, key: v1058.AccountId): Promise<([v1058.BalanceOf, v1058.AccountId[]] | undefined)>
    getMany(block: Block, keys: v1058.AccountId[]): Promise<([v1058.BalanceOf, v1058.AccountId[]] | undefined)[]>
    getKeys(block: Block): Promise<v1058.AccountId[]>
    getKeys(block: Block, key: v1058.AccountId): Promise<v1058.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1058.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1058.AccountId): AsyncIterable<v1058.AccountId[]>
    getPairs(block: Block): Promise<[k: v1058.AccountId, v: ([v1058.BalanceOf, v1058.AccountId[]] | undefined)][]>
    getPairs(block: Block, key: v1058.AccountId): Promise<[k: v1058.AccountId, v: ([v1058.BalanceOf, v1058.AccountId[]] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1058.AccountId, v: ([v1058.BalanceOf, v1058.AccountId[]] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1058.AccountId): AsyncIterable<[k: v1058.AccountId, v: ([v1058.BalanceOf, v1058.AccountId[]] | undefined)][]>
}

/**
 *  Votes and locked stake of a particular voter.
 * 
 *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
 */
export interface VotingV2028  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v2028.Voter
    get(block: Block, key: v2028.AccountId): Promise<(v2028.Voter | undefined)>
    getMany(block: Block, keys: v2028.AccountId[]): Promise<(v2028.Voter | undefined)[]>
    getKeys(block: Block): Promise<v2028.AccountId[]>
    getKeys(block: Block, key: v2028.AccountId): Promise<v2028.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2028.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v2028.AccountId): AsyncIterable<v2028.AccountId[]>
    getPairs(block: Block): Promise<[k: v2028.AccountId, v: (v2028.Voter | undefined)][]>
    getPairs(block: Block, key: v2028.AccountId): Promise<[k: v2028.AccountId, v: (v2028.Voter | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2028.AccountId, v: (v2028.Voter | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2028.AccountId): AsyncIterable<[k: v2028.AccountId, v: (v2028.Voter | undefined)][]>
}
