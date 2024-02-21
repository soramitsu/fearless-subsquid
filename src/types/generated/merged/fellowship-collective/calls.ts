import * as kusamaCalls from '../../kusama/fellowship-collective/calls'


export const addMember = {
	name: 'FellowshipCollective.add_member',
	v9320Kusama: kusamaCalls.addMember['v9320'],
}

export const promoteMember = {
	name: 'FellowshipCollective.promote_member',
	v9320Kusama: kusamaCalls.promoteMember['v9320'],
}

export const demoteMember = {
	name: 'FellowshipCollective.demote_member',
	v9320Kusama: kusamaCalls.demoteMember['v9320'],
}

export const removeMember = {
	name: 'FellowshipCollective.remove_member',
	v9320Kusama: kusamaCalls.removeMember['v9320'],
}

export const vote = {
	name: 'FellowshipCollective.vote',
	v9320Kusama: kusamaCalls.vote['v9320'],
}

export const cleanupPoll = {
	name: 'FellowshipCollective.cleanup_poll',
	v9320Kusama: kusamaCalls.cleanupPoll['v9320'],
}
