import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9320 from '../v9320'

export const memberAdded =  {
    name: 'FellowshipCollective.MemberAdded',
    /**
     * A member `who` has been added.
     */
    v9320: new EventType(
        'FellowshipCollective.MemberAdded',
        sts.struct({
            who: v9320.AccountId32,
        })
    ),
}

export const rankChanged =  {
    name: 'FellowshipCollective.RankChanged',
    /**
     * The member `who`'s rank has been changed to the given `rank`.
     */
    v9320: new EventType(
        'FellowshipCollective.RankChanged',
        sts.struct({
            who: v9320.AccountId32,
            rank: sts.number(),
        })
    ),
}

export const memberRemoved =  {
    name: 'FellowshipCollective.MemberRemoved',
    /**
     * The member `who` of given `rank` has been removed from the collective.
     */
    v9320: new EventType(
        'FellowshipCollective.MemberRemoved',
        sts.struct({
            who: v9320.AccountId32,
            rank: sts.number(),
        })
    ),
}

export const voted =  {
    name: 'FellowshipCollective.Voted',
    /**
     * The member `who` has voted for the `poll` with the given `vote` leading to an updated
     * `tally`.
     */
    v9320: new EventType(
        'FellowshipCollective.Voted',
        sts.struct({
            who: v9320.AccountId32,
            poll: sts.number(),
            vote: v9320.VoteRecord,
            tally: v9320.Type_441,
        })
    ),
}
