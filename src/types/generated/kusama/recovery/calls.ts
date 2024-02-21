import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1040 from '../v1040'
import * as v1042 from '../v1042'
import * as v1050 from '../v1050'
import * as v1054 from '../v1054'
import * as v1055 from '../v1055'
import * as v1058 from '../v1058'
import * as v1062 from '../v1062'
import * as v2005 from '../v2005'
import * as v2007 from '../v2007'
import * as v2011 from '../v2011'
import * as v2013 from '../v2013'
import * as v2015 from '../v2015'
import * as v2022 from '../v2022'
import * as v2023 from '../v2023'
import * as v2024 from '../v2024'
import * as v2025 from '../v2025'
import * as v2026 from '../v2026'
import * as v2028 from '../v2028'
import * as v2029 from '../v2029'
import * as v2030 from '../v2030'
import * as v9010 from '../v9010'
import * as v9030 from '../v9030'
import * as v9040 from '../v9040'
import * as v9050 from '../v9050'
import * as v9080 from '../v9080'
import * as v9090 from '../v9090'
import * as v9100 from '../v9100'
import * as v9111 from '../v9111'
import * as v9122 from '../v9122'
import * as v9130 from '../v9130'
import * as v9160 from '../v9160'
import * as v9170 from '../v9170'
import * as v9180 from '../v9180'
import * as v9190 from '../v9190'
import * as v9220 from '../v9220'
import * as v9230 from '../v9230'
import * as v9250 from '../v9250'
import * as v9271 from '../v9271'
import * as v9291 from '../v9291'
import * as v9300 from '../v9300'
import * as v9320 from '../v9320'
import * as v9340 from '../v9340'
import * as v9350 from '../v9350'
import * as v9370 from '../v9370'
import * as v9381 from '../v9381'
import * as v9420 from '../v9420'
import * as v9430 from '../v9430'
import * as v1000000 from '../v1000000'
import * as v1001000 from '../v1001000'

export const asRecovered =  {
    name: 'Recovery.as_recovered',
    /**
     *  Send a call through a recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you want to make a call on-behalf-of.
     *  - `call`: The call you want to make with the recovered account.
     * 
     *  # <weight>
     *  - The weight of the `call`.
     *  - One storage lookup to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    v1040: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v1040.AccountId,
            call: v1040.Type_110,
        })
    ),
    /**
     *  Send a call through a recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you want to make a call on-behalf-of.
     *  - `call`: The call you want to make with the recovered account.
     * 
     *  # <weight>
     *  - The weight of the `call`.
     *  - One storage lookup to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    v1042: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v1042.AccountId,
            call: v1042.Type_110,
        })
    ),
    /**
     *  Send a call through a recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you want to make a call on-behalf-of.
     *  - `call`: The call you want to make with the recovered account.
     * 
     *  # <weight>
     *  - The weight of the `call` + 10,000.
     *  - One storage lookup to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    v1050: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v1050.AccountId,
            call: v1050.Type_113,
        })
    ),
    /**
     *  Send a call through a recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you want to make a call on-behalf-of.
     *  - `call`: The call you want to make with the recovered account.
     * 
     *  # <weight>
     *  - The weight of the `call` + 10,000.
     *  - One storage lookup to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    v1054: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v1054.AccountId,
            call: v1054.Type_113,
        })
    ),
    /**
     *  Send a call through a recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you want to make a call on-behalf-of.
     *  - `call`: The call you want to make with the recovered account.
     * 
     *  # <weight>
     *  - The weight of the `call` + 10,000.
     *  - One storage lookup to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    v1055: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v1055.AccountId,
            call: v1055.Type_116,
        })
    ),
    /**
     *  Send a call through a recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you want to make a call on-behalf-of.
     *  - `call`: The call you want to make with the recovered account.
     * 
     *  # <weight>
     *  - The weight of the `call` + 10,000.
     *  - One storage lookup to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    v1058: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v1058.AccountId,
            call: v1058.Type_176,
        })
    ),
    /**
     *  Send a call through a recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you want to make a call on-behalf-of.
     *  - `call`: The call you want to make with the recovered account.
     * 
     *  # <weight>
     *  - The weight of the `call` + 10,000.
     *  - One storage lookup to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    v1062: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v1062.AccountId,
            call: v1062.Type_175,
        })
    ),
    /**
     *  Send a call through a recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you want to make a call on-behalf-of.
     *  - `call`: The call you want to make with the recovered account.
     * 
     *  # <weight>
     *  - The weight of the `call` + 10,000.
     *  - One storage lookup to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    v2005: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v2005.AccountId,
            call: v2005.Type_188,
        })
    ),
    /**
     *  Send a call through a recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you want to make a call on-behalf-of.
     *  - `call`: The call you want to make with the recovered account.
     * 
     *  # <weight>
     *  - The weight of the `call` + 10,000.
     *  - One storage lookup to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    v2007: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v2007.AccountId,
            call: v2007.Type_189,
        })
    ),
    /**
     *  Send a call through a recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you want to make a call on-behalf-of.
     *  - `call`: The call you want to make with the recovered account.
     * 
     *  # <weight>
     *  - The weight of the `call` + 10,000.
     *  - One storage lookup to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    v2011: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v2011.AccountId,
            call: v2011.Type_190,
        })
    ),
    /**
     *  Send a call through a recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you want to make a call on-behalf-of.
     *  - `call`: The call you want to make with the recovered account.
     * 
     *  # <weight>
     *  - The weight of the `call` + 10,000.
     *  - One storage lookup to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    v2013: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v2013.AccountId,
            call: v2013.Type_190,
        })
    ),
    /**
     *  Send a call through a recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you want to make a call on-behalf-of.
     *  - `call`: The call you want to make with the recovered account.
     * 
     *  # <weight>
     *  - The weight of the `call` + 10,000.
     *  - One storage lookup to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    v2015: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v2015.AccountId,
            call: v2015.Type_192,
        })
    ),
    /**
     *  Send a call through a recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you want to make a call on-behalf-of.
     *  - `call`: The call you want to make with the recovered account.
     * 
     *  # <weight>
     *  - The weight of the `call` + 10,000.
     *  - One storage lookup to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    v2022: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v2022.AccountId,
            call: v2022.Type_192,
        })
    ),
    /**
     *  Send a call through a recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you want to make a call on-behalf-of.
     *  - `call`: The call you want to make with the recovered account.
     * 
     *  # <weight>
     *  - The weight of the `call` + 10,000.
     *  - One storage lookup to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    v2023: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v2023.AccountId,
            call: v2023.Type_194,
        })
    ),
    /**
     *  Send a call through a recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you want to make a call on-behalf-of.
     *  - `call`: The call you want to make with the recovered account.
     * 
     *  # <weight>
     *  - The weight of the `call` + 10,000.
     *  - One storage lookup to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    v2024: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v2024.AccountId,
            call: v2024.Type_194,
        })
    ),
    /**
     *  Send a call through a recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you want to make a call on-behalf-of.
     *  - `call`: The call you want to make with the recovered account.
     * 
     *  # <weight>
     *  - The weight of the `call` + 10,000.
     *  - One storage lookup to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    v2025: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v2025.AccountId,
            call: v2025.Type_195,
        })
    ),
    /**
     *  Send a call through a recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you want to make a call on-behalf-of.
     *  - `call`: The call you want to make with the recovered account.
     * 
     *  # <weight>
     *  - The weight of the `call` + 10,000.
     *  - One storage lookup to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    v2026: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v2026.AccountId,
            call: v2026.Type_194,
        })
    ),
    /**
     *  Send a call through a recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you want to make a call on-behalf-of.
     *  - `call`: The call you want to make with the recovered account.
     * 
     *  # <weight>
     *  - The weight of the `call` + 10,000.
     *  - One storage lookup to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    v2028: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v2028.AccountId,
            call: v2028.Type_199,
        })
    ),
    /**
     *  Send a call through a recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you want to make a call on-behalf-of.
     *  - `call`: The call you want to make with the recovered account.
     * 
     *  # <weight>
     *  - The weight of the `call` + 10,000.
     *  - One storage lookup to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    v2029: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v2029.AccountId,
            call: v2029.Type_199,
        })
    ),
    /**
     *  Send a call through a recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you want to make a call on-behalf-of.
     *  - `call`: The call you want to make with the recovered account.
     * 
     *  # <weight>
     *  - The weight of the `call` + 10,000.
     *  - One storage lookup to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    v2030: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v2030.AccountId,
            call: v2030.Type_138,
        })
    ),
    /**
     *  Send a call through a recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you want to make a call on-behalf-of.
     *  - `call`: The call you want to make with the recovered account.
     * 
     *  # <weight>
     *  - The weight of the `call` + 10,000.
     *  - One storage lookup to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    v9010: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v9010.AccountId,
            call: v9010.Type_138,
        })
    ),
    /**
     *  Send a call through a recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you want to make a call on-behalf-of.
     *  - `call`: The call you want to make with the recovered account.
     * 
     *  # <weight>
     *  - The weight of the `call` + 10,000.
     *  - One storage lookup to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    v9030: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v9030.AccountId,
            call: v9030.Type_138,
        })
    ),
    /**
     *  Send a call through a recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you want to make a call on-behalf-of.
     *  - `call`: The call you want to make with the recovered account.
     * 
     *  # <weight>
     *  - The weight of the `call` + 10,000.
     *  - One storage lookup to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    v9040: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v9040.AccountId,
            call: v9040.Type_138,
        })
    ),
    /**
     *  Send a call through a recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you want to make a call on-behalf-of.
     *  - `call`: The call you want to make with the recovered account.
     * 
     *  # <weight>
     *  - The weight of the `call` + 10,000.
     *  - One storage lookup to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    v9050: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v9050.AccountId,
            call: v9050.Type_139,
        })
    ),
    /**
     *  Send a call through a recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you want to make a call on-behalf-of.
     *  - `call`: The call you want to make with the recovered account.
     * 
     *  # <weight>
     *  - The weight of the `call` + 10,000.
     *  - One storage lookup to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    v9080: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v9080.AccountId,
            call: v9080.Type_138,
        })
    ),
    /**
     *  Send a call through a recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you want to make a call on-behalf-of.
     *  - `call`: The call you want to make with the recovered account.
     * 
     *  # <weight>
     *  - The weight of the `call` + 10,000.
     *  - One storage lookup to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    v9090: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v9090.AccountId,
            call: v9090.Type_138,
        })
    ),
    /**
     *  Send a call through a recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you want to make a call on-behalf-of.
     *  - `call`: The call you want to make with the recovered account.
     * 
     *  # <weight>
     *  - The weight of the `call` + 10,000.
     *  - One storage lookup to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    v9100: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v9100.AccountId,
            call: v9100.Type_138,
        })
    ),
    /**
     * Send a call through a recovered account.
     * 
     * The dispatch origin for this call must be _Signed_ and registered to
     * be able to make calls on behalf of the recovered account.
     * 
     * Parameters:
     * - `account`: The recovered account you want to make a call on-behalf-of.
     * - `call`: The call you want to make with the recovered account.
     * 
     * # <weight>
     * - The weight of the `call` + 10,000.
     * - One storage lookup to check account is recovered by `who`. O(1)
     * # </weight>
     */
    v9111: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v9111.AccountId32,
            call: v9111.Call,
        })
    ),
    /**
     * Send a call through a recovered account.
     * 
     * The dispatch origin for this call must be _Signed_ and registered to
     * be able to make calls on behalf of the recovered account.
     * 
     * Parameters:
     * - `account`: The recovered account you want to make a call on-behalf-of.
     * - `call`: The call you want to make with the recovered account.
     * 
     * # <weight>
     * - The weight of the `call` + 10,000.
     * - One storage lookup to check account is recovered by `who`. O(1)
     * # </weight>
     */
    v9122: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v9122.AccountId32,
            call: v9122.Call,
        })
    ),
    /**
     * Send a call through a recovered account.
     * 
     * The dispatch origin for this call must be _Signed_ and registered to
     * be able to make calls on behalf of the recovered account.
     * 
     * Parameters:
     * - `account`: The recovered account you want to make a call on-behalf-of.
     * - `call`: The call you want to make with the recovered account.
     * 
     * # <weight>
     * - The weight of the `call` + 10,000.
     * - One storage lookup to check account is recovered by `who`. O(1)
     * # </weight>
     */
    v9130: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v9130.AccountId32,
            call: v9130.Call,
        })
    ),
    /**
     * Send a call through a recovered account.
     * 
     * The dispatch origin for this call must be _Signed_ and registered to
     * be able to make calls on behalf of the recovered account.
     * 
     * Parameters:
     * - `account`: The recovered account you want to make a call on-behalf-of.
     * - `call`: The call you want to make with the recovered account.
     * 
     * # <weight>
     * - The weight of the `call` + 10,000.
     * - One storage lookup to check account is recovered by `who`. O(1)
     * # </weight>
     */
    v9160: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v9160.AccountId32,
            call: v9160.Call,
        })
    ),
    /**
     * Send a call through a recovered account.
     * 
     * The dispatch origin for this call must be _Signed_ and registered to
     * be able to make calls on behalf of the recovered account.
     * 
     * Parameters:
     * - `account`: The recovered account you want to make a call on-behalf-of.
     * - `call`: The call you want to make with the recovered account.
     * 
     * # <weight>
     * - The weight of the `call` + 10,000.
     * - One storage lookup to check account is recovered by `who`. O(1)
     * # </weight>
     */
    v9170: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v9170.AccountId32,
            call: v9170.Call,
        })
    ),
    /**
     * Send a call through a recovered account.
     * 
     * The dispatch origin for this call must be _Signed_ and registered to
     * be able to make calls on behalf of the recovered account.
     * 
     * Parameters:
     * - `account`: The recovered account you want to make a call on-behalf-of.
     * - `call`: The call you want to make with the recovered account.
     * 
     * # <weight>
     * - The weight of the `call` + 10,000.
     * - One storage lookup to check account is recovered by `who`. O(1)
     * # </weight>
     */
    v9180: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v9180.AccountId32,
            call: v9180.Call,
        })
    ),
    /**
     * Send a call through a recovered account.
     * 
     * The dispatch origin for this call must be _Signed_ and registered to
     * be able to make calls on behalf of the recovered account.
     * 
     * Parameters:
     * - `account`: The recovered account you want to make a call on-behalf-of.
     * - `call`: The call you want to make with the recovered account.
     * 
     * # <weight>
     * - The weight of the `call` + 10,000.
     * - One storage lookup to check account is recovered by `who`. O(1)
     * # </weight>
     */
    v9190: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v9190.AccountId32,
            call: v9190.Call,
        })
    ),
    /**
     * Send a call through a recovered account.
     * 
     * The dispatch origin for this call must be _Signed_ and registered to
     * be able to make calls on behalf of the recovered account.
     * 
     * Parameters:
     * - `account`: The recovered account you want to make a call on-behalf-of.
     * - `call`: The call you want to make with the recovered account.
     */
    v9220: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v9220.AccountId32,
            call: v9220.Call,
        })
    ),
    /**
     * Send a call through a recovered account.
     * 
     * The dispatch origin for this call must be _Signed_ and registered to
     * be able to make calls on behalf of the recovered account.
     * 
     * Parameters:
     * - `account`: The recovered account you want to make a call on-behalf-of.
     * - `call`: The call you want to make with the recovered account.
     */
    v9230: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v9230.AccountId32,
            call: v9230.Call,
        })
    ),
    /**
     * Send a call through a recovered account.
     * 
     * The dispatch origin for this call must be _Signed_ and registered to
     * be able to make calls on behalf of the recovered account.
     * 
     * Parameters:
     * - `account`: The recovered account you want to make a call on-behalf-of.
     * - `call`: The call you want to make with the recovered account.
     */
    v9250: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v9250.AccountId32,
            call: v9250.Call,
        })
    ),
    /**
     * Send a call through a recovered account.
     * 
     * The dispatch origin for this call must be _Signed_ and registered to
     * be able to make calls on behalf of the recovered account.
     * 
     * Parameters:
     * - `account`: The recovered account you want to make a call on-behalf-of.
     * - `call`: The call you want to make with the recovered account.
     */
    v9271: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v9271.AccountId32,
            call: v9271.Call,
        })
    ),
    /**
     * Send a call through a recovered account.
     * 
     * The dispatch origin for this call must be _Signed_ and registered to
     * be able to make calls on behalf of the recovered account.
     * 
     * Parameters:
     * - `account`: The recovered account you want to make a call on-behalf-of.
     * - `call`: The call you want to make with the recovered account.
     */
    v9291: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v9291.MultiAddress,
            call: v9291.Call,
        })
    ),
    /**
     * Send a call through a recovered account.
     * 
     * The dispatch origin for this call must be _Signed_ and registered to
     * be able to make calls on behalf of the recovered account.
     * 
     * Parameters:
     * - `account`: The recovered account you want to make a call on-behalf-of.
     * - `call`: The call you want to make with the recovered account.
     */
    v9300: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v9300.MultiAddress,
            call: v9300.Call,
        })
    ),
    /**
     * Send a call through a recovered account.
     * 
     * The dispatch origin for this call must be _Signed_ and registered to
     * be able to make calls on behalf of the recovered account.
     * 
     * Parameters:
     * - `account`: The recovered account you want to make a call on-behalf-of.
     * - `call`: The call you want to make with the recovered account.
     */
    v9320: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v9320.MultiAddress,
            call: v9320.Call,
        })
    ),
    /**
     * Send a call through a recovered account.
     * 
     * The dispatch origin for this call must be _Signed_ and registered to
     * be able to make calls on behalf of the recovered account.
     * 
     * Parameters:
     * - `account`: The recovered account you want to make a call on-behalf-of.
     * - `call`: The call you want to make with the recovered account.
     */
    v9340: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v9340.MultiAddress,
            call: v9340.Call,
        })
    ),
    /**
     * Send a call through a recovered account.
     * 
     * The dispatch origin for this call must be _Signed_ and registered to
     * be able to make calls on behalf of the recovered account.
     * 
     * Parameters:
     * - `account`: The recovered account you want to make a call on-behalf-of.
     * - `call`: The call you want to make with the recovered account.
     */
    v9350: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v9350.MultiAddress,
            call: v9350.Call,
        })
    ),
    /**
     * Send a call through a recovered account.
     * 
     * The dispatch origin for this call must be _Signed_ and registered to
     * be able to make calls on behalf of the recovered account.
     * 
     * Parameters:
     * - `account`: The recovered account you want to make a call on-behalf-of.
     * - `call`: The call you want to make with the recovered account.
     */
    v9370: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v9370.MultiAddress,
            call: v9370.Call,
        })
    ),
    /**
     * Send a call through a recovered account.
     * 
     * The dispatch origin for this call must be _Signed_ and registered to
     * be able to make calls on behalf of the recovered account.
     * 
     * Parameters:
     * - `account`: The recovered account you want to make a call on-behalf-of.
     * - `call`: The call you want to make with the recovered account.
     */
    v9381: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v9381.MultiAddress,
            call: v9381.Call,
        })
    ),
    /**
     * Send a call through a recovered account.
     * 
     * The dispatch origin for this call must be _Signed_ and registered to
     * be able to make calls on behalf of the recovered account.
     * 
     * Parameters:
     * - `account`: The recovered account you want to make a call on-behalf-of.
     * - `call`: The call you want to make with the recovered account.
     */
    v9420: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v9420.MultiAddress,
            call: v9420.Call,
        })
    ),
    /**
     * Send a call through a recovered account.
     * 
     * The dispatch origin for this call must be _Signed_ and registered to
     * be able to make calls on behalf of the recovered account.
     * 
     * Parameters:
     * - `account`: The recovered account you want to make a call on-behalf-of.
     * - `call`: The call you want to make with the recovered account.
     */
    v9430: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v9430.MultiAddress,
            call: v9430.Call,
        })
    ),
    /**
     * See [`Pallet::as_recovered`].
     */
    v1000000: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v1000000.MultiAddress,
            call: v1000000.Call,
        })
    ),
    /**
     * See [`Pallet::as_recovered`].
     */
    v1001000: new CallType(
        'Recovery.as_recovered',
        sts.struct({
            account: v1001000.MultiAddress,
            call: v1001000.Call,
        })
    ),
}

export const setRecovered =  {
    name: 'Recovery.set_recovered',
    /**
     *  Allow ROOT to bypass the recovery process and set an a rescuer account
     *  for a lost account directly.
     * 
     *  The dispatch origin for this call must be _ROOT_.
     * 
     *  Parameters:
     *  - `lost`: The "lost account" to be recovered.
     *  - `rescuer`: The "rescuer account" which can call as the lost account.
     * 
     *  # <weight>
     *  - One storage write O(1)
     *  - One event
     *  # </weight>
     */
    v1040: new CallType(
        'Recovery.set_recovered',
        sts.struct({
            lost: v1040.AccountId,
            rescuer: v1040.AccountId,
        })
    ),
    /**
     * Allow ROOT to bypass the recovery process and set an a rescuer account
     * for a lost account directly.
     * 
     * The dispatch origin for this call must be _ROOT_.
     * 
     * Parameters:
     * - `lost`: The "lost account" to be recovered.
     * - `rescuer`: The "rescuer account" which can call as the lost account.
     */
    v9291: new CallType(
        'Recovery.set_recovered',
        sts.struct({
            lost: v9291.MultiAddress,
            rescuer: v9291.MultiAddress,
        })
    ),
}

export const createRecovery =  {
    name: 'Recovery.create_recovery',
    /**
     *  Create a recovery configuration for your account. This makes your account recoverable.
     * 
     *  Payment: `ConfigDepositBase` + `FriendDepositFactor` * #_of_friends balance
     *  will be reserved for storing the recovery configuration. This deposit is returned
     *  in full when the user calls `remove_recovery`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `friends`: A list of friends you trust to vouch for recovery attempts.
     *    Should be ordered and contain no duplicate values.
     *  - `threshold`: The number of friends that must vouch for a recovery attempt
     *    before the account can be recovered. Should be less than or equal to
     *    the length of the list of friends.
     *  - `delay_period`: The number of blocks after a recovery attempt is initialized
     *    that needs to pass before the account can be recovered.
     * 
     *  # <weight>
     *  - Key: F (len of friends)
     *  - One storage read to check that account is not already recoverable. O(1).
     *  - A check that the friends list is sorted and unique. O(F)
     *  - One currency reserve operation. O(X)
     *  - One storage write. O(1). Codec O(F).
     *  - One event.
     * 
     *  Total Complexity: O(F + X)
     *  # </weight>
     */
    v1040: new CallType(
        'Recovery.create_recovery',
        sts.struct({
            friends: sts.array(() => v1040.AccountId),
            threshold: sts.number(),
            delayPeriod: v1040.BlockNumber,
        })
    ),
}

export const initiateRecovery =  {
    name: 'Recovery.initiate_recovery',
    /**
     *  Initiate the process for recovering a recoverable account.
     * 
     *  Payment: `RecoveryDeposit` balance will be reserved for initiating the
     *  recovery process. This deposit will always be repatriated to the account
     *  trying to be recovered. See `close_recovery`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `account`: The lost account that you want to recover. This account
     *    needs to be recoverable (i.e. have a recovery configuration).
     * 
     *  # <weight>
     *  - One storage read to check that account is recoverable. O(F)
     *  - One storage read to check that this recovery process hasn't already started. O(1)
     *  - One currency reserve operation. O(X)
     *  - One storage read to get the current block number. O(1)
     *  - One storage write. O(1).
     *  - One event.
     * 
     *  Total Complexity: O(F + X)
     *  # </weight>
     */
    v1040: new CallType(
        'Recovery.initiate_recovery',
        sts.struct({
            account: v1040.AccountId,
        })
    ),
    /**
     * Initiate the process for recovering a recoverable account.
     * 
     * Payment: `RecoveryDeposit` balance will be reserved for initiating the
     * recovery process. This deposit will always be repatriated to the account
     * trying to be recovered. See `close_recovery`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `account`: The lost account that you want to recover. This account needs to be
     *   recoverable (i.e. have a recovery configuration).
     */
    v9291: new CallType(
        'Recovery.initiate_recovery',
        sts.struct({
            account: v9291.MultiAddress,
        })
    ),
}

export const vouchRecovery =  {
    name: 'Recovery.vouch_recovery',
    /**
     *  Allow a "friend" of a recoverable account to vouch for an active recovery
     *  process for that account.
     * 
     *  The dispatch origin for this call must be _Signed_ and must be a "friend"
     *  for the recoverable account.
     * 
     *  Parameters:
     *  - `lost`: The lost account that you want to recover.
     *  - `rescuer`: The account trying to rescue the lost account that you
     *    want to vouch for.
     * 
     *  The combination of these two parameters must point to an active recovery
     *  process.
     * 
     *  # <weight>
     *  Key: F (len of friends in config), V (len of vouching friends)
     *  - One storage read to get the recovery configuration. O(1), Codec O(F)
     *  - One storage read to get the active recovery process. O(1), Codec O(V)
     *  - One binary search to confirm caller is a friend. O(logF)
     *  - One binary search to confirm caller has not already vouched. O(logV)
     *  - One storage write. O(1), Codec O(V).
     *  - One event.
     * 
     *  Total Complexity: O(F + logF + V + logV)
     *  # </weight>
     */
    v1040: new CallType(
        'Recovery.vouch_recovery',
        sts.struct({
            lost: v1040.AccountId,
            rescuer: v1040.AccountId,
        })
    ),
    /**
     * Allow a "friend" of a recoverable account to vouch for an active recovery
     * process for that account.
     * 
     * The dispatch origin for this call must be _Signed_ and must be a "friend"
     * for the recoverable account.
     * 
     * Parameters:
     * - `lost`: The lost account that you want to recover.
     * - `rescuer`: The account trying to rescue the lost account that you want to vouch for.
     * 
     * The combination of these two parameters must point to an active recovery
     * process.
     */
    v9291: new CallType(
        'Recovery.vouch_recovery',
        sts.struct({
            lost: v9291.MultiAddress,
            rescuer: v9291.MultiAddress,
        })
    ),
}

export const claimRecovery =  {
    name: 'Recovery.claim_recovery',
    /**
     *  Allow a successful rescuer to claim their recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and must be a "rescuer"
     *  who has successfully completed the account recovery process: collected
     *  `threshold` or more vouches, waited `delay_period` blocks since initiation.
     * 
     *  Parameters:
     *  - `account`: The lost account that you want to claim has been successfully
     *    recovered by you.
     * 
     *  # <weight>
     *  Key: F (len of friends in config), V (len of vouching friends)
     *  - One storage read to get the recovery configuration. O(1), Codec O(F)
     *  - One storage read to get the active recovery process. O(1), Codec O(V)
     *  - One storage read to get the current block number. O(1)
     *  - One storage write. O(1), Codec O(V).
     *  - One event.
     * 
     *  Total Complexity: O(F + V)
     *  # </weight>
     */
    v1040: new CallType(
        'Recovery.claim_recovery',
        sts.struct({
            account: v1040.AccountId,
        })
    ),
    /**
     * Allow a successful rescuer to claim their recovered account.
     * 
     * The dispatch origin for this call must be _Signed_ and must be a "rescuer"
     * who has successfully completed the account recovery process: collected
     * `threshold` or more vouches, waited `delay_period` blocks since initiation.
     * 
     * Parameters:
     * - `account`: The lost account that you want to claim has been successfully recovered by
     *   you.
     */
    v9291: new CallType(
        'Recovery.claim_recovery',
        sts.struct({
            account: v9291.MultiAddress,
        })
    ),
}

export const closeRecovery =  {
    name: 'Recovery.close_recovery',
    /**
     *  As the controller of a recoverable account, close an active recovery
     *  process for your account.
     * 
     *  Payment: By calling this function, the recoverable account will receive
     *  the recovery deposit `RecoveryDeposit` placed by the rescuer.
     * 
     *  The dispatch origin for this call must be _Signed_ and must be a
     *  recoverable account with an active recovery process for it.
     * 
     *  Parameters:
     *  - `rescuer`: The account trying to rescue this recoverable account.
     * 
     *  # <weight>
     *  Key: V (len of vouching friends)
     *  - One storage read/remove to get the active recovery process. O(1), Codec O(V)
     *  - One balance call to repatriate reserved. O(X)
     *  - One event.
     * 
     *  Total Complexity: O(V + X)
     *  # </weight>
     */
    v1040: new CallType(
        'Recovery.close_recovery',
        sts.struct({
            rescuer: v1040.AccountId,
        })
    ),
    /**
     * As the controller of a recoverable account, close an active recovery
     * process for your account.
     * 
     * Payment: By calling this function, the recoverable account will receive
     * the recovery deposit `RecoveryDeposit` placed by the rescuer.
     * 
     * The dispatch origin for this call must be _Signed_ and must be a
     * recoverable account with an active recovery process for it.
     * 
     * Parameters:
     * - `rescuer`: The account trying to rescue this recoverable account.
     */
    v9291: new CallType(
        'Recovery.close_recovery',
        sts.struct({
            rescuer: v9291.MultiAddress,
        })
    ),
}

export const removeRecovery =  {
    name: 'Recovery.remove_recovery',
    /**
     *  Remove the recovery process for your account.
     * 
     *  NOTE: The user must make sure to call `close_recovery` on all active
     *  recovery attempts before calling this function else it will fail.
     * 
     *  Payment: By calling this function the recoverable account will unreserve
     *  their recovery configuration deposit.
     *  (`ConfigDepositBase` + `FriendDepositFactor` * #_of_friends)
     * 
     *  The dispatch origin for this call must be _Signed_ and must be a
     *  recoverable account (i.e. has a recovery configuration).
     * 
     *  # <weight>
     *  Key: F (len of friends)
     *  - One storage read to get the prefix iterator for active recoveries. O(1)
     *  - One storage read/remove to get the recovery configuration. O(1), Codec O(F)
     *  - One balance call to unreserved. O(X)
     *  - One event.
     * 
     *  Total Complexity: O(F + X)
     *  # </weight>
     */
    v1040: new CallType(
        'Recovery.remove_recovery',
        sts.unit()
    ),
}

export const cancelRecovered =  {
    name: 'Recovery.cancel_recovered',
    /**
     *  Cancel the ability to use `as_recovered` for `account`.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you are able to call on-behalf-of.
     * 
     *  # <weight>
     *  - One storage mutation to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    v1050: new CallType(
        'Recovery.cancel_recovered',
        sts.struct({
            account: v1050.AccountId,
        })
    ),
    /**
     * Cancel the ability to use `as_recovered` for `account`.
     * 
     * The dispatch origin for this call must be _Signed_ and registered to
     * be able to make calls on behalf of the recovered account.
     * 
     * Parameters:
     * - `account`: The recovered account you are able to call on-behalf-of.
     */
    v9291: new CallType(
        'Recovery.cancel_recovered',
        sts.struct({
            account: v9291.MultiAddress,
        })
    ),
}
