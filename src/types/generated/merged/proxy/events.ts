import * as kusamaEvents from '../../kusama/proxy/events'


export const proxyExecuted = {
	name: 'Proxy.ProxyExecuted',
	v2005Kusama: kusamaEvents.proxyExecuted['v2005'],
	v9111Kusama: kusamaEvents.proxyExecuted['v9111'],
	v9130Kusama: kusamaEvents.proxyExecuted['v9130'],
	v9160Kusama: kusamaEvents.proxyExecuted['v9160'],
	v9170Kusama: kusamaEvents.proxyExecuted['v9170'],
	v9190Kusama: kusamaEvents.proxyExecuted['v9190'],
	v9320Kusama: kusamaEvents.proxyExecuted['v9320'],
	v9420Kusama: kusamaEvents.proxyExecuted['v9420'],
	v9430Kusama: kusamaEvents.proxyExecuted['v9430'],
}

export const anonymousCreated = {
	name: 'Proxy.AnonymousCreated',
	v2005Kusama: kusamaEvents.anonymousCreated['v2005'],
	v9130Kusama: kusamaEvents.anonymousCreated['v9130'],
	v9180Kusama: kusamaEvents.anonymousCreated['v9180'],
}

export const announced = {
	name: 'Proxy.Announced',
	v2023Kusama: kusamaEvents.announced['v2023'],
	v9130Kusama: kusamaEvents.announced['v9130'],
}

export const proxyAdded = {
	name: 'Proxy.ProxyAdded',
	v9111Kusama: kusamaEvents.proxyAdded['v9111'],
	v9130Kusama: kusamaEvents.proxyAdded['v9130'],
	v9180Kusama: kusamaEvents.proxyAdded['v9180'],
	v9420Kusama: kusamaEvents.proxyAdded['v9420'],
}

export const proxyRemoved = {
	name: 'Proxy.ProxyRemoved',
	v9190Kusama: kusamaEvents.proxyRemoved['v9190'],
	v9420Kusama: kusamaEvents.proxyRemoved['v9420'],
}

export const pureCreated = {
	name: 'Proxy.PureCreated',
	v9300Kusama: kusamaEvents.pureCreated['v9300'],
	v9420Kusama: kusamaEvents.pureCreated['v9420'],
}
