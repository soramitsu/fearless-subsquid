import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v10 from '../v10'

export const verificationSuccessful =  {
    name: 'BeefyLightClient.VerificationSuccessful',
    v1: new EventType(
        'BeefyLightClient.VerificationSuccessful',
        sts.tuple([v1.SubNetworkId, v1.AccountId32, sts.number()])
    ),
    v10: new EventType(
        'BeefyLightClient.VerificationSuccessful',
        sts.tuple([v10.SubNetworkId, v10.AccountId32, sts.number()])
    ),
}

export const newMmrRoot =  {
    name: 'BeefyLightClient.NewMMRRoot',
    v1: new EventType(
        'BeefyLightClient.NewMMRRoot',
        sts.tuple([v1.SubNetworkId, v1.H256, sts.bigint()])
    ),
    v10: new EventType(
        'BeefyLightClient.NewMMRRoot',
        sts.tuple([v10.SubNetworkId, v10.H256, sts.bigint()])
    ),
}

export const validatorRegistryUpdated =  {
    name: 'BeefyLightClient.ValidatorRegistryUpdated',
    v1: new EventType(
        'BeefyLightClient.ValidatorRegistryUpdated',
        sts.tuple([v1.SubNetworkId, v1.H256, sts.number(), sts.bigint()])
    ),
    v10: new EventType(
        'BeefyLightClient.ValidatorRegistryUpdated',
        sts.tuple([v10.SubNetworkId, v10.H256, sts.number(), sts.bigint()])
    ),
}
