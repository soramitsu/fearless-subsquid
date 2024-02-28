import * as polkadotCalls from '../../polkadot/elections-phragmen/calls'


export const vote = {
	name: 'ElectionsPhragmen.vote',
	v0Polkadot: polkadotCalls.vote['v0'],
}

export const removeVoter = {
	name: 'ElectionsPhragmen.remove_voter',
	v0Polkadot: polkadotCalls.removeVoter['v0'],
}

export const reportDefunctVoter = {
	name: 'ElectionsPhragmen.report_defunct_voter',
	v0Polkadot: polkadotCalls.reportDefunctVoter['v0'],
}

export const submitCandidacy = {
	name: 'ElectionsPhragmen.submit_candidacy',
	v0Polkadot: polkadotCalls.submitCandidacy['v0'],
}

export const renounceCandidacy = {
	name: 'ElectionsPhragmen.renounce_candidacy',
	v0Polkadot: polkadotCalls.renounceCandidacy['v0'],
}

export const removeMember = {
	name: 'ElectionsPhragmen.remove_member',
	v0Polkadot: polkadotCalls.removeMember['v0'],
	v28Polkadot: polkadotCalls.removeMember['v28'],
}

export const cleanDefunctVoters = {
	name: 'ElectionsPhragmen.clean_defunct_voters',
	v28Polkadot: polkadotCalls.cleanDefunctVoters['v28'],
}
