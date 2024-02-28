import * as polkadotStorage from '../../polkadot/xcm-pallet/storage'


export const queryCounter = {
	name: '',
	v9140Polkadot: polkadotStorage.queryCounter['v9140'],
}

export const queries = {
	name: '',
	v9140Polkadot: polkadotStorage.queries['v9140'],
	v9170Polkadot: polkadotStorage.queries['v9170'],
	v9370Polkadot: polkadotStorage.queries['v9370'],
	v9420Polkadot: polkadotStorage.queries['v9420'],
}

export const assetTraps = {
	name: '',
	v9140Polkadot: polkadotStorage.assetTraps['v9140'],
}

export const safeXcmVersion = {
	name: '',
	v9140Polkadot: polkadotStorage.safeXcmVersion['v9140'],
}

export const supportedVersion = {
	name: '',
	v9140Polkadot: polkadotStorage.supportedVersion['v9140'],
	v9370Polkadot: polkadotStorage.supportedVersion['v9370'],
	v9420Polkadot: polkadotStorage.supportedVersion['v9420'],
}

export const versionNotifiers = {
	name: '',
	v9140Polkadot: polkadotStorage.versionNotifiers['v9140'],
	v9370Polkadot: polkadotStorage.versionNotifiers['v9370'],
	v9420Polkadot: polkadotStorage.versionNotifiers['v9420'],
}

export const versionNotifyTargets = {
	name: '',
	v9140Polkadot: polkadotStorage.versionNotifyTargets['v9140'],
	v9370Polkadot: polkadotStorage.versionNotifyTargets['v9370'],
	v9420Polkadot: polkadotStorage.versionNotifyTargets['v9420'],
}

export const versionDiscoveryQueue = {
	name: '',
	v9140Polkadot: polkadotStorage.versionDiscoveryQueue['v9140'],
	v9370Polkadot: polkadotStorage.versionDiscoveryQueue['v9370'],
	v9420Polkadot: polkadotStorage.versionDiscoveryQueue['v9420'],
}

export const currentMigration = {
	name: '',
	v9140Polkadot: polkadotStorage.currentMigration['v9140'],
}

export const remoteLockedFungibles = {
	name: '',
	v9420Polkadot: polkadotStorage.remoteLockedFungibles['v9420'],
	v9430Polkadot: polkadotStorage.remoteLockedFungibles['v9430'],
}

export const lockedFungibles = {
	name: '',
	v9420Polkadot: polkadotStorage.lockedFungibles['v9420'],
}

export const xcmExecutionSuspended = {
	name: '',
	v9420Polkadot: polkadotStorage.xcmExecutionSuspended['v9420'],
}
