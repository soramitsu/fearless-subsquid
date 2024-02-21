import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v1058 from '../v1058'
import * as v9010 from '../v9010'

export const offence =  {
    name: 'Offences.Offence',
    /**
     *  There is an offence reported of the given `kind` happened at the `session_index` and
     *  (kind-specific) time slot. This event is not deposited for duplicate slashes.
     */
    v1020: new EventType(
        'Offences.Offence',
        sts.tuple([v1020.Kind, v1020.OpaqueTimeSlot])
    ),
    /**
     *  There is an offence reported of the given `kind` happened at the `session_index` and
     *  (kind-specific) time slot. This event is not deposited for duplicate slashes. last
     *  element indicates of the offence was applied (true) or queued (false).
     */
    v1058: new EventType(
        'Offences.Offence',
        sts.tuple([v1058.Kind, v1058.OpaqueTimeSlot, sts.boolean()])
    ),
    /**
     *  There is an offence reported of the given `kind` happened at the `session_index` and
     *  (kind-specific) time slot. This event is not deposited for duplicate slashes.
     *  \[kind, timeslot\].
     */
    v9010: new EventType(
        'Offences.Offence',
        sts.tuple([v9010.Kind, v9010.OpaqueTimeSlot])
    ),
    /**
     * There is an offence reported of the given `kind` happened at the `session_index` and
     * (kind-specific) time slot. This event is not deposited for duplicate slashes.
     * \[kind, timeslot\].
     */
    v9130: new EventType(
        'Offences.Offence',
        sts.struct({
            kind: sts.bytes(),
            timeslot: sts.bytes(),
        })
    ),
}
