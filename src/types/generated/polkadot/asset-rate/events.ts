import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1001002 from '../v1001002'

export const assetRateCreated =  {
    name: 'AssetRate.AssetRateCreated',
    v1001002: new EventType(
        'AssetRate.AssetRateCreated',
        sts.struct({
            assetKind: v1001002.VersionedLocatableAsset,
            rate: v1001002.FixedU128,
        })
    ),
}

export const assetRateRemoved =  {
    name: 'AssetRate.AssetRateRemoved',
    v1001002: new EventType(
        'AssetRate.AssetRateRemoved',
        sts.struct({
            assetKind: v1001002.VersionedLocatableAsset,
        })
    ),
}

export const assetRateUpdated =  {
    name: 'AssetRate.AssetRateUpdated',
    v1001002: new EventType(
        'AssetRate.AssetRateUpdated',
        sts.struct({
            assetKind: v1001002.VersionedLocatableAsset,
            old: v1001002.FixedU128,
            new: v1001002.FixedU128,
        })
    ),
}
