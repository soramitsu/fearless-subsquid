import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v2029 from '../v2029'
import * as v9080 from '../v9080'
import * as v9090 from '../v9090'
import * as v9111 from '../v9111'
import * as v9130 from '../v9130'
import * as v9291 from '../v9291'
import * as v9370 from '../v9370'

export const solutionStored =  {
    name: 'ElectionProviderMultiPhase.SolutionStored',
    /**
     *  A solution was stored with the given compute.
     * 
     *  If the solution is signed, this means that it hasn't yet been processed. If the
     *  solution is unsigned, this means that it has also been processed.
     */
    v2029: new EventType(
        'ElectionProviderMultiPhase.SolutionStored',
        v2029.ElectionCompute
    ),
    /**
     *  A solution was stored with the given compute.
     * 
     *  If the solution is signed, this means that it hasn't yet been processed. If the
     *  solution is unsigned, this means that it has also been processed.
     * 
     *  The `bool` is `true` when a previous solution was ejected to make room for this one.
     */
    v9080: new EventType(
        'ElectionProviderMultiPhase.SolutionStored',
        sts.tuple([v9080.ElectionCompute, sts.boolean()])
    ),
    /**
     * A solution was stored with the given compute.
     * 
     * If the solution is signed, this means that it hasn't yet been processed. If the
     * solution is unsigned, this means that it has also been processed.
     * 
     * The `bool` is `true` when a previous solution was ejected to make room for this one.
     */
    v9111: new EventType(
        'ElectionProviderMultiPhase.SolutionStored',
        sts.tuple([v9111.ElectionCompute, sts.boolean()])
    ),
    /**
     * A solution was stored with the given compute.
     * 
     * If the solution is signed, this means that it hasn't yet been processed. If the
     * solution is unsigned, this means that it has also been processed.
     * 
     * The `bool` is `true` when a previous solution was ejected to make room for this one.
     */
    v9130: new EventType(
        'ElectionProviderMultiPhase.SolutionStored',
        sts.struct({
            electionCompute: v9130.ElectionCompute,
            prevEjected: sts.boolean(),
        })
    ),
    /**
     * A solution was stored with the given compute.
     * 
     * If the solution is signed, this means that it hasn't yet been processed. If the
     * solution is unsigned, this means that it has also been processed.
     * 
     * The `bool` is `true` when a previous solution was ejected to make room for this one.
     */
    v9291: new EventType(
        'ElectionProviderMultiPhase.SolutionStored',
        sts.struct({
            compute: v9291.ElectionCompute,
            prevEjected: sts.boolean(),
        })
    ),
    /**
     * A solution was stored with the given compute.
     * 
     * The `origin` indicates the origin of the solution. If `origin` is `Some(AccountId)`,
     * the stored solution was submited in the signed phase by a miner with the `AccountId`.
     * Otherwise, the solution was stored either during the unsigned phase or by
     * `T::ForceOrigin`. The `bool` is `true` when a previous solution was ejected to make
     * room for this one.
     */
    v9370: new EventType(
        'ElectionProviderMultiPhase.SolutionStored',
        sts.struct({
            compute: v9370.ElectionCompute,
            origin: sts.option(() => v9370.AccountId32),
            prevEjected: sts.boolean(),
        })
    ),
}

export const electionFinalized =  {
    name: 'ElectionProviderMultiPhase.ElectionFinalized',
    /**
     *  The election has been finalized, with `Some` of the given computation, or else if the
     *  election failed, `None`.
     */
    v2029: new EventType(
        'ElectionProviderMultiPhase.ElectionFinalized',
        sts.option(() => v2029.ElectionCompute)
    ),
    /**
     * The election has been finalized, with `Some` of the given computation, or else if the
     * election failed, `None`.
     */
    v9111: new EventType(
        'ElectionProviderMultiPhase.ElectionFinalized',
        sts.option(() => v9111.ElectionCompute)
    ),
    /**
     * The election has been finalized, with `Some` of the given computation, or else if the
     * election failed, `None`.
     */
    v9130: new EventType(
        'ElectionProviderMultiPhase.ElectionFinalized',
        sts.struct({
            electionCompute: sts.option(() => v9130.ElectionCompute),
        })
    ),
    /**
     * The election has been finalized, with the given computation and score.
     */
    v9291: new EventType(
        'ElectionProviderMultiPhase.ElectionFinalized',
        sts.struct({
            compute: v9291.ElectionCompute,
            score: v9291.ElectionScore,
        })
    ),
}

export const rewarded =  {
    name: 'ElectionProviderMultiPhase.Rewarded',
    /**
     *  An account has been rewarded for their signed submission being finalized.
     */
    v2029: new EventType(
        'ElectionProviderMultiPhase.Rewarded',
        v2029.AccountId
    ),
    /**
     *  An account has been rewarded for their signed submission being finalized.
     */
    v9090: new EventType(
        'ElectionProviderMultiPhase.Rewarded',
        sts.tuple([v9090.AccountId, v9090.Balance])
    ),
    /**
     * An account has been rewarded for their signed submission being finalized.
     */
    v9130: new EventType(
        'ElectionProviderMultiPhase.Rewarded',
        sts.struct({
            account: v9130.AccountId32,
            value: sts.bigint(),
        })
    ),
}

export const slashed =  {
    name: 'ElectionProviderMultiPhase.Slashed',
    /**
     *  An account has been slashed for submitting an invalid signed submission.
     */
    v2029: new EventType(
        'ElectionProviderMultiPhase.Slashed',
        v2029.AccountId
    ),
    /**
     *  An account has been slashed for submitting an invalid signed submission.
     */
    v9090: new EventType(
        'ElectionProviderMultiPhase.Slashed',
        sts.tuple([v9090.AccountId, v9090.Balance])
    ),
    /**
     * An account has been slashed for submitting an invalid signed submission.
     */
    v9130: new EventType(
        'ElectionProviderMultiPhase.Slashed',
        sts.struct({
            account: v9130.AccountId32,
            value: sts.bigint(),
        })
    ),
}

export const signedPhaseStarted =  {
    name: 'ElectionProviderMultiPhase.SignedPhaseStarted',
    /**
     *  The signed phase of the given round has started.
     */
    v2029: new EventType(
        'ElectionProviderMultiPhase.SignedPhaseStarted',
        sts.number()
    ),
    /**
     * The signed phase of the given round has started.
     */
    v9130: new EventType(
        'ElectionProviderMultiPhase.SignedPhaseStarted',
        sts.struct({
            round: sts.number(),
        })
    ),
}

export const unsignedPhaseStarted =  {
    name: 'ElectionProviderMultiPhase.UnsignedPhaseStarted',
    /**
     *  The unsigned phase of the given round has started.
     */
    v2029: new EventType(
        'ElectionProviderMultiPhase.UnsignedPhaseStarted',
        sts.number()
    ),
    /**
     * The unsigned phase of the given round has started.
     */
    v9130: new EventType(
        'ElectionProviderMultiPhase.UnsignedPhaseStarted',
        sts.struct({
            round: sts.number(),
        })
    ),
}

export const electionFailed =  {
    name: 'ElectionProviderMultiPhase.ElectionFailed',
    /**
     * An election failed.
     * 
     * Not much can be said about which computes failed in the process.
     */
    v9291: new EventType(
        'ElectionProviderMultiPhase.ElectionFailed',
        sts.unit()
    ),
}

export const phaseTransitioned =  {
    name: 'ElectionProviderMultiPhase.PhaseTransitioned',
    /**
     * There was a phase transition in a given round.
     */
    v9370: new EventType(
        'ElectionProviderMultiPhase.PhaseTransitioned',
        sts.struct({
            from: v9370.Phase,
            to: v9370.Phase,
            round: sts.number(),
        })
    ),
}
