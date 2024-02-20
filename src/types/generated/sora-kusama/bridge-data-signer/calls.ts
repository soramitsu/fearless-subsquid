import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v7 from '../v7'

export const registerNetwork =  {
    name: 'BridgeDataSigner.register_network',
    v7: new CallType(
        'BridgeDataSigner.register_network',
        sts.struct({
            networkId: v7.GenericNetworkId,
            peers: sts.array(() => v7.Public),
        })
    ),
}

export const approve =  {
    name: 'BridgeDataSigner.approve',
    v7: new CallType(
        'BridgeDataSigner.approve',
        sts.struct({
            networkId: v7.GenericNetworkId,
            data: v7.H256,
            signature: v7.Signature,
        })
    ),
}

export const addPeer =  {
    name: 'BridgeDataSigner.add_peer',
    v7: new CallType(
        'BridgeDataSigner.add_peer',
        sts.struct({
            networkId: v7.GenericNetworkId,
            peer: v7.Public,
        })
    ),
}

export const removePeer =  {
    name: 'BridgeDataSigner.remove_peer',
    v7: new CallType(
        'BridgeDataSigner.remove_peer',
        sts.struct({
            networkId: v7.GenericNetworkId,
            peer: v7.Public,
        })
    ),
}

export const finishRemovePeer =  {
    name: 'BridgeDataSigner.finish_remove_peer',
    v7: new CallType(
        'BridgeDataSigner.finish_remove_peer',
        sts.struct({
            peer: v7.Public,
        })
    ),
}

export const finishAddPeer =  {
    name: 'BridgeDataSigner.finish_add_peer',
    v7: new CallType(
        'BridgeDataSigner.finish_add_peer',
        sts.struct({
            peer: v7.Public,
        })
    ),
}
