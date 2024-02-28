import * as polkadotCalls from '../../polkadot/child-bounties/calls'


export const addChildBounty = {
	name: 'ChildBounties.add_child_bounty',
	v9190Polkadot: polkadotCalls.addChildBounty['v9190'],
}

export const proposeCurator = {
	name: 'ChildBounties.propose_curator',
	v9190Polkadot: polkadotCalls.proposeCurator['v9190'],
}

export const acceptCurator = {
	name: 'ChildBounties.accept_curator',
	v9190Polkadot: polkadotCalls.acceptCurator['v9190'],
}

export const unassignCurator = {
	name: 'ChildBounties.unassign_curator',
	v9190Polkadot: polkadotCalls.unassignCurator['v9190'],
}

export const awardChildBounty = {
	name: 'ChildBounties.award_child_bounty',
	v9190Polkadot: polkadotCalls.awardChildBounty['v9190'],
}

export const claimChildBounty = {
	name: 'ChildBounties.claim_child_bounty',
	v9190Polkadot: polkadotCalls.claimChildBounty['v9190'],
}

export const closeChildBounty = {
	name: 'ChildBounties.close_child_bounty',
	v9190Polkadot: polkadotCalls.closeChildBounty['v9190'],
}
