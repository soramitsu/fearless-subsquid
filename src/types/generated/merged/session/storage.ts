import * as soraPolkadotStorage from '../../sora-polkadot/session/storage'
import * as soraKusamaStorage from '../../sora-kusama/session/storage'


export const validators = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.validators['v1'],
	soraKusamaV1: soraKusamaStorage.validators['v1'],
}

export const currentIndex = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.currentIndex['v1'],
	soraKusamaV1: soraKusamaStorage.currentIndex['v1'],
}

export const queuedChanged = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.queuedChanged['v1'],
	soraKusamaV1: soraKusamaStorage.queuedChanged['v1'],
}

export const queuedKeys = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.queuedKeys['v1'],
	soraKusamaV1: soraKusamaStorage.queuedKeys['v1'],
	soraKusamaV7: soraKusamaStorage.queuedKeys['v7'],
}

export const disabledValidators = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.disabledValidators['v1'],
	soraKusamaV1: soraKusamaStorage.disabledValidators['v1'],
}

export const nextKeys = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.nextKeys['v1'],
	soraKusamaV1: soraKusamaStorage.nextKeys['v1'],
	soraKusamaV7: soraKusamaStorage.nextKeys['v7'],
}

export const keyOwner = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.keyOwner['v1'],
	soraKusamaV1: soraKusamaStorage.keyOwner['v1'],
}
