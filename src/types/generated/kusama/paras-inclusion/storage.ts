import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9010 from '../v9010'

export const availabilityBitfields =  {
    /**
     *  The latest bitfield for each validator, referred to by their index in the validator set.
     */
    v9010: new StorageType('ParaInclusion.AvailabilityBitfields', 'Optional', [v9010.ParaValidatorIndex], v9010.AvailabilityBitfieldRecord) as AvailabilityBitfieldsV9010,
}

/**
 *  The latest bitfield for each validator, referred to by their index in the validator set.
 */
export interface AvailabilityBitfieldsV9010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9010.ParaValidatorIndex): Promise<(v9010.AvailabilityBitfieldRecord | undefined)>
    getMany(block: Block, keys: v9010.ParaValidatorIndex[]): Promise<(v9010.AvailabilityBitfieldRecord | undefined)[]>
    getKeys(block: Block): Promise<v9010.ParaValidatorIndex[]>
    getKeys(block: Block, key: v9010.ParaValidatorIndex): Promise<v9010.ParaValidatorIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9010.ParaValidatorIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v9010.ParaValidatorIndex): AsyncIterable<v9010.ParaValidatorIndex[]>
    getPairs(block: Block): Promise<[k: v9010.ParaValidatorIndex, v: (v9010.AvailabilityBitfieldRecord | undefined)][]>
    getPairs(block: Block, key: v9010.ParaValidatorIndex): Promise<[k: v9010.ParaValidatorIndex, v: (v9010.AvailabilityBitfieldRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9010.ParaValidatorIndex, v: (v9010.AvailabilityBitfieldRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9010.ParaValidatorIndex): AsyncIterable<[k: v9010.ParaValidatorIndex, v: (v9010.AvailabilityBitfieldRecord | undefined)][]>
}

export const pendingAvailability =  {
    /**
     *  Candidates pending availability by `ParaId`.
     */
    v9010: new StorageType('ParaInclusion.PendingAvailability', 'Optional', [v9010.ParaId], v9010.CandidatePendingAvailability) as PendingAvailabilityV9010,
}

/**
 *  Candidates pending availability by `ParaId`.
 */
export interface PendingAvailabilityV9010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9010.ParaId): Promise<(v9010.CandidatePendingAvailability | undefined)>
    getMany(block: Block, keys: v9010.ParaId[]): Promise<(v9010.CandidatePendingAvailability | undefined)[]>
    getKeys(block: Block): Promise<v9010.ParaId[]>
    getKeys(block: Block, key: v9010.ParaId): Promise<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<v9010.ParaId[]>
    getPairs(block: Block): Promise<[k: v9010.ParaId, v: (v9010.CandidatePendingAvailability | undefined)][]>
    getPairs(block: Block, key: v9010.ParaId): Promise<[k: v9010.ParaId, v: (v9010.CandidatePendingAvailability | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9010.ParaId, v: (v9010.CandidatePendingAvailability | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<[k: v9010.ParaId, v: (v9010.CandidatePendingAvailability | undefined)][]>
}

export const pendingAvailabilityCommitments =  {
    /**
     *  The commitments of candidates pending availability, by ParaId.
     */
    v9010: new StorageType('ParaInclusion.PendingAvailabilityCommitments', 'Optional', [v9010.ParaId], v9010.CandidateCommitments) as PendingAvailabilityCommitmentsV9010,
}

/**
 *  The commitments of candidates pending availability, by ParaId.
 */
export interface PendingAvailabilityCommitmentsV9010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9010.ParaId): Promise<(v9010.CandidateCommitments | undefined)>
    getMany(block: Block, keys: v9010.ParaId[]): Promise<(v9010.CandidateCommitments | undefined)[]>
    getKeys(block: Block): Promise<v9010.ParaId[]>
    getKeys(block: Block, key: v9010.ParaId): Promise<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<v9010.ParaId[]>
    getPairs(block: Block): Promise<[k: v9010.ParaId, v: (v9010.CandidateCommitments | undefined)][]>
    getPairs(block: Block, key: v9010.ParaId): Promise<[k: v9010.ParaId, v: (v9010.CandidateCommitments | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9010.ParaId, v: (v9010.CandidateCommitments | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<[k: v9010.ParaId, v: (v9010.CandidateCommitments | undefined)][]>
}
