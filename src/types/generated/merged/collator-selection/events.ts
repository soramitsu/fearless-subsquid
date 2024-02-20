import * as soraPolkadotEvents from '../../sora-polkadot/collator-selection/events'
import * as soraKusamaEvents from '../../sora-kusama/collator-selection/events'


export const newInvulnerables = {
	name: 'CollatorSelection.NewInvulnerables',
	v1SoraPolkadot: soraPolkadotEvents.newInvulnerables['v1'],
	v1SoraKusama: soraKusamaEvents.newInvulnerables['v1'],
	v7SoraKusama: soraKusamaEvents.newInvulnerables['v7'],
}

export const newDesiredCandidates = {
	name: 'CollatorSelection.NewDesiredCandidates',
	v1SoraPolkadot: soraPolkadotEvents.newDesiredCandidates['v1'],
	v1SoraKusama: soraKusamaEvents.newDesiredCandidates['v1'],
	v7SoraKusama: soraKusamaEvents.newDesiredCandidates['v7'],
}

export const newCandidacyBond = {
	name: 'CollatorSelection.NewCandidacyBond',
	v1SoraPolkadot: soraPolkadotEvents.newCandidacyBond['v1'],
	v1SoraKusama: soraKusamaEvents.newCandidacyBond['v1'],
	v7SoraKusama: soraKusamaEvents.newCandidacyBond['v7'],
}

export const candidateAdded = {
	name: 'CollatorSelection.CandidateAdded',
	v1SoraPolkadot: soraPolkadotEvents.candidateAdded['v1'],
	v1SoraKusama: soraKusamaEvents.candidateAdded['v1'],
	v7SoraKusama: soraKusamaEvents.candidateAdded['v7'],
}

export const candidateRemoved = {
	name: 'CollatorSelection.CandidateRemoved',
	v1SoraPolkadot: soraPolkadotEvents.candidateRemoved['v1'],
	v1SoraKusama: soraKusamaEvents.candidateRemoved['v1'],
	v7SoraKusama: soraKusamaEvents.candidateRemoved['v7'],
}
