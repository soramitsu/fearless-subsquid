import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9300 from '../v9300'
import * as v9340 from '../v9340'

export const head =  {
    /**
     *  The current "head of the queue" being unstaked.
     */
    v9300: new StorageType('FastUnstake.Head', 'Optional', [], v9300.UnstakeRequest) as HeadV9300,
    /**
     *  The current "head of the queue" being unstaked.
     */
    v9340: new StorageType('FastUnstake.Head', 'Optional', [], v9340.UnstakeRequest) as HeadV9340,
}

/**
 *  The current "head of the queue" being unstaked.
 */
export interface HeadV9300  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v9300.UnstakeRequest | undefined)>
}

/**
 *  The current "head of the queue" being unstaked.
 */
export interface HeadV9340  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v9340.UnstakeRequest | undefined)>
}

export const queue =  {
    /**
     *  The map of all accounts wishing to be unstaked.
     * 
     *  Keeps track of `AccountId` wishing to unstake and it's corresponding deposit.
     */
    v9300: new StorageType('FastUnstake.Queue', 'Optional', [v9300.AccountId32], sts.bigint()) as QueueV9300,
}

/**
 *  The map of all accounts wishing to be unstaked.
 * 
 *  Keeps track of `AccountId` wishing to unstake and it's corresponding deposit.
 */
export interface QueueV9300  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9300.AccountId32): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v9300.AccountId32[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v9300.AccountId32[]>
    getKeys(block: Block, key: v9300.AccountId32): Promise<v9300.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9300.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9300.AccountId32): AsyncIterable<v9300.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9300.AccountId32, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v9300.AccountId32): Promise<[k: v9300.AccountId32, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9300.AccountId32, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9300.AccountId32): AsyncIterable<[k: v9300.AccountId32, v: (bigint | undefined)][]>
}

export const counterForQueue =  {
    /**
     * Counter for the related counted storage map
     */
    v9300: new StorageType('FastUnstake.CounterForQueue', 'Default', [], sts.number()) as CounterForQueueV9300,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForQueueV9300  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const erasToCheckPerBlock =  {
    /**
     *  Number of eras to check per block.
     * 
     *  If set to 0, this pallet does absolutely nothing.
     * 
     *  Based on the amount of weight available at `on_idle`, up to this many eras of a single
     *  nominator might be checked.
     */
    v9300: new StorageType('FastUnstake.ErasToCheckPerBlock', 'Default', [], sts.number()) as ErasToCheckPerBlockV9300,
}

/**
 *  Number of eras to check per block.
 * 
 *  If set to 0, this pallet does absolutely nothing.
 * 
 *  Based on the amount of weight available at `on_idle`, up to this many eras of a single
 *  nominator might be checked.
 */
export interface ErasToCheckPerBlockV9300  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}
