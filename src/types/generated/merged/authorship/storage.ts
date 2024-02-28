import * as polkadotStorage from '../../polkadot/authorship/storage'


export const uncles = {
	name: '',
	v0Polkadot: polkadotStorage.uncles['v0'],
	v9110Polkadot: polkadotStorage.uncles['v9110'],
}

export const author = {
	name: '',
	v0Polkadot: polkadotStorage.author['v0'],
}

export const didSetUncles = {
	name: '',
	v0Polkadot: polkadotStorage.didSetUncles['v0'],
}
