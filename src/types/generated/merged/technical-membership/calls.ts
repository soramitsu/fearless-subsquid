import * as polkadotCalls from '../../polkadot/technical-membership/calls'


export const addMember = {
	name: 'TechnicalMembership.add_member',
	v0Polkadot: polkadotCalls.addMember['v0'],
	v9291Polkadot: polkadotCalls.addMember['v9291'],
}

export const removeMember = {
	name: 'TechnicalMembership.remove_member',
	v0Polkadot: polkadotCalls.removeMember['v0'],
	v9291Polkadot: polkadotCalls.removeMember['v9291'],
}

export const swapMember = {
	name: 'TechnicalMembership.swap_member',
	v0Polkadot: polkadotCalls.swapMember['v0'],
	v9291Polkadot: polkadotCalls.swapMember['v9291'],
}

export const resetMembers = {
	name: 'TechnicalMembership.reset_members',
	v0Polkadot: polkadotCalls.resetMembers['v0'],
}

export const changeKey = {
	name: 'TechnicalMembership.change_key',
	v0Polkadot: polkadotCalls.changeKey['v0'],
	v9291Polkadot: polkadotCalls.changeKey['v9291'],
}

export const setPrime = {
	name: 'TechnicalMembership.set_prime',
	v0Polkadot: polkadotCalls.setPrime['v0'],
	v9291Polkadot: polkadotCalls.setPrime['v9291'],
}

export const clearPrime = {
	name: 'TechnicalMembership.clear_prime',
	v0Polkadot: polkadotCalls.clearPrime['v0'],
}
