import * as soraPolkadotCalls from '../../sora-polkadot/xcm-app/calls'
import * as soraKusamaCalls from '../../sora-kusama/xcm-app/calls'


export const testXcmTransfer = {
	name: 'XCMApp.test_xcm_transfer',
	v1SoraPolkadot: soraPolkadotCalls.testXcmTransfer['v1'],
}

export const transfer = {
	name: 'XCMApp.transfer',
	v1SoraPolkadot: soraPolkadotCalls.transfer['v1'],
	v10SoraPolkadot: soraPolkadotCalls.transfer['v10'],
	v7SoraKusama: soraKusamaCalls.transfer['v7'],
}

export const registerAsset = {
	name: 'XCMApp.register_asset',
	v1SoraPolkadot: soraPolkadotCalls.registerAsset['v1'],
	v10SoraPolkadot: soraPolkadotCalls.registerAsset['v10'],
	v7SoraKusama: soraKusamaCalls.registerAsset['v7'],
}

export const registerMapping = {
	name: 'XCMApp.register_mapping',
	v1SoraPolkadot: soraPolkadotCalls.registerMapping['v1'],
}

export const changeAssetMapping = {
	name: 'XCMApp.change_asset_mapping',
	v1SoraPolkadot: soraPolkadotCalls.changeAssetMapping['v1'],
}

export const changeMultilocationMapping = {
	name: 'XCMApp.change_multilocation_mapping',
	v1SoraPolkadot: soraPolkadotCalls.changeMultilocationMapping['v1'],
}

export const deleteMapping = {
	name: 'XCMApp.delete_mapping',
	v1SoraPolkadot: soraPolkadotCalls.deleteMapping['v1'],
}

export const fakeTransfer = {
	name: 'XCMApp.fake_transfer',
	v1SoraPolkadot: soraPolkadotCalls.fakeTransfer['v1'],
}

export const tryClaimBridgeAsset = {
	name: 'XCMApp.try_claim_bridge_asset',
	v10SoraPolkadot: soraPolkadotCalls.tryClaimBridgeAsset['v10'],
	v7SoraKusama: soraKusamaCalls.tryClaimBridgeAsset['v7'],
}

export const setAssetMinimumAmount = {
	name: 'XCMApp.set_asset_minimum_amount',
	v10SoraPolkadot: soraPolkadotCalls.setAssetMinimumAmount['v10'],
	v7SoraKusama: soraKusamaCalls.setAssetMinimumAmount['v7'],
}

export const sudoSendXcm = {
	name: 'XCMApp.sudo_send_xcm',
	v10SoraPolkadot: soraPolkadotCalls.sudoSendXcm['v10'],
	v7SoraKusama: soraKusamaCalls.sudoSendXcm['v7'],
}

export const sendXorToMainnet = {
	name: 'XCMApp.send_xor_to_mainnet',
	v10SoraPolkadot: soraPolkadotCalls.sendXorToMainnet['v10'],
	v9SoraKusama: soraKusamaCalls.sendXorToMainnet['v9'],
}
