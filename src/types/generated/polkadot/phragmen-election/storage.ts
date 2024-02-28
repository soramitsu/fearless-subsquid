import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9050 from '../v9050'

export const members =  {
    /**
     *  The current elected members.
     * 
     *  Invariant: Always sorted based on account id.
     */
    v9050: new StorageType('PhragmenElection.Members', 'Default', [], sts.array(() => v9050.SeatHolder)) as MembersV9050,
}

/**
 *  The current elected members.
 * 
 *  Invariant: Always sorted based on account id.
 */
export interface MembersV9050  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9050.SeatHolder[]
    get(block: Block): Promise<(v9050.SeatHolder[] | undefined)>
}

export const runnersUp =  {
    /**
     *  The current reserved runners-up.
     * 
     *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
     *  last (i.e. _best_) runner-up will be replaced.
     */
    v9050: new StorageType('PhragmenElection.RunnersUp', 'Default', [], sts.array(() => v9050.SeatHolder)) as RunnersUpV9050,
}

/**
 *  The current reserved runners-up.
 * 
 *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
 *  last (i.e. _best_) runner-up will be replaced.
 */
export interface RunnersUpV9050  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9050.SeatHolder[]
    get(block: Block): Promise<(v9050.SeatHolder[] | undefined)>
}

export const candidates =  {
    /**
     *  The present candidate list. A current member or runner-up can never enter this vector
     *  and is always implicitly assumed to be a candidate.
     * 
     *  Second element is the deposit.
     * 
     *  Invariant: Always sorted based on account id.
     */
    v9050: new StorageType('PhragmenElection.Candidates', 'Default', [], sts.array(() => sts.tuple(() => [v9050.AccountId, v9050.BalanceOf]))) as CandidatesV9050,
}

/**
 *  The present candidate list. A current member or runner-up can never enter this vector
 *  and is always implicitly assumed to be a candidate.
 * 
 *  Second element is the deposit.
 * 
 *  Invariant: Always sorted based on account id.
 */
export interface CandidatesV9050  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v9050.AccountId, v9050.BalanceOf][]
    get(block: Block): Promise<([v9050.AccountId, v9050.BalanceOf][] | undefined)>
}

export const electionRounds =  {
    /**
     *  The total number of vote rounds that have happened, excluding the upcoming one.
     */
    v9050: new StorageType('PhragmenElection.ElectionRounds', 'Default', [], sts.number()) as ElectionRoundsV9050,
}

/**
 *  The total number of vote rounds that have happened, excluding the upcoming one.
 */
export interface ElectionRoundsV9050  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const voting =  {
    /**
     *  Votes and locked stake of a particular voter.
     * 
     *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
     */
    v9050: new StorageType('PhragmenElection.Voting', 'Default', [v9050.AccountId], v9050.Voter) as VotingV9050,
}

/**
 *  Votes and locked stake of a particular voter.
 * 
 *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
 */
export interface VotingV9050  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9050.Voter
    get(block: Block, key: v9050.AccountId): Promise<(v9050.Voter | undefined)>
    getMany(block: Block, keys: v9050.AccountId[]): Promise<(v9050.Voter | undefined)[]>
    getKeys(block: Block): Promise<v9050.AccountId[]>
    getKeys(block: Block, key: v9050.AccountId): Promise<v9050.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9050.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9050.AccountId): AsyncIterable<v9050.AccountId[]>
    getPairs(block: Block): Promise<[k: v9050.AccountId, v: (v9050.Voter | undefined)][]>
    getPairs(block: Block, key: v9050.AccountId): Promise<[k: v9050.AccountId, v: (v9050.Voter | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9050.AccountId, v: (v9050.Voter | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9050.AccountId): AsyncIterable<[k: v9050.AccountId, v: (v9050.Voter | undefined)][]>
}
