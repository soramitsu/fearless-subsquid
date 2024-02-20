import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v10 from '../v10'

export const proposals =  {
    /**
     *  The hashes of the active proposals.
     */
    v10: new StorageType('Council.Proposals', 'Default', [], sts.array(() => v10.H256)) as ProposalsV10,
}

/**
 *  The hashes of the active proposals.
 */
export interface ProposalsV10  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v10.H256[]
    get(block: Block): Promise<(v10.H256[] | undefined)>
}

export const proposalOf =  {
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v10: new StorageType('Council.ProposalOf', 'Optional', [v10.H256], v10.Call) as ProposalOfV10,
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV10  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10.H256): Promise<(v10.Call | undefined)>
    getMany(block: Block, keys: v10.H256[]): Promise<(v10.Call | undefined)[]>
    getKeys(block: Block): Promise<v10.H256[]>
    getKeys(block: Block, key: v10.H256): Promise<v10.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10.H256): AsyncIterable<v10.H256[]>
    getPairs(block: Block): Promise<[k: v10.H256, v: (v10.Call | undefined)][]>
    getPairs(block: Block, key: v10.H256): Promise<[k: v10.H256, v: (v10.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10.H256, v: (v10.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10.H256): AsyncIterable<[k: v10.H256, v: (v10.Call | undefined)][]>
}

export const voting =  {
    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    v10: new StorageType('Council.Voting', 'Optional', [v10.H256], v10.Votes) as VotingV10,
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface VotingV10  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10.H256): Promise<(v10.Votes | undefined)>
    getMany(block: Block, keys: v10.H256[]): Promise<(v10.Votes | undefined)[]>
    getKeys(block: Block): Promise<v10.H256[]>
    getKeys(block: Block, key: v10.H256): Promise<v10.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v10.H256): AsyncIterable<v10.H256[]>
    getPairs(block: Block): Promise<[k: v10.H256, v: (v10.Votes | undefined)][]>
    getPairs(block: Block, key: v10.H256): Promise<[k: v10.H256, v: (v10.Votes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10.H256, v: (v10.Votes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10.H256): AsyncIterable<[k: v10.H256, v: (v10.Votes | undefined)][]>
}

export const proposalCount =  {
    /**
     *  Proposals so far.
     */
    v10: new StorageType('Council.ProposalCount', 'Default', [], sts.number()) as ProposalCountV10,
}

/**
 *  Proposals so far.
 */
export interface ProposalCountV10  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const members =  {
    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    v10: new StorageType('Council.Members', 'Default', [], sts.array(() => v10.AccountId32)) as MembersV10,
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface MembersV10  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v10.AccountId32[]
    get(block: Block): Promise<(v10.AccountId32[] | undefined)>
}

export const prime =  {
    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    v10: new StorageType('Council.Prime', 'Optional', [], v10.AccountId32) as PrimeV10,
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface PrimeV10  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v10.AccountId32 | undefined)>
}
