import * as soraPolkadotEvents from '../../sora-polkadot/preimage/events'
import * as soraKusamaEvents from '../../sora-kusama/preimage/events'


export const noted = {
	name: 'Preimage.Noted',
	v10SoraPolkadot: soraPolkadotEvents.noted['v10'],
	v7SoraKusama: soraKusamaEvents.noted['v7'],
}

export const requested = {
	name: 'Preimage.Requested',
	v10SoraPolkadot: soraPolkadotEvents.requested['v10'],
	v7SoraKusama: soraKusamaEvents.requested['v7'],
}

export const cleared = {
	name: 'Preimage.Cleared',
	v10SoraPolkadot: soraPolkadotEvents.cleared['v10'],
	v7SoraKusama: soraKusamaEvents.cleared['v7'],
}
