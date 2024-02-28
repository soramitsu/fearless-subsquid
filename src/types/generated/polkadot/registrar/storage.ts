import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v9110 from '../v9110'
import * as v1000001 from '../v1000001'

export const parachains =  {
    v0: new StorageType('Registrar.Parachains', 'Default', [], sts.array(() => v0.ParaId)) as ParachainsV0,
}

export interface ParachainsV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.ParaId[]
    get(block: Block): Promise<(v0.ParaId[] | undefined)>
}

export const threadCount =  {
    /**
     *  The number of threads to schedule per block.
     */
    v0: new StorageType('Registrar.ThreadCount', 'Default', [], sts.number()) as ThreadCountV0,
}

/**
 *  The number of threads to schedule per block.
 */
export interface ThreadCountV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const selectedThreads =  {
    /**
     *  An array of the queue of set of threads scheduled for the coming blocks; ordered by
     *  ascending para ID. There can be no duplicates of para ID in each list item.
     */
    v0: new StorageType('Registrar.SelectedThreads', 'Default', [], sts.array(() => sts.array(() => sts.tuple(() => [v0.ParaId, v0.CollatorId])))) as SelectedThreadsV0,
}

/**
 *  An array of the queue of set of threads scheduled for the coming blocks; ordered by
 *  ascending para ID. There can be no duplicates of para ID in each list item.
 */
export interface SelectedThreadsV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v0.ParaId, v0.CollatorId][][]
    get(block: Block): Promise<([v0.ParaId, v0.CollatorId][][] | undefined)>
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
    v0: new StorageType('Registrar.Active', 'Default', [], sts.array(() => sts.tuple(() => [v0.ParaId, sts.option(() => sts.tuple(() => [v0.CollatorId, v0.Retriable]))]))) as ActiveV0,
}

/**
 *  Parathreads/chains scheduled for execution this block. If the collator ID is set, then
 *  a particular collator has already been chosen for the next block, and no other collator
 *  may provide the block. In this case we allow the possibility of the combination being
 *  retried in a later block, expressed by `Retriable`.
 * 
 *  Ordered by ParaId.
 */
export interface ActiveV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v0.ParaId, ([v0.CollatorId, v0.Retriable] | undefined)][]
    get(block: Block): Promise<([v0.ParaId, ([v0.CollatorId, v0.Retriable] | undefined)][] | undefined)>
}

export const nextFreeId =  {
    /**
     *  The next unused ParaId value. Start this high in order to keep low numbers for
     *  system-level chains.
     */
    v0: new StorageType('Registrar.NextFreeId', 'Default', [], v0.ParaId) as NextFreeIdV0,
}

/**
 *  The next unused ParaId value. Start this high in order to keep low numbers for
 *  system-level chains.
 */
export interface NextFreeIdV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.ParaId
    get(block: Block): Promise<(v0.ParaId | undefined)>
}

export const pendingSwap =  {
    /**
     *  Pending swap operations.
     */
    v0: new StorageType('Registrar.PendingSwap', 'Optional', [v0.ParaId], v0.ParaId) as PendingSwapV0,
}

/**
 *  Pending swap operations.
 */
export interface PendingSwapV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.ParaId): Promise<(v0.ParaId | undefined)>
    getMany(block: Block, keys: v0.ParaId[]): Promise<(v0.ParaId | undefined)[]>
    getKeys(block: Block): Promise<v0.ParaId[]>
    getKeys(block: Block, key: v0.ParaId): Promise<v0.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.ParaId): AsyncIterable<v0.ParaId[]>
    getPairs(block: Block): Promise<[k: v0.ParaId, v: (v0.ParaId | undefined)][]>
    getPairs(block: Block, key: v0.ParaId): Promise<[k: v0.ParaId, v: (v0.ParaId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.ParaId, v: (v0.ParaId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.ParaId): AsyncIterable<[k: v0.ParaId, v: (v0.ParaId | undefined)][]>
}

export const paras =  {
    /**
     *  Map of all registered parathreads/chains.
     */
    v0: new StorageType('Registrar.Paras', 'Optional', [v0.ParaId], v0.ParaInfo) as ParasV0,
    /**
     *  Amount held on deposit for each para and the original depositor.
     * 
     *  The given account ID is responsible for registering the code and initial head data, but may
     *  only do so if it isn't yet registered. (After that, it's up to governance to do so.)
     */
    v1000001: new StorageType('Registrar.Paras', 'Optional', [v1000001.Id], v1000001.ParaInfo) as ParasV1000001,
}

/**
 *  Map of all registered parathreads/chains.
 */
export interface ParasV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.ParaId): Promise<(v0.ParaInfo | undefined)>
    getMany(block: Block, keys: v0.ParaId[]): Promise<(v0.ParaInfo | undefined)[]>
    getKeys(block: Block): Promise<v0.ParaId[]>
    getKeys(block: Block, key: v0.ParaId): Promise<v0.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.ParaId): AsyncIterable<v0.ParaId[]>
    getPairs(block: Block): Promise<[k: v0.ParaId, v: (v0.ParaInfo | undefined)][]>
    getPairs(block: Block, key: v0.ParaId): Promise<[k: v0.ParaId, v: (v0.ParaInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.ParaId, v: (v0.ParaInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.ParaId): AsyncIterable<[k: v0.ParaId, v: (v0.ParaInfo | undefined)][]>
}

/**
 *  Amount held on deposit for each para and the original depositor.
 * 
 *  The given account ID is responsible for registering the code and initial head data, but may
 *  only do so if it isn't yet registered. (After that, it's up to governance to do so.)
 */
export interface ParasV1000001  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1000001.Id): Promise<(v1000001.ParaInfo | undefined)>
    getMany(block: Block, keys: v1000001.Id[]): Promise<(v1000001.ParaInfo | undefined)[]>
    getKeys(block: Block): Promise<v1000001.Id[]>
    getKeys(block: Block, key: v1000001.Id): Promise<v1000001.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1000001.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v1000001.Id): AsyncIterable<v1000001.Id[]>
    getPairs(block: Block): Promise<[k: v1000001.Id, v: (v1000001.ParaInfo | undefined)][]>
    getPairs(block: Block, key: v1000001.Id): Promise<[k: v1000001.Id, v: (v1000001.ParaInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1000001.Id, v: (v1000001.ParaInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1000001.Id): AsyncIterable<[k: v1000001.Id, v: (v1000001.ParaInfo | undefined)][]>
}

export const retryQueue =  {
    /**
     *  The current queue for parathreads that should be retried.
     */
    v0: new StorageType('Registrar.RetryQueue', 'Default', [], sts.array(() => sts.array(() => sts.tuple(() => [v0.ParaId, v0.CollatorId])))) as RetryQueueV0,
}

/**
 *  The current queue for parathreads that should be retried.
 */
export interface RetryQueueV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v0.ParaId, v0.CollatorId][][]
    get(block: Block): Promise<([v0.ParaId, v0.CollatorId][][] | undefined)>
}

export const debtors =  {
    /**
     *  Users who have paid a parathread's deposit
     */
    v0: new StorageType('Registrar.Debtors', 'Default', [v0.ParaId], v0.AccountId) as DebtorsV0,
}

/**
 *  Users who have paid a parathread's deposit
 */
export interface DebtorsV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.AccountId
    get(block: Block, key: v0.ParaId): Promise<(v0.AccountId | undefined)>
    getMany(block: Block, keys: v0.ParaId[]): Promise<(v0.AccountId | undefined)[]>
    getKeys(block: Block): Promise<v0.ParaId[]>
    getKeys(block: Block, key: v0.ParaId): Promise<v0.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.ParaId): AsyncIterable<v0.ParaId[]>
    getPairs(block: Block): Promise<[k: v0.ParaId, v: (v0.AccountId | undefined)][]>
    getPairs(block: Block, key: v0.ParaId): Promise<[k: v0.ParaId, v: (v0.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.ParaId, v: (v0.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.ParaId): AsyncIterable<[k: v0.ParaId, v: (v0.AccountId | undefined)][]>
}

export const nextFreeParaId =  {
    /**
     *  The next free `ParaId`.
     */
    v9110: new StorageType('Registrar.NextFreeParaId', 'Default', [], v9110.Id) as NextFreeParaIdV9110,
}

/**
 *  The next free `ParaId`.
 */
export interface NextFreeParaIdV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9110.Id
    get(block: Block): Promise<(v9110.Id | undefined)>
}
