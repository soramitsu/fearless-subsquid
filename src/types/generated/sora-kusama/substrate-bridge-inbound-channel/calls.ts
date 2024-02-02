import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v7 from '../v7'

export const submit =  {
    name: 'SubstrateBridgeInboundChannel.submit',
    v7: new CallType(
        'SubstrateBridgeInboundChannel.submit',
        sts.struct({
            networkId: v7.SubNetworkId,
            commitment: v7.GenericCommitment,
            proof: v7.Type_293,
        })
    ),
}
