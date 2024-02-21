import * as kusamaStorage from '../../kusama/ump/storage'


export const relayDispatchQueues = {
	name: '',
	v9090Kusama: kusamaStorage.relayDispatchQueues['v9090'],
}

export const relayDispatchQueueSize = {
	name: '',
	v9090Kusama: kusamaStorage.relayDispatchQueueSize['v9090'],
}

export const needsDispatch = {
	name: '',
	v9090Kusama: kusamaStorage.needsDispatch['v9090'],
}

export const nextDispatchRoundStartWith = {
	name: '',
	v9090Kusama: kusamaStorage.nextDispatchRoundStartWith['v9090'],
}

export const overweight = {
	name: '',
	v9100Kusama: kusamaStorage.overweight['v9100'],
}

export const overweightCount = {
	name: '',
	v9100Kusama: kusamaStorage.overweightCount['v9100'],
}

export const counterForOverweight = {
	name: '',
	v9381Kusama: kusamaStorage.counterForOverweight['v9381'],
}
