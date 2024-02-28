import * as polkadotCalls from '../../polkadot/treasury/calls'


export const proposeSpend = {
	name: 'Treasury.propose_spend',
	v0Polkadot: polkadotCalls.proposeSpend['v0'],
	v28Polkadot: polkadotCalls.proposeSpend['v28'],
	v9110Polkadot: polkadotCalls.proposeSpend['v9110'],
}

export const rejectProposal = {
	name: 'Treasury.reject_proposal',
	v0Polkadot: polkadotCalls.rejectProposal['v0'],
}

export const approveProposal = {
	name: 'Treasury.approve_proposal',
	v0Polkadot: polkadotCalls.approveProposal['v0'],
}

export const reportAwesome = {
	name: 'Treasury.report_awesome',
	v0Polkadot: polkadotCalls.reportAwesome['v0'],
}

export const retractTip = {
	name: 'Treasury.retract_tip',
	v0Polkadot: polkadotCalls.retractTip['v0'],
}

export const tipNew = {
	name: 'Treasury.tip_new',
	v0Polkadot: polkadotCalls.tipNew['v0'],
}

export const tip = {
	name: 'Treasury.tip',
	v0Polkadot: polkadotCalls.tip['v0'],
}

export const closeTip = {
	name: 'Treasury.close_tip',
	v0Polkadot: polkadotCalls.closeTip['v0'],
}

export const proposeBounty = {
	name: 'Treasury.propose_bounty',
	v25Polkadot: polkadotCalls.proposeBounty['v25'],
}

export const approveBounty = {
	name: 'Treasury.approve_bounty',
	v25Polkadot: polkadotCalls.approveBounty['v25'],
}

export const proposeCurator = {
	name: 'Treasury.propose_curator',
	v25Polkadot: polkadotCalls.proposeCurator['v25'],
}

export const unassignCurator = {
	name: 'Treasury.unassign_curator',
	v25Polkadot: polkadotCalls.unassignCurator['v25'],
}

export const acceptCurator = {
	name: 'Treasury.accept_curator',
	v25Polkadot: polkadotCalls.acceptCurator['v25'],
}

export const awardBounty = {
	name: 'Treasury.award_bounty',
	v25Polkadot: polkadotCalls.awardBounty['v25'],
}

export const claimBounty = {
	name: 'Treasury.claim_bounty',
	v25Polkadot: polkadotCalls.claimBounty['v25'],
}

export const closeBounty = {
	name: 'Treasury.close_bounty',
	v25Polkadot: polkadotCalls.closeBounty['v25'],
}

export const extendBountyExpiry = {
	name: 'Treasury.extend_bounty_expiry',
	v25Polkadot: polkadotCalls.extendBountyExpiry['v25'],
}

export const removeApproval = {
	name: 'Treasury.remove_approval',
	v9220Polkadot: polkadotCalls.removeApproval['v9220'],
}

export const spend = {
	name: 'Treasury.spend',
	v9250Polkadot: polkadotCalls.spend['v9250'],
	v1001002Polkadot: polkadotCalls.spend['v1001002'],
}

export const spendLocal = {
	name: 'Treasury.spend_local',
	v1001002Polkadot: polkadotCalls.spendLocal['v1001002'],
}

export const payout = {
	name: 'Treasury.payout',
	v1001002Polkadot: polkadotCalls.payout['v1001002'],
}

export const checkStatus = {
	name: 'Treasury.check_status',
	v1001002Polkadot: polkadotCalls.checkStatus['v1001002'],
}

export const voidSpend = {
	name: 'Treasury.void_spend',
	v1001002Polkadot: polkadotCalls.voidSpend['v1001002'],
}
