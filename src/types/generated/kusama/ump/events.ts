import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9090 from '../v9090'
import * as v9100 from '../v9100'
import * as v9111 from '../v9111'
import * as v9160 from '../v9160'
import * as v9291 from '../v9291'
import * as v9320 from '../v9320'
import * as v9381 from '../v9381'

export const invalidFormat =  {
    name: 'Ump.InvalidFormat',
    /**
     *  Upward message is invalid XCM.
     *  \[ id \]
     */
    v9090: new EventType(
        'Ump.InvalidFormat',
        v9090.MessageId
    ),
}

export const unsupportedVersion =  {
    name: 'Ump.UnsupportedVersion',
    /**
     *  Upward message is unsupported version of XCM.
     *  \[ id \]
     */
    v9090: new EventType(
        'Ump.UnsupportedVersion',
        v9090.MessageId
    ),
}

export const executedUpward =  {
    name: 'Ump.ExecutedUpward',
    /**
     *  Upward message executed with the given outcome.
     *  \[ id, outcome \]
     */
    v9090: new EventType(
        'Ump.ExecutedUpward',
        sts.tuple([v9090.MessageId, v9090.Outcome])
    ),
    /**
     *  Upward message executed with the given outcome.
     *  \[ id, outcome \]
     */
    v9100: new EventType(
        'Ump.ExecutedUpward',
        sts.tuple([v9100.MessageId, v9100.Outcome])
    ),
    /**
     * Upward message executed with the given outcome.
     * \[ id, outcome \]
     */
    v9111: new EventType(
        'Ump.ExecutedUpward',
        sts.tuple([sts.bytes(), v9111.V2Outcome])
    ),
    /**
     * Upward message executed with the given outcome.
     * \[ id, outcome \]
     */
    v9160: new EventType(
        'Ump.ExecutedUpward',
        sts.tuple([sts.bytes(), v9160.V2Outcome])
    ),
    /**
     * Upward message executed with the given outcome.
     * \[ id, outcome \]
     */
    v9381: new EventType(
        'Ump.ExecutedUpward',
        sts.tuple([sts.bytes(), v9381.V3Outcome])
    ),
}

export const weightExhausted =  {
    name: 'Ump.WeightExhausted',
    /**
     *  The weight limit for handling downward messages was reached.
     *  \[ id, remaining, required \]
     */
    v9090: new EventType(
        'Ump.WeightExhausted',
        sts.tuple([v9090.MessageId, v9090.Weight, v9090.Weight])
    ),
    /**
     * The weight limit for handling upward messages was reached.
     * \[ id, remaining, required \]
     */
    v9291: new EventType(
        'Ump.WeightExhausted',
        sts.tuple([sts.bytes(), v9291.Weight, v9291.Weight])
    ),
    /**
     * The weight limit for handling upward messages was reached.
     * \[ id, remaining, required \]
     */
    v9320: new EventType(
        'Ump.WeightExhausted',
        sts.tuple([sts.bytes(), v9320.Weight, v9320.Weight])
    ),
}

export const upwardMessagesReceived =  {
    name: 'Ump.UpwardMessagesReceived',
    /**
     *  Some downward messages have been received and will be processed.
     *  \[ para, count, size \]
     */
    v9090: new EventType(
        'Ump.UpwardMessagesReceived',
        sts.tuple([v9090.ParaId, sts.number(), sts.number()])
    ),
}

export const overweightEnqueued =  {
    name: 'Ump.OverweightEnqueued',
    /**
     *  The weight budget was exceeded for an individual downward message.
     * 
     *  This message can be later dispatched manually using `service_overweight` dispatchable
     *  using the assigned `overweight_index`.
     * 
     *  \[ para, id, overweight_index, required \]
     */
    v9100: new EventType(
        'Ump.OverweightEnqueued',
        sts.tuple([v9100.ParaId, v9100.MessageId, v9100.OverweightIndex, v9100.Weight])
    ),
    /**
     * The weight budget was exceeded for an individual upward message.
     * 
     * This message can be later dispatched manually using `service_overweight` dispatchable
     * using the assigned `overweight_index`.
     * 
     * \[ para, id, overweight_index, required \]
     */
    v9291: new EventType(
        'Ump.OverweightEnqueued',
        sts.tuple([v9291.Id, sts.bytes(), sts.bigint(), v9291.Weight])
    ),
    /**
     * The weight budget was exceeded for an individual upward message.
     * 
     * This message can be later dispatched manually using `service_overweight` dispatchable
     * using the assigned `overweight_index`.
     * 
     * \[ para, id, overweight_index, required \]
     */
    v9320: new EventType(
        'Ump.OverweightEnqueued',
        sts.tuple([v9320.Id, sts.bytes(), sts.bigint(), v9320.Weight])
    ),
}

export const overweightServiced =  {
    name: 'Ump.OverweightServiced',
    /**
     *  Downward message from the overweight queue was executed with the given actual weight
     *  used.
     * 
     *  \[ overweight_index, used \]
     */
    v9100: new EventType(
        'Ump.OverweightServiced',
        sts.tuple([v9100.OverweightIndex, v9100.Weight])
    ),
    /**
     * Upward message from the overweight queue was executed with the given actual weight
     * used.
     * 
     * \[ overweight_index, used \]
     */
    v9291: new EventType(
        'Ump.OverweightServiced',
        sts.tuple([sts.bigint(), v9291.Weight])
    ),
    /**
     * Upward message from the overweight queue was executed with the given actual weight
     * used.
     * 
     * \[ overweight_index, used \]
     */
    v9320: new EventType(
        'Ump.OverweightServiced',
        sts.tuple([sts.bigint(), v9320.Weight])
    ),
}
