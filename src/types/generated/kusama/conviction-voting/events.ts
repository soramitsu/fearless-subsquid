import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9320 from '../v9320'

export const delegated =  {
    name: 'ConvictionVoting.Delegated',
    /**
     * An account has delegated their vote to another account. \[who, target\]
     */
    v9320: new EventType(
        'ConvictionVoting.Delegated',
        sts.tuple([v9320.AccountId32, v9320.AccountId32])
    ),
}

export const undelegated =  {
    name: 'ConvictionVoting.Undelegated',
    /**
     * An \[account\] has cancelled a previous delegation operation.
     */
    v9320: new EventType(
        'ConvictionVoting.Undelegated',
        v9320.AccountId32
    ),
}
