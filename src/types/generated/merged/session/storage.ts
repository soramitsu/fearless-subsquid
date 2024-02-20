import * as soraPolkadotStorage from '../../sora-polkadot/session/storage'
import * as soraKusamaStorage from '../../sora-kusama/session/storage'


export const validators = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.validators['v1'],
	v1SoraKusama: soraKusamaStorage.validators['v1'],
}

export const currentIndex = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.currentIndex['v1'],
	v1SoraKusama: soraKusamaStorage.currentIndex['v1'],
}

export const queuedChanged = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.queuedChanged['v1'],
	v1SoraKusama: soraKusamaStorage.queuedChanged['v1'],
}

export const queuedKeys = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.queuedKeys['v1'],
	v1SoraKusama: soraKusamaStorage.queuedKeys['v1'],
	v7SoraKusama: soraKusamaStorage.queuedKeys['v7'],
}

export const disabledValidators = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.disabledValidators['v1'],
	v1SoraKusama: soraKusamaStorage.disabledValidators['v1'],
}

export const nextKeys = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.nextKeys['v1'],
	v1SoraKusama: soraKusamaStorage.nextKeys['v1'],
	v7SoraKusama: soraKusamaStorage.nextKeys['v7'],
}

export const keyOwner = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.keyOwner['v1'],
	v1SoraKusama: soraKusamaStorage.keyOwner['v1'],
}
