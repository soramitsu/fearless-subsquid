import * as soraPolkadotCalls from '../../sora-polkadot/elections-phragmen/calls'
import * as soraKusamaCalls from '../../sora-kusama/elections-phragmen/calls'


export const vote = {
	name: 'ElectionsPhragmen.vote',
	soraPolkadotV10: soraPolkadotCalls.vote['v10'],
	soraKusamaV9: soraKusamaCalls.vote['v9'],
}

export const removeVoter = {
	name: 'ElectionsPhragmen.remove_voter',
	soraPolkadotV10: soraPolkadotCalls.removeVoter['v10'],
	soraKusamaV9: soraKusamaCalls.removeVoter['v9'],
}

export const submitCandidacy = {
	name: 'ElectionsPhragmen.submit_candidacy',
	soraPolkadotV10: soraPolkadotCalls.submitCandidacy['v10'],
	soraKusamaV9: soraKusamaCalls.submitCandidacy['v9'],
}

export const renounceCandidacy = {
	name: 'ElectionsPhragmen.renounce_candidacy',
	soraPolkadotV10: soraPolkadotCalls.renounceCandidacy['v10'],
	soraKusamaV9: soraKusamaCalls.renounceCandidacy['v9'],
}

export const removeMember = {
	name: 'ElectionsPhragmen.remove_member',
	soraPolkadotV10: soraPolkadotCalls.removeMember['v10'],
	soraKusamaV9: soraKusamaCalls.removeMember['v9'],
}

export const cleanDefunctVoters = {
	name: 'ElectionsPhragmen.clean_defunct_voters',
	soraPolkadotV10: soraPolkadotCalls.cleanDefunctVoters['v10'],
	soraKusamaV9: soraKusamaCalls.cleanDefunctVoters['v9'],
}
