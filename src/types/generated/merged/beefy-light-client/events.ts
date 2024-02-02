import * as soraPolkadotEvents from '../../sora-polkadot/beefy-light-client/events'
import * as soraKusamaEvents from '../../sora-kusama/beefy-light-client/events'


export const verificationSuccessful = {
	name: 'BeefyLightClient.VerificationSuccessful',
	soraPolkadotV1: soraPolkadotEvents.verificationSuccessful['v1'],
	soraPolkadotV10: soraPolkadotEvents.verificationSuccessful['v10'],
	soraKusamaV7: soraKusamaEvents.verificationSuccessful['v7'],
}

export const newMmrRoot = {
	name: 'BeefyLightClient.NewMMRRoot',
	soraPolkadotV1: soraPolkadotEvents.newMmrRoot['v1'],
	soraPolkadotV10: soraPolkadotEvents.newMmrRoot['v10'],
	soraKusamaV7: soraKusamaEvents.newMmrRoot['v7'],
}

export const validatorRegistryUpdated = {
	name: 'BeefyLightClient.ValidatorRegistryUpdated',
	soraPolkadotV1: soraPolkadotEvents.validatorRegistryUpdated['v1'],
	soraPolkadotV10: soraPolkadotEvents.validatorRegistryUpdated['v10'],
	soraKusamaV7: soraKusamaEvents.validatorRegistryUpdated['v7'],
}
