import * as kusamaCalls from '../../kusama/nicks/calls'


export const setName = {
	name: 'Nicks.set_name',
	v1020Kusama: kusamaCalls.setName['v1020'],
}

export const clearName = {
	name: 'Nicks.clear_name',
	v1020Kusama: kusamaCalls.clearName['v1020'],
}

export const killName = {
	name: 'Nicks.kill_name',
	v1020Kusama: kusamaCalls.killName['v1020'],
}

export const forceName = {
	name: 'Nicks.force_name',
	v1020Kusama: kusamaCalls.forceName['v1020'],
}
