import * as soraPolkadotEvents from '../../sora-polkadot/sudo/events'
import * as soraKusamaEvents from '../../sora-kusama/sudo/events'


export const sudid = {
	name: 'Sudo.Sudid',
	v1SoraPolkadot: soraPolkadotEvents.sudid['v1'],
	v1SoraKusama: soraKusamaEvents.sudid['v1'],
	v7SoraKusama: soraKusamaEvents.sudid['v7'],
}

export const keyChanged = {
	name: 'Sudo.KeyChanged',
	v1SoraPolkadot: soraPolkadotEvents.keyChanged['v1'],
	v1SoraKusama: soraKusamaEvents.keyChanged['v1'],
	v7SoraKusama: soraKusamaEvents.keyChanged['v7'],
}

export const sudoAsDone = {
	name: 'Sudo.SudoAsDone',
	v1SoraPolkadot: soraPolkadotEvents.sudoAsDone['v1'],
	v1SoraKusama: soraKusamaEvents.sudoAsDone['v1'],
	v7SoraKusama: soraKusamaEvents.sudoAsDone['v7'],
}
