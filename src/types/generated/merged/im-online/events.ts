import * as polkadotEvents from '../../polkadot/im-online/events'


export const heartbeatReceived = {
	name: 'ImOnline.HeartbeatReceived',
	v0Polkadot: polkadotEvents.heartbeatReceived['v0'],
	v9140Polkadot: polkadotEvents.heartbeatReceived['v9140'],
}

export const allGood = {
	name: 'ImOnline.AllGood',
	v0Polkadot: polkadotEvents.allGood['v0'],
}

export const someOffline = {
	name: 'ImOnline.SomeOffline',
	v0Polkadot: polkadotEvents.someOffline['v0'],
	v9140Polkadot: polkadotEvents.someOffline['v9140'],
}
