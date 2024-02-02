import * as soraPolkadotStorage from '../../sora-polkadot/xcm-app/storage'
import * as soraKusamaStorage from '../../sora-kusama/xcm-app/storage'


export const assetIdToMultilocation = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.assetIdToMultilocation['v1'],
	soraPolkadotV10: soraPolkadotStorage.assetIdToMultilocation['v10'],
	soraKusamaV7: soraKusamaStorage.assetIdToMultilocation['v7'],
}

export const multilocationToAssetId = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.multilocationToAssetId['v1'],
	soraPolkadotV10: soraPolkadotStorage.multilocationToAssetId['v10'],
	soraKusamaV7: soraKusamaStorage.multilocationToAssetId['v7'],
}

export const bridgeAssetTrap = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.bridgeAssetTrap['v10'],
	soraKusamaV7: soraKusamaStorage.bridgeAssetTrap['v7'],
}

export const bridgeAssetTrapNonce = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.bridgeAssetTrapNonce['v10'],
	soraKusamaV7: soraKusamaStorage.bridgeAssetTrapNonce['v7'],
}

export const assetMinimumAmount = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.assetMinimumAmount['v10'],
	soraKusamaV7: soraKusamaStorage.assetMinimumAmount['v7'],
}

export const trappedDoneResult = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.trappedDoneResult['v10'],
	soraKusamaV7: soraKusamaStorage.trappedDoneResult['v7'],
}
