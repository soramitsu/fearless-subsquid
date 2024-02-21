import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9090 from '../v9090'
import * as v9111 from '../v9111'
import * as v9430 from '../v9430'

export const candidateBacked =  {
    name: 'ParaInclusion.CandidateBacked',
    /**
     *  A candidate was backed. `[candidate, head_data]`
     */
    v9090: new EventType(
        'ParaInclusion.CandidateBacked',
        sts.tuple([v9090.CandidateReceipt, v9090.HeadData, v9090.CoreIndex, v9090.GroupIndex])
    ),
    /**
     * A candidate was backed. `[candidate, head_data]`
     */
    v9111: new EventType(
        'ParaInclusion.CandidateBacked',
        sts.tuple([v9111.V1CandidateReceipt, v9111.HeadData, v9111.V1CoreIndex, v9111.V1GroupIndex])
    ),
}

export const candidateIncluded =  {
    name: 'ParaInclusion.CandidateIncluded',
    /**
     *  A candidate was included. `[candidate, head_data]`
     */
    v9090: new EventType(
        'ParaInclusion.CandidateIncluded',
        sts.tuple([v9090.CandidateReceipt, v9090.HeadData, v9090.CoreIndex, v9090.GroupIndex])
    ),
    /**
     * A candidate was included. `[candidate, head_data]`
     */
    v9111: new EventType(
        'ParaInclusion.CandidateIncluded',
        sts.tuple([v9111.V1CandidateReceipt, v9111.HeadData, v9111.V1CoreIndex, v9111.V1GroupIndex])
    ),
}

export const candidateTimedOut =  {
    name: 'ParaInclusion.CandidateTimedOut',
    /**
     *  A candidate timed out. `[candidate, head_data]`
     */
    v9090: new EventType(
        'ParaInclusion.CandidateTimedOut',
        sts.tuple([v9090.CandidateReceipt, v9090.HeadData, v9090.CoreIndex])
    ),
    /**
     * A candidate timed out. `[candidate, head_data]`
     */
    v9111: new EventType(
        'ParaInclusion.CandidateTimedOut',
        sts.tuple([v9111.V1CandidateReceipt, v9111.HeadData, v9111.V1CoreIndex])
    ),
}

export const upwardMessagesReceived =  {
    name: 'ParaInclusion.UpwardMessagesReceived',
    /**
     * Some upward messages have been received and will be processed.
     */
    v9430: new EventType(
        'ParaInclusion.UpwardMessagesReceived',
        sts.struct({
            from: v9430.Id,
            count: sts.number(),
        })
    ),
}
