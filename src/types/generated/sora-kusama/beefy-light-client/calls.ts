import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v7 from '../v7'

export const initialize =  {
    name: 'BeefyLightClient.initialize',
    v7: new CallType(
        'BeefyLightClient.initialize',
        sts.struct({
            networkId: v7.SubNetworkId,
            latestBeefyBlock: sts.bigint(),
            validatorSet: v7.BeefyAuthoritySet,
            nextValidatorSet: v7.BeefyAuthoritySet,
        })
    ),
}

export const submitSignatureCommitment =  {
    name: 'BeefyLightClient.submit_signature_commitment',
    v7: new CallType(
        'BeefyLightClient.submit_signature_commitment',
        sts.struct({
            networkId: v7.SubNetworkId,
            commitment: v7.Commitment,
            validatorProof: v7.ValidatorProof,
            latestMmrLeaf: v7.MmrLeaf,
            proof: v7.Proof,
        })
    ),
}
