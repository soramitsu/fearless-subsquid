import * as kusamaEvents from '../../kusama/claims/events'


export const claimed = {
	name: 'Claims.Claimed',
	v1020Kusama: kusamaEvents.claimed['v1020'],
	v9230Kusama: kusamaEvents.claimed['v9230'],
}
