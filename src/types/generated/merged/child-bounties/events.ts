import * as polkadotEvents from '../../polkadot/child-bounties/events'


export const added = {
	name: 'ChildBounties.Added',
	v9190Polkadot: polkadotEvents.added['v9190'],
}

export const awarded = {
	name: 'ChildBounties.Awarded',
	v9190Polkadot: polkadotEvents.awarded['v9190'],
}

export const claimed = {
	name: 'ChildBounties.Claimed',
	v9190Polkadot: polkadotEvents.claimed['v9190'],
}

export const canceled = {
	name: 'ChildBounties.Canceled',
	v9190Polkadot: polkadotEvents.canceled['v9190'],
}
