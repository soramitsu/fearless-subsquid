import * as soraPolkadotStorage from '../../sora-polkadot/beefy-light-client/storage'
import * as soraKusamaStorage from '../../sora-kusama/beefy-light-client/storage'


export const latestMmrRoots = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.latestMmrRoots['v1'],
	v10SoraPolkadot: soraPolkadotStorage.latestMmrRoots['v10'],
	v7SoraKusama: soraKusamaStorage.latestMmrRoots['v7'],
}

export const latestBeefyBlock = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.latestBeefyBlock['v1'],
	v10SoraPolkadot: soraPolkadotStorage.latestBeefyBlock['v10'],
	v7SoraKusama: soraKusamaStorage.latestBeefyBlock['v7'],
}

export const latestRandomSeed = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.latestRandomSeed['v1'],
	v10SoraPolkadot: soraPolkadotStorage.latestRandomSeed['v10'],
	v7SoraKusama: soraKusamaStorage.latestRandomSeed['v7'],
}

export const currentValidatorSet = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.currentValidatorSet['v1'],
	v10SoraPolkadot: soraPolkadotStorage.currentValidatorSet['v10'],
	v7SoraKusama: soraKusamaStorage.currentValidatorSet['v7'],
}

export const nextValidatorSet = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.nextValidatorSet['v1'],
	v10SoraPolkadot: soraPolkadotStorage.nextValidatorSet['v10'],
	v7SoraKusama: soraKusamaStorage.nextValidatorSet['v7'],
}

export const thisNetworkId = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.thisNetworkId['v1'],
	v10SoraPolkadot: soraPolkadotStorage.thisNetworkId['v10'],
	v7SoraKusama: soraKusamaStorage.thisNetworkId['v7'],
}
