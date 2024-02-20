import * as soraPolkadotEvents from '../../sora-polkadot/session/events'
import * as soraKusamaEvents from '../../sora-kusama/session/events'


export const newSession = {
	name: 'Session.NewSession',
	v1SoraPolkadot: soraPolkadotEvents.newSession['v1'],
	v1SoraKusama: soraKusamaEvents.newSession['v1'],
}
