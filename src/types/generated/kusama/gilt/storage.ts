import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9010 from '../v9010'

export const queueTotals =  {
    /**
     *  The totals of items and balances within each queue. Saves a lot of storage reads in the
     *  case of sparsely packed queues.
     * 
     *  The vector is indexed by duration in `Period`s, offset by one, so information on the queue
     *  whose duration is one `Period` would be storage `0`.
     */
    v9010: new StorageType('Gilt.QueueTotals', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v9010.BalanceOf]))) as QueueTotalsV9010,
}

/**
 *  The totals of items and balances within each queue. Saves a lot of storage reads in the
 *  case of sparsely packed queues.
 * 
 *  The vector is indexed by duration in `Period`s, offset by one, so information on the queue
 *  whose duration is one `Period` would be storage `0`.
 */
export interface QueueTotalsV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v9010.BalanceOf][]
    get(block: Block): Promise<([number, v9010.BalanceOf][] | undefined)>
}

export const queues =  {
    /**
     *  The queues of bids ready to become gilts. Indexed by duration (in `Period`s).
     */
    v9010: new StorageType('Gilt.Queues', 'Default', [sts.number()], sts.array(() => v9010.GiltBid)) as QueuesV9010,
}

/**
 *  The queues of bids ready to become gilts. Indexed by duration (in `Period`s).
 */
export interface QueuesV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9010.GiltBid[]
    get(block: Block, key: number): Promise<(v9010.GiltBid[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9010.GiltBid[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9010.GiltBid[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9010.GiltBid[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9010.GiltBid[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9010.GiltBid[] | undefined)][]>
}

export const activeTotal =  {
    /**
     *  Information relating to the gilts currently active.
     */
    v9010: new StorageType('Gilt.ActiveTotal', 'Default', [], v9010.ActiveGiltsTotal) as ActiveTotalV9010,
}

/**
 *  Information relating to the gilts currently active.
 */
export interface ActiveTotalV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9010.ActiveGiltsTotal
    get(block: Block): Promise<(v9010.ActiveGiltsTotal | undefined)>
}

export const active =  {
    /**
     *  The currently active gilts, indexed according to the order of creation.
     */
    v9010: new StorageType('Gilt.Active', 'Optional', [v9010.ActiveIndex], v9010.ActiveGilt) as ActiveV9010,
}

/**
 *  The currently active gilts, indexed according to the order of creation.
 */
export interface ActiveV9010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9010.ActiveIndex): Promise<(v9010.ActiveGilt | undefined)>
    getMany(block: Block, keys: v9010.ActiveIndex[]): Promise<(v9010.ActiveGilt | undefined)[]>
    getKeys(block: Block): Promise<v9010.ActiveIndex[]>
    getKeys(block: Block, key: v9010.ActiveIndex): Promise<v9010.ActiveIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9010.ActiveIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v9010.ActiveIndex): AsyncIterable<v9010.ActiveIndex[]>
    getPairs(block: Block): Promise<[k: v9010.ActiveIndex, v: (v9010.ActiveGilt | undefined)][]>
    getPairs(block: Block, key: v9010.ActiveIndex): Promise<[k: v9010.ActiveIndex, v: (v9010.ActiveGilt | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9010.ActiveIndex, v: (v9010.ActiveGilt | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9010.ActiveIndex): AsyncIterable<[k: v9010.ActiveIndex, v: (v9010.ActiveGilt | undefined)][]>
}
