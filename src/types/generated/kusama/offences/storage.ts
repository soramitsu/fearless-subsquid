import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v1058 from '../v1058'

export const reports =  {
    /**
     *  The primary structure that holds all offence records keyed by report identifiers.
     */
    v1020: new StorageType('Offences.Reports', 'Optional', [v1020.ReportIdOf], v1020.OffenceDetails) as ReportsV1020,
}

/**
 *  The primary structure that holds all offence records keyed by report identifiers.
 */
export interface ReportsV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1020.ReportIdOf): Promise<(v1020.OffenceDetails | undefined)>
    getMany(block: Block, keys: v1020.ReportIdOf[]): Promise<(v1020.OffenceDetails | undefined)[]>
}

export const concurrentReportsIndex =  {
    /**
     *  A vector of reports of the same kind that happened at the same time slot.
     */
    v1020: new StorageType('Offences.ConcurrentReportsIndex', 'Default', [v1020.Kind, v1020.OpaqueTimeSlot], sts.array(() => v1020.ReportIdOf)) as ConcurrentReportsIndexV1020,
}

/**
 *  A vector of reports of the same kind that happened at the same time slot.
 */
export interface ConcurrentReportsIndexV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.ReportIdOf[]
    get(block: Block, key1: v1020.Kind, key2: v1020.OpaqueTimeSlot): Promise<(v1020.ReportIdOf[] | undefined)>
    getMany(block: Block, keys: [v1020.Kind, v1020.OpaqueTimeSlot][]): Promise<(v1020.ReportIdOf[] | undefined)[]>
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
    v1020: new StorageType('Offences.ReportsByKindIndex', 'Default', [v1020.Kind], sts.bytes()) as ReportsByKindIndexV1020,
}

/**
 *  Enumerates all reports of a kind along with the time they happened.
 * 
 *  All reports are sorted by the time of offence.
 * 
 *  Note that the actual type of this mapping is `Vec<u8>`, this is because values of
 *  different types are not supported at the moment so we are doing the manual serialization.
 */
export interface ReportsByKindIndexV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
    get(block: Block, key: v1020.Kind): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: v1020.Kind[]): Promise<(Bytes | undefined)[]>
}

export const deferredOffences =  {
    /**
     *  Deferred reports that have been rejected by the offence handler and need to be submitted
     *  at a later time.
     */
    v1058: new StorageType('Offences.DeferredOffences', 'Default', [], sts.array(() => v1058.DeferredOffenceOf)) as DeferredOffencesV1058,
}

/**
 *  Deferred reports that have been rejected by the offence handler and need to be submitted
 *  at a later time.
 */
export interface DeferredOffencesV1058  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1058.DeferredOffenceOf[]
    get(block: Block): Promise<(v1058.DeferredOffenceOf[] | undefined)>
}
