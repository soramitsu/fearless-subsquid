import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v10 from '../v10'

export const registerNetwork =  {
    name: 'BridgeDataSigner.register_network',
    v10: new CallType(
        'BridgeDataSigner.register_network',
        sts.struct({
            networkId: v10.GenericNetworkId,
            peers: sts.array(() => v10.Public),
        })
    ),
}

export const approve =  {
    name: 'BridgeDataSigner.approve',
    v10: new CallType(
        'BridgeDataSigner.approve',
        sts.struct({
            networkId: v10.GenericNetworkId,
            data: v10.H256,
            signature: v10.Signature,
        })
    ),
}

export const addPeer =  {
    name: 'BridgeDataSigner.add_peer',
    v10: new CallType(
        'BridgeDataSigner.add_peer',
        sts.struct({
            networkId: v10.GenericNetworkId,
            peer: v10.Public,
        })
    ),
}

export const removePeer =  {
    name: 'BridgeDataSigner.remove_peer',
    v10: new CallType(
        'BridgeDataSigner.remove_peer',
        sts.struct({
            networkId: v10.GenericNetworkId,
            peer: v10.Public,
        })
    ),
}

export const finishRemovePeer =  {
    name: 'BridgeDataSigner.finish_remove_peer',
    v10: new CallType(
        'BridgeDataSigner.finish_remove_peer',
        sts.struct({
            peer: v10.Public,
        })
    ),
}

export const finishAddPeer =  {
    name: 'BridgeDataSigner.finish_add_peer',
    v10: new CallType(
        'BridgeDataSigner.finish_add_peer',
        sts.struct({
            peer: v10.Public,
        })
    ),
}
