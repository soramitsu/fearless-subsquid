import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v7 from '../v7'

export const incompleteSince =  {
    v7: new StorageType('Scheduler.IncompleteSince', 'Optional', [], sts.number()) as IncompleteSinceV7,
}

export interface IncompleteSinceV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const agenda =  {
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v7: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v7.Scheduled))) as AgendaV7,
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV7  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v7.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((v7.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v7.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v7.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v7.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v7.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v7.Scheduled | undefined)[] | undefined)][]>
}

export const lookup =  {
    /**
     *  Lookup from a name to the block number and index of the task.
     * 
     *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
     *  identities.
     */
    v7: new StorageType('Scheduler.Lookup', 'Optional', [sts.bytes()], sts.tuple(() => [sts.number(), sts.number()])) as LookupV7,
}

/**
 *  Lookup from a name to the block number and index of the task.
 * 
 *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
 *  identities.
 */
export interface LookupV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: Bytes): Promise<([number, number] | undefined)>
    getMany(block: Block, keys: Bytes[]): Promise<([number, number] | undefined)[]>
    getKeys(block: Block): Promise<Bytes[]>
    getKeys(block: Block, key: Bytes): Promise<Bytes[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<Bytes[]>
    getKeysPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<Bytes[]>
    getPairs(block: Block): Promise<[k: Bytes, v: ([number, number] | undefined)][]>
    getPairs(block: Block, key: Bytes): Promise<[k: Bytes, v: ([number, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: Bytes, v: ([number, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<[k: Bytes, v: ([number, number] | undefined)][]>
}
