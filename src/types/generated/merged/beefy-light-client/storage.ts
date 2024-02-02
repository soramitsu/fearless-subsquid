import * as soraPolkadotStorage from '../../sora-polkadot/beefy-light-client/storage'
import * as soraKusamaStorage from '../../sora-kusama/beefy-light-client/storage'


export const latestMmrRoots = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.latestMmrRoots['v1'],
	soraPolkadotV10: soraPolkadotStorage.latestMmrRoots['v10'],
	soraKusamaV7: soraKusamaStorage.latestMmrRoots['v7'],
}

export const latestBeefyBlock = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.latestBeefyBlock['v1'],
	soraPolkadotV10: soraPolkadotStorage.latestBeefyBlock['v10'],
	soraKusamaV7: soraKusamaStorage.latestBeefyBlock['v7'],
}

export const latestRandomSeed = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.latestRandomSeed['v1'],
	soraPolkadotV10: soraPolkadotStorage.latestRandomSeed['v10'],
	soraKusamaV7: soraKusamaStorage.latestRandomSeed['v7'],
}

export const currentValidatorSet = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.currentValidatorSet['v1'],
	soraPolkadotV10: soraPolkadotStorage.currentValidatorSet['v10'],
	soraKusamaV7: soraKusamaStorage.currentValidatorSet['v7'],
}

export const nextValidatorSet = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.nextValidatorSet['v1'],
	soraPolkadotV10: soraPolkadotStorage.nextValidatorSet['v10'],
	soraKusamaV7: soraKusamaStorage.nextValidatorSet['v7'],
}

export const thisNetworkId = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.thisNetworkId['v1'],
	soraPolkadotV10: soraPolkadotStorage.thisNetworkId['v10'],
	soraKusamaV7: soraKusamaStorage.thisNetworkId['v7'],
}
