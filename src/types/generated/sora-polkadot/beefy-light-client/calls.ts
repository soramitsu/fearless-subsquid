import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v10 from '../v10'

export const initialize =  {
    name: 'BeefyLightClient.initialize',
    v1: new CallType(
        'BeefyLightClient.initialize',
        sts.struct({
            networkId: v1.SubNetworkId,
            latestBeefyBlock: sts.bigint(),
            validatorSet: v1.BeefyAuthoritySet,
            nextValidatorSet: v1.BeefyAuthoritySet,
        })
    ),
    v10: new CallType(
        'BeefyLightClient.initialize',
        sts.struct({
            networkId: v10.SubNetworkId,
            latestBeefyBlock: sts.bigint(),
            validatorSet: v10.BeefyAuthoritySet,
            nextValidatorSet: v10.BeefyAuthoritySet,
        })
    ),
}

export const submitSignatureCommitment =  {
    name: 'BeefyLightClient.submit_signature_commitment',
    v1: new CallType(
        'BeefyLightClient.submit_signature_commitment',
        sts.struct({
            networkId: v1.SubNetworkId,
            commitment: v1.Commitment,
            validatorProof: v1.ValidatorProof,
            latestMmrLeaf: v1.MmrLeaf,
            proof: v1.SimplifiedMMRProof,
        })
    ),
    v10: new CallType(
        'BeefyLightClient.submit_signature_commitment',
        sts.struct({
            networkId: v10.SubNetworkId,
            commitment: v10.Commitment,
            validatorProof: v10.ValidatorProof,
            latestMmrLeaf: v10.MmrLeaf,
            proof: v10.Proof,
        })
    ),
}
