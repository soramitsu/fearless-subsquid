import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v10 from '../v10'

export const success =  {
    name: 'XcmpQueue.Success',
    /**
     * Some XCM was executed ok.
     */
    v1: new EventType(
        'XcmpQueue.Success',
        sts.struct({
            messageHash: sts.option(() => v1.H256),
            weight: v1.Weight,
        })
    ),
}

export const fail =  {
    name: 'XcmpQueue.Fail',
    /**
     * Some XCM failed.
     */
    v1: new EventType(
        'XcmpQueue.Fail',
        sts.struct({
            messageHash: sts.option(() => v1.H256),
            error: v1.V2Error,
            weight: v1.Weight,
        })
    ),
    /**
     * Some XCM failed.
     */
    v10: new EventType(
        'XcmpQueue.Fail',
        sts.struct({
            messageHash: sts.option(() => sts.bytes()),
            error: v10.V3Error,
            weight: v10.Weight,
        })
    ),
}

export const badVersion =  {
    name: 'XcmpQueue.BadVersion',
    /**
     * Bad XCM version used.
     */
    v1: new EventType(
        'XcmpQueue.BadVersion',
        sts.struct({
            messageHash: sts.option(() => v1.H256),
        })
    ),
}

export const badFormat =  {
    name: 'XcmpQueue.BadFormat',
    /**
     * Bad XCM format used.
     */
    v1: new EventType(
        'XcmpQueue.BadFormat',
        sts.struct({
            messageHash: sts.option(() => v1.H256),
        })
    ),
}

export const upwardMessageSent =  {
    name: 'XcmpQueue.UpwardMessageSent',
    /**
     * An upward message was sent to the relay chain.
     */
    v1: new EventType(
        'XcmpQueue.UpwardMessageSent',
        sts.struct({
            messageHash: sts.option(() => v1.H256),
        })
    ),
}

export const xcmpMessageSent =  {
    name: 'XcmpQueue.XcmpMessageSent',
    /**
     * An HRMP message was sent to a sibling parachain.
     */
    v1: new EventType(
        'XcmpQueue.XcmpMessageSent',
        sts.struct({
            messageHash: sts.option(() => v1.H256),
        })
    ),
}

export const overweightEnqueued =  {
    name: 'XcmpQueue.OverweightEnqueued',
    /**
     * An XCM exceeded the individual message weight budget.
     */
    v1: new EventType(
        'XcmpQueue.OverweightEnqueued',
        sts.struct({
            sender: v1.Id,
            sentAt: sts.number(),
            index: sts.bigint(),
            required: v1.Weight,
        })
    ),
}

export const overweightServiced =  {
    name: 'XcmpQueue.OverweightServiced',
    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    v1: new EventType(
        'XcmpQueue.OverweightServiced',
        sts.struct({
            index: sts.bigint(),
            used: v1.Weight,
        })
    ),
}
