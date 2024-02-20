import * as soraPolkadotEvents from '../../sora-polkadot/polkadot-xcm/events'
import * as soraKusamaEvents from '../../sora-kusama/polkadot-xcm/events'


export const attempted = {
	name: 'PolkadotXcm.Attempted',
	v1SoraPolkadot: soraPolkadotEvents.attempted['v1'],
	v10SoraPolkadot: soraPolkadotEvents.attempted['v10'],
	v1SoraKusama: soraKusamaEvents.attempted['v1'],
	v7SoraKusama: soraKusamaEvents.attempted['v7'],
}

export const sent = {
	name: 'PolkadotXcm.Sent',
	v1SoraPolkadot: soraPolkadotEvents.sent['v1'],
	v10SoraPolkadot: soraPolkadotEvents.sent['v10'],
	v1SoraKusama: soraKusamaEvents.sent['v1'],
	v7SoraKusama: soraKusamaEvents.sent['v7'],
}

export const unexpectedResponse = {
	name: 'PolkadotXcm.UnexpectedResponse',
	v1SoraPolkadot: soraPolkadotEvents.unexpectedResponse['v1'],
	v10SoraPolkadot: soraPolkadotEvents.unexpectedResponse['v10'],
	v1SoraKusama: soraKusamaEvents.unexpectedResponse['v1'],
	v7SoraKusama: soraKusamaEvents.unexpectedResponse['v7'],
}

export const responseReady = {
	name: 'PolkadotXcm.ResponseReady',
	v1SoraPolkadot: soraPolkadotEvents.responseReady['v1'],
	v10SoraPolkadot: soraPolkadotEvents.responseReady['v10'],
	v1SoraKusama: soraKusamaEvents.responseReady['v1'],
	v7SoraKusama: soraKusamaEvents.responseReady['v7'],
}

export const notified = {
	name: 'PolkadotXcm.Notified',
	v1SoraPolkadot: soraPolkadotEvents.notified['v1'],
	v1SoraKusama: soraKusamaEvents.notified['v1'],
}

export const notifyOverweight = {
	name: 'PolkadotXcm.NotifyOverweight',
	v1SoraPolkadot: soraPolkadotEvents.notifyOverweight['v1'],
	v1SoraKusama: soraKusamaEvents.notifyOverweight['v1'],
	v7SoraKusama: soraKusamaEvents.notifyOverweight['v7'],
}

export const notifyDispatchError = {
	name: 'PolkadotXcm.NotifyDispatchError',
	v1SoraPolkadot: soraPolkadotEvents.notifyDispatchError['v1'],
	v1SoraKusama: soraKusamaEvents.notifyDispatchError['v1'],
}

export const notifyDecodeFailed = {
	name: 'PolkadotXcm.NotifyDecodeFailed',
	v1SoraPolkadot: soraPolkadotEvents.notifyDecodeFailed['v1'],
	v1SoraKusama: soraKusamaEvents.notifyDecodeFailed['v1'],
}

export const invalidResponder = {
	name: 'PolkadotXcm.InvalidResponder',
	v1SoraPolkadot: soraPolkadotEvents.invalidResponder['v1'],
	v10SoraPolkadot: soraPolkadotEvents.invalidResponder['v10'],
	v1SoraKusama: soraKusamaEvents.invalidResponder['v1'],
	v7SoraKusama: soraKusamaEvents.invalidResponder['v7'],
}

export const invalidResponderVersion = {
	name: 'PolkadotXcm.InvalidResponderVersion',
	v1SoraPolkadot: soraPolkadotEvents.invalidResponderVersion['v1'],
	v10SoraPolkadot: soraPolkadotEvents.invalidResponderVersion['v10'],
	v1SoraKusama: soraKusamaEvents.invalidResponderVersion['v1'],
	v7SoraKusama: soraKusamaEvents.invalidResponderVersion['v7'],
}

export const responseTaken = {
	name: 'PolkadotXcm.ResponseTaken',
	v1SoraPolkadot: soraPolkadotEvents.responseTaken['v1'],
	v1SoraKusama: soraKusamaEvents.responseTaken['v1'],
}

export const assetsTrapped = {
	name: 'PolkadotXcm.AssetsTrapped',
	v1SoraPolkadot: soraPolkadotEvents.assetsTrapped['v1'],
	v10SoraPolkadot: soraPolkadotEvents.assetsTrapped['v10'],
	v1SoraKusama: soraKusamaEvents.assetsTrapped['v1'],
	v7SoraKusama: soraKusamaEvents.assetsTrapped['v7'],
}

export const versionChangeNotified = {
	name: 'PolkadotXcm.VersionChangeNotified',
	v1SoraPolkadot: soraPolkadotEvents.versionChangeNotified['v1'],
	v10SoraPolkadot: soraPolkadotEvents.versionChangeNotified['v10'],
	v1SoraKusama: soraKusamaEvents.versionChangeNotified['v1'],
	v7SoraKusama: soraKusamaEvents.versionChangeNotified['v7'],
}

export const supportedVersionChanged = {
	name: 'PolkadotXcm.SupportedVersionChanged',
	v1SoraPolkadot: soraPolkadotEvents.supportedVersionChanged['v1'],
	v10SoraPolkadot: soraPolkadotEvents.supportedVersionChanged['v10'],
	v1SoraKusama: soraKusamaEvents.supportedVersionChanged['v1'],
	v7SoraKusama: soraKusamaEvents.supportedVersionChanged['v7'],
}

export const notifyTargetSendFail = {
	name: 'PolkadotXcm.NotifyTargetSendFail',
	v1SoraPolkadot: soraPolkadotEvents.notifyTargetSendFail['v1'],
	v10SoraPolkadot: soraPolkadotEvents.notifyTargetSendFail['v10'],
	v1SoraKusama: soraKusamaEvents.notifyTargetSendFail['v1'],
	v7SoraKusama: soraKusamaEvents.notifyTargetSendFail['v7'],
}

export const notifyTargetMigrationFail = {
	name: 'PolkadotXcm.NotifyTargetMigrationFail',
	v1SoraPolkadot: soraPolkadotEvents.notifyTargetMigrationFail['v1'],
	v10SoraPolkadot: soraPolkadotEvents.notifyTargetMigrationFail['v10'],
	v1SoraKusama: soraKusamaEvents.notifyTargetMigrationFail['v1'],
	v7SoraKusama: soraKusamaEvents.notifyTargetMigrationFail['v7'],
}

export const assetsClaimed = {
	name: 'PolkadotXcm.AssetsClaimed',
	v1SoraPolkadot: soraPolkadotEvents.assetsClaimed['v1'],
	v10SoraPolkadot: soraPolkadotEvents.assetsClaimed['v10'],
	v7SoraKusama: soraKusamaEvents.assetsClaimed['v7'],
}

export const invalidQuerierVersion = {
	name: 'PolkadotXcm.InvalidQuerierVersion',
	v10SoraPolkadot: soraPolkadotEvents.invalidQuerierVersion['v10'],
	v7SoraKusama: soraKusamaEvents.invalidQuerierVersion['v7'],
}

export const invalidQuerier = {
	name: 'PolkadotXcm.InvalidQuerier',
	v10SoraPolkadot: soraPolkadotEvents.invalidQuerier['v10'],
	v7SoraKusama: soraKusamaEvents.invalidQuerier['v7'],
}

export const versionNotifyStarted = {
	name: 'PolkadotXcm.VersionNotifyStarted',
	v10SoraPolkadot: soraPolkadotEvents.versionNotifyStarted['v10'],
	v7SoraKusama: soraKusamaEvents.versionNotifyStarted['v7'],
}

export const versionNotifyRequested = {
	name: 'PolkadotXcm.VersionNotifyRequested',
	v10SoraPolkadot: soraPolkadotEvents.versionNotifyRequested['v10'],
	v7SoraKusama: soraKusamaEvents.versionNotifyRequested['v7'],
}

export const versionNotifyUnrequested = {
	name: 'PolkadotXcm.VersionNotifyUnrequested',
	v10SoraPolkadot: soraPolkadotEvents.versionNotifyUnrequested['v10'],
	v7SoraKusama: soraKusamaEvents.versionNotifyUnrequested['v7'],
}

export const feesPaid = {
	name: 'PolkadotXcm.FeesPaid',
	v10SoraPolkadot: soraPolkadotEvents.feesPaid['v10'],
	v7SoraKusama: soraKusamaEvents.feesPaid['v7'],
}
