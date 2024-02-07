import * as soraPolkadotStorage from '../../sora-polkadot/scheduler/storage'
import * as soraKusamaStorage from '../../sora-kusama/scheduler/storage'


export const incompleteSince = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.incompleteSince['v10'],
	v7SoraKusama: soraKusamaStorage.incompleteSince['v7'],
}

export const agenda = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.agenda['v10'],
	v7SoraKusama: soraKusamaStorage.agenda['v7'],
}

export const lookup = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.lookup['v10'],
	v7SoraKusama: soraKusamaStorage.lookup['v7'],
}
