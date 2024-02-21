import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9010 from '../v9010'

export const candidateBacked =  {
    name: 'ParasInclusion.CandidateBacked',
    /**
     *  A candidate was backed. [candidate, head_data]
     */
    v9010: new EventType(
        'ParasInclusion.CandidateBacked',
        sts.tuple([v9010.CandidateReceipt, v9010.HeadData, v9010.CoreIndex, v9010.GroupIndex])
    ),
}

export const candidateIncluded =  {
    name: 'ParasInclusion.CandidateIncluded',
    /**
     *  A candidate was included. [candidate, head_data]
     */
    v9010: new EventType(
        'ParasInclusion.CandidateIncluded',
        sts.tuple([v9010.CandidateReceipt, v9010.HeadData, v9010.CoreIndex, v9010.GroupIndex])
    ),
}

export const candidateTimedOut =  {
    name: 'ParasInclusion.CandidateTimedOut',
    /**
     *  A candidate timed out. [candidate, head_data]
     */
    v9010: new EventType(
        'ParasInclusion.CandidateTimedOut',
        sts.tuple([v9010.CandidateReceipt, v9010.HeadData, v9010.CoreIndex])
    ),
}
