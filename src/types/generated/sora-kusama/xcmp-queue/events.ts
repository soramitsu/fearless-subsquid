import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v7 from '../v7'

export const success =  {
    name: 'XcmpQueue.Success',
    /**
     * Some XCM was executed ok.
     */
    v1: new EventType(
        'XcmpQueue.Success',
        sts.option(() => v1.H256)
    ),
    /**
     * Some XCM was executed ok.
     */
    v7: new EventType(
        'XcmpQueue.Success',
        sts.struct({
            messageHash: sts.option(() => sts.bytes()),
            weight: v7.Weight,
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
        sts.tuple([sts.option(() => v1.H256), v1.V2Error])
    ),
    /**
     * Some XCM failed.
     */
    v7: new EventType(
        'XcmpQueue.Fail',
        sts.struct({
            messageHash: sts.option(() => sts.bytes()),
            error: v7.V3Error,
            weight: v7.Weight,
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
        sts.option(() => v1.H256)
    ),
    /**
     * Bad XCM version used.
     */
    v7: new EventType(
        'XcmpQueue.BadVersion',
        sts.struct({
            messageHash: sts.option(() => sts.bytes()),
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
        sts.option(() => v1.H256)
    ),
    /**
     * Bad XCM format used.
     */
    v7: new EventType(
        'XcmpQueue.BadFormat',
        sts.struct({
            messageHash: sts.option(() => sts.bytes()),
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
        sts.option(() => v1.H256)
    ),
}

export const xcmpMessageSent =  {
    name: 'XcmpQueue.XcmpMessageSent',
    /**
     * An HRMP message was sent to a sibling parachain.
     */
    v1: new EventType(
        'XcmpQueue.XcmpMessageSent',
        sts.option(() => v1.H256)
    ),
    /**
     * An HRMP message was sent to a sibling parachain.
     */
    v7: new EventType(
        'XcmpQueue.XcmpMessageSent',
        sts.struct({
            messageHash: sts.option(() => sts.bytes()),
        })
    ),
}

export const overweightEnqueued =  {
    name: 'XcmpQueue.OverweightEnqueued',
    /**
     * An XCM exceeded the individual message weight budget.
     */
    v7: new EventType(
        'XcmpQueue.OverweightEnqueued',
        sts.struct({
            sender: v7.Id,
            sentAt: sts.number(),
            index: sts.bigint(),
            required: v7.Weight,
        })
    ),
}

export const overweightServiced =  {
    name: 'XcmpQueue.OverweightServiced',
    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    v7: new EventType(
        'XcmpQueue.OverweightServiced',
        sts.struct({
            index: sts.bigint(),
            used: v7.Weight,
        })
    ),
}
