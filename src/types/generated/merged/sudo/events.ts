import * as kusamaEvents from '../../kusama/sudo/events'


export const sudid = {
	name: 'Sudo.Sudid',
	v1020Kusama: kusamaEvents.sudid['v1020'],
}

export const keyChanged = {
	name: 'Sudo.KeyChanged',
	v1020Kusama: kusamaEvents.keyChanged['v1020'],
}

export const sudoAsDone = {
	name: 'Sudo.SudoAsDone',
	v1020Kusama: kusamaEvents.sudoAsDone['v1020'],
}
