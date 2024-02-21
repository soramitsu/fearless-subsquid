import * as kusamaCalls from '../../kusama/technical-membership/calls'


export const addMember = {
	name: 'TechnicalMembership.add_member',
	v1020Kusama: kusamaCalls.addMember['v1020'],
	v9291Kusama: kusamaCalls.addMember['v9291'],
}

export const removeMember = {
	name: 'TechnicalMembership.remove_member',
	v1020Kusama: kusamaCalls.removeMember['v1020'],
	v9291Kusama: kusamaCalls.removeMember['v9291'],
}

export const swapMember = {
	name: 'TechnicalMembership.swap_member',
	v1020Kusama: kusamaCalls.swapMember['v1020'],
	v9291Kusama: kusamaCalls.swapMember['v9291'],
}

export const resetMembers = {
	name: 'TechnicalMembership.reset_members',
	v1020Kusama: kusamaCalls.resetMembers['v1020'],
}

export const changeKey = {
	name: 'TechnicalMembership.change_key',
	v1029Kusama: kusamaCalls.changeKey['v1029'],
	v9291Kusama: kusamaCalls.changeKey['v9291'],
}

export const setPrime = {
	name: 'TechnicalMembership.set_prime',
	v1050Kusama: kusamaCalls.setPrime['v1050'],
	v9291Kusama: kusamaCalls.setPrime['v9291'],
}

export const clearPrime = {
	name: 'TechnicalMembership.clear_prime',
	v1050Kusama: kusamaCalls.clearPrime['v1050'],
}
