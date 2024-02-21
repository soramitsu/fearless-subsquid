import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9010 from '../v9010'

export const validatorGroups =  {
    /**
     *  All the validator groups. One for each core. Indices are into `ActiveValidators` - not the
     *  broader set of Polkadot validators, but instead just the subset used for parachains during
     *  this session.
     * 
     *  Bound: The number of cores is the sum of the numbers of parachains and parathread multiplexers.
     *  Reasonably, 100-1000. The dominant factor is the number of validators: safe upper bound at 10k.
     */
    v9010: new StorageType('ParaScheduler.ValidatorGroups', 'Default', [], sts.array(() => sts.array(() => v9010.ParaValidatorIndex))) as ValidatorGroupsV9010,
}

/**
 *  All the validator groups. One for each core. Indices are into `ActiveValidators` - not the
 *  broader set of Polkadot validators, but instead just the subset used for parachains during
 *  this session.
 * 
 *  Bound: The number of cores is the sum of the numbers of parachains and parathread multiplexers.
 *  Reasonably, 100-1000. The dominant factor is the number of validators: safe upper bound at 10k.
 */
export interface ValidatorGroupsV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9010.ParaValidatorIndex[][]
    get(block: Block): Promise<(v9010.ParaValidatorIndex[][] | undefined)>
}

export const parathreadQueue =  {
    /**
     *  A queue of upcoming claims and which core they should be mapped onto.
     * 
     *  The number of queued claims is bounded at the `scheduling_lookahead`
     *  multiplied by the number of parathread multiplexer cores. Reasonably, 10 * 50 = 500.
     */
    v9010: new StorageType('ParaScheduler.ParathreadQueue', 'Default', [], v9010.ParathreadClaimQueue) as ParathreadQueueV9010,
}

/**
 *  A queue of upcoming claims and which core they should be mapped onto.
 * 
 *  The number of queued claims is bounded at the `scheduling_lookahead`
 *  multiplied by the number of parathread multiplexer cores. Reasonably, 10 * 50 = 500.
 */
export interface ParathreadQueueV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9010.ParathreadClaimQueue
    get(block: Block): Promise<(v9010.ParathreadClaimQueue | undefined)>
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
    v9010: new StorageType('ParaScheduler.AvailabilityCores', 'Default', [], sts.array(() => sts.option(() => v9010.CoreOccupied))) as AvailabilityCoresV9010,
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
export interface AvailabilityCoresV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v9010.CoreOccupied | undefined)[]
    get(block: Block): Promise<((v9010.CoreOccupied | undefined)[] | undefined)>
}

export const parathreadClaimIndex =  {
    /**
     *  An index used to ensure that only one claim on a parathread exists in the queue or is
     *  currently being handled by an occupied core.
     * 
     *  Bounded by the number of parathread cores and scheduling lookahead. Reasonably, 10 * 50 = 500.
     */
    v9010: new StorageType('ParaScheduler.ParathreadClaimIndex', 'Default', [], sts.array(() => v9010.ParaId)) as ParathreadClaimIndexV9010,
}

/**
 *  An index used to ensure that only one claim on a parathread exists in the queue or is
 *  currently being handled by an occupied core.
 * 
 *  Bounded by the number of parathread cores and scheduling lookahead. Reasonably, 10 * 50 = 500.
 */
export interface ParathreadClaimIndexV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9010.ParaId[]
    get(block: Block): Promise<(v9010.ParaId[] | undefined)>
}

export const sessionStartBlock =  {
    /**
     *  The block number where the session start occurred. Used to track how many group rotations have occurred.
     * 
     *  Note that in the context of parachains modules the session change is signalled during
     *  the block and enacted at the end of the block (at the finalization stage, to be exact).
     *  Thus for all intents and purposes the effect of the session change is observed at the
     *  block following the session change, block number of which we save in this storage value.
     */
    v9010: new StorageType('ParaScheduler.SessionStartBlock', 'Default', [], v9010.BlockNumber) as SessionStartBlockV9010,
}

/**
 *  The block number where the session start occurred. Used to track how many group rotations have occurred.
 * 
 *  Note that in the context of parachains modules the session change is signalled during
 *  the block and enacted at the end of the block (at the finalization stage, to be exact).
 *  Thus for all intents and purposes the effect of the session change is observed at the
 *  block following the session change, block number of which we save in this storage value.
 */
export interface SessionStartBlockV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9010.BlockNumber
    get(block: Block): Promise<(v9010.BlockNumber | undefined)>
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
    v9010: new StorageType('ParaScheduler.Scheduled', 'Default', [], sts.array(() => v9010.CoreAssignment)) as ScheduledV9010,
}

/**
 *  Currently scheduled cores - free but up to be occupied.
 * 
 *  Bounded by the number of cores: one for each parachain and parathread multiplexer.
 * 
 *  The value contained here will not be valid after the end of a block. Runtime APIs should be used to determine scheduled cores/
 *  for the upcoming block.
 */
export interface ScheduledV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9010.CoreAssignment[]
    get(block: Block): Promise<(v9010.CoreAssignment[] | undefined)>
}
