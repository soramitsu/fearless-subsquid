import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v7 from '../v7'

export const initialized =  {
    name: 'BridgeDataSigner.Initialized',
    v7: new EventType(
        'BridgeDataSigner.Initialized',
        sts.struct({
            networkId: v7.GenericNetworkId,
            peers: sts.array(() => v7.Public),
        })
    ),
}

export const addedPeer =  {
    name: 'BridgeDataSigner.AddedPeer',
    v7: new EventType(
        'BridgeDataSigner.AddedPeer',
        sts.struct({
            networkId: v7.GenericNetworkId,
            peer: v7.Public,
        })
    ),
}

export const removedPeer =  {
    name: 'BridgeDataSigner.RemovedPeer',
    v7: new EventType(
        'BridgeDataSigner.RemovedPeer',
        sts.struct({
            networkId: v7.GenericNetworkId,
            peer: v7.Public,
        })
    ),
}

export const approvalAccepted =  {
    name: 'BridgeDataSigner.ApprovalAccepted',
    v7: new EventType(
        'BridgeDataSigner.ApprovalAccepted',
        sts.struct({
            networkId: v7.GenericNetworkId,
            data: v7.H256,
            signature: v7.Signature,
        })
    ),
}

export const approved =  {
    name: 'BridgeDataSigner.Approved',
    v7: new EventType(
        'BridgeDataSigner.Approved',
        sts.struct({
            networkId: v7.GenericNetworkId,
            data: v7.H256,
            signatures: sts.array(() => v7.Signature),
        })
    ),
}
