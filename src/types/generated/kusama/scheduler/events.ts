import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1058 from '../v1058'
import * as v2005 from '../v2005'
import * as v9111 from '../v9111'
import * as v9160 from '../v9160'
import * as v9170 from '../v9170'
import * as v9190 from '../v9190'
import * as v9320 from '../v9320'
import * as v9420 from '../v9420'
import * as v9430 from '../v9430'

export const scheduled =  {
    name: 'Scheduler.Scheduled',
    v1058: new EventType(
        'Scheduler.Scheduled',
        v1058.BlockNumber
    ),
    v2005: new EventType(
        'Scheduler.Scheduled',
        sts.tuple([v2005.BlockNumber, sts.number()])
    ),
    /**
     * Scheduled some task.
     */
    v9160: new EventType(
        'Scheduler.Scheduled',
        sts.struct({
            when: sts.number(),
            index: sts.number(),
        })
    ),
}

export const dispatched =  {
    name: 'Scheduler.Dispatched',
    v1058: new EventType(
        'Scheduler.Dispatched',
        sts.tuple([v1058.TaskAddress, sts.option(() => sts.bytes()), v1058.DispatchResult])
    ),
    /**
     * Dispatched some task. \[task, id, result\]
     */
    v9111: new EventType(
        'Scheduler.Dispatched',
        sts.tuple([sts.tuple(() => [sts.number(), sts.number()]), sts.option(() => sts.bytes()), sts.result(() => sts.unit(), () => v9111.DispatchError)])
    ),
    /**
     * Dispatched some task.
     */
    v9160: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v9160.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v9170: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v9170.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v9190: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v9190.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v9320: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v9320.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v9420: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v9420.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v9430: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v9430.DispatchError),
        })
    ),
}

export const canceled =  {
    name: 'Scheduler.Canceled',
    v2005: new EventType(
        'Scheduler.Canceled',
        sts.tuple([v2005.BlockNumber, sts.number()])
    ),
    /**
     * Canceled some task.
     */
    v9160: new EventType(
        'Scheduler.Canceled',
        sts.struct({
            when: sts.number(),
            index: sts.number(),
        })
    ),
}

export const callLookupFailed =  {
    name: 'Scheduler.CallLookupFailed',
    /**
     * The call for the provided hash was not found so the task has been aborted.
     */
    v9160: new EventType(
        'Scheduler.CallLookupFailed',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            error: v9160.LookupError,
        })
    ),
}

export const callUnavailable =  {
    name: 'Scheduler.CallUnavailable',
    /**
     * The call for the provided hash was not found so the task has been aborted.
     */
    v9320: new EventType(
        'Scheduler.CallUnavailable',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        })
    ),
}

export const periodicFailed =  {
    name: 'Scheduler.PeriodicFailed',
    /**
     * The given task was unable to be renewed since the agenda is full at that block.
     */
    v9320: new EventType(
        'Scheduler.PeriodicFailed',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        })
    ),
}

export const permanentlyOverweight =  {
    name: 'Scheduler.PermanentlyOverweight',
    /**
     * The given task can never be executed since it is overweight.
     */
    v9320: new EventType(
        'Scheduler.PermanentlyOverweight',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        })
    ),
}
