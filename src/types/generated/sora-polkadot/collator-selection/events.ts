import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'

export const newInvulnerables =  {
    name: 'CollatorSelection.NewInvulnerables',
    v1: new EventType(
        'CollatorSelection.NewInvulnerables',
        sts.struct({
            invulnerables: sts.array(() => v1.AccountId32),
        })
    ),
}

export const newDesiredCandidates =  {
    name: 'CollatorSelection.NewDesiredCandidates',
    v1: new EventType(
        'CollatorSelection.NewDesiredCandidates',
        sts.struct({
            desiredCandidates: sts.number(),
        })
    ),
}

export const newCandidacyBond =  {
    name: 'CollatorSelection.NewCandidacyBond',
    v1: new EventType(
        'CollatorSelection.NewCandidacyBond',
        sts.struct({
            bondAmount: sts.bigint(),
        })
    ),
}

export const candidateAdded =  {
    name: 'CollatorSelection.CandidateAdded',
    v1: new EventType(
        'CollatorSelection.CandidateAdded',
        sts.struct({
            accountId: v1.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const candidateRemoved =  {
    name: 'CollatorSelection.CandidateRemoved',
    v1: new EventType(
        'CollatorSelection.CandidateRemoved',
        sts.struct({
            accountId: v1.AccountId32,
        })
    ),
}
