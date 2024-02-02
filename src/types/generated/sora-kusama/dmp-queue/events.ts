import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v7 from '../v7'

export const invalidFormat =  {
    name: 'DmpQueue.InvalidFormat',
    /**
     * Downward message is invalid XCM.
     * \[ id \]
     */
    v1: new EventType(
        'DmpQueue.InvalidFormat',
        sts.bytes()
    ),
    /**
     * Downward message is invalid XCM.
     */
    v7: new EventType(
        'DmpQueue.InvalidFormat',
        sts.struct({
            messageId: sts.bytes(),
        })
    ),
}

export const unsupportedVersion =  {
    name: 'DmpQueue.UnsupportedVersion',
    /**
     * Downward message is unsupported version of XCM.
     * \[ id \]
     */
    v1: new EventType(
        'DmpQueue.UnsupportedVersion',
        sts.bytes()
    ),
    /**
     * Downward message is unsupported version of XCM.
     */
    v7: new EventType(
        'DmpQueue.UnsupportedVersion',
        sts.struct({
            messageId: sts.bytes(),
        })
    ),
}

export const executedDownward =  {
    name: 'DmpQueue.ExecutedDownward',
    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    v1: new EventType(
        'DmpQueue.ExecutedDownward',
        sts.tuple([sts.bytes(), v1.V2Outcome])
    ),
    /**
     * Downward message executed with the given outcome.
     */
    v7: new EventType(
        'DmpQueue.ExecutedDownward',
        sts.struct({
            messageId: sts.bytes(),
            outcome: v7.V3Outcome,
        })
    ),
}

export const weightExhausted =  {
    name: 'DmpQueue.WeightExhausted',
    /**
     * The weight limit for handling downward messages was reached.
     * \[ id, remaining, required \]
     */
    v1: new EventType(
        'DmpQueue.WeightExhausted',
        sts.tuple([sts.bytes(), sts.bigint(), sts.bigint()])
    ),
    /**
     * The weight limit for handling downward messages was reached.
     */
    v7: new EventType(
        'DmpQueue.WeightExhausted',
        sts.struct({
            messageId: sts.bytes(),
            remainingWeight: v7.Weight,
            requiredWeight: v7.Weight,
        })
    ),
}

export const overweightEnqueued =  {
    name: 'DmpQueue.OverweightEnqueued',
    /**
     * Downward message is overweight and was placed in the overweight queue.
     * \[ id, index, required \]
     */
    v1: new EventType(
        'DmpQueue.OverweightEnqueued',
        sts.tuple([sts.bytes(), sts.bigint(), sts.bigint()])
    ),
    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    v7: new EventType(
        'DmpQueue.OverweightEnqueued',
        sts.struct({
            messageId: sts.bytes(),
            overweightIndex: sts.bigint(),
            requiredWeight: v7.Weight,
        })
    ),
}

export const overweightServiced =  {
    name: 'DmpQueue.OverweightServiced',
    /**
     * Downward message from the overweight queue was executed.
     * \[ index, used \]
     */
    v1: new EventType(
        'DmpQueue.OverweightServiced',
        sts.tuple([sts.bigint(), sts.bigint()])
    ),
    /**
     * Downward message from the overweight queue was executed.
     */
    v7: new EventType(
        'DmpQueue.OverweightServiced',
        sts.struct({
            overweightIndex: sts.bigint(),
            weightUsed: v7.Weight,
        })
    ),
}

export const maxMessagesExhausted =  {
    name: 'DmpQueue.MaxMessagesExhausted',
    /**
     * The maximum number of downward messages was.
     */
    v7: new EventType(
        'DmpQueue.MaxMessagesExhausted',
        sts.struct({
            messageId: sts.bytes(),
        })
    ),
}
