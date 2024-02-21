import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9320 from '../v9320'

export const memberCount =  {
    /**
     *  The number of members in the collective who have at least the rank according to the index
     *  of the vec.
     */
    v9320: new StorageType('FellowshipCollective.MemberCount', 'Default', [sts.number()], sts.number()) as MemberCountV9320,
}

/**
 *  The number of members in the collective who have at least the rank according to the index
 *  of the vec.
 */
export interface MemberCountV9320  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key: number): Promise<(number | undefined)>
    getMany(block: Block, keys: number[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (number | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (number | undefined)][]>
}

export const members =  {
    /**
     *  The current members of the collective.
     */
    v9320: new StorageType('FellowshipCollective.Members', 'Optional', [v9320.AccountId32], v9320.MemberRecord) as MembersV9320,
}

/**
 *  The current members of the collective.
 */
export interface MembersV9320  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9320.AccountId32): Promise<(v9320.MemberRecord | undefined)>
    getMany(block: Block, keys: v9320.AccountId32[]): Promise<(v9320.MemberRecord | undefined)[]>
    getKeys(block: Block): Promise<v9320.AccountId32[]>
    getKeys(block: Block, key: v9320.AccountId32): Promise<v9320.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9320.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9320.AccountId32): AsyncIterable<v9320.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9320.AccountId32, v: (v9320.MemberRecord | undefined)][]>
    getPairs(block: Block, key: v9320.AccountId32): Promise<[k: v9320.AccountId32, v: (v9320.MemberRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9320.AccountId32, v: (v9320.MemberRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9320.AccountId32): AsyncIterable<[k: v9320.AccountId32, v: (v9320.MemberRecord | undefined)][]>
}

export const idToIndex =  {
    /**
     *  The index of each ranks's member into the group of members who have at least that rank.
     */
    v9320: new StorageType('FellowshipCollective.IdToIndex', 'Optional', [sts.number(), v9320.AccountId32], sts.number()) as IdToIndexV9320,
}

/**
 *  The index of each ranks's member into the group of members who have at least that rank.
 */
export interface IdToIndexV9320  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v9320.AccountId32): Promise<(number | undefined)>
    getMany(block: Block, keys: [number, v9320.AccountId32][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[number, v9320.AccountId32][]>
    getKeys(block: Block, key1: number): Promise<[number, v9320.AccountId32][]>
    getKeys(block: Block, key1: number, key2: v9320.AccountId32): Promise<[number, v9320.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v9320.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v9320.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v9320.AccountId32): AsyncIterable<[number, v9320.AccountId32][]>
    getPairs(block: Block): Promise<[k: [number, v9320.AccountId32], v: (number | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v9320.AccountId32], v: (number | undefined)][]>
    getPairs(block: Block, key1: number, key2: v9320.AccountId32): Promise<[k: [number, v9320.AccountId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v9320.AccountId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v9320.AccountId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v9320.AccountId32): AsyncIterable<[k: [number, v9320.AccountId32], v: (number | undefined)][]>
}

export const indexToId =  {
    /**
     *  The members in the collective by index. All indices in the range `0..MemberCount` will
     *  return `Some`, however a member's index is not guaranteed to remain unchanged over time.
     */
    v9320: new StorageType('FellowshipCollective.IndexToId', 'Optional', [sts.number(), sts.number()], v9320.AccountId32) as IndexToIdV9320,
}

/**
 *  The members in the collective by index. All indices in the range `0..MemberCount` will
 *  return `Some`, however a member's index is not guaranteed to remain unchanged over time.
 */
export interface IndexToIdV9320  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: number): Promise<(v9320.AccountId32 | undefined)>
    getMany(block: Block, keys: [number, number][]): Promise<(v9320.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<[number, number][]>
    getKeys(block: Block, key1: number): Promise<[number, number][]>
    getKeys(block: Block, key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(block: Block): Promise<[k: [number, number], v: (v9320.AccountId32 | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, number], v: (v9320.AccountId32 | undefined)][]>
    getPairs(block: Block, key1: number, key2: number): Promise<[k: [number, number], v: (v9320.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, number], v: (v9320.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, number], v: (v9320.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: number): AsyncIterable<[k: [number, number], v: (v9320.AccountId32 | undefined)][]>
}

export const voting =  {
    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    v9320: new StorageType('FellowshipCollective.Voting', 'Optional', [sts.number(), v9320.AccountId32], v9320.VoteRecord) as VotingV9320,
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface VotingV9320  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v9320.AccountId32): Promise<(v9320.VoteRecord | undefined)>
    getMany(block: Block, keys: [number, v9320.AccountId32][]): Promise<(v9320.VoteRecord | undefined)[]>
    getKeys(block: Block): Promise<[number, v9320.AccountId32][]>
    getKeys(block: Block, key1: number): Promise<[number, v9320.AccountId32][]>
    getKeys(block: Block, key1: number, key2: v9320.AccountId32): Promise<[number, v9320.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v9320.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v9320.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v9320.AccountId32): AsyncIterable<[number, v9320.AccountId32][]>
    getPairs(block: Block): Promise<[k: [number, v9320.AccountId32], v: (v9320.VoteRecord | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v9320.AccountId32], v: (v9320.VoteRecord | undefined)][]>
    getPairs(block: Block, key1: number, key2: v9320.AccountId32): Promise<[k: [number, v9320.AccountId32], v: (v9320.VoteRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v9320.AccountId32], v: (v9320.VoteRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v9320.AccountId32], v: (v9320.VoteRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v9320.AccountId32): AsyncIterable<[k: [number, v9320.AccountId32], v: (v9320.VoteRecord | undefined)][]>
}

export const votingCleanup =  {
    v9320: new StorageType('FellowshipCollective.VotingCleanup', 'Optional', [sts.number()], sts.bytes()) as VotingCleanupV9320,
}

export interface VotingCleanupV9320  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: number[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (Bytes | undefined)][]>
}
