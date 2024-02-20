import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v10 from '../v10'

export const mappingCreated =  {
    name: 'XCMApp.MappingCreated',
    /**
     * Adding mapping has been performed
     * [Sora AssetId, XCM Multilocation]
     */
    v1: new EventType(
        'XCMApp.MappingCreated',
        sts.tuple([v1.H256, v1.V1MultiLocation])
    ),
    /**
     * Adding mapping has been performed
     * [Sora AssetId, XCM Multilocation]
     */
    v10: new EventType(
        'XCMApp.MappingCreated',
        sts.tuple([v10.H256, v10.V3MultiLocation])
    ),
}

export const assetMappingChanged =  {
    name: 'XCMApp.AssetMappingChanged',
    /**
     * Asset mapping change has been performed
     * [Sora AssetId, XCM Multilocation]
     */
    v1: new EventType(
        'XCMApp.AssetMappingChanged',
        sts.tuple([v1.H256, v1.V1MultiLocation])
    ),
    /**
     * Asset mapping change has been performed
     * [Sora AssetId, XCM Multilocation]
     */
    v10: new EventType(
        'XCMApp.AssetMappingChanged',
        sts.tuple([v10.H256, v10.V3MultiLocation])
    ),
}

export const multilocationtMappingChanged =  {
    name: 'XCMApp.MultilocationtMappingChanged',
    /**
     * Multilocation mapping change has been performed
     * [Sora AssetId, XCM Multilocation]
     */
    v1: new EventType(
        'XCMApp.MultilocationtMappingChanged',
        sts.tuple([v1.H256, v1.V1MultiLocation])
    ),
    /**
     * Multilocation mapping change has been performed
     * [Sora AssetId, XCM Multilocation]
     */
    v10: new EventType(
        'XCMApp.MultilocationtMappingChanged',
        sts.tuple([v10.H256, v10.V3MultiLocation])
    ),
}

export const mappingDeleted =  {
    name: 'XCMApp.MappingDeleted',
    /**
     * Mapping delete has been performed
     * [Sora AssetId, XCM Multilocation]
     */
    v1: new EventType(
        'XCMApp.MappingDeleted',
        sts.tuple([v1.H256, v1.V1MultiLocation])
    ),
    /**
     * Mapping delete has been performed
     * [Sora AssetId, XCM Multilocation]
     */
    v10: new EventType(
        'XCMApp.MappingDeleted',
        sts.tuple([v10.H256, v10.V3MultiLocation])
    ),
}

export const assetAddedToChannel =  {
    name: 'XCMApp.AssetAddedToChannel',
    /**
     * Asset Added to channel
     * [Currency Id, amount]
     */
    v1: new EventType(
        'XCMApp.AssetAddedToChannel',
        v1.SubstrateAppMessage
    ),
    /**
     * Asset Added to channel
     * [ParachainAppCall]
     */
    v10: new EventType(
        'XCMApp.AssetAddedToChannel',
        v10.ParachainAppCall
    ),
}

export const assetTransferred =  {
    name: 'XCMApp.AssetTransferred',
    /**
     * Asset transfered from this parachain
     * [From, To, AssedId, amount]
     */
    v10: new EventType(
        'XCMApp.AssetTransferred',
        sts.tuple([v10.AccountId32, v10.V3MultiLocation, v10.H256, sts.bigint()])
    ),
}

export const assetRefundSent =  {
    name: 'XCMApp.AssetRefundSent',
    /**
     * [To, AssetId, amount, MessageId]
     */
    v10: new EventType(
        'XCMApp.AssetRefundSent',
        sts.tuple([v10.H256, v10.AccountId32, v10.H256, sts.bigint()])
    ),
}

export const trappedMessageRefundSent =  {
    name: 'XCMApp.TrappedMessageRefundSent',
    /**
     * [To, AssetId, amount, MessageId]
     */
    v10: new EventType(
        'XCMApp.TrappedMessageRefundSent',
        sts.tuple([v10.H256, v10.AccountId32, v10.H256, sts.bigint()])
    ),
}

export const trappedMessageSent =  {
    name: 'XCMApp.TrappedMessageSent',
    /**
     * [To, AssetId, amount, MessageId]
     */
    v10: new EventType(
        'XCMApp.TrappedMessageSent',
        sts.tuple([v10.AccountId32, v10.H256, sts.bigint()])
    ),
}

export const assetMinimumAmountSet =  {
    name: 'XCMApp.AssetMinimumAmountSet',
    /**
     * [AssetId, amount]
     */
    v10: new EventType(
        'XCMApp.AssetMinimumAmountSet',
        sts.tuple([v10.H256, sts.bigint()])
    ),
}

export const submittingToChannelError =  {
    name: 'XCMApp.SubmittingToChannelError',
    /**
     * Error while submitting to outbound channel
     */
    v10: new EventType(
        'XCMApp.SubmittingToChannelError',
        sts.tuple([v10.DispatchError, v10.H256])
    ),
}

export const trasferringAssetError =  {
    name: 'XCMApp.TrasferringAssetError',
    /**
     * Error while trasferring XCM message to other chains
     */
    v10: new EventType(
        'XCMApp.TrasferringAssetError',
        sts.tuple([v10.DispatchError, v10.H256])
    ),
}

export const multilocationMappingError =  {
    name: 'XCMApp.MultilocationMappingError',
    /**
     * No mapping for MultiLocation
     */
    v10: new EventType(
        'XCMApp.MultilocationMappingError',
        v10.V3MultiLocation
    ),
}

export const assetIdMappingError =  {
    name: 'XCMApp.AssetIdMappingError',
    /**
     * No mapping for AssetId
     */
    v10: new EventType(
        'XCMApp.AssetIdMappingError',
        v10.H256
    ),
}

export const multiAssetMappingError =  {
    name: 'XCMApp.MultiAssetMappingError',
    /**
     * No mapping for MultiAsset
     */
    v10: new EventType(
        'XCMApp.MultiAssetMappingError',
        v10.V3MultiAsset
    ),
}

export const bridgeAssetTrapped =  {
    name: 'XCMApp.BridgeAssetTrapped',
    /**
     * Asset is trapped in XCM App due to Submitting to channel error
     * [Nonce, MessageId, AccountToSendFor, AssetId, Balance]
     */
    v10: new EventType(
        'XCMApp.BridgeAssetTrapped',
        sts.tuple([sts.bigint(), sts.option(() => v10.H256), v10.AccountId32, v10.H256, sts.bigint()])
    ),
}

export const doneMessageTrapped =  {
    name: 'XCMApp.DoneMessageTrapped',
    /**
     * Successful message is trapped in XCM App due to Submitting to channel error
     */
    v10: new EventType(
        'XCMApp.DoneMessageTrapped',
        v10.H256
    ),
}
