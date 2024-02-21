import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'

export const setName =  {
    name: 'Nicks.set_name',
    /**
     *  Set an account's name. The name should be a UTF-8-encoded string by convention, though
     *  we don't check it.
     * 
     *  The name may not be more than `T::MaxLength` bytes, nor less than `T::MinLength` bytes.
     * 
     *  If the account doesn't already have a name, then a fee of `ReservationFee` is reserved
     *  in the account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - At most one balance operation.
     *  - One storage read/write.
     *  - One event.
     *  # </weight>
     */
    v1020: new CallType(
        'Nicks.set_name',
        sts.struct({
            name: sts.bytes(),
        })
    ),
}

export const clearName =  {
    name: 'Nicks.clear_name',
    /**
     *  Clear an account's name and return the deposit. Fails if the account was not named.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - One balance operation.
     *  - One storage read/write.
     *  - One event.
     *  # </weight>
     */
    v1020: new CallType(
        'Nicks.clear_name',
        sts.unit()
    ),
}

export const killName =  {
    name: 'Nicks.kill_name',
    /**
     *  Remove an account's name and take charge of the deposit.
     * 
     *  Fails if `who` has not been named. The deposit is dealt with through `T::Slashed`
     *  imbalance handler.
     * 
     *  The dispatch origin for this call must be _Root_ or match `T::ForceOrigin`.
     * 
     *  # <weight>
     *  - O(1).
     *  - One unbalanced handler (probably a balance transfer)
     *  - One storage read/write.
     *  - One event.
     *  # </weight>
     */
    v1020: new CallType(
        'Nicks.kill_name',
        sts.struct({
            target: v1020.LookupSource,
        })
    ),
}

export const forceName =  {
    name: 'Nicks.force_name',
    /**
     *  Set a third-party account's name with no deposit.
     * 
     *  No length checking is done on the name.
     * 
     *  The dispatch origin for this call must be _Root_ or match `T::ForceOrigin`.
     * 
     *  # <weight>
     *  - O(1).
     *  - At most one balance operation.
     *  - One storage read/write.
     *  - One event.
     *  # </weight>
     */
    v1020: new CallType(
        'Nicks.force_name',
        sts.struct({
            target: v1020.LookupSource,
            name: sts.bytes(),
        })
    ),
}
