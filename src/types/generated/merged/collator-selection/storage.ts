import * as soraPolkadotStorage from '../../sora-polkadot/collator-selection/storage'
import * as soraKusamaStorage from '../../sora-kusama/collator-selection/storage'


export const invulnerables = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.invulnerables['v1'],
	v1SoraKusama: soraKusamaStorage.invulnerables['v1'],
}

export const candidates = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.candidates['v1'],
	v1SoraKusama: soraKusamaStorage.candidates['v1'],
}

export const lastAuthoredBlock = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.lastAuthoredBlock['v1'],
	v1SoraKusama: soraKusamaStorage.lastAuthoredBlock['v1'],
}

export const desiredCandidates = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.desiredCandidates['v1'],
	v1SoraKusama: soraKusamaStorage.desiredCandidates['v1'],
}

export const candidacyBond = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.candidacyBond['v1'],
	v1SoraKusama: soraKusamaStorage.candidacyBond['v1'],
}
