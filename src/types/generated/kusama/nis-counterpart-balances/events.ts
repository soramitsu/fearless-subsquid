import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9340 from '../v9340'
import * as v9420 from '../v9420'

export const endowed =  {
    name: 'NisCounterpartBalances.Endowed',
    /**
     * An account was created with some free balance.
     */
    v9340: new EventType(
        'NisCounterpartBalances.Endowed',
        sts.struct({
            account: v9340.AccountId32,
            freeBalance: sts.bigint(),
        })
    ),
}

export const dustLost =  {
    name: 'NisCounterpartBalances.DustLost',
    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss.
     */
    v9340: new EventType(
        'NisCounterpartBalances.DustLost',
        sts.struct({
            account: v9340.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const transfer =  {
    name: 'NisCounterpartBalances.Transfer',
    /**
     * Transfer succeeded.
     */
    v9340: new EventType(
        'NisCounterpartBalances.Transfer',
        sts.struct({
            from: v9340.AccountId32,
            to: v9340.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const balanceSet =  {
    name: 'NisCounterpartBalances.BalanceSet',
    /**
     * A balance was set by root.
     */
    v9340: new EventType(
        'NisCounterpartBalances.BalanceSet',
        sts.struct({
            who: v9340.AccountId32,
            free: sts.bigint(),
            reserved: sts.bigint(),
        })
    ),
    /**
     * A balance was set by root.
     */
    v9420: new EventType(
        'NisCounterpartBalances.BalanceSet',
        sts.struct({
            who: v9420.AccountId32,
            free: sts.bigint(),
        })
    ),
}

export const reserved =  {
    name: 'NisCounterpartBalances.Reserved',
    /**
     * Some balance was reserved (moved from free to reserved).
     */
    v9340: new EventType(
        'NisCounterpartBalances.Reserved',
        sts.struct({
            who: v9340.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const unreserved =  {
    name: 'NisCounterpartBalances.Unreserved',
    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    v9340: new EventType(
        'NisCounterpartBalances.Unreserved',
        sts.struct({
            who: v9340.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const reserveRepatriated =  {
    name: 'NisCounterpartBalances.ReserveRepatriated',
    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     */
    v9340: new EventType(
        'NisCounterpartBalances.ReserveRepatriated',
        sts.struct({
            from: v9340.AccountId32,
            to: v9340.AccountId32,
            amount: sts.bigint(),
            destinationStatus: v9340.BalanceStatus,
        })
    ),
}

export const deposit =  {
    name: 'NisCounterpartBalances.Deposit',
    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    v9340: new EventType(
        'NisCounterpartBalances.Deposit',
        sts.struct({
            who: v9340.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const withdraw =  {
    name: 'NisCounterpartBalances.Withdraw',
    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees).
     */
    v9340: new EventType(
        'NisCounterpartBalances.Withdraw',
        sts.struct({
            who: v9340.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const slashed =  {
    name: 'NisCounterpartBalances.Slashed',
    /**
     * Some amount was removed from the account (e.g. for misbehavior).
     */
    v9340: new EventType(
        'NisCounterpartBalances.Slashed',
        sts.struct({
            who: v9340.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const minted =  {
    name: 'NisCounterpartBalances.Minted',
    /**
     * Some amount was minted into an account.
     */
    v9420: new EventType(
        'NisCounterpartBalances.Minted',
        sts.struct({
            who: v9420.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const burned =  {
    name: 'NisCounterpartBalances.Burned',
    /**
     * Some amount was burned from an account.
     */
    v9420: new EventType(
        'NisCounterpartBalances.Burned',
        sts.struct({
            who: v9420.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const suspended =  {
    name: 'NisCounterpartBalances.Suspended',
    /**
     * Some amount was suspended from an account (it can be restored later).
     */
    v9420: new EventType(
        'NisCounterpartBalances.Suspended',
        sts.struct({
            who: v9420.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const restored =  {
    name: 'NisCounterpartBalances.Restored',
    /**
     * Some amount was restored into an account.
     */
    v9420: new EventType(
        'NisCounterpartBalances.Restored',
        sts.struct({
            who: v9420.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const upgraded =  {
    name: 'NisCounterpartBalances.Upgraded',
    /**
     * An account was upgraded.
     */
    v9420: new EventType(
        'NisCounterpartBalances.Upgraded',
        sts.struct({
            who: v9420.AccountId32,
        })
    ),
}

export const issued =  {
    name: 'NisCounterpartBalances.Issued',
    /**
     * Total issuance was increased by `amount`, creating a credit to be balanced.
     */
    v9420: new EventType(
        'NisCounterpartBalances.Issued',
        sts.struct({
            amount: sts.bigint(),
        })
    ),
}

export const rescinded =  {
    name: 'NisCounterpartBalances.Rescinded',
    /**
     * Total issuance was decreased by `amount`, creating a debt to be balanced.
     */
    v9420: new EventType(
        'NisCounterpartBalances.Rescinded',
        sts.struct({
            amount: sts.bigint(),
        })
    ),
}

export const locked =  {
    name: 'NisCounterpartBalances.Locked',
    /**
     * Some balance was locked.
     */
    v9420: new EventType(
        'NisCounterpartBalances.Locked',
        sts.struct({
            who: v9420.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const unlocked =  {
    name: 'NisCounterpartBalances.Unlocked',
    /**
     * Some balance was unlocked.
     */
    v9420: new EventType(
        'NisCounterpartBalances.Unlocked',
        sts.struct({
            who: v9420.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const frozen =  {
    name: 'NisCounterpartBalances.Frozen',
    /**
     * Some balance was frozen.
     */
    v9420: new EventType(
        'NisCounterpartBalances.Frozen',
        sts.struct({
            who: v9420.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const thawed =  {
    name: 'NisCounterpartBalances.Thawed',
    /**
     * Some balance was thawed.
     */
    v9420: new EventType(
        'NisCounterpartBalances.Thawed',
        sts.struct({
            who: v9420.AccountId32,
            amount: sts.bigint(),
        })
    ),
}
