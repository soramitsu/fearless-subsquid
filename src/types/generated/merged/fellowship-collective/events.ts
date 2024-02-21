import * as kusamaEvents from '../../kusama/fellowship-collective/events'


export const memberAdded = {
	name: 'FellowshipCollective.MemberAdded',
	v9320Kusama: kusamaEvents.memberAdded['v9320'],
}

export const rankChanged = {
	name: 'FellowshipCollective.RankChanged',
	v9320Kusama: kusamaEvents.rankChanged['v9320'],
}

export const memberRemoved = {
	name: 'FellowshipCollective.MemberRemoved',
	v9320Kusama: kusamaEvents.memberRemoved['v9320'],
}

export const voted = {
	name: 'FellowshipCollective.Voted',
	v9320Kusama: kusamaEvents.voted['v9320'],
}
