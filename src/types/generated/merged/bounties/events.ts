import * as kusamaEvents from '../../kusama/bounties/events'


export const bountyProposed = {
	name: 'Bounties.BountyProposed',
	v2028Kusama: kusamaEvents.bountyProposed['v2028'],
	v9130Kusama: kusamaEvents.bountyProposed['v9130'],
}

export const bountyRejected = {
	name: 'Bounties.BountyRejected',
	v2028Kusama: kusamaEvents.bountyRejected['v2028'],
	v9130Kusama: kusamaEvents.bountyRejected['v9130'],
}

export const bountyBecameActive = {
	name: 'Bounties.BountyBecameActive',
	v2028Kusama: kusamaEvents.bountyBecameActive['v2028'],
	v9130Kusama: kusamaEvents.bountyBecameActive['v9130'],
}

export const bountyAwarded = {
	name: 'Bounties.BountyAwarded',
	v2028Kusama: kusamaEvents.bountyAwarded['v2028'],
	v9130Kusama: kusamaEvents.bountyAwarded['v9130'],
}

export const bountyClaimed = {
	name: 'Bounties.BountyClaimed',
	v2028Kusama: kusamaEvents.bountyClaimed['v2028'],
	v9130Kusama: kusamaEvents.bountyClaimed['v9130'],
}

export const bountyCanceled = {
	name: 'Bounties.BountyCanceled',
	v2028Kusama: kusamaEvents.bountyCanceled['v2028'],
	v9130Kusama: kusamaEvents.bountyCanceled['v9130'],
}

export const bountyExtended = {
	name: 'Bounties.BountyExtended',
	v2028Kusama: kusamaEvents.bountyExtended['v2028'],
	v9130Kusama: kusamaEvents.bountyExtended['v9130'],
}

export const bountyApproved = {
	name: 'Bounties.BountyApproved',
	v1001000Kusama: kusamaEvents.bountyApproved['v1001000'],
}

export const curatorProposed = {
	name: 'Bounties.CuratorProposed',
	v1001000Kusama: kusamaEvents.curatorProposed['v1001000'],
}

export const curatorUnassigned = {
	name: 'Bounties.CuratorUnassigned',
	v1001000Kusama: kusamaEvents.curatorUnassigned['v1001000'],
}

export const curatorAccepted = {
	name: 'Bounties.CuratorAccepted',
	v1001000Kusama: kusamaEvents.curatorAccepted['v1001000'],
}
