import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9010 from '../v9010'
import * as v9130 from '../v9130'

export const newTerm =  {
    name: 'PhragmenElection.NewTerm',
    /**
     *  A new term with \[new_members\]. This indicates that enough candidates existed to run
     *  the election, not that enough have has been elected. The inner value must be examined
     *  for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
     *  slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
     *  begin with.
     */
    v9010: new EventType(
        'PhragmenElection.NewTerm',
        sts.array(() => sts.tuple(() => [v9010.AccountId, v9010.Balance]))
    ),
    /**
     * A new term with new_members. This indicates that enough candidates existed to run
     * the election, not that enough have has been elected. The inner value must be examined
     * for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
     * slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
     * begin with.
     */
    v9130: new EventType(
        'PhragmenElection.NewTerm',
        sts.struct({
            newMembers: sts.array(() => sts.tuple(() => [v9130.AccountId32, sts.bigint()])),
        })
    ),
}

export const emptyTerm =  {
    name: 'PhragmenElection.EmptyTerm',
    /**
     *  No (or not enough) candidates existed for this round. This is different from
     *  `NewTerm(\[\])`. See the description of `NewTerm`.
     */
    v9010: new EventType(
        'PhragmenElection.EmptyTerm',
        sts.unit()
    ),
}

export const electionError =  {
    name: 'PhragmenElection.ElectionError',
    /**
     *  Internal error happened while trying to perform election.
     */
    v9010: new EventType(
        'PhragmenElection.ElectionError',
        sts.unit()
    ),
}

export const memberKicked =  {
    name: 'PhragmenElection.MemberKicked',
    /**
     *  A \[member\] has been removed. This should always be followed by either `NewTerm` or
     *  `EmptyTerm`.
     */
    v9010: new EventType(
        'PhragmenElection.MemberKicked',
        v9010.AccountId
    ),
    /**
     * A member has been removed. This should always be followed by either `NewTerm` or
     * `EmptyTerm`.
     */
    v9130: new EventType(
        'PhragmenElection.MemberKicked',
        sts.struct({
            member: v9130.AccountId32,
        })
    ),
}

export const renounced =  {
    name: 'PhragmenElection.Renounced',
    /**
     *  Someone has renounced their candidacy.
     */
    v9010: new EventType(
        'PhragmenElection.Renounced',
        v9010.AccountId
    ),
    /**
     * Someone has renounced their candidacy.
     */
    v9130: new EventType(
        'PhragmenElection.Renounced',
        sts.struct({
            candidate: v9130.AccountId32,
        })
    ),
}

export const candidateSlashed =  {
    name: 'PhragmenElection.CandidateSlashed',
    /**
     *  A \[candidate\] was slashed by \[amount\] due to failing to obtain a seat as member or
     *  runner-up.
     * 
     *  Note that old members and runners-up are also candidates.
     */
    v9010: new EventType(
        'PhragmenElection.CandidateSlashed',
        sts.tuple([v9010.AccountId, v9010.Balance])
    ),
    /**
     * A candidate was slashed by amount due to failing to obtain a seat as member or
     * runner-up.
     * 
     * Note that old members and runners-up are also candidates.
     */
    v9130: new EventType(
        'PhragmenElection.CandidateSlashed',
        sts.struct({
            candidate: v9130.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const seatHolderSlashed =  {
    name: 'PhragmenElection.SeatHolderSlashed',
    /**
     *  A \[seat holder\] was slashed by \[amount\] by being forcefully removed from the set.
     */
    v9010: new EventType(
        'PhragmenElection.SeatHolderSlashed',
        sts.tuple([v9010.AccountId, v9010.Balance])
    ),
    /**
     * A seat holder was slashed by amount by being forcefully removed from the set.
     */
    v9130: new EventType(
        'PhragmenElection.SeatHolderSlashed',
        sts.struct({
            seatHolder: v9130.AccountId32,
            amount: sts.bigint(),
        })
    ),
}
