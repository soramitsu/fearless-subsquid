import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v7 from '../v7'
import * as v9 from '../v9'

export const transfer =  {
    name: 'XCMApp.transfer',
    v7: new CallType(
        'XCMApp.transfer',
        sts.struct({
            assetId: v7.H256,
            sender: v7.AccountId32,
            recipient: v7.VersionedMultiLocation,
            amount: sts.bigint(),
        })
    ),
}

export const registerAsset =  {
    name: 'XCMApp.register_asset',
    v7: new CallType(
        'XCMApp.register_asset',
        sts.struct({
            assetId: v7.H256,
            multiasset: v7.V3AssetId,
            assetKind: v7.AssetKind,
            minimalXcmAmount: sts.bigint(),
        })
    ),
}

export const tryClaimBridgeAsset =  {
    name: 'XCMApp.try_claim_bridge_asset',
    /**
     * Try Refund an asset trapped by bridge
     */
    v7: new CallType(
        'XCMApp.try_claim_bridge_asset',
        sts.struct({
            nonce: sts.bigint(),
        })
    ),
}

export const setAssetMinimumAmount =  {
    name: 'XCMApp.set_asset_minimum_amount',
    v7: new CallType(
        'XCMApp.set_asset_minimum_amount',
        sts.struct({
            assetId: v7.H256,
            minimalXcmAmount: sts.bigint(),
        })
    ),
}

export const sudoSendXcm =  {
    name: 'XCMApp.sudo_send_xcm',
    v7: new CallType(
        'XCMApp.sudo_send_xcm',
        sts.struct({
            dest: v7.VersionedMultiLocation,
            message: v7.VersionedXcm,
        })
    ),
}

export const sendXorToMainnet =  {
    name: 'XCMApp.send_xor_to_mainnet',
    v9: new CallType(
        'XCMApp.send_xor_to_mainnet',
        sts.struct({
            recipient: v9.AccountId32,
            amount: sts.bigint(),
        })
    ),
}
