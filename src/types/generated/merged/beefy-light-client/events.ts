import * as soraPolkadotEvents from '../../sora-polkadot/beefy-light-client/events'
import * as soraKusamaEvents from '../../sora-kusama/beefy-light-client/events'


export const verificationSuccessful = {
	name: 'BeefyLightClient.VerificationSuccessful',
	v1SoraPolkadot: soraPolkadotEvents.verificationSuccessful['v1'],
	v10SoraPolkadot: soraPolkadotEvents.verificationSuccessful['v10'],
	v7SoraKusama: soraKusamaEvents.verificationSuccessful['v7'],
}

export const newMmrRoot = {
	name: 'BeefyLightClient.NewMMRRoot',
	v1SoraPolkadot: soraPolkadotEvents.newMmrRoot['v1'],
	v10SoraPolkadot: soraPolkadotEvents.newMmrRoot['v10'],
	v7SoraKusama: soraKusamaEvents.newMmrRoot['v7'],
}

export const validatorRegistryUpdated = {
	name: 'BeefyLightClient.ValidatorRegistryUpdated',
	v1SoraPolkadot: soraPolkadotEvents.validatorRegistryUpdated['v1'],
	v10SoraPolkadot: soraPolkadotEvents.validatorRegistryUpdated['v10'],
	v7SoraKusama: soraKusamaEvents.validatorRegistryUpdated['v7'],
}
