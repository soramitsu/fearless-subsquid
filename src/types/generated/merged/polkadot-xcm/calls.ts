import * as soraPolkadotCalls from '../../sora-polkadot/polkadot-xcm/calls'
import * as soraKusamaCalls from '../../sora-kusama/polkadot-xcm/calls'


export const send = {
	name: 'PolkadotXcm.send',
	soraPolkadotV1: soraPolkadotCalls.send['v1'],
	soraKusamaV1: soraKusamaCalls.send['v1'],
}

export const teleportAssets = {
	name: 'PolkadotXcm.teleport_assets',
	soraPolkadotV1: soraPolkadotCalls.teleportAssets['v1'],
	soraKusamaV1: soraKusamaCalls.teleportAssets['v1'],
}

export const reserveTransferAssets = {
	name: 'PolkadotXcm.reserve_transfer_assets',
	soraPolkadotV1: soraPolkadotCalls.reserveTransferAssets['v1'],
	soraKusamaV1: soraKusamaCalls.reserveTransferAssets['v1'],
}

export const execute = {
	name: 'PolkadotXcm.execute',
	soraPolkadotV1: soraPolkadotCalls.execute['v1'],
	soraKusamaV1: soraKusamaCalls.execute['v1'],
}

export const forceXcmVersion = {
	name: 'PolkadotXcm.force_xcm_version',
	soraPolkadotV1: soraPolkadotCalls.forceXcmVersion['v1'],
	soraKusamaV1: soraKusamaCalls.forceXcmVersion['v1'],
}

export const forceDefaultXcmVersion = {
	name: 'PolkadotXcm.force_default_xcm_version',
	soraPolkadotV1: soraPolkadotCalls.forceDefaultXcmVersion['v1'],
	soraKusamaV1: soraKusamaCalls.forceDefaultXcmVersion['v1'],
}

export const forceSubscribeVersionNotify = {
	name: 'PolkadotXcm.force_subscribe_version_notify',
	soraPolkadotV1: soraPolkadotCalls.forceSubscribeVersionNotify['v1'],
	soraKusamaV1: soraKusamaCalls.forceSubscribeVersionNotify['v1'],
}

export const forceUnsubscribeVersionNotify = {
	name: 'PolkadotXcm.force_unsubscribe_version_notify',
	soraPolkadotV1: soraPolkadotCalls.forceUnsubscribeVersionNotify['v1'],
	soraKusamaV1: soraKusamaCalls.forceUnsubscribeVersionNotify['v1'],
}

export const limitedReserveTransferAssets = {
	name: 'PolkadotXcm.limited_reserve_transfer_assets',
	soraPolkadotV1: soraPolkadotCalls.limitedReserveTransferAssets['v1'],
	soraKusamaV1: soraKusamaCalls.limitedReserveTransferAssets['v1'],
}

export const limitedTeleportAssets = {
	name: 'PolkadotXcm.limited_teleport_assets',
	soraPolkadotV1: soraPolkadotCalls.limitedTeleportAssets['v1'],
	soraKusamaV1: soraKusamaCalls.limitedTeleportAssets['v1'],
}
