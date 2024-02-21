import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1040 from '../v1040'
import * as v1042 from '../v1042'
import * as v2015 from '../v2015'
import * as v9160 from '../v9160'
import * as v9420 from '../v9420'
import * as v1000000 from '../v1000000'

export const founded =  {
    name: 'Society.Founded',
    /**
     *  The society is founded by the given identity.
     */
    v1040: new EventType(
        'Society.Founded',
        v1040.AccountId
    ),
    /**
     * The society is founded by the given identity.
     */
    v9160: new EventType(
        'Society.Founded',
        sts.struct({
            founder: v9160.AccountId32,
        })
    ),
}

export const bid =  {
    name: 'Society.Bid',
    /**
     *  A membership bid just happened. The given account is the candidate's ID and their offer
     *  is the second.
     */
    v1040: new EventType(
        'Society.Bid',
        sts.tuple([v1040.AccountId, v1040.Balance])
    ),
    /**
     * A membership bid just happened. The given account is the candidate's ID and their offer
     * is the second.
     */
    v9160: new EventType(
        'Society.Bid',
        sts.struct({
            candidateId: v9160.AccountId32,
            offer: sts.bigint(),
        })
    ),
}

export const vouch =  {
    name: 'Society.Vouch',
    /**
     *  A membership bid just happened by vouching. The given account is the candidate's ID and
     *  their offer is the second. The vouching party is the third.
     */
    v1040: new EventType(
        'Society.Vouch',
        sts.tuple([v1040.AccountId, v1040.Balance, v1040.AccountId])
    ),
    /**
     * A membership bid just happened by vouching. The given account is the candidate's ID and
     * their offer is the second. The vouching party is the third.
     */
    v9160: new EventType(
        'Society.Vouch',
        sts.struct({
            candidateId: v9160.AccountId32,
            offer: sts.bigint(),
            vouching: v9160.AccountId32,
        })
    ),
}

export const autoUnbid =  {
    name: 'Society.AutoUnbid',
    /**
     *  A candidate was dropped (due to an excess of bids in the system).
     */
    v1040: new EventType(
        'Society.AutoUnbid',
        v1040.AccountId
    ),
    /**
     * A candidate was dropped (due to an excess of bids in the system).
     */
    v9160: new EventType(
        'Society.AutoUnbid',
        sts.struct({
            candidate: v9160.AccountId32,
        })
    ),
}

export const unbid =  {
    name: 'Society.Unbid',
    /**
     *  A candidate was dropped (by their request).
     */
    v1040: new EventType(
        'Society.Unbid',
        v1040.AccountId
    ),
    /**
     * A candidate was dropped (by their request).
     */
    v9160: new EventType(
        'Society.Unbid',
        sts.struct({
            candidate: v9160.AccountId32,
        })
    ),
}

export const unvouch =  {
    name: 'Society.Unvouch',
    /**
     *  A candidate was dropped (by request of who vouched for them).
     */
    v1040: new EventType(
        'Society.Unvouch',
        v1040.AccountId
    ),
    /**
     * A candidate was dropped (by request of who vouched for them).
     */
    v9160: new EventType(
        'Society.Unvouch',
        sts.struct({
            candidate: v9160.AccountId32,
        })
    ),
}

export const inducted =  {
    name: 'Society.Inducted',
    /**
     *  A group of candidates have been inducted. The batch's primary is the first value, the
     *  batch in full is the second.
     */
    v1040: new EventType(
        'Society.Inducted',
        sts.tuple([v1040.AccountId, sts.array(() => v1040.AccountId)])
    ),
    /**
     * A group of candidates have been inducted. The batch's primary is the first value, the
     * batch in full is the second.
     */
    v9160: new EventType(
        'Society.Inducted',
        sts.struct({
            primary: v9160.AccountId32,
            candidates: sts.array(() => v9160.AccountId32),
        })
    ),
}

export const suspendedMemberJudgement =  {
    name: 'Society.SuspendedMemberJudgement',
    /**
     *  A suspended member has been judged
     */
    v1040: new EventType(
        'Society.SuspendedMemberJudgement',
        sts.tuple([v1040.AccountId, sts.boolean()])
    ),
    /**
     * A suspended member has been judged.
     */
    v9160: new EventType(
        'Society.SuspendedMemberJudgement',
        sts.struct({
            who: v9160.AccountId32,
            judged: sts.boolean(),
        })
    ),
}

export const candidateSuspended =  {
    name: 'Society.CandidateSuspended',
    /**
     *  A candidate has been suspended
     */
    v1040: new EventType(
        'Society.CandidateSuspended',
        v1040.AccountId
    ),
    /**
     * A candidate has been suspended
     */
    v9160: new EventType(
        'Society.CandidateSuspended',
        sts.struct({
            candidate: v9160.AccountId32,
        })
    ),
}

export const memberSuspended =  {
    name: 'Society.MemberSuspended',
    /**
     *  A member has been suspended
     */
    v1040: new EventType(
        'Society.MemberSuspended',
        v1040.AccountId
    ),
    /**
     * A member has been suspended
     */
    v9160: new EventType(
        'Society.MemberSuspended',
        sts.struct({
            member: v9160.AccountId32,
        })
    ),
}

export const challenged =  {
    name: 'Society.Challenged',
    /**
     *  A member has been challenged
     */
    v1040: new EventType(
        'Society.Challenged',
        v1040.AccountId
    ),
    /**
     * A member has been challenged
     */
    v9160: new EventType(
        'Society.Challenged',
        sts.struct({
            member: v9160.AccountId32,
        })
    ),
}

export const vote =  {
    name: 'Society.Vote',
    /**
     *  A vote has been placed (candidate, voter, vote)
     */
    v1040: new EventType(
        'Society.Vote',
        sts.tuple([v1040.AccountId, v1040.AccountId, sts.boolean()])
    ),
    /**
     * A vote has been placed
     */
    v9160: new EventType(
        'Society.Vote',
        sts.struct({
            candidate: v9160.AccountId32,
            voter: v9160.AccountId32,
            vote: sts.boolean(),
        })
    ),
}

export const defenderVote =  {
    name: 'Society.DefenderVote',
    /**
     *  A vote has been placed for a defending member (voter, vote)
     */
    v1040: new EventType(
        'Society.DefenderVote',
        sts.tuple([v1040.AccountId, sts.boolean()])
    ),
    /**
     * A vote has been placed for a defending member
     */
    v9160: new EventType(
        'Society.DefenderVote',
        sts.struct({
            voter: v9160.AccountId32,
            vote: sts.boolean(),
        })
    ),
}

export const newMaxMembers =  {
    name: 'Society.NewMaxMembers',
    /**
     *  A new max member count has been set
     */
    v1040: new EventType(
        'Society.NewMaxMembers',
        sts.number()
    ),
    /**
     * A new \[max\] member count has been set
     */
    v9160: new EventType(
        'Society.NewMaxMembers',
        sts.struct({
            max: sts.number(),
        })
    ),
}

export const unfounded =  {
    name: 'Society.Unfounded',
    /**
     *  Society is unfounded.
     */
    v1042: new EventType(
        'Society.Unfounded',
        v1042.AccountId
    ),
    /**
     * Society is unfounded.
     */
    v9160: new EventType(
        'Society.Unfounded',
        sts.struct({
            founder: v9160.AccountId32,
        })
    ),
}

export const deposit =  {
    name: 'Society.Deposit',
    /**
     *  Some funds were deposited into the society account.
     */
    v2015: new EventType(
        'Society.Deposit',
        v2015.Balance
    ),
    /**
     * Some funds were deposited into the society account.
     */
    v9160: new EventType(
        'Society.Deposit',
        sts.struct({
            value: sts.bigint(),
        })
    ),
}

export const skepticsChosen =  {
    name: 'Society.SkepticsChosen',
    /**
     * A group of members has been choosen as Skeptics
     */
    v9420: new EventType(
        'Society.SkepticsChosen',
        sts.struct({
            skeptics: sts.array(() => v9420.AccountId32),
        })
    ),
}

export const newParams =  {
    name: 'Society.NewParams',
    /**
     * A new set of \[params\] has been set for the group.
     */
    v1000000: new EventType(
        'Society.NewParams',
        sts.struct({
            params: v1000000.GroupParams,
        })
    ),
}

export const elevated =  {
    name: 'Society.Elevated',
    /**
     * A \[member\] got elevated to \[rank\].
     */
    v1000000: new EventType(
        'Society.Elevated',
        sts.struct({
            member: v1000000.AccountId32,
            rank: sts.number(),
        })
    ),
}
