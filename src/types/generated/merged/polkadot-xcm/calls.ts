import * as soraPolkadotCalls from '../../sora-polkadot/polkadot-xcm/calls'
import * as soraKusamaCalls from '../../sora-kusama/polkadot-xcm/calls'


export const send = {
	name: 'PolkadotXcm.send',
	v1SoraPolkadot: soraPolkadotCalls.send['v1'],
	v1SoraKusama: soraKusamaCalls.send['v1'],
}

export const teleportAssets = {
	name: 'PolkadotXcm.teleport_assets',
	v1SoraPolkadot: soraPolkadotCalls.teleportAssets['v1'],
	v1SoraKusama: soraKusamaCalls.teleportAssets['v1'],
}

export const reserveTransferAssets = {
	name: 'PolkadotXcm.reserve_transfer_assets',
	v1SoraPolkadot: soraPolkadotCalls.reserveTransferAssets['v1'],
	v1SoraKusama: soraKusamaCalls.reserveTransferAssets['v1'],
}

export const execute = {
	name: 'PolkadotXcm.execute',
	v1SoraPolkadot: soraPolkadotCalls.execute['v1'],
	v1SoraKusama: soraKusamaCalls.execute['v1'],
}

export const forceXcmVersion = {
	name: 'PolkadotXcm.force_xcm_version',
	v1SoraPolkadot: soraPolkadotCalls.forceXcmVersion['v1'],
	v1SoraKusama: soraKusamaCalls.forceXcmVersion['v1'],
}

export const forceDefaultXcmVersion = {
	name: 'PolkadotXcm.force_default_xcm_version',
	v1SoraPolkadot: soraPolkadotCalls.forceDefaultXcmVersion['v1'],
	v1SoraKusama: soraKusamaCalls.forceDefaultXcmVersion['v1'],
}

export const forceSubscribeVersionNotify = {
	name: 'PolkadotXcm.force_subscribe_version_notify',
	v1SoraPolkadot: soraPolkadotCalls.forceSubscribeVersionNotify['v1'],
	v1SoraKusama: soraKusamaCalls.forceSubscribeVersionNotify['v1'],
}

export const forceUnsubscribeVersionNotify = {
	name: 'PolkadotXcm.force_unsubscribe_version_notify',
	v1SoraPolkadot: soraPolkadotCalls.forceUnsubscribeVersionNotify['v1'],
	v1SoraKusama: soraKusamaCalls.forceUnsubscribeVersionNotify['v1'],
}

export const limitedReserveTransferAssets = {
	name: 'PolkadotXcm.limited_reserve_transfer_assets',
	v1SoraPolkadot: soraPolkadotCalls.limitedReserveTransferAssets['v1'],
	v1SoraKusama: soraKusamaCalls.limitedReserveTransferAssets['v1'],
}

export const limitedTeleportAssets = {
	name: 'PolkadotXcm.limited_teleport_assets',
	v1SoraPolkadot: soraPolkadotCalls.limitedTeleportAssets['v1'],
	v1SoraKusama: soraKusamaCalls.limitedTeleportAssets['v1'],
}
