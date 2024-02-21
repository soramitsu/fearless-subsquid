import * as kusamaCalls from '../../kusama/elections-phragmen/calls'


export const vote = {
	name: 'ElectionsPhragmen.vote',
	v1020Kusama: kusamaCalls.vote['v1020'],
}

export const removeVoter = {
	name: 'ElectionsPhragmen.remove_voter',
	v1020Kusama: kusamaCalls.removeVoter['v1020'],
}

export const reportDefunctVoter = {
	name: 'ElectionsPhragmen.report_defunct_voter',
	v1020Kusama: kusamaCalls.reportDefunctVoter['v1020'],
	v1050Kusama: kusamaCalls.reportDefunctVoter['v1050'],
	v2005Kusama: kusamaCalls.reportDefunctVoter['v2005'],
}

export const submitCandidacy = {
	name: 'ElectionsPhragmen.submit_candidacy',
	v1020Kusama: kusamaCalls.submitCandidacy['v1020'],
	v2005Kusama: kusamaCalls.submitCandidacy['v2005'],
}

export const renounceCandidacy = {
	name: 'ElectionsPhragmen.renounce_candidacy',
	v1020Kusama: kusamaCalls.renounceCandidacy['v1020'],
	v2005Kusama: kusamaCalls.renounceCandidacy['v2005'],
}

export const removeMember = {
	name: 'ElectionsPhragmen.remove_member',
	v1020Kusama: kusamaCalls.removeMember['v1020'],
	v1050Kusama: kusamaCalls.removeMember['v1050'],
	v2005Kusama: kusamaCalls.removeMember['v2005'],
	v2028Kusama: kusamaCalls.removeMember['v2028'],
}

export const cleanDefunctVoters = {
	name: 'ElectionsPhragmen.clean_defunct_voters',
	v2028Kusama: kusamaCalls.cleanDefunctVoters['v2028'],
}
