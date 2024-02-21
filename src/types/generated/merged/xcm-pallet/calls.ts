import * as kusamaCalls from '../../kusama/xcm-pallet/calls'


export const send = {
	name: 'XcmPallet.send',
	v9010Kusama: kusamaCalls.send['v9010'],
	v9100Kusama: kusamaCalls.send['v9100'],
	v9111Kusama: kusamaCalls.send['v9111'],
	v9160Kusama: kusamaCalls.send['v9160'],
	v9370Kusama: kusamaCalls.send['v9370'],
	v9381Kusama: kusamaCalls.send['v9381'],
}

export const teleportAssets = {
	name: 'XcmPallet.teleport_assets',
	v9010Kusama: kusamaCalls.teleportAssets['v9010'],
	v9100Kusama: kusamaCalls.teleportAssets['v9100'],
	v9111Kusama: kusamaCalls.teleportAssets['v9111'],
	v9370Kusama: kusamaCalls.teleportAssets['v9370'],
	v9381Kusama: kusamaCalls.teleportAssets['v9381'],
}

export const execute = {
	name: 'XcmPallet.execute',
	v9010Kusama: kusamaCalls.execute['v9010'],
	v9100Kusama: kusamaCalls.execute['v9100'],
	v9111Kusama: kusamaCalls.execute['v9111'],
	v9160Kusama: kusamaCalls.execute['v9160'],
	v9291Kusama: kusamaCalls.execute['v9291'],
	v9320Kusama: kusamaCalls.execute['v9320'],
	v9370Kusama: kusamaCalls.execute['v9370'],
	v9381Kusama: kusamaCalls.execute['v9381'],
}

export const reserveTransferAssets = {
	name: 'XcmPallet.reserve_transfer_assets',
	v9030Kusama: kusamaCalls.reserveTransferAssets['v9030'],
	v9100Kusama: kusamaCalls.reserveTransferAssets['v9100'],
	v9111Kusama: kusamaCalls.reserveTransferAssets['v9111'],
	v9370Kusama: kusamaCalls.reserveTransferAssets['v9370'],
	v9381Kusama: kusamaCalls.reserveTransferAssets['v9381'],
}

export const forceXcmVersion = {
	name: 'XcmPallet.force_xcm_version',
	v9111Kusama: kusamaCalls.forceXcmVersion['v9111'],
	v9370Kusama: kusamaCalls.forceXcmVersion['v9370'],
	v9381Kusama: kusamaCalls.forceXcmVersion['v9381'],
	v1000000Kusama: kusamaCalls.forceXcmVersion['v1000000'],
}

export const forceDefaultXcmVersion = {
	name: 'XcmPallet.force_default_xcm_version',
	v9111Kusama: kusamaCalls.forceDefaultXcmVersion['v9111'],
}

export const forceSubscribeVersionNotify = {
	name: 'XcmPallet.force_subscribe_version_notify',
	v9111Kusama: kusamaCalls.forceSubscribeVersionNotify['v9111'],
	v9370Kusama: kusamaCalls.forceSubscribeVersionNotify['v9370'],
	v9381Kusama: kusamaCalls.forceSubscribeVersionNotify['v9381'],
}

export const forceUnsubscribeVersionNotify = {
	name: 'XcmPallet.force_unsubscribe_version_notify',
	v9111Kusama: kusamaCalls.forceUnsubscribeVersionNotify['v9111'],
	v9370Kusama: kusamaCalls.forceUnsubscribeVersionNotify['v9370'],
	v9381Kusama: kusamaCalls.forceUnsubscribeVersionNotify['v9381'],
}

export const limitedReserveTransferAssets = {
	name: 'XcmPallet.limited_reserve_transfer_assets',
	v9122Kusama: kusamaCalls.limitedReserveTransferAssets['v9122'],
	v9370Kusama: kusamaCalls.limitedReserveTransferAssets['v9370'],
	v9381Kusama: kusamaCalls.limitedReserveTransferAssets['v9381'],
}

export const limitedTeleportAssets = {
	name: 'XcmPallet.limited_teleport_assets',
	v9122Kusama: kusamaCalls.limitedTeleportAssets['v9122'],
	v9370Kusama: kusamaCalls.limitedTeleportAssets['v9370'],
	v9381Kusama: kusamaCalls.limitedTeleportAssets['v9381'],
}

export const forceSuspension = {
	name: 'XcmPallet.force_suspension',
	v9420Kusama: kusamaCalls.forceSuspension['v9420'],
}
