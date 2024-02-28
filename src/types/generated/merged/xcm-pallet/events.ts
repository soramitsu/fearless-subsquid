import * as polkadotEvents from '../../polkadot/xcm-pallet/events'


export const attempted = {
	name: 'XcmPallet.Attempted',
	v9140Polkadot: polkadotEvents.attempted['v9140'],
	v9170Polkadot: polkadotEvents.attempted['v9170'],
	v9420Polkadot: polkadotEvents.attempted['v9420'],
	v1000001Polkadot: polkadotEvents.attempted['v1000001'],
}

export const sent = {
	name: 'XcmPallet.Sent',
	v9140Polkadot: polkadotEvents.sent['v9140'],
	v9170Polkadot: polkadotEvents.sent['v9170'],
	v9370Polkadot: polkadotEvents.sent['v9370'],
	v9420Polkadot: polkadotEvents.sent['v9420'],
	v1000001Polkadot: polkadotEvents.sent['v1000001'],
}

export const unexpectedResponse = {
	name: 'XcmPallet.UnexpectedResponse',
	v9140Polkadot: polkadotEvents.unexpectedResponse['v9140'],
	v9370Polkadot: polkadotEvents.unexpectedResponse['v9370'],
	v9420Polkadot: polkadotEvents.unexpectedResponse['v9420'],
	v1000001Polkadot: polkadotEvents.unexpectedResponse['v1000001'],
}

export const responseReady = {
	name: 'XcmPallet.ResponseReady',
	v9140Polkadot: polkadotEvents.responseReady['v9140'],
	v9170Polkadot: polkadotEvents.responseReady['v9170'],
	v9370Polkadot: polkadotEvents.responseReady['v9370'],
	v9420Polkadot: polkadotEvents.responseReady['v9420'],
	v1000001Polkadot: polkadotEvents.responseReady['v1000001'],
}

export const notified = {
	name: 'XcmPallet.Notified',
	v9140Polkadot: polkadotEvents.notified['v9140'],
	v1000001Polkadot: polkadotEvents.notified['v1000001'],
}

export const notifyOverweight = {
	name: 'XcmPallet.NotifyOverweight',
	v9140Polkadot: polkadotEvents.notifyOverweight['v9140'],
	v9291Polkadot: polkadotEvents.notifyOverweight['v9291'],
	v9340Polkadot: polkadotEvents.notifyOverweight['v9340'],
	v1000001Polkadot: polkadotEvents.notifyOverweight['v1000001'],
}

export const notifyDispatchError = {
	name: 'XcmPallet.NotifyDispatchError',
	v9140Polkadot: polkadotEvents.notifyDispatchError['v9140'],
	v1000001Polkadot: polkadotEvents.notifyDispatchError['v1000001'],
}

export const notifyDecodeFailed = {
	name: 'XcmPallet.NotifyDecodeFailed',
	v9140Polkadot: polkadotEvents.notifyDecodeFailed['v9140'],
	v1000001Polkadot: polkadotEvents.notifyDecodeFailed['v1000001'],
}

export const invalidResponder = {
	name: 'XcmPallet.InvalidResponder',
	v9140Polkadot: polkadotEvents.invalidResponder['v9140'],
	v9370Polkadot: polkadotEvents.invalidResponder['v9370'],
	v9420Polkadot: polkadotEvents.invalidResponder['v9420'],
	v1000001Polkadot: polkadotEvents.invalidResponder['v1000001'],
}

export const invalidResponderVersion = {
	name: 'XcmPallet.InvalidResponderVersion',
	v9140Polkadot: polkadotEvents.invalidResponderVersion['v9140'],
	v9370Polkadot: polkadotEvents.invalidResponderVersion['v9370'],
	v9420Polkadot: polkadotEvents.invalidResponderVersion['v9420'],
	v1000001Polkadot: polkadotEvents.invalidResponderVersion['v1000001'],
}

export const responseTaken = {
	name: 'XcmPallet.ResponseTaken',
	v9140Polkadot: polkadotEvents.responseTaken['v9140'],
	v1000001Polkadot: polkadotEvents.responseTaken['v1000001'],
}

export const assetsTrapped = {
	name: 'XcmPallet.AssetsTrapped',
	v9140Polkadot: polkadotEvents.assetsTrapped['v9140'],
	v9370Polkadot: polkadotEvents.assetsTrapped['v9370'],
	v9420Polkadot: polkadotEvents.assetsTrapped['v9420'],
	v1000001Polkadot: polkadotEvents.assetsTrapped['v1000001'],
}

export const versionChangeNotified = {
	name: 'XcmPallet.VersionChangeNotified',
	v9140Polkadot: polkadotEvents.versionChangeNotified['v9140'],
	v9370Polkadot: polkadotEvents.versionChangeNotified['v9370'],
	v9420Polkadot: polkadotEvents.versionChangeNotified['v9420'],
	v1000001Polkadot: polkadotEvents.versionChangeNotified['v1000001'],
}

export const supportedVersionChanged = {
	name: 'XcmPallet.SupportedVersionChanged',
	v9140Polkadot: polkadotEvents.supportedVersionChanged['v9140'],
	v9370Polkadot: polkadotEvents.supportedVersionChanged['v9370'],
	v9420Polkadot: polkadotEvents.supportedVersionChanged['v9420'],
	v1000001Polkadot: polkadotEvents.supportedVersionChanged['v1000001'],
}

export const notifyTargetSendFail = {
	name: 'XcmPallet.NotifyTargetSendFail',
	v9140Polkadot: polkadotEvents.notifyTargetSendFail['v9140'],
	v9170Polkadot: polkadotEvents.notifyTargetSendFail['v9170'],
	v9370Polkadot: polkadotEvents.notifyTargetSendFail['v9370'],
	v9420Polkadot: polkadotEvents.notifyTargetSendFail['v9420'],
	v1000001Polkadot: polkadotEvents.notifyTargetSendFail['v1000001'],
}

export const notifyTargetMigrationFail = {
	name: 'XcmPallet.NotifyTargetMigrationFail',
	v9140Polkadot: polkadotEvents.notifyTargetMigrationFail['v9140'],
	v9370Polkadot: polkadotEvents.notifyTargetMigrationFail['v9370'],
	v9420Polkadot: polkadotEvents.notifyTargetMigrationFail['v9420'],
	v1000001Polkadot: polkadotEvents.notifyTargetMigrationFail['v1000001'],
}

export const assetsClaimed = {
	name: 'XcmPallet.AssetsClaimed',
	v9340Polkadot: polkadotEvents.assetsClaimed['v9340'],
	v9370Polkadot: polkadotEvents.assetsClaimed['v9370'],
	v9420Polkadot: polkadotEvents.assetsClaimed['v9420'],
	v1000001Polkadot: polkadotEvents.assetsClaimed['v1000001'],
}

export const invalidQuerierVersion = {
	name: 'XcmPallet.InvalidQuerierVersion',
	v9420Polkadot: polkadotEvents.invalidQuerierVersion['v9420'],
	v1000001Polkadot: polkadotEvents.invalidQuerierVersion['v1000001'],
}

export const invalidQuerier = {
	name: 'XcmPallet.InvalidQuerier',
	v9420Polkadot: polkadotEvents.invalidQuerier['v9420'],
	v1000001Polkadot: polkadotEvents.invalidQuerier['v1000001'],
}

export const versionNotifyStarted = {
	name: 'XcmPallet.VersionNotifyStarted',
	v9420Polkadot: polkadotEvents.versionNotifyStarted['v9420'],
	v1000001Polkadot: polkadotEvents.versionNotifyStarted['v1000001'],
}

export const versionNotifyRequested = {
	name: 'XcmPallet.VersionNotifyRequested',
	v9420Polkadot: polkadotEvents.versionNotifyRequested['v9420'],
	v1000001Polkadot: polkadotEvents.versionNotifyRequested['v1000001'],
}

export const versionNotifyUnrequested = {
	name: 'XcmPallet.VersionNotifyUnrequested',
	v9420Polkadot: polkadotEvents.versionNotifyUnrequested['v9420'],
	v1000001Polkadot: polkadotEvents.versionNotifyUnrequested['v1000001'],
}

export const feesPaid = {
	name: 'XcmPallet.FeesPaid',
	v9420Polkadot: polkadotEvents.feesPaid['v9420'],
	v1000001Polkadot: polkadotEvents.feesPaid['v1000001'],
}
