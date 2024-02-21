import * as kusamaCalls from '../../kusama/treasury/calls'


export const proposeSpend = {
	name: 'Treasury.propose_spend',
	v1020Kusama: kusamaCalls.proposeSpend['v1020'],
	v1050Kusama: kusamaCalls.proposeSpend['v1050'],
	v2028Kusama: kusamaCalls.proposeSpend['v2028'],
	v9111Kusama: kusamaCalls.proposeSpend['v9111'],
}

export const rejectProposal = {
	name: 'Treasury.reject_proposal',
	v1020Kusama: kusamaCalls.rejectProposal['v1020'],
}

export const approveProposal = {
	name: 'Treasury.approve_proposal',
	v1020Kusama: kusamaCalls.approveProposal['v1020'],
}

export const reportAwesome = {
	name: 'Treasury.report_awesome',
	v1038Kusama: kusamaCalls.reportAwesome['v1038'],
}

export const retractTip = {
	name: 'Treasury.retract_tip',
	v1038Kusama: kusamaCalls.retractTip['v1038'],
}

export const tipNew = {
	name: 'Treasury.tip_new',
	v1038Kusama: kusamaCalls.tipNew['v1038'],
}

export const tip = {
	name: 'Treasury.tip',
	v1038Kusama: kusamaCalls.tip['v1038'],
}

export const closeTip = {
	name: 'Treasury.close_tip',
	v1038Kusama: kusamaCalls.closeTip['v1038'],
}

export const proposeBounty = {
	name: 'Treasury.propose_bounty',
	v2025Kusama: kusamaCalls.proposeBounty['v2025'],
}

export const approveBounty = {
	name: 'Treasury.approve_bounty',
	v2025Kusama: kusamaCalls.approveBounty['v2025'],
}

export const proposeCurator = {
	name: 'Treasury.propose_curator',
	v2025Kusama: kusamaCalls.proposeCurator['v2025'],
}

export const unassignCurator = {
	name: 'Treasury.unassign_curator',
	v2025Kusama: kusamaCalls.unassignCurator['v2025'],
}

export const acceptCurator = {
	name: 'Treasury.accept_curator',
	v2025Kusama: kusamaCalls.acceptCurator['v2025'],
}

export const awardBounty = {
	name: 'Treasury.award_bounty',
	v2025Kusama: kusamaCalls.awardBounty['v2025'],
}

export const claimBounty = {
	name: 'Treasury.claim_bounty',
	v2025Kusama: kusamaCalls.claimBounty['v2025'],
}

export const closeBounty = {
	name: 'Treasury.close_bounty',
	v2025Kusama: kusamaCalls.closeBounty['v2025'],
}

export const extendBountyExpiry = {
	name: 'Treasury.extend_bounty_expiry',
	v2025Kusama: kusamaCalls.extendBountyExpiry['v2025'],
}

export const removeApproval = {
	name: 'Treasury.remove_approval',
	v9220Kusama: kusamaCalls.removeApproval['v9220'],
}

export const spend = {
	name: 'Treasury.spend',
	v9250Kusama: kusamaCalls.spend['v9250'],
	v1001000Kusama: kusamaCalls.spend['v1001000'],
}

export const spendLocal = {
	name: 'Treasury.spend_local',
	v1001000Kusama: kusamaCalls.spendLocal['v1001000'],
}

export const payout = {
	name: 'Treasury.payout',
	v1001000Kusama: kusamaCalls.payout['v1001000'],
}

export const checkStatus = {
	name: 'Treasury.check_status',
	v1001000Kusama: kusamaCalls.checkStatus['v1001000'],
}

export const voidSpend = {
	name: 'Treasury.void_spend',
	v1001000Kusama: kusamaCalls.voidSpend['v1001000'],
}
