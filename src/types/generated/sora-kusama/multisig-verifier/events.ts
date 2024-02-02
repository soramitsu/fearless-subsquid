import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v7 from '../v7'

export const networkInitialized =  {
    name: 'MultisigVerifier.NetworkInitialized',
    v7: new EventType(
        'MultisigVerifier.NetworkInitialized',
        v7.GenericNetworkId
    ),
}

export const verificationSuccessful =  {
    name: 'MultisigVerifier.VerificationSuccessful',
    v7: new EventType(
        'MultisigVerifier.VerificationSuccessful',
        v7.GenericNetworkId
    ),
}

export const peerAdded =  {
    name: 'MultisigVerifier.PeerAdded',
    v7: new EventType(
        'MultisigVerifier.PeerAdded',
        v7.Public
    ),
}

export const peerRemoved =  {
    name: 'MultisigVerifier.PeerRemoved',
    v7: new EventType(
        'MultisigVerifier.PeerRemoved',
        v7.Public
    ),
}
