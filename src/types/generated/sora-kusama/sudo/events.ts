import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v7 from '../v7'

export const sudid =  {
    name: 'Sudo.Sudid',
    /**
     * A sudo just took place. \[result\]
     */
    v1: new EventType(
        'Sudo.Sudid',
        sts.struct({
            sudoResult: sts.result(() => sts.unit(), () => v1.DispatchError),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    v7: new EventType(
        'Sudo.Sudid',
        sts.struct({
            sudoResult: sts.result(() => sts.unit(), () => v7.DispatchError),
        })
    ),
}

export const keyChanged =  {
    name: 'Sudo.KeyChanged',
    /**
     * The \[sudoer\] just switched identity; the old key is supplied.
     */
    v1: new EventType(
        'Sudo.KeyChanged',
        sts.struct({
            newSudoer: v1.AccountId32,
        })
    ),
    /**
     * The \[sudoer\] just switched identity; the old key is supplied if one existed.
     */
    v7: new EventType(
        'Sudo.KeyChanged',
        sts.struct({
            oldSudoer: sts.option(() => v7.AccountId32),
        })
    ),
}

export const sudoAsDone =  {
    name: 'Sudo.SudoAsDone',
    /**
     * A sudo just took place. \[result\]
     */
    v1: new EventType(
        'Sudo.SudoAsDone',
        sts.struct({
            sudoResult: sts.result(() => sts.unit(), () => v1.DispatchError),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    v7: new EventType(
        'Sudo.SudoAsDone',
        sts.struct({
            sudoResult: sts.result(() => sts.unit(), () => v7.DispatchError),
        })
    ),
}
