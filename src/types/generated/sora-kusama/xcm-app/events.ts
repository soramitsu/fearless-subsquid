import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v7 from '../v7'

export const mappingCreated =  {
    name: 'XCMApp.MappingCreated',
    /**
     * Adding mapping has been performed
     * [Sora AssetId, XCM Multilocation]
     */
    v7: new EventType(
        'XCMApp.MappingCreated',
        sts.tuple([v7.H256, v7.V3MultiLocation])
    ),
}

export const assetMappingChanged =  {
    name: 'XCMApp.AssetMappingChanged',
    /**
     * Asset mapping change has been performed
     * [Sora AssetId, XCM Multilocation]
     */
    v7: new EventType(
        'XCMApp.AssetMappingChanged',
        sts.tuple([v7.H256, v7.V3MultiLocation])
    ),
}

export const multilocationtMappingChanged =  {
    name: 'XCMApp.MultilocationtMappingChanged',
    /**
     * Multilocation mapping change has been performed
     * [Sora AssetId, XCM Multilocation]
     */
    v7: new EventType(
        'XCMApp.MultilocationtMappingChanged',
        sts.tuple([v7.H256, v7.V3MultiLocation])
    ),
}

export const mappingDeleted =  {
    name: 'XCMApp.MappingDeleted',
    /**
     * Mapping delete has been performed
     * [Sora AssetId, XCM Multilocation]
     */
    v7: new EventType(
        'XCMApp.MappingDeleted',
        sts.tuple([v7.H256, v7.V3MultiLocation])
    ),
}

export const assetAddedToChannel =  {
    name: 'XCMApp.AssetAddedToChannel',
    /**
     * Asset Added to channel
     * [ParachainAppCall]
     */
    v7: new EventType(
        'XCMApp.AssetAddedToChannel',
        v7.ParachainAppCall
    ),
}

export const assetTransferred =  {
    name: 'XCMApp.AssetTransferred',
    /**
     * Asset transfered from this parachain
     * [From, To, AssedId, amount]
     */
    v7: new EventType(
        'XCMApp.AssetTransferred',
        sts.tuple([v7.AccountId32, v7.V3MultiLocation, v7.H256, sts.bigint()])
    ),
}

export const assetRefundSent =  {
    name: 'XCMApp.AssetRefundSent',
    /**
     * [To, AssetId, amount, MessageId]
     */
    v7: new EventType(
        'XCMApp.AssetRefundSent',
        sts.tuple([v7.H256, v7.AccountId32, v7.H256, sts.bigint()])
    ),
}

export const trappedMessageRefundSent =  {
    name: 'XCMApp.TrappedMessageRefundSent',
    /**
     * [To, AssetId, amount, MessageId]
     */
    v7: new EventType(
        'XCMApp.TrappedMessageRefundSent',
        sts.tuple([v7.H256, v7.AccountId32, v7.H256, sts.bigint()])
    ),
}

export const trappedMessageSent =  {
    name: 'XCMApp.TrappedMessageSent',
    /**
     * [To, AssetId, amount, MessageId]
     */
    v7: new EventType(
        'XCMApp.TrappedMessageSent',
        sts.tuple([v7.AccountId32, v7.H256, sts.bigint()])
    ),
}

export const assetMinimumAmountSet =  {
    name: 'XCMApp.AssetMinimumAmountSet',
    /**
     * [AssetId, amount]
     */
    v7: new EventType(
        'XCMApp.AssetMinimumAmountSet',
        sts.tuple([v7.H256, sts.bigint()])
    ),
}

export const submittingToChannelError =  {
    name: 'XCMApp.SubmittingToChannelError',
    /**
     * Error while submitting to outbound channel
     */
    v7: new EventType(
        'XCMApp.SubmittingToChannelError',
        sts.tuple([v7.DispatchError, v7.H256])
    ),
}

export const trasferringAssetError =  {
    name: 'XCMApp.TrasferringAssetError',
    /**
     * Error while trasferring XCM message to other chains
     */
    v7: new EventType(
        'XCMApp.TrasferringAssetError',
        sts.tuple([v7.DispatchError, v7.H256])
    ),
}

export const multilocationMappingError =  {
    name: 'XCMApp.MultilocationMappingError',
    /**
     * No mapping for MultiLocation
     */
    v7: new EventType(
        'XCMApp.MultilocationMappingError',
        v7.V3MultiLocation
    ),
}

export const assetIdMappingError =  {
    name: 'XCMApp.AssetIdMappingError',
    /**
     * No mapping for AssetId
     */
    v7: new EventType(
        'XCMApp.AssetIdMappingError',
        v7.H256
    ),
}

export const multiAssetMappingError =  {
    name: 'XCMApp.MultiAssetMappingError',
    /**
     * No mapping for MultiAsset
     */
    v7: new EventType(
        'XCMApp.MultiAssetMappingError',
        v7.V3MultiAsset
    ),
}

export const bridgeAssetTrapped =  {
    name: 'XCMApp.BridgeAssetTrapped',
    /**
     * Asset is trapped in XCM App due to Submitting to channel error
     * [Nonce, MessageId, AccountToSendFor, AssetId, Balance]
     */
    v7: new EventType(
        'XCMApp.BridgeAssetTrapped',
        sts.tuple([sts.bigint(), sts.option(() => v7.H256), v7.AccountId32, v7.H256, sts.bigint()])
    ),
}

export const doneMessageTrapped =  {
    name: 'XCMApp.DoneMessageTrapped',
    /**
     * Successful message is trapped in XCM App due to Submitting to channel error
     */
    v7: new EventType(
        'XCMApp.DoneMessageTrapped',
        v7.H256
    ),
}
