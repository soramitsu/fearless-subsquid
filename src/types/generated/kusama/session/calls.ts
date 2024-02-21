import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v2028 from '../v2028'
import * as v9111 from '../v9111'
import * as v1000000 from '../v1000000'

export const setKeys =  {
    name: 'Session.set_keys',
    /**
     *  Sets the session key(s) of the function caller to `key`.
     *  Allows an account to set its session key prior to becoming a validator.
     *  This doesn't take effect until the next session.
     * 
     *  The dispatch origin of this function must be signed.
     * 
     *  # <weight>
     *  - O(log n) in number of accounts.
     *  - One extra DB entry.
     *  # </weight>
     */
    v1020: new CallType(
        'Session.set_keys',
        sts.struct({
            keys: v1020.Keys,
            proof: sts.bytes(),
        })
    ),
    /**
     *  Sets the session key(s) of the function caller to `keys`.
     *  Allows an account to set its session key prior to becoming a validator.
     *  This doesn't take effect until the next session.
     * 
     *  The dispatch origin of this function must be signed.
     * 
     *  # <weight>
     *  - Complexity: `O(1)`
     *    Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
     *  - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
     *  - DbWrites: `origin account`, `NextKeys`
     *  - DbReads per key id: `KeyOwner`
     *  - DbWrites per key id: `KeyOwner`
     *  # </weight>
     */
    v2028: new CallType(
        'Session.set_keys',
        sts.struct({
            keys: v2028.Keys,
            proof: sts.bytes(),
        })
    ),
    /**
     * Sets the session key(s) of the function caller to `keys`.
     * Allows an account to set its session key prior to becoming a validator.
     * This doesn't take effect until the next session.
     * 
     * The dispatch origin of this function must be signed.
     * 
     * # <weight>
     * - Complexity: `O(1)`. Actual cost depends on the number of length of
     *   `T::Keys::key_ids()` which is fixed.
     * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
     * - DbWrites: `origin account`, `NextKeys`
     * - DbReads per key id: `KeyOwner`
     * - DbWrites per key id: `KeyOwner`
     * # </weight>
     */
    v9111: new CallType(
        'Session.set_keys',
        sts.struct({
            keys: v9111.SessionKeys,
            proof: sts.bytes(),
        })
    ),
    /**
     * See [`Pallet::set_keys`].
     */
    v1000000: new CallType(
        'Session.set_keys',
        sts.struct({
            keys: v1000000.SessionKeys,
            proof: sts.bytes(),
        })
    ),
}

export const purgeKeys =  {
    name: 'Session.purge_keys',
    /**
     *  Removes any session key(s) of the function caller.
     *  This doesn't take effect until the next session.
     * 
     *  The dispatch origin of this function must be signed.
     * 
     *  # <weight>
     *  - O(N) in number of key types.
     *  - Removes N + 1 DB entries.
     *  - Reduces system account refs by one on success.
     *  # </weight>
     */
    v1050: new CallType(
        'Session.purge_keys',
        sts.unit()
    ),
}
