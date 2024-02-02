import * as soraPolkadotStorage from '../../sora-polkadot/elections-phragmen/storage'
import * as soraKusamaStorage from '../../sora-kusama/elections-phragmen/storage'


export const members = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.members['v10'],
	soraKusamaV9: soraKusamaStorage.members['v9'],
}

export const runnersUp = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.runnersUp['v10'],
	soraKusamaV9: soraKusamaStorage.runnersUp['v9'],
}

export const candidates = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.candidates['v10'],
	soraKusamaV9: soraKusamaStorage.candidates['v9'],
}

export const electionRounds = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.electionRounds['v10'],
	soraKusamaV9: soraKusamaStorage.electionRounds['v9'],
}

export const voting = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.voting['v10'],
	soraKusamaV9: soraKusamaStorage.voting['v9'],
}
