import * as kusamaStorage from '../../kusama/para-session-info/storage'


export const assignmentKeysUnsafe = {
	name: '',
	v9090Kusama: kusamaStorage.assignmentKeysUnsafe['v9090'],
}

export const earliestStoredSession = {
	name: '',
	v9090Kusama: kusamaStorage.earliestStoredSession['v9090'],
}

export const sessions = {
	name: '',
	v9090Kusama: kusamaStorage.sessions['v9090'],
	v9160Kusama: kusamaStorage.sessions['v9160'],
}

export const accountKeys = {
	name: '',
	v9230Kusama: kusamaStorage.accountKeys['v9230'],
}

export const sessionExecutorParams = {
	name: '',
	v9420Kusama: kusamaStorage.sessionExecutorParams['v9420'],
}
