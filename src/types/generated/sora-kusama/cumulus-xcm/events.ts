import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v7 from '../v7'

export const invalidFormat =  {
    name: 'CumulusXcm.InvalidFormat',
    /**
     * Downward message is invalid XCM.
     * \[ id \]
     */
    v1: new EventType(
        'CumulusXcm.InvalidFormat',
        sts.bytes()
    ),
}

export const unsupportedVersion =  {
    name: 'CumulusXcm.UnsupportedVersion',
    /**
     * Downward message is unsupported version of XCM.
     * \[ id \]
     */
    v1: new EventType(
        'CumulusXcm.UnsupportedVersion',
        sts.bytes()
    ),
}

export const executedDownward =  {
    name: 'CumulusXcm.ExecutedDownward',
    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    v1: new EventType(
        'CumulusXcm.ExecutedDownward',
        sts.tuple([sts.bytes(), v1.V2Outcome])
    ),
    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    v7: new EventType(
        'CumulusXcm.ExecutedDownward',
        sts.tuple([sts.bytes(), v7.V3Outcome])
    ),
}
