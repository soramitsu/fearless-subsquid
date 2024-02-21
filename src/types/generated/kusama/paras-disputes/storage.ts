import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9130 from '../v9130'
import * as v9381 from '../v9381'

export const lastPrunedSession =  {
    /**
     *  The last pruned session, if any. All data stored by this module
     *  references sessions.
     */
    v9130: new StorageType('ParasDisputes.LastPrunedSession', 'Optional', [], sts.number()) as LastPrunedSessionV9130,
}

/**
 *  The last pruned session, if any. All data stored by this module
 *  references sessions.
 */
export interface LastPrunedSessionV9130  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const disputes =  {
    /**
     *  All ongoing or concluded disputes for the last several sessions.
     */
    v9130: new StorageType('ParasDisputes.Disputes', 'Optional', [sts.number(), v9130.CandidateHash], v9130.V1DisputeState) as DisputesV9130,
}

/**
 *  All ongoing or concluded disputes for the last several sessions.
 */
export interface DisputesV9130  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v9130.CandidateHash): Promise<(v9130.V1DisputeState | undefined)>
    getMany(block: Block, keys: [number, v9130.CandidateHash][]): Promise<(v9130.V1DisputeState | undefined)[]>
    getKeys(block: Block): Promise<[number, v9130.CandidateHash][]>
    getKeys(block: Block, key1: number): Promise<[number, v9130.CandidateHash][]>
    getKeys(block: Block, key1: number, key2: v9130.CandidateHash): Promise<[number, v9130.CandidateHash][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v9130.CandidateHash][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v9130.CandidateHash][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v9130.CandidateHash): AsyncIterable<[number, v9130.CandidateHash][]>
    getPairs(block: Block): Promise<[k: [number, v9130.CandidateHash], v: (v9130.V1DisputeState | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v9130.CandidateHash], v: (v9130.V1DisputeState | undefined)][]>
    getPairs(block: Block, key1: number, key2: v9130.CandidateHash): Promise<[k: [number, v9130.CandidateHash], v: (v9130.V1DisputeState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v9130.CandidateHash], v: (v9130.V1DisputeState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v9130.CandidateHash], v: (v9130.V1DisputeState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v9130.CandidateHash): AsyncIterable<[k: [number, v9130.CandidateHash], v: (v9130.V1DisputeState | undefined)][]>
}

export const included =  {
    /**
     *  All included blocks on the chain, as well as the block number in this chain that
     *  should be reverted back to if the candidate is disputed and determined to be invalid.
     */
    v9130: new StorageType('ParasDisputes.Included', 'Optional', [sts.number(), v9130.CandidateHash], sts.number()) as IncludedV9130,
}

/**
 *  All included blocks on the chain, as well as the block number in this chain that
 *  should be reverted back to if the candidate is disputed and determined to be invalid.
 */
export interface IncludedV9130  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v9130.CandidateHash): Promise<(number | undefined)>
    getMany(block: Block, keys: [number, v9130.CandidateHash][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[number, v9130.CandidateHash][]>
    getKeys(block: Block, key1: number): Promise<[number, v9130.CandidateHash][]>
    getKeys(block: Block, key1: number, key2: v9130.CandidateHash): Promise<[number, v9130.CandidateHash][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v9130.CandidateHash][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v9130.CandidateHash][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v9130.CandidateHash): AsyncIterable<[number, v9130.CandidateHash][]>
    getPairs(block: Block): Promise<[k: [number, v9130.CandidateHash], v: (number | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v9130.CandidateHash], v: (number | undefined)][]>
    getPairs(block: Block, key1: number, key2: v9130.CandidateHash): Promise<[k: [number, v9130.CandidateHash], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v9130.CandidateHash], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v9130.CandidateHash], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v9130.CandidateHash): AsyncIterable<[k: [number, v9130.CandidateHash], v: (number | undefined)][]>
}

export const spamSlots =  {
    /**
     *  Maps session indices to a vector indicating the number of potentially-spam disputes
     *  each validator is participating in. Potentially-spam disputes are remote disputes which have
     *  fewer than `byzantine_threshold + 1` validators.
     * 
     *  The i'th entry of the vector corresponds to the i'th validator in the session.
     */
    v9130: new StorageType('ParasDisputes.SpamSlots', 'Optional', [sts.number()], sts.array(() => sts.number())) as SpamSlotsV9130,
}

/**
 *  Maps session indices to a vector indicating the number of potentially-spam disputes
 *  each validator is participating in. Potentially-spam disputes are remote disputes which have
 *  fewer than `byzantine_threshold + 1` validators.
 * 
 *  The i'th entry of the vector corresponds to the i'th validator in the session.
 */
export interface SpamSlotsV9130  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(number[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<(number[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (number[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (number[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (number[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (number[] | undefined)][]>
}

export const frozen =  {
    /**
     *  Whether the chain is frozen. Starts as `None`. When this is `Some`,
     *  the chain will not accept any new parachain blocks for backing or inclusion,
     *  and its value indicates the last valid block number in the chain.
     *  It can only be set back to `None` by governance intervention.
     */
    v9130: new StorageType('ParasDisputes.Frozen', 'Default', [], sts.option(() => sts.number())) as FrozenV9130,
}

/**
 *  Whether the chain is frozen. Starts as `None`. When this is `Some`,
 *  the chain will not accept any new parachain blocks for backing or inclusion,
 *  and its value indicates the last valid block number in the chain.
 *  It can only be set back to `None` by governance intervention.
 */
export interface FrozenV9130  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (number | undefined)
    get(block: Block): Promise<((number | undefined) | undefined)>
}

export const backersOnDisputes =  {
    /**
     *  Backing votes stored for each dispute.
     *  This storage is used for slashing.
     */
    v9381: new StorageType('ParasDisputes.BackersOnDisputes', 'Optional', [sts.number(), v9381.CandidateHash], sts.array(() => v9381.V2ValidatorIndex)) as BackersOnDisputesV9381,
}

/**
 *  Backing votes stored for each dispute.
 *  This storage is used for slashing.
 */
export interface BackersOnDisputesV9381  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v9381.CandidateHash): Promise<(v9381.V2ValidatorIndex[] | undefined)>
    getMany(block: Block, keys: [number, v9381.CandidateHash][]): Promise<(v9381.V2ValidatorIndex[] | undefined)[]>
    getKeys(block: Block): Promise<[number, v9381.CandidateHash][]>
    getKeys(block: Block, key1: number): Promise<[number, v9381.CandidateHash][]>
    getKeys(block: Block, key1: number, key2: v9381.CandidateHash): Promise<[number, v9381.CandidateHash][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v9381.CandidateHash][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v9381.CandidateHash][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v9381.CandidateHash): AsyncIterable<[number, v9381.CandidateHash][]>
    getPairs(block: Block): Promise<[k: [number, v9381.CandidateHash], v: (v9381.V2ValidatorIndex[] | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v9381.CandidateHash], v: (v9381.V2ValidatorIndex[] | undefined)][]>
    getPairs(block: Block, key1: number, key2: v9381.CandidateHash): Promise<[k: [number, v9381.CandidateHash], v: (v9381.V2ValidatorIndex[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v9381.CandidateHash], v: (v9381.V2ValidatorIndex[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v9381.CandidateHash], v: (v9381.V2ValidatorIndex[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v9381.CandidateHash): AsyncIterable<[k: [number, v9381.CandidateHash], v: (v9381.V2ValidatorIndex[] | undefined)][]>
}
