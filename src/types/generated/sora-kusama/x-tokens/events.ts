import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v7 from '../v7'

export const transferredMultiAssets =  {
    name: 'XTokens.TransferredMultiAssets',
    /**
     * Transferred `MultiAsset` with fee.
     */
    v7: new EventType(
        'XTokens.TransferredMultiAssets',
        sts.struct({
            sender: v7.AccountId32,
            assets: sts.array(() => v7.V3MultiAsset),
            fee: v7.V3MultiAsset,
            dest: v7.V3MultiLocation,
        })
    ),
}
