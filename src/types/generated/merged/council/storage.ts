import * as soraPolkadotStorage from '../../sora-polkadot/council/storage'
import * as soraKusamaStorage from '../../sora-kusama/council/storage'


export const proposals = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.proposals['v10'],
	v7SoraKusama: soraKusamaStorage.proposals['v7'],
}

export const proposalOf = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.proposalOf['v10'],
	v7SoraKusama: soraKusamaStorage.proposalOf['v7'],
	v9SoraKusama: soraKusamaStorage.proposalOf['v9'],
}

export const voting = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.voting['v10'],
	v7SoraKusama: soraKusamaStorage.voting['v7'],
}

export const proposalCount = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.proposalCount['v10'],
	v7SoraKusama: soraKusamaStorage.proposalCount['v7'],
}

export const members = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.members['v10'],
	v7SoraKusama: soraKusamaStorage.members['v7'],
}

export const prime = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.prime['v10'],
	v7SoraKusama: soraKusamaStorage.prime['v7'],
}
