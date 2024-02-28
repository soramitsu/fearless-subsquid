import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9420 from '../v9420'

export const votingFor =  {
    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    v9420: new StorageType('ConvictionVoting.VotingFor', 'Default', [v9420.AccountId32, sts.number()], v9420.Type_605) as VotingForV9420,
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface VotingForV9420  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9420.Type_605
    get(block: Block, key1: v9420.AccountId32, key2: number): Promise<(v9420.Type_605 | undefined)>
    getMany(block: Block, keys: [v9420.AccountId32, number][]): Promise<(v9420.Type_605 | undefined)[]>
    getKeys(block: Block): Promise<[v9420.AccountId32, number][]>
    getKeys(block: Block, key1: v9420.AccountId32): Promise<[v9420.AccountId32, number][]>
    getKeys(block: Block, key1: v9420.AccountId32, key2: number): Promise<[v9420.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v9420.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v9420.AccountId32): AsyncIterable<[v9420.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v9420.AccountId32, key2: number): AsyncIterable<[v9420.AccountId32, number][]>
    getPairs(block: Block): Promise<[k: [v9420.AccountId32, number], v: (v9420.Type_605 | undefined)][]>
    getPairs(block: Block, key1: v9420.AccountId32): Promise<[k: [v9420.AccountId32, number], v: (v9420.Type_605 | undefined)][]>
    getPairs(block: Block, key1: v9420.AccountId32, key2: number): Promise<[k: [v9420.AccountId32, number], v: (v9420.Type_605 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v9420.AccountId32, number], v: (v9420.Type_605 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v9420.AccountId32): AsyncIterable<[k: [v9420.AccountId32, number], v: (v9420.Type_605 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v9420.AccountId32, key2: number): AsyncIterable<[k: [v9420.AccountId32, number], v: (v9420.Type_605 | undefined)][]>
}

export const classLocksFor =  {
    /**
     *  The voting classes which have a non-zero lock requirement and the lock amounts which they
     *  require. The actual amount locked on behalf of this pallet should always be the maximum of
     *  this list.
     */
    v9420: new StorageType('ConvictionVoting.ClassLocksFor', 'Default', [v9420.AccountId32], sts.array(() => sts.tuple(() => [sts.number(), sts.bigint()]))) as ClassLocksForV9420,
}

/**
 *  The voting classes which have a non-zero lock requirement and the lock amounts which they
 *  require. The actual amount locked on behalf of this pallet should always be the maximum of
 *  this list.
 */
export interface ClassLocksForV9420  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, bigint][]
    get(block: Block, key: v9420.AccountId32): Promise<([number, bigint][] | undefined)>
    getMany(block: Block, keys: v9420.AccountId32[]): Promise<([number, bigint][] | undefined)[]>
    getKeys(block: Block): Promise<v9420.AccountId32[]>
    getKeys(block: Block, key: v9420.AccountId32): Promise<v9420.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9420.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9420.AccountId32): AsyncIterable<v9420.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9420.AccountId32, v: ([number, bigint][] | undefined)][]>
    getPairs(block: Block, key: v9420.AccountId32): Promise<[k: v9420.AccountId32, v: ([number, bigint][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9420.AccountId32, v: ([number, bigint][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9420.AccountId32): AsyncIterable<[k: v9420.AccountId32, v: ([number, bigint][] | undefined)][]>
}
