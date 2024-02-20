import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v10 from '../v10'

export const initialize =  {
    name: 'MultisigVerifier.initialize',
    v10: new CallType(
        'MultisigVerifier.initialize',
        sts.struct({
            networkId: v10.GenericNetworkId,
            peers: sts.array(() => v10.Public),
        })
    ),
}

export const addPeer =  {
    name: 'MultisigVerifier.add_peer',
    v10: new CallType(
        'MultisigVerifier.add_peer',
        sts.struct({
            peer: v10.Public,
        })
    ),
}

export const removePeer =  {
    name: 'MultisigVerifier.remove_peer',
    v10: new CallType(
        'MultisigVerifier.remove_peer',
        sts.struct({
            peer: v10.Public,
        })
    ),
}
