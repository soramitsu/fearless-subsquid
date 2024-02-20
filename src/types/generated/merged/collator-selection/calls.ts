import * as soraPolkadotCalls from '../../sora-polkadot/collator-selection/calls'
import * as soraKusamaCalls from '../../sora-kusama/collator-selection/calls'


export const setInvulnerables = {
	name: 'CollatorSelection.set_invulnerables',
	v1SoraPolkadot: soraPolkadotCalls.setInvulnerables['v1'],
	v1SoraKusama: soraKusamaCalls.setInvulnerables['v1'],
}

export const setDesiredCandidates = {
	name: 'CollatorSelection.set_desired_candidates',
	v1SoraPolkadot: soraPolkadotCalls.setDesiredCandidates['v1'],
	v1SoraKusama: soraKusamaCalls.setDesiredCandidates['v1'],
}

export const setCandidacyBond = {
	name: 'CollatorSelection.set_candidacy_bond',
	v1SoraPolkadot: soraPolkadotCalls.setCandidacyBond['v1'],
	v1SoraKusama: soraKusamaCalls.setCandidacyBond['v1'],
}

export const registerAsCandidate = {
	name: 'CollatorSelection.register_as_candidate',
	v1SoraPolkadot: soraPolkadotCalls.registerAsCandidate['v1'],
	v1SoraKusama: soraKusamaCalls.registerAsCandidate['v1'],
}

export const leaveIntent = {
	name: 'CollatorSelection.leave_intent',
	v1SoraPolkadot: soraPolkadotCalls.leaveIntent['v1'],
	v1SoraKusama: soraKusamaCalls.leaveIntent['v1'],
}
