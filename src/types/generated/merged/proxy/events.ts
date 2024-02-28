import * as polkadotEvents from '../../polkadot/proxy/events'


export const proxyExecuted = {
	name: 'Proxy.ProxyExecuted',
	v5Polkadot: polkadotEvents.proxyExecuted['v5'],
	v9110Polkadot: polkadotEvents.proxyExecuted['v9110'],
	v9140Polkadot: polkadotEvents.proxyExecuted['v9140'],
	v9170Polkadot: polkadotEvents.proxyExecuted['v9170'],
	v9190Polkadot: polkadotEvents.proxyExecuted['v9190'],
	v9340Polkadot: polkadotEvents.proxyExecuted['v9340'],
	v9420Polkadot: polkadotEvents.proxyExecuted['v9420'],
	v9430Polkadot: polkadotEvents.proxyExecuted['v9430'],
}

export const anonymousCreated = {
	name: 'Proxy.AnonymousCreated',
	v5Polkadot: polkadotEvents.anonymousCreated['v5'],
	v9110Polkadot: polkadotEvents.anonymousCreated['v9110'],
	v9140Polkadot: polkadotEvents.anonymousCreated['v9140'],
}

export const announced = {
	name: 'Proxy.Announced',
	v23Polkadot: polkadotEvents.announced['v23'],
	v9140Polkadot: polkadotEvents.announced['v9140'],
}

export const proxyAdded = {
	name: 'Proxy.ProxyAdded',
	v9110Polkadot: polkadotEvents.proxyAdded['v9110'],
	v9140Polkadot: polkadotEvents.proxyAdded['v9140'],
	v9420Polkadot: polkadotEvents.proxyAdded['v9420'],
}

export const proxyRemoved = {
	name: 'Proxy.ProxyRemoved',
	v9190Polkadot: polkadotEvents.proxyRemoved['v9190'],
	v9420Polkadot: polkadotEvents.proxyRemoved['v9420'],
}

export const pureCreated = {
	name: 'Proxy.PureCreated',
	v9300Polkadot: polkadotEvents.pureCreated['v9300'],
	v9420Polkadot: polkadotEvents.pureCreated['v9420'],
}
