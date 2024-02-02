import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'

export const invulnerables =  {
    /**
     *  The invulnerable, fixed collators.
     */
    v1: new StorageType('CollatorSelection.Invulnerables', 'Default', [], sts.array(() => v1.AccountId32)) as InvulnerablesV1,
}

/**
 *  The invulnerable, fixed collators.
 */
export interface InvulnerablesV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.AccountId32[]
    get(block: Block): Promise<(v1.AccountId32[] | undefined)>
}

export const candidates =  {
    /**
     *  The (community, limited) collation candidates.
     */
    v1: new StorageType('CollatorSelection.Candidates', 'Default', [], sts.array(() => v1.CandidateInfo)) as CandidatesV1,
}

/**
 *  The (community, limited) collation candidates.
 */
export interface CandidatesV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.CandidateInfo[]
    get(block: Block): Promise<(v1.CandidateInfo[] | undefined)>
}

export const lastAuthoredBlock =  {
    /**
     *  Last block authored by collator.
     */
    v1: new StorageType('CollatorSelection.LastAuthoredBlock', 'Default', [v1.AccountId32], sts.number()) as LastAuthoredBlockV1,
}

/**
 *  Last block authored by collator.
 */
export interface LastAuthoredBlockV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key: v1.AccountId32): Promise<(number | undefined)>
    getMany(block: Block, keys: v1.AccountId32[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<v1.AccountId32[]>
    getKeys(block: Block, key: v1.AccountId32): Promise<v1.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.AccountId32): AsyncIterable<v1.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1.AccountId32, v: (number | undefined)][]>
    getPairs(block: Block, key: v1.AccountId32): Promise<[k: v1.AccountId32, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.AccountId32, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.AccountId32): AsyncIterable<[k: v1.AccountId32, v: (number | undefined)][]>
}

export const desiredCandidates =  {
    /**
     *  Desired number of candidates.
     * 
     *  This should ideally always be less than [`Config::MaxCandidates`] for weights to be correct.
     */
    v1: new StorageType('CollatorSelection.DesiredCandidates', 'Default', [], sts.number()) as DesiredCandidatesV1,
}

/**
 *  Desired number of candidates.
 * 
 *  This should ideally always be less than [`Config::MaxCandidates`] for weights to be correct.
 */
export interface DesiredCandidatesV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const candidacyBond =  {
    /**
     *  Fixed deposit bond for each candidate.
     */
    v1: new StorageType('CollatorSelection.CandidacyBond', 'Default', [], sts.bigint()) as CandidacyBondV1,
}

/**
 *  Fixed deposit bond for each candidate.
 */
export interface CandidacyBondV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}
