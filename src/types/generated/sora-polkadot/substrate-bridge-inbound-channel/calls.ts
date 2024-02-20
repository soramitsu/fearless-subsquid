import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v10 from '../v10'

export const submit =  {
    name: 'SubstrateBridgeInboundChannel.submit',
    v1: new CallType(
        'SubstrateBridgeInboundChannel.submit',
        sts.struct({
            networkId: v1.SubNetworkId,
            message: v1.ProvedSubstrateBridgeMessage,
        })
    ),
    v10: new CallType(
        'SubstrateBridgeInboundChannel.submit',
        sts.struct({
            networkId: v10.SubNetworkId,
            commitment: v10.GenericCommitment,
            proof: v10.Type_297,
        })
    ),
}

export const setRewardFraction =  {
    name: 'SubstrateBridgeInboundChannel.set_reward_fraction',
    v1: new CallType(
        'SubstrateBridgeInboundChannel.set_reward_fraction',
        sts.struct({
            fraction: v1.Perbill,
        })
    ),
}
