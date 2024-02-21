import * as kusamaEvents from '../../kusama/whitelist/events'


export const callWhitelisted = {
	name: 'Whitelist.CallWhitelisted',
	v9320Kusama: kusamaEvents.callWhitelisted['v9320'],
}

export const whitelistedCallRemoved = {
	name: 'Whitelist.WhitelistedCallRemoved',
	v9320Kusama: kusamaEvents.whitelistedCallRemoved['v9320'],
}

export const whitelistedCallDispatched = {
	name: 'Whitelist.WhitelistedCallDispatched',
	v9320Kusama: kusamaEvents.whitelistedCallDispatched['v9320'],
	v9420Kusama: kusamaEvents.whitelistedCallDispatched['v9420'],
	v9430Kusama: kusamaEvents.whitelistedCallDispatched['v9430'],
}
