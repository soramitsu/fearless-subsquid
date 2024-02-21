import * as kusamaStorage from '../../kusama/para-scheduler/storage'


export const validatorGroups = {
	name: '',
	v9090Kusama: kusamaStorage.validatorGroups['v9090'],
}

export const parathreadQueue = {
	name: '',
	v9090Kusama: kusamaStorage.parathreadQueue['v9090'],
}

export const availabilityCores = {
	name: '',
	v9090Kusama: kusamaStorage.availabilityCores['v9090'],
	v1000000Kusama: kusamaStorage.availabilityCores['v1000000'],
}

export const parathreadClaimIndex = {
	name: '',
	v9090Kusama: kusamaStorage.parathreadClaimIndex['v9090'],
}

export const sessionStartBlock = {
	name: '',
	v9090Kusama: kusamaStorage.sessionStartBlock['v9090'],
}

export const scheduled = {
	name: '',
	v9090Kusama: kusamaStorage.scheduled['v9090'],
	v9111Kusama: kusamaStorage.scheduled['v9111'],
}

export const claimQueue = {
	name: '',
	v1000000Kusama: kusamaStorage.claimQueue['v1000000'],
}
