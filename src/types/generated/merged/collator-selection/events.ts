import * as soraPolkadotEvents from '../../sora-polkadot/collator-selection/events'
import * as soraKusamaEvents from '../../sora-kusama/collator-selection/events'


export const newInvulnerables = {
	name: 'CollatorSelection.NewInvulnerables',
	soraPolkadotV1: soraPolkadotEvents.newInvulnerables['v1'],
	soraKusamaV1: soraKusamaEvents.newInvulnerables['v1'],
	soraKusamaV7: soraKusamaEvents.newInvulnerables['v7'],
}

export const newDesiredCandidates = {
	name: 'CollatorSelection.NewDesiredCandidates',
	soraPolkadotV1: soraPolkadotEvents.newDesiredCandidates['v1'],
	soraKusamaV1: soraKusamaEvents.newDesiredCandidates['v1'],
	soraKusamaV7: soraKusamaEvents.newDesiredCandidates['v7'],
}

export const newCandidacyBond = {
	name: 'CollatorSelection.NewCandidacyBond',
	soraPolkadotV1: soraPolkadotEvents.newCandidacyBond['v1'],
	soraKusamaV1: soraKusamaEvents.newCandidacyBond['v1'],
	soraKusamaV7: soraKusamaEvents.newCandidacyBond['v7'],
}

export const candidateAdded = {
	name: 'CollatorSelection.CandidateAdded',
	soraPolkadotV1: soraPolkadotEvents.candidateAdded['v1'],
	soraKusamaV1: soraKusamaEvents.candidateAdded['v1'],
	soraKusamaV7: soraKusamaEvents.candidateAdded['v7'],
}

export const candidateRemoved = {
	name: 'CollatorSelection.CandidateRemoved',
	soraPolkadotV1: soraPolkadotEvents.candidateRemoved['v1'],
	soraKusamaV1: soraKusamaEvents.candidateRemoved['v1'],
	soraKusamaV7: soraKusamaEvents.candidateRemoved['v7'],
}
