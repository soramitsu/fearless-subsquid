import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v9090 from '../v9090'

export const forceApprove =  {
    name: 'Initializer.force_approve',
    /**
     *  Issue a signal to the consensus engine to forcibly act as though all parachain
     *  blocks in all relay chain blocks up to and including the given number in the current
     *  chain are valid and should be finalized.
     */
    v9090: new CallType(
        'Initializer.force_approve',
        sts.struct({
            upTo: v9090.BlockNumber,
        })
    ),
}
