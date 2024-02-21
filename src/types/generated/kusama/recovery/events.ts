import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1040 from '../v1040'
import * as v9130 from '../v9130'

export const recoveryCreated =  {
    name: 'Recovery.RecoveryCreated',
    /**
     *  A recovery process has been set up for an account
     */
    v1040: new EventType(
        'Recovery.RecoveryCreated',
        v1040.AccountId
    ),
    /**
     * A recovery process has been set up for an account.
     */
    v9130: new EventType(
        'Recovery.RecoveryCreated',
        sts.struct({
            account: v9130.AccountId32,
        })
    ),
}

export const recoveryInitiated =  {
    name: 'Recovery.RecoveryInitiated',
    /**
     *  A recovery process has been initiated for account_1 by account_2
     */
    v1040: new EventType(
        'Recovery.RecoveryInitiated',
        sts.tuple([v1040.AccountId, v1040.AccountId])
    ),
    /**
     * A recovery process has been initiated for lost account by rescuer account.
     */
    v9130: new EventType(
        'Recovery.RecoveryInitiated',
        sts.struct({
            lostAccount: v9130.AccountId32,
            rescuerAccount: v9130.AccountId32,
        })
    ),
}

export const recoveryVouched =  {
    name: 'Recovery.RecoveryVouched',
    /**
     *  A recovery process for account_1 by account_2 has been vouched for by account_3
     */
    v1040: new EventType(
        'Recovery.RecoveryVouched',
        sts.tuple([v1040.AccountId, v1040.AccountId, v1040.AccountId])
    ),
    /**
     * A recovery process for lost account by rescuer account has been vouched for by sender.
     */
    v9130: new EventType(
        'Recovery.RecoveryVouched',
        sts.struct({
            lostAccount: v9130.AccountId32,
            rescuerAccount: v9130.AccountId32,
            sender: v9130.AccountId32,
        })
    ),
}

export const recoveryClosed =  {
    name: 'Recovery.RecoveryClosed',
    /**
     *  A recovery process for account_1 by account_2 has been closed
     */
    v1040: new EventType(
        'Recovery.RecoveryClosed',
        sts.tuple([v1040.AccountId, v1040.AccountId])
    ),
    /**
     * A recovery process for lost account by rescuer account has been closed.
     */
    v9130: new EventType(
        'Recovery.RecoveryClosed',
        sts.struct({
            lostAccount: v9130.AccountId32,
            rescuerAccount: v9130.AccountId32,
        })
    ),
}

export const accountRecovered =  {
    name: 'Recovery.AccountRecovered',
    /**
     *  Account_1 has been successfully recovered by account_2
     */
    v1040: new EventType(
        'Recovery.AccountRecovered',
        sts.tuple([v1040.AccountId, v1040.AccountId])
    ),
    /**
     * Lost account has been successfully recovered by rescuer account.
     */
    v9130: new EventType(
        'Recovery.AccountRecovered',
        sts.struct({
            lostAccount: v9130.AccountId32,
            rescuerAccount: v9130.AccountId32,
        })
    ),
}

export const recoveryRemoved =  {
    name: 'Recovery.RecoveryRemoved',
    /**
     *  A recovery process has been removed for an account
     */
    v1040: new EventType(
        'Recovery.RecoveryRemoved',
        v1040.AccountId
    ),
    /**
     * A recovery process has been removed for an account.
     */
    v9130: new EventType(
        'Recovery.RecoveryRemoved',
        sts.struct({
            lostAccount: v9130.AccountId32,
        })
    ),
}
