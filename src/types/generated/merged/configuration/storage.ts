import * as polkadotStorage from '../../polkadot/configuration/storage'


export const activeConfig = {
	name: '',
	v9110Polkadot: polkadotStorage.activeConfig['v9110'],
	v9170Polkadot: polkadotStorage.activeConfig['v9170'],
	v9291Polkadot: polkadotStorage.activeConfig['v9291'],
	v9340Polkadot: polkadotStorage.activeConfig['v9340'],
	v9370Polkadot: polkadotStorage.activeConfig['v9370'],
	v9420Polkadot: polkadotStorage.activeConfig['v9420'],
	v9430Polkadot: polkadotStorage.activeConfig['v9430'],
	v1000001Polkadot: polkadotStorage.activeConfig['v1000001'],
}

export const pendingConfig = {
	name: '',
	v9110Polkadot: polkadotStorage.pendingConfig['v9110'],
}

export const pendingConfigs = {
	name: '',
	v9170Polkadot: polkadotStorage.pendingConfigs['v9170'],
	v9291Polkadot: polkadotStorage.pendingConfigs['v9291'],
	v9340Polkadot: polkadotStorage.pendingConfigs['v9340'],
	v9370Polkadot: polkadotStorage.pendingConfigs['v9370'],
	v9420Polkadot: polkadotStorage.pendingConfigs['v9420'],
	v9430Polkadot: polkadotStorage.pendingConfigs['v9430'],
	v1000001Polkadot: polkadotStorage.pendingConfigs['v1000001'],
}

export const bypassConsistencyCheck = {
	name: '',
	v9170Polkadot: polkadotStorage.bypassConsistencyCheck['v9170'],
}
