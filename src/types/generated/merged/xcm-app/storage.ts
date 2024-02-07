import * as soraPolkadotStorage from '../../sora-polkadot/xcm-app/storage'
import * as soraKusamaStorage from '../../sora-kusama/xcm-app/storage'


export const assetIdToMultilocation = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.assetIdToMultilocation['v1'],
	v10SoraPolkadot: soraPolkadotStorage.assetIdToMultilocation['v10'],
	v7SoraKusama: soraKusamaStorage.assetIdToMultilocation['v7'],
}

export const multilocationToAssetId = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.multilocationToAssetId['v1'],
	v10SoraPolkadot: soraPolkadotStorage.multilocationToAssetId['v10'],
	v7SoraKusama: soraKusamaStorage.multilocationToAssetId['v7'],
}

export const bridgeAssetTrap = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.bridgeAssetTrap['v10'],
	v7SoraKusama: soraKusamaStorage.bridgeAssetTrap['v7'],
}

export const bridgeAssetTrapNonce = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.bridgeAssetTrapNonce['v10'],
	v7SoraKusama: soraKusamaStorage.bridgeAssetTrapNonce['v7'],
}

export const assetMinimumAmount = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.assetMinimumAmount['v10'],
	v7SoraKusama: soraKusamaStorage.assetMinimumAmount['v7'],
}

export const trappedDoneResult = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.trappedDoneResult['v10'],
	v7SoraKusama: soraKusamaStorage.trappedDoneResult['v7'],
}
