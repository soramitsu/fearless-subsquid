import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v7 from '../v7'

export const noted =  {
    name: 'Preimage.Noted',
    /**
     * A preimage has been noted.
     */
    v7: new EventType(
        'Preimage.Noted',
        sts.struct({
            hash: v7.H256,
        })
    ),
}

export const requested =  {
    name: 'Preimage.Requested',
    /**
     * A preimage has been requested.
     */
    v7: new EventType(
        'Preimage.Requested',
        sts.struct({
            hash: v7.H256,
        })
    ),
}

export const cleared =  {
    name: 'Preimage.Cleared',
    /**
     * A preimage has ben cleared.
     */
    v7: new EventType(
        'Preimage.Cleared',
        sts.struct({
            hash: v7.H256,
        })
    ),
}
