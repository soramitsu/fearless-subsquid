import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v1058 from '../v1058'
import * as v2013 from '../v2013'

export const setHeads =  {
    name: 'Parachains.set_heads',
    /**
     *  Provide candidate receipts for parachains, in ascending order by id.
     */
    v1020: new CallType(
        'Parachains.set_heads',
        sts.struct({
            heads: sts.array(() => v1020.AttestedCandidate),
        })
    ),
}

export const reportDoubleVote =  {
    name: 'Parachains.report_double_vote',
    /**
     *  Provide a proof that some validator has commited a double-vote.
     * 
     *  The weight is 0; in order to avoid DoS a `SignedExtension` validation
     *  is implemented.
     */
    v1058: new CallType(
        'Parachains.report_double_vote',
        sts.struct({
            report: v1058.DoubleVoteReport,
        })
    ),
}

export const transferToParachain =  {
    name: 'Parachains.transfer_to_parachain',
    /**
     *  Transfer some tokens into a parachain and leave a message in the downward queue for it.
     */
    v2013: new CallType(
        'Parachains.transfer_to_parachain',
        sts.struct({
            to: v2013.ParaId,
            amount: v2013.Balance,
            remark: v2013.Remark,
        })
    ),
}

export const sendXcmpMessage =  {
    name: 'Parachains.send_xcmp_message',
    /**
     *  Send a XCMP message to the given parachain.
     * 
     *  The origin must be another parachain.
     */
    v2013: new CallType(
        'Parachains.send_xcmp_message',
        sts.struct({
            to: v2013.ParaId,
            msg: sts.bytes(),
        })
    ),
}
