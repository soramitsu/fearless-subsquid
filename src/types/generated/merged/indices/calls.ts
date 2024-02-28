import * as polkadotCalls from '../../polkadot/indices/calls'


export const claim = {
	name: 'Indices.claim',
	v0Polkadot: polkadotCalls.claim['v0'],
}

export const transfer = {
	name: 'Indices.transfer',
	v0Polkadot: polkadotCalls.transfer['v0'],
	v9291Polkadot: polkadotCalls.transfer['v9291'],
}

export const free = {
	name: 'Indices.free',
	v0Polkadot: polkadotCalls.free['v0'],
}

export const forceTransfer = {
	name: 'Indices.force_transfer',
	v0Polkadot: polkadotCalls.forceTransfer['v0'],
	v7Polkadot: polkadotCalls.forceTransfer['v7'],
	v9291Polkadot: polkadotCalls.forceTransfer['v9291'],
}

export const freeze = {
	name: 'Indices.freeze',
	v7Polkadot: polkadotCalls.freeze['v7'],
}
