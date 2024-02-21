import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9040 from '../v9040'

export const invalidFormat =  {
    name: 'ParasUmp.InvalidFormat',
    /**
     *  Upward message is invalid XCM.
     *  \[ id \]
     */
    v9040: new EventType(
        'ParasUmp.InvalidFormat',
        v9040.MessageId
    ),
}

export const unsupportedVersion =  {
    name: 'ParasUmp.UnsupportedVersion',
    /**
     *  Upward message is unsupported version of XCM.
     *  \[ id \]
     */
    v9040: new EventType(
        'ParasUmp.UnsupportedVersion',
        v9040.MessageId
    ),
}

export const executedUpward =  {
    name: 'ParasUmp.ExecutedUpward',
    /**
     *  Upward message executed with the given outcome.
     *  \[ id, outcome \]
     */
    v9040: new EventType(
        'ParasUmp.ExecutedUpward',
        sts.tuple([v9040.MessageId, v9040.Outcome])
    ),
}

export const weightExhausted =  {
    name: 'ParasUmp.WeightExhausted',
    /**
     *  The weight limit for handling downward messages was reached.
     *  \[ id, remaining, required \]
     */
    v9040: new EventType(
        'ParasUmp.WeightExhausted',
        sts.tuple([v9040.MessageId, v9040.Weight, v9040.Weight])
    ),
}

export const upwardMessagesReceived =  {
    name: 'ParasUmp.UpwardMessagesReceived',
    /**
     *  Some downward messages have been received and will be processed.
     *  \[ para, count, size \]
     */
    v9040: new EventType(
        'ParasUmp.UpwardMessagesReceived',
        sts.tuple([v9040.ParaId, sts.number(), sts.number()])
    ),
}
