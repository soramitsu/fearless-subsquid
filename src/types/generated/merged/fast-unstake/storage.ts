import * as kusamaStorage from '../../kusama/fast-unstake/storage'


export const head = {
	name: '',
	v9300Kusama: kusamaStorage.head['v9300'],
	v9340Kusama: kusamaStorage.head['v9340'],
}

export const queue = {
	name: '',
	v9300Kusama: kusamaStorage.queue['v9300'],
}

export const counterForQueue = {
	name: '',
	v9300Kusama: kusamaStorage.counterForQueue['v9300'],
}

export const erasToCheckPerBlock = {
	name: '',
	v9300Kusama: kusamaStorage.erasToCheckPerBlock['v9300'],
}
