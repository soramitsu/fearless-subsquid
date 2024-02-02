import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v10 from '../v10'

export const invalidFormat =  {
    name: 'DmpQueue.InvalidFormat',
    /**
     * Downward message is invalid XCM.
     */
    v1: new EventType(
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
     */
    v1: new EventType(
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
     */
    v1: new EventType(
        'DmpQueue.ExecutedDownward',
        sts.struct({
            messageId: sts.bytes(),
            outcome: v1.V2Outcome,
        })
    ),
    /**
     * Downward message executed with the given outcome.
     */
    v10: new EventType(
        'DmpQueue.ExecutedDownward',
        sts.struct({
            messageId: sts.bytes(),
            outcome: v10.V3Outcome,
        })
    ),
}

export const weightExhausted =  {
    name: 'DmpQueue.WeightExhausted',
    /**
     * The weight limit for handling downward messages was reached.
     */
    v1: new EventType(
        'DmpQueue.WeightExhausted',
        sts.struct({
            messageId: sts.bytes(),
            remainingWeight: v1.Weight,
            requiredWeight: v1.Weight,
        })
    ),
}

export const overweightEnqueued =  {
    name: 'DmpQueue.OverweightEnqueued',
    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    v1: new EventType(
        'DmpQueue.OverweightEnqueued',
        sts.struct({
            messageId: sts.bytes(),
            overweightIndex: sts.bigint(),
            requiredWeight: v1.Weight,
        })
    ),
}

export const overweightServiced =  {
    name: 'DmpQueue.OverweightServiced',
    /**
     * Downward message from the overweight queue was executed.
     */
    v1: new EventType(
        'DmpQueue.OverweightServiced',
        sts.struct({
            overweightIndex: sts.bigint(),
            weightUsed: v1.Weight,
        })
    ),
}

export const maxMessagesExhausted =  {
    name: 'DmpQueue.MaxMessagesExhausted',
    /**
     * The maximum number of downward messages was.
     */
    v10: new EventType(
        'DmpQueue.MaxMessagesExhausted',
        sts.struct({
            messageId: sts.bytes(),
        })
    ),
}
