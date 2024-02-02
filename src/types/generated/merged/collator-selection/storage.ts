import * as soraPolkadotStorage from '../../sora-polkadot/collator-selection/storage'
import * as soraKusamaStorage from '../../sora-kusama/collator-selection/storage'


export const invulnerables = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.invulnerables['v1'],
	soraKusamaV1: soraKusamaStorage.invulnerables['v1'],
}

export const candidates = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.candidates['v1'],
	soraKusamaV1: soraKusamaStorage.candidates['v1'],
}

export const lastAuthoredBlock = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.lastAuthoredBlock['v1'],
	soraKusamaV1: soraKusamaStorage.lastAuthoredBlock['v1'],
}

export const desiredCandidates = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.desiredCandidates['v1'],
	soraKusamaV1: soraKusamaStorage.desiredCandidates['v1'],
}

export const candidacyBond = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.candidacyBond['v1'],
	soraKusamaV1: soraKusamaStorage.candidacyBond['v1'],
}
