import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v7 from '../v7'

export const verificationSuccessful =  {
    name: 'BeefyLightClient.VerificationSuccessful',
    v7: new EventType(
        'BeefyLightClient.VerificationSuccessful',
        sts.tuple([v7.SubNetworkId, v7.AccountId32, sts.number()])
    ),
}

export const newMmrRoot =  {
    name: 'BeefyLightClient.NewMMRRoot',
    v7: new EventType(
        'BeefyLightClient.NewMMRRoot',
        sts.tuple([v7.SubNetworkId, v7.H256, sts.bigint()])
    ),
}

export const validatorRegistryUpdated =  {
    name: 'BeefyLightClient.ValidatorRegistryUpdated',
    v7: new EventType(
        'BeefyLightClient.ValidatorRegistryUpdated',
        sts.tuple([v7.SubNetworkId, v7.H256, sts.number(), sts.bigint()])
    ),
}
