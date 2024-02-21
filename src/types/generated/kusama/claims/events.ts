import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v9230 from '../v9230'

export const claimed =  {
    name: 'Claims.Claimed',
    /**
     *  Someone claimed some DOTs.
     */
    v1020: new EventType(
        'Claims.Claimed',
        sts.tuple([v1020.AccountId, v1020.EthereumAddress, v1020.Balance])
    ),
    /**
     * Someone claimed some DOTs.
     */
    v9230: new EventType(
        'Claims.Claimed',
        sts.struct({
            who: v9230.AccountId32,
            ethereumAddress: v9230.EthereumAddress,
            amount: sts.bigint(),
        })
    ),
}
