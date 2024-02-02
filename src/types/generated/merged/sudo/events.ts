import * as soraPolkadotEvents from '../../sora-polkadot/sudo/events'
import * as soraKusamaEvents from '../../sora-kusama/sudo/events'


export const sudid = {
	name: 'Sudo.Sudid',
	soraPolkadotV1: soraPolkadotEvents.sudid['v1'],
	soraKusamaV1: soraKusamaEvents.sudid['v1'],
	soraKusamaV7: soraKusamaEvents.sudid['v7'],
}

export const keyChanged = {
	name: 'Sudo.KeyChanged',
	soraPolkadotV1: soraPolkadotEvents.keyChanged['v1'],
	soraKusamaV1: soraKusamaEvents.keyChanged['v1'],
	soraKusamaV7: soraKusamaEvents.keyChanged['v7'],
}

export const sudoAsDone = {
	name: 'Sudo.SudoAsDone',
	soraPolkadotV1: soraPolkadotEvents.sudoAsDone['v1'],
	soraKusamaV1: soraKusamaEvents.sudoAsDone['v1'],
	soraKusamaV7: soraKusamaEvents.sudoAsDone['v7'],
}
