import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1 from '../v1'

export const setUncles =  {
    name: 'Authorship.set_uncles',
    /**
     * Provide a set of uncles.
     */
    v1: new CallType(
        'Authorship.set_uncles',
        sts.struct({
            newUncles: sts.array(() => v1.Header),
        })
    ),
}
