import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v1022 from '../v1022'
import * as v1024 from '../v1024'

export const sudo =  {
    name: 'Sudo.sudo',
    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Unknown weight of derivative `proposal` execution.
     *  # </weight>
     */
    v1020: new CallType(
        'Sudo.sudo',
        sts.struct({
            proposal: v1020.Proposal,
        })
    ),
    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Unknown weight of derivative `proposal` execution.
     *  # </weight>
     */
    v1022: new CallType(
        'Sudo.sudo',
        sts.struct({
            proposal: v1022.Proposal,
        })
    ),
    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Unknown weight of derivative `proposal` execution.
     *  # </weight>
     */
    v1024: new CallType(
        'Sudo.sudo',
        sts.struct({
            proposal: v1024.Proposal,
        })
    ),
}

export const setKey =  {
    name: 'Sudo.set_key',
    /**
     *  Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo key.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB change.
     *  # </weight>
     */
    v1020: new CallType(
        'Sudo.set_key',
        sts.struct({
            new: v1020.LookupSource,
        })
    ),
}

export const sudoAs =  {
    name: 'Sudo.sudo_as',
    /**
     *  Authenticates the sudo key and dispatches a function call with `Signed` origin from
     *  a given account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Unknown weight of derivative `proposal` execution.
     *  # </weight>
     */
    v1020: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v1020.LookupSource,
            proposal: v1020.Proposal,
        })
    ),
    /**
     *  Authenticates the sudo key and dispatches a function call with `Signed` origin from
     *  a given account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Unknown weight of derivative `proposal` execution.
     *  # </weight>
     */
    v1022: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v1022.LookupSource,
            proposal: v1022.Proposal,
        })
    ),
    /**
     *  Authenticates the sudo key and dispatches a function call with `Signed` origin from
     *  a given account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Unknown weight of derivative `proposal` execution.
     *  # </weight>
     */
    v1024: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v1024.LookupSource,
            proposal: v1024.Proposal,
        })
    ),
}
