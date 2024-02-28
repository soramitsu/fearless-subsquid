import * as polkadotCalls from '../../polkadot/phragmen-election/calls'


export const vote = {
	name: 'PhragmenElection.vote',
	v9050Polkadot: polkadotCalls.vote['v9050'],
}

export const removeVoter = {
	name: 'PhragmenElection.remove_voter',
	v9050Polkadot: polkadotCalls.removeVoter['v9050'],
}

export const submitCandidacy = {
	name: 'PhragmenElection.submit_candidacy',
	v9050Polkadot: polkadotCalls.submitCandidacy['v9050'],
}

export const renounceCandidacy = {
	name: 'PhragmenElection.renounce_candidacy',
	v9050Polkadot: polkadotCalls.renounceCandidacy['v9050'],
}

export const removeMember = {
	name: 'PhragmenElection.remove_member',
	v9050Polkadot: polkadotCalls.removeMember['v9050'],
	v9110Polkadot: polkadotCalls.removeMember['v9110'],
	v9270Polkadot: polkadotCalls.removeMember['v9270'],
}

export const cleanDefunctVoters = {
	name: 'PhragmenElection.clean_defunct_voters',
	v9050Polkadot: polkadotCalls.cleanDefunctVoters['v9050'],
}
