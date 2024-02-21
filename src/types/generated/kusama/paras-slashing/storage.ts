import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9420 from '../v9420'

export const unappliedSlashes =  {
    /**
     *  Validators pending dispute slashes.
     */
    v9420: new StorageType('ParasSlashing.UnappliedSlashes', 'Optional', [sts.number(), v9420.CandidateHash], v9420.PendingSlashes) as UnappliedSlashesV9420,
}

/**
 *  Validators pending dispute slashes.
 */
export interface UnappliedSlashesV9420  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v9420.CandidateHash): Promise<(v9420.PendingSlashes | undefined)>
    getMany(block: Block, keys: [number, v9420.CandidateHash][]): Promise<(v9420.PendingSlashes | undefined)[]>
    getKeys(block: Block): Promise<[number, v9420.CandidateHash][]>
    getKeys(block: Block, key1: number): Promise<[number, v9420.CandidateHash][]>
    getKeys(block: Block, key1: number, key2: v9420.CandidateHash): Promise<[number, v9420.CandidateHash][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v9420.CandidateHash][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v9420.CandidateHash][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v9420.CandidateHash): AsyncIterable<[number, v9420.CandidateHash][]>
    getPairs(block: Block): Promise<[k: [number, v9420.CandidateHash], v: (v9420.PendingSlashes | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v9420.CandidateHash], v: (v9420.PendingSlashes | undefined)][]>
    getPairs(block: Block, key1: number, key2: v9420.CandidateHash): Promise<[k: [number, v9420.CandidateHash], v: (v9420.PendingSlashes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v9420.CandidateHash], v: (v9420.PendingSlashes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v9420.CandidateHash], v: (v9420.PendingSlashes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v9420.CandidateHash): AsyncIterable<[k: [number, v9420.CandidateHash], v: (v9420.PendingSlashes | undefined)][]>
}

export const validatorSetCounts =  {
    /**
     *  `ValidatorSetCount` per session.
     */
    v9420: new StorageType('ParasSlashing.ValidatorSetCounts', 'Optional', [sts.number()], sts.number()) as ValidatorSetCountsV9420,
}

/**
 *  `ValidatorSetCount` per session.
 */
export interface ValidatorSetCountsV9420  {
    is(block: RuntimeCtx): boolean
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
