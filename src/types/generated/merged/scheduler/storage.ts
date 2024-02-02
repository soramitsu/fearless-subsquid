import * as soraPolkadotStorage from '../../sora-polkadot/scheduler/storage'
import * as soraKusamaStorage from '../../sora-kusama/scheduler/storage'


export const incompleteSince = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.incompleteSince['v10'],
	soraKusamaV7: soraKusamaStorage.incompleteSince['v7'],
}

export const agenda = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.agenda['v10'],
	soraKusamaV7: soraKusamaStorage.agenda['v7'],
}

export const lookup = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.lookup['v10'],
	soraKusamaV7: soraKusamaStorage.lookup['v7'],
}
