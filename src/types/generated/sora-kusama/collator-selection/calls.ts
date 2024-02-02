import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1 from '../v1'

export const setInvulnerables =  {
    name: 'CollatorSelection.set_invulnerables',
    v1: new CallType(
        'CollatorSelection.set_invulnerables',
        sts.struct({
            new: sts.array(() => v1.AccountId32),
        })
    ),
}

export const setDesiredCandidates =  {
    name: 'CollatorSelection.set_desired_candidates',
    v1: new CallType(
        'CollatorSelection.set_desired_candidates',
        sts.struct({
            max: sts.number(),
        })
    ),
}

export const setCandidacyBond =  {
    name: 'CollatorSelection.set_candidacy_bond',
    v1: new CallType(
        'CollatorSelection.set_candidacy_bond',
        sts.struct({
            bond: sts.bigint(),
        })
    ),
}

export const registerAsCandidate =  {
    name: 'CollatorSelection.register_as_candidate',
    v1: new CallType(
        'CollatorSelection.register_as_candidate',
        sts.unit()
    ),
}

export const leaveIntent =  {
    name: 'CollatorSelection.leave_intent',
    v1: new CallType(
        'CollatorSelection.leave_intent',
        sts.unit()
    ),
}
