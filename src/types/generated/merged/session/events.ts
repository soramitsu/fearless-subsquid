import * as kusamaEvents from '../../kusama/session/events'


export const newSession = {
	name: 'Session.NewSession',
	v1020Kusama: kusamaEvents.newSession['v1020'],
	v9130Kusama: kusamaEvents.newSession['v9130'],
}
