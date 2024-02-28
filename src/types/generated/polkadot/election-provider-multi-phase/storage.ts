import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v29 from '../v29'
import * as v9050 from '../v9050'
import * as v9080 from '../v9080'
import * as v9110 from '../v9110'
import * as v9170 from '../v9170'
import * as v9180 from '../v9180'
import * as v9220 from '../v9220'
import * as v9340 from '../v9340'

export const round =  {
    /**
     *  Internal counter for the number of rounds.
     * 
     *  This is useful for de-duplication of transactions submitted to the pool, and general
     *  diagnostics of the pallet.
     * 
     *  This is merely incremented once per every time that an upstream `elect` is called.
     */
    v29: new StorageType('ElectionProviderMultiPhase.Round', 'Default', [], sts.number()) as RoundV29,
}

/**
 *  Internal counter for the number of rounds.
 * 
 *  This is useful for de-duplication of transactions submitted to the pool, and general
 *  diagnostics of the pallet.
 * 
 *  This is merely incremented once per every time that an upstream `elect` is called.
 */
export interface RoundV29  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const currentPhase =  {
    /**
     *  Current phase.
     */
    v29: new StorageType('ElectionProviderMultiPhase.CurrentPhase', 'Default', [], v29.ElectionPhase) as CurrentPhaseV29,
}

/**
 *  Current phase.
 */
export interface CurrentPhaseV29  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v29.ElectionPhase
    get(block: Block): Promise<(v29.ElectionPhase | undefined)>
}

export const queuedSolution =  {
    /**
     *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
     */
    v29: new StorageType('ElectionProviderMultiPhase.QueuedSolution', 'Optional', [], v29.ReadySolution) as QueuedSolutionV29,
    /**
     *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
     */
    v9110: new StorageType('ElectionProviderMultiPhase.QueuedSolution', 'Optional', [], v9110.ReadySolution) as QueuedSolutionV9110,
    /**
     *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
     */
    v9180: new StorageType('ElectionProviderMultiPhase.QueuedSolution', 'Optional', [], v9180.ReadySolution) as QueuedSolutionV9180,
}

/**
 *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
 */
export interface QueuedSolutionV29  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v29.ReadySolution | undefined)>
}

/**
 *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
 */
export interface QueuedSolutionV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v9110.ReadySolution | undefined)>
}

/**
 *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
 */
export interface QueuedSolutionV9180  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v9180.ReadySolution | undefined)>
}

export const snapshot =  {
    /**
     *  Snapshot data of the round.
     * 
     *  This is created at the beginning of the signed phase and cleared upon calling `elect`.
     */
    v29: new StorageType('ElectionProviderMultiPhase.Snapshot', 'Optional', [], v29.RoundSnapshot) as SnapshotV29,
}

/**
 *  Snapshot data of the round.
 * 
 *  This is created at the beginning of the signed phase and cleared upon calling `elect`.
 */
export interface SnapshotV29  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v29.RoundSnapshot | undefined)>
}

export const desiredTargets =  {
    /**
     *  Desired number of targets to elect for this round.
     * 
     *  Only exists when [`Snapshot`] is present.
     */
    v29: new StorageType('ElectionProviderMultiPhase.DesiredTargets', 'Optional', [], sts.number()) as DesiredTargetsV29,
}

/**
 *  Desired number of targets to elect for this round.
 * 
 *  Only exists when [`Snapshot`] is present.
 */
export interface DesiredTargetsV29  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const snapshotMetadata =  {
    /**
     *  The metadata of the [`RoundSnapshot`]
     * 
     *  Only exists when [`Snapshot`] is present.
     */
    v29: new StorageType('ElectionProviderMultiPhase.SnapshotMetadata', 'Optional', [], v29.SolutionOrSnapshotSize) as SnapshotMetadataV29,
}

/**
 *  The metadata of the [`RoundSnapshot`]
 * 
 *  Only exists when [`Snapshot`] is present.
 */
export interface SnapshotMetadataV29  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v29.SolutionOrSnapshotSize | undefined)>
}

export const minimumUntrustedScore =  {
    /**
     *  The minimum score that each 'untrusted' solution must attain in order to be considered
     *  feasible.
     * 
     *  Can be set via `set_minimum_untrusted_score`.
     */
    v9050: new StorageType('ElectionProviderMultiPhase.MinimumUntrustedScore', 'Optional', [], v9050.ElectionScore) as MinimumUntrustedScoreV9050,
    /**
     *  The minimum score that each 'untrusted' solution must attain in order to be considered
     *  feasible.
     * 
     *  Can be set via `set_minimum_untrusted_score`.
     */
    v9180: new StorageType('ElectionProviderMultiPhase.MinimumUntrustedScore', 'Optional', [], v9180.ElectionScore) as MinimumUntrustedScoreV9180,
}

/**
 *  The minimum score that each 'untrusted' solution must attain in order to be considered
 *  feasible.
 * 
 *  Can be set via `set_minimum_untrusted_score`.
 */
export interface MinimumUntrustedScoreV9050  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v9050.ElectionScore | undefined)>
}

/**
 *  The minimum score that each 'untrusted' solution must attain in order to be considered
 *  feasible.
 * 
 *  Can be set via `set_minimum_untrusted_score`.
 */
export interface MinimumUntrustedScoreV9180  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v9180.ElectionScore | undefined)>
}

export const signedSubmissionNextIndex =  {
    /**
     *  The next index to be assigned to an incoming signed submission.
     * 
     *  Every accepted submission is assigned a unique index; that index is bound to that particular
     *  submission for the duration of the election. On election finalization, the next index is
     *  reset to 0.
     * 
     *  We can't just use `SignedSubmissionIndices.len()`, because that's a bounded set; past its
     *  capacity, it will simply saturate. We can't just iterate over `SignedSubmissionsMap`,
     *  because iteration is slow. Instead, we store the value here.
     */
    v9080: new StorageType('ElectionProviderMultiPhase.SignedSubmissionNextIndex', 'Default', [], sts.number()) as SignedSubmissionNextIndexV9080,
}

/**
 *  The next index to be assigned to an incoming signed submission.
 * 
 *  Every accepted submission is assigned a unique index; that index is bound to that particular
 *  submission for the duration of the election. On election finalization, the next index is
 *  reset to 0.
 * 
 *  We can't just use `SignedSubmissionIndices.len()`, because that's a bounded set; past its
 *  capacity, it will simply saturate. We can't just iterate over `SignedSubmissionsMap`,
 *  because iteration is slow. Instead, we store the value here.
 */
export interface SignedSubmissionNextIndexV9080  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const signedSubmissionIndices =  {
    /**
     *  A sorted, bounded set of `(score, index)`, where each `index` points to a value in
     *  `SignedSubmissions`.
     * 
     *  We never need to process more than a single signed submission at a time. Signed submissions
     *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
     *  them one at a time instead of reading and decoding all of them at once.
     */
    v9080: new StorageType('ElectionProviderMultiPhase.SignedSubmissionIndices', 'Default', [], sts.array(() => sts.tuple(() => [v9080.ElectionScore, sts.number()]))) as SignedSubmissionIndicesV9080,
    /**
     *  A sorted, bounded set of `(score, index)`, where each `index` points to a value in
     *  `SignedSubmissions`.
     * 
     *  We never need to process more than a single signed submission at a time. Signed submissions
     *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
     *  them one at a time instead of reading and decoding all of them at once.
     */
    v9180: new StorageType('ElectionProviderMultiPhase.SignedSubmissionIndices', 'Default', [], sts.array(() => sts.tuple(() => [v9180.ElectionScore, sts.number()]))) as SignedSubmissionIndicesV9180,
    /**
     *  A sorted, bounded vector of `(score, block_number, index)`, where each `index` points to a
     *  value in `SignedSubmissions`.
     * 
     *  We never need to process more than a single signed submission at a time. Signed submissions
     *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
     *  them one at a time instead of reading and decoding all of them at once.
     */
    v9340: new StorageType('ElectionProviderMultiPhase.SignedSubmissionIndices', 'Default', [], sts.array(() => sts.tuple(() => [v9340.ElectionScore, sts.number(), sts.number()]))) as SignedSubmissionIndicesV9340,
}

/**
 *  A sorted, bounded set of `(score, index)`, where each `index` points to a value in
 *  `SignedSubmissions`.
 * 
 *  We never need to process more than a single signed submission at a time. Signed submissions
 *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
 *  them one at a time instead of reading and decoding all of them at once.
 */
export interface SignedSubmissionIndicesV9080  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v9080.ElectionScore, number][]
    get(block: Block): Promise<([v9080.ElectionScore, number][] | undefined)>
}

/**
 *  A sorted, bounded set of `(score, index)`, where each `index` points to a value in
 *  `SignedSubmissions`.
 * 
 *  We never need to process more than a single signed submission at a time. Signed submissions
 *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
 *  them one at a time instead of reading and decoding all of them at once.
 */
export interface SignedSubmissionIndicesV9180  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v9180.ElectionScore, number][]
    get(block: Block): Promise<([v9180.ElectionScore, number][] | undefined)>
}

/**
 *  A sorted, bounded vector of `(score, block_number, index)`, where each `index` points to a
 *  value in `SignedSubmissions`.
 * 
 *  We never need to process more than a single signed submission at a time. Signed submissions
 *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
 *  them one at a time instead of reading and decoding all of them at once.
 */
export interface SignedSubmissionIndicesV9340  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v9340.ElectionScore, number, number][]
    get(block: Block): Promise<([v9340.ElectionScore, number, number][] | undefined)>
}

export const signedSubmissionsMap =  {
    /**
     *  Unchecked, signed solutions.
     * 
     *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
     *  allowing us to keep only a single one in memory at a time.
     * 
     *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
     *  affect; we shouldn't need a cryptographically secure hasher.
     */
    v9080: new StorageType('ElectionProviderMultiPhase.SignedSubmissionsMap', 'Default', [sts.number()], v9080.SignedSubmissionOf) as SignedSubmissionsMapV9080,
    /**
     *  Unchecked, signed solutions.
     * 
     *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
     *  allowing us to keep only a single one in memory at a time.
     * 
     *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
     *  affect; we shouldn't need a cryptographically secure hasher.
     */
    v9110: new StorageType('ElectionProviderMultiPhase.SignedSubmissionsMap', 'Default', [sts.number()], v9110.SignedSubmission) as SignedSubmissionsMapV9110,
    /**
     *  Unchecked, signed solutions.
     * 
     *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
     *  allowing us to keep only a single one in memory at a time.
     * 
     *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
     *  affect; we shouldn't need a cryptographically secure hasher.
     */
    v9170: new StorageType('ElectionProviderMultiPhase.SignedSubmissionsMap', 'Optional', [sts.number()], v9170.SignedSubmission) as SignedSubmissionsMapV9170,
    /**
     *  Unchecked, signed solutions.
     * 
     *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
     *  allowing us to keep only a single one in memory at a time.
     * 
     *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
     *  affect; we shouldn't need a cryptographically secure hasher.
     */
    v9180: new StorageType('ElectionProviderMultiPhase.SignedSubmissionsMap', 'Optional', [sts.number()], v9180.SignedSubmission) as SignedSubmissionsMapV9180,
    /**
     *  Unchecked, signed solutions.
     * 
     *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
     *  allowing us to keep only a single one in memory at a time.
     * 
     *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
     *  affect; we shouldn't need a cryptographically secure hasher.
     */
    v9220: new StorageType('ElectionProviderMultiPhase.SignedSubmissionsMap', 'Optional', [sts.number()], v9220.SignedSubmission) as SignedSubmissionsMapV9220,
}

/**
 *  Unchecked, signed solutions.
 * 
 *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
 *  allowing us to keep only a single one in memory at a time.
 * 
 *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
 *  affect; we shouldn't need a cryptographically secure hasher.
 */
export interface SignedSubmissionsMapV9080  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9080.SignedSubmissionOf
    get(block: Block, key: number): Promise<(v9080.SignedSubmissionOf | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9080.SignedSubmissionOf | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9080.SignedSubmissionOf | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9080.SignedSubmissionOf | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9080.SignedSubmissionOf | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9080.SignedSubmissionOf | undefined)][]>
}

/**
 *  Unchecked, signed solutions.
 * 
 *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
 *  allowing us to keep only a single one in memory at a time.
 * 
 *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
 *  affect; we shouldn't need a cryptographically secure hasher.
 */
export interface SignedSubmissionsMapV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9110.SignedSubmission
    get(block: Block, key: number): Promise<(v9110.SignedSubmission | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9110.SignedSubmission | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9110.SignedSubmission | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9110.SignedSubmission | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9110.SignedSubmission | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9110.SignedSubmission | undefined)][]>
}

/**
 *  Unchecked, signed solutions.
 * 
 *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
 *  allowing us to keep only a single one in memory at a time.
 * 
 *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
 *  affect; we shouldn't need a cryptographically secure hasher.
 */
export interface SignedSubmissionsMapV9170  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9170.SignedSubmission | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9170.SignedSubmission | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9170.SignedSubmission | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9170.SignedSubmission | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9170.SignedSubmission | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9170.SignedSubmission | undefined)][]>
}

/**
 *  Unchecked, signed solutions.
 * 
 *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
 *  allowing us to keep only a single one in memory at a time.
 * 
 *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
 *  affect; we shouldn't need a cryptographically secure hasher.
 */
export interface SignedSubmissionsMapV9180  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9180.SignedSubmission | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9180.SignedSubmission | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9180.SignedSubmission | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9180.SignedSubmission | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9180.SignedSubmission | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9180.SignedSubmission | undefined)][]>
}

/**
 *  Unchecked, signed solutions.
 * 
 *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
 *  allowing us to keep only a single one in memory at a time.
 * 
 *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
 *  affect; we shouldn't need a cryptographically secure hasher.
 */
export interface SignedSubmissionsMapV9220  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v9220.SignedSubmission | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9220.SignedSubmission | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9220.SignedSubmission | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9220.SignedSubmission | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9220.SignedSubmission | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9220.SignedSubmission | undefined)][]>
}
