import * as kusamaStorage from '../../kusama/authorship/storage'


export const uncles = {
	name: '',
	v1020Kusama: kusamaStorage.uncles['v1020'],
	v9111Kusama: kusamaStorage.uncles['v9111'],
}

export const author = {
	name: '',
	v1020Kusama: kusamaStorage.author['v1020'],
}

export const didSetUncles = {
	name: '',
	v1020Kusama: kusamaStorage.didSetUncles['v1020'],
}
