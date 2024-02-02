import * as soraPolkadotCalls from '../../sora-polkadot/collator-selection/calls'
import * as soraKusamaCalls from '../../sora-kusama/collator-selection/calls'


export const setInvulnerables = {
	name: 'CollatorSelection.set_invulnerables',
	soraPolkadotV1: soraPolkadotCalls.setInvulnerables['v1'],
	soraKusamaV1: soraKusamaCalls.setInvulnerables['v1'],
}

export const setDesiredCandidates = {
	name: 'CollatorSelection.set_desired_candidates',
	soraPolkadotV1: soraPolkadotCalls.setDesiredCandidates['v1'],
	soraKusamaV1: soraKusamaCalls.setDesiredCandidates['v1'],
}

export const setCandidacyBond = {
	name: 'CollatorSelection.set_candidacy_bond',
	soraPolkadotV1: soraPolkadotCalls.setCandidacyBond['v1'],
	soraKusamaV1: soraKusamaCalls.setCandidacyBond['v1'],
}

export const registerAsCandidate = {
	name: 'CollatorSelection.register_as_candidate',
	soraPolkadotV1: soraPolkadotCalls.registerAsCandidate['v1'],
	soraKusamaV1: soraKusamaCalls.registerAsCandidate['v1'],
}

export const leaveIntent = {
	name: 'CollatorSelection.leave_intent',
	soraPolkadotV1: soraPolkadotCalls.leaveIntent['v1'],
	soraKusamaV1: soraKusamaCalls.leaveIntent['v1'],
}
