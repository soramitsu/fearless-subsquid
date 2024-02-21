import * as kusamaStorage from '../../kusama/xcm-pallet/storage'


export const versionNotifyTargets = {
	name: '',
	v9100Kusama: kusamaStorage.versionNotifyTargets['v9100'],
	v9111Kusama: kusamaStorage.versionNotifyTargets['v9111'],
	v9370Kusama: kusamaStorage.versionNotifyTargets['v9370'],
	v9381Kusama: kusamaStorage.versionNotifyTargets['v9381'],
}

export const queryCounter = {
	name: '',
	v9111Kusama: kusamaStorage.queryCounter['v9111'],
}

export const queries = {
	name: '',
	v9111Kusama: kusamaStorage.queries['v9111'],
	v9160Kusama: kusamaStorage.queries['v9160'],
	v9370Kusama: kusamaStorage.queries['v9370'],
	v9381Kusama: kusamaStorage.queries['v9381'],
}

export const assetTraps = {
	name: '',
	v9111Kusama: kusamaStorage.assetTraps['v9111'],
}

export const safeXcmVersion = {
	name: '',
	v9111Kusama: kusamaStorage.safeXcmVersion['v9111'],
}

export const supportedVersion = {
	name: '',
	v9111Kusama: kusamaStorage.supportedVersion['v9111'],
	v9370Kusama: kusamaStorage.supportedVersion['v9370'],
	v9381Kusama: kusamaStorage.supportedVersion['v9381'],
}

export const versionNotifiers = {
	name: '',
	v9111Kusama: kusamaStorage.versionNotifiers['v9111'],
	v9370Kusama: kusamaStorage.versionNotifiers['v9370'],
	v9381Kusama: kusamaStorage.versionNotifiers['v9381'],
}

export const versionDiscoveryQueue = {
	name: '',
	v9111Kusama: kusamaStorage.versionDiscoveryQueue['v9111'],
	v9370Kusama: kusamaStorage.versionDiscoveryQueue['v9370'],
	v9381Kusama: kusamaStorage.versionDiscoveryQueue['v9381'],
}

export const currentMigration = {
	name: '',
	v9111Kusama: kusamaStorage.currentMigration['v9111'],
}

export const remoteLockedFungibles = {
	name: '',
	v9381Kusama: kusamaStorage.remoteLockedFungibles['v9381'],
	v9430Kusama: kusamaStorage.remoteLockedFungibles['v9430'],
}

export const lockedFungibles = {
	name: '',
	v9381Kusama: kusamaStorage.lockedFungibles['v9381'],
}

export const xcmExecutionSuspended = {
	name: '',
	v9420Kusama: kusamaStorage.xcmExecutionSuspended['v9420'],
}
