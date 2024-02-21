import * as kusamaStorage from '../../kusama/configuration/storage'


export const activeConfig = {
	name: '',
	v9090Kusama: kusamaStorage.activeConfig['v9090'],
	v9111Kusama: kusamaStorage.activeConfig['v9111'],
	v9160Kusama: kusamaStorage.activeConfig['v9160'],
	v9291Kusama: kusamaStorage.activeConfig['v9291'],
	v9320Kusama: kusamaStorage.activeConfig['v9320'],
	v9370Kusama: kusamaStorage.activeConfig['v9370'],
	v9420Kusama: kusamaStorage.activeConfig['v9420'],
	v9430Kusama: kusamaStorage.activeConfig['v9430'],
	v1000000Kusama: kusamaStorage.activeConfig['v1000000'],
}

export const pendingConfig = {
	name: '',
	v9090Kusama: kusamaStorage.pendingConfig['v9090'],
	v9111Kusama: kusamaStorage.pendingConfig['v9111'],
}

export const pendingConfigs = {
	name: '',
	v9160Kusama: kusamaStorage.pendingConfigs['v9160'],
	v9291Kusama: kusamaStorage.pendingConfigs['v9291'],
	v9320Kusama: kusamaStorage.pendingConfigs['v9320'],
	v9370Kusama: kusamaStorage.pendingConfigs['v9370'],
	v9420Kusama: kusamaStorage.pendingConfigs['v9420'],
	v9430Kusama: kusamaStorage.pendingConfigs['v9430'],
	v1000000Kusama: kusamaStorage.pendingConfigs['v1000000'],
}

export const bypassConsistencyCheck = {
	name: '',
	v9160Kusama: kusamaStorage.bypassConsistencyCheck['v9160'],
}
