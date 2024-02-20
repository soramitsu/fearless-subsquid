import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1 from '../v1'

export const send =  {
    name: 'PolkadotXcm.send',
    v1: new CallType(
        'PolkadotXcm.send',
        sts.struct({
            dest: v1.VersionedMultiLocation,
            message: v1.VersionedXcm,
        })
    ),
}

export const teleportAssets =  {
    name: 'PolkadotXcm.teleport_assets',
    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
     * fee-weight is calculated locally and thus remote weights are assumed to be equal to
     * local weights.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
     *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
     */
    v1: new CallType(
        'PolkadotXcm.teleport_assets',
        sts.struct({
            dest: v1.VersionedMultiLocation,
            beneficiary: v1.VersionedMultiLocation,
            assets: v1.VersionedMultiAssets,
            feeAssetItem: sts.number(),
        })
    ),
}

export const reserveTransferAssets =  {
    name: 'PolkadotXcm.reserve_transfer_assets',
    /**
     * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
     * a notification XCM.
     * 
     * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
     * fee-weight is calculated locally and thus remote weights are assumed to be equal to
     * local weights.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
     *   `dest` side.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    v1: new CallType(
        'PolkadotXcm.reserve_transfer_assets',
        sts.struct({
            dest: v1.VersionedMultiLocation,
            beneficiary: v1.VersionedMultiLocation,
            assets: v1.VersionedMultiAssets,
            feeAssetItem: sts.number(),
        })
    ),
}

export const execute =  {
    name: 'PolkadotXcm.execute',
    /**
     * Execute an XCM message from a local, signed, origin.
     * 
     * An event is deposited indicating whether `msg` could be executed completely or only
     * partially.
     * 
     * No more than `max_weight` will be used in its attempted execution. If this is less than the
     * maximum amount of weight that the message could take to be executed, then no execution
     * attempt will be made.
     * 
     * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
     * to completion; only that *some* of it was executed.
     */
    v1: new CallType(
        'PolkadotXcm.execute',
        sts.struct({
            message: v1.Type_198,
            maxWeight: sts.bigint(),
        })
    ),
}

export const forceXcmVersion =  {
    name: 'PolkadotXcm.force_xcm_version',
    /**
     * Extoll that a particular destination can be communicated with through a particular
     * version of XCM.
     * 
     * - `origin`: Must be Root.
     * - `location`: The destination that is being described.
     * - `xcm_version`: The latest version of XCM that `location` supports.
     */
    v1: new CallType(
        'PolkadotXcm.force_xcm_version',
        sts.struct({
            location: v1.V1MultiLocation,
            xcmVersion: sts.number(),
        })
    ),
}

export const forceDefaultXcmVersion =  {
    name: 'PolkadotXcm.force_default_xcm_version',
    /**
     * Set a safe XCM version (the version that XCM should be encoded with if the most recent
     * version a destination can accept is unknown).
     * 
     * - `origin`: Must be Root.
     * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
     */
    v1: new CallType(
        'PolkadotXcm.force_default_xcm_version',
        sts.struct({
            maybeXcmVersion: sts.option(() => sts.number()),
        })
    ),
}

export const forceSubscribeVersionNotify =  {
    name: 'PolkadotXcm.force_subscribe_version_notify',
    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    v1: new CallType(
        'PolkadotXcm.force_subscribe_version_notify',
        sts.struct({
            location: v1.VersionedMultiLocation,
        })
    ),
}

export const forceUnsubscribeVersionNotify =  {
    name: 'PolkadotXcm.force_unsubscribe_version_notify',
    /**
     * Require that a particular destination should no longer notify us regarding any XCM
     * version changes.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we are currently subscribed for XCM version
     *   notifications which we no longer desire.
     */
    v1: new CallType(
        'PolkadotXcm.force_unsubscribe_version_notify',
        sts.struct({
            location: v1.VersionedMultiLocation,
        })
    ),
}

export const limitedReserveTransferAssets =  {
    name: 'PolkadotXcm.limited_reserve_transfer_assets',
    /**
     * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
     * a notification XCM.
     * 
     * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
     *   `dest` side.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    v1: new CallType(
        'PolkadotXcm.limited_reserve_transfer_assets',
        sts.struct({
            dest: v1.VersionedMultiLocation,
            beneficiary: v1.VersionedMultiLocation,
            assets: v1.VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: v1.V2WeightLimit,
        })
    ),
}

export const limitedTeleportAssets =  {
    name: 'PolkadotXcm.limited_teleport_assets',
    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
     *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    v1: new CallType(
        'PolkadotXcm.limited_teleport_assets',
        sts.struct({
            dest: v1.VersionedMultiLocation,
            beneficiary: v1.VersionedMultiLocation,
            assets: v1.VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: v1.V2WeightLimit,
        })
    ),
}
