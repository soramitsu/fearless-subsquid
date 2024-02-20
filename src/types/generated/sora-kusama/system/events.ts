import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v7 from '../v7'

export const extrinsicSuccess =  {
    name: 'System.ExtrinsicSuccess',
    /**
     * An extrinsic completed successfully. \[info\]
     */
    v1: new EventType(
        'System.ExtrinsicSuccess',
        v1.DispatchInfo
    ),
    /**
     * An extrinsic completed successfully.
     */
    v7: new EventType(
        'System.ExtrinsicSuccess',
        sts.struct({
            dispatchInfo: v7.DispatchInfo,
        })
    ),
}

export const extrinsicFailed =  {
    name: 'System.ExtrinsicFailed',
    /**
     * An extrinsic failed. \[error, info\]
     */
    v1: new EventType(
        'System.ExtrinsicFailed',
        sts.tuple([v1.DispatchError, v1.DispatchInfo])
    ),
    /**
     * An extrinsic failed.
     */
    v7: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v7.DispatchError,
            dispatchInfo: v7.DispatchInfo,
        })
    ),
}

export const codeUpdated =  {
    name: 'System.CodeUpdated',
    /**
     * `:code` was updated.
     */
    v1: new EventType(
        'System.CodeUpdated',
        sts.unit()
    ),
}

export const newAccount =  {
    name: 'System.NewAccount',
    /**
     * A new \[account\] was created.
     */
    v1: new EventType(
        'System.NewAccount',
        v1.AccountId32
    ),
    /**
     * A new account was created.
     */
    v7: new EventType(
        'System.NewAccount',
        sts.struct({
            account: v7.AccountId32,
        })
    ),
}

export const killedAccount =  {
    name: 'System.KilledAccount',
    /**
     * An \[account\] was reaped.
     */
    v1: new EventType(
        'System.KilledAccount',
        v1.AccountId32
    ),
    /**
     * An account was reaped.
     */
    v7: new EventType(
        'System.KilledAccount',
        sts.struct({
            account: v7.AccountId32,
        })
    ),
}

export const remarked =  {
    name: 'System.Remarked',
    /**
     * On on-chain remark happened. \[origin, remark_hash\]
     */
    v1: new EventType(
        'System.Remarked',
        sts.tuple([v1.AccountId32, v1.H256])
    ),
    /**
     * On on-chain remark happened.
     */
    v7: new EventType(
        'System.Remarked',
        sts.struct({
            sender: v7.AccountId32,
            hash: v7.H256,
        })
    ),
}
