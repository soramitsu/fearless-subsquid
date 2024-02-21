import * as kusamaCalls from '../../kusama/society/calls'


export const bid = {
	name: 'Society.bid',
	v1040Kusama: kusamaCalls.bid['v1040'],
}

export const unbid = {
	name: 'Society.unbid',
	v1040Kusama: kusamaCalls.unbid['v1040'],
	v1000000Kusama: kusamaCalls.unbid['v1000000'],
}

export const vouch = {
	name: 'Society.vouch',
	v1040Kusama: kusamaCalls.vouch['v1040'],
	v9291Kusama: kusamaCalls.vouch['v9291'],
}

export const unvouch = {
	name: 'Society.unvouch',
	v1040Kusama: kusamaCalls.unvouch['v1040'],
	v1000000Kusama: kusamaCalls.unvouch['v1000000'],
}

export const vote = {
	name: 'Society.vote',
	v1040Kusama: kusamaCalls.vote['v1040'],
	v1050Kusama: kusamaCalls.vote['v1050'],
	v2028Kusama: kusamaCalls.vote['v2028'],
	v9111Kusama: kusamaCalls.vote['v9111'],
}

export const defenderVote = {
	name: 'Society.defender_vote',
	v1040Kusama: kusamaCalls.defenderVote['v1040'],
}

export const payout = {
	name: 'Society.payout',
	v1040Kusama: kusamaCalls.payout['v1040'],
}

export const found = {
	name: 'Society.found',
	v1040Kusama: kusamaCalls.found['v1040'],
	v1042Kusama: kusamaCalls.found['v1042'],
	v9291Kusama: kusamaCalls.found['v9291'],
}

export const judgeSuspendedMember = {
	name: 'Society.judge_suspended_member',
	v1040Kusama: kusamaCalls.judgeSuspendedMember['v1040'],
	v9291Kusama: kusamaCalls.judgeSuspendedMember['v9291'],
}

export const judgeSuspendedCandidate = {
	name: 'Society.judge_suspended_candidate',
	v1040Kusama: kusamaCalls.judgeSuspendedCandidate['v1040'],
	v9291Kusama: kusamaCalls.judgeSuspendedCandidate['v9291'],
}

export const setMaxMembers = {
	name: 'Society.set_max_members',
	v1040Kusama: kusamaCalls.setMaxMembers['v1040'],
}

export const unfound = {
	name: 'Society.unfound',
	v1042Kusama: kusamaCalls.unfound['v1042'],
}

export const waiveRepay = {
	name: 'Society.waive_repay',
	v1000000Kusama: kusamaCalls.waiveRepay['v1000000'],
}

export const foundSociety = {
	name: 'Society.found_society',
	v1000000Kusama: kusamaCalls.foundSociety['v1000000'],
}

export const dissolve = {
	name: 'Society.dissolve',
	v1000000Kusama: kusamaCalls.dissolve['v1000000'],
}

export const setParameters = {
	name: 'Society.set_parameters',
	v1000000Kusama: kusamaCalls.setParameters['v1000000'],
}

export const punishSkeptic = {
	name: 'Society.punish_skeptic',
	v1000000Kusama: kusamaCalls.punishSkeptic['v1000000'],
}

export const claimMembership = {
	name: 'Society.claim_membership',
	v1000000Kusama: kusamaCalls.claimMembership['v1000000'],
}

export const bestowMembership = {
	name: 'Society.bestow_membership',
	v1000000Kusama: kusamaCalls.bestowMembership['v1000000'],
}

export const kickCandidate = {
	name: 'Society.kick_candidate',
	v1000000Kusama: kusamaCalls.kickCandidate['v1000000'],
}

export const resignCandidacy = {
	name: 'Society.resign_candidacy',
	v1000000Kusama: kusamaCalls.resignCandidacy['v1000000'],
}

export const dropCandidate = {
	name: 'Society.drop_candidate',
	v1000000Kusama: kusamaCalls.dropCandidate['v1000000'],
}

export const cleanupCandidacy = {
	name: 'Society.cleanup_candidacy',
	v1000000Kusama: kusamaCalls.cleanupCandidacy['v1000000'],
}

export const cleanupChallenge = {
	name: 'Society.cleanup_challenge',
	v1000000Kusama: kusamaCalls.cleanupChallenge['v1000000'],
}
