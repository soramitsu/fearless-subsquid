import * as kusamaEvents from '../../kusama/technical-membership/events'


export const memberAdded = {
	name: 'TechnicalMembership.MemberAdded',
	v1020Kusama: kusamaEvents.memberAdded['v1020'],
}

export const memberRemoved = {
	name: 'TechnicalMembership.MemberRemoved',
	v1020Kusama: kusamaEvents.memberRemoved['v1020'],
}

export const membersSwapped = {
	name: 'TechnicalMembership.MembersSwapped',
	v1020Kusama: kusamaEvents.membersSwapped['v1020'],
}

export const membersReset = {
	name: 'TechnicalMembership.MembersReset',
	v1020Kusama: kusamaEvents.membersReset['v1020'],
}

export const dummy = {
	name: 'TechnicalMembership.Dummy',
	v1020Kusama: kusamaEvents.dummy['v1020'],
}

export const keyChanged = {
	name: 'TechnicalMembership.KeyChanged',
	v1029Kusama: kusamaEvents.keyChanged['v1029'],
}
