import * as soraPolkadotEvents from '../../sora-polkadot/polkadot-xcm/events'
import * as soraKusamaEvents from '../../sora-kusama/polkadot-xcm/events'


export const attempted = {
	name: 'PolkadotXcm.Attempted',
	soraPolkadotV1: soraPolkadotEvents.attempted['v1'],
	soraPolkadotV10: soraPolkadotEvents.attempted['v10'],
	soraKusamaV1: soraKusamaEvents.attempted['v1'],
	soraKusamaV7: soraKusamaEvents.attempted['v7'],
}

export const sent = {
	name: 'PolkadotXcm.Sent',
	soraPolkadotV1: soraPolkadotEvents.sent['v1'],
	soraPolkadotV10: soraPolkadotEvents.sent['v10'],
	soraKusamaV1: soraKusamaEvents.sent['v1'],
	soraKusamaV7: soraKusamaEvents.sent['v7'],
}

export const unexpectedResponse = {
	name: 'PolkadotXcm.UnexpectedResponse',
	soraPolkadotV1: soraPolkadotEvents.unexpectedResponse['v1'],
	soraPolkadotV10: soraPolkadotEvents.unexpectedResponse['v10'],
	soraKusamaV1: soraKusamaEvents.unexpectedResponse['v1'],
	soraKusamaV7: soraKusamaEvents.unexpectedResponse['v7'],
}

export const responseReady = {
	name: 'PolkadotXcm.ResponseReady',
	soraPolkadotV1: soraPolkadotEvents.responseReady['v1'],
	soraPolkadotV10: soraPolkadotEvents.responseReady['v10'],
	soraKusamaV1: soraKusamaEvents.responseReady['v1'],
	soraKusamaV7: soraKusamaEvents.responseReady['v7'],
}

export const notified = {
	name: 'PolkadotXcm.Notified',
	soraPolkadotV1: soraPolkadotEvents.notified['v1'],
	soraKusamaV1: soraKusamaEvents.notified['v1'],
}

export const notifyOverweight = {
	name: 'PolkadotXcm.NotifyOverweight',
	soraPolkadotV1: soraPolkadotEvents.notifyOverweight['v1'],
	soraKusamaV1: soraKusamaEvents.notifyOverweight['v1'],
	soraKusamaV7: soraKusamaEvents.notifyOverweight['v7'],
}

export const notifyDispatchError = {
	name: 'PolkadotXcm.NotifyDispatchError',
	soraPolkadotV1: soraPolkadotEvents.notifyDispatchError['v1'],
	soraKusamaV1: soraKusamaEvents.notifyDispatchError['v1'],
}

export const notifyDecodeFailed = {
	name: 'PolkadotXcm.NotifyDecodeFailed',
	soraPolkadotV1: soraPolkadotEvents.notifyDecodeFailed['v1'],
	soraKusamaV1: soraKusamaEvents.notifyDecodeFailed['v1'],
}

export const invalidResponder = {
	name: 'PolkadotXcm.InvalidResponder',
	soraPolkadotV1: soraPolkadotEvents.invalidResponder['v1'],
	soraPolkadotV10: soraPolkadotEvents.invalidResponder['v10'],
	soraKusamaV1: soraKusamaEvents.invalidResponder['v1'],
	soraKusamaV7: soraKusamaEvents.invalidResponder['v7'],
}

export const invalidResponderVersion = {
	name: 'PolkadotXcm.InvalidResponderVersion',
	soraPolkadotV1: soraPolkadotEvents.invalidResponderVersion['v1'],
	soraPolkadotV10: soraPolkadotEvents.invalidResponderVersion['v10'],
	soraKusamaV1: soraKusamaEvents.invalidResponderVersion['v1'],
	soraKusamaV7: soraKusamaEvents.invalidResponderVersion['v7'],
}

export const responseTaken = {
	name: 'PolkadotXcm.ResponseTaken',
	soraPolkadotV1: soraPolkadotEvents.responseTaken['v1'],
	soraKusamaV1: soraKusamaEvents.responseTaken['v1'],
}

export const assetsTrapped = {
	name: 'PolkadotXcm.AssetsTrapped',
	soraPolkadotV1: soraPolkadotEvents.assetsTrapped['v1'],
	soraPolkadotV10: soraPolkadotEvents.assetsTrapped['v10'],
	soraKusamaV1: soraKusamaEvents.assetsTrapped['v1'],
	soraKusamaV7: soraKusamaEvents.assetsTrapped['v7'],
}

export const versionChangeNotified = {
	name: 'PolkadotXcm.VersionChangeNotified',
	soraPolkadotV1: soraPolkadotEvents.versionChangeNotified['v1'],
	soraPolkadotV10: soraPolkadotEvents.versionChangeNotified['v10'],
	soraKusamaV1: soraKusamaEvents.versionChangeNotified['v1'],
	soraKusamaV7: soraKusamaEvents.versionChangeNotified['v7'],
}

export const supportedVersionChanged = {
	name: 'PolkadotXcm.SupportedVersionChanged',
	soraPolkadotV1: soraPolkadotEvents.supportedVersionChanged['v1'],
	soraPolkadotV10: soraPolkadotEvents.supportedVersionChanged['v10'],
	soraKusamaV1: soraKusamaEvents.supportedVersionChanged['v1'],
	soraKusamaV7: soraKusamaEvents.supportedVersionChanged['v7'],
}

export const notifyTargetSendFail = {
	name: 'PolkadotXcm.NotifyTargetSendFail',
	soraPolkadotV1: soraPolkadotEvents.notifyTargetSendFail['v1'],
	soraPolkadotV10: soraPolkadotEvents.notifyTargetSendFail['v10'],
	soraKusamaV1: soraKusamaEvents.notifyTargetSendFail['v1'],
	soraKusamaV7: soraKusamaEvents.notifyTargetSendFail['v7'],
}

export const notifyTargetMigrationFail = {
	name: 'PolkadotXcm.NotifyTargetMigrationFail',
	soraPolkadotV1: soraPolkadotEvents.notifyTargetMigrationFail['v1'],
	soraPolkadotV10: soraPolkadotEvents.notifyTargetMigrationFail['v10'],
	soraKusamaV1: soraKusamaEvents.notifyTargetMigrationFail['v1'],
	soraKusamaV7: soraKusamaEvents.notifyTargetMigrationFail['v7'],
}

export const assetsClaimed = {
	name: 'PolkadotXcm.AssetsClaimed',
	soraPolkadotV1: soraPolkadotEvents.assetsClaimed['v1'],
	soraPolkadotV10: soraPolkadotEvents.assetsClaimed['v10'],
	soraKusamaV7: soraKusamaEvents.assetsClaimed['v7'],
}

export const invalidQuerierVersion = {
	name: 'PolkadotXcm.InvalidQuerierVersion',
	soraPolkadotV10: soraPolkadotEvents.invalidQuerierVersion['v10'],
	soraKusamaV7: soraKusamaEvents.invalidQuerierVersion['v7'],
}

export const invalidQuerier = {
	name: 'PolkadotXcm.InvalidQuerier',
	soraPolkadotV10: soraPolkadotEvents.invalidQuerier['v10'],
	soraKusamaV7: soraKusamaEvents.invalidQuerier['v7'],
}

export const versionNotifyStarted = {
	name: 'PolkadotXcm.VersionNotifyStarted',
	soraPolkadotV10: soraPolkadotEvents.versionNotifyStarted['v10'],
	soraKusamaV7: soraKusamaEvents.versionNotifyStarted['v7'],
}

export const versionNotifyRequested = {
	name: 'PolkadotXcm.VersionNotifyRequested',
	soraPolkadotV10: soraPolkadotEvents.versionNotifyRequested['v10'],
	soraKusamaV7: soraKusamaEvents.versionNotifyRequested['v7'],
}

export const versionNotifyUnrequested = {
	name: 'PolkadotXcm.VersionNotifyUnrequested',
	soraPolkadotV10: soraPolkadotEvents.versionNotifyUnrequested['v10'],
	soraKusamaV7: soraKusamaEvents.versionNotifyUnrequested['v7'],
}

export const feesPaid = {
	name: 'PolkadotXcm.FeesPaid',
	soraPolkadotV10: soraPolkadotEvents.feesPaid['v10'],
	soraKusamaV7: soraKusamaEvents.feesPaid['v7'],
}
