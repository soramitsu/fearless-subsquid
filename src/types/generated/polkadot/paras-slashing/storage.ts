import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9430 from '../v9430'

export const unappliedSlashes =  {
    /**
     *  Validators pending dispute slashes.
     */
    v9430: new StorageType('ParasSlashing.UnappliedSlashes', 'Optional', [sts.number(), v9430.CandidateHash], v9430.PendingSlashes) as UnappliedSlashesV9430,
}

/**
 *  Validators pending dispute slashes.
 */
export interface UnappliedSlashesV9430  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v9430.CandidateHash): Promise<(v9430.PendingSlashes | undefined)>
    getMany(block: Block, keys: [number, v9430.CandidateHash][]): Promise<(v9430.PendingSlashes | undefined)[]>
    getKeys(block: Block): Promise<[number, v9430.CandidateHash][]>
    getKeys(block: Block, key1: number): Promise<[number, v9430.CandidateHash][]>
    getKeys(block: Block, key1: number, key2: v9430.CandidateHash): Promise<[number, v9430.CandidateHash][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v9430.CandidateHash][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v9430.CandidateHash][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v9430.CandidateHash): AsyncIterable<[number, v9430.CandidateHash][]>
    getPairs(block: Block): Promise<[k: [number, v9430.CandidateHash], v: (v9430.PendingSlashes | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v9430.CandidateHash], v: (v9430.PendingSlashes | undefined)][]>
    getPairs(block: Block, key1: number, key2: v9430.CandidateHash): Promise<[k: [number, v9430.CandidateHash], v: (v9430.PendingSlashes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v9430.CandidateHash], v: (v9430.PendingSlashes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v9430.CandidateHash], v: (v9430.PendingSlashes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v9430.CandidateHash): AsyncIterable<[k: [number, v9430.CandidateHash], v: (v9430.PendingSlashes | undefined)][]>
}

export const validatorSetCounts =  {
    /**
     *  `ValidatorSetCount` per session.
     */
    v9430: new StorageType('ParasSlashing.ValidatorSetCounts', 'Optional', [sts.number()], sts.number()) as ValidatorSetCountsV9430,
}

/**
 *  `ValidatorSetCount` per session.
 */
export interface ValidatorSetCountsV9430  {
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
