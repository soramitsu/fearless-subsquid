import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v9111 from '../v9111'
import * as v9130 from '../v9130'

export const setUncles =  {
    name: 'Authorship.set_uncles',
    /**
     *  Provide a set of uncles.
     */
    v1020: new CallType(
        'Authorship.set_uncles',
        sts.struct({
            newUncles: sts.array(() => v1020.Header),
        })
    ),
    /**
     * Provide a set of uncles.
     */
    v9111: new CallType(
        'Authorship.set_uncles',
        sts.struct({
            newUncles: sts.array(() => v9111.Header),
        })
    ),
    /**
     * Provide a set of uncles.
     */
    v9130: new CallType(
        'Authorship.set_uncles',
        sts.struct({
            newUncles: sts.array(() => v9130.Header),
        })
    ),
}
