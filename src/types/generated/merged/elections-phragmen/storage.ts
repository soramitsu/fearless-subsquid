import * as soraPolkadotStorage from '../../sora-polkadot/elections-phragmen/storage'
import * as soraKusamaStorage from '../../sora-kusama/elections-phragmen/storage'


export const members = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.members['v10'],
	v9SoraKusama: soraKusamaStorage.members['v9'],
}

export const runnersUp = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.runnersUp['v10'],
	v9SoraKusama: soraKusamaStorage.runnersUp['v9'],
}

export const candidates = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.candidates['v10'],
	v9SoraKusama: soraKusamaStorage.candidates['v9'],
}

export const electionRounds = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.electionRounds['v10'],
	v9SoraKusama: soraKusamaStorage.electionRounds['v9'],
}

export const voting = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.voting['v10'],
	v9SoraKusama: soraKusamaStorage.voting['v9'],
}
