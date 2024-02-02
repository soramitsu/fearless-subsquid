import * as soraPolkadotCalls from '../../sora-polkadot/xcm-app/calls'
import * as soraKusamaCalls from '../../sora-kusama/xcm-app/calls'


export const testXcmTransfer = {
	name: 'XCMApp.test_xcm_transfer',
	soraPolkadotV1: soraPolkadotCalls.testXcmTransfer['v1'],
}

export const transfer = {
	name: 'XCMApp.transfer',
	soraPolkadotV1: soraPolkadotCalls.transfer['v1'],
	soraPolkadotV10: soraPolkadotCalls.transfer['v10'],
	soraKusamaV7: soraKusamaCalls.transfer['v7'],
}

export const registerAsset = {
	name: 'XCMApp.register_asset',
	soraPolkadotV1: soraPolkadotCalls.registerAsset['v1'],
	soraPolkadotV10: soraPolkadotCalls.registerAsset['v10'],
	soraKusamaV7: soraKusamaCalls.registerAsset['v7'],
}

export const registerMapping = {
	name: 'XCMApp.register_mapping',
	soraPolkadotV1: soraPolkadotCalls.registerMapping['v1'],
}

export const changeAssetMapping = {
	name: 'XCMApp.change_asset_mapping',
	soraPolkadotV1: soraPolkadotCalls.changeAssetMapping['v1'],
}

export const changeMultilocationMapping = {
	name: 'XCMApp.change_multilocation_mapping',
	soraPolkadotV1: soraPolkadotCalls.changeMultilocationMapping['v1'],
}

export const deleteMapping = {
	name: 'XCMApp.delete_mapping',
	soraPolkadotV1: soraPolkadotCalls.deleteMapping['v1'],
}

export const fakeTransfer = {
	name: 'XCMApp.fake_transfer',
	soraPolkadotV1: soraPolkadotCalls.fakeTransfer['v1'],
}

export const tryClaimBridgeAsset = {
	name: 'XCMApp.try_claim_bridge_asset',
	soraPolkadotV10: soraPolkadotCalls.tryClaimBridgeAsset['v10'],
	soraKusamaV7: soraKusamaCalls.tryClaimBridgeAsset['v7'],
}

export const setAssetMinimumAmount = {
	name: 'XCMApp.set_asset_minimum_amount',
	soraPolkadotV10: soraPolkadotCalls.setAssetMinimumAmount['v10'],
	soraKusamaV7: soraKusamaCalls.setAssetMinimumAmount['v7'],
}

export const sudoSendXcm = {
	name: 'XCMApp.sudo_send_xcm',
	soraPolkadotV10: soraPolkadotCalls.sudoSendXcm['v10'],
	soraKusamaV7: soraKusamaCalls.sudoSendXcm['v7'],
}

export const sendXorToMainnet = {
	name: 'XCMApp.send_xor_to_mainnet',
	soraPolkadotV10: soraPolkadotCalls.sendXorToMainnet['v10'],
	soraKusamaV9: soraKusamaCalls.sendXorToMainnet['v9'],
}
