import * as kusamaCalls from '../../kusama/indices/calls'


export const claim = {
	name: 'Indices.claim',
	v1050Kusama: kusamaCalls.claim['v1050'],
}

export const transfer = {
	name: 'Indices.transfer',
	v1050Kusama: kusamaCalls.transfer['v1050'],
	v9291Kusama: kusamaCalls.transfer['v9291'],
}

export const free = {
	name: 'Indices.free',
	v1050Kusama: kusamaCalls.free['v1050'],
}

export const forceTransfer = {
	name: 'Indices.force_transfer',
	v1050Kusama: kusamaCalls.forceTransfer['v1050'],
	v2007Kusama: kusamaCalls.forceTransfer['v2007'],
	v9291Kusama: kusamaCalls.forceTransfer['v9291'],
}

export const freeze = {
	name: 'Indices.freeze',
	v2007Kusama: kusamaCalls.freeze['v2007'],
}
