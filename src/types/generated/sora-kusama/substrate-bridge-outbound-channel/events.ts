import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v7 from '../v7'

export const messageAccepted =  {
    name: 'SubstrateBridgeOutboundChannel.MessageAccepted',
    v7: new EventType(
        'SubstrateBridgeOutboundChannel.MessageAccepted',
        sts.struct({
            networkId: v7.SubNetworkId,
            batchNonce: sts.bigint(),
            messageNonce: sts.bigint(),
        })
    ),
}
