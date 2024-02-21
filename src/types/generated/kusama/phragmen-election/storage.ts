import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9010 from '../v9010'

export const members =  {
    /**
     *  The current elected members.
     * 
     *  Invariant: Always sorted based on account id.
     */
    v9010: new StorageType('PhragmenElection.Members', 'Default', [], sts.array(() => v9010.SeatHolder)) as MembersV9010,
}

/**
 *  The current elected members.
 * 
 *  Invariant: Always sorted based on account id.
 */
export interface MembersV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9010.SeatHolder[]
    get(block: Block): Promise<(v9010.SeatHolder[] | undefined)>
}

export const runnersUp =  {
    /**
     *  The current reserved runners-up.
     * 
     *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
     *  last (i.e. _best_) runner-up will be replaced.
     */
    v9010: new StorageType('PhragmenElection.RunnersUp', 'Default', [], sts.array(() => v9010.SeatHolder)) as RunnersUpV9010,
}

/**
 *  The current reserved runners-up.
 * 
 *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
 *  last (i.e. _best_) runner-up will be replaced.
 */
export interface RunnersUpV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9010.SeatHolder[]
    get(block: Block): Promise<(v9010.SeatHolder[] | undefined)>
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
    v9010: new StorageType('PhragmenElection.Candidates', 'Default', [], sts.array(() => sts.tuple(() => [v9010.AccountId, v9010.BalanceOf]))) as CandidatesV9010,
}

/**
 *  The present candidate list. A current member or runner-up can never enter this vector
 *  and is always implicitly assumed to be a candidate.
 * 
 *  Second element is the deposit.
 * 
 *  Invariant: Always sorted based on account id.
 */
export interface CandidatesV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v9010.AccountId, v9010.BalanceOf][]
    get(block: Block): Promise<([v9010.AccountId, v9010.BalanceOf][] | undefined)>
}

export const electionRounds =  {
    /**
     *  The total number of vote rounds that have happened, excluding the upcoming one.
     */
    v9010: new StorageType('PhragmenElection.ElectionRounds', 'Default', [], sts.number()) as ElectionRoundsV9010,
}

/**
 *  The total number of vote rounds that have happened, excluding the upcoming one.
 */
export interface ElectionRoundsV9010  {
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
    v9010: new StorageType('PhragmenElection.Voting', 'Default', [v9010.AccountId], v9010.Voter) as VotingV9010,
}

/**
 *  Votes and locked stake of a particular voter.
 * 
 *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
 */
export interface VotingV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9010.Voter
    get(block: Block, key: v9010.AccountId): Promise<(v9010.Voter | undefined)>
    getMany(block: Block, keys: v9010.AccountId[]): Promise<(v9010.Voter | undefined)[]>
    getKeys(block: Block): Promise<v9010.AccountId[]>
    getKeys(block: Block, key: v9010.AccountId): Promise<v9010.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9010.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9010.AccountId): AsyncIterable<v9010.AccountId[]>
    getPairs(block: Block): Promise<[k: v9010.AccountId, v: (v9010.Voter | undefined)][]>
    getPairs(block: Block, key: v9010.AccountId): Promise<[k: v9010.AccountId, v: (v9010.Voter | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9010.AccountId, v: (v9010.Voter | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9010.AccountId): AsyncIterable<[k: v9010.AccountId, v: (v9010.Voter | undefined)][]>
}
