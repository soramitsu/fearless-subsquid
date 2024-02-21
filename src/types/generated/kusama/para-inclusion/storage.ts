import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9090 from '../v9090'
import * as v9111 from '../v9111'

export const availabilityBitfields =  {
    /**
     *  The latest bitfield for each validator, referred to by their index in the validator set.
     */
    v9090: new StorageType('ParaInclusion.AvailabilityBitfields', 'Optional', [v9090.ParaValidatorIndex], v9090.AvailabilityBitfieldRecord) as AvailabilityBitfieldsV9090,
    /**
     *  The latest bitfield for each validator, referred to by their index in the validator set.
     */
    v9111: new StorageType('ParaInclusion.AvailabilityBitfields', 'Optional', [v9111.V0ValidatorIndex], v9111.AvailabilityBitfieldRecord) as AvailabilityBitfieldsV9111,
}

/**
 *  The latest bitfield for each validator, referred to by their index in the validator set.
 */
export interface AvailabilityBitfieldsV9090  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9090.ParaValidatorIndex): Promise<(v9090.AvailabilityBitfieldRecord | undefined)>
    getMany(block: Block, keys: v9090.ParaValidatorIndex[]): Promise<(v9090.AvailabilityBitfieldRecord | undefined)[]>
    getKeys(block: Block): Promise<v9090.ParaValidatorIndex[]>
    getKeys(block: Block, key: v9090.ParaValidatorIndex): Promise<v9090.ParaValidatorIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9090.ParaValidatorIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v9090.ParaValidatorIndex): AsyncIterable<v9090.ParaValidatorIndex[]>
    getPairs(block: Block): Promise<[k: v9090.ParaValidatorIndex, v: (v9090.AvailabilityBitfieldRecord | undefined)][]>
    getPairs(block: Block, key: v9090.ParaValidatorIndex): Promise<[k: v9090.ParaValidatorIndex, v: (v9090.AvailabilityBitfieldRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9090.ParaValidatorIndex, v: (v9090.AvailabilityBitfieldRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9090.ParaValidatorIndex): AsyncIterable<[k: v9090.ParaValidatorIndex, v: (v9090.AvailabilityBitfieldRecord | undefined)][]>
}

/**
 *  The latest bitfield for each validator, referred to by their index in the validator set.
 */
export interface AvailabilityBitfieldsV9111  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9111.V0ValidatorIndex): Promise<(v9111.AvailabilityBitfieldRecord | undefined)>
    getMany(block: Block, keys: v9111.V0ValidatorIndex[]): Promise<(v9111.AvailabilityBitfieldRecord | undefined)[]>
    getKeys(block: Block): Promise<v9111.V0ValidatorIndex[]>
    getKeys(block: Block, key: v9111.V0ValidatorIndex): Promise<v9111.V0ValidatorIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9111.V0ValidatorIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v9111.V0ValidatorIndex): AsyncIterable<v9111.V0ValidatorIndex[]>
    getPairs(block: Block): Promise<[k: v9111.V0ValidatorIndex, v: (v9111.AvailabilityBitfieldRecord | undefined)][]>
    getPairs(block: Block, key: v9111.V0ValidatorIndex): Promise<[k: v9111.V0ValidatorIndex, v: (v9111.AvailabilityBitfieldRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9111.V0ValidatorIndex, v: (v9111.AvailabilityBitfieldRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9111.V0ValidatorIndex): AsyncIterable<[k: v9111.V0ValidatorIndex, v: (v9111.AvailabilityBitfieldRecord | undefined)][]>
}

export const pendingAvailability =  {
    /**
     *  Candidates pending availability by `ParaId`.
     */
    v9090: new StorageType('ParaInclusion.PendingAvailability', 'Optional', [v9090.ParaId], v9090.CandidatePendingAvailability) as PendingAvailabilityV9090,
    /**
     *  Candidates pending availability by `ParaId`.
     */
    v9111: new StorageType('ParaInclusion.PendingAvailability', 'Optional', [v9111.Id], v9111.CandidatePendingAvailability) as PendingAvailabilityV9111,
}

/**
 *  Candidates pending availability by `ParaId`.
 */
export interface PendingAvailabilityV9090  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9090.ParaId): Promise<(v9090.CandidatePendingAvailability | undefined)>
    getMany(block: Block, keys: v9090.ParaId[]): Promise<(v9090.CandidatePendingAvailability | undefined)[]>
    getKeys(block: Block): Promise<v9090.ParaId[]>
    getKeys(block: Block, key: v9090.ParaId): Promise<v9090.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9090.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9090.ParaId): AsyncIterable<v9090.ParaId[]>
    getPairs(block: Block): Promise<[k: v9090.ParaId, v: (v9090.CandidatePendingAvailability | undefined)][]>
    getPairs(block: Block, key: v9090.ParaId): Promise<[k: v9090.ParaId, v: (v9090.CandidatePendingAvailability | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9090.ParaId, v: (v9090.CandidatePendingAvailability | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9090.ParaId): AsyncIterable<[k: v9090.ParaId, v: (v9090.CandidatePendingAvailability | undefined)][]>
}

/**
 *  Candidates pending availability by `ParaId`.
 */
export interface PendingAvailabilityV9111  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9111.Id): Promise<(v9111.CandidatePendingAvailability | undefined)>
    getMany(block: Block, keys: v9111.Id[]): Promise<(v9111.CandidatePendingAvailability | undefined)[]>
    getKeys(block: Block): Promise<v9111.Id[]>
    getKeys(block: Block, key: v9111.Id): Promise<v9111.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9111.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v9111.Id): AsyncIterable<v9111.Id[]>
    getPairs(block: Block): Promise<[k: v9111.Id, v: (v9111.CandidatePendingAvailability | undefined)][]>
    getPairs(block: Block, key: v9111.Id): Promise<[k: v9111.Id, v: (v9111.CandidatePendingAvailability | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9111.Id, v: (v9111.CandidatePendingAvailability | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9111.Id): AsyncIterable<[k: v9111.Id, v: (v9111.CandidatePendingAvailability | undefined)][]>
}

export const pendingAvailabilityCommitments =  {
    /**
     *  The commitments of candidates pending availability, by `ParaId`.
     */
    v9090: new StorageType('ParaInclusion.PendingAvailabilityCommitments', 'Optional', [v9090.ParaId], v9090.CandidateCommitments) as PendingAvailabilityCommitmentsV9090,
}

/**
 *  The commitments of candidates pending availability, by `ParaId`.
 */
export interface PendingAvailabilityCommitmentsV9090  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9090.ParaId): Promise<(v9090.CandidateCommitments | undefined)>
    getMany(block: Block, keys: v9090.ParaId[]): Promise<(v9090.CandidateCommitments | undefined)[]>
    getKeys(block: Block): Promise<v9090.ParaId[]>
    getKeys(block: Block, key: v9090.ParaId): Promise<v9090.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9090.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9090.ParaId): AsyncIterable<v9090.ParaId[]>
    getPairs(block: Block): Promise<[k: v9090.ParaId, v: (v9090.CandidateCommitments | undefined)][]>
    getPairs(block: Block, key: v9090.ParaId): Promise<[k: v9090.ParaId, v: (v9090.CandidateCommitments | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9090.ParaId, v: (v9090.CandidateCommitments | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9090.ParaId): AsyncIterable<[k: v9090.ParaId, v: (v9090.CandidateCommitments | undefined)][]>
}
