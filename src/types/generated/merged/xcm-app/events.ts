import * as soraPolkadotEvents from '../../sora-polkadot/xcm-app/events'
import * as soraKusamaEvents from '../../sora-kusama/xcm-app/events'


export const mappingCreated = {
	name: 'XCMApp.MappingCreated',
	soraPolkadotV1: soraPolkadotEvents.mappingCreated['v1'],
	soraPolkadotV10: soraPolkadotEvents.mappingCreated['v10'],
	soraKusamaV7: soraKusamaEvents.mappingCreated['v7'],
}

export const assetMappingChanged = {
	name: 'XCMApp.AssetMappingChanged',
	soraPolkadotV1: soraPolkadotEvents.assetMappingChanged['v1'],
	soraPolkadotV10: soraPolkadotEvents.assetMappingChanged['v10'],
	soraKusamaV7: soraKusamaEvents.assetMappingChanged['v7'],
}

export const multilocationtMappingChanged = {
	name: 'XCMApp.MultilocationtMappingChanged',
	soraPolkadotV1: soraPolkadotEvents.multilocationtMappingChanged['v1'],
	soraPolkadotV10: soraPolkadotEvents.multilocationtMappingChanged['v10'],
	soraKusamaV7: soraKusamaEvents.multilocationtMappingChanged['v7'],
}

export const mappingDeleted = {
	name: 'XCMApp.MappingDeleted',
	soraPolkadotV1: soraPolkadotEvents.mappingDeleted['v1'],
	soraPolkadotV10: soraPolkadotEvents.mappingDeleted['v10'],
	soraKusamaV7: soraKusamaEvents.mappingDeleted['v7'],
}

export const assetAddedToChannel = {
	name: 'XCMApp.AssetAddedToChannel',
	soraPolkadotV1: soraPolkadotEvents.assetAddedToChannel['v1'],
	soraPolkadotV10: soraPolkadotEvents.assetAddedToChannel['v10'],
	soraKusamaV7: soraKusamaEvents.assetAddedToChannel['v7'],
}

export const assetTransferred = {
	name: 'XCMApp.AssetTransferred',
	soraPolkadotV10: soraPolkadotEvents.assetTransferred['v10'],
	soraKusamaV7: soraKusamaEvents.assetTransferred['v7'],
}

export const assetRefundSent = {
	name: 'XCMApp.AssetRefundSent',
	soraPolkadotV10: soraPolkadotEvents.assetRefundSent['v10'],
	soraKusamaV7: soraKusamaEvents.assetRefundSent['v7'],
}

export const trappedMessageRefundSent = {
	name: 'XCMApp.TrappedMessageRefundSent',
	soraPolkadotV10: soraPolkadotEvents.trappedMessageRefundSent['v10'],
	soraKusamaV7: soraKusamaEvents.trappedMessageRefundSent['v7'],
}

export const trappedMessageSent = {
	name: 'XCMApp.TrappedMessageSent',
	soraPolkadotV10: soraPolkadotEvents.trappedMessageSent['v10'],
	soraKusamaV7: soraKusamaEvents.trappedMessageSent['v7'],
}

export const assetMinimumAmountSet = {
	name: 'XCMApp.AssetMinimumAmountSet',
	soraPolkadotV10: soraPolkadotEvents.assetMinimumAmountSet['v10'],
	soraKusamaV7: soraKusamaEvents.assetMinimumAmountSet['v7'],
}

export const submittingToChannelError = {
	name: 'XCMApp.SubmittingToChannelError',
	soraPolkadotV10: soraPolkadotEvents.submittingToChannelError['v10'],
	soraKusamaV7: soraKusamaEvents.submittingToChannelError['v7'],
}

export const trasferringAssetError = {
	name: 'XCMApp.TrasferringAssetError',
	soraPolkadotV10: soraPolkadotEvents.trasferringAssetError['v10'],
	soraKusamaV7: soraKusamaEvents.trasferringAssetError['v7'],
}

export const multilocationMappingError = {
	name: 'XCMApp.MultilocationMappingError',
	soraPolkadotV10: soraPolkadotEvents.multilocationMappingError['v10'],
	soraKusamaV7: soraKusamaEvents.multilocationMappingError['v7'],
}

export const assetIdMappingError = {
	name: 'XCMApp.AssetIdMappingError',
	soraPolkadotV10: soraPolkadotEvents.assetIdMappingError['v10'],
	soraKusamaV7: soraKusamaEvents.assetIdMappingError['v7'],
}

export const multiAssetMappingError = {
	name: 'XCMApp.MultiAssetMappingError',
	soraPolkadotV10: soraPolkadotEvents.multiAssetMappingError['v10'],
	soraKusamaV7: soraKusamaEvents.multiAssetMappingError['v7'],
}

export const bridgeAssetTrapped = {
	name: 'XCMApp.BridgeAssetTrapped',
	soraPolkadotV10: soraPolkadotEvents.bridgeAssetTrapped['v10'],
	soraKusamaV7: soraKusamaEvents.bridgeAssetTrapped['v7'],
}

export const doneMessageTrapped = {
	name: 'XCMApp.DoneMessageTrapped',
	soraPolkadotV10: soraPolkadotEvents.doneMessageTrapped['v10'],
	soraKusamaV7: soraKusamaEvents.doneMessageTrapped['v7'],
}
