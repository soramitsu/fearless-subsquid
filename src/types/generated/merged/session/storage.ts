import * as kusamaStorage from '../../kusama/session/storage'


export const validators = {
	name: '',
	v1020Kusama: kusamaStorage.validators['v1020'],
}

export const currentIndex = {
	name: '',
	v1020Kusama: kusamaStorage.currentIndex['v1020'],
}

export const queuedChanged = {
	name: '',
	v1020Kusama: kusamaStorage.queuedChanged['v1020'],
}

export const queuedKeys = {
	name: '',
	v1020Kusama: kusamaStorage.queuedKeys['v1020'],
	v2028Kusama: kusamaStorage.queuedKeys['v2028'],
	v9111Kusama: kusamaStorage.queuedKeys['v9111'],
	v1000000Kusama: kusamaStorage.queuedKeys['v1000000'],
}

export const disabledValidators = {
	name: '',
	v1020Kusama: kusamaStorage.disabledValidators['v1020'],
}

export const nextKeys = {
	name: '',
	v1020Kusama: kusamaStorage.nextKeys['v1020'],
	v1051Kusama: kusamaStorage.nextKeys['v1051'],
	v2028Kusama: kusamaStorage.nextKeys['v2028'],
	v9111Kusama: kusamaStorage.nextKeys['v9111'],
	v1000000Kusama: kusamaStorage.nextKeys['v1000000'],
}

export const keyOwner = {
	name: '',
	v1020Kusama: kusamaStorage.keyOwner['v1020'],
	v1051Kusama: kusamaStorage.keyOwner['v1051'],
	v9111Kusama: kusamaStorage.keyOwner['v9111'],
}
