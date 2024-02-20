import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v10 from '../v10'

export const networkInitialized =  {
    name: 'MultisigVerifier.NetworkInitialized',
    v10: new EventType(
        'MultisigVerifier.NetworkInitialized',
        v10.GenericNetworkId
    ),
}

export const verificationSuccessful =  {
    name: 'MultisigVerifier.VerificationSuccessful',
    v10: new EventType(
        'MultisigVerifier.VerificationSuccessful',
        v10.GenericNetworkId
    ),
}

export const peerAdded =  {
    name: 'MultisigVerifier.PeerAdded',
    v10: new EventType(
        'MultisigVerifier.PeerAdded',
        v10.Public
    ),
}

export const peerRemoved =  {
    name: 'MultisigVerifier.PeerRemoved',
    v10: new EventType(
        'MultisigVerifier.PeerRemoved',
        v10.Public
    ),
}
