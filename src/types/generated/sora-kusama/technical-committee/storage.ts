import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v7 from '../v7'
import * as v9 from '../v9'

export const proposals =  {
    /**
     *  The hashes of the active proposals.
     */
    v7: new StorageType('TechnicalCommittee.Proposals', 'Default', [], sts.array(() => v7.H256)) as ProposalsV7,
}

/**
 *  The hashes of the active proposals.
 */
export interface ProposalsV7  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v7.H256[]
    get(block: Block): Promise<(v7.H256[] | undefined)>
}

export const proposalOf =  {
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v7: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v7.H256], v7.Call) as ProposalOfV7,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v9: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v9.H256], v9.Call) as ProposalOfV9,
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v7.H256): Promise<(v7.Call | undefined)>
    getMany(block: Block, keys: v7.H256[]): Promise<(v7.Call | undefined)[]>
    getKeys(block: Block): Promise<v7.H256[]>
    getKeys(block: Block, key: v7.H256): Promise<v7.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v7.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v7.H256): AsyncIterable<v7.H256[]>
    getPairs(block: Block): Promise<[k: v7.H256, v: (v7.Call | undefined)][]>
    getPairs(block: Block, key: v7.H256): Promise<[k: v7.H256, v: (v7.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v7.H256, v: (v7.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v7.H256): AsyncIterable<[k: v7.H256, v: (v7.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV9  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9.H256): Promise<(v9.Call | undefined)>
    getMany(block: Block, keys: v9.H256[]): Promise<(v9.Call | undefined)[]>
    getKeys(block: Block): Promise<v9.H256[]>
    getKeys(block: Block, key: v9.H256): Promise<v9.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v9.H256): AsyncIterable<v9.H256[]>
    getPairs(block: Block): Promise<[k: v9.H256, v: (v9.Call | undefined)][]>
    getPairs(block: Block, key: v9.H256): Promise<[k: v9.H256, v: (v9.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9.H256, v: (v9.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9.H256): AsyncIterable<[k: v9.H256, v: (v9.Call | undefined)][]>
}

export const voting =  {
    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    v7: new StorageType('TechnicalCommittee.Voting', 'Optional', [v7.H256], v7.Votes) as VotingV7,
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface VotingV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v7.H256): Promise<(v7.Votes | undefined)>
    getMany(block: Block, keys: v7.H256[]): Promise<(v7.Votes | undefined)[]>
    getKeys(block: Block): Promise<v7.H256[]>
    getKeys(block: Block, key: v7.H256): Promise<v7.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v7.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v7.H256): AsyncIterable<v7.H256[]>
    getPairs(block: Block): Promise<[k: v7.H256, v: (v7.Votes | undefined)][]>
    getPairs(block: Block, key: v7.H256): Promise<[k: v7.H256, v: (v7.Votes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v7.H256, v: (v7.Votes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v7.H256): AsyncIterable<[k: v7.H256, v: (v7.Votes | undefined)][]>
}

export const proposalCount =  {
    /**
     *  Proposals so far.
     */
    v7: new StorageType('TechnicalCommittee.ProposalCount', 'Default', [], sts.number()) as ProposalCountV7,
}

/**
 *  Proposals so far.
 */
export interface ProposalCountV7  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const members =  {
    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    v7: new StorageType('TechnicalCommittee.Members', 'Default', [], sts.array(() => v7.AccountId32)) as MembersV7,
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface MembersV7  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v7.AccountId32[]
    get(block: Block): Promise<(v7.AccountId32[] | undefined)>
}

export const prime =  {
    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    v7: new StorageType('TechnicalCommittee.Prime', 'Optional', [], v7.AccountId32) as PrimeV7,
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface PrimeV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v7.AccountId32 | undefined)>
}
