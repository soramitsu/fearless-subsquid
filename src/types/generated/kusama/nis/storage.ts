import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9340 from '../v9340'
import * as v9381 from '../v9381'

export const queueTotals =  {
    /**
     *  The totals of items and balances within each queue. Saves a lot of storage reads in the
     *  case of sparsely packed queues.
     * 
     *  The vector is indexed by duration in `Period`s, offset by one, so information on the queue
     *  whose duration is one `Period` would be storage `0`.
     */
    v9340: new StorageType('Nis.QueueTotals', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), sts.bigint()]))) as QueueTotalsV9340,
}

/**
 *  The totals of items and balances within each queue. Saves a lot of storage reads in the
 *  case of sparsely packed queues.
 * 
 *  The vector is indexed by duration in `Period`s, offset by one, so information on the queue
 *  whose duration is one `Period` would be storage `0`.
 */
export interface QueueTotalsV9340  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, bigint][]
    get(block: Block): Promise<([number, bigint][] | undefined)>
}

export const queues =  {
    /**
     *  The queues of bids. Indexed by duration (in `Period`s).
     */
    v9340: new StorageType('Nis.Queues', 'Default', [sts.number()], sts.array(() => v9340.Type_723)) as QueuesV9340,
}

/**
 *  The queues of bids. Indexed by duration (in `Period`s).
 */
export interface QueuesV9340  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9340.Type_723[]
    get(block: Block, key: number): Promise<(v9340.Type_723[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9340.Type_723[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9340.Type_723[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9340.Type_723[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9340.Type_723[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9340.Type_723[] | undefined)][]>
}

export const summary =  {
    /**
     *  Summary information over the general state.
     */
    v9340: new StorageType('Nis.Summary', 'Default', [], v9340.SummaryRecord) as SummaryV9340,
    /**
     *  Summary information over the general state.
     */
    v9381: new StorageType('Nis.Summary', 'Default', [], v9381.SummaryRecord) as SummaryV9381,
}

/**
 *  Summary information over the general state.
 */
export interface SummaryV9340  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9340.SummaryRecord
    get(block: Block): Promise<(v9340.SummaryRecord | undefined)>
}

/**
 *  Summary information over the general state.
 */
export interface SummaryV9381  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9381.SummaryRecord
    get(block: Block): Promise<(v9381.SummaryRecord | undefined)>
}

export const receipts =  {
    /**
     *  The currently outstanding receipts, indexed according to the order of creation.
     */
    v9340: new StorageType('Nis.Receipts', 'Optional', [sts.number()], v9340.ReceiptRecord) as ReceiptsV9340,
    /**
     *  The currently outstanding receipts, indexed according to the order of creation.
     */
    v9381: new StorageType('Nis.Receipts', 'Optional', [sts.number()], v9381.ReceiptRecord) as ReceiptsV9381,
}

/**
 *  The currently outstanding receipts, indexed according to the order of creation.
 */
export interface ReceiptsV9340  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9340.ReceiptRecord | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9340.ReceiptRecord | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9340.ReceiptRecord | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9340.ReceiptRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9340.ReceiptRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9340.ReceiptRecord | undefined)][]>
}

/**
 *  The currently outstanding receipts, indexed according to the order of creation.
 */
export interface ReceiptsV9381  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9381.ReceiptRecord | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9381.ReceiptRecord | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9381.ReceiptRecord | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9381.ReceiptRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9381.ReceiptRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9381.ReceiptRecord | undefined)][]>
}
