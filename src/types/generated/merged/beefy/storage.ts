import * as soraPolkadotStorage from '../../sora-polkadot/beefy/storage'
import * as soraKusamaStorage from '../../sora-kusama/beefy/storage'


export const authorities = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.authorities['v1'],
	v7SoraKusama: soraKusamaStorage.authorities['v7'],
}

export const validatorSetId = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.validatorSetId['v1'],
	v7SoraKusama: soraKusamaStorage.validatorSetId['v7'],
}

export const nextAuthorities = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.nextAuthorities['v1'],
	v7SoraKusama: soraKusamaStorage.nextAuthorities['v7'],
}
