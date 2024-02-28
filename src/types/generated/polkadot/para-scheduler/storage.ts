import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9110 from '../v9110'
import * as v1000001 from '../v1000001'

export const validatorGroups =  {
    /**
     *  All the validator groups. One for each core. Indices are into `ActiveValidators` - not the
     *  broader set of Polkadot validators, but instead just the subset used for parachains during
     *  this session.
     * 
     *  Bound: The number of cores is the sum of the numbers of parachains and parathread multiplexers.
     *  Reasonably, 100-1000. The dominant factor is the number of validators: safe upper bound at 10k.
     */
    v9110: new StorageType('ParaScheduler.ValidatorGroups', 'Default', [], sts.array(() => sts.array(() => v9110.V0ValidatorIndex))) as ValidatorGroupsV9110,
}

/**
 *  All the validator groups. One for each core. Indices are into `ActiveValidators` - not the
 *  broader set of Polkadot validators, but instead just the subset used for parachains during
 *  this session.
 * 
 *  Bound: The number of cores is the sum of the numbers of parachains and parathread multiplexers.
 *  Reasonably, 100-1000. The dominant factor is the number of validators: safe upper bound at 10k.
 */
export interface ValidatorGroupsV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9110.V0ValidatorIndex[][]
    get(block: Block): Promise<(v9110.V0ValidatorIndex[][] | undefined)>
}

export const parathreadQueue =  {
    /**
     *  A queue of upcoming claims and which core they should be mapped onto.
     * 
     *  The number of queued claims is bounded at the `scheduling_lookahead`
     *  multiplied by the number of parathread multiplexer cores. Reasonably, 10 * 50 = 500.
     */
    v9110: new StorageType('ParaScheduler.ParathreadQueue', 'Default', [], v9110.ParathreadClaimQueue) as ParathreadQueueV9110,
}

/**
 *  A queue of upcoming claims and which core they should be mapped onto.
 * 
 *  The number of queued claims is bounded at the `scheduling_lookahead`
 *  multiplied by the number of parathread multiplexer cores. Reasonably, 10 * 50 = 500.
 */
export interface ParathreadQueueV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9110.ParathreadClaimQueue
    get(block: Block): Promise<(v9110.ParathreadClaimQueue | undefined)>
}

export const availabilityCores =  {
    /**
     *  One entry for each availability core. Entries are `None` if the core is not currently occupied. Can be
     *  temporarily `Some` if scheduled but not occupied.
     *  The i'th parachain belongs to the i'th core, with the remaining cores all being
     *  parathread-multiplexers.
     * 
     *  Bounded by the maximum of either of these two values:
     *    * The number of parachains and parathread multiplexers
     *    * The number of validators divided by `configuration.max_validators_per_core`.
     */
    v9110: new StorageType('ParaScheduler.AvailabilityCores', 'Default', [], sts.array(() => sts.option(() => v9110.V1CoreOccupied))) as AvailabilityCoresV9110,
    /**
     *  One entry for each availability core. Entries are `None` if the core is not currently
     *  occupied. Can be temporarily `Some` if scheduled but not occupied.
     *  The i'th parachain belongs to the i'th core, with the remaining cores all being
     *  parathread-multiplexers.
     * 
     *  Bounded by the maximum of either of these two values:
     *    * The number of parachains and parathread multiplexers
     *    * The number of validators divided by `configuration.max_validators_per_core`.
     */
    v1000001: new StorageType('ParaScheduler.AvailabilityCores', 'Default', [], sts.array(() => v1000001.V5CoreOccupied)) as AvailabilityCoresV1000001,
}

/**
 *  One entry for each availability core. Entries are `None` if the core is not currently occupied. Can be
 *  temporarily `Some` if scheduled but not occupied.
 *  The i'th parachain belongs to the i'th core, with the remaining cores all being
 *  parathread-multiplexers.
 * 
 *  Bounded by the maximum of either of these two values:
 *    * The number of parachains and parathread multiplexers
 *    * The number of validators divided by `configuration.max_validators_per_core`.
 */
export interface AvailabilityCoresV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v9110.V1CoreOccupied | undefined)[]
    get(block: Block): Promise<((v9110.V1CoreOccupied | undefined)[] | undefined)>
}

/**
 *  One entry for each availability core. Entries are `None` if the core is not currently
 *  occupied. Can be temporarily `Some` if scheduled but not occupied.
 *  The i'th parachain belongs to the i'th core, with the remaining cores all being
 *  parathread-multiplexers.
 * 
 *  Bounded by the maximum of either of these two values:
 *    * The number of parachains and parathread multiplexers
 *    * The number of validators divided by `configuration.max_validators_per_core`.
 */
export interface AvailabilityCoresV1000001  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1000001.V5CoreOccupied[]
    get(block: Block): Promise<(v1000001.V5CoreOccupied[] | undefined)>
}

export const parathreadClaimIndex =  {
    /**
     *  An index used to ensure that only one claim on a parathread exists in the queue or is
     *  currently being handled by an occupied core.
     * 
     *  Bounded by the number of parathread cores and scheduling lookahead. Reasonably, 10 * 50 = 500.
     */
    v9110: new StorageType('ParaScheduler.ParathreadClaimIndex', 'Default', [], sts.array(() => v9110.Id)) as ParathreadClaimIndexV9110,
}

/**
 *  An index used to ensure that only one claim on a parathread exists in the queue or is
 *  currently being handled by an occupied core.
 * 
 *  Bounded by the number of parathread cores and scheduling lookahead. Reasonably, 10 * 50 = 500.
 */
export interface ParathreadClaimIndexV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9110.Id[]
    get(block: Block): Promise<(v9110.Id[] | undefined)>
}

export const sessionStartBlock =  {
    /**
     *  The block number where the session start occurred. Used to track how many group rotations have occurred.
     * 
     *  Note that in the context of parachains modules the session change is signaled during
     *  the block and enacted at the end of the block (at the finalization stage, to be exact).
     *  Thus for all intents and purposes the effect of the session change is observed at the
     *  block following the session change, block number of which we save in this storage value.
     */
    v9110: new StorageType('ParaScheduler.SessionStartBlock', 'Default', [], sts.number()) as SessionStartBlockV9110,
}

/**
 *  The block number where the session start occurred. Used to track how many group rotations have occurred.
 * 
 *  Note that in the context of parachains modules the session change is signaled during
 *  the block and enacted at the end of the block (at the finalization stage, to be exact).
 *  Thus for all intents and purposes the effect of the session change is observed at the
 *  block following the session change, block number of which we save in this storage value.
 */
export interface SessionStartBlockV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const scheduled =  {
    /**
     *  Currently scheduled cores - free but up to be occupied.
     * 
     *  Bounded by the number of cores: one for each parachain and parathread multiplexer.
     * 
     *  The value contained here will not be valid after the end of a block. Runtime APIs should be used to determine scheduled cores/
     *  for the upcoming block.
     */
    v9110: new StorageType('ParaScheduler.Scheduled', 'Default', [], sts.array(() => v9110.CoreAssignment)) as ScheduledV9110,
}

/**
 *  Currently scheduled cores - free but up to be occupied.
 * 
 *  Bounded by the number of cores: one for each parachain and parathread multiplexer.
 * 
 *  The value contained here will not be valid after the end of a block. Runtime APIs should be used to determine scheduled cores/
 *  for the upcoming block.
 */
export interface ScheduledV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9110.CoreAssignment[]
    get(block: Block): Promise<(v9110.CoreAssignment[] | undefined)>
}

export const claimQueue =  {
    /**
     *  One entry for each availability core. The `VecDeque` represents the assignments to be
     *  scheduled on that core. `None` is used to signal to not schedule the next para of the core
     *  as there is one currently being scheduled. Not using `None` here would overwrite the
     *  `CoreState` in the runtime API. The value contained here will not be valid after the end of
     *  a block. Runtime APIs should be used to determine scheduled cores/ for the upcoming block.
     */
    v1000001: new StorageType('ParaScheduler.ClaimQueue', 'Default', [], sts.array(() => sts.tuple(() => [v1000001.V5CoreIndex, sts.array(() => sts.option(() => v1000001.V5ParasEntry))]))) as ClaimQueueV1000001,
}

/**
 *  One entry for each availability core. The `VecDeque` represents the assignments to be
 *  scheduled on that core. `None` is used to signal to not schedule the next para of the core
 *  as there is one currently being scheduled. Not using `None` here would overwrite the
 *  `CoreState` in the runtime API. The value contained here will not be valid after the end of
 *  a block. Runtime APIs should be used to determine scheduled cores/ for the upcoming block.
 */
export interface ClaimQueueV1000001  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1000001.V5CoreIndex, (v1000001.V5ParasEntry | undefined)[]][]
    get(block: Block): Promise<([v1000001.V5CoreIndex, (v1000001.V5ParasEntry | undefined)[]][] | undefined)>
}
