import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1058 from '../v1058'
import * as v1062 from '../v1062'
import * as v2005 from '../v2005'
import * as v2007 from '../v2007'
import * as v2011 from '../v2011'
import * as v2013 from '../v2013'
import * as v2015 from '../v2015'
import * as v2022 from '../v2022'
import * as v2023 from '../v2023'
import * as v2024 from '../v2024'
import * as v2025 from '../v2025'
import * as v2026 from '../v2026'
import * as v2028 from '../v2028'
import * as v2029 from '../v2029'
import * as v2030 from '../v2030'
import * as v9010 from '../v9010'
import * as v9030 from '../v9030'
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
import * as v9220 from '../v9220'
import * as v9230 from '../v9230'
import * as v9250 from '../v9250'
import * as v9271 from '../v9271'
import * as v9291 from '../v9291'
import * as v9300 from '../v9300'
import * as v9320 from '../v9320'
import * as v9370 from '../v9370'
import * as v9381 from '../v9381'
import * as v9420 from '../v9420'

export const agenda =  {
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v1058: new StorageType('Scheduler.Agenda', 'Default', [v1058.BlockNumber], sts.array(() => sts.option(() => v1058.Scheduled))) as AgendaV1058,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v1062: new StorageType('Scheduler.Agenda', 'Default', [v1062.BlockNumber], sts.array(() => sts.option(() => v1062.Scheduled))) as AgendaV1062,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v2005: new StorageType('Scheduler.Agenda', 'Default', [v2005.BlockNumber], sts.array(() => sts.option(() => v2005.Scheduled))) as AgendaV2005,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v2007: new StorageType('Scheduler.Agenda', 'Default', [v2007.BlockNumber], sts.array(() => sts.option(() => v2007.Scheduled))) as AgendaV2007,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v2011: new StorageType('Scheduler.Agenda', 'Default', [v2011.BlockNumber], sts.array(() => sts.option(() => v2011.Scheduled))) as AgendaV2011,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v2013: new StorageType('Scheduler.Agenda', 'Default', [v2013.BlockNumber], sts.array(() => sts.option(() => v2013.Scheduled))) as AgendaV2013,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v2015: new StorageType('Scheduler.Agenda', 'Default', [v2015.BlockNumber], sts.array(() => sts.option(() => v2015.Scheduled))) as AgendaV2015,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v2022: new StorageType('Scheduler.Agenda', 'Default', [v2022.BlockNumber], sts.array(() => sts.option(() => v2022.Scheduled))) as AgendaV2022,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v2023: new StorageType('Scheduler.Agenda', 'Default', [v2023.BlockNumber], sts.array(() => sts.option(() => v2023.Scheduled))) as AgendaV2023,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v2024: new StorageType('Scheduler.Agenda', 'Default', [v2024.BlockNumber], sts.array(() => sts.option(() => v2024.Scheduled))) as AgendaV2024,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v2025: new StorageType('Scheduler.Agenda', 'Default', [v2025.BlockNumber], sts.array(() => sts.option(() => v2025.Scheduled))) as AgendaV2025,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v2026: new StorageType('Scheduler.Agenda', 'Default', [v2026.BlockNumber], sts.array(() => sts.option(() => v2026.Scheduled))) as AgendaV2026,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v2028: new StorageType('Scheduler.Agenda', 'Default', [v2028.BlockNumber], sts.array(() => sts.option(() => v2028.Scheduled))) as AgendaV2028,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v2029: new StorageType('Scheduler.Agenda', 'Default', [v2029.BlockNumber], sts.array(() => sts.option(() => v2029.Scheduled))) as AgendaV2029,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v2030: new StorageType('Scheduler.Agenda', 'Default', [v2030.BlockNumber], sts.array(() => sts.option(() => v2030.Scheduled))) as AgendaV2030,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v9010: new StorageType('Scheduler.Agenda', 'Default', [v9010.BlockNumber], sts.array(() => sts.option(() => v9010.Scheduled))) as AgendaV9010,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v9030: new StorageType('Scheduler.Agenda', 'Default', [v9030.BlockNumber], sts.array(() => sts.option(() => v9030.Scheduled))) as AgendaV9030,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v9040: new StorageType('Scheduler.Agenda', 'Default', [v9040.BlockNumber], sts.array(() => sts.option(() => v9040.Scheduled))) as AgendaV9040,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v9050: new StorageType('Scheduler.Agenda', 'Default', [v9050.BlockNumber], sts.array(() => sts.option(() => v9050.Scheduled))) as AgendaV9050,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v9080: new StorageType('Scheduler.Agenda', 'Default', [v9080.BlockNumber], sts.array(() => sts.option(() => v9080.Scheduled))) as AgendaV9080,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v9090: new StorageType('Scheduler.Agenda', 'Default', [v9090.BlockNumber], sts.array(() => sts.option(() => v9090.Scheduled))) as AgendaV9090,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v9100: new StorageType('Scheduler.Agenda', 'Default', [v9100.BlockNumber], sts.array(() => sts.option(() => v9100.Scheduled))) as AgendaV9100,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v9111: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v9111.ScheduledV2))) as AgendaV9111,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v9122: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v9122.ScheduledV2))) as AgendaV9122,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v9130: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v9130.ScheduledV2))) as AgendaV9130,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v9160: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v9160.ScheduledV3))) as AgendaV9160,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v9170: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v9170.ScheduledV3))) as AgendaV9170,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v9180: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v9180.ScheduledV3))) as AgendaV9180,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v9190: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v9190.ScheduledV3))) as AgendaV9190,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v9220: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v9220.ScheduledV3))) as AgendaV9220,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v9230: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v9230.ScheduledV3))) as AgendaV9230,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v9250: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v9250.ScheduledV3))) as AgendaV9250,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v9271: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v9271.ScheduledV3))) as AgendaV9271,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v9291: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v9291.ScheduledV3))) as AgendaV9291,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v9300: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v9300.ScheduledV3))) as AgendaV9300,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v9320: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v9320.Scheduled))) as AgendaV9320,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v9370: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v9370.Scheduled))) as AgendaV9370,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v9381: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v9381.Scheduled))) as AgendaV9381,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v9420: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v9420.Scheduled))) as AgendaV9420,
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV1058  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v1058.Scheduled | undefined)[]
    get(block: Block, key: v1058.BlockNumber): Promise<((v1058.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v1058.BlockNumber[]): Promise<((v1058.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v1058.BlockNumber[]>
    getKeys(block: Block, key: v1058.BlockNumber): Promise<v1058.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1058.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v1058.BlockNumber): AsyncIterable<v1058.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v1058.BlockNumber, v: ((v1058.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v1058.BlockNumber): Promise<[k: v1058.BlockNumber, v: ((v1058.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1058.BlockNumber, v: ((v1058.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1058.BlockNumber): AsyncIterable<[k: v1058.BlockNumber, v: ((v1058.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV1062  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v1062.Scheduled | undefined)[]
    get(block: Block, key: v1062.BlockNumber): Promise<((v1062.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v1062.BlockNumber[]): Promise<((v1062.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v1062.BlockNumber[]>
    getKeys(block: Block, key: v1062.BlockNumber): Promise<v1062.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1062.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v1062.BlockNumber): AsyncIterable<v1062.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v1062.BlockNumber, v: ((v1062.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v1062.BlockNumber): Promise<[k: v1062.BlockNumber, v: ((v1062.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1062.BlockNumber, v: ((v1062.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1062.BlockNumber): AsyncIterable<[k: v1062.BlockNumber, v: ((v1062.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV2005  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v2005.Scheduled | undefined)[]
    get(block: Block, key: v2005.BlockNumber): Promise<((v2005.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v2005.BlockNumber[]): Promise<((v2005.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v2005.BlockNumber[]>
    getKeys(block: Block, key: v2005.BlockNumber): Promise<v2005.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2005.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v2005.BlockNumber): AsyncIterable<v2005.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v2005.BlockNumber, v: ((v2005.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v2005.BlockNumber): Promise<[k: v2005.BlockNumber, v: ((v2005.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2005.BlockNumber, v: ((v2005.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2005.BlockNumber): AsyncIterable<[k: v2005.BlockNumber, v: ((v2005.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV2007  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v2007.Scheduled | undefined)[]
    get(block: Block, key: v2007.BlockNumber): Promise<((v2007.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v2007.BlockNumber[]): Promise<((v2007.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v2007.BlockNumber[]>
    getKeys(block: Block, key: v2007.BlockNumber): Promise<v2007.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2007.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v2007.BlockNumber): AsyncIterable<v2007.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v2007.BlockNumber, v: ((v2007.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v2007.BlockNumber): Promise<[k: v2007.BlockNumber, v: ((v2007.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2007.BlockNumber, v: ((v2007.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2007.BlockNumber): AsyncIterable<[k: v2007.BlockNumber, v: ((v2007.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV2011  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v2011.Scheduled | undefined)[]
    get(block: Block, key: v2011.BlockNumber): Promise<((v2011.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v2011.BlockNumber[]): Promise<((v2011.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v2011.BlockNumber[]>
    getKeys(block: Block, key: v2011.BlockNumber): Promise<v2011.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2011.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v2011.BlockNumber): AsyncIterable<v2011.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v2011.BlockNumber, v: ((v2011.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v2011.BlockNumber): Promise<[k: v2011.BlockNumber, v: ((v2011.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2011.BlockNumber, v: ((v2011.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2011.BlockNumber): AsyncIterable<[k: v2011.BlockNumber, v: ((v2011.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV2013  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v2013.Scheduled | undefined)[]
    get(block: Block, key: v2013.BlockNumber): Promise<((v2013.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v2013.BlockNumber[]): Promise<((v2013.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v2013.BlockNumber[]>
    getKeys(block: Block, key: v2013.BlockNumber): Promise<v2013.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2013.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v2013.BlockNumber): AsyncIterable<v2013.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v2013.BlockNumber, v: ((v2013.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v2013.BlockNumber): Promise<[k: v2013.BlockNumber, v: ((v2013.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2013.BlockNumber, v: ((v2013.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2013.BlockNumber): AsyncIterable<[k: v2013.BlockNumber, v: ((v2013.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV2015  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v2015.Scheduled | undefined)[]
    get(block: Block, key: v2015.BlockNumber): Promise<((v2015.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v2015.BlockNumber[]): Promise<((v2015.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v2015.BlockNumber[]>
    getKeys(block: Block, key: v2015.BlockNumber): Promise<v2015.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2015.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v2015.BlockNumber): AsyncIterable<v2015.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v2015.BlockNumber, v: ((v2015.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v2015.BlockNumber): Promise<[k: v2015.BlockNumber, v: ((v2015.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2015.BlockNumber, v: ((v2015.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2015.BlockNumber): AsyncIterable<[k: v2015.BlockNumber, v: ((v2015.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV2022  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v2022.Scheduled | undefined)[]
    get(block: Block, key: v2022.BlockNumber): Promise<((v2022.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v2022.BlockNumber[]): Promise<((v2022.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v2022.BlockNumber[]>
    getKeys(block: Block, key: v2022.BlockNumber): Promise<v2022.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2022.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v2022.BlockNumber): AsyncIterable<v2022.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v2022.BlockNumber, v: ((v2022.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v2022.BlockNumber): Promise<[k: v2022.BlockNumber, v: ((v2022.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2022.BlockNumber, v: ((v2022.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2022.BlockNumber): AsyncIterable<[k: v2022.BlockNumber, v: ((v2022.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV2023  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v2023.Scheduled | undefined)[]
    get(block: Block, key: v2023.BlockNumber): Promise<((v2023.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v2023.BlockNumber[]): Promise<((v2023.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v2023.BlockNumber[]>
    getKeys(block: Block, key: v2023.BlockNumber): Promise<v2023.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2023.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v2023.BlockNumber): AsyncIterable<v2023.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v2023.BlockNumber, v: ((v2023.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v2023.BlockNumber): Promise<[k: v2023.BlockNumber, v: ((v2023.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2023.BlockNumber, v: ((v2023.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2023.BlockNumber): AsyncIterable<[k: v2023.BlockNumber, v: ((v2023.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV2024  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v2024.Scheduled | undefined)[]
    get(block: Block, key: v2024.BlockNumber): Promise<((v2024.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v2024.BlockNumber[]): Promise<((v2024.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v2024.BlockNumber[]>
    getKeys(block: Block, key: v2024.BlockNumber): Promise<v2024.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2024.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v2024.BlockNumber): AsyncIterable<v2024.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v2024.BlockNumber, v: ((v2024.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v2024.BlockNumber): Promise<[k: v2024.BlockNumber, v: ((v2024.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2024.BlockNumber, v: ((v2024.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2024.BlockNumber): AsyncIterable<[k: v2024.BlockNumber, v: ((v2024.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV2025  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v2025.Scheduled | undefined)[]
    get(block: Block, key: v2025.BlockNumber): Promise<((v2025.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v2025.BlockNumber[]): Promise<((v2025.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v2025.BlockNumber[]>
    getKeys(block: Block, key: v2025.BlockNumber): Promise<v2025.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2025.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v2025.BlockNumber): AsyncIterable<v2025.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v2025.BlockNumber, v: ((v2025.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v2025.BlockNumber): Promise<[k: v2025.BlockNumber, v: ((v2025.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2025.BlockNumber, v: ((v2025.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2025.BlockNumber): AsyncIterable<[k: v2025.BlockNumber, v: ((v2025.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV2026  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v2026.Scheduled | undefined)[]
    get(block: Block, key: v2026.BlockNumber): Promise<((v2026.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v2026.BlockNumber[]): Promise<((v2026.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v2026.BlockNumber[]>
    getKeys(block: Block, key: v2026.BlockNumber): Promise<v2026.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2026.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v2026.BlockNumber): AsyncIterable<v2026.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v2026.BlockNumber, v: ((v2026.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v2026.BlockNumber): Promise<[k: v2026.BlockNumber, v: ((v2026.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2026.BlockNumber, v: ((v2026.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2026.BlockNumber): AsyncIterable<[k: v2026.BlockNumber, v: ((v2026.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV2028  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v2028.Scheduled | undefined)[]
    get(block: Block, key: v2028.BlockNumber): Promise<((v2028.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v2028.BlockNumber[]): Promise<((v2028.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v2028.BlockNumber[]>
    getKeys(block: Block, key: v2028.BlockNumber): Promise<v2028.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2028.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v2028.BlockNumber): AsyncIterable<v2028.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v2028.BlockNumber, v: ((v2028.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v2028.BlockNumber): Promise<[k: v2028.BlockNumber, v: ((v2028.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2028.BlockNumber, v: ((v2028.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2028.BlockNumber): AsyncIterable<[k: v2028.BlockNumber, v: ((v2028.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV2029  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v2029.Scheduled | undefined)[]
    get(block: Block, key: v2029.BlockNumber): Promise<((v2029.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v2029.BlockNumber[]): Promise<((v2029.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v2029.BlockNumber[]>
    getKeys(block: Block, key: v2029.BlockNumber): Promise<v2029.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2029.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v2029.BlockNumber): AsyncIterable<v2029.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v2029.BlockNumber, v: ((v2029.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v2029.BlockNumber): Promise<[k: v2029.BlockNumber, v: ((v2029.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2029.BlockNumber, v: ((v2029.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2029.BlockNumber): AsyncIterable<[k: v2029.BlockNumber, v: ((v2029.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV2030  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v2030.Scheduled | undefined)[]
    get(block: Block, key: v2030.BlockNumber): Promise<((v2030.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v2030.BlockNumber[]): Promise<((v2030.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v2030.BlockNumber[]>
    getKeys(block: Block, key: v2030.BlockNumber): Promise<v2030.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2030.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v2030.BlockNumber): AsyncIterable<v2030.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v2030.BlockNumber, v: ((v2030.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v2030.BlockNumber): Promise<[k: v2030.BlockNumber, v: ((v2030.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2030.BlockNumber, v: ((v2030.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2030.BlockNumber): AsyncIterable<[k: v2030.BlockNumber, v: ((v2030.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v9010.Scheduled | undefined)[]
    get(block: Block, key: v9010.BlockNumber): Promise<((v9010.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v9010.BlockNumber[]): Promise<((v9010.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v9010.BlockNumber[]>
    getKeys(block: Block, key: v9010.BlockNumber): Promise<v9010.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9010.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v9010.BlockNumber): AsyncIterable<v9010.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v9010.BlockNumber, v: ((v9010.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v9010.BlockNumber): Promise<[k: v9010.BlockNumber, v: ((v9010.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9010.BlockNumber, v: ((v9010.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9010.BlockNumber): AsyncIterable<[k: v9010.BlockNumber, v: ((v9010.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV9030  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v9030.Scheduled | undefined)[]
    get(block: Block, key: v9030.BlockNumber): Promise<((v9030.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v9030.BlockNumber[]): Promise<((v9030.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v9030.BlockNumber[]>
    getKeys(block: Block, key: v9030.BlockNumber): Promise<v9030.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9030.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v9030.BlockNumber): AsyncIterable<v9030.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v9030.BlockNumber, v: ((v9030.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v9030.BlockNumber): Promise<[k: v9030.BlockNumber, v: ((v9030.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9030.BlockNumber, v: ((v9030.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9030.BlockNumber): AsyncIterable<[k: v9030.BlockNumber, v: ((v9030.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV9040  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v9040.Scheduled | undefined)[]
    get(block: Block, key: v9040.BlockNumber): Promise<((v9040.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v9040.BlockNumber[]): Promise<((v9040.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v9040.BlockNumber[]>
    getKeys(block: Block, key: v9040.BlockNumber): Promise<v9040.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9040.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v9040.BlockNumber): AsyncIterable<v9040.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v9040.BlockNumber, v: ((v9040.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v9040.BlockNumber): Promise<[k: v9040.BlockNumber, v: ((v9040.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9040.BlockNumber, v: ((v9040.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9040.BlockNumber): AsyncIterable<[k: v9040.BlockNumber, v: ((v9040.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV9050  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v9050.Scheduled | undefined)[]
    get(block: Block, key: v9050.BlockNumber): Promise<((v9050.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v9050.BlockNumber[]): Promise<((v9050.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v9050.BlockNumber[]>
    getKeys(block: Block, key: v9050.BlockNumber): Promise<v9050.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9050.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v9050.BlockNumber): AsyncIterable<v9050.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v9050.BlockNumber, v: ((v9050.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v9050.BlockNumber): Promise<[k: v9050.BlockNumber, v: ((v9050.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9050.BlockNumber, v: ((v9050.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9050.BlockNumber): AsyncIterable<[k: v9050.BlockNumber, v: ((v9050.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV9080  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v9080.Scheduled | undefined)[]
    get(block: Block, key: v9080.BlockNumber): Promise<((v9080.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v9080.BlockNumber[]): Promise<((v9080.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v9080.BlockNumber[]>
    getKeys(block: Block, key: v9080.BlockNumber): Promise<v9080.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9080.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v9080.BlockNumber): AsyncIterable<v9080.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v9080.BlockNumber, v: ((v9080.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v9080.BlockNumber): Promise<[k: v9080.BlockNumber, v: ((v9080.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9080.BlockNumber, v: ((v9080.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9080.BlockNumber): AsyncIterable<[k: v9080.BlockNumber, v: ((v9080.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV9090  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v9090.Scheduled | undefined)[]
    get(block: Block, key: v9090.BlockNumber): Promise<((v9090.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v9090.BlockNumber[]): Promise<((v9090.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v9090.BlockNumber[]>
    getKeys(block: Block, key: v9090.BlockNumber): Promise<v9090.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9090.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v9090.BlockNumber): AsyncIterable<v9090.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v9090.BlockNumber, v: ((v9090.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v9090.BlockNumber): Promise<[k: v9090.BlockNumber, v: ((v9090.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9090.BlockNumber, v: ((v9090.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9090.BlockNumber): AsyncIterable<[k: v9090.BlockNumber, v: ((v9090.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV9100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v9100.Scheduled | undefined)[]
    get(block: Block, key: v9100.BlockNumber): Promise<((v9100.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v9100.BlockNumber[]): Promise<((v9100.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v9100.BlockNumber[]>
    getKeys(block: Block, key: v9100.BlockNumber): Promise<v9100.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9100.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v9100.BlockNumber): AsyncIterable<v9100.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v9100.BlockNumber, v: ((v9100.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v9100.BlockNumber): Promise<[k: v9100.BlockNumber, v: ((v9100.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9100.BlockNumber, v: ((v9100.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9100.BlockNumber): AsyncIterable<[k: v9100.BlockNumber, v: ((v9100.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV9111  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v9111.ScheduledV2 | undefined)[]
    get(block: Block, key: number): Promise<((v9111.ScheduledV2 | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v9111.ScheduledV2 | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v9111.ScheduledV2 | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v9111.ScheduledV2 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v9111.ScheduledV2 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v9111.ScheduledV2 | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV9122  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v9122.ScheduledV2 | undefined)[]
    get(block: Block, key: number): Promise<((v9122.ScheduledV2 | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v9122.ScheduledV2 | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v9122.ScheduledV2 | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v9122.ScheduledV2 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v9122.ScheduledV2 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v9122.ScheduledV2 | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV9130  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v9130.ScheduledV2 | undefined)[]
    get(block: Block, key: number): Promise<((v9130.ScheduledV2 | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v9130.ScheduledV2 | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v9130.ScheduledV2 | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v9130.ScheduledV2 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v9130.ScheduledV2 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v9130.ScheduledV2 | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV9160  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v9160.ScheduledV3 | undefined)[]
    get(block: Block, key: number): Promise<((v9160.ScheduledV3 | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v9160.ScheduledV3 | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v9160.ScheduledV3 | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v9160.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v9160.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v9160.ScheduledV3 | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV9170  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v9170.ScheduledV3 | undefined)[]
    get(block: Block, key: number): Promise<((v9170.ScheduledV3 | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v9170.ScheduledV3 | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v9170.ScheduledV3 | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v9170.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v9170.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v9170.ScheduledV3 | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV9180  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v9180.ScheduledV3 | undefined)[]
    get(block: Block, key: number): Promise<((v9180.ScheduledV3 | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v9180.ScheduledV3 | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v9180.ScheduledV3 | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v9180.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v9180.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v9180.ScheduledV3 | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV9190  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v9190.ScheduledV3 | undefined)[]
    get(block: Block, key: number): Promise<((v9190.ScheduledV3 | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v9190.ScheduledV3 | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v9190.ScheduledV3 | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v9190.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v9190.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v9190.ScheduledV3 | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV9220  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v9220.ScheduledV3 | undefined)[]
    get(block: Block, key: number): Promise<((v9220.ScheduledV3 | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v9220.ScheduledV3 | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v9220.ScheduledV3 | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v9220.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v9220.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v9220.ScheduledV3 | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV9230  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v9230.ScheduledV3 | undefined)[]
    get(block: Block, key: number): Promise<((v9230.ScheduledV3 | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v9230.ScheduledV3 | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v9230.ScheduledV3 | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v9230.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v9230.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v9230.ScheduledV3 | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV9250  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v9250.ScheduledV3 | undefined)[]
    get(block: Block, key: number): Promise<((v9250.ScheduledV3 | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v9250.ScheduledV3 | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v9250.ScheduledV3 | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v9250.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v9250.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v9250.ScheduledV3 | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV9271  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v9271.ScheduledV3 | undefined)[]
    get(block: Block, key: number): Promise<((v9271.ScheduledV3 | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v9271.ScheduledV3 | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v9271.ScheduledV3 | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v9271.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v9271.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v9271.ScheduledV3 | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV9291  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v9291.ScheduledV3 | undefined)[]
    get(block: Block, key: number): Promise<((v9291.ScheduledV3 | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v9291.ScheduledV3 | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v9291.ScheduledV3 | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v9291.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v9291.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v9291.ScheduledV3 | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV9300  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v9300.ScheduledV3 | undefined)[]
    get(block: Block, key: number): Promise<((v9300.ScheduledV3 | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v9300.ScheduledV3 | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v9300.ScheduledV3 | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v9300.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v9300.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v9300.ScheduledV3 | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV9320  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v9320.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((v9320.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v9320.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v9320.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v9320.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v9320.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v9320.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV9370  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v9370.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((v9370.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v9370.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v9370.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v9370.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v9370.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v9370.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV9381  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v9381.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((v9381.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v9381.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v9381.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v9381.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v9381.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v9381.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV9420  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v9420.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((v9420.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v9420.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v9420.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v9420.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v9420.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v9420.Scheduled | undefined)[] | undefined)][]>
}

export const lookup =  {
    /**
     *  Lookup from identity to the block number and index of the task.
     */
    v1058: new StorageType('Scheduler.Lookup', 'Optional', [sts.bytes()], v1058.TaskAddress) as LookupV1058,
}

/**
 *  Lookup from identity to the block number and index of the task.
 */
export interface LookupV1058  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: Bytes): Promise<(v1058.TaskAddress | undefined)>
    getMany(block: Block, keys: Bytes[]): Promise<(v1058.TaskAddress | undefined)[]>
    getKeys(block: Block): Promise<Bytes[]>
    getKeys(block: Block, key: Bytes): Promise<Bytes[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<Bytes[]>
    getKeysPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<Bytes[]>
    getPairs(block: Block): Promise<[k: Bytes, v: (v1058.TaskAddress | undefined)][]>
    getPairs(block: Block, key: Bytes): Promise<[k: Bytes, v: (v1058.TaskAddress | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: Bytes, v: (v1058.TaskAddress | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<[k: Bytes, v: (v1058.TaskAddress | undefined)][]>
}

export const storageVersion =  {
    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    v2015: new StorageType('Scheduler.StorageVersion', 'Default', [], v2015.Releases) as StorageVersionV2015,
    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    v9111: new StorageType('Scheduler.StorageVersion', 'Default', [], v9111.Type_580) as StorageVersionV9111,
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface StorageVersionV2015  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v2015.Releases
    get(block: Block): Promise<(v2015.Releases | undefined)>
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface StorageVersionV9111  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9111.Type_580
    get(block: Block): Promise<(v9111.Type_580 | undefined)>
}

export const incompleteSince =  {
    v9320: new StorageType('Scheduler.IncompleteSince', 'Optional', [], sts.number()) as IncompleteSinceV9320,
}

export interface IncompleteSinceV9320  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}
