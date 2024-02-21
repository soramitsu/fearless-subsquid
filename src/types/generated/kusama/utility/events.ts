import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1032 from '../v1032'
import * as v1058 from '../v1058'
import * as v9111 from '../v9111'
import * as v9130 from '../v9130'
import * as v9160 from '../v9160'
import * as v9170 from '../v9170'
import * as v9190 from '../v9190'
import * as v9220 from '../v9220'
import * as v9320 from '../v9320'
import * as v9420 from '../v9420'
import * as v9430 from '../v9430'

export const batchInterrupted =  {
    name: 'Utility.BatchInterrupted',
    /**
     *  Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     *  well as the error.
     */
    v1032: new EventType(
        'Utility.BatchInterrupted',
        sts.tuple([sts.number(), v1032.DispatchError])
    ),
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error. \[index, error\]
     */
    v9111: new EventType(
        'Utility.BatchInterrupted',
        sts.tuple([sts.number(), v9111.DispatchError])
    ),
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    v9130: new EventType(
        'Utility.BatchInterrupted',
        sts.struct({
            index: sts.number(),
            error: v9130.DispatchError,
        })
    ),
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    v9160: new EventType(
        'Utility.BatchInterrupted',
        sts.struct({
            index: sts.number(),
            error: v9160.DispatchError,
        })
    ),
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    v9170: new EventType(
        'Utility.BatchInterrupted',
        sts.struct({
            index: sts.number(),
            error: v9170.DispatchError,
        })
    ),
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    v9190: new EventType(
        'Utility.BatchInterrupted',
        sts.struct({
            index: sts.number(),
            error: v9190.DispatchError,
        })
    ),
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    v9320: new EventType(
        'Utility.BatchInterrupted',
        sts.struct({
            index: sts.number(),
            error: v9320.DispatchError,
        })
    ),
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    v9420: new EventType(
        'Utility.BatchInterrupted',
        sts.struct({
            index: sts.number(),
            error: v9420.DispatchError,
        })
    ),
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    v9430: new EventType(
        'Utility.BatchInterrupted',
        sts.struct({
            index: sts.number(),
            error: v9430.DispatchError,
        })
    ),
}

export const batchCompleted =  {
    name: 'Utility.BatchCompleted',
    /**
     *  Batch of dispatches completed fully with no error.
     */
    v1032: new EventType(
        'Utility.BatchCompleted',
        sts.unit()
    ),
}

export const newMultisig =  {
    name: 'Utility.NewMultisig',
    /**
     *  A new multisig operation has begun. First param is the account that is approving,
     *  second is the multisig account.
     */
    v1032: new EventType(
        'Utility.NewMultisig',
        sts.tuple([v1032.AccountId, v1032.AccountId])
    ),
    /**
     *  A new multisig operation has begun. First param is the account that is approving,
     *  second is the multisig account, third is hash of the call.
     */
    v1058: new EventType(
        'Utility.NewMultisig',
        sts.tuple([v1058.AccountId, v1058.AccountId, v1058.CallHash])
    ),
}

export const multisigApproval =  {
    name: 'Utility.MultisigApproval',
    /**
     *  A multisig operation has been approved by someone. First param is the account that is
     *  approving, third is the multisig account.
     */
    v1032: new EventType(
        'Utility.MultisigApproval',
        sts.tuple([v1032.AccountId, v1032.Timepoint, v1032.AccountId])
    ),
    /**
     *  A multisig operation has been approved by someone. First param is the account that is
     *  approving, third is the multisig account, fourth is hash of the call.
     */
    v1058: new EventType(
        'Utility.MultisigApproval',
        sts.tuple([v1058.AccountId, v1058.Timepoint, v1058.AccountId, v1058.CallHash])
    ),
}

export const multisigExecuted =  {
    name: 'Utility.MultisigExecuted',
    /**
     *  A multisig operation has been executed. First param is the account that is
     *  approving, third is the multisig account.
     */
    v1032: new EventType(
        'Utility.MultisigExecuted',
        sts.tuple([v1032.AccountId, v1032.Timepoint, v1032.AccountId, v1032.DispatchResult])
    ),
    /**
     *  A multisig operation has been executed. First param is the account that is
     *  approving, third is the multisig account, fourth is hash of the call to be executed.
     */
    v1058: new EventType(
        'Utility.MultisigExecuted',
        sts.tuple([v1058.AccountId, v1058.Timepoint, v1058.AccountId, v1058.CallHash, v1058.DispatchResult])
    ),
}

export const multisigCancelled =  {
    name: 'Utility.MultisigCancelled',
    /**
     *  A multisig operation has been cancelled. First param is the account that is
     *  cancelling, third is the multisig account.
     */
    v1032: new EventType(
        'Utility.MultisigCancelled',
        sts.tuple([v1032.AccountId, v1032.Timepoint, v1032.AccountId])
    ),
    /**
     *  A multisig operation has been cancelled. First param is the account that is
     *  cancelling, third is the multisig account, fourth is hash of the call.
     */
    v1058: new EventType(
        'Utility.MultisigCancelled',
        sts.tuple([v1058.AccountId, v1058.Timepoint, v1058.AccountId, v1058.CallHash])
    ),
}

export const uncallable =  {
    name: 'Utility.Uncallable',
    /**
     *  A call with a `false` IsCallable filter was attempted.
     */
    v2005: new EventType(
        'Utility.Uncallable',
        sts.number()
    ),
}

export const itemCompleted =  {
    name: 'Utility.ItemCompleted',
    /**
     *  A single item within a Batch of dispatches has completed with no error.
     */
    v9090: new EventType(
        'Utility.ItemCompleted',
        sts.unit()
    ),
}

export const dispatchedAs =  {
    name: 'Utility.DispatchedAs',
    /**
     * A call was dispatched. \[result\]
     */
    v9130: new EventType(
        'Utility.DispatchedAs',
        sts.result(() => sts.unit(), () => v9130.DispatchError)
    ),
    /**
     * A call was dispatched.
     */
    v9160: new EventType(
        'Utility.DispatchedAs',
        sts.struct({
            result: sts.result(() => sts.unit(), () => v9160.DispatchError),
        })
    ),
    /**
     * A call was dispatched.
     */
    v9170: new EventType(
        'Utility.DispatchedAs',
        sts.struct({
            result: sts.result(() => sts.unit(), () => v9170.DispatchError),
        })
    ),
    /**
     * A call was dispatched.
     */
    v9190: new EventType(
        'Utility.DispatchedAs',
        sts.struct({
            result: sts.result(() => sts.unit(), () => v9190.DispatchError),
        })
    ),
    /**
     * A call was dispatched.
     */
    v9320: new EventType(
        'Utility.DispatchedAs',
        sts.struct({
            result: sts.result(() => sts.unit(), () => v9320.DispatchError),
        })
    ),
    /**
     * A call was dispatched.
     */
    v9420: new EventType(
        'Utility.DispatchedAs',
        sts.struct({
            result: sts.result(() => sts.unit(), () => v9420.DispatchError),
        })
    ),
    /**
     * A call was dispatched.
     */
    v9430: new EventType(
        'Utility.DispatchedAs',
        sts.struct({
            result: sts.result(() => sts.unit(), () => v9430.DispatchError),
        })
    ),
}

export const batchCompletedWithErrors =  {
    name: 'Utility.BatchCompletedWithErrors',
    /**
     * Batch of dispatches completed but has errors.
     */
    v9220: new EventType(
        'Utility.BatchCompletedWithErrors',
        sts.unit()
    ),
}

export const itemFailed =  {
    name: 'Utility.ItemFailed',
    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    v9220: new EventType(
        'Utility.ItemFailed',
        sts.struct({
            error: v9220.DispatchError,
        })
    ),
    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    v9320: new EventType(
        'Utility.ItemFailed',
        sts.struct({
            error: v9320.DispatchError,
        })
    ),
    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    v9420: new EventType(
        'Utility.ItemFailed',
        sts.struct({
            error: v9420.DispatchError,
        })
    ),
    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    v9430: new EventType(
        'Utility.ItemFailed',
        sts.struct({
            error: v9430.DispatchError,
        })
    ),
}
