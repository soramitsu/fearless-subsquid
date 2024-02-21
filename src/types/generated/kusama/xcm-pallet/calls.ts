import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v9010 from '../v9010'
import * as v9030 from '../v9030'
import * as v9100 from '../v9100'
import * as v9111 from '../v9111'
import * as v9122 from '../v9122'
import * as v9160 from '../v9160'
import * as v9291 from '../v9291'
import * as v9320 from '../v9320'
import * as v9370 from '../v9370'
import * as v9381 from '../v9381'
import * as v1000000 from '../v1000000'

export const send =  {
    name: 'XcmPallet.send',
    v9010: new CallType(
        'XcmPallet.send',
        sts.struct({
            dest: v9010.MultiLocation,
            message: v9010.Xcm,
        })
    ),
    v9100: new CallType(
        'XcmPallet.send',
        sts.struct({
            dest: v9100.VersionedMultiLocation,
            message: v9100.VersionedXcm,
        })
    ),
    v9111: new CallType(
        'XcmPallet.send',
        sts.struct({
            dest: v9111.VersionedMultiLocation,
            message: v9111.VersionedXcm,
        })
    ),
    v9160: new CallType(
        'XcmPallet.send',
        sts.struct({
            dest: v9160.VersionedMultiLocation,
            message: v9160.VersionedXcm,
        })
    ),
    v9370: new CallType(
        'XcmPallet.send',
        sts.struct({
            dest: v9370.VersionedMultiLocation,
            message: v9370.VersionedXcm,
        })
    ),
    v9381: new CallType(
        'XcmPallet.send',
        sts.struct({
            dest: v9381.VersionedMultiLocation,
            message: v9381.VersionedXcm,
        })
    ),
}

export const teleportAssets =  {
    name: 'XcmPallet.teleport_assets',
    /**
     *  Teleport some assets from the local chain to some destination chain.
     * 
     *  - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     *  - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *    from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     *  - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *    an `AccountId32` value.
     *  - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
     *    `dest` side.
     *  - `dest_weight`: Equal to the total weight on `dest` of the XCM message
     *    `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
     */
    v9010: new CallType(
        'XcmPallet.teleport_assets',
        sts.struct({
            dest: v9010.MultiLocation,
            beneficiary: v9010.MultiLocation,
            assets: sts.array(() => v9010.MultiAsset),
            destWeight: v9010.Weight,
        })
    ),
    /**
     *  Teleport some assets from the local chain to some destination chain.
     * 
     *  Fee payment on the destination side is made from the first asset listed in the `assets` vector.
     * 
     *  - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     *  - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *    from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     *  - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *    an `AccountId32` value.
     *  - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *    `dest` side. May not be empty.
     *  - `dest_weight`: Equal to the total weight on `dest` of the XCM message
     *    `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
     */
    v9100: new CallType(
        'XcmPallet.teleport_assets',
        sts.struct({
            dest: v9100.VersionedMultiLocation,
            beneficiary: v9100.VersionedMultiLocation,
            assets: v9100.VersionedMultiAssets,
            feeAssetItem: sts.number(),
            destWeight: v9100.Weight,
        })
    ),
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
     */
    v9111: new CallType(
        'XcmPallet.teleport_assets',
        sts.struct({
            dest: v9111.VersionedMultiLocation,
            beneficiary: v9111.VersionedMultiLocation,
            assets: v9111.VersionedMultiAssets,
            feeAssetItem: sts.number(),
        })
    ),
    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    v9370: new CallType(
        'XcmPallet.teleport_assets',
        sts.struct({
            dest: v9370.VersionedMultiLocation,
            beneficiary: v9370.VersionedMultiLocation,
            assets: v9370.VersionedMultiAssets,
            feeAssetItem: sts.number(),
        })
    ),
    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    v9381: new CallType(
        'XcmPallet.teleport_assets',
        sts.struct({
            dest: v9381.VersionedMultiLocation,
            beneficiary: v9381.VersionedMultiLocation,
            assets: v9381.VersionedMultiAssets,
            feeAssetItem: sts.number(),
        })
    ),
}

export const execute =  {
    name: 'XcmPallet.execute',
    /**
     *  Execute an XCM message from a local, signed, origin.
     * 
     *  An event is deposited indicating whether `msg` could be executed completely or only
     *  partially.
     * 
     *  No more than `max_weight` will be used in its attempted execution. If this is less than the
     *  maximum amount of weight that the message could take to be executed, then no execution
     *  attempt will be made.
     * 
     *  NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
     *  to completion; only that *some* of it was executed.
     */
    v9010: new CallType(
        'XcmPallet.execute',
        sts.struct({
            message: v9010.Xcm,
            maxWeight: v9010.Weight,
        })
    ),
    /**
     *  Execute an XCM message from a local, signed, origin.
     * 
     *  An event is deposited indicating whether `msg` could be executed completely or only
     *  partially.
     * 
     *  No more than `max_weight` will be used in its attempted execution. If this is less than the
     *  maximum amount of weight that the message could take to be executed, then no execution
     *  attempt will be made.
     * 
     *  NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
     *  to completion; only that *some* of it was executed.
     */
    v9100: new CallType(
        'XcmPallet.execute',
        sts.struct({
            message: v9100.VersionedXcm,
            maxWeight: v9100.Weight,
        })
    ),
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
    v9111: new CallType(
        'XcmPallet.execute',
        sts.struct({
            message: v9111.Type_513,
            maxWeight: sts.bigint(),
        })
    ),
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
    v9160: new CallType(
        'XcmPallet.execute',
        sts.struct({
            message: v9160.Type_529,
            maxWeight: sts.bigint(),
        })
    ),
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
    v9291: new CallType(
        'XcmPallet.execute',
        sts.struct({
            message: v9291.Type_553,
            maxWeight: v9291.Weight,
        })
    ),
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
    v9320: new CallType(
        'XcmPallet.execute',
        sts.struct({
            message: v9320.Type_424,
            maxWeight: sts.bigint(),
        })
    ),
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
    v9370: new CallType(
        'XcmPallet.execute',
        sts.struct({
            message: v9370.Type_425,
            maxWeight: sts.bigint(),
        })
    ),
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
    v9381: new CallType(
        'XcmPallet.execute',
        sts.struct({
            message: v9381.Type_440,
            maxWeight: v9381.Weight,
        })
    ),
}

export const reserveTransferAssets =  {
    name: 'XcmPallet.reserve_transfer_assets',
    /**
     *  Transfer some assets from the local chain to the sovereign account of a destination chain and forward
     *  a notification XCM.
     * 
     *  - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     *  - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *    from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     *  - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *    an `AccountId32` value.
     *  - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
     *    `dest` side.
     *  - `dest_weight`: Equal to the total weight on `dest` of the XCM message
     *    `ReserveAssetDeposit { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
     */
    v9030: new CallType(
        'XcmPallet.reserve_transfer_assets',
        sts.struct({
            dest: v9030.MultiLocation,
            beneficiary: v9030.MultiLocation,
            assets: sts.array(() => v9030.MultiAsset),
            destWeight: v9030.Weight,
        })
    ),
    /**
     *  Transfer some assets from the local chain to the sovereign account of a destination chain and forward
     *  a notification XCM.
     * 
     *  Fee payment on the destination side is made from the first asset listed in the `assets` vector.
     * 
     *  - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     *  - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *    from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     *  - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *    an `AccountId32` value.
     *  - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
     *    `dest` side.
     *  - `dest_weight`: Equal to the total weight on `dest` of the XCM message
     *    `ReserveAssetDeposited { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
     */
    v9100: new CallType(
        'XcmPallet.reserve_transfer_assets',
        sts.struct({
            dest: v9100.VersionedMultiLocation,
            beneficiary: v9100.VersionedMultiLocation,
            assets: v9100.VersionedMultiAssets,
            feeAssetItem: sts.number(),
            destWeight: v9100.Weight,
        })
    ),
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
     */
    v9111: new CallType(
        'XcmPallet.reserve_transfer_assets',
        sts.struct({
            dest: v9111.VersionedMultiLocation,
            beneficiary: v9111.VersionedMultiLocation,
            assets: v9111.VersionedMultiAssets,
            feeAssetItem: sts.number(),
        })
    ),
    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
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
    v9370: new CallType(
        'XcmPallet.reserve_transfer_assets',
        sts.struct({
            dest: v9370.VersionedMultiLocation,
            beneficiary: v9370.VersionedMultiLocation,
            assets: v9370.VersionedMultiAssets,
            feeAssetItem: sts.number(),
        })
    ),
    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
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
    v9381: new CallType(
        'XcmPallet.reserve_transfer_assets',
        sts.struct({
            dest: v9381.VersionedMultiLocation,
            beneficiary: v9381.VersionedMultiLocation,
            assets: v9381.VersionedMultiAssets,
            feeAssetItem: sts.number(),
        })
    ),
}

export const forceXcmVersion =  {
    name: 'XcmPallet.force_xcm_version',
    /**
     * Extoll that a particular destination can be communicated with through a particular
     * version of XCM.
     * 
     * - `origin`: Must be Root.
     * - `location`: The destination that is being described.
     * - `xcm_version`: The latest version of XCM that `location` supports.
     */
    v9111: new CallType(
        'XcmPallet.force_xcm_version',
        sts.struct({
            location: v9111.V1MultiLocation,
            xcmVersion: sts.number(),
        })
    ),
    /**
     * Extoll that a particular destination can be communicated with through a particular
     * version of XCM.
     * 
     * - `origin`: Must be Root.
     * - `location`: The destination that is being described.
     * - `xcm_version`: The latest version of XCM that `location` supports.
     */
    v9370: new CallType(
        'XcmPallet.force_xcm_version',
        sts.struct({
            location: v9370.V1MultiLocation,
            xcmVersion: sts.number(),
        })
    ),
    /**
     * Extoll that a particular destination can be communicated with through a particular
     * version of XCM.
     * 
     * - `origin`: Must be Root.
     * - `location`: The destination that is being described.
     * - `xcm_version`: The latest version of XCM that `location` supports.
     */
    v9381: new CallType(
        'XcmPallet.force_xcm_version',
        sts.struct({
            location: v9381.V3MultiLocation,
            xcmVersion: sts.number(),
        })
    ),
    /**
     * See [`Pallet::force_xcm_version`].
     */
    v1000000: new CallType(
        'XcmPallet.force_xcm_version',
        sts.struct({
            location: v1000000.V3MultiLocation,
            version: sts.number(),
        })
    ),
}

export const forceDefaultXcmVersion =  {
    name: 'XcmPallet.force_default_xcm_version',
    /**
     * Set a safe XCM version (the version that XCM should be encoded with if the most recent
     * version a destination can accept is unknown).
     * 
     * - `origin`: Must be Root.
     * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
     */
    v9111: new CallType(
        'XcmPallet.force_default_xcm_version',
        sts.struct({
            maybeXcmVersion: sts.option(() => sts.number()),
        })
    ),
}

export const forceSubscribeVersionNotify =  {
    name: 'XcmPallet.force_subscribe_version_notify',
    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    v9111: new CallType(
        'XcmPallet.force_subscribe_version_notify',
        sts.struct({
            location: v9111.VersionedMultiLocation,
        })
    ),
    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    v9370: new CallType(
        'XcmPallet.force_subscribe_version_notify',
        sts.struct({
            location: v9370.VersionedMultiLocation,
        })
    ),
    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    v9381: new CallType(
        'XcmPallet.force_subscribe_version_notify',
        sts.struct({
            location: v9381.VersionedMultiLocation,
        })
    ),
}

export const forceUnsubscribeVersionNotify =  {
    name: 'XcmPallet.force_unsubscribe_version_notify',
    /**
     * Require that a particular destination should no longer notify us regarding any XCM
     * version changes.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we are currently subscribed for XCM version
     *   notifications which we no longer desire.
     */
    v9111: new CallType(
        'XcmPallet.force_unsubscribe_version_notify',
        sts.struct({
            location: v9111.VersionedMultiLocation,
        })
    ),
    /**
     * Require that a particular destination should no longer notify us regarding any XCM
     * version changes.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we are currently subscribed for XCM version
     *   notifications which we no longer desire.
     */
    v9370: new CallType(
        'XcmPallet.force_unsubscribe_version_notify',
        sts.struct({
            location: v9370.VersionedMultiLocation,
        })
    ),
    /**
     * Require that a particular destination should no longer notify us regarding any XCM
     * version changes.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we are currently subscribed for XCM version
     *   notifications which we no longer desire.
     */
    v9381: new CallType(
        'XcmPallet.force_unsubscribe_version_notify',
        sts.struct({
            location: v9381.VersionedMultiLocation,
        })
    ),
}

export const limitedReserveTransferAssets =  {
    name: 'XcmPallet.limited_reserve_transfer_assets',
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
    v9122: new CallType(
        'XcmPallet.limited_reserve_transfer_assets',
        sts.struct({
            dest: v9122.VersionedMultiLocation,
            beneficiary: v9122.VersionedMultiLocation,
            assets: v9122.VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: v9122.V2WeightLimit,
        })
    ),
    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
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
    v9370: new CallType(
        'XcmPallet.limited_reserve_transfer_assets',
        sts.struct({
            dest: v9370.VersionedMultiLocation,
            beneficiary: v9370.VersionedMultiLocation,
            assets: v9370.VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: v9370.V2WeightLimit,
        })
    ),
    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
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
    v9381: new CallType(
        'XcmPallet.limited_reserve_transfer_assets',
        sts.struct({
            dest: v9381.VersionedMultiLocation,
            beneficiary: v9381.VersionedMultiLocation,
            assets: v9381.VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: v9381.V3WeightLimit,
        })
    ),
}

export const limitedTeleportAssets =  {
    name: 'XcmPallet.limited_teleport_assets',
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
    v9122: new CallType(
        'XcmPallet.limited_teleport_assets',
        sts.struct({
            dest: v9122.VersionedMultiLocation,
            beneficiary: v9122.VersionedMultiLocation,
            assets: v9122.VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: v9122.V2WeightLimit,
        })
    ),
    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    v9370: new CallType(
        'XcmPallet.limited_teleport_assets',
        sts.struct({
            dest: v9370.VersionedMultiLocation,
            beneficiary: v9370.VersionedMultiLocation,
            assets: v9370.VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: v9370.V2WeightLimit,
        })
    ),
    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    v9381: new CallType(
        'XcmPallet.limited_teleport_assets',
        sts.struct({
            dest: v9381.VersionedMultiLocation,
            beneficiary: v9381.VersionedMultiLocation,
            assets: v9381.VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: v9381.V3WeightLimit,
        })
    ),
}

export const forceSuspension =  {
    name: 'XcmPallet.force_suspension',
    /**
     * Set or unset the global suspension state of the XCM executor.
     * 
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `suspended`: `true` to suspend, `false` to resume.
     */
    v9420: new CallType(
        'XcmPallet.force_suspension',
        sts.struct({
            suspended: sts.boolean(),
        })
    ),
}
