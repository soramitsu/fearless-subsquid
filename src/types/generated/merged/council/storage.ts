import * as soraPolkadotStorage from '../../sora-polkadot/council/storage'
import * as soraKusamaStorage from '../../sora-kusama/council/storage'


export const proposals = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.proposals['v10'],
	soraKusamaV7: soraKusamaStorage.proposals['v7'],
}

export const proposalOf = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.proposalOf['v10'],
	soraKusamaV7: soraKusamaStorage.proposalOf['v7'],
	soraKusamaV9: soraKusamaStorage.proposalOf['v9'],
}

export const voting = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.voting['v10'],
	soraKusamaV7: soraKusamaStorage.voting['v7'],
}

export const proposalCount = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.proposalCount['v10'],
	soraKusamaV7: soraKusamaStorage.proposalCount['v7'],
}

export const members = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.members['v10'],
	soraKusamaV7: soraKusamaStorage.members['v7'],
}

export const prime = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.prime['v10'],
	soraKusamaV7: soraKusamaStorage.prime['v7'],
}
