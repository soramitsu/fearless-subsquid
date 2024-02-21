import * as kusamaEvents from '../../kusama/indices/events'


export const newAccountIndex = {
	name: 'Indices.NewAccountIndex',
	v1020Kusama: kusamaEvents.newAccountIndex['v1020'],
}

export const indexAssigned = {
	name: 'Indices.IndexAssigned',
	v1050Kusama: kusamaEvents.indexAssigned['v1050'],
	v9130Kusama: kusamaEvents.indexAssigned['v9130'],
}

export const indexFreed = {
	name: 'Indices.IndexFreed',
	v1050Kusama: kusamaEvents.indexFreed['v1050'],
	v9130Kusama: kusamaEvents.indexFreed['v9130'],
}

export const indexFrozen = {
	name: 'Indices.IndexFrozen',
	v2007Kusama: kusamaEvents.indexFrozen['v2007'],
	v9130Kusama: kusamaEvents.indexFrozen['v9130'],
}
