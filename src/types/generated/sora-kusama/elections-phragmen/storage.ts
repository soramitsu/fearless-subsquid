import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9 from '../v9'

export const members =  {
    /**
     *  The current elected members.
     * 
     *  Invariant: Always sorted based on account id.
     */
    v9: new StorageType('ElectionsPhragmen.Members', 'Default', [], sts.array(() => v9.SeatHolder)) as MembersV9,
}

/**
 *  The current elected members.
 * 
 *  Invariant: Always sorted based on account id.
 */
export interface MembersV9  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9.SeatHolder[]
    get(block: Block): Promise<(v9.SeatHolder[] | undefined)>
}

export const runnersUp =  {
    /**
     *  The current reserved runners-up.
     * 
     *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
     *  last (i.e. _best_) runner-up will be replaced.
     */
    v9: new StorageType('ElectionsPhragmen.RunnersUp', 'Default', [], sts.array(() => v9.SeatHolder)) as RunnersUpV9,
}

/**
 *  The current reserved runners-up.
 * 
 *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
 *  last (i.e. _best_) runner-up will be replaced.
 */
export interface RunnersUpV9  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9.SeatHolder[]
    get(block: Block): Promise<(v9.SeatHolder[] | undefined)>
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
    v9: new StorageType('ElectionsPhragmen.Candidates', 'Default', [], sts.array(() => sts.tuple(() => [v9.AccountId32, sts.bigint()]))) as CandidatesV9,
}

/**
 *  The present candidate list. A current member or runner-up can never enter this vector
 *  and is always implicitly assumed to be a candidate.
 * 
 *  Second element is the deposit.
 * 
 *  Invariant: Always sorted based on account id.
 */
export interface CandidatesV9  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v9.AccountId32, bigint][]
    get(block: Block): Promise<([v9.AccountId32, bigint][] | undefined)>
}

export const electionRounds =  {
    /**
     *  The total number of vote rounds that have happened, excluding the upcoming one.
     */
    v9: new StorageType('ElectionsPhragmen.ElectionRounds', 'Default', [], sts.number()) as ElectionRoundsV9,
}

/**
 *  The total number of vote rounds that have happened, excluding the upcoming one.
 */
export interface ElectionRoundsV9  {
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
    v9: new StorageType('ElectionsPhragmen.Voting', 'Default', [v9.AccountId32], v9.Voter) as VotingV9,
}

/**
 *  Votes and locked stake of a particular voter.
 * 
 *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
 */
export interface VotingV9  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9.Voter
    get(block: Block, key: v9.AccountId32): Promise<(v9.Voter | undefined)>
    getMany(block: Block, keys: v9.AccountId32[]): Promise<(v9.Voter | undefined)[]>
    getKeys(block: Block): Promise<v9.AccountId32[]>
    getKeys(block: Block, key: v9.AccountId32): Promise<v9.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9.AccountId32): AsyncIterable<v9.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9.AccountId32, v: (v9.Voter | undefined)][]>
    getPairs(block: Block, key: v9.AccountId32): Promise<[k: v9.AccountId32, v: (v9.Voter | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9.AccountId32, v: (v9.Voter | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9.AccountId32): AsyncIterable<[k: v9.AccountId32, v: (v9.Voter | undefined)][]>
}
