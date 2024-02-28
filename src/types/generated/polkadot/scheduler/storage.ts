import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v5 from '../v5'
import * as v6 from '../v6'
import * as v7 from '../v7'
import * as v9 from '../v9'
import * as v10 from '../v10'
import * as v11 from '../v11'
import * as v13 from '../v13'
import * as v14 from '../v14'
import * as v15 from '../v15'
import * as v17 from '../v17'
import * as v18 from '../v18'
import * as v23 from '../v23'
import * as v24 from '../v24'
import * as v25 from '../v25'
import * as v26 from '../v26'
import * as v28 from '../v28'
import * as v29 from '../v29'
import * as v30 from '../v30'
import * as v9050 from '../v9050'
import * as v9080 from '../v9080'
import * as v9090 from '../v9090'
import * as v9100 from '../v9100'
import * as v9110 from '../v9110'
import * as v9140 from '../v9140'
import * as v9170 from '../v9170'
import * as v9180 from '../v9180'
import * as v9190 from '../v9190'
import * as v9220 from '../v9220'
import * as v9230 from '../v9230'
import * as v9250 from '../v9250'
import * as v9270 from '../v9270'
import * as v9280 from '../v9280'
import * as v9291 from '../v9291'
import * as v9300 from '../v9300'
import * as v9340 from '../v9340'
import * as v9370 from '../v9370'
import * as v9420 from '../v9420'
import * as v1000001 from '../v1000001'

export const agenda =  {
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v0: new StorageType('Scheduler.Agenda', 'Default', [v0.BlockNumber], sts.array(() => sts.option(() => v0.Scheduled))) as AgendaV0,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v5: new StorageType('Scheduler.Agenda', 'Default', [v5.BlockNumber], sts.array(() => sts.option(() => v5.Scheduled))) as AgendaV5,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v6: new StorageType('Scheduler.Agenda', 'Default', [v6.BlockNumber], sts.array(() => sts.option(() => v6.Scheduled))) as AgendaV6,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v7: new StorageType('Scheduler.Agenda', 'Default', [v7.BlockNumber], sts.array(() => sts.option(() => v7.Scheduled))) as AgendaV7,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v9: new StorageType('Scheduler.Agenda', 'Default', [v9.BlockNumber], sts.array(() => sts.option(() => v9.Scheduled))) as AgendaV9,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v10: new StorageType('Scheduler.Agenda', 'Default', [v10.BlockNumber], sts.array(() => sts.option(() => v10.Scheduled))) as AgendaV10,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v11: new StorageType('Scheduler.Agenda', 'Default', [v11.BlockNumber], sts.array(() => sts.option(() => v11.Scheduled))) as AgendaV11,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v13: new StorageType('Scheduler.Agenda', 'Default', [v13.BlockNumber], sts.array(() => sts.option(() => v13.Scheduled))) as AgendaV13,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v14: new StorageType('Scheduler.Agenda', 'Default', [v14.BlockNumber], sts.array(() => sts.option(() => v14.Scheduled))) as AgendaV14,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v15: new StorageType('Scheduler.Agenda', 'Default', [v15.BlockNumber], sts.array(() => sts.option(() => v15.Scheduled))) as AgendaV15,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v17: new StorageType('Scheduler.Agenda', 'Default', [v17.BlockNumber], sts.array(() => sts.option(() => v17.Scheduled))) as AgendaV17,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v18: new StorageType('Scheduler.Agenda', 'Default', [v18.BlockNumber], sts.array(() => sts.option(() => v18.Scheduled))) as AgendaV18,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v23: new StorageType('Scheduler.Agenda', 'Default', [v23.BlockNumber], sts.array(() => sts.option(() => v23.Scheduled))) as AgendaV23,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v24: new StorageType('Scheduler.Agenda', 'Default', [v24.BlockNumber], sts.array(() => sts.option(() => v24.Scheduled))) as AgendaV24,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v25: new StorageType('Scheduler.Agenda', 'Default', [v25.BlockNumber], sts.array(() => sts.option(() => v25.Scheduled))) as AgendaV25,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v26: new StorageType('Scheduler.Agenda', 'Default', [v26.BlockNumber], sts.array(() => sts.option(() => v26.Scheduled))) as AgendaV26,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v28: new StorageType('Scheduler.Agenda', 'Default', [v28.BlockNumber], sts.array(() => sts.option(() => v28.Scheduled))) as AgendaV28,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v29: new StorageType('Scheduler.Agenda', 'Default', [v29.BlockNumber], sts.array(() => sts.option(() => v29.Scheduled))) as AgendaV29,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v30: new StorageType('Scheduler.Agenda', 'Default', [v30.BlockNumber], sts.array(() => sts.option(() => v30.Scheduled))) as AgendaV30,
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
    v9110: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v9110.ScheduledV2))) as AgendaV9110,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v9140: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v9140.ScheduledV2))) as AgendaV9140,
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
    v9270: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v9270.ScheduledV3))) as AgendaV9270,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v9280: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v9280.ScheduledV3))) as AgendaV9280,
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
    v9340: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v9340.Scheduled))) as AgendaV9340,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v9370: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v9370.Scheduled))) as AgendaV9370,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v9420: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v9420.Scheduled))) as AgendaV9420,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v1000001: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v1000001.Scheduled))) as AgendaV1000001,
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v0.Scheduled | undefined)[]
    get(block: Block, key: v0.BlockNumber): Promise<((v0.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v0.BlockNumber[]): Promise<((v0.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v0.BlockNumber[]>
    getKeys(block: Block, key: v0.BlockNumber): Promise<v0.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.BlockNumber): AsyncIterable<v0.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v0.BlockNumber, v: ((v0.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v0.BlockNumber): Promise<[k: v0.BlockNumber, v: ((v0.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.BlockNumber, v: ((v0.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.BlockNumber): AsyncIterable<[k: v0.BlockNumber, v: ((v0.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV5  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v5.Scheduled | undefined)[]
    get(block: Block, key: v5.BlockNumber): Promise<((v5.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v5.BlockNumber[]): Promise<((v5.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v5.BlockNumber[]>
    getKeys(block: Block, key: v5.BlockNumber): Promise<v5.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v5.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v5.BlockNumber): AsyncIterable<v5.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v5.BlockNumber, v: ((v5.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v5.BlockNumber): Promise<[k: v5.BlockNumber, v: ((v5.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v5.BlockNumber, v: ((v5.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v5.BlockNumber): AsyncIterable<[k: v5.BlockNumber, v: ((v5.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV6  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v6.Scheduled | undefined)[]
    get(block: Block, key: v6.BlockNumber): Promise<((v6.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v6.BlockNumber[]): Promise<((v6.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v6.BlockNumber[]>
    getKeys(block: Block, key: v6.BlockNumber): Promise<v6.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v6.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v6.BlockNumber): AsyncIterable<v6.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v6.BlockNumber, v: ((v6.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v6.BlockNumber): Promise<[k: v6.BlockNumber, v: ((v6.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v6.BlockNumber, v: ((v6.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v6.BlockNumber): AsyncIterable<[k: v6.BlockNumber, v: ((v6.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV7  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v7.Scheduled | undefined)[]
    get(block: Block, key: v7.BlockNumber): Promise<((v7.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v7.BlockNumber[]): Promise<((v7.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v7.BlockNumber[]>
    getKeys(block: Block, key: v7.BlockNumber): Promise<v7.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v7.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v7.BlockNumber): AsyncIterable<v7.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v7.BlockNumber, v: ((v7.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v7.BlockNumber): Promise<[k: v7.BlockNumber, v: ((v7.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v7.BlockNumber, v: ((v7.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v7.BlockNumber): AsyncIterable<[k: v7.BlockNumber, v: ((v7.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV9  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v9.Scheduled | undefined)[]
    get(block: Block, key: v9.BlockNumber): Promise<((v9.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v9.BlockNumber[]): Promise<((v9.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v9.BlockNumber[]>
    getKeys(block: Block, key: v9.BlockNumber): Promise<v9.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v9.BlockNumber): AsyncIterable<v9.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v9.BlockNumber, v: ((v9.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v9.BlockNumber): Promise<[k: v9.BlockNumber, v: ((v9.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9.BlockNumber, v: ((v9.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9.BlockNumber): AsyncIterable<[k: v9.BlockNumber, v: ((v9.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV10  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v10.Scheduled | undefined)[]
    get(block: Block, key: v10.BlockNumber): Promise<((v10.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v10.BlockNumber[]): Promise<((v10.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v10.BlockNumber[]>
    getKeys(block: Block, key: v10.BlockNumber): Promise<v10.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v10.BlockNumber): AsyncIterable<v10.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v10.BlockNumber, v: ((v10.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v10.BlockNumber): Promise<[k: v10.BlockNumber, v: ((v10.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10.BlockNumber, v: ((v10.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10.BlockNumber): AsyncIterable<[k: v10.BlockNumber, v: ((v10.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV11  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v11.Scheduled | undefined)[]
    get(block: Block, key: v11.BlockNumber): Promise<((v11.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v11.BlockNumber[]): Promise<((v11.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v11.BlockNumber[]>
    getKeys(block: Block, key: v11.BlockNumber): Promise<v11.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v11.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v11.BlockNumber): AsyncIterable<v11.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v11.BlockNumber, v: ((v11.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v11.BlockNumber): Promise<[k: v11.BlockNumber, v: ((v11.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v11.BlockNumber, v: ((v11.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v11.BlockNumber): AsyncIterable<[k: v11.BlockNumber, v: ((v11.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV13  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v13.Scheduled | undefined)[]
    get(block: Block, key: v13.BlockNumber): Promise<((v13.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v13.BlockNumber[]): Promise<((v13.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v13.BlockNumber[]>
    getKeys(block: Block, key: v13.BlockNumber): Promise<v13.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v13.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v13.BlockNumber): AsyncIterable<v13.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v13.BlockNumber, v: ((v13.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v13.BlockNumber): Promise<[k: v13.BlockNumber, v: ((v13.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v13.BlockNumber, v: ((v13.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v13.BlockNumber): AsyncIterable<[k: v13.BlockNumber, v: ((v13.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV14  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v14.Scheduled | undefined)[]
    get(block: Block, key: v14.BlockNumber): Promise<((v14.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v14.BlockNumber[]): Promise<((v14.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v14.BlockNumber[]>
    getKeys(block: Block, key: v14.BlockNumber): Promise<v14.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v14.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v14.BlockNumber): AsyncIterable<v14.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v14.BlockNumber, v: ((v14.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v14.BlockNumber): Promise<[k: v14.BlockNumber, v: ((v14.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v14.BlockNumber, v: ((v14.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v14.BlockNumber): AsyncIterable<[k: v14.BlockNumber, v: ((v14.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV15  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v15.Scheduled | undefined)[]
    get(block: Block, key: v15.BlockNumber): Promise<((v15.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v15.BlockNumber[]): Promise<((v15.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v15.BlockNumber[]>
    getKeys(block: Block, key: v15.BlockNumber): Promise<v15.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v15.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v15.BlockNumber): AsyncIterable<v15.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v15.BlockNumber, v: ((v15.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v15.BlockNumber): Promise<[k: v15.BlockNumber, v: ((v15.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v15.BlockNumber, v: ((v15.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v15.BlockNumber): AsyncIterable<[k: v15.BlockNumber, v: ((v15.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV17  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v17.Scheduled | undefined)[]
    get(block: Block, key: v17.BlockNumber): Promise<((v17.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v17.BlockNumber[]): Promise<((v17.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v17.BlockNumber[]>
    getKeys(block: Block, key: v17.BlockNumber): Promise<v17.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v17.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v17.BlockNumber): AsyncIterable<v17.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v17.BlockNumber, v: ((v17.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v17.BlockNumber): Promise<[k: v17.BlockNumber, v: ((v17.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v17.BlockNumber, v: ((v17.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v17.BlockNumber): AsyncIterable<[k: v17.BlockNumber, v: ((v17.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV18  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v18.Scheduled | undefined)[]
    get(block: Block, key: v18.BlockNumber): Promise<((v18.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v18.BlockNumber[]): Promise<((v18.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v18.BlockNumber[]>
    getKeys(block: Block, key: v18.BlockNumber): Promise<v18.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v18.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v18.BlockNumber): AsyncIterable<v18.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v18.BlockNumber, v: ((v18.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v18.BlockNumber): Promise<[k: v18.BlockNumber, v: ((v18.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v18.BlockNumber, v: ((v18.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v18.BlockNumber): AsyncIterable<[k: v18.BlockNumber, v: ((v18.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV23  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v23.Scheduled | undefined)[]
    get(block: Block, key: v23.BlockNumber): Promise<((v23.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v23.BlockNumber[]): Promise<((v23.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v23.BlockNumber[]>
    getKeys(block: Block, key: v23.BlockNumber): Promise<v23.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v23.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v23.BlockNumber): AsyncIterable<v23.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v23.BlockNumber, v: ((v23.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v23.BlockNumber): Promise<[k: v23.BlockNumber, v: ((v23.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v23.BlockNumber, v: ((v23.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v23.BlockNumber): AsyncIterable<[k: v23.BlockNumber, v: ((v23.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v24.Scheduled | undefined)[]
    get(block: Block, key: v24.BlockNumber): Promise<((v24.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v24.BlockNumber[]): Promise<((v24.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v24.BlockNumber[]>
    getKeys(block: Block, key: v24.BlockNumber): Promise<v24.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v24.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v24.BlockNumber): AsyncIterable<v24.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v24.BlockNumber, v: ((v24.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v24.BlockNumber): Promise<[k: v24.BlockNumber, v: ((v24.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v24.BlockNumber, v: ((v24.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v24.BlockNumber): AsyncIterable<[k: v24.BlockNumber, v: ((v24.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV25  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v25.Scheduled | undefined)[]
    get(block: Block, key: v25.BlockNumber): Promise<((v25.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v25.BlockNumber[]): Promise<((v25.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v25.BlockNumber[]>
    getKeys(block: Block, key: v25.BlockNumber): Promise<v25.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v25.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v25.BlockNumber): AsyncIterable<v25.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v25.BlockNumber, v: ((v25.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v25.BlockNumber): Promise<[k: v25.BlockNumber, v: ((v25.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v25.BlockNumber, v: ((v25.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v25.BlockNumber): AsyncIterable<[k: v25.BlockNumber, v: ((v25.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV26  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v26.Scheduled | undefined)[]
    get(block: Block, key: v26.BlockNumber): Promise<((v26.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v26.BlockNumber[]): Promise<((v26.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v26.BlockNumber[]>
    getKeys(block: Block, key: v26.BlockNumber): Promise<v26.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v26.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v26.BlockNumber): AsyncIterable<v26.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v26.BlockNumber, v: ((v26.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v26.BlockNumber): Promise<[k: v26.BlockNumber, v: ((v26.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v26.BlockNumber, v: ((v26.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v26.BlockNumber): AsyncIterable<[k: v26.BlockNumber, v: ((v26.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV28  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v28.Scheduled | undefined)[]
    get(block: Block, key: v28.BlockNumber): Promise<((v28.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v28.BlockNumber[]): Promise<((v28.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v28.BlockNumber[]>
    getKeys(block: Block, key: v28.BlockNumber): Promise<v28.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v28.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v28.BlockNumber): AsyncIterable<v28.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v28.BlockNumber, v: ((v28.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v28.BlockNumber): Promise<[k: v28.BlockNumber, v: ((v28.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v28.BlockNumber, v: ((v28.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v28.BlockNumber): AsyncIterable<[k: v28.BlockNumber, v: ((v28.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV29  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v29.Scheduled | undefined)[]
    get(block: Block, key: v29.BlockNumber): Promise<((v29.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v29.BlockNumber[]): Promise<((v29.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v29.BlockNumber[]>
    getKeys(block: Block, key: v29.BlockNumber): Promise<v29.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v29.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v29.BlockNumber): AsyncIterable<v29.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v29.BlockNumber, v: ((v29.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v29.BlockNumber): Promise<[k: v29.BlockNumber, v: ((v29.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v29.BlockNumber, v: ((v29.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v29.BlockNumber): AsyncIterable<[k: v29.BlockNumber, v: ((v29.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV30  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v30.Scheduled | undefined)[]
    get(block: Block, key: v30.BlockNumber): Promise<((v30.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v30.BlockNumber[]): Promise<((v30.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v30.BlockNumber[]>
    getKeys(block: Block, key: v30.BlockNumber): Promise<v30.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v30.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v30.BlockNumber): AsyncIterable<v30.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v30.BlockNumber, v: ((v30.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v30.BlockNumber): Promise<[k: v30.BlockNumber, v: ((v30.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v30.BlockNumber, v: ((v30.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v30.BlockNumber): AsyncIterable<[k: v30.BlockNumber, v: ((v30.Scheduled | undefined)[] | undefined)][]>
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
export interface AgendaV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v9110.ScheduledV2 | undefined)[]
    get(block: Block, key: number): Promise<((v9110.ScheduledV2 | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v9110.ScheduledV2 | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v9110.ScheduledV2 | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v9110.ScheduledV2 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v9110.ScheduledV2 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v9110.ScheduledV2 | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV9140  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v9140.ScheduledV2 | undefined)[]
    get(block: Block, key: number): Promise<((v9140.ScheduledV2 | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v9140.ScheduledV2 | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v9140.ScheduledV2 | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v9140.ScheduledV2 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v9140.ScheduledV2 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v9140.ScheduledV2 | undefined)[] | undefined)][]>
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
export interface AgendaV9270  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v9270.ScheduledV3 | undefined)[]
    get(block: Block, key: number): Promise<((v9270.ScheduledV3 | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v9270.ScheduledV3 | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v9270.ScheduledV3 | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v9270.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v9270.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v9270.ScheduledV3 | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV9280  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v9280.ScheduledV3 | undefined)[]
    get(block: Block, key: number): Promise<((v9280.ScheduledV3 | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v9280.ScheduledV3 | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v9280.ScheduledV3 | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v9280.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v9280.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v9280.ScheduledV3 | undefined)[] | undefined)][]>
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
export interface AgendaV9340  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v9340.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((v9340.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v9340.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v9340.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v9340.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v9340.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v9340.Scheduled | undefined)[] | undefined)][]>
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

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV1000001  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v1000001.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((v1000001.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v1000001.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v1000001.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v1000001.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v1000001.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v1000001.Scheduled | undefined)[] | undefined)][]>
}

export const lookup =  {
    /**
     *  Lookup from identity to the block number and index of the task.
     */
    v0: new StorageType('Scheduler.Lookup', 'Optional', [sts.bytes()], v0.TaskAddress) as LookupV0,
}

/**
 *  Lookup from identity to the block number and index of the task.
 */
export interface LookupV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: Bytes): Promise<(v0.TaskAddress | undefined)>
    getMany(block: Block, keys: Bytes[]): Promise<(v0.TaskAddress | undefined)[]>
    getKeys(block: Block): Promise<Bytes[]>
    getKeys(block: Block, key: Bytes): Promise<Bytes[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<Bytes[]>
    getKeysPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<Bytes[]>
    getPairs(block: Block): Promise<[k: Bytes, v: (v0.TaskAddress | undefined)][]>
    getPairs(block: Block, key: Bytes): Promise<[k: Bytes, v: (v0.TaskAddress | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: Bytes, v: (v0.TaskAddress | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<[k: Bytes, v: (v0.TaskAddress | undefined)][]>
}

export const storageVersion =  {
    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    v14: new StorageType('Scheduler.StorageVersion', 'Default', [], v14.Releases) as StorageVersionV14,
    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    v9110: new StorageType('Scheduler.StorageVersion', 'Default', [], v9110.Releases) as StorageVersionV9110,
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface StorageVersionV14  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v14.Releases
    get(block: Block): Promise<(v14.Releases | undefined)>
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface StorageVersionV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9110.Releases
    get(block: Block): Promise<(v9110.Releases | undefined)>
}

export const incompleteSince =  {
    v9340: new StorageType('Scheduler.IncompleteSince', 'Optional', [], sts.number()) as IncompleteSinceV9340,
}

export interface IncompleteSinceV9340  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}
