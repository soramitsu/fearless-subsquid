import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1 from '../v1'

export const setInvulnerables =  {
    name: 'CollatorSelection.set_invulnerables',
    /**
     * Set the list of invulnerable (fixed) collators.
     */
    v1: new CallType(
        'CollatorSelection.set_invulnerables',
        sts.struct({
            new: sts.array(() => v1.AccountId32),
        })
    ),
}

export const setDesiredCandidates =  {
    name: 'CollatorSelection.set_desired_candidates',
    /**
     * Set the ideal number of collators (not including the invulnerables).
     * If lowering this number, then the number of running collators could be higher than this figure.
     * Aside from that edge case, there should be no other way to have more collators than the desired number.
     */
    v1: new CallType(
        'CollatorSelection.set_desired_candidates',
        sts.struct({
            max: sts.number(),
        })
    ),
}

export const setCandidacyBond =  {
    name: 'CollatorSelection.set_candidacy_bond',
    /**
     * Set the candidacy bond amount.
     */
    v1: new CallType(
        'CollatorSelection.set_candidacy_bond',
        sts.struct({
            bond: sts.bigint(),
        })
    ),
}

export const registerAsCandidate =  {
    name: 'CollatorSelection.register_as_candidate',
    /**
     * Register this account as a collator candidate. The account must (a) already have
     * registered session keys and (b) be able to reserve the `CandidacyBond`.
     * 
     * This call is not available to `Invulnerable` collators.
     */
    v1: new CallType(
        'CollatorSelection.register_as_candidate',
        sts.unit()
    ),
}

export const leaveIntent =  {
    name: 'CollatorSelection.leave_intent',
    /**
     * Deregister `origin` as a collator candidate. Note that the collator can only leave on
     * session change. The `CandidacyBond` will be unreserved immediately.
     * 
     * This call will fail if the total number of candidates would drop below `MinCandidates`.
     * 
     * This call is not available to `Invulnerable` collators.
     */
    v1: new CallType(
        'CollatorSelection.leave_intent',
        sts.unit()
    ),
}
