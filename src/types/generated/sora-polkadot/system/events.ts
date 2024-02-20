import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'

export const extrinsicSuccess =  {
    name: 'System.ExtrinsicSuccess',
    /**
     * An extrinsic completed successfully.
     */
    v1: new EventType(
        'System.ExtrinsicSuccess',
        sts.struct({
            dispatchInfo: v1.DispatchInfo,
        })
    ),
}

export const extrinsicFailed =  {
    name: 'System.ExtrinsicFailed',
    /**
     * An extrinsic failed.
     */
    v1: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v1.DispatchError,
            dispatchInfo: v1.DispatchInfo,
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
     * A new account was created.
     */
    v1: new EventType(
        'System.NewAccount',
        sts.struct({
            account: v1.AccountId32,
        })
    ),
}

export const killedAccount =  {
    name: 'System.KilledAccount',
    /**
     * An account was reaped.
     */
    v1: new EventType(
        'System.KilledAccount',
        sts.struct({
            account: v1.AccountId32,
        })
    ),
}

export const remarked =  {
    name: 'System.Remarked',
    /**
     * On on-chain remark happened.
     */
    v1: new EventType(
        'System.Remarked',
        sts.struct({
            sender: v1.AccountId32,
            hash: v1.H256,
        })
    ),
}
