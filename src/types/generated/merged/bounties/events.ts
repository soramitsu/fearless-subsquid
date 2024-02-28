import * as polkadotEvents from '../../polkadot/bounties/events'


export const bountyProposed = {
	name: 'Bounties.BountyProposed',
	v28Polkadot: polkadotEvents.bountyProposed['v28'],
	v9140Polkadot: polkadotEvents.bountyProposed['v9140'],
}

export const bountyRejected = {
	name: 'Bounties.BountyRejected',
	v28Polkadot: polkadotEvents.bountyRejected['v28'],
	v9140Polkadot: polkadotEvents.bountyRejected['v9140'],
}

export const bountyBecameActive = {
	name: 'Bounties.BountyBecameActive',
	v28Polkadot: polkadotEvents.bountyBecameActive['v28'],
	v9140Polkadot: polkadotEvents.bountyBecameActive['v9140'],
}

export const bountyAwarded = {
	name: 'Bounties.BountyAwarded',
	v28Polkadot: polkadotEvents.bountyAwarded['v28'],
	v9140Polkadot: polkadotEvents.bountyAwarded['v9140'],
}

export const bountyClaimed = {
	name: 'Bounties.BountyClaimed',
	v28Polkadot: polkadotEvents.bountyClaimed['v28'],
	v9140Polkadot: polkadotEvents.bountyClaimed['v9140'],
}

export const bountyCanceled = {
	name: 'Bounties.BountyCanceled',
	v28Polkadot: polkadotEvents.bountyCanceled['v28'],
	v9140Polkadot: polkadotEvents.bountyCanceled['v9140'],
}

export const bountyExtended = {
	name: 'Bounties.BountyExtended',
	v28Polkadot: polkadotEvents.bountyExtended['v28'],
	v9140Polkadot: polkadotEvents.bountyExtended['v9140'],
}

export const bountyApproved = {
	name: 'Bounties.BountyApproved',
	v1001002Polkadot: polkadotEvents.bountyApproved['v1001002'],
}

export const curatorProposed = {
	name: 'Bounties.CuratorProposed',
	v1001002Polkadot: polkadotEvents.curatorProposed['v1001002'],
}

export const curatorUnassigned = {
	name: 'Bounties.CuratorUnassigned',
	v1001002Polkadot: polkadotEvents.curatorUnassigned['v1001002'],
}

export const curatorAccepted = {
	name: 'Bounties.CuratorAccepted',
	v1001002Polkadot: polkadotEvents.curatorAccepted['v1001002'],
}
