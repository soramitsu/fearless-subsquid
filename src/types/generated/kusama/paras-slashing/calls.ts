import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v9420 from '../v9420'

export const reportDisputeLostUnsigned =  {
    name: 'ParasSlashing.report_dispute_lost_unsigned',
    v9420: new CallType(
        'ParasSlashing.report_dispute_lost_unsigned',
        sts.struct({
            disputeProof: v9420.DisputeProof,
            keyOwnerProof: v9420.MembershipProof,
        })
    ),
}
