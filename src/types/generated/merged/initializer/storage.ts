import * as kusamaStorage from '../../kusama/initializer/storage'


export const hasInitialized = {
	name: '',
	v9090Kusama: kusamaStorage.hasInitialized['v9090'],
}

export const bufferedSessionChanges = {
	name: '',
	v9090Kusama: kusamaStorage.bufferedSessionChanges['v9090'],
	v9111Kusama: kusamaStorage.bufferedSessionChanges['v9111'],
}
