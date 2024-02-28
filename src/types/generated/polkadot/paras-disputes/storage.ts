import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9180 from '../v9180'
import * as v9420 from '../v9420'

export const lastPrunedSession =  {
    /**
     *  The last pruned session, if any. All data stored by this module
     *  references sessions.
     */
    v9180: new StorageType('ParasDisputes.LastPrunedSession', 'Optional', [], sts.number()) as LastPrunedSessionV9180,
}

/**
 *  The last pruned session, if any. All data stored by this module
 *  references sessions.
 */
export interface LastPrunedSessionV9180  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const disputes =  {
    /**
     *  All ongoing or concluded disputes for the last several sessions.
     */
    v9180: new StorageType('ParasDisputes.Disputes', 'Optional', [sts.number(), v9180.CandidateHash], v9180.V1DisputeState) as DisputesV9180,
}

/**
 *  All ongoing or concluded disputes for the last several sessions.
 */
export interface DisputesV9180  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v9180.CandidateHash): Promise<(v9180.V1DisputeState | undefined)>
    getMany(block: Block, keys: [number, v9180.CandidateHash][]): Promise<(v9180.V1DisputeState | undefined)[]>
    getKeys(block: Block): Promise<[number, v9180.CandidateHash][]>
    getKeys(block: Block, key1: number): Promise<[number, v9180.CandidateHash][]>
    getKeys(block: Block, key1: number, key2: v9180.CandidateHash): Promise<[number, v9180.CandidateHash][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v9180.CandidateHash][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v9180.CandidateHash][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v9180.CandidateHash): AsyncIterable<[number, v9180.CandidateHash][]>
    getPairs(block: Block): Promise<[k: [number, v9180.CandidateHash], v: (v9180.V1DisputeState | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v9180.CandidateHash], v: (v9180.V1DisputeState | undefined)][]>
    getPairs(block: Block, key1: number, key2: v9180.CandidateHash): Promise<[k: [number, v9180.CandidateHash], v: (v9180.V1DisputeState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v9180.CandidateHash], v: (v9180.V1DisputeState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v9180.CandidateHash], v: (v9180.V1DisputeState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v9180.CandidateHash): AsyncIterable<[k: [number, v9180.CandidateHash], v: (v9180.V1DisputeState | undefined)][]>
}

export const included =  {
    /**
     *  All included blocks on the chain, as well as the block number in this chain that
     *  should be reverted back to if the candidate is disputed and determined to be invalid.
     */
    v9180: new StorageType('ParasDisputes.Included', 'Optional', [sts.number(), v9180.CandidateHash], sts.number()) as IncludedV9180,
}

/**
 *  All included blocks on the chain, as well as the block number in this chain that
 *  should be reverted back to if the candidate is disputed and determined to be invalid.
 */
export interface IncludedV9180  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v9180.CandidateHash): Promise<(number | undefined)>
    getMany(block: Block, keys: [number, v9180.CandidateHash][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[number, v9180.CandidateHash][]>
    getKeys(block: Block, key1: number): Promise<[number, v9180.CandidateHash][]>
    getKeys(block: Block, key1: number, key2: v9180.CandidateHash): Promise<[number, v9180.CandidateHash][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v9180.CandidateHash][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v9180.CandidateHash][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v9180.CandidateHash): AsyncIterable<[number, v9180.CandidateHash][]>
    getPairs(block: Block): Promise<[k: [number, v9180.CandidateHash], v: (number | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v9180.CandidateHash], v: (number | undefined)][]>
    getPairs(block: Block, key1: number, key2: v9180.CandidateHash): Promise<[k: [number, v9180.CandidateHash], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v9180.CandidateHash], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v9180.CandidateHash], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v9180.CandidateHash): AsyncIterable<[k: [number, v9180.CandidateHash], v: (number | undefined)][]>
}

export const spamSlots =  {
    /**
     *  Maps session indices to a vector indicating the number of potentially-spam disputes
     *  each validator is participating in. Potentially-spam disputes are remote disputes which have
     *  fewer than `byzantine_threshold + 1` validators.
     * 
     *  The i'th entry of the vector corresponds to the i'th validator in the session.
     */
    v9180: new StorageType('ParasDisputes.SpamSlots', 'Optional', [sts.number()], sts.array(() => sts.number())) as SpamSlotsV9180,
}

/**
 *  Maps session indices to a vector indicating the number of potentially-spam disputes
 *  each validator is participating in. Potentially-spam disputes are remote disputes which have
 *  fewer than `byzantine_threshold + 1` validators.
 * 
 *  The i'th entry of the vector corresponds to the i'th validator in the session.
 */
export interface SpamSlotsV9180  {
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
    v9180: new StorageType('ParasDisputes.Frozen', 'Default', [], sts.option(() => sts.number())) as FrozenV9180,
}

/**
 *  Whether the chain is frozen. Starts as `None`. When this is `Some`,
 *  the chain will not accept any new parachain blocks for backing or inclusion,
 *  and its value indicates the last valid block number in the chain.
 *  It can only be set back to `None` by governance intervention.
 */
export interface FrozenV9180  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (number | undefined)
    get(block: Block): Promise<((number | undefined) | undefined)>
}

export const backersOnDisputes =  {
    /**
     *  Backing votes stored for each dispute.
     *  This storage is used for slashing.
     */
    v9420: new StorageType('ParasDisputes.BackersOnDisputes', 'Optional', [sts.number(), v9420.CandidateHash], sts.array(() => v9420.V4ValidatorIndex)) as BackersOnDisputesV9420,
}

/**
 *  Backing votes stored for each dispute.
 *  This storage is used for slashing.
 */
export interface BackersOnDisputesV9420  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v9420.CandidateHash): Promise<(v9420.V4ValidatorIndex[] | undefined)>
    getMany(block: Block, keys: [number, v9420.CandidateHash][]): Promise<(v9420.V4ValidatorIndex[] | undefined)[]>
    getKeys(block: Block): Promise<[number, v9420.CandidateHash][]>
    getKeys(block: Block, key1: number): Promise<[number, v9420.CandidateHash][]>
    getKeys(block: Block, key1: number, key2: v9420.CandidateHash): Promise<[number, v9420.CandidateHash][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v9420.CandidateHash][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v9420.CandidateHash][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v9420.CandidateHash): AsyncIterable<[number, v9420.CandidateHash][]>
    getPairs(block: Block): Promise<[k: [number, v9420.CandidateHash], v: (v9420.V4ValidatorIndex[] | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v9420.CandidateHash], v: (v9420.V4ValidatorIndex[] | undefined)][]>
    getPairs(block: Block, key1: number, key2: v9420.CandidateHash): Promise<[k: [number, v9420.CandidateHash], v: (v9420.V4ValidatorIndex[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v9420.CandidateHash], v: (v9420.V4ValidatorIndex[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v9420.CandidateHash], v: (v9420.V4ValidatorIndex[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v9420.CandidateHash): AsyncIterable<[k: [number, v9420.CandidateHash], v: (v9420.V4ValidatorIndex[] | undefined)][]>
}
