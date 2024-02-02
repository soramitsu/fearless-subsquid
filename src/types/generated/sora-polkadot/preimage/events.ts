import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v10 from '../v10'

export const noted =  {
    name: 'Preimage.Noted',
    /**
     * A preimage has been noted.
     */
    v10: new EventType(
        'Preimage.Noted',
        sts.struct({
            hash: v10.H256,
        })
    ),
}

export const requested =  {
    name: 'Preimage.Requested',
    /**
     * A preimage has been requested.
     */
    v10: new EventType(
        'Preimage.Requested',
        sts.struct({
            hash: v10.H256,
        })
    ),
}

export const cleared =  {
    name: 'Preimage.Cleared',
    /**
     * A preimage has ben cleared.
     */
    v10: new EventType(
        'Preimage.Cleared',
        sts.struct({
            hash: v10.H256,
        })
    ),
}
