import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v28 from '../v28'

export const members =  {
    /**
     *  The current elected membership. Sorted based on account id.
     */
    v0: new StorageType('PhragmenElection.Members', 'Default', [], sts.array(() => sts.tuple(() => [v0.AccountId, v0.BalanceOf]))) as MembersV0,
    /**
     *  The current elected members.
     * 
     *  Invariant: Always sorted based on account id.
     */
    v28: new StorageType('PhragmenElection.Members', 'Default', [], sts.array(() => v28.SeatHolder)) as MembersV28,
}

/**
 *  The current elected membership. Sorted based on account id.
 */
export interface MembersV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v0.AccountId, v0.BalanceOf][]
    get(block: Block): Promise<([v0.AccountId, v0.BalanceOf][] | undefined)>
}

/**
 *  The current elected members.
 * 
 *  Invariant: Always sorted based on account id.
 */
export interface MembersV28  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v28.SeatHolder[]
    get(block: Block): Promise<(v28.SeatHolder[] | undefined)>
}

export const runnersUp =  {
    /**
     *  The current runners_up. Sorted based on low to high merit (worse to best runner).
     */
    v0: new StorageType('PhragmenElection.RunnersUp', 'Default', [], sts.array(() => sts.tuple(() => [v0.AccountId, v0.BalanceOf]))) as RunnersUpV0,
    /**
     *  The current reserved runners-up.
     * 
     *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
     *  last (i.e. _best_) runner-up will be replaced.
     */
    v28: new StorageType('PhragmenElection.RunnersUp', 'Default', [], sts.array(() => v28.SeatHolder)) as RunnersUpV28,
}

/**
 *  The current runners_up. Sorted based on low to high merit (worse to best runner).
 */
export interface RunnersUpV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v0.AccountId, v0.BalanceOf][]
    get(block: Block): Promise<([v0.AccountId, v0.BalanceOf][] | undefined)>
}

/**
 *  The current reserved runners-up.
 * 
 *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
 *  last (i.e. _best_) runner-up will be replaced.
 */
export interface RunnersUpV28  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v28.SeatHolder[]
    get(block: Block): Promise<(v28.SeatHolder[] | undefined)>
}

export const electionRounds =  {
    /**
     *  The total number of vote rounds that have happened, excluding the upcoming one.
     */
    v0: new StorageType('PhragmenElection.ElectionRounds', 'Default', [], sts.number()) as ElectionRoundsV0,
}

/**
 *  The total number of vote rounds that have happened, excluding the upcoming one.
 */
export interface ElectionRoundsV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const voting =  {
    /**
     *  Votes and locked stake of a particular voter.
     * 
     *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash
     */
    v0: new StorageType('PhragmenElection.Voting', 'Default', [v0.AccountId], sts.tuple(() => [v0.BalanceOf, sts.array(() => v0.AccountId)])) as VotingV0,
    /**
     *  Votes and locked stake of a particular voter.
     * 
     *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
     */
    v28: new StorageType('PhragmenElection.Voting', 'Default', [v28.AccountId], v28.Voter) as VotingV28,
}

/**
 *  Votes and locked stake of a particular voter.
 * 
 *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash
 */
export interface VotingV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v0.BalanceOf, v0.AccountId[]]
    get(block: Block, key: v0.AccountId): Promise<([v0.BalanceOf, v0.AccountId[]] | undefined)>
    getMany(block: Block, keys: v0.AccountId[]): Promise<([v0.BalanceOf, v0.AccountId[]] | undefined)[]>
    getKeys(block: Block): Promise<v0.AccountId[]>
    getKeys(block: Block, key: v0.AccountId): Promise<v0.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.AccountId): AsyncIterable<v0.AccountId[]>
    getPairs(block: Block): Promise<[k: v0.AccountId, v: ([v0.BalanceOf, v0.AccountId[]] | undefined)][]>
    getPairs(block: Block, key: v0.AccountId): Promise<[k: v0.AccountId, v: ([v0.BalanceOf, v0.AccountId[]] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.AccountId, v: ([v0.BalanceOf, v0.AccountId[]] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.AccountId): AsyncIterable<[k: v0.AccountId, v: ([v0.BalanceOf, v0.AccountId[]] | undefined)][]>
}

/**
 *  Votes and locked stake of a particular voter.
 * 
 *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
 */
export interface VotingV28  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v28.Voter
    get(block: Block, key: v28.AccountId): Promise<(v28.Voter | undefined)>
    getMany(block: Block, keys: v28.AccountId[]): Promise<(v28.Voter | undefined)[]>
    getKeys(block: Block): Promise<v28.AccountId[]>
    getKeys(block: Block, key: v28.AccountId): Promise<v28.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v28.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v28.AccountId): AsyncIterable<v28.AccountId[]>
    getPairs(block: Block): Promise<[k: v28.AccountId, v: (v28.Voter | undefined)][]>
    getPairs(block: Block, key: v28.AccountId): Promise<[k: v28.AccountId, v: (v28.Voter | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v28.AccountId, v: (v28.Voter | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v28.AccountId): AsyncIterable<[k: v28.AccountId, v: (v28.Voter | undefined)][]>
}

export const candidates =  {
    /**
     *  The present candidate list. Sorted based on account-id. A current member or runner-up
     *  can never enter this vector and is always implicitly assumed to be a candidate.
     */
    v0: new StorageType('PhragmenElection.Candidates', 'Default', [], sts.array(() => v0.AccountId)) as CandidatesV0,
    /**
     *  The present candidate list. A current member or runner-up can never enter this vector
     *  and is always implicitly assumed to be a candidate.
     * 
     *  Second element is the deposit.
     * 
     *  Invariant: Always sorted based on account id.
     */
    v28: new StorageType('PhragmenElection.Candidates', 'Default', [], sts.array(() => sts.tuple(() => [v28.AccountId, v28.BalanceOf]))) as CandidatesV28,
}

/**
 *  The present candidate list. Sorted based on account-id. A current member or runner-up
 *  can never enter this vector and is always implicitly assumed to be a candidate.
 */
export interface CandidatesV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.AccountId[]
    get(block: Block): Promise<(v0.AccountId[] | undefined)>
}

/**
 *  The present candidate list. A current member or runner-up can never enter this vector
 *  and is always implicitly assumed to be a candidate.
 * 
 *  Second element is the deposit.
 * 
 *  Invariant: Always sorted based on account id.
 */
export interface CandidatesV28  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v28.AccountId, v28.BalanceOf][]
    get(block: Block): Promise<([v28.AccountId, v28.BalanceOf][] | undefined)>
}
