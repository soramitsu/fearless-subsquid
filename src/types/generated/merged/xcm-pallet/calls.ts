import * as polkadotCalls from '../../polkadot/xcm-pallet/calls'


export const send = {
	name: 'XcmPallet.send',
	v9140Polkadot: polkadotCalls.send['v9140'],
	v9170Polkadot: polkadotCalls.send['v9170'],
	v9370Polkadot: polkadotCalls.send['v9370'],
	v9420Polkadot: polkadotCalls.send['v9420'],
}

export const teleportAssets = {
	name: 'XcmPallet.teleport_assets',
	v9140Polkadot: polkadotCalls.teleportAssets['v9140'],
	v9370Polkadot: polkadotCalls.teleportAssets['v9370'],
	v9420Polkadot: polkadotCalls.teleportAssets['v9420'],
}

export const reserveTransferAssets = {
	name: 'XcmPallet.reserve_transfer_assets',
	v9140Polkadot: polkadotCalls.reserveTransferAssets['v9140'],
	v9370Polkadot: polkadotCalls.reserveTransferAssets['v9370'],
	v9420Polkadot: polkadotCalls.reserveTransferAssets['v9420'],
}

export const execute = {
	name: 'XcmPallet.execute',
	v9140Polkadot: polkadotCalls.execute['v9140'],
	v9170Polkadot: polkadotCalls.execute['v9170'],
	v9291Polkadot: polkadotCalls.execute['v9291'],
	v9340Polkadot: polkadotCalls.execute['v9340'],
	v9370Polkadot: polkadotCalls.execute['v9370'],
	v9420Polkadot: polkadotCalls.execute['v9420'],
}

export const forceXcmVersion = {
	name: 'XcmPallet.force_xcm_version',
	v9140Polkadot: polkadotCalls.forceXcmVersion['v9140'],
	v9370Polkadot: polkadotCalls.forceXcmVersion['v9370'],
	v9420Polkadot: polkadotCalls.forceXcmVersion['v9420'],
	v1000001Polkadot: polkadotCalls.forceXcmVersion['v1000001'],
}

export const forceDefaultXcmVersion = {
	name: 'XcmPallet.force_default_xcm_version',
	v9140Polkadot: polkadotCalls.forceDefaultXcmVersion['v9140'],
}

export const forceSubscribeVersionNotify = {
	name: 'XcmPallet.force_subscribe_version_notify',
	v9140Polkadot: polkadotCalls.forceSubscribeVersionNotify['v9140'],
	v9370Polkadot: polkadotCalls.forceSubscribeVersionNotify['v9370'],
	v9420Polkadot: polkadotCalls.forceSubscribeVersionNotify['v9420'],
}

export const forceUnsubscribeVersionNotify = {
	name: 'XcmPallet.force_unsubscribe_version_notify',
	v9140Polkadot: polkadotCalls.forceUnsubscribeVersionNotify['v9140'],
	v9370Polkadot: polkadotCalls.forceUnsubscribeVersionNotify['v9370'],
	v9420Polkadot: polkadotCalls.forceUnsubscribeVersionNotify['v9420'],
}

export const limitedReserveTransferAssets = {
	name: 'XcmPallet.limited_reserve_transfer_assets',
	v9140Polkadot: polkadotCalls.limitedReserveTransferAssets['v9140'],
	v9370Polkadot: polkadotCalls.limitedReserveTransferAssets['v9370'],
	v9420Polkadot: polkadotCalls.limitedReserveTransferAssets['v9420'],
}

export const limitedTeleportAssets = {
	name: 'XcmPallet.limited_teleport_assets',
	v9140Polkadot: polkadotCalls.limitedTeleportAssets['v9140'],
	v9370Polkadot: polkadotCalls.limitedTeleportAssets['v9370'],
	v9420Polkadot: polkadotCalls.limitedTeleportAssets['v9420'],
}

export const forceSuspension = {
	name: 'XcmPallet.force_suspension',
	v9420Polkadot: polkadotCalls.forceSuspension['v9420'],
}
