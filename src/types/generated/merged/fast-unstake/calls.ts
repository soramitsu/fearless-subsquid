import * as kusamaCalls from '../../kusama/fast-unstake/calls'


export const registerFastUnstake = {
	name: 'FastUnstake.register_fast_unstake',
	v9300Kusama: kusamaCalls.registerFastUnstake['v9300'],
}

export const deregister = {
	name: 'FastUnstake.deregister',
	v9300Kusama: kusamaCalls.deregister['v9300'],
}

export const control = {
	name: 'FastUnstake.control',
	v9300Kusama: kusamaCalls.control['v9300'],
	v9381Kusama: kusamaCalls.control['v9381'],
}
