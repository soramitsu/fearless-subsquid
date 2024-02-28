import * as polkadotEvents from '../../polkadot/indices/events'


export const indexAssigned = {
	name: 'Indices.IndexAssigned',
	v0Polkadot: polkadotEvents.indexAssigned['v0'],
	v9140Polkadot: polkadotEvents.indexAssigned['v9140'],
}

export const indexFreed = {
	name: 'Indices.IndexFreed',
	v0Polkadot: polkadotEvents.indexFreed['v0'],
	v9140Polkadot: polkadotEvents.indexFreed['v9140'],
}

export const indexFrozen = {
	name: 'Indices.IndexFrozen',
	v7Polkadot: polkadotEvents.indexFrozen['v7'],
	v9140Polkadot: polkadotEvents.indexFrozen['v9140'],
}
