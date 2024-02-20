import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v10 from '../v10'

export const members =  {
    /**
     *  The current elected members.
     * 
     *  Invariant: Always sorted based on account id.
     */
    v10: new StorageType('ElectionsPhragmen.Members', 'Default', [], sts.array(() => v10.SeatHolder)) as MembersV10,
}

/**
 *  The current elected members.
 * 
 *  Invariant: Always sorted based on account id.
 */
export interface MembersV10  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v10.SeatHolder[]
    get(block: Block): Promise<(v10.SeatHolder[] | undefined)>
}

export const runnersUp =  {
    /**
     *  The current reserved runners-up.
     * 
     *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
     *  last (i.e. _best_) runner-up will be replaced.
     */
    v10: new StorageType('ElectionsPhragmen.RunnersUp', 'Default', [], sts.array(() => v10.SeatHolder)) as RunnersUpV10,
}

/**
 *  The current reserved runners-up.
 * 
 *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
 *  last (i.e. _best_) runner-up will be replaced.
 */
export interface RunnersUpV10  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v10.SeatHolder[]
    get(block: Block): Promise<(v10.SeatHolder[] | undefined)>
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
    v10: new StorageType('ElectionsPhragmen.Candidates', 'Default', [], sts.array(() => sts.tuple(() => [v10.AccountId32, sts.bigint()]))) as CandidatesV10,
}

/**
 *  The present candidate list. A current member or runner-up can never enter this vector
 *  and is always implicitly assumed to be a candidate.
 * 
 *  Second element is the deposit.
 * 
 *  Invariant: Always sorted based on account id.
 */
export interface CandidatesV10  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v10.AccountId32, bigint][]
    get(block: Block): Promise<([v10.AccountId32, bigint][] | undefined)>
}

export const electionRounds =  {
    /**
     *  The total number of vote rounds that have happened, excluding the upcoming one.
     */
    v10: new StorageType('ElectionsPhragmen.ElectionRounds', 'Default', [], sts.number()) as ElectionRoundsV10,
}

/**
 *  The total number of vote rounds that have happened, excluding the upcoming one.
 */
export interface ElectionRoundsV10  {
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
    v10: new StorageType('ElectionsPhragmen.Voting', 'Default', [v10.AccountId32], v10.Voter) as VotingV10,
}

/**
 *  Votes and locked stake of a particular voter.
 * 
 *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
 */
export interface VotingV10  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v10.Voter
    get(block: Block, key: v10.AccountId32): Promise<(v10.Voter | undefined)>
    getMany(block: Block, keys: v10.AccountId32[]): Promise<(v10.Voter | undefined)[]>
    getKeys(block: Block): Promise<v10.AccountId32[]>
    getKeys(block: Block, key: v10.AccountId32): Promise<v10.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v10.AccountId32): AsyncIterable<v10.AccountId32[]>
    getPairs(block: Block): Promise<[k: v10.AccountId32, v: (v10.Voter | undefined)][]>
    getPairs(block: Block, key: v10.AccountId32): Promise<[k: v10.AccountId32, v: (v10.Voter | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10.AccountId32, v: (v10.Voter | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10.AccountId32): AsyncIterable<[k: v10.AccountId32, v: (v10.Voter | undefined)][]>
}
