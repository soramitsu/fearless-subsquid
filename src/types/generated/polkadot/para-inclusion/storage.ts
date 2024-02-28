import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9110 from '../v9110'

export const availabilityBitfields =  {
    /**
     *  The latest bitfield for each validator, referred to by their index in the validator set.
     */
    v9110: new StorageType('ParaInclusion.AvailabilityBitfields', 'Optional', [v9110.V0ValidatorIndex], v9110.AvailabilityBitfieldRecord) as AvailabilityBitfieldsV9110,
}

/**
 *  The latest bitfield for each validator, referred to by their index in the validator set.
 */
export interface AvailabilityBitfieldsV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9110.V0ValidatorIndex): Promise<(v9110.AvailabilityBitfieldRecord | undefined)>
    getMany(block: Block, keys: v9110.V0ValidatorIndex[]): Promise<(v9110.AvailabilityBitfieldRecord | undefined)[]>
    getKeys(block: Block): Promise<v9110.V0ValidatorIndex[]>
    getKeys(block: Block, key: v9110.V0ValidatorIndex): Promise<v9110.V0ValidatorIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.V0ValidatorIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.V0ValidatorIndex): AsyncIterable<v9110.V0ValidatorIndex[]>
    getPairs(block: Block): Promise<[k: v9110.V0ValidatorIndex, v: (v9110.AvailabilityBitfieldRecord | undefined)][]>
    getPairs(block: Block, key: v9110.V0ValidatorIndex): Promise<[k: v9110.V0ValidatorIndex, v: (v9110.AvailabilityBitfieldRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.V0ValidatorIndex, v: (v9110.AvailabilityBitfieldRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.V0ValidatorIndex): AsyncIterable<[k: v9110.V0ValidatorIndex, v: (v9110.AvailabilityBitfieldRecord | undefined)][]>
}

export const pendingAvailability =  {
    /**
     *  Candidates pending availability by `ParaId`.
     */
    v9110: new StorageType('ParaInclusion.PendingAvailability', 'Optional', [v9110.Id], v9110.CandidatePendingAvailability) as PendingAvailabilityV9110,
}

/**
 *  Candidates pending availability by `ParaId`.
 */
export interface PendingAvailabilityV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9110.Id): Promise<(v9110.CandidatePendingAvailability | undefined)>
    getMany(block: Block, keys: v9110.Id[]): Promise<(v9110.CandidatePendingAvailability | undefined)[]>
    getKeys(block: Block): Promise<v9110.Id[]>
    getKeys(block: Block, key: v9110.Id): Promise<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<v9110.Id[]>
    getPairs(block: Block): Promise<[k: v9110.Id, v: (v9110.CandidatePendingAvailability | undefined)][]>
    getPairs(block: Block, key: v9110.Id): Promise<[k: v9110.Id, v: (v9110.CandidatePendingAvailability | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.Id, v: (v9110.CandidatePendingAvailability | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<[k: v9110.Id, v: (v9110.CandidatePendingAvailability | undefined)][]>
}

export const pendingAvailabilityCommitments =  {
    /**
     *  The commitments of candidates pending availability, by `ParaId`.
     */
    v9110: new StorageType('ParaInclusion.PendingAvailabilityCommitments', 'Optional', [v9110.Id], v9110.V1CandidateCommitments) as PendingAvailabilityCommitmentsV9110,
}

/**
 *  The commitments of candidates pending availability, by `ParaId`.
 */
export interface PendingAvailabilityCommitmentsV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9110.Id): Promise<(v9110.V1CandidateCommitments | undefined)>
    getMany(block: Block, keys: v9110.Id[]): Promise<(v9110.V1CandidateCommitments | undefined)[]>
    getKeys(block: Block): Promise<v9110.Id[]>
    getKeys(block: Block, key: v9110.Id): Promise<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<v9110.Id[]>
    getPairs(block: Block): Promise<[k: v9110.Id, v: (v9110.V1CandidateCommitments | undefined)][]>
    getPairs(block: Block, key: v9110.Id): Promise<[k: v9110.Id, v: (v9110.V1CandidateCommitments | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.Id, v: (v9110.V1CandidateCommitments | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<[k: v9110.Id, v: (v9110.V1CandidateCommitments | undefined)][]>
}
