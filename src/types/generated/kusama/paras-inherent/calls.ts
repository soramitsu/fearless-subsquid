import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v9010 from '../v9010'

export const enter =  {
    name: 'ParasInherent.enter',
    /**
     *  Enter the paras inherent. This will process bitfields and backed candidates.
     */
    v9010: new CallType(
        'ParasInherent.enter',
        sts.struct({
            data: v9010.ParachainsInherentData,
        })
    ),
}
