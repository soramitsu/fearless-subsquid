import * as kusamaCalls from '../../kusama/phragmen-election/calls'


export const vote = {
	name: 'PhragmenElection.vote',
	v9010Kusama: kusamaCalls.vote['v9010'],
}

export const removeVoter = {
	name: 'PhragmenElection.remove_voter',
	v9010Kusama: kusamaCalls.removeVoter['v9010'],
}

export const submitCandidacy = {
	name: 'PhragmenElection.submit_candidacy',
	v9010Kusama: kusamaCalls.submitCandidacy['v9010'],
}

export const renounceCandidacy = {
	name: 'PhragmenElection.renounce_candidacy',
	v9010Kusama: kusamaCalls.renounceCandidacy['v9010'],
}

export const removeMember = {
	name: 'PhragmenElection.remove_member',
	v9010Kusama: kusamaCalls.removeMember['v9010'],
	v9111Kusama: kusamaCalls.removeMember['v9111'],
	v9271Kusama: kusamaCalls.removeMember['v9271'],
}

export const cleanDefunctVoters = {
	name: 'PhragmenElection.clean_defunct_voters',
	v9010Kusama: kusamaCalls.cleanDefunctVoters['v9010'],
}
