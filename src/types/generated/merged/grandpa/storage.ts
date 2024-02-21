import * as kusamaStorage from '../../kusama/grandpa/storage'


export const authorities = {
	name: '',
	v1020Kusama: kusamaStorage.authorities['v1020'],
}

export const state = {
	name: '',
	v1020Kusama: kusamaStorage.state['v1020'],
	v9111Kusama: kusamaStorage.state['v9111'],
}

export const pendingChange = {
	name: '',
	v1020Kusama: kusamaStorage.pendingChange['v1020'],
	v9111Kusama: kusamaStorage.pendingChange['v9111'],
}

export const nextForced = {
	name: '',
	v1020Kusama: kusamaStorage.nextForced['v1020'],
}

export const stalled = {
	name: '',
	v1020Kusama: kusamaStorage.stalled['v1020'],
}

export const currentSetId = {
	name: '',
	v1020Kusama: kusamaStorage.currentSetId['v1020'],
}

export const setIdSession = {
	name: '',
	v1020Kusama: kusamaStorage.setIdSession['v1020'],
}
