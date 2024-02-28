import * as polkadotEvents from '../../polkadot/grandpa/events'


export const newAuthorities = {
	name: 'Grandpa.NewAuthorities',
	v0Polkadot: polkadotEvents.newAuthorities['v0'],
	v9140Polkadot: polkadotEvents.newAuthorities['v9140'],
}

export const paused = {
	name: 'Grandpa.Paused',
	v0Polkadot: polkadotEvents.paused['v0'],
}

export const resumed = {
	name: 'Grandpa.Resumed',
	v0Polkadot: polkadotEvents.resumed['v0'],
}
