import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9111 from '../v9111'
import * as v9130 from '../v9130'

export const rebagged =  {
    name: 'BagsList.Rebagged',
    /**
     * Moved an account from one bag to another. \[who, from, to\].
     */
    v9111: new EventType(
        'BagsList.Rebagged',
        sts.tuple([v9111.AccountId32, sts.bigint(), sts.bigint()])
    ),
    /**
     * Moved an account from one bag to another.
     */
    v9130: new EventType(
        'BagsList.Rebagged',
        sts.struct({
            who: v9130.AccountId32,
            from: sts.bigint(),
            to: sts.bigint(),
        })
    ),
}
