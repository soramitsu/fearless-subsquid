import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v1022 from '../v1022'
import * as v1027 from '../v1027'
import * as v1029 from '../v1029'
import * as v1030 from '../v1030'
import * as v1031 from '../v1031'
import * as v1032 from '../v1032'
import * as v1038 from '../v1038'
import * as v1040 from '../v1040'
import * as v1042 from '../v1042'
import * as v1045 from '../v1045'
import * as v1050 from '../v1050'
import * as v1051 from '../v1051'
import * as v1053 from '../v1053'
import * as v1055 from '../v1055'
import * as v1058 from '../v1058'
import * as v1062 from '../v1062'
import * as v2005 from '../v2005'
import * as v2007 from '../v2007'
import * as v2008 from '../v2008'
import * as v2011 from '../v2011'
import * as v2015 from '../v2015'
import * as v2023 from '../v2023'
import * as v2024 from '../v2024'
import * as v2025 from '../v2025'
import * as v2027 from '../v2027'
import * as v2028 from '../v2028'
import * as v2029 from '../v2029'
import * as v2030 from '../v2030'
import * as v9010 from '../v9010'
import * as v9040 from '../v9040'
import * as v9050 from '../v9050'
import * as v9080 from '../v9080'
import * as v9090 from '../v9090'
import * as v9100 from '../v9100'
import * as v9111 from '../v9111'
import * as v9122 from '../v9122'
import * as v9130 from '../v9130'
import * as v9160 from '../v9160'
import * as v9170 from '../v9170'
import * as v9180 from '../v9180'
import * as v9190 from '../v9190'
import * as v9200 from '../v9200'
import * as v9220 from '../v9220'
import * as v9230 from '../v9230'
import * as v9250 from '../v9250'
import * as v9260 from '../v9260'
import * as v9271 from '../v9271'
import * as v9291 from '../v9291'
import * as v9300 from '../v9300'
import * as v9320 from '../v9320'
import * as v9340 from '../v9340'
import * as v9350 from '../v9350'
import * as v9370 from '../v9370'
import * as v9381 from '../v9381'
import * as v9420 from '../v9420'
import * as v9430 from '../v9430'
import * as v1000000 from '../v1000000'
import * as v1001000 from '../v1001000'

export const accountNonce =  {
    /**
     *  Extrinsics nonce for accounts.
     */
    v1020: new StorageType('System.AccountNonce', 'Default', [v1020.AccountId], v1020.Index) as AccountNonceV1020,
}

/**
 *  Extrinsics nonce for accounts.
 */
export interface AccountNonceV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.Index
    get(block: Block, key: v1020.AccountId): Promise<(v1020.Index | undefined)>
    getMany(block: Block, keys: v1020.AccountId[]): Promise<(v1020.Index | undefined)[]>
}

export const extrinsicCount =  {
    /**
     *  Total extrinsics count for the current block.
     */
    v1020: new StorageType('System.ExtrinsicCount', 'Optional', [], sts.number()) as ExtrinsicCountV1020,
}

/**
 *  Total extrinsics count for the current block.
 */
export interface ExtrinsicCountV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const allExtrinsicsWeight =  {
    /**
     *  Total weight for all extrinsics put together, for the current block.
     */
    v1020: new StorageType('System.AllExtrinsicsWeight', 'Optional', [], v1020.Weight) as AllExtrinsicsWeightV1020,
    /**
     *  Total weight for all extrinsics put together, for the current block.
     */
    v1058: new StorageType('System.AllExtrinsicsWeight', 'Optional', [], v1058.Weight) as AllExtrinsicsWeightV1058,
}

/**
 *  Total weight for all extrinsics put together, for the current block.
 */
export interface AllExtrinsicsWeightV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1020.Weight | undefined)>
}

/**
 *  Total weight for all extrinsics put together, for the current block.
 */
export interface AllExtrinsicsWeightV1058  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1058.Weight | undefined)>
}

export const allExtrinsicsLen =  {
    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    v1020: new StorageType('System.AllExtrinsicsLen', 'Optional', [], sts.number()) as AllExtrinsicsLenV1020,
}

/**
 *  Total length (in bytes) for all extrinsics put together, for the current block.
 */
export interface AllExtrinsicsLenV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const blockHash =  {
    /**
     *  Map of block numbers to block hashes.
     */
    v1020: new StorageType('System.BlockHash', 'Default', [v1020.BlockNumber], v1020.Hash) as BlockHashV1020,
}

/**
 *  Map of block numbers to block hashes.
 */
export interface BlockHashV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.Hash
    get(block: Block, key: v1020.BlockNumber): Promise<(v1020.Hash | undefined)>
    getMany(block: Block, keys: v1020.BlockNumber[]): Promise<(v1020.Hash | undefined)[]>
}

export const extrinsicData =  {
    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    v1020: new StorageType('System.ExtrinsicData', 'Default', [sts.number()], sts.bytes()) as ExtrinsicDataV1020,
}

/**
 *  Extrinsics data for the current block (maps an extrinsic's index to its data).
 */
export interface ExtrinsicDataV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
    get(block: Block, key: number): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: number[]): Promise<(Bytes | undefined)[]>
}

export const number =  {
    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    v1020: new StorageType('System.Number', 'Default', [], v1020.BlockNumber) as NumberV1020,
}

/**
 *  The current block number being processed. Set by `execute_block`.
 */
export interface NumberV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.BlockNumber
    get(block: Block): Promise<(v1020.BlockNumber | undefined)>
}

export const parentHash =  {
    /**
     *  Hash of the previous block.
     */
    v1020: new StorageType('System.ParentHash', 'Default', [], v1020.Hash) as ParentHashV1020,
}

/**
 *  Hash of the previous block.
 */
export interface ParentHashV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.Hash
    get(block: Block): Promise<(v1020.Hash | undefined)>
}

export const extrinsicsRoot =  {
    /**
     *  Extrinsics root of the current block, also part of the block header.
     */
    v1020: new StorageType('System.ExtrinsicsRoot', 'Default', [], v1020.Hash) as ExtrinsicsRootV1020,
}

/**
 *  Extrinsics root of the current block, also part of the block header.
 */
export interface ExtrinsicsRootV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.Hash
    get(block: Block): Promise<(v1020.Hash | undefined)>
}

export const digest =  {
    /**
     *  Digest of the current block, also part of the block header.
     */
    v1020: new StorageType('System.Digest', 'Default', [], v1020.DigestOf) as DigestV1020,
    /**
     *  Digest of the current block, also part of the block header.
     */
    v9111: new StorageType('System.Digest', 'Default', [], v9111.Digest) as DigestV9111,
    /**
     *  Digest of the current block, also part of the block header.
     */
    v9130: new StorageType('System.Digest', 'Default', [], v9130.Digest) as DigestV9130,
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface DigestV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.DigestOf
    get(block: Block): Promise<(v1020.DigestOf | undefined)>
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface DigestV9111  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9111.Digest
    get(block: Block): Promise<(v9111.Digest | undefined)>
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface DigestV9130  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9130.Digest
    get(block: Block): Promise<(v9130.Digest | undefined)>
}

export const events =  {
    /**
     *  Events deposited for the current block.
     */
    v1020: new StorageType('System.Events', 'Default', [], sts.array(() => v1020.EventRecord)) as EventsV1020,
    /**
     *  Events deposited for the current block.
     */
    v1022: new StorageType('System.Events', 'Default', [], sts.array(() => v1022.EventRecord)) as EventsV1022,
    /**
     *  Events deposited for the current block.
     */
    v1027: new StorageType('System.Events', 'Default', [], sts.array(() => v1027.EventRecord)) as EventsV1027,
    /**
     *  Events deposited for the current block.
     */
    v1029: new StorageType('System.Events', 'Default', [], sts.array(() => v1029.EventRecord)) as EventsV1029,
    /**
     *  Events deposited for the current block.
     */
    v1030: new StorageType('System.Events', 'Default', [], sts.array(() => v1030.EventRecord)) as EventsV1030,
    /**
     *  Events deposited for the current block.
     */
    v1031: new StorageType('System.Events', 'Default', [], sts.array(() => v1031.EventRecord)) as EventsV1031,
    /**
     *  Events deposited for the current block.
     */
    v1032: new StorageType('System.Events', 'Default', [], sts.array(() => v1032.EventRecord)) as EventsV1032,
    /**
     *  Events deposited for the current block.
     */
    v1038: new StorageType('System.Events', 'Default', [], sts.array(() => v1038.EventRecord)) as EventsV1038,
    /**
     *  Events deposited for the current block.
     */
    v1040: new StorageType('System.Events', 'Default', [], sts.array(() => v1040.EventRecord)) as EventsV1040,
    /**
     *  Events deposited for the current block.
     */
    v1042: new StorageType('System.Events', 'Default', [], sts.array(() => v1042.EventRecord)) as EventsV1042,
    /**
     *  Events deposited for the current block.
     */
    v1045: new StorageType('System.Events', 'Default', [], sts.array(() => v1045.EventRecord)) as EventsV1045,
    /**
     *  Events deposited for the current block.
     */
    v1050: new StorageType('System.Events', 'Default', [], sts.array(() => v1050.EventRecord)) as EventsV1050,
    /**
     *  Events deposited for the current block.
     */
    v1051: new StorageType('System.Events', 'Default', [], sts.array(() => v1051.EventRecord)) as EventsV1051,
    /**
     *  Events deposited for the current block.
     */
    v1058: new StorageType('System.Events', 'Default', [], sts.array(() => v1058.EventRecord)) as EventsV1058,
    /**
     *  Events deposited for the current block.
     */
    v1062: new StorageType('System.Events', 'Default', [], sts.array(() => v1062.EventRecord)) as EventsV1062,
    /**
     *  Events deposited for the current block.
     */
    v2005: new StorageType('System.Events', 'Default', [], sts.array(() => v2005.EventRecord)) as EventsV2005,
    /**
     *  Events deposited for the current block.
     */
    v2007: new StorageType('System.Events', 'Default', [], sts.array(() => v2007.EventRecord)) as EventsV2007,
    /**
     *  Events deposited for the current block.
     */
    v2008: new StorageType('System.Events', 'Default', [], sts.array(() => v2008.EventRecord)) as EventsV2008,
    /**
     *  Events deposited for the current block.
     */
    v2011: new StorageType('System.Events', 'Default', [], sts.array(() => v2011.EventRecord)) as EventsV2011,
    /**
     *  Events deposited for the current block.
     */
    v2015: new StorageType('System.Events', 'Default', [], sts.array(() => v2015.EventRecord)) as EventsV2015,
    /**
     *  Events deposited for the current block.
     */
    v2023: new StorageType('System.Events', 'Default', [], sts.array(() => v2023.EventRecord)) as EventsV2023,
    /**
     *  Events deposited for the current block.
     */
    v2024: new StorageType('System.Events', 'Default', [], sts.array(() => v2024.EventRecord)) as EventsV2024,
    /**
     *  Events deposited for the current block.
     */
    v2025: new StorageType('System.Events', 'Default', [], sts.array(() => v2025.EventRecord)) as EventsV2025,
    /**
     *  Events deposited for the current block.
     */
    v2027: new StorageType('System.Events', 'Default', [], sts.array(() => v2027.EventRecord)) as EventsV2027,
    /**
     *  Events deposited for the current block.
     */
    v2028: new StorageType('System.Events', 'Default', [], sts.array(() => v2028.EventRecord)) as EventsV2028,
    /**
     *  Events deposited for the current block.
     */
    v2029: new StorageType('System.Events', 'Default', [], sts.array(() => v2029.EventRecord)) as EventsV2029,
    /**
     *  Events deposited for the current block.
     */
    v2030: new StorageType('System.Events', 'Default', [], sts.array(() => v2030.EventRecord)) as EventsV2030,
    /**
     *  Events deposited for the current block.
     */
    v9010: new StorageType('System.Events', 'Default', [], sts.array(() => v9010.EventRecord)) as EventsV9010,
    /**
     *  Events deposited for the current block.
     */
    v9040: new StorageType('System.Events', 'Default', [], sts.array(() => v9040.EventRecord)) as EventsV9040,
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
     */
    v9100: new StorageType('System.Events', 'Default', [], sts.array(() => v9100.EventRecord)) as EventsV9100,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    v9111: new StorageType('System.Events', 'Default', [], sts.array(() => v9111.EventRecord)) as EventsV9111,
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
    v9130: new StorageType('System.Events', 'Default', [], sts.array(() => v9130.EventRecord)) as EventsV9130,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    v9160: new StorageType('System.Events', 'Default', [], sts.array(() => v9160.EventRecord)) as EventsV9160,
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
    v9271: new StorageType('System.Events', 'Default', [], sts.array(() => v9271.EventRecord)) as EventsV9271,
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
    v9320: new StorageType('System.Events', 'Default', [], sts.array(() => v9320.EventRecord)) as EventsV9320,
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
    v9350: new StorageType('System.Events', 'Default', [], sts.array(() => v9350.EventRecord)) as EventsV9350,
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
    v9381: new StorageType('System.Events', 'Default', [], sts.array(() => v9381.EventRecord)) as EventsV9381,
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
    v1000000: new StorageType('System.Events', 'Default', [], sts.array(() => v1000000.EventRecord)) as EventsV1000000,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v1001000: new StorageType('System.Events', 'Default', [], sts.array(() => v1001000.EventRecord)) as EventsV1001000,
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.EventRecord[]
    get(block: Block): Promise<(v1020.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV1022  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1022.EventRecord[]
    get(block: Block): Promise<(v1022.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV1027  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1027.EventRecord[]
    get(block: Block): Promise<(v1027.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV1029  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1029.EventRecord[]
    get(block: Block): Promise<(v1029.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV1030  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1030.EventRecord[]
    get(block: Block): Promise<(v1030.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV1031  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1031.EventRecord[]
    get(block: Block): Promise<(v1031.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV1032  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1032.EventRecord[]
    get(block: Block): Promise<(v1032.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV1038  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1038.EventRecord[]
    get(block: Block): Promise<(v1038.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV1040  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1040.EventRecord[]
    get(block: Block): Promise<(v1040.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV1042  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1042.EventRecord[]
    get(block: Block): Promise<(v1042.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV1045  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1045.EventRecord[]
    get(block: Block): Promise<(v1045.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV1050  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1050.EventRecord[]
    get(block: Block): Promise<(v1050.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV1051  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1051.EventRecord[]
    get(block: Block): Promise<(v1051.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV1058  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1058.EventRecord[]
    get(block: Block): Promise<(v1058.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV1062  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1062.EventRecord[]
    get(block: Block): Promise<(v1062.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV2005  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v2005.EventRecord[]
    get(block: Block): Promise<(v2005.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV2007  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v2007.EventRecord[]
    get(block: Block): Promise<(v2007.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV2008  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v2008.EventRecord[]
    get(block: Block): Promise<(v2008.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV2011  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v2011.EventRecord[]
    get(block: Block): Promise<(v2011.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV2015  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v2015.EventRecord[]
    get(block: Block): Promise<(v2015.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV2023  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v2023.EventRecord[]
    get(block: Block): Promise<(v2023.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV2024  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v2024.EventRecord[]
    get(block: Block): Promise<(v2024.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV2025  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v2025.EventRecord[]
    get(block: Block): Promise<(v2025.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV2027  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v2027.EventRecord[]
    get(block: Block): Promise<(v2027.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV2028  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v2028.EventRecord[]
    get(block: Block): Promise<(v2028.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV2029  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v2029.EventRecord[]
    get(block: Block): Promise<(v2029.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV2030  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v2030.EventRecord[]
    get(block: Block): Promise<(v2030.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9010.EventRecord[]
    get(block: Block): Promise<(v9010.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV9040  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9040.EventRecord[]
    get(block: Block): Promise<(v9040.EventRecord[] | undefined)>
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
 */
export interface EventsV9100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9100.EventRecord[]
    get(block: Block): Promise<(v9100.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface EventsV9111  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9111.EventRecord[]
    get(block: Block): Promise<(v9111.EventRecord[] | undefined)>
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
export interface EventsV9130  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9130.EventRecord[]
    get(block: Block): Promise<(v9130.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface EventsV9160  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9160.EventRecord[]
    get(block: Block): Promise<(v9160.EventRecord[] | undefined)>
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
export interface EventsV9271  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9271.EventRecord[]
    get(block: Block): Promise<(v9271.EventRecord[] | undefined)>
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
export interface EventsV9320  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9320.EventRecord[]
    get(block: Block): Promise<(v9320.EventRecord[] | undefined)>
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
export interface EventsV9350  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9350.EventRecord[]
    get(block: Block): Promise<(v9350.EventRecord[] | undefined)>
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
export interface EventsV9381  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9381.EventRecord[]
    get(block: Block): Promise<(v9381.EventRecord[] | undefined)>
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
export interface EventsV1000000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1000000.EventRecord[]
    get(block: Block): Promise<(v1000000.EventRecord[] | undefined)>
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
export interface EventsV1001000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1001000.EventRecord[]
    get(block: Block): Promise<(v1001000.EventRecord[] | undefined)>
}

export const eventCount =  {
    /**
     *  The number of events in the `Events<T>` list.
     */
    v1020: new StorageType('System.EventCount', 'Default', [], v1020.EventIndex) as EventCountV1020,
}

/**
 *  The number of events in the `Events<T>` list.
 */
export interface EventCountV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.EventIndex
    get(block: Block): Promise<(v1020.EventIndex | undefined)>
}

export const eventTopics =  {
    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     * 
     *  The first key serves no purpose. This field is declared as double_map just
     *  for convenience of using `remove_prefix`.
     * 
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     * 
     *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    v1020: new StorageType('System.EventTopics', 'Default', [sts.unit(), v1020.Hash], sts.array(() => sts.tuple(() => [v1020.BlockNumber, v1020.EventIndex]))) as EventTopicsV1020,
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
    v1038: new StorageType('System.EventTopics', 'Default', [v1038.Hash], sts.array(() => sts.tuple(() => [v1038.BlockNumber, v1038.EventIndex]))) as EventTopicsV1038,
}

/**
 *  Mapping between a topic (represented by T::Hash) and a vector of indexes
 *  of events in the `<Events<T>>` list.
 * 
 *  The first key serves no purpose. This field is declared as double_map just
 *  for convenience of using `remove_prefix`.
 * 
 *  All topic vectors have deterministic storage locations depending on the topic. This
 *  allows light-clients to leverage the changes trie storage tracking mechanism and
 *  in case of changes fetch the list of events of interest.
 * 
 *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
 *  the `EventIndex` then in case if the topic has the same contents on the next block
 *  no notification will be triggered thus the event might be lost.
 */
export interface EventTopicsV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1020.BlockNumber, v1020.EventIndex][]
    get(block: Block, key1: null, key2: v1020.Hash): Promise<([v1020.BlockNumber, v1020.EventIndex][] | undefined)>
    getMany(block: Block, keys: [null, v1020.Hash][]): Promise<([v1020.BlockNumber, v1020.EventIndex][] | undefined)[]>
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
export interface EventTopicsV1038  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1038.BlockNumber, v1038.EventIndex][]
    get(block: Block, key: v1038.Hash): Promise<([v1038.BlockNumber, v1038.EventIndex][] | undefined)>
    getMany(block: Block, keys: v1038.Hash[]): Promise<([v1038.BlockNumber, v1038.EventIndex][] | undefined)[]>
}

export const account =  {
    /**
     *  The full account information for a particular account ID.
     */
    v1050: new StorageType('System.Account', 'Default', [v1050.AccountId], v1050.AccountInfo) as AccountV1050,
    /**
     *  The full account information for a particular account ID.
     */
    v2028: new StorageType('System.Account', 'Default', [v2028.AccountId], v2028.AccountInfo) as AccountV2028,
    /**
     *  The full account information for a particular account ID.
     */
    v2030: new StorageType('System.Account', 'Default', [v2030.AccountId], v2030.AccountInfo) as AccountV2030,
    /**
     *  The full account information for a particular account ID.
     */
    v9420: new StorageType('System.Account', 'Default', [v9420.AccountId32], v9420.AccountInfo) as AccountV9420,
}

/**
 *  The full account information for a particular account ID.
 */
export interface AccountV1050  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1050.AccountInfo
    get(block: Block, key: v1050.AccountId): Promise<(v1050.AccountInfo | undefined)>
    getMany(block: Block, keys: v1050.AccountId[]): Promise<(v1050.AccountInfo | undefined)[]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface AccountV2028  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v2028.AccountInfo
    get(block: Block, key: v2028.AccountId): Promise<(v2028.AccountInfo | undefined)>
    getMany(block: Block, keys: v2028.AccountId[]): Promise<(v2028.AccountInfo | undefined)[]>
    getKeys(block: Block): Promise<v2028.AccountId[]>
    getKeys(block: Block, key: v2028.AccountId): Promise<v2028.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2028.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v2028.AccountId): AsyncIterable<v2028.AccountId[]>
    getPairs(block: Block): Promise<[k: v2028.AccountId, v: (v2028.AccountInfo | undefined)][]>
    getPairs(block: Block, key: v2028.AccountId): Promise<[k: v2028.AccountId, v: (v2028.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2028.AccountId, v: (v2028.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2028.AccountId): AsyncIterable<[k: v2028.AccountId, v: (v2028.AccountInfo | undefined)][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface AccountV2030  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v2030.AccountInfo
    get(block: Block, key: v2030.AccountId): Promise<(v2030.AccountInfo | undefined)>
    getMany(block: Block, keys: v2030.AccountId[]): Promise<(v2030.AccountInfo | undefined)[]>
    getKeys(block: Block): Promise<v2030.AccountId[]>
    getKeys(block: Block, key: v2030.AccountId): Promise<v2030.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2030.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v2030.AccountId): AsyncIterable<v2030.AccountId[]>
    getPairs(block: Block): Promise<[k: v2030.AccountId, v: (v2030.AccountInfo | undefined)][]>
    getPairs(block: Block, key: v2030.AccountId): Promise<[k: v2030.AccountId, v: (v2030.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2030.AccountId, v: (v2030.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2030.AccountId): AsyncIterable<[k: v2030.AccountId, v: (v2030.AccountInfo | undefined)][]>
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

export const runtimeUpgraded =  {
    /**
     *  A bool to track if the runtime was upgraded last block.
     */
    v1050: new StorageType('System.RuntimeUpgraded', 'Default', [], sts.boolean()) as RuntimeUpgradedV1050,
}

/**
 *  A bool to track if the runtime was upgraded last block.
 */
export interface RuntimeUpgradedV1050  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const lastRuntimeUpgrade =  {
    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    v1053: new StorageType('System.LastRuntimeUpgrade', 'Optional', [], v1053.LastRuntimeUpgradeInfo) as LastRuntimeUpgradeV1053,
}

/**
 *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
 */
export interface LastRuntimeUpgradeV1053  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1053.LastRuntimeUpgradeInfo | undefined)>
}

export const executionPhase =  {
    /**
     *  The execution phase of the block.
     */
    v1055: new StorageType('System.ExecutionPhase', 'Optional', [], v1055.Phase) as ExecutionPhaseV1055,
}

/**
 *  The execution phase of the block.
 */
export interface ExecutionPhaseV1055  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1055.Phase | undefined)>
}

export const blockWeight =  {
    /**
     *  The current weight for the block.
     */
    v2005: new StorageType('System.BlockWeight', 'Default', [], v2005.ExtrinsicsWeight) as BlockWeightV2005,
    /**
     *  The current weight for the block.
     */
    v2027: new StorageType('System.BlockWeight', 'Default', [], v2027.ConsumedWeight) as BlockWeightV2027,
    /**
     *  The current weight for the block.
     */
    v9291: new StorageType('System.BlockWeight', 'Default', [], v9291.PerDispatchClass) as BlockWeightV9291,
    /**
     *  The current weight for the block.
     */
    v9320: new StorageType('System.BlockWeight', 'Default', [], v9320.PerDispatchClass) as BlockWeightV9320,
}

/**
 *  The current weight for the block.
 */
export interface BlockWeightV2005  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v2005.ExtrinsicsWeight
    get(block: Block): Promise<(v2005.ExtrinsicsWeight | undefined)>
}

/**
 *  The current weight for the block.
 */
export interface BlockWeightV2027  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v2027.ConsumedWeight
    get(block: Block): Promise<(v2027.ConsumedWeight | undefined)>
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
export interface BlockWeightV9320  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9320.PerDispatchClass
    get(block: Block): Promise<(v9320.PerDispatchClass | undefined)>
}

export const upgradedToU32RefCount =  {
    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    v2025: new StorageType('System.UpgradedToU32RefCount', 'Default', [], sts.boolean()) as UpgradedToU32RefCountV2025,
}

/**
 *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
 */
export interface UpgradedToU32RefCountV2025  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const upgradedToDualRefCount =  {
    /**
     *  True if we have upgraded so that AccountInfo contains two types of `RefCount`. False
     *  (default) if not.
     */
    v2028: new StorageType('System.UpgradedToDualRefCount', 'Default', [], sts.boolean()) as UpgradedToDualRefCountV2028,
}

/**
 *  True if we have upgraded so that AccountInfo contains two types of `RefCount`. False
 *  (default) if not.
 */
export interface UpgradedToDualRefCountV2028  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const upgradedToTripleRefCount =  {
    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    v2030: new StorageType('System.UpgradedToTripleRefCount', 'Default', [], sts.boolean()) as UpgradedToTripleRefCountV2030,
}

/**
 *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
 *  (default) if not.
 */
export interface UpgradedToTripleRefCountV2030  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}
