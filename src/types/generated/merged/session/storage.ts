import * as polkadotStorage from '../../polkadot/session/storage'


export const validators = {
	name: '',
	v0Polkadot: polkadotStorage.validators['v0'],
}

export const currentIndex = {
	name: '',
	v0Polkadot: polkadotStorage.currentIndex['v0'],
}

export const queuedChanged = {
	name: '',
	v0Polkadot: polkadotStorage.queuedChanged['v0'],
}

export const queuedKeys = {
	name: '',
	v0Polkadot: polkadotStorage.queuedKeys['v0'],
	v28Polkadot: polkadotStorage.queuedKeys['v28'],
	v9110Polkadot: polkadotStorage.queuedKeys['v9110'],
	v1001002Polkadot: polkadotStorage.queuedKeys['v1001002'],
}

export const disabledValidators = {
	name: '',
	v0Polkadot: polkadotStorage.disabledValidators['v0'],
}

export const nextKeys = {
	name: '',
	v0Polkadot: polkadotStorage.nextKeys['v0'],
	v28Polkadot: polkadotStorage.nextKeys['v28'],
	v9110Polkadot: polkadotStorage.nextKeys['v9110'],
	v1001002Polkadot: polkadotStorage.nextKeys['v1001002'],
}

export const keyOwner = {
	name: '',
	v0Polkadot: polkadotStorage.keyOwner['v0'],
	v9110Polkadot: polkadotStorage.keyOwner['v9110'],
}
