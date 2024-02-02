import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v10 from '../v10'

export const initialized =  {
    name: 'BridgeDataSigner.Initialized',
    v10: new EventType(
        'BridgeDataSigner.Initialized',
        sts.struct({
            networkId: v10.GenericNetworkId,
            peers: sts.array(() => v10.Public),
        })
    ),
}

export const addedPeer =  {
    name: 'BridgeDataSigner.AddedPeer',
    v10: new EventType(
        'BridgeDataSigner.AddedPeer',
        sts.struct({
            networkId: v10.GenericNetworkId,
            peer: v10.Public,
        })
    ),
}

export const removedPeer =  {
    name: 'BridgeDataSigner.RemovedPeer',
    v10: new EventType(
        'BridgeDataSigner.RemovedPeer',
        sts.struct({
            networkId: v10.GenericNetworkId,
            peer: v10.Public,
        })
    ),
}

export const approvalAccepted =  {
    name: 'BridgeDataSigner.ApprovalAccepted',
    v10: new EventType(
        'BridgeDataSigner.ApprovalAccepted',
        sts.struct({
            networkId: v10.GenericNetworkId,
            data: v10.H256,
            signature: v10.Signature,
        })
    ),
}

export const approved =  {
    name: 'BridgeDataSigner.Approved',
    v10: new EventType(
        'BridgeDataSigner.Approved',
        sts.struct({
            networkId: v10.GenericNetworkId,
            data: v10.H256,
            signatures: sts.array(() => v10.Signature),
        })
    ),
}
