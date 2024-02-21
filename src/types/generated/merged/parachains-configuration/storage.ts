import * as kusamaStorage from '../../kusama/parachains-configuration/storage'


export const activeConfig = {
	name: '',
	v9010Kusama: kusamaStorage.activeConfig['v9010'],
}

export const pendingConfig = {
	name: '',
	v9010Kusama: kusamaStorage.pendingConfig['v9010'],
}
