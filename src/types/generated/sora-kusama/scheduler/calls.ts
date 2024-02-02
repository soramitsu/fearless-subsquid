import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v7 from '../v7'
import * as v9 from '../v9'

export const schedule =  {
    name: 'Scheduler.schedule',
    /**
     * Anonymously schedule a task.
     */
    v7: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v7.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v9: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9.Call,
        })
    ),
}

export const cancel =  {
    name: 'Scheduler.cancel',
    /**
     * Cancel an anonymously scheduled task.
     */
    v7: new CallType(
        'Scheduler.cancel',
        sts.struct({
            when: sts.number(),
            index: sts.number(),
        })
    ),
}

export const scheduleNamed =  {
    name: 'Scheduler.schedule_named',
    /**
     * Schedule a named task.
     */
    v7: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v7.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v9: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9.Call,
        })
    ),
}

export const cancelNamed =  {
    name: 'Scheduler.cancel_named',
    /**
     * Cancel a named scheduled task.
     */
    v7: new CallType(
        'Scheduler.cancel_named',
        sts.struct({
            id: sts.bytes(),
        })
    ),
}

export const scheduleAfter =  {
    name: 'Scheduler.schedule_after',
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v7: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v7.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v9: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9.Call,
        })
    ),
}

export const scheduleNamedAfter =  {
    name: 'Scheduler.schedule_named_after',
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v7: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v7.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v9: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9.Call,
        })
    ),
}
