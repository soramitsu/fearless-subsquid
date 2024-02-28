import * as polkadotEvents from '../../polkadot/session/events'


export const newSession = {
	name: 'Session.NewSession',
	v0Polkadot: polkadotEvents.newSession['v0'],
	v9140Polkadot: polkadotEvents.newSession['v9140'],
}
