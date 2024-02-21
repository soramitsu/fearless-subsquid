import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v9010 from '../v9010'

export const forceApprove =  {
    name: 'ParasInitializer.force_approve',
    /**
     *  Issue a signal to the consensus engine to forcibly act as though all parachain
     *  blocks in all relay chain blocks up to and including the given number in the current
     *  chain are valid and should be finalized.
     */
    v9010: new CallType(
        'ParasInitializer.force_approve',
        sts.struct({
            upTo: v9010.BlockNumber,
        })
    ),
}
