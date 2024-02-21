import * as kusamaCalls from '../../kusama/bounties/calls'


export const proposeBounty = {
	name: 'Bounties.propose_bounty',
	v2028Kusama: kusamaCalls.proposeBounty['v2028'],
}

export const approveBounty = {
	name: 'Bounties.approve_bounty',
	v2028Kusama: kusamaCalls.approveBounty['v2028'],
}

export const proposeCurator = {
	name: 'Bounties.propose_curator',
	v2028Kusama: kusamaCalls.proposeCurator['v2028'],
	v9111Kusama: kusamaCalls.proposeCurator['v9111'],
}

export const unassignCurator = {
	name: 'Bounties.unassign_curator',
	v2028Kusama: kusamaCalls.unassignCurator['v2028'],
}

export const acceptCurator = {
	name: 'Bounties.accept_curator',
	v2028Kusama: kusamaCalls.acceptCurator['v2028'],
}

export const awardBounty = {
	name: 'Bounties.award_bounty',
	v2028Kusama: kusamaCalls.awardBounty['v2028'],
	v9111Kusama: kusamaCalls.awardBounty['v9111'],
}

export const claimBounty = {
	name: 'Bounties.claim_bounty',
	v2028Kusama: kusamaCalls.claimBounty['v2028'],
}

export const closeBounty = {
	name: 'Bounties.close_bounty',
	v2028Kusama: kusamaCalls.closeBounty['v2028'],
}

export const extendBountyExpiry = {
	name: 'Bounties.extend_bounty_expiry',
	v2028Kusama: kusamaCalls.extendBountyExpiry['v2028'],
}
