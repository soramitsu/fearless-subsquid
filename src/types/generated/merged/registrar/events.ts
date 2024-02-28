import * as polkadotEvents from '../../polkadot/registrar/events'


export const parathreadRegistered = {
	name: 'Registrar.ParathreadRegistered',
	v0Polkadot: polkadotEvents.parathreadRegistered['v0'],
}

export const parathreadDeregistered = {
	name: 'Registrar.ParathreadDeregistered',
	v0Polkadot: polkadotEvents.parathreadDeregistered['v0'],
}

export const registered = {
	name: 'Registrar.Registered',
	v9110Polkadot: polkadotEvents.registered['v9110'],
	v9230Polkadot: polkadotEvents.registered['v9230'],
}

export const deregistered = {
	name: 'Registrar.Deregistered',
	v9110Polkadot: polkadotEvents.deregistered['v9110'],
	v9230Polkadot: polkadotEvents.deregistered['v9230'],
}

export const reserved = {
	name: 'Registrar.Reserved',
	v9110Polkadot: polkadotEvents.reserved['v9110'],
	v9230Polkadot: polkadotEvents.reserved['v9230'],
}

export const swapped = {
	name: 'Registrar.Swapped',
	v9430Polkadot: polkadotEvents.swapped['v9430'],
}
