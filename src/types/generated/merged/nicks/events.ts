import * as kusamaEvents from '../../kusama/nicks/events'


export const nameSet = {
	name: 'Nicks.NameSet',
	v1020Kusama: kusamaEvents.nameSet['v1020'],
}

export const nameForced = {
	name: 'Nicks.NameForced',
	v1020Kusama: kusamaEvents.nameForced['v1020'],
}

export const nameChanged = {
	name: 'Nicks.NameChanged',
	v1020Kusama: kusamaEvents.nameChanged['v1020'],
}

export const nameCleared = {
	name: 'Nicks.NameCleared',
	v1020Kusama: kusamaEvents.nameCleared['v1020'],
}

export const nameKilled = {
	name: 'Nicks.NameKilled',
	v1020Kusama: kusamaEvents.nameKilled['v1020'],
}
