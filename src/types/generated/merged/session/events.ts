import * as soraPolkadotEvents from '../../sora-polkadot/session/events'
import * as soraKusamaEvents from '../../sora-kusama/session/events'


export const newSession = {
	name: 'Session.NewSession',
	soraPolkadotV1: soraPolkadotEvents.newSession['v1'],
	soraKusamaV1: soraKusamaEvents.newSession['v1'],
}
