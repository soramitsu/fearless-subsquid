import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v9090 from '../v9090'
import * as v9111 from '../v9111'
import * as v9130 from '../v9130'

export const enter =  {
    name: 'ParaInherent.enter',
    /**
     *  Enter the paras inherent. This will process bitfields and backed candidates.
     */
    v9090: new CallType(
        'ParaInherent.enter',
        sts.struct({
            data: v9090.ParachainsInherentData,
        })
    ),
    /**
     * Enter the paras inherent. This will process bitfields and backed candidates.
     */
    v9111: new CallType(
        'ParaInherent.enter',
        sts.struct({
            data: v9111.V1InherentData,
        })
    ),
    /**
     * Enter the paras inherent. This will process bitfields and backed candidates.
     */
    v9130: new CallType(
        'ParaInherent.enter',
        sts.struct({
            data: v9130.V1InherentData,
        })
    ),
}
