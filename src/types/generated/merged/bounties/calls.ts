import * as polkadotCalls from '../../polkadot/bounties/calls'


export const proposeBounty = {
	name: 'Bounties.propose_bounty',
	v28Polkadot: polkadotCalls.proposeBounty['v28'],
}

export const approveBounty = {
	name: 'Bounties.approve_bounty',
	v28Polkadot: polkadotCalls.approveBounty['v28'],
}

export const proposeCurator = {
	name: 'Bounties.propose_curator',
	v28Polkadot: polkadotCalls.proposeCurator['v28'],
	v9110Polkadot: polkadotCalls.proposeCurator['v9110'],
}

export const unassignCurator = {
	name: 'Bounties.unassign_curator',
	v28Polkadot: polkadotCalls.unassignCurator['v28'],
}

export const acceptCurator = {
	name: 'Bounties.accept_curator',
	v28Polkadot: polkadotCalls.acceptCurator['v28'],
}

export const awardBounty = {
	name: 'Bounties.award_bounty',
	v28Polkadot: polkadotCalls.awardBounty['v28'],
	v9110Polkadot: polkadotCalls.awardBounty['v9110'],
}

export const claimBounty = {
	name: 'Bounties.claim_bounty',
	v28Polkadot: polkadotCalls.claimBounty['v28'],
}

export const closeBounty = {
	name: 'Bounties.close_bounty',
	v28Polkadot: polkadotCalls.closeBounty['v28'],
}

export const extendBountyExpiry = {
	name: 'Bounties.extend_bounty_expiry',
	v28Polkadot: polkadotCalls.extendBountyExpiry['v28'],
}
