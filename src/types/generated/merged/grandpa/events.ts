import * as kusamaEvents from '../../kusama/grandpa/events'


export const newAuthorities = {
	name: 'Grandpa.NewAuthorities',
	v1020Kusama: kusamaEvents.newAuthorities['v1020'],
	v9130Kusama: kusamaEvents.newAuthorities['v9130'],
}

export const paused = {
	name: 'Grandpa.Paused',
	v1020Kusama: kusamaEvents.paused['v1020'],
}

export const resumed = {
	name: 'Grandpa.Resumed',
	v1020Kusama: kusamaEvents.resumed['v1020'],
}
