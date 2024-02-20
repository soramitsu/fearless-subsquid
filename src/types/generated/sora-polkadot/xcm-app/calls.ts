import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v10 from '../v10'

export const testXcmTransfer =  {
    name: 'XCMApp.test_xcm_transfer',
    v1: new CallType(
        'XCMApp.test_xcm_transfer',
        sts.struct({
            assetId: v1.H256,
            sender: v1.AccountId32,
            recipient: v1.VersionedMultiLocation,
            amount: sts.bigint(),
        })
    ),
}

export const transfer =  {
    name: 'XCMApp.transfer',
    v1: new CallType(
        'XCMApp.transfer',
        sts.struct({
            assetId: v1.H256,
            sender: v1.AccountId32,
            recipient: v1.VersionedMultiLocation,
            amount: sts.bigint(),
        })
    ),
    v10: new CallType(
        'XCMApp.transfer',
        sts.struct({
            assetId: v10.H256,
            sender: v10.AccountId32,
            recipient: v10.VersionedMultiLocation,
            amount: sts.bigint(),
        })
    ),
}

export const registerAsset =  {
    name: 'XCMApp.register_asset',
    v1: new CallType(
        'XCMApp.register_asset',
        sts.struct({
            assetId: v1.H256,
            multiasset: v1.V1AssetId,
            assetKind: v1.AssetKind,
        })
    ),
    v10: new CallType(
        'XCMApp.register_asset',
        sts.struct({
            assetId: v10.H256,
            multiasset: v10.V3AssetId,
            assetKind: v10.AssetKind,
            minimalXcmAmount: sts.bigint(),
        })
    ),
}

export const registerMapping =  {
    name: 'XCMApp.register_mapping',
    /**
     * Perform registration for mapping of an AssetId <-> Multilocation
     * 
     * - `origin`: the root account on whose behalf the transaction is being executed,
     * - `asset_id`: asset id in Sora Network,
     * - `multilocation`: XCM multilocation of an asset,
     */
    v1: new CallType(
        'XCMApp.register_mapping',
        sts.struct({
            assetId: v1.H256,
            multilocation: v1.V1MultiLocation,
        })
    ),
}

export const changeAssetMapping =  {
    name: 'XCMApp.change_asset_mapping',
    /**
     * Perform change of mapping of an AssetId -> Multilocation
     * 
     * - `origin`: the root account on whose behalf the transaction is being executed,
     * - `asset_id`: asset id in Sora Network,
     * - `new_multilocation`: new XCM multilocation of an asset,
     */
    v1: new CallType(
        'XCMApp.change_asset_mapping',
        sts.struct({
            assetId: v1.H256,
            newMultilocation: v1.V1MultiLocation,
        })
    ),
}

export const changeMultilocationMapping =  {
    name: 'XCMApp.change_multilocation_mapping',
    /**
     * Perform change of mapping of an Multilocation -> AssetId
     * 
     * - `origin`: the root account on whose behalf the transaction is being executed,
     * - `multilocation`: XCM multilocation of an asset,
     * - `new_asset_id`: new asset id in Sora Network,
     */
    v1: new CallType(
        'XCMApp.change_multilocation_mapping',
        sts.struct({
            multilocation: v1.V1MultiLocation,
            newAssetId: v1.H256,
        })
    ),
}

export const deleteMapping =  {
    name: 'XCMApp.delete_mapping',
    /**
     * Perform delete of mapping of an AssetId -> Multilocation
     * 
     * - `origin`: the root account on whose behalf the transaction is being executed,
     * - `asset_id`: asset id in Sora Network,
     */
    v1: new CallType(
        'XCMApp.delete_mapping',
        sts.struct({
            assetId: v1.H256,
        })
    ),
}

export const fakeTransfer =  {
    name: 'XCMApp.fake_transfer',
    v1: new CallType(
        'XCMApp.fake_transfer',
        sts.struct({
            accountId: v1.AccountId32,
            assetId: v1.H256,
            amount: sts.bigint(),
        })
    ),
}

export const tryClaimBridgeAsset =  {
    name: 'XCMApp.try_claim_bridge_asset',
    /**
     * Try Refund an asset trapped by bridge
     */
    v10: new CallType(
        'XCMApp.try_claim_bridge_asset',
        sts.struct({
            nonce: sts.bigint(),
        })
    ),
}

export const setAssetMinimumAmount =  {
    name: 'XCMApp.set_asset_minimum_amount',
    v10: new CallType(
        'XCMApp.set_asset_minimum_amount',
        sts.struct({
            assetId: v10.H256,
            minimalXcmAmount: sts.bigint(),
        })
    ),
}

export const sudoSendXcm =  {
    name: 'XCMApp.sudo_send_xcm',
    v10: new CallType(
        'XCMApp.sudo_send_xcm',
        sts.struct({
            dest: v10.VersionedMultiLocation,
            message: v10.VersionedXcm,
        })
    ),
}

export const sendXorToMainnet =  {
    name: 'XCMApp.send_xor_to_mainnet',
    v10: new CallType(
        'XCMApp.send_xor_to_mainnet',
        sts.struct({
            recipient: v10.AccountId32,
            amount: sts.bigint(),
        })
    ),
}
