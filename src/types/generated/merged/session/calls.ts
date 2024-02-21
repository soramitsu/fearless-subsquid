import * as kusamaCalls from '../../kusama/session/calls'


export const setKeys = {
	name: 'Session.set_keys',
	v1020Kusama: kusamaCalls.setKeys['v1020'],
	v2028Kusama: kusamaCalls.setKeys['v2028'],
	v9111Kusama: kusamaCalls.setKeys['v9111'],
	v1000000Kusama: kusamaCalls.setKeys['v1000000'],
}

export const purgeKeys = {
	name: 'Session.purge_keys',
	v1050Kusama: kusamaCalls.purgeKeys['v1050'],
}
