import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v2027 from '../v2027'
import * as v2028 from '../v2028'

export const newTerm =  {
    name: 'ElectionsPhragmen.NewTerm',
    /**
     *  A new term with new members. This indicates that enough candidates existed, not that
     *  enough have has been elected. The inner value must be examined for this purpose.
     */
    v1020: new EventType(
        'ElectionsPhragmen.NewTerm',
        sts.array(() => sts.tuple(() => [v1020.AccountId, v1020.Balance]))
    ),
}

export const emptyTerm =  {
    name: 'ElectionsPhragmen.EmptyTerm',
    /**
     *  No (or not enough) candidates existed for this round.
     */
    v1020: new EventType(
        'ElectionsPhragmen.EmptyTerm',
        sts.unit()
    ),
}

export const memberKicked =  {
    name: 'ElectionsPhragmen.MemberKicked',
    /**
     *  A member has been removed. This should always be followed by either `NewTerm` ot
     *  `EmptyTerm`.
     */
    v1020: new EventType(
        'ElectionsPhragmen.MemberKicked',
        v1020.AccountId
    ),
}

export const memberRenounced =  {
    name: 'ElectionsPhragmen.MemberRenounced',
    /**
     *  A member has renounced their candidacy.
     */
    v1020: new EventType(
        'ElectionsPhragmen.MemberRenounced',
        v1020.AccountId
    ),
}

export const voterReported =  {
    name: 'ElectionsPhragmen.VoterReported',
    /**
     *  A voter (first element) was reported (byt the second element) with the the report being
     *  successful or not (third element).
     */
    v1020: new EventType(
        'ElectionsPhragmen.VoterReported',
        sts.tuple([v1020.AccountId, v1020.AccountId, sts.boolean()])
    ),
}

export const electionError =  {
    name: 'ElectionsPhragmen.ElectionError',
    /**
     *  Internal error happened while trying to perform election.
     */
    v2025: new EventType(
        'ElectionsPhragmen.ElectionError',
        sts.unit()
    ),
}

export const candidateSlashed =  {
    name: 'ElectionsPhragmen.CandidateSlashed',
    /**
     *  A candidate was slashed due to failing to obtain a seat as member or runner-up
     */
    v2027: new EventType(
        'ElectionsPhragmen.CandidateSlashed',
        sts.tuple([v2027.AccountId, v2027.Balance])
    ),
}

export const seatHolderSlashed =  {
    name: 'ElectionsPhragmen.SeatHolderSlashed',
    /**
     *  A seat holder (member or runner-up) was slashed due to failing to retaining their position.
     */
    v2027: new EventType(
        'ElectionsPhragmen.SeatHolderSlashed',
        sts.tuple([v2027.AccountId, v2027.Balance])
    ),
}

export const renounced =  {
    name: 'ElectionsPhragmen.Renounced',
    /**
     *  Someone has renounced their candidacy.
     */
    v2028: new EventType(
        'ElectionsPhragmen.Renounced',
        v2028.AccountId
    ),
}
