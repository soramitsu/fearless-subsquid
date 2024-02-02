import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v10 from '../v10'

export const messageAccepted =  {
    name: 'SubstrateBridgeOutboundChannel.MessageAccepted',
    v1: new EventType(
        'SubstrateBridgeOutboundChannel.MessageAccepted',
        sts.tuple([v1.SubNetworkId, sts.bigint()])
    ),
    v10: new EventType(
        'SubstrateBridgeOutboundChannel.MessageAccepted',
        sts.struct({
            networkId: v10.SubNetworkId,
            batchNonce: sts.bigint(),
            messageNonce: sts.bigint(),
        })
    ),
}
