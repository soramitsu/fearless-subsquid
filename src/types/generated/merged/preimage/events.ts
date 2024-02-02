import * as soraPolkadotEvents from '../../sora-polkadot/preimage/events'
import * as soraKusamaEvents from '../../sora-kusama/preimage/events'


export const noted = {
	name: 'Preimage.Noted',
	soraPolkadotV10: soraPolkadotEvents.noted['v10'],
	soraKusamaV7: soraKusamaEvents.noted['v7'],
}

export const requested = {
	name: 'Preimage.Requested',
	soraPolkadotV10: soraPolkadotEvents.requested['v10'],
	soraKusamaV7: soraKusamaEvents.requested['v7'],
}

export const cleared = {
	name: 'Preimage.Cleared',
	soraPolkadotV10: soraPolkadotEvents.cleared['v10'],
	soraKusamaV7: soraKusamaEvents.cleared['v7'],
}
