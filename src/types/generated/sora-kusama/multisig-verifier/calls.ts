import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v7 from '../v7'

export const initialize =  {
    name: 'MultisigVerifier.initialize',
    v7: new CallType(
        'MultisigVerifier.initialize',
        sts.struct({
            networkId: v7.GenericNetworkId,
            peers: sts.array(() => v7.Public),
        })
    ),
}

export const addPeer =  {
    name: 'MultisigVerifier.add_peer',
    v7: new CallType(
        'MultisigVerifier.add_peer',
        sts.struct({
            peer: v7.Public,
        })
    ),
}

export const removePeer =  {
    name: 'MultisigVerifier.remove_peer',
    v7: new CallType(
        'MultisigVerifier.remove_peer',
        sts.struct({
            peer: v7.Public,
        })
    ),
}
