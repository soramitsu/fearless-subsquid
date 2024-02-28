import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v5 from '../v5'
import * as v7 from '../v7'
import * as v8 from '../v8'
import * as v9 from '../v9'
import * as v14 from '../v14'
import * as v15 from '../v15'
import * as v17 from '../v17'
import * as v18 from '../v18'
import * as v23 from '../v23'
import * as v24 from '../v24'
import * as v25 from '../v25'
import * as v27 from '../v27'
import * as v28 from '../v28'
import * as v29 from '../v29'
import * as v30 from '../v30'
import * as v9050 from '../v9050'
import * as v9080 from '../v9080'
import * as v9090 from '../v9090'
import * as v9110 from '../v9110'
import * as v9122 from '../v9122'
import * as v9140 from '../v9140'
import * as v9170 from '../v9170'
import * as v9180 from '../v9180'
import * as v9190 from '../v9190'
import * as v9200 from '../v9200'
import * as v9220 from '../v9220'
import * as v9230 from '../v9230'
import * as v9250 from '../v9250'
import * as v9260 from '../v9260'
import * as v9280 from '../v9280'
import * as v9291 from '../v9291'
import * as v9300 from '../v9300'
import * as v9340 from '../v9340'
import * as v9360 from '../v9360'
import * as v9370 from '../v9370'
import * as v9420 from '../v9420'
import * as v9430 from '../v9430'
import * as v1000001 from '../v1000001'
import * as v1001002 from '../v1001002'

export const account =  {
    /**
     *  The full account information for a particular account ID.
     */
    v0: new StorageType('System.Account', 'Default', [v0.AccountId], v0.AccountInfo) as AccountV0,
    /**
     *  The full account information for a particular account ID.
     */
    v28: new StorageType('System.Account', 'Default', [v28.AccountId], v28.AccountInfo) as AccountV28,
    /**
     *  The full account information for a particular account ID.
     */
    v30: new StorageType('System.Account', 'Default', [v30.AccountId], v30.AccountInfo) as AccountV30,
    /**
     *  The full account information for a particular account ID.
     */
    v9420: new StorageType('System.Account', 'Default', [v9420.AccountId32], v9420.AccountInfo) as AccountV9420,
}

/**
 *  The full account information for a particular account ID.
 */
export interface AccountV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.AccountInfo
    get(block: Block, key: v0.AccountId): Promise<(v0.AccountInfo | undefined)>
    getMany(block: Block, keys: v0.AccountId[]): Promise<(v0.AccountInfo | undefined)[]>
    getKeys(block: Block): Promise<v0.AccountId[]>
    getKeys(block: Block, key: v0.AccountId): Promise<v0.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.AccountId): AsyncIterable<v0.AccountId[]>
    getPairs(block: Block): Promise<[k: v0.AccountId, v: (v0.AccountInfo | undefined)][]>
    getPairs(block: Block, key: v0.AccountId): Promise<[k: v0.AccountId, v: (v0.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.AccountId, v: (v0.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.AccountId): AsyncIterable<[k: v0.AccountId, v: (v0.AccountInfo | undefined)][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface AccountV28  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v28.AccountInfo
    get(block: Block, key: v28.AccountId): Promise<(v28.AccountInfo | undefined)>
    getMany(block: Block, keys: v28.AccountId[]): Promise<(v28.AccountInfo | undefined)[]>
    getKeys(block: Block): Promise<v28.AccountId[]>
    getKeys(block: Block, key: v28.AccountId): Promise<v28.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v28.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v28.AccountId): AsyncIterable<v28.AccountId[]>
    getPairs(block: Block): Promise<[k: v28.AccountId, v: (v28.AccountInfo | undefined)][]>
    getPairs(block: Block, key: v28.AccountId): Promise<[k: v28.AccountId, v: (v28.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v28.AccountId, v: (v28.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v28.AccountId): AsyncIterable<[k: v28.AccountId, v: (v28.AccountInfo | undefined)][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface AccountV30  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v30.AccountInfo
    get(block: Block, key: v30.AccountId): Promise<(v30.AccountInfo | undefined)>
    getMany(block: Block, keys: v30.AccountId[]): Promise<(v30.AccountInfo | undefined)[]>
    getKeys(block: Block): Promise<v30.AccountId[]>
    getKeys(block: Block, key: v30.AccountId): Promise<v30.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v30.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v30.AccountId): AsyncIterable<v30.AccountId[]>
    getPairs(block: Block): Promise<[k: v30.AccountId, v: (v30.AccountInfo | undefined)][]>
    getPairs(block: Block, key: v30.AccountId): Promise<[k: v30.AccountId, v: (v30.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v30.AccountId, v: (v30.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v30.AccountId): AsyncIterable<[k: v30.AccountId, v: (v30.AccountInfo | undefined)][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface AccountV9420  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9420.AccountInfo
    get(block: Block, key: v9420.AccountId32): Promise<(v9420.AccountInfo | undefined)>
    getMany(block: Block, keys: v9420.AccountId32[]): Promise<(v9420.AccountInfo | undefined)[]>
    getKeys(block: Block): Promise<v9420.AccountId32[]>
    getKeys(block: Block, key: v9420.AccountId32): Promise<v9420.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9420.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9420.AccountId32): AsyncIterable<v9420.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9420.AccountId32, v: (v9420.AccountInfo | undefined)][]>
    getPairs(block: Block, key: v9420.AccountId32): Promise<[k: v9420.AccountId32, v: (v9420.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9420.AccountId32, v: (v9420.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9420.AccountId32): AsyncIterable<[k: v9420.AccountId32, v: (v9420.AccountInfo | undefined)][]>
}

export const extrinsicCount =  {
    /**
     *  Total extrinsics count for the current block.
     */
    v0: new StorageType('System.ExtrinsicCount', 'Optional', [], sts.number()) as ExtrinsicCountV0,
}

/**
 *  Total extrinsics count for the current block.
 */
export interface ExtrinsicCountV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const blockWeight =  {
    /**
     *  The current weight for the block.
     */
    v0: new StorageType('System.BlockWeight', 'Default', [], v0.ExtrinsicsWeight) as BlockWeightV0,
    /**
     *  The current weight for the block.
     */
    v27: new StorageType('System.BlockWeight', 'Default', [], v27.ConsumedWeight) as BlockWeightV27,
    /**
     *  The current weight for the block.
     */
    v9291: new StorageType('System.BlockWeight', 'Default', [], v9291.PerDispatchClass) as BlockWeightV9291,
    /**
     *  The current weight for the block.
     */
    v9340: new StorageType('System.BlockWeight', 'Default', [], v9340.PerDispatchClass) as BlockWeightV9340,
}

/**
 *  The current weight for the block.
 */
export interface BlockWeightV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.ExtrinsicsWeight
    get(block: Block): Promise<(v0.ExtrinsicsWeight | undefined)>
}

/**
 *  The current weight for the block.
 */
export interface BlockWeightV27  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v27.ConsumedWeight
    get(block: Block): Promise<(v27.ConsumedWeight | undefined)>
}

/**
 *  The current weight for the block.
 */
export interface BlockWeightV9291  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9291.PerDispatchClass
    get(block: Block): Promise<(v9291.PerDispatchClass | undefined)>
}

/**
 *  The current weight for the block.
 */
export interface BlockWeightV9340  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9340.PerDispatchClass
    get(block: Block): Promise<(v9340.PerDispatchClass | undefined)>
}

export const allExtrinsicsLen =  {
    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    v0: new StorageType('System.AllExtrinsicsLen', 'Optional', [], sts.number()) as AllExtrinsicsLenV0,
}

/**
 *  Total length (in bytes) for all extrinsics put together, for the current block.
 */
export interface AllExtrinsicsLenV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const blockHash =  {
    /**
     *  Map of block numbers to block hashes.
     */
    v0: new StorageType('System.BlockHash', 'Default', [v0.BlockNumber], v0.Hash) as BlockHashV0,
}

/**
 *  Map of block numbers to block hashes.
 */
export interface BlockHashV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.Hash
    get(block: Block, key: v0.BlockNumber): Promise<(v0.Hash | undefined)>
    getMany(block: Block, keys: v0.BlockNumber[]): Promise<(v0.Hash | undefined)[]>
    getKeys(block: Block): Promise<v0.BlockNumber[]>
    getKeys(block: Block, key: v0.BlockNumber): Promise<v0.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.BlockNumber): AsyncIterable<v0.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v0.BlockNumber, v: (v0.Hash | undefined)][]>
    getPairs(block: Block, key: v0.BlockNumber): Promise<[k: v0.BlockNumber, v: (v0.Hash | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.BlockNumber, v: (v0.Hash | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.BlockNumber): AsyncIterable<[k: v0.BlockNumber, v: (v0.Hash | undefined)][]>
}

export const extrinsicData =  {
    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    v0: new StorageType('System.ExtrinsicData', 'Default', [sts.number()], sts.bytes()) as ExtrinsicDataV0,
}

/**
 *  Extrinsics data for the current block (maps an extrinsic's index to its data).
 */
export interface ExtrinsicDataV0  {
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
    v0: new StorageType('System.Number', 'Default', [], v0.BlockNumber) as NumberV0,
}

/**
 *  The current block number being processed. Set by `execute_block`.
 */
export interface NumberV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.BlockNumber
    get(block: Block): Promise<(v0.BlockNumber | undefined)>
}

export const parentHash =  {
    /**
     *  Hash of the previous block.
     */
    v0: new StorageType('System.ParentHash', 'Default', [], v0.Hash) as ParentHashV0,
}

/**
 *  Hash of the previous block.
 */
export interface ParentHashV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.Hash
    get(block: Block): Promise<(v0.Hash | undefined)>
}

export const extrinsicsRoot =  {
    /**
     *  Extrinsics root of the current block, also part of the block header.
     */
    v0: new StorageType('System.ExtrinsicsRoot', 'Default', [], v0.Hash) as ExtrinsicsRootV0,
}

/**
 *  Extrinsics root of the current block, also part of the block header.
 */
export interface ExtrinsicsRootV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.Hash
    get(block: Block): Promise<(v0.Hash | undefined)>
}

export const digest =  {
    /**
     *  Digest of the current block, also part of the block header.
     */
    v0: new StorageType('System.Digest', 'Default', [], v0.DigestOf) as DigestV0,
    /**
     *  Digest of the current block, also part of the block header.
     */
    v9110: new StorageType('System.Digest', 'Default', [], v9110.Digest) as DigestV9110,
    /**
     *  Digest of the current block, also part of the block header.
     */
    v9140: new StorageType('System.Digest', 'Default', [], v9140.Digest) as DigestV9140,
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface DigestV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.DigestOf
    get(block: Block): Promise<(v0.DigestOf | undefined)>
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface DigestV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9110.Digest
    get(block: Block): Promise<(v9110.Digest | undefined)>
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface DigestV9140  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9140.Digest
    get(block: Block): Promise<(v9140.Digest | undefined)>
}

export const events =  {
    /**
     *  Events deposited for the current block.
     */
    v0: new StorageType('System.Events', 'Default', [], sts.array(() => v0.EventRecord)) as EventsV0,
    /**
     *  Events deposited for the current block.
     */
    v5: new StorageType('System.Events', 'Default', [], sts.array(() => v5.EventRecord)) as EventsV5,
    /**
     *  Events deposited for the current block.
     */
    v7: new StorageType('System.Events', 'Default', [], sts.array(() => v7.EventRecord)) as EventsV7,
    /**
     *  Events deposited for the current block.
     */
    v8: new StorageType('System.Events', 'Default', [], sts.array(() => v8.EventRecord)) as EventsV8,
    /**
     *  Events deposited for the current block.
     */
    v9: new StorageType('System.Events', 'Default', [], sts.array(() => v9.EventRecord)) as EventsV9,
    /**
     *  Events deposited for the current block.
     */
    v14: new StorageType('System.Events', 'Default', [], sts.array(() => v14.EventRecord)) as EventsV14,
    /**
     *  Events deposited for the current block.
     */
    v15: new StorageType('System.Events', 'Default', [], sts.array(() => v15.EventRecord)) as EventsV15,
    /**
     *  Events deposited for the current block.
     */
    v17: new StorageType('System.Events', 'Default', [], sts.array(() => v17.EventRecord)) as EventsV17,
    /**
     *  Events deposited for the current block.
     */
    v18: new StorageType('System.Events', 'Default', [], sts.array(() => v18.EventRecord)) as EventsV18,
    /**
     *  Events deposited for the current block.
     */
    v23: new StorageType('System.Events', 'Default', [], sts.array(() => v23.EventRecord)) as EventsV23,
    /**
     *  Events deposited for the current block.
     */
    v24: new StorageType('System.Events', 'Default', [], sts.array(() => v24.EventRecord)) as EventsV24,
    /**
     *  Events deposited for the current block.
     */
    v25: new StorageType('System.Events', 'Default', [], sts.array(() => v25.EventRecord)) as EventsV25,
    /**
     *  Events deposited for the current block.
     */
    v27: new StorageType('System.Events', 'Default', [], sts.array(() => v27.EventRecord)) as EventsV27,
    /**
     *  Events deposited for the current block.
     */
    v28: new StorageType('System.Events', 'Default', [], sts.array(() => v28.EventRecord)) as EventsV28,
    /**
     *  Events deposited for the current block.
     */
    v29: new StorageType('System.Events', 'Default', [], sts.array(() => v29.EventRecord)) as EventsV29,
    /**
     *  Events deposited for the current block.
     */
    v30: new StorageType('System.Events', 'Default', [], sts.array(() => v30.EventRecord)) as EventsV30,
    /**
     *  Events deposited for the current block.
     */
    v9050: new StorageType('System.Events', 'Default', [], sts.array(() => v9050.EventRecord)) as EventsV9050,
    /**
     *  Events deposited for the current block.
     */
    v9080: new StorageType('System.Events', 'Default', [], sts.array(() => v9080.EventRecord)) as EventsV9080,
    /**
     *  Events deposited for the current block.
     */
    v9090: new StorageType('System.Events', 'Default', [], sts.array(() => v9090.EventRecord)) as EventsV9090,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    v9110: new StorageType('System.Events', 'Default', [], sts.array(() => v9110.EventRecord)) as EventsV9110,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    v9122: new StorageType('System.Events', 'Default', [], sts.array(() => v9122.EventRecord)) as EventsV9122,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    v9140: new StorageType('System.Events', 'Default', [], sts.array(() => v9140.EventRecord)) as EventsV9140,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    v9170: new StorageType('System.Events', 'Default', [], sts.array(() => v9170.EventRecord)) as EventsV9170,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    v9180: new StorageType('System.Events', 'Default', [], sts.array(() => v9180.EventRecord)) as EventsV9180,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    v9190: new StorageType('System.Events', 'Default', [], sts.array(() => v9190.EventRecord)) as EventsV9190,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v9200: new StorageType('System.Events', 'Default', [], sts.array(() => v9200.EventRecord)) as EventsV9200,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v9220: new StorageType('System.Events', 'Default', [], sts.array(() => v9220.EventRecord)) as EventsV9220,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v9230: new StorageType('System.Events', 'Default', [], sts.array(() => v9230.EventRecord)) as EventsV9230,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v9250: new StorageType('System.Events', 'Default', [], sts.array(() => v9250.EventRecord)) as EventsV9250,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v9260: new StorageType('System.Events', 'Default', [], sts.array(() => v9260.EventRecord)) as EventsV9260,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v9280: new StorageType('System.Events', 'Default', [], sts.array(() => v9280.EventRecord)) as EventsV9280,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v9291: new StorageType('System.Events', 'Default', [], sts.array(() => v9291.EventRecord)) as EventsV9291,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v9300: new StorageType('System.Events', 'Default', [], sts.array(() => v9300.EventRecord)) as EventsV9300,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v9340: new StorageType('System.Events', 'Default', [], sts.array(() => v9340.EventRecord)) as EventsV9340,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v9360: new StorageType('System.Events', 'Default', [], sts.array(() => v9360.EventRecord)) as EventsV9360,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v9370: new StorageType('System.Events', 'Default', [], sts.array(() => v9370.EventRecord)) as EventsV9370,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v9420: new StorageType('System.Events', 'Default', [], sts.array(() => v9420.EventRecord)) as EventsV9420,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v9430: new StorageType('System.Events', 'Default', [], sts.array(() => v9430.EventRecord)) as EventsV9430,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v1000001: new StorageType('System.Events', 'Default', [], sts.array(() => v1000001.EventRecord)) as EventsV1000001,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v1001002: new StorageType('System.Events', 'Default', [], sts.array(() => v1001002.EventRecord)) as EventsV1001002,
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.EventRecord[]
    get(block: Block): Promise<(v0.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV5  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v5.EventRecord[]
    get(block: Block): Promise<(v5.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV7  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v7.EventRecord[]
    get(block: Block): Promise<(v7.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV8  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v8.EventRecord[]
    get(block: Block): Promise<(v8.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV9  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9.EventRecord[]
    get(block: Block): Promise<(v9.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV14  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v14.EventRecord[]
    get(block: Block): Promise<(v14.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV15  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v15.EventRecord[]
    get(block: Block): Promise<(v15.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV17  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v17.EventRecord[]
    get(block: Block): Promise<(v17.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV18  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v18.EventRecord[]
    get(block: Block): Promise<(v18.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV23  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v23.EventRecord[]
    get(block: Block): Promise<(v23.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v24.EventRecord[]
    get(block: Block): Promise<(v24.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV25  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v25.EventRecord[]
    get(block: Block): Promise<(v25.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV27  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v27.EventRecord[]
    get(block: Block): Promise<(v27.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV28  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v28.EventRecord[]
    get(block: Block): Promise<(v28.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV29  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v29.EventRecord[]
    get(block: Block): Promise<(v29.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV30  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v30.EventRecord[]
    get(block: Block): Promise<(v30.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV9050  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9050.EventRecord[]
    get(block: Block): Promise<(v9050.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV9080  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9080.EventRecord[]
    get(block: Block): Promise<(v9080.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV9090  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9090.EventRecord[]
    get(block: Block): Promise<(v9090.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface EventsV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9110.EventRecord[]
    get(block: Block): Promise<(v9110.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface EventsV9122  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9122.EventRecord[]
    get(block: Block): Promise<(v9122.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface EventsV9140  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9140.EventRecord[]
    get(block: Block): Promise<(v9140.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface EventsV9170  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9170.EventRecord[]
    get(block: Block): Promise<(v9170.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface EventsV9180  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9180.EventRecord[]
    get(block: Block): Promise<(v9180.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface EventsV9190  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9190.EventRecord[]
    get(block: Block): Promise<(v9190.EventRecord[] | undefined)>
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
export interface EventsV9200  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9200.EventRecord[]
    get(block: Block): Promise<(v9200.EventRecord[] | undefined)>
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
export interface EventsV9220  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9220.EventRecord[]
    get(block: Block): Promise<(v9220.EventRecord[] | undefined)>
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
export interface EventsV9230  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9230.EventRecord[]
    get(block: Block): Promise<(v9230.EventRecord[] | undefined)>
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
export interface EventsV9250  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9250.EventRecord[]
    get(block: Block): Promise<(v9250.EventRecord[] | undefined)>
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
export interface EventsV9260  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9260.EventRecord[]
    get(block: Block): Promise<(v9260.EventRecord[] | undefined)>
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
export interface EventsV9280  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9280.EventRecord[]
    get(block: Block): Promise<(v9280.EventRecord[] | undefined)>
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
export interface EventsV9291  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9291.EventRecord[]
    get(block: Block): Promise<(v9291.EventRecord[] | undefined)>
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
export interface EventsV9300  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9300.EventRecord[]
    get(block: Block): Promise<(v9300.EventRecord[] | undefined)>
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
export interface EventsV9340  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9340.EventRecord[]
    get(block: Block): Promise<(v9340.EventRecord[] | undefined)>
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
export interface EventsV9360  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9360.EventRecord[]
    get(block: Block): Promise<(v9360.EventRecord[] | undefined)>
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
export interface EventsV9370  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9370.EventRecord[]
    get(block: Block): Promise<(v9370.EventRecord[] | undefined)>
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
export interface EventsV9420  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9420.EventRecord[]
    get(block: Block): Promise<(v9420.EventRecord[] | undefined)>
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
export interface EventsV9430  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9430.EventRecord[]
    get(block: Block): Promise<(v9430.EventRecord[] | undefined)>
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
export interface EventsV1000001  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1000001.EventRecord[]
    get(block: Block): Promise<(v1000001.EventRecord[] | undefined)>
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
export interface EventsV1001002  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1001002.EventRecord[]
    get(block: Block): Promise<(v1001002.EventRecord[] | undefined)>
}

export const eventCount =  {
    /**
     *  The number of events in the `Events<T>` list.
     */
    v0: new StorageType('System.EventCount', 'Default', [], v0.EventIndex) as EventCountV0,
}

/**
 *  The number of events in the `Events<T>` list.
 */
export interface EventCountV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.EventIndex
    get(block: Block): Promise<(v0.EventIndex | undefined)>
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
    v0: new StorageType('System.EventTopics', 'Default', [v0.Hash], sts.array(() => sts.tuple(() => [v0.BlockNumber, v0.EventIndex]))) as EventTopicsV0,
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
export interface EventTopicsV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v0.BlockNumber, v0.EventIndex][]
    get(block: Block, key: v0.Hash): Promise<([v0.BlockNumber, v0.EventIndex][] | undefined)>
    getMany(block: Block, keys: v0.Hash[]): Promise<([v0.BlockNumber, v0.EventIndex][] | undefined)[]>
    getKeys(block: Block): Promise<v0.Hash[]>
    getKeys(block: Block, key: v0.Hash): Promise<v0.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.Hash): AsyncIterable<v0.Hash[]>
    getPairs(block: Block): Promise<[k: v0.Hash, v: ([v0.BlockNumber, v0.EventIndex][] | undefined)][]>
    getPairs(block: Block, key: v0.Hash): Promise<[k: v0.Hash, v: ([v0.BlockNumber, v0.EventIndex][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.Hash, v: ([v0.BlockNumber, v0.EventIndex][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.Hash): AsyncIterable<[k: v0.Hash, v: ([v0.BlockNumber, v0.EventIndex][] | undefined)][]>
}

export const lastRuntimeUpgrade =  {
    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    v0: new StorageType('System.LastRuntimeUpgrade', 'Optional', [], v0.LastRuntimeUpgradeInfo) as LastRuntimeUpgradeV0,
}

/**
 *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
 */
export interface LastRuntimeUpgradeV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v0.LastRuntimeUpgradeInfo | undefined)>
}

export const executionPhase =  {
    /**
     *  The execution phase of the block.
     */
    v0: new StorageType('System.ExecutionPhase', 'Optional', [], v0.Phase) as ExecutionPhaseV0,
}

/**
 *  The execution phase of the block.
 */
export interface ExecutionPhaseV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v0.Phase | undefined)>
}

export const upgradedToU32RefCount =  {
    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    v25: new StorageType('System.UpgradedToU32RefCount', 'Default', [], sts.boolean()) as UpgradedToU32RefCountV25,
}

/**
 *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
 */
export interface UpgradedToU32RefCountV25  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const upgradedToDualRefCount =  {
    /**
     *  True if we have upgraded so that AccountInfo contains two types of `RefCount`. False
     *  (default) if not.
     */
    v28: new StorageType('System.UpgradedToDualRefCount', 'Default', [], sts.boolean()) as UpgradedToDualRefCountV28,
}

/**
 *  True if we have upgraded so that AccountInfo contains two types of `RefCount`. False
 *  (default) if not.
 */
export interface UpgradedToDualRefCountV28  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const upgradedToTripleRefCount =  {
    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    v30: new StorageType('System.UpgradedToTripleRefCount', 'Default', [], sts.boolean()) as UpgradedToTripleRefCountV30,
}

/**
 *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
 *  (default) if not.
 */
export interface UpgradedToTripleRefCountV30  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}
