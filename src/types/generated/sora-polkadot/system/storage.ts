import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v10 from '../v10'

export const account =  {
    /**
     *  The full account information for a particular account ID.
     */
    v1: new StorageType('System.Account', 'Default', [v1.AccountId32], v1.AccountInfo) as AccountV1,
}

/**
 *  The full account information for a particular account ID.
 */
export interface AccountV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.AccountInfo
    get(block: Block, key: v1.AccountId32): Promise<(v1.AccountInfo | undefined)>
    getMany(block: Block, keys: v1.AccountId32[]): Promise<(v1.AccountInfo | undefined)[]>
    getKeys(block: Block): Promise<v1.AccountId32[]>
    getKeys(block: Block, key: v1.AccountId32): Promise<v1.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.AccountId32): AsyncIterable<v1.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1.AccountId32, v: (v1.AccountInfo | undefined)][]>
    getPairs(block: Block, key: v1.AccountId32): Promise<[k: v1.AccountId32, v: (v1.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.AccountId32, v: (v1.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.AccountId32): AsyncIterable<[k: v1.AccountId32, v: (v1.AccountInfo | undefined)][]>
}

export const extrinsicCount =  {
    /**
     *  Total extrinsics count for the current block.
     */
    v1: new StorageType('System.ExtrinsicCount', 'Optional', [], sts.number()) as ExtrinsicCountV1,
}

/**
 *  Total extrinsics count for the current block.
 */
export interface ExtrinsicCountV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const blockWeight =  {
    /**
     *  The current weight for the block.
     */
    v1: new StorageType('System.BlockWeight', 'Default', [], v1.PerDispatchClass) as BlockWeightV1,
}

/**
 *  The current weight for the block.
 */
export interface BlockWeightV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.PerDispatchClass
    get(block: Block): Promise<(v1.PerDispatchClass | undefined)>
}

export const allExtrinsicsLen =  {
    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    v1: new StorageType('System.AllExtrinsicsLen', 'Optional', [], sts.number()) as AllExtrinsicsLenV1,
}

/**
 *  Total length (in bytes) for all extrinsics put together, for the current block.
 */
export interface AllExtrinsicsLenV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const blockHash =  {
    /**
     *  Map of block numbers to block hashes.
     */
    v1: new StorageType('System.BlockHash', 'Default', [sts.number()], v1.H256) as BlockHashV1,
}

/**
 *  Map of block numbers to block hashes.
 */
export interface BlockHashV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.H256
    get(block: Block, key: number): Promise<(v1.H256 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v1.H256 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v1.H256 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v1.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v1.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v1.H256 | undefined)][]>
}

export const extrinsicData =  {
    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    v1: new StorageType('System.ExtrinsicData', 'Default', [sts.number()], sts.bytes()) as ExtrinsicDataV1,
}

/**
 *  Extrinsics data for the current block (maps an extrinsic's index to its data).
 */
export interface ExtrinsicDataV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
    get(block: Block, key: number): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: number[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (Bytes | undefined)][]>
}

export const number =  {
    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    v1: new StorageType('System.Number', 'Default', [], sts.number()) as NumberV1,
}

/**
 *  The current block number being processed. Set by `execute_block`.
 */
export interface NumberV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const parentHash =  {
    /**
     *  Hash of the previous block.
     */
    v1: new StorageType('System.ParentHash', 'Default', [], v1.H256) as ParentHashV1,
}

/**
 *  Hash of the previous block.
 */
export interface ParentHashV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.H256
    get(block: Block): Promise<(v1.H256 | undefined)>
}

export const digest =  {
    /**
     *  Digest of the current block, also part of the block header.
     */
    v1: new StorageType('System.Digest', 'Default', [], v1.Digest) as DigestV1,
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface DigestV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Digest
    get(block: Block): Promise<(v1.Digest | undefined)>
}

export const events =  {
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v1: new StorageType('System.Events', 'Default', [], sts.array(() => v1.EventRecord)) as EventsV1,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v10: new StorageType('System.Events', 'Default', [], sts.array(() => v10.EventRecord)) as EventsV10,
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.EventRecord[]
    get(block: Block): Promise<(v1.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV10  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v10.EventRecord[]
    get(block: Block): Promise<(v10.EventRecord[] | undefined)>
}

export const eventCount =  {
    /**
     *  The number of events in the `Events<T>` list.
     */
    v1: new StorageType('System.EventCount', 'Default', [], sts.number()) as EventCountV1,
}

/**
 *  The number of events in the `Events<T>` list.
 */
export interface EventCountV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const eventTopics =  {
    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     * 
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     * 
     *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    v1: new StorageType('System.EventTopics', 'Default', [v1.H256], sts.array(() => sts.tuple(() => [sts.number(), sts.number()]))) as EventTopicsV1,
}

/**
 *  Mapping between a topic (represented by T::Hash) and a vector of indexes
 *  of events in the `<Events<T>>` list.
 * 
 *  All topic vectors have deterministic storage locations depending on the topic. This
 *  allows light-clients to leverage the changes trie storage tracking mechanism and
 *  in case of changes fetch the list of events of interest.
 * 
 *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
 *  the `EventIndex` then in case if the topic has the same contents on the next block
 *  no notification will be triggered thus the event might be lost.
 */
export interface EventTopicsV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, number][]
    get(block: Block, key: v1.H256): Promise<([number, number][] | undefined)>
    getMany(block: Block, keys: v1.H256[]): Promise<([number, number][] | undefined)[]>
    getKeys(block: Block): Promise<v1.H256[]>
    getKeys(block: Block, key: v1.H256): Promise<v1.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.H256): AsyncIterable<v1.H256[]>
    getPairs(block: Block): Promise<[k: v1.H256, v: ([number, number][] | undefined)][]>
    getPairs(block: Block, key: v1.H256): Promise<[k: v1.H256, v: ([number, number][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.H256, v: ([number, number][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.H256): AsyncIterable<[k: v1.H256, v: ([number, number][] | undefined)][]>
}

export const lastRuntimeUpgrade =  {
    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    v1: new StorageType('System.LastRuntimeUpgrade', 'Optional', [], v1.LastRuntimeUpgradeInfo) as LastRuntimeUpgradeV1,
}

/**
 *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
 */
export interface LastRuntimeUpgradeV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1.LastRuntimeUpgradeInfo | undefined)>
}

export const upgradedToU32RefCount =  {
    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    v1: new StorageType('System.UpgradedToU32RefCount', 'Default', [], sts.boolean()) as UpgradedToU32RefCountV1,
}

/**
 *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
 */
export interface UpgradedToU32RefCountV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const upgradedToTripleRefCount =  {
    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    v1: new StorageType('System.UpgradedToTripleRefCount', 'Default', [], sts.boolean()) as UpgradedToTripleRefCountV1,
}

/**
 *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
 *  (default) if not.
 */
export interface UpgradedToTripleRefCountV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const executionPhase =  {
    /**
     *  The execution phase of the block.
     */
    v1: new StorageType('System.ExecutionPhase', 'Optional', [], v1.Phase) as ExecutionPhaseV1,
}

/**
 *  The execution phase of the block.
 */
export interface ExecutionPhaseV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1.Phase | undefined)>
}
