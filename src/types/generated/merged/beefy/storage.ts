import * as soraPolkadotStorage from '../../sora-polkadot/beefy/storage'
import * as soraKusamaStorage from '../../sora-kusama/beefy/storage'


export const authorities = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.authorities['v1'],
	soraKusamaV7: soraKusamaStorage.authorities['v7'],
}

export const validatorSetId = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.validatorSetId['v1'],
	soraKusamaV7: soraKusamaStorage.validatorSetId['v7'],
}

export const nextAuthorities = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.nextAuthorities['v1'],
	soraKusamaV7: soraKusamaStorage.nextAuthorities['v7'],
}
