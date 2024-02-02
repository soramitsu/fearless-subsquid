import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'

export const configuration =  {
    /**
     *  The configuration.
     */
    v1: new StorageType('DmpQueue.Configuration', 'Default', [], v1.ConfigData) as ConfigurationV1,
}

/**
 *  The configuration.
 */
export interface ConfigurationV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.ConfigData
    get(block: Block): Promise<(v1.ConfigData | undefined)>
}

export const pageIndex =  {
    /**
     *  The page index.
     */
    v1: new StorageType('DmpQueue.PageIndex', 'Default', [], v1.PageIndexData) as PageIndexV1,
}

/**
 *  The page index.
 */
export interface PageIndexV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.PageIndexData
    get(block: Block): Promise<(v1.PageIndexData | undefined)>
}

export const pages =  {
    /**
     *  The queue pages.
     */
    v1: new StorageType('DmpQueue.Pages', 'Default', [sts.number()], sts.array(() => sts.tuple(() => [sts.number(), sts.bytes()]))) as PagesV1,
}

/**
 *  The queue pages.
 */
export interface PagesV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, Bytes][]
    get(block: Block, key: number): Promise<([number, Bytes][] | undefined)>
    getMany(block: Block, keys: number[]): Promise<([number, Bytes][] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ([number, Bytes][] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ([number, Bytes][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ([number, Bytes][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ([number, Bytes][] | undefined)][]>
}

export const overweight =  {
    /**
     *  The overweight messages.
     */
    v1: new StorageType('DmpQueue.Overweight', 'Optional', [sts.bigint()], sts.tuple(() => [sts.number(), sts.bytes()])) as OverweightV1,
}

/**
 *  The overweight messages.
 */
export interface OverweightV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<([number, Bytes] | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<([number, Bytes] | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: ([number, Bytes] | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: ([number, Bytes] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: ([number, Bytes] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: ([number, Bytes] | undefined)][]>
}

export const counterForOverweight =  {
    /**
     * Counter for the related counted storage map
     */
    v10: new StorageType('DmpQueue.CounterForOverweight', 'Default', [], sts.number()) as CounterForOverweightV10,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForOverweightV10  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}
