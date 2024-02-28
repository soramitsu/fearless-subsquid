import * as polkadotStorage from '../../polkadot/grandpa/storage'


export const state = {
	name: '',
	v0Polkadot: polkadotStorage.state['v0'],
	v9110Polkadot: polkadotStorage.state['v9110'],
}

export const pendingChange = {
	name: '',
	v0Polkadot: polkadotStorage.pendingChange['v0'],
	v9110Polkadot: polkadotStorage.pendingChange['v9110'],
}

export const nextForced = {
	name: '',
	v0Polkadot: polkadotStorage.nextForced['v0'],
}

export const stalled = {
	name: '',
	v0Polkadot: polkadotStorage.stalled['v0'],
}

export const currentSetId = {
	name: '',
	v0Polkadot: polkadotStorage.currentSetId['v0'],
}

export const setIdSession = {
	name: '',
	v0Polkadot: polkadotStorage.setIdSession['v0'],
}
