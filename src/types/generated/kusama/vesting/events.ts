import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1050 from '../v1050'
import * as v9130 from '../v9130'

export const vestingUpdated =  {
    name: 'Vesting.VestingUpdated',
    /**
     *  The amount vested has been updated. This could indicate more funds are available. The
     *  balance given is the amount which is left unvested (and thus locked).
     */
    v1050: new EventType(
        'Vesting.VestingUpdated',
        sts.tuple([v1050.AccountId, v1050.Balance])
    ),
    /**
     * The amount vested has been updated. This could indicate a change in funds available.
     * The balance given is the amount which is left unvested (and thus locked).
     */
    v9130: new EventType(
        'Vesting.VestingUpdated',
        sts.struct({
            account: v9130.AccountId32,
            unvested: sts.bigint(),
        })
    ),
}

export const vestingCompleted =  {
    name: 'Vesting.VestingCompleted',
    /**
     *  An account (given) has become fully vested. No further vesting can happen.
     */
    v1050: new EventType(
        'Vesting.VestingCompleted',
        v1050.AccountId
    ),
    /**
     * An \[account\] has become fully vested.
     */
    v9130: new EventType(
        'Vesting.VestingCompleted',
        sts.struct({
            account: v9130.AccountId32,
        })
    ),
}
