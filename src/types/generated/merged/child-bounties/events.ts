import * as kusamaEvents from '../../kusama/child-bounties/events'


export const added = {
	name: 'ChildBounties.Added',
	v9190Kusama: kusamaEvents.added['v9190'],
}

export const awarded = {
	name: 'ChildBounties.Awarded',
	v9190Kusama: kusamaEvents.awarded['v9190'],
}

export const claimed = {
	name: 'ChildBounties.Claimed',
	v9190Kusama: kusamaEvents.claimed['v9190'],
}

export const canceled = {
	name: 'ChildBounties.Canceled',
	v9190Kusama: kusamaEvents.canceled['v9190'],
}
