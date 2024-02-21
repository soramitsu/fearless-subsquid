import * as kusamaStorage from '../../kusama/vesting/storage'


export const vesting = {
	name: '',
	v1050Kusama: kusamaStorage.vesting['v1050'],
	v9111Kusama: kusamaStorage.vesting['v9111'],
}

export const storageVersion = {
	name: '',
	v9111Kusama: kusamaStorage.storageVersion['v9111'],
}
