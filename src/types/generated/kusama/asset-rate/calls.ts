import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1001000 from '../v1001000'

export const create =  {
    name: 'AssetRate.create',
    /**
     * See [`Pallet::create`].
     */
    v1001000: new CallType(
        'AssetRate.create',
        sts.struct({
            assetKind: v1001000.VersionedLocatableAsset,
            rate: v1001000.FixedU128,
        })
    ),
}

export const update =  {
    name: 'AssetRate.update',
    /**
     * See [`Pallet::update`].
     */
    v1001000: new CallType(
        'AssetRate.update',
        sts.struct({
            assetKind: v1001000.VersionedLocatableAsset,
            rate: v1001000.FixedU128,
        })
    ),
}

export const remove =  {
    name: 'AssetRate.remove',
    /**
     * See [`Pallet::remove`].
     */
    v1001000: new CallType(
        'AssetRate.remove',
        sts.struct({
            assetKind: v1001000.VersionedLocatableAsset,
        })
    ),
}
