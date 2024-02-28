import * as polkadotEvents from '../../polkadot/whitelist/events'


export const callWhitelisted = {
	name: 'Whitelist.CallWhitelisted',
	v9420Polkadot: polkadotEvents.callWhitelisted['v9420'],
}

export const whitelistedCallRemoved = {
	name: 'Whitelist.WhitelistedCallRemoved',
	v9420Polkadot: polkadotEvents.whitelistedCallRemoved['v9420'],
}

export const whitelistedCallDispatched = {
	name: 'Whitelist.WhitelistedCallDispatched',
	v9420Polkadot: polkadotEvents.whitelistedCallDispatched['v9420'],
	v9430Polkadot: polkadotEvents.whitelistedCallDispatched['v9430'],
}
