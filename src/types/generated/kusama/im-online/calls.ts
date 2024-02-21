import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v1062 from '../v1062'
import * as v1000000 from '../v1000000'

export const heartbeat =  {
    name: 'ImOnline.heartbeat',
    v1020: new CallType(
        'ImOnline.heartbeat',
        sts.struct({
            heartbeat: v1020.Heartbeat,
            signature: v1020.Signature,
        })
    ),
    /**
     *  # <weight>
     *  - Complexity: `O(K + E)` where K is length of `Keys` and E is length of
     *    `Heartbeat.network_state.external_address`
     * 
     *    - `O(K)`: decoding of length `K`
     *    - `O(E)`: decoding/encoding of length `E`
     *  - DbReads: pallet_session `Validators`, pallet_session `CurrentIndex`, `Keys`,
     *    `ReceivedHeartbeats`
     *  - DbWrites: `ReceivedHeartbeats`
     *  # </weight>
     */
    v1062: new CallType(
        'ImOnline.heartbeat',
        sts.struct({
            heartbeat: v1062.Heartbeat,
            signature: v1062.Signature,
        })
    ),
    /**
     * See [`Pallet::heartbeat`].
     */
    v1000000: new CallType(
        'ImOnline.heartbeat',
        sts.struct({
            heartbeat: v1000000.Heartbeat,
            signature: sts.bytes(),
        })
    ),
}
