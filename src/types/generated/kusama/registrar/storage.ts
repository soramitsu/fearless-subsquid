import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v9010 from '../v9010'
import * as v1000000 from '../v1000000'

export const parachains =  {
    v1020: new StorageType('Registrar.Parachains', 'Default', [], sts.array(() => v1020.ParaId)) as ParachainsV1020,
}

export interface ParachainsV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.ParaId[]
    get(block: Block): Promise<(v1020.ParaId[] | undefined)>
}

export const threadCount =  {
    /**
     *  The number of threads to schedule per block.
     */
    v1020: new StorageType('Registrar.ThreadCount', 'Default', [], sts.number()) as ThreadCountV1020,
}

/**
 *  The number of threads to schedule per block.
 */
export interface ThreadCountV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const selectedThreads =  {
    /**
     *  An array of the queue of set of threads scheduled for the coming blocks; ordered by
     *  ascending para ID. There can be no duplicates of para ID in each list item.
     */
    v1020: new StorageType('Registrar.SelectedThreads', 'Default', [], sts.array(() => sts.array(() => sts.tuple(() => [v1020.ParaId, v1020.CollatorId])))) as SelectedThreadsV1020,
}

/**
 *  An array of the queue of set of threads scheduled for the coming blocks; ordered by
 *  ascending para ID. There can be no duplicates of para ID in each list item.
 */
export interface SelectedThreadsV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1020.ParaId, v1020.CollatorId][][]
    get(block: Block): Promise<([v1020.ParaId, v1020.CollatorId][][] | undefined)>
}

export const active =  {
    /**
     *  Parathreads/chains scheduled for execution this block. If the collator ID is set, then
     *  a particular collator has already been chosen for the next block, and no other collator
     *  may provide the block. In this case we allow the possibility of the combination being
     *  retried in a later block, expressed by `Retriable`.
     * 
     *  Ordered by ParaId.
     */
    v1020: new StorageType('Registrar.Active', 'Default', [], sts.array(() => sts.tuple(() => [v1020.ParaId, sts.option(() => sts.tuple(() => [v1020.CollatorId, v1020.Retriable]))]))) as ActiveV1020,
}

/**
 *  Parathreads/chains scheduled for execution this block. If the collator ID is set, then
 *  a particular collator has already been chosen for the next block, and no other collator
 *  may provide the block. In this case we allow the possibility of the combination being
 *  retried in a later block, expressed by `Retriable`.
 * 
 *  Ordered by ParaId.
 */
export interface ActiveV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1020.ParaId, ([v1020.CollatorId, v1020.Retriable] | undefined)][]
    get(block: Block): Promise<([v1020.ParaId, ([v1020.CollatorId, v1020.Retriable] | undefined)][] | undefined)>
}

export const nextFreeId =  {
    /**
     *  The next unused ParaId value. Start this high in order to keep low numbers for
     *  system-level chains.
     */
    v1020: new StorageType('Registrar.NextFreeId', 'Default', [], v1020.ParaId) as NextFreeIdV1020,
}

/**
 *  The next unused ParaId value. Start this high in order to keep low numbers for
 *  system-level chains.
 */
export interface NextFreeIdV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.ParaId
    get(block: Block): Promise<(v1020.ParaId | undefined)>
}

export const pendingSwap =  {
    /**
     *  Pending swap operations.
     */
    v1020: new StorageType('Registrar.PendingSwap', 'Optional', [v1020.ParaId], v1020.ParaId) as PendingSwapV1020,
}

/**
 *  Pending swap operations.
 */
export interface PendingSwapV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1020.ParaId): Promise<(v1020.ParaId | undefined)>
    getMany(block: Block, keys: v1020.ParaId[]): Promise<(v1020.ParaId | undefined)[]>
}

export const paras =  {
    /**
     *  Map of all registered parathreads/chains.
     */
    v1020: new StorageType('Registrar.Paras', 'Optional', [v1020.ParaId], v1020.ParaInfo) as ParasV1020,
    /**
     *  Amount held on deposit for each para and the original depositor.
     * 
     *  The given account ID is responsible for registering the code and initial head data, but may
     *  only do so if it isn't yet registered. (After that, it's up to governance to do so.)
     */
    v1000000: new StorageType('Registrar.Paras', 'Optional', [v1000000.Id], v1000000.ParaInfo) as ParasV1000000,
}

/**
 *  Map of all registered parathreads/chains.
 */
export interface ParasV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1020.ParaId): Promise<(v1020.ParaInfo | undefined)>
    getMany(block: Block, keys: v1020.ParaId[]): Promise<(v1020.ParaInfo | undefined)[]>
}

/**
 *  Amount held on deposit for each para and the original depositor.
 * 
 *  The given account ID is responsible for registering the code and initial head data, but may
 *  only do so if it isn't yet registered. (After that, it's up to governance to do so.)
 */
export interface ParasV1000000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1000000.Id): Promise<(v1000000.ParaInfo | undefined)>
    getMany(block: Block, keys: v1000000.Id[]): Promise<(v1000000.ParaInfo | undefined)[]>
    getKeys(block: Block): Promise<v1000000.Id[]>
    getKeys(block: Block, key: v1000000.Id): Promise<v1000000.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1000000.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v1000000.Id): AsyncIterable<v1000000.Id[]>
    getPairs(block: Block): Promise<[k: v1000000.Id, v: (v1000000.ParaInfo | undefined)][]>
    getPairs(block: Block, key: v1000000.Id): Promise<[k: v1000000.Id, v: (v1000000.ParaInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1000000.Id, v: (v1000000.ParaInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1000000.Id): AsyncIterable<[k: v1000000.Id, v: (v1000000.ParaInfo | undefined)][]>
}

export const retryQueue =  {
    /**
     *  The current queue for parathreads that should be retried.
     */
    v1020: new StorageType('Registrar.RetryQueue', 'Default', [], sts.array(() => sts.array(() => sts.tuple(() => [v1020.ParaId, v1020.CollatorId])))) as RetryQueueV1020,
}

/**
 *  The current queue for parathreads that should be retried.
 */
export interface RetryQueueV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1020.ParaId, v1020.CollatorId][][]
    get(block: Block): Promise<([v1020.ParaId, v1020.CollatorId][][] | undefined)>
}

export const debtors =  {
    /**
     *  Users who have paid a parathread's deposit
     */
    v1020: new StorageType('Registrar.Debtors', 'Default', [v1020.ParaId], v1020.AccountId) as DebtorsV1020,
}

/**
 *  Users who have paid a parathread's deposit
 */
export interface DebtorsV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.AccountId
    get(block: Block, key: v1020.ParaId): Promise<(v1020.AccountId | undefined)>
    getMany(block: Block, keys: v1020.ParaId[]): Promise<(v1020.AccountId | undefined)[]>
}

export const nextFreeParaId =  {
    /**
     *  The next free `ParaId`.
     */
    v9010: new StorageType('Registrar.NextFreeParaId', 'Default', [], v9010.ParaId) as NextFreeParaIdV9010,
}

/**
 *  The next free `ParaId`.
 */
export interface NextFreeParaIdV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9010.ParaId
    get(block: Block): Promise<(v9010.ParaId | undefined)>
}
