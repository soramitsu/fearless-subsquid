import * as kusamaEvents from '../../kusama/council/events'


export const proposed = {
	name: 'Council.Proposed',
	v1020Kusama: kusamaEvents.proposed['v1020'],
	v9130Kusama: kusamaEvents.proposed['v9130'],
}

export const voted = {
	name: 'Council.Voted',
	v1020Kusama: kusamaEvents.voted['v1020'],
	v9130Kusama: kusamaEvents.voted['v9130'],
}

export const approved = {
	name: 'Council.Approved',
	v1020Kusama: kusamaEvents.approved['v1020'],
	v9130Kusama: kusamaEvents.approved['v9130'],
}

export const disapproved = {
	name: 'Council.Disapproved',
	v1020Kusama: kusamaEvents.disapproved['v1020'],
	v9130Kusama: kusamaEvents.disapproved['v9130'],
}

export const executed = {
	name: 'Council.Executed',
	v1020Kusama: kusamaEvents.executed['v1020'],
	v2005Kusama: kusamaEvents.executed['v2005'],
	v9111Kusama: kusamaEvents.executed['v9111'],
	v9130Kusama: kusamaEvents.executed['v9130'],
	v9160Kusama: kusamaEvents.executed['v9160'],
	v9170Kusama: kusamaEvents.executed['v9170'],
	v9190Kusama: kusamaEvents.executed['v9190'],
	v9320Kusama: kusamaEvents.executed['v9320'],
}

export const memberExecuted = {
	name: 'Council.MemberExecuted',
	v1020Kusama: kusamaEvents.memberExecuted['v1020'],
	v2005Kusama: kusamaEvents.memberExecuted['v2005'],
	v9111Kusama: kusamaEvents.memberExecuted['v9111'],
	v9130Kusama: kusamaEvents.memberExecuted['v9130'],
	v9160Kusama: kusamaEvents.memberExecuted['v9160'],
	v9170Kusama: kusamaEvents.memberExecuted['v9170'],
	v9190Kusama: kusamaEvents.memberExecuted['v9190'],
	v9320Kusama: kusamaEvents.memberExecuted['v9320'],
}

export const closed = {
	name: 'Council.Closed',
	v1050Kusama: kusamaEvents.closed['v1050'],
	v9130Kusama: kusamaEvents.closed['v9130'],
}
