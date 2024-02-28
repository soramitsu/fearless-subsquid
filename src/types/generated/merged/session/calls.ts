import * as polkadotCalls from '../../polkadot/session/calls'


export const setKeys = {
	name: 'Session.set_keys',
	v0Polkadot: polkadotCalls.setKeys['v0'],
	v28Polkadot: polkadotCalls.setKeys['v28'],
	v9110Polkadot: polkadotCalls.setKeys['v9110'],
	v1001002Polkadot: polkadotCalls.setKeys['v1001002'],
}

export const purgeKeys = {
	name: 'Session.purge_keys',
	v0Polkadot: polkadotCalls.purgeKeys['v0'],
}
