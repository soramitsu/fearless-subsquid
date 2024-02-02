import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v10 from '../v10'

export const transferredMultiAssets =  {
    name: 'XTokens.TransferredMultiAssets',
    /**
     * Transferred `MultiAsset` with fee.
     */
    v1: new EventType(
        'XTokens.TransferredMultiAssets',
        sts.struct({
            sender: v1.AccountId32,
            assets: sts.array(() => v1.V1MultiAsset),
            fee: v1.V1MultiAsset,
            dest: v1.V1MultiLocation,
        })
    ),
    /**
     * Transferred `MultiAsset` with fee.
     */
    v10: new EventType(
        'XTokens.TransferredMultiAssets',
        sts.struct({
            sender: v10.AccountId32,
            assets: sts.array(() => v10.V3MultiAsset),
            fee: v10.V3MultiAsset,
            dest: v10.V3MultiLocation,
        })
    ),
}
