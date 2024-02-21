import * as kusamaCalls from '../../kusama/child-bounties/calls'


export const addChildBounty = {
	name: 'ChildBounties.add_child_bounty',
	v9190Kusama: kusamaCalls.addChildBounty['v9190'],
}

export const proposeCurator = {
	name: 'ChildBounties.propose_curator',
	v9190Kusama: kusamaCalls.proposeCurator['v9190'],
}

export const acceptCurator = {
	name: 'ChildBounties.accept_curator',
	v9190Kusama: kusamaCalls.acceptCurator['v9190'],
}

export const unassignCurator = {
	name: 'ChildBounties.unassign_curator',
	v9190Kusama: kusamaCalls.unassignCurator['v9190'],
}

export const awardChildBounty = {
	name: 'ChildBounties.award_child_bounty',
	v9190Kusama: kusamaCalls.awardChildBounty['v9190'],
}

export const claimChildBounty = {
	name: 'ChildBounties.claim_child_bounty',
	v9190Kusama: kusamaCalls.claimChildBounty['v9190'],
}

export const closeChildBounty = {
	name: 'ChildBounties.close_child_bounty',
	v9190Kusama: kusamaCalls.closeChildBounty['v9190'],
}
