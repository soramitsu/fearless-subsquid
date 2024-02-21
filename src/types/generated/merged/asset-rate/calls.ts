import * as kusamaCalls from '../../kusama/asset-rate/calls'


export const create = {
	name: 'AssetRate.create',
	v1001000Kusama: kusamaCalls.create['v1001000'],
}

export const update = {
	name: 'AssetRate.update',
	v1001000Kusama: kusamaCalls.update['v1001000'],
}

export const remove = {
	name: 'AssetRate.remove',
	v1001000Kusama: kusamaCalls.remove['v1001000'],
}
