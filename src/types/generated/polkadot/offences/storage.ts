import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v0 from '../v0'

export const reports =  {
    /**
     *  The primary structure that holds all offence records keyed by report identifiers.
     */
    v0: new StorageType('Offences.Reports', 'Optional', [v0.ReportIdOf], v0.OffenceDetails) as ReportsV0,
}

/**
 *  The primary structure that holds all offence records keyed by report identifiers.
 */
export interface ReportsV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.ReportIdOf): Promise<(v0.OffenceDetails | undefined)>
    getMany(block: Block, keys: v0.ReportIdOf[]): Promise<(v0.OffenceDetails | undefined)[]>
    getKeys(block: Block): Promise<v0.ReportIdOf[]>
    getKeys(block: Block, key: v0.ReportIdOf): Promise<v0.ReportIdOf[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.ReportIdOf[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.ReportIdOf): AsyncIterable<v0.ReportIdOf[]>
    getPairs(block: Block): Promise<[k: v0.ReportIdOf, v: (v0.OffenceDetails | undefined)][]>
    getPairs(block: Block, key: v0.ReportIdOf): Promise<[k: v0.ReportIdOf, v: (v0.OffenceDetails | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.ReportIdOf, v: (v0.OffenceDetails | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.ReportIdOf): AsyncIterable<[k: v0.ReportIdOf, v: (v0.OffenceDetails | undefined)][]>
}

export const deferredOffences =  {
    /**
     *  Deferred reports that have been rejected by the offence handler and need to be submitted
     *  at a later time.
     */
    v0: new StorageType('Offences.DeferredOffences', 'Default', [], sts.array(() => v0.DeferredOffenceOf)) as DeferredOffencesV0,
}

/**
 *  Deferred reports that have been rejected by the offence handler and need to be submitted
 *  at a later time.
 */
export interface DeferredOffencesV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.DeferredOffenceOf[]
    get(block: Block): Promise<(v0.DeferredOffenceOf[] | undefined)>
}

export const concurrentReportsIndex =  {
    /**
     *  A vector of reports of the same kind that happened at the same time slot.
     */
    v0: new StorageType('Offences.ConcurrentReportsIndex', 'Default', [v0.Kind, v0.OpaqueTimeSlot], sts.array(() => v0.ReportIdOf)) as ConcurrentReportsIndexV0,
}

/**
 *  A vector of reports of the same kind that happened at the same time slot.
 */
export interface ConcurrentReportsIndexV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.ReportIdOf[]
    get(block: Block, key1: v0.Kind, key2: v0.OpaqueTimeSlot): Promise<(v0.ReportIdOf[] | undefined)>
    getMany(block: Block, keys: [v0.Kind, v0.OpaqueTimeSlot][]): Promise<(v0.ReportIdOf[] | undefined)[]>
    getKeys(block: Block): Promise<[v0.Kind, v0.OpaqueTimeSlot][]>
    getKeys(block: Block, key1: v0.Kind): Promise<[v0.Kind, v0.OpaqueTimeSlot][]>
    getKeys(block: Block, key1: v0.Kind, key2: v0.OpaqueTimeSlot): Promise<[v0.Kind, v0.OpaqueTimeSlot][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v0.Kind, v0.OpaqueTimeSlot][]>
    getKeysPaged(pageSize: number, block: Block, key1: v0.Kind): AsyncIterable<[v0.Kind, v0.OpaqueTimeSlot][]>
    getKeysPaged(pageSize: number, block: Block, key1: v0.Kind, key2: v0.OpaqueTimeSlot): AsyncIterable<[v0.Kind, v0.OpaqueTimeSlot][]>
    getPairs(block: Block): Promise<[k: [v0.Kind, v0.OpaqueTimeSlot], v: (v0.ReportIdOf[] | undefined)][]>
    getPairs(block: Block, key1: v0.Kind): Promise<[k: [v0.Kind, v0.OpaqueTimeSlot], v: (v0.ReportIdOf[] | undefined)][]>
    getPairs(block: Block, key1: v0.Kind, key2: v0.OpaqueTimeSlot): Promise<[k: [v0.Kind, v0.OpaqueTimeSlot], v: (v0.ReportIdOf[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v0.Kind, v0.OpaqueTimeSlot], v: (v0.ReportIdOf[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v0.Kind): AsyncIterable<[k: [v0.Kind, v0.OpaqueTimeSlot], v: (v0.ReportIdOf[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v0.Kind, key2: v0.OpaqueTimeSlot): AsyncIterable<[k: [v0.Kind, v0.OpaqueTimeSlot], v: (v0.ReportIdOf[] | undefined)][]>
}

export const reportsByKindIndex =  {
    /**
     *  Enumerates all reports of a kind along with the time they happened.
     * 
     *  All reports are sorted by the time of offence.
     * 
     *  Note that the actual type of this mapping is `Vec<u8>`, this is because values of
     *  different types are not supported at the moment so we are doing the manual serialization.
     */
    v0: new StorageType('Offences.ReportsByKindIndex', 'Default', [v0.Kind], sts.bytes()) as ReportsByKindIndexV0,
}

/**
 *  Enumerates all reports of a kind along with the time they happened.
 * 
 *  All reports are sorted by the time of offence.
 * 
 *  Note that the actual type of this mapping is `Vec<u8>`, this is because values of
 *  different types are not supported at the moment so we are doing the manual serialization.
 */
export interface ReportsByKindIndexV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
    get(block: Block, key: v0.Kind): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: v0.Kind[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<v0.Kind[]>
    getKeys(block: Block, key: v0.Kind): Promise<v0.Kind[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.Kind[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.Kind): AsyncIterable<v0.Kind[]>
    getPairs(block: Block): Promise<[k: v0.Kind, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: v0.Kind): Promise<[k: v0.Kind, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.Kind, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.Kind): AsyncIterable<[k: v0.Kind, v: (Bytes | undefined)][]>
}
