import * as soraPolkadotEvents from '../../sora-polkadot/xcm-app/events'
import * as soraKusamaEvents from '../../sora-kusama/xcm-app/events'


export const mappingCreated = {
	name: 'XCMApp.MappingCreated',
	v1SoraPolkadot: soraPolkadotEvents.mappingCreated['v1'],
	v10SoraPolkadot: soraPolkadotEvents.mappingCreated['v10'],
	v7SoraKusama: soraKusamaEvents.mappingCreated['v7'],
}

export const assetMappingChanged = {
	name: 'XCMApp.AssetMappingChanged',
	v1SoraPolkadot: soraPolkadotEvents.assetMappingChanged['v1'],
	v10SoraPolkadot: soraPolkadotEvents.assetMappingChanged['v10'],
	v7SoraKusama: soraKusamaEvents.assetMappingChanged['v7'],
}

export const multilocationtMappingChanged = {
	name: 'XCMApp.MultilocationtMappingChanged',
	v1SoraPolkadot: soraPolkadotEvents.multilocationtMappingChanged['v1'],
	v10SoraPolkadot: soraPolkadotEvents.multilocationtMappingChanged['v10'],
	v7SoraKusama: soraKusamaEvents.multilocationtMappingChanged['v7'],
}

export const mappingDeleted = {
	name: 'XCMApp.MappingDeleted',
	v1SoraPolkadot: soraPolkadotEvents.mappingDeleted['v1'],
	v10SoraPolkadot: soraPolkadotEvents.mappingDeleted['v10'],
	v7SoraKusama: soraKusamaEvents.mappingDeleted['v7'],
}

export const assetAddedToChannel = {
	name: 'XCMApp.AssetAddedToChannel',
	v1SoraPolkadot: soraPolkadotEvents.assetAddedToChannel['v1'],
	v10SoraPolkadot: soraPolkadotEvents.assetAddedToChannel['v10'],
	v7SoraKusama: soraKusamaEvents.assetAddedToChannel['v7'],
}

export const assetTransferred = {
	name: 'XCMApp.AssetTransferred',
	v10SoraPolkadot: soraPolkadotEvents.assetTransferred['v10'],
	v7SoraKusama: soraKusamaEvents.assetTransferred['v7'],
}

export const assetRefundSent = {
	name: 'XCMApp.AssetRefundSent',
	v10SoraPolkadot: soraPolkadotEvents.assetRefundSent['v10'],
	v7SoraKusama: soraKusamaEvents.assetRefundSent['v7'],
}

export const trappedMessageRefundSent = {
	name: 'XCMApp.TrappedMessageRefundSent',
	v10SoraPolkadot: soraPolkadotEvents.trappedMessageRefundSent['v10'],
	v7SoraKusama: soraKusamaEvents.trappedMessageRefundSent['v7'],
}

export const trappedMessageSent = {
	name: 'XCMApp.TrappedMessageSent',
	v10SoraPolkadot: soraPolkadotEvents.trappedMessageSent['v10'],
	v7SoraKusama: soraKusamaEvents.trappedMessageSent['v7'],
}

export const assetMinimumAmountSet = {
	name: 'XCMApp.AssetMinimumAmountSet',
	v10SoraPolkadot: soraPolkadotEvents.assetMinimumAmountSet['v10'],
	v7SoraKusama: soraKusamaEvents.assetMinimumAmountSet['v7'],
}

export const submittingToChannelError = {
	name: 'XCMApp.SubmittingToChannelError',
	v10SoraPolkadot: soraPolkadotEvents.submittingToChannelError['v10'],
	v7SoraKusama: soraKusamaEvents.submittingToChannelError['v7'],
}

export const trasferringAssetError = {
	name: 'XCMApp.TrasferringAssetError',
	v10SoraPolkadot: soraPolkadotEvents.trasferringAssetError['v10'],
	v7SoraKusama: soraKusamaEvents.trasferringAssetError['v7'],
}

export const multilocationMappingError = {
	name: 'XCMApp.MultilocationMappingError',
	v10SoraPolkadot: soraPolkadotEvents.multilocationMappingError['v10'],
	v7SoraKusama: soraKusamaEvents.multilocationMappingError['v7'],
}

export const assetIdMappingError = {
	name: 'XCMApp.AssetIdMappingError',
	v10SoraPolkadot: soraPolkadotEvents.assetIdMappingError['v10'],
	v7SoraKusama: soraKusamaEvents.assetIdMappingError['v7'],
}

export const multiAssetMappingError = {
	name: 'XCMApp.MultiAssetMappingError',
	v10SoraPolkadot: soraPolkadotEvents.multiAssetMappingError['v10'],
	v7SoraKusama: soraKusamaEvents.multiAssetMappingError['v7'],
}

export const bridgeAssetTrapped = {
	name: 'XCMApp.BridgeAssetTrapped',
	v10SoraPolkadot: soraPolkadotEvents.bridgeAssetTrapped['v10'],
	v7SoraKusama: soraKusamaEvents.bridgeAssetTrapped['v7'],
}

export const doneMessageTrapped = {
	name: 'XCMApp.DoneMessageTrapped',
	v10SoraPolkadot: soraPolkadotEvents.doneMessageTrapped['v10'],
	v7SoraKusama: soraKusamaEvents.doneMessageTrapped['v7'],
}
