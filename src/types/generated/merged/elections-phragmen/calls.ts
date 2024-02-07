import * as soraPolkadotCalls from '../../sora-polkadot/elections-phragmen/calls'
import * as soraKusamaCalls from '../../sora-kusama/elections-phragmen/calls'


export const vote = {
	name: 'ElectionsPhragmen.vote',
	v10SoraPolkadot: soraPolkadotCalls.vote['v10'],
	v9SoraKusama: soraKusamaCalls.vote['v9'],
}

export const removeVoter = {
	name: 'ElectionsPhragmen.remove_voter',
	v10SoraPolkadot: soraPolkadotCalls.removeVoter['v10'],
	v9SoraKusama: soraKusamaCalls.removeVoter['v9'],
}

export const submitCandidacy = {
	name: 'ElectionsPhragmen.submit_candidacy',
	v10SoraPolkadot: soraPolkadotCalls.submitCandidacy['v10'],
	v9SoraKusama: soraKusamaCalls.submitCandidacy['v9'],
}

export const renounceCandidacy = {
	name: 'ElectionsPhragmen.renounce_candidacy',
	v10SoraPolkadot: soraPolkadotCalls.renounceCandidacy['v10'],
	v9SoraKusama: soraKusamaCalls.renounceCandidacy['v9'],
}

export const removeMember = {
	name: 'ElectionsPhragmen.remove_member',
	v10SoraPolkadot: soraPolkadotCalls.removeMember['v10'],
	v9SoraKusama: soraKusamaCalls.removeMember['v9'],
}

export const cleanDefunctVoters = {
	name: 'ElectionsPhragmen.clean_defunct_voters',
	v10SoraPolkadot: soraPolkadotCalls.cleanDefunctVoters['v10'],
	v9SoraKusama: soraKusamaCalls.cleanDefunctVoters['v9'],
}
