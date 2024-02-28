import * as polkadotCalls from '../../polkadot/fast-unstake/calls'


export const registerFastUnstake = {
	name: 'FastUnstake.register_fast_unstake',
	v9300Polkadot: polkadotCalls.registerFastUnstake['v9300'],
}

export const deregister = {
	name: 'FastUnstake.deregister',
	v9300Polkadot: polkadotCalls.deregister['v9300'],
}

export const control = {
	name: 'FastUnstake.control',
	v9300Polkadot: polkadotCalls.control['v9300'],
	v9420Polkadot: polkadotCalls.control['v9420'],
}
