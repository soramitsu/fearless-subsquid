import * as kusamaEvents from '../../kusama/xcm-pallet/events'


export const attempted = {
	name: 'XcmPallet.Attempted',
	v9010Kusama: kusamaEvents.attempted['v9010'],
	v9100Kusama: kusamaEvents.attempted['v9100'],
	v9111Kusama: kusamaEvents.attempted['v9111'],
	v9160Kusama: kusamaEvents.attempted['v9160'],
	v9381Kusama: kusamaEvents.attempted['v9381'],
	v1000000Kusama: kusamaEvents.attempted['v1000000'],
}

export const sent = {
	name: 'XcmPallet.Sent',
	v9010Kusama: kusamaEvents.sent['v9010'],
	v9100Kusama: kusamaEvents.sent['v9100'],
	v9111Kusama: kusamaEvents.sent['v9111'],
	v9160Kusama: kusamaEvents.sent['v9160'],
	v9370Kusama: kusamaEvents.sent['v9370'],
	v9381Kusama: kusamaEvents.sent['v9381'],
	v1000000Kusama: kusamaEvents.sent['v1000000'],
}

export const unexpectedResponse = {
	name: 'XcmPallet.UnexpectedResponse',
	v9111Kusama: kusamaEvents.unexpectedResponse['v9111'],
	v9370Kusama: kusamaEvents.unexpectedResponse['v9370'],
	v9381Kusama: kusamaEvents.unexpectedResponse['v9381'],
	v1000000Kusama: kusamaEvents.unexpectedResponse['v1000000'],
}

export const responseReady = {
	name: 'XcmPallet.ResponseReady',
	v9111Kusama: kusamaEvents.responseReady['v9111'],
	v9160Kusama: kusamaEvents.responseReady['v9160'],
	v9370Kusama: kusamaEvents.responseReady['v9370'],
	v9381Kusama: kusamaEvents.responseReady['v9381'],
	v1000000Kusama: kusamaEvents.responseReady['v1000000'],
}

export const notified = {
	name: 'XcmPallet.Notified',
	v9111Kusama: kusamaEvents.notified['v9111'],
	v1000000Kusama: kusamaEvents.notified['v1000000'],
}

export const notifyOverweight = {
	name: 'XcmPallet.NotifyOverweight',
	v9111Kusama: kusamaEvents.notifyOverweight['v9111'],
	v9291Kusama: kusamaEvents.notifyOverweight['v9291'],
	v9320Kusama: kusamaEvents.notifyOverweight['v9320'],
	v1000000Kusama: kusamaEvents.notifyOverweight['v1000000'],
}

export const notifyDispatchError = {
	name: 'XcmPallet.NotifyDispatchError',
	v9111Kusama: kusamaEvents.notifyDispatchError['v9111'],
	v1000000Kusama: kusamaEvents.notifyDispatchError['v1000000'],
}

export const notifyDecodeFailed = {
	name: 'XcmPallet.NotifyDecodeFailed',
	v9111Kusama: kusamaEvents.notifyDecodeFailed['v9111'],
	v1000000Kusama: kusamaEvents.notifyDecodeFailed['v1000000'],
}

export const invalidResponder = {
	name: 'XcmPallet.InvalidResponder',
	v9111Kusama: kusamaEvents.invalidResponder['v9111'],
	v9370Kusama: kusamaEvents.invalidResponder['v9370'],
	v9381Kusama: kusamaEvents.invalidResponder['v9381'],
	v1000000Kusama: kusamaEvents.invalidResponder['v1000000'],
}

export const invalidResponderVersion = {
	name: 'XcmPallet.InvalidResponderVersion',
	v9111Kusama: kusamaEvents.invalidResponderVersion['v9111'],
	v9370Kusama: kusamaEvents.invalidResponderVersion['v9370'],
	v9381Kusama: kusamaEvents.invalidResponderVersion['v9381'],
	v1000000Kusama: kusamaEvents.invalidResponderVersion['v1000000'],
}

export const responseTaken = {
	name: 'XcmPallet.ResponseTaken',
	v9111Kusama: kusamaEvents.responseTaken['v9111'],
	v1000000Kusama: kusamaEvents.responseTaken['v1000000'],
}

export const assetsTrapped = {
	name: 'XcmPallet.AssetsTrapped',
	v9111Kusama: kusamaEvents.assetsTrapped['v9111'],
	v9370Kusama: kusamaEvents.assetsTrapped['v9370'],
	v9381Kusama: kusamaEvents.assetsTrapped['v9381'],
	v1000000Kusama: kusamaEvents.assetsTrapped['v1000000'],
}

export const versionChangeNotified = {
	name: 'XcmPallet.VersionChangeNotified',
	v9111Kusama: kusamaEvents.versionChangeNotified['v9111'],
	v9370Kusama: kusamaEvents.versionChangeNotified['v9370'],
	v9381Kusama: kusamaEvents.versionChangeNotified['v9381'],
	v1000000Kusama: kusamaEvents.versionChangeNotified['v1000000'],
}

export const supportedVersionChanged = {
	name: 'XcmPallet.SupportedVersionChanged',
	v9111Kusama: kusamaEvents.supportedVersionChanged['v9111'],
	v9370Kusama: kusamaEvents.supportedVersionChanged['v9370'],
	v9381Kusama: kusamaEvents.supportedVersionChanged['v9381'],
	v1000000Kusama: kusamaEvents.supportedVersionChanged['v1000000'],
}

export const notifyTargetSendFail = {
	name: 'XcmPallet.NotifyTargetSendFail',
	v9111Kusama: kusamaEvents.notifyTargetSendFail['v9111'],
	v9160Kusama: kusamaEvents.notifyTargetSendFail['v9160'],
	v9370Kusama: kusamaEvents.notifyTargetSendFail['v9370'],
	v9381Kusama: kusamaEvents.notifyTargetSendFail['v9381'],
	v1000000Kusama: kusamaEvents.notifyTargetSendFail['v1000000'],
}

export const notifyTargetMigrationFail = {
	name: 'XcmPallet.NotifyTargetMigrationFail',
	v9111Kusama: kusamaEvents.notifyTargetMigrationFail['v9111'],
	v9370Kusama: kusamaEvents.notifyTargetMigrationFail['v9370'],
	v9381Kusama: kusamaEvents.notifyTargetMigrationFail['v9381'],
	v1000000Kusama: kusamaEvents.notifyTargetMigrationFail['v1000000'],
}

export const assetsClaimed = {
	name: 'XcmPallet.AssetsClaimed',
	v9320Kusama: kusamaEvents.assetsClaimed['v9320'],
	v9370Kusama: kusamaEvents.assetsClaimed['v9370'],
	v9381Kusama: kusamaEvents.assetsClaimed['v9381'],
	v1000000Kusama: kusamaEvents.assetsClaimed['v1000000'],
}

export const invalidQuerierVersion = {
	name: 'XcmPallet.InvalidQuerierVersion',
	v9381Kusama: kusamaEvents.invalidQuerierVersion['v9381'],
	v1000000Kusama: kusamaEvents.invalidQuerierVersion['v1000000'],
}

export const invalidQuerier = {
	name: 'XcmPallet.InvalidQuerier',
	v9381Kusama: kusamaEvents.invalidQuerier['v9381'],
	v1000000Kusama: kusamaEvents.invalidQuerier['v1000000'],
}

export const versionNotifyStarted = {
	name: 'XcmPallet.VersionNotifyStarted',
	v9381Kusama: kusamaEvents.versionNotifyStarted['v9381'],
	v1000000Kusama: kusamaEvents.versionNotifyStarted['v1000000'],
}

export const versionNotifyRequested = {
	name: 'XcmPallet.VersionNotifyRequested',
	v9381Kusama: kusamaEvents.versionNotifyRequested['v9381'],
	v1000000Kusama: kusamaEvents.versionNotifyRequested['v1000000'],
}

export const versionNotifyUnrequested = {
	name: 'XcmPallet.VersionNotifyUnrequested',
	v9381Kusama: kusamaEvents.versionNotifyUnrequested['v9381'],
	v1000000Kusama: kusamaEvents.versionNotifyUnrequested['v1000000'],
}

export const feesPaid = {
	name: 'XcmPallet.FeesPaid',
	v9381Kusama: kusamaEvents.feesPaid['v9381'],
	v1000000Kusama: kusamaEvents.feesPaid['v1000000'],
}
