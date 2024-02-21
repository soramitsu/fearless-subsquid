import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v9130 from '../v9130'

export const heartbeatReceived =  {
    name: 'ImOnline.HeartbeatReceived',
    /**
     *  A new heartbeat was received from `AuthorityId`
     */
    v1020: new EventType(
        'ImOnline.HeartbeatReceived',
        v1020.AuthorityId
    ),
    /**
     * A new heartbeat was received from `AuthorityId`.
     */
    v9130: new EventType(
        'ImOnline.HeartbeatReceived',
        sts.struct({
            authorityId: sts.bytes(),
        })
    ),
}

export const allGood =  {
    name: 'ImOnline.AllGood',
    /**
     *  At the end of the session, no offence was committed.
     */
    v1020: new EventType(
        'ImOnline.AllGood',
        sts.unit()
    ),
}

export const someOffline =  {
    name: 'ImOnline.SomeOffline',
    /**
     *  At the end of the session, at least once validator was found to be offline.
     */
    v1020: new EventType(
        'ImOnline.SomeOffline',
        sts.array(() => v1020.IdentificationTuple)
    ),
    /**
     * At the end of the session, at least one validator was found to be offline.
     */
    v9130: new EventType(
        'ImOnline.SomeOffline',
        sts.struct({
            offline: sts.array(() => sts.tuple(() => [v9130.AccountId32, v9130.Exposure])),
        })
    ),
}
