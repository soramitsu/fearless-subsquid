import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v9320 from '../v9320'
import * as v9370 from '../v9370'
import * as v9381 from '../v9381'
import * as v9420 from '../v9420'

export const submit =  {
    name: 'FellowshipReferenda.submit',
    /**
     * Propose a referendum on a privileged action.
     * 
     * - `origin`: must be `SubmitOrigin` and the account must have `SubmissionDeposit` funds
     *   available.
     * - `proposal_origin`: The origin from which the proposal should be executed.
     * - `proposal`: The proposal.
     * - `enactment_moment`: The moment that the proposal should be enacted.
     * 
     * Emits `Submitted`.
     */
    v9320: new CallType(
        'FellowshipReferenda.submit',
        sts.struct({
            proposalOrigin: v9320.OriginCaller,
            proposal: v9320.Bounded,
            enactmentMoment: v9320.DispatchTime,
        })
    ),
    /**
     * Propose a referendum on a privileged action.
     * 
     * - `origin`: must be `SubmitOrigin` and the account must have `SubmissionDeposit` funds
     *   available.
     * - `proposal_origin`: The origin from which the proposal should be executed.
     * - `proposal`: The proposal.
     * - `enactment_moment`: The moment that the proposal should be enacted.
     * 
     * Emits `Submitted`.
     */
    v9370: new CallType(
        'FellowshipReferenda.submit',
        sts.struct({
            proposalOrigin: v9370.OriginCaller,
            proposal: v9370.Bounded,
            enactmentMoment: v9370.DispatchTime,
        })
    ),
    /**
     * Propose a referendum on a privileged action.
     * 
     * - `origin`: must be `SubmitOrigin` and the account must have `SubmissionDeposit` funds
     *   available.
     * - `proposal_origin`: The origin from which the proposal should be executed.
     * - `proposal`: The proposal.
     * - `enactment_moment`: The moment that the proposal should be enacted.
     * 
     * Emits `Submitted`.
     */
    v9381: new CallType(
        'FellowshipReferenda.submit',
        sts.struct({
            proposalOrigin: v9381.OriginCaller,
            proposal: v9381.Bounded,
            enactmentMoment: v9381.DispatchTime,
        })
    ),
    /**
     * Propose a referendum on a privileged action.
     * 
     * - `origin`: must be `SubmitOrigin` and the account must have `SubmissionDeposit` funds
     *   available.
     * - `proposal_origin`: The origin from which the proposal should be executed.
     * - `proposal`: The proposal.
     * - `enactment_moment`: The moment that the proposal should be enacted.
     * 
     * Emits `Submitted`.
     */
    v9420: new CallType(
        'FellowshipReferenda.submit',
        sts.struct({
            proposalOrigin: v9420.OriginCaller,
            proposal: v9420.Bounded,
            enactmentMoment: v9420.DispatchTime,
        })
    ),
}

export const placeDecisionDeposit =  {
    name: 'FellowshipReferenda.place_decision_deposit',
    /**
     * Post the Decision Deposit for a referendum.
     * 
     * - `origin`: must be `Signed` and the account must have funds available for the
     *   referendum's track's Decision Deposit.
     * - `index`: The index of the submitted referendum whose Decision Deposit is yet to be
     *   posted.
     * 
     * Emits `DecisionDepositPlaced`.
     */
    v9320: new CallType(
        'FellowshipReferenda.place_decision_deposit',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const refundDecisionDeposit =  {
    name: 'FellowshipReferenda.refund_decision_deposit',
    /**
     * Refund the Decision Deposit for a closed referendum back to the depositor.
     * 
     * - `origin`: must be `Signed` or `Root`.
     * - `index`: The index of a closed referendum whose Decision Deposit has not yet been
     *   refunded.
     * 
     * Emits `DecisionDepositRefunded`.
     */
    v9320: new CallType(
        'FellowshipReferenda.refund_decision_deposit',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const cancel =  {
    name: 'FellowshipReferenda.cancel',
    /**
     * Cancel an ongoing referendum.
     * 
     * - `origin`: must be the `CancelOrigin`.
     * - `index`: The index of the referendum to be cancelled.
     * 
     * Emits `Cancelled`.
     */
    v9320: new CallType(
        'FellowshipReferenda.cancel',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const kill =  {
    name: 'FellowshipReferenda.kill',
    /**
     * Cancel an ongoing referendum and slash the deposits.
     * 
     * - `origin`: must be the `KillOrigin`.
     * - `index`: The index of the referendum to be cancelled.
     * 
     * Emits `Killed` and `DepositSlashed`.
     */
    v9320: new CallType(
        'FellowshipReferenda.kill',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const nudgeReferendum =  {
    name: 'FellowshipReferenda.nudge_referendum',
    /**
     * Advance a referendum onto its next logical state. Only used internally.
     * 
     * - `origin`: must be `Root`.
     * - `index`: the referendum to be advanced.
     */
    v9320: new CallType(
        'FellowshipReferenda.nudge_referendum',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const oneFewerDeciding =  {
    name: 'FellowshipReferenda.one_fewer_deciding',
    /**
     * Advance a track onto its next logical state. Only used internally.
     * 
     * - `origin`: must be `Root`.
     * - `track`: the track to be advanced.
     * 
     * Action item for when there is now one fewer referendum in the deciding phase and the
     * `DecidingCount` is not yet updated. This means that we should either:
     * - begin deciding another referendum (and leave `DecidingCount` alone); or
     * - decrement `DecidingCount`.
     */
    v9320: new CallType(
        'FellowshipReferenda.one_fewer_deciding',
        sts.struct({
            track: sts.number(),
        })
    ),
}

export const refundSubmissionDeposit =  {
    name: 'FellowshipReferenda.refund_submission_deposit',
    /**
     * Refund the Submission Deposit for a closed referendum back to the depositor.
     * 
     * - `origin`: must be `Signed` or `Root`.
     * - `index`: The index of a closed referendum whose Submission Deposit has not yet been
     *   refunded.
     * 
     * Emits `SubmissionDepositRefunded`.
     */
    v9350: new CallType(
        'FellowshipReferenda.refund_submission_deposit',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const setMetadata =  {
    name: 'FellowshipReferenda.set_metadata',
    /**
     * Set or clear metadata of a referendum.
     * 
     * Parameters:
     * - `origin`: Must be `Signed` by a creator of a referendum or by anyone to clear a
     *   metadata of a finished referendum.
     * - `index`:  The index of a referendum to set or clear metadata for.
     * - `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
     */
    v9420: new CallType(
        'FellowshipReferenda.set_metadata',
        sts.struct({
            index: sts.number(),
            maybeHash: sts.option(() => v9420.H256),
        })
    ),
}
