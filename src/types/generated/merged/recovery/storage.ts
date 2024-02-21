import * as kusamaStorage from '../../kusama/recovery/storage'


export const recoverable = {
	name: '',
	v1040Kusama: kusamaStorage.recoverable['v1040'],
}

export const activeRecoveries = {
	name: '',
	v1040Kusama: kusamaStorage.activeRecoveries['v1040'],
}

export const recovered = {
	name: '',
	v1040Kusama: kusamaStorage.recovered['v1040'],
}

export const proxy = {
	name: '',
	v1050Kusama: kusamaStorage.proxy['v1050'],
}
