import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
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

export const proxy =  {
    name: 'Proxy.proxy',
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 19.87 + .141 * P µs
     *  - DB weight: 1 storage read.
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    v2005: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v2005.AccountId,
            forceProxyType: sts.option(() => v2005.ProxyType),
            call: v2005.Type_188,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 19.87 + .141 * P µs
     *  - DB weight: 1 storage read.
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    v2007: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v2007.AccountId,
            forceProxyType: sts.option(() => v2007.ProxyType),
            call: v2007.Type_189,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 19.87 + .141 * P µs
     *  - DB weight: 1 storage read.
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    v2011: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v2011.AccountId,
            forceProxyType: sts.option(() => v2011.ProxyType),
            call: v2011.Type_190,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 19.87 + .141 * P µs
     *  - DB weight: 1 storage read.
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    v2013: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v2013.AccountId,
            forceProxyType: sts.option(() => v2013.ProxyType),
            call: v2013.Type_190,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 19.87 + .141 * P µs
     *  - DB weight: 1 storage read.
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    v2015: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v2015.AccountId,
            forceProxyType: sts.option(() => v2015.ProxyType),
            call: v2015.Type_192,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 19.87 + .141 * P µs
     *  - DB weight: 1 storage read.
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    v2022: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v2022.AccountId,
            forceProxyType: sts.option(() => v2022.ProxyType),
            call: v2022.Type_192,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    v2023: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v2023.AccountId,
            forceProxyType: sts.option(() => v2023.ProxyType),
            call: v2023.Type_194,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    v2024: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v2024.AccountId,
            forceProxyType: sts.option(() => v2024.ProxyType),
            call: v2024.Type_194,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    v2025: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v2025.AccountId,
            forceProxyType: sts.option(() => v2025.ProxyType),
            call: v2025.Type_195,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    v2026: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v2026.AccountId,
            forceProxyType: sts.option(() => v2026.ProxyType),
            call: v2026.Type_194,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    v2028: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v2028.AccountId,
            forceProxyType: sts.option(() => v2028.ProxyType),
            call: v2028.Type_199,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    v2029: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v2029.AccountId,
            forceProxyType: sts.option(() => v2029.ProxyType),
            call: v2029.Type_199,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    v2030: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v2030.AccountId,
            forceProxyType: sts.option(() => v2030.ProxyType),
            call: v2030.Type_138,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    v9010: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9010.AccountId,
            forceProxyType: sts.option(() => v9010.ProxyType),
            call: v9010.Type_138,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    v9030: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9030.AccountId,
            forceProxyType: sts.option(() => v9030.ProxyType),
            call: v9030.Type_138,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    v9040: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9040.AccountId,
            forceProxyType: sts.option(() => v9040.ProxyType),
            call: v9040.Type_138,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    v9050: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9050.AccountId,
            forceProxyType: sts.option(() => v9050.ProxyType),
            call: v9050.Type_139,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    v9080: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9080.AccountId,
            forceProxyType: sts.option(() => v9080.ProxyType),
            call: v9080.Type_138,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    v9090: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9090.AccountId,
            forceProxyType: sts.option(() => v9090.ProxyType),
            call: v9090.Type_138,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    v9100: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9100.AccountId,
            forceProxyType: sts.option(() => v9100.ProxyType),
            call: v9100.Type_138,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    v9111: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9111.AccountId32,
            forceProxyType: sts.option(() => v9111.ProxyType),
            call: v9111.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    v9122: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9122.AccountId32,
            forceProxyType: sts.option(() => v9122.ProxyType),
            call: v9122.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    v9130: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9130.AccountId32,
            forceProxyType: sts.option(() => v9130.ProxyType),
            call: v9130.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    v9160: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9160.AccountId32,
            forceProxyType: sts.option(() => v9160.ProxyType),
            call: v9160.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    v9170: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9170.AccountId32,
            forceProxyType: sts.option(() => v9170.ProxyType),
            call: v9170.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    v9180: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9180.AccountId32,
            forceProxyType: sts.option(() => v9180.ProxyType),
            call: v9180.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    v9190: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9190.AccountId32,
            forceProxyType: sts.option(() => v9190.ProxyType),
            call: v9190.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    v9220: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9220.AccountId32,
            forceProxyType: sts.option(() => v9220.ProxyType),
            call: v9220.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    v9230: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9230.AccountId32,
            forceProxyType: sts.option(() => v9230.ProxyType),
            call: v9230.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    v9250: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9250.AccountId32,
            forceProxyType: sts.option(() => v9250.ProxyType),
            call: v9250.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    v9271: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9271.AccountId32,
            forceProxyType: sts.option(() => v9271.ProxyType),
            call: v9271.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    v9291: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9291.MultiAddress,
            forceProxyType: sts.option(() => v9291.ProxyType),
            call: v9291.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v9300: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9300.MultiAddress,
            forceProxyType: sts.option(() => v9300.ProxyType),
            call: v9300.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v9320: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9320.MultiAddress,
            forceProxyType: sts.option(() => v9320.ProxyType),
            call: v9320.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v9340: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9340.MultiAddress,
            forceProxyType: sts.option(() => v9340.ProxyType),
            call: v9340.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v9350: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9350.MultiAddress,
            forceProxyType: sts.option(() => v9350.ProxyType),
            call: v9350.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v9370: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9370.MultiAddress,
            forceProxyType: sts.option(() => v9370.ProxyType),
            call: v9370.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v9381: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9381.MultiAddress,
            forceProxyType: sts.option(() => v9381.ProxyType),
            call: v9381.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v9420: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9420.MultiAddress,
            forceProxyType: sts.option(() => v9420.ProxyType),
            call: v9420.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v9430: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9430.MultiAddress,
            forceProxyType: sts.option(() => v9430.ProxyType),
            call: v9430.Call,
        })
    ),
    /**
     * See [`Pallet::proxy`].
     */
    v1000000: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v1000000.MultiAddress,
            forceProxyType: sts.option(() => v1000000.ProxyType),
            call: v1000000.Call,
        })
    ),
    /**
     * See [`Pallet::proxy`].
     */
    v1001000: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v1001000.MultiAddress,
            forceProxyType: sts.option(() => v1001000.ProxyType),
            call: v1001000.Call,
        })
    ),
}

export const addProxy =  {
    name: 'Proxy.add_proxy',
    /**
     *  Register a proxy account for the sender that is able to make calls on its behalf.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `proxy`: The account that the `caller` would like to make a proxy.
     *  - `proxy_type`: The permissions allowed for this proxy account.
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 17.48 + .176 * P µs
     *  - DB weight: 1 storage read and write.
     *  # </weight>
     */
    v2005: new CallType(
        'Proxy.add_proxy',
        sts.struct({
            proxy: v2005.AccountId,
            proxyType: v2005.ProxyType,
        })
    ),
    /**
     *  Register a proxy account for the sender that is able to make calls on its behalf.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `proxy`: The account that the `caller` would like to make a proxy.
     *  - `proxy_type`: The permissions allowed for this proxy account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    v2023: new CallType(
        'Proxy.add_proxy',
        sts.struct({
            delegate: v2023.AccountId,
            proxyType: v2023.ProxyType,
            delay: v2023.BlockNumber,
        })
    ),
    /**
     * Register a proxy account for the sender that is able to make calls on its behalf.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `proxy`: The account that the `caller` would like to make a proxy.
     * - `proxy_type`: The permissions allowed for this proxy account.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    v9180: new CallType(
        'Proxy.add_proxy',
        sts.struct({
            delegate: v9180.AccountId32,
            proxyType: v9180.ProxyType,
            delay: sts.number(),
        })
    ),
    /**
     * Register a proxy account for the sender that is able to make calls on its behalf.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `proxy`: The account that the `caller` would like to make a proxy.
     * - `proxy_type`: The permissions allowed for this proxy account.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    v9291: new CallType(
        'Proxy.add_proxy',
        sts.struct({
            delegate: v9291.MultiAddress,
            proxyType: v9291.ProxyType,
            delay: sts.number(),
        })
    ),
    /**
     * Register a proxy account for the sender that is able to make calls on its behalf.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `proxy`: The account that the `caller` would like to make a proxy.
     * - `proxy_type`: The permissions allowed for this proxy account.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     */
    v9420: new CallType(
        'Proxy.add_proxy',
        sts.struct({
            delegate: v9420.MultiAddress,
            proxyType: v9420.ProxyType,
            delay: sts.number(),
        })
    ),
}

export const removeProxy =  {
    name: 'Proxy.remove_proxy',
    /**
     *  Unregister a proxy account for the sender.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `proxy`: The account that the `caller` would like to remove as a proxy.
     *  - `proxy_type`: The permissions currently enabled for the removed proxy account.
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 14.37 + .164 * P µs
     *  - DB weight: 1 storage read and write.
     *  # </weight>
     */
    v2005: new CallType(
        'Proxy.remove_proxy',
        sts.struct({
            proxy: v2005.AccountId,
            proxyType: v2005.ProxyType,
        })
    ),
    /**
     *  Unregister a proxy account for the sender.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `proxy`: The account that the `caller` would like to remove as a proxy.
     *  - `proxy_type`: The permissions currently enabled for the removed proxy account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    v2023: new CallType(
        'Proxy.remove_proxy',
        sts.struct({
            delegate: v2023.AccountId,
            proxyType: v2023.ProxyType,
            delay: v2023.BlockNumber,
        })
    ),
    /**
     * Unregister a proxy account for the sender.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `proxy`: The account that the `caller` would like to remove as a proxy.
     * - `proxy_type`: The permissions currently enabled for the removed proxy account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    v9180: new CallType(
        'Proxy.remove_proxy',
        sts.struct({
            delegate: v9180.AccountId32,
            proxyType: v9180.ProxyType,
            delay: sts.number(),
        })
    ),
    /**
     * Unregister a proxy account for the sender.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `proxy`: The account that the `caller` would like to remove as a proxy.
     * - `proxy_type`: The permissions currently enabled for the removed proxy account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    v9291: new CallType(
        'Proxy.remove_proxy',
        sts.struct({
            delegate: v9291.MultiAddress,
            proxyType: v9291.ProxyType,
            delay: sts.number(),
        })
    ),
    /**
     * Unregister a proxy account for the sender.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `proxy`: The account that the `caller` would like to remove as a proxy.
     * - `proxy_type`: The permissions currently enabled for the removed proxy account.
     */
    v9420: new CallType(
        'Proxy.remove_proxy',
        sts.struct({
            delegate: v9420.MultiAddress,
            proxyType: v9420.ProxyType,
            delay: sts.number(),
        })
    ),
}

export const removeProxies =  {
    name: 'Proxy.remove_proxies',
    /**
     *  Unregister all proxy accounts for the sender.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  WARNING: This may be called on accounts created by `anonymous`, however if done, then
     *  the unreserved fees will be inaccessible. **All access to this account will be lost.**
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 13.73 + .129 * P µs
     *  - DB weight: 1 storage read and write.
     *  # </weight>
     */
    v2005: new CallType(
        'Proxy.remove_proxies',
        sts.unit()
    ),
}

export const anonymous =  {
    name: 'Proxy.anonymous',
    /**
     *  Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
     *  initialize it with a proxy of `proxy_type` for `origin` sender.
     * 
     *  Requires a `Signed` origin.
     * 
     *  - `proxy_type`: The type of the proxy that the sender will be registered as over the
     *  new account. This will almost always be the most permissive `ProxyType` possible to
     *  allow for maximum flexibility.
     *  - `index`: A disambiguation index, in case this is called multiple times in the same
     *  transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
     *  want to use `0`.
     * 
     *  Fails with `Duplicate` if this has already been called in this transaction, from the
     *  same sender, with the same parameters.
     * 
     *  Fails if there are insufficient funds to pay for deposit.
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 36.48 + .039 * P µs
     *  - DB weight: 1 storage read and write.
     *  # </weight>
     */
    v2005: new CallType(
        'Proxy.anonymous',
        sts.struct({
            proxyType: v2005.ProxyType,
            index: sts.number(),
        })
    ),
    /**
     *  Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
     *  initialize it with a proxy of `proxy_type` for `origin` sender.
     * 
     *  Requires a `Signed` origin.
     * 
     *  - `proxy_type`: The type of the proxy that the sender will be registered as over the
     *  new account. This will almost always be the most permissive `ProxyType` possible to
     *  allow for maximum flexibility.
     *  - `index`: A disambiguation index, in case this is called multiple times in the same
     *  transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
     *  want to use `0`.
     *  - `delay`: The announcement period required of the initial proxy. Will generally be
     *  zero.
     * 
     *  Fails with `Duplicate` if this has already been called in this transaction, from the
     *  same sender, with the same parameters.
     * 
     *  Fails if there are insufficient funds to pay for deposit.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     *  TODO: Might be over counting 1 read
     */
    v2023: new CallType(
        'Proxy.anonymous',
        sts.struct({
            proxyType: v2023.ProxyType,
            delay: v2023.BlockNumber,
            index: sts.number(),
        })
    ),
    /**
     * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
     * initialize it with a proxy of `proxy_type` for `origin` sender.
     * 
     * Requires a `Signed` origin.
     * 
     * - `proxy_type`: The type of the proxy that the sender will be registered as over the
     * new account. This will almost always be the most permissive `ProxyType` possible to
     * allow for maximum flexibility.
     * - `index`: A disambiguation index, in case this is called multiple times in the same
     * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
     * want to use `0`.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     * 
     * Fails with `Duplicate` if this has already been called in this transaction, from the
     * same sender, with the same parameters.
     * 
     * Fails if there are insufficient funds to pay for deposit.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     * TODO: Might be over counting 1 read
     */
    v9180: new CallType(
        'Proxy.anonymous',
        sts.struct({
            proxyType: v9180.ProxyType,
            delay: sts.number(),
            index: sts.number(),
        })
    ),
}

export const killAnonymous =  {
    name: 'Proxy.kill_anonymous',
    /**
     *  Removes a previously spawned anonymous proxy.
     * 
     *  WARNING: **All access to this account will be lost.** Any funds held in it will be
     *  inaccessible.
     * 
     *  Requires a `Signed` origin, and the sender account must have been created by a call to
     *  `anonymous` with corresponding parameters.
     * 
     *  - `spawner`: The account that originally called `anonymous` to create this account.
     *  - `index`: The disambiguation index originally passed to `anonymous`. Probably `0`.
     *  - `proxy_type`: The proxy type originally passed to `anonymous`.
     *  - `height`: The height of the chain when the call to `anonymous` was processed.
     *  - `ext_index`: The extrinsic index in which the call to `anonymous` was processed.
     * 
     *  Fails with `NoPermission` in case the caller is not a previously created anonymous
     *  account whose `anonymous` call has corresponding parameters.
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 15.65 + .137 * P µs
     *  - DB weight: 1 storage read and write.
     *  # </weight>
     */
    v2005: new CallType(
        'Proxy.kill_anonymous',
        sts.struct({
            spawner: v2005.AccountId,
            proxyType: v2005.ProxyType,
            index: sts.number(),
            height: sts.number(),
            extIndex: sts.number(),
        })
    ),
    /**
     * Removes a previously spawned anonymous proxy.
     * 
     * WARNING: **All access to this account will be lost.** Any funds held in it will be
     * inaccessible.
     * 
     * Requires a `Signed` origin, and the sender account must have been created by a call to
     * `anonymous` with corresponding parameters.
     * 
     * - `spawner`: The account that originally called `anonymous` to create this account.
     * - `index`: The disambiguation index originally passed to `anonymous`. Probably `0`.
     * - `proxy_type`: The proxy type originally passed to `anonymous`.
     * - `height`: The height of the chain when the call to `anonymous` was processed.
     * - `ext_index`: The extrinsic index in which the call to `anonymous` was processed.
     * 
     * Fails with `NoPermission` in case the caller is not a previously created anonymous
     * account whose `anonymous` call has corresponding parameters.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    v9180: new CallType(
        'Proxy.kill_anonymous',
        sts.struct({
            spawner: v9180.AccountId32,
            proxyType: v9180.ProxyType,
            index: sts.number(),
            height: sts.number(),
            extIndex: sts.number(),
        })
    ),
    /**
     * Removes a previously spawned anonymous proxy.
     * 
     * WARNING: **All access to this account will be lost.** Any funds held in it will be
     * inaccessible.
     * 
     * Requires a `Signed` origin, and the sender account must have been created by a call to
     * `anonymous` with corresponding parameters.
     * 
     * - `spawner`: The account that originally called `anonymous` to create this account.
     * - `index`: The disambiguation index originally passed to `anonymous`. Probably `0`.
     * - `proxy_type`: The proxy type originally passed to `anonymous`.
     * - `height`: The height of the chain when the call to `anonymous` was processed.
     * - `ext_index`: The extrinsic index in which the call to `anonymous` was processed.
     * 
     * Fails with `NoPermission` in case the caller is not a previously created anonymous
     * account whose `anonymous` call has corresponding parameters.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    v9291: new CallType(
        'Proxy.kill_anonymous',
        sts.struct({
            spawner: v9291.MultiAddress,
            proxyType: v9291.ProxyType,
            index: sts.number(),
            height: sts.number(),
            extIndex: sts.number(),
        })
    ),
}

export const announce =  {
    name: 'Proxy.announce',
    /**
     *  Publish the hash of a proxy-call that will be made in the future.
     * 
     *  This must be called some number of blocks before the corresponding `proxy` is attempted
     *  if the delay associated with the proxy relationship is greater than zero.
     * 
     *  No more than `MaxPending` announcements may be made at any one time.
     * 
     *  This will take a deposit of `AnnouncementDepositFactor` as well as
     *  `AnnouncementDepositBase` if there are no other pending announcements.
     * 
     *  The dispatch origin for this call must be _Signed_ and a proxy of `real`.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `call_hash`: The hash of the call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    v2023: new CallType(
        'Proxy.announce',
        sts.struct({
            real: v2023.AccountId,
            callHash: v2023.CallHashOf,
        })
    ),
    /**
     * Publish the hash of a proxy-call that will be made in the future.
     * 
     * This must be called some number of blocks before the corresponding `proxy` is attempted
     * if the delay associated with the proxy relationship is greater than zero.
     * 
     * No more than `MaxPending` announcements may be made at any one time.
     * 
     * This will take a deposit of `AnnouncementDepositFactor` as well as
     * `AnnouncementDepositBase` if there are no other pending announcements.
     * 
     * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `call_hash`: The hash of the call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    v9291: new CallType(
        'Proxy.announce',
        sts.struct({
            real: v9291.MultiAddress,
            callHash: v9291.H256,
        })
    ),
}

export const removeAnnouncement =  {
    name: 'Proxy.remove_announcement',
    /**
     *  Remove a given announcement.
     * 
     *  May be called by a proxy account to remove a call they previously announced and return
     *  the deposit.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `call_hash`: The hash of the call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    v2023: new CallType(
        'Proxy.remove_announcement',
        sts.struct({
            real: v2023.AccountId,
            callHash: v2023.CallHashOf,
        })
    ),
    /**
     * Remove a given announcement.
     * 
     * May be called by a proxy account to remove a call they previously announced and return
     * the deposit.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `call_hash`: The hash of the call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    v9291: new CallType(
        'Proxy.remove_announcement',
        sts.struct({
            real: v9291.MultiAddress,
            callHash: v9291.H256,
        })
    ),
}

export const rejectAnnouncement =  {
    name: 'Proxy.reject_announcement',
    /**
     *  Remove the given announcement of a delegate.
     * 
     *  May be called by a target (proxied) account to remove a call that one of their delegates
     *  (`delegate`) has announced they want to execute. The deposit is returned.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `delegate`: The account that previously announced the call.
     *  - `call_hash`: The hash of the call to be made.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    v2023: new CallType(
        'Proxy.reject_announcement',
        sts.struct({
            delegate: v2023.AccountId,
            callHash: v2023.CallHashOf,
        })
    ),
    /**
     * Remove the given announcement of a delegate.
     * 
     * May be called by a target (proxied) account to remove a call that one of their delegates
     * (`delegate`) has announced they want to execute. The deposit is returned.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `delegate`: The account that previously announced the call.
     * - `call_hash`: The hash of the call to be made.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    v9291: new CallType(
        'Proxy.reject_announcement',
        sts.struct({
            delegate: v9291.MultiAddress,
            callHash: v9291.H256,
        })
    ),
}

export const proxyAnnounced =  {
    name: 'Proxy.proxy_announced',
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    v2023: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v2023.AccountId,
            real: v2023.AccountId,
            forceProxyType: sts.option(() => v2023.ProxyType),
            call: v2023.Type_194,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    v2024: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v2024.AccountId,
            real: v2024.AccountId,
            forceProxyType: sts.option(() => v2024.ProxyType),
            call: v2024.Type_194,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    v2025: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v2025.AccountId,
            real: v2025.AccountId,
            forceProxyType: sts.option(() => v2025.ProxyType),
            call: v2025.Type_195,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    v2026: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v2026.AccountId,
            real: v2026.AccountId,
            forceProxyType: sts.option(() => v2026.ProxyType),
            call: v2026.Type_194,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    v2028: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v2028.AccountId,
            real: v2028.AccountId,
            forceProxyType: sts.option(() => v2028.ProxyType),
            call: v2028.Type_199,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    v2029: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v2029.AccountId,
            real: v2029.AccountId,
            forceProxyType: sts.option(() => v2029.ProxyType),
            call: v2029.Type_199,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorized for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    v2030: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v2030.AccountId,
            real: v2030.AccountId,
            forceProxyType: sts.option(() => v2030.ProxyType),
            call: v2030.Type_138,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorized for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    v9010: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9010.AccountId,
            real: v9010.AccountId,
            forceProxyType: sts.option(() => v9010.ProxyType),
            call: v9010.Type_138,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorized for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    v9030: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9030.AccountId,
            real: v9030.AccountId,
            forceProxyType: sts.option(() => v9030.ProxyType),
            call: v9030.Type_138,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorized for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    v9040: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9040.AccountId,
            real: v9040.AccountId,
            forceProxyType: sts.option(() => v9040.ProxyType),
            call: v9040.Type_138,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorized for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    v9050: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9050.AccountId,
            real: v9050.AccountId,
            forceProxyType: sts.option(() => v9050.ProxyType),
            call: v9050.Type_139,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorized for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    v9080: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9080.AccountId,
            real: v9080.AccountId,
            forceProxyType: sts.option(() => v9080.ProxyType),
            call: v9080.Type_138,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorized for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    v9090: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9090.AccountId,
            real: v9090.AccountId,
            forceProxyType: sts.option(() => v9090.ProxyType),
            call: v9090.Type_138,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorized for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    v9100: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9100.AccountId,
            real: v9100.AccountId,
            forceProxyType: sts.option(() => v9100.ProxyType),
            call: v9100.Type_138,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    v9111: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9111.AccountId32,
            real: v9111.AccountId32,
            forceProxyType: sts.option(() => v9111.ProxyType),
            call: v9111.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    v9122: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9122.AccountId32,
            real: v9122.AccountId32,
            forceProxyType: sts.option(() => v9122.ProxyType),
            call: v9122.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    v9130: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9130.AccountId32,
            real: v9130.AccountId32,
            forceProxyType: sts.option(() => v9130.ProxyType),
            call: v9130.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    v9160: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9160.AccountId32,
            real: v9160.AccountId32,
            forceProxyType: sts.option(() => v9160.ProxyType),
            call: v9160.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    v9170: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9170.AccountId32,
            real: v9170.AccountId32,
            forceProxyType: sts.option(() => v9170.ProxyType),
            call: v9170.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    v9180: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9180.AccountId32,
            real: v9180.AccountId32,
            forceProxyType: sts.option(() => v9180.ProxyType),
            call: v9180.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    v9190: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9190.AccountId32,
            real: v9190.AccountId32,
            forceProxyType: sts.option(() => v9190.ProxyType),
            call: v9190.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    v9220: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9220.AccountId32,
            real: v9220.AccountId32,
            forceProxyType: sts.option(() => v9220.ProxyType),
            call: v9220.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    v9230: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9230.AccountId32,
            real: v9230.AccountId32,
            forceProxyType: sts.option(() => v9230.ProxyType),
            call: v9230.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    v9250: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9250.AccountId32,
            real: v9250.AccountId32,
            forceProxyType: sts.option(() => v9250.ProxyType),
            call: v9250.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    v9271: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9271.AccountId32,
            real: v9271.AccountId32,
            forceProxyType: sts.option(() => v9271.ProxyType),
            call: v9271.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    v9291: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9291.MultiAddress,
            real: v9291.MultiAddress,
            forceProxyType: sts.option(() => v9291.ProxyType),
            call: v9291.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v9300: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9300.MultiAddress,
            real: v9300.MultiAddress,
            forceProxyType: sts.option(() => v9300.ProxyType),
            call: v9300.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v9320: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9320.MultiAddress,
            real: v9320.MultiAddress,
            forceProxyType: sts.option(() => v9320.ProxyType),
            call: v9320.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v9340: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9340.MultiAddress,
            real: v9340.MultiAddress,
            forceProxyType: sts.option(() => v9340.ProxyType),
            call: v9340.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v9350: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9350.MultiAddress,
            real: v9350.MultiAddress,
            forceProxyType: sts.option(() => v9350.ProxyType),
            call: v9350.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v9370: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9370.MultiAddress,
            real: v9370.MultiAddress,
            forceProxyType: sts.option(() => v9370.ProxyType),
            call: v9370.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v9381: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9381.MultiAddress,
            real: v9381.MultiAddress,
            forceProxyType: sts.option(() => v9381.ProxyType),
            call: v9381.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v9420: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9420.MultiAddress,
            real: v9420.MultiAddress,
            forceProxyType: sts.option(() => v9420.ProxyType),
            call: v9420.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v9430: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9430.MultiAddress,
            real: v9430.MultiAddress,
            forceProxyType: sts.option(() => v9430.ProxyType),
            call: v9430.Call,
        })
    ),
    /**
     * See [`Pallet::proxy_announced`].
     */
    v1000000: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v1000000.MultiAddress,
            real: v1000000.MultiAddress,
            forceProxyType: sts.option(() => v1000000.ProxyType),
            call: v1000000.Call,
        })
    ),
    /**
     * See [`Pallet::proxy_announced`].
     */
    v1001000: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v1001000.MultiAddress,
            real: v1001000.MultiAddress,
            forceProxyType: sts.option(() => v1001000.ProxyType),
            call: v1001000.Call,
        })
    ),
}

export const createPure =  {
    name: 'Proxy.create_pure',
    /**
     * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
     * initialize it with a proxy of `proxy_type` for `origin` sender.
     * 
     * Requires a `Signed` origin.
     * 
     * - `proxy_type`: The type of the proxy that the sender will be registered as over the
     * new account. This will almost always be the most permissive `ProxyType` possible to
     * allow for maximum flexibility.
     * - `index`: A disambiguation index, in case this is called multiple times in the same
     * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
     * want to use `0`.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     * 
     * Fails with `Duplicate` if this has already been called in this transaction, from the
     * same sender, with the same parameters.
     * 
     * Fails if there are insufficient funds to pay for deposit.
     */
    v9300: new CallType(
        'Proxy.create_pure',
        sts.struct({
            proxyType: v9300.ProxyType,
            delay: sts.number(),
            index: sts.number(),
        })
    ),
    /**
     * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
     * initialize it with a proxy of `proxy_type` for `origin` sender.
     * 
     * Requires a `Signed` origin.
     * 
     * - `proxy_type`: The type of the proxy that the sender will be registered as over the
     * new account. This will almost always be the most permissive `ProxyType` possible to
     * allow for maximum flexibility.
     * - `index`: A disambiguation index, in case this is called multiple times in the same
     * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
     * want to use `0`.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     * 
     * Fails with `Duplicate` if this has already been called in this transaction, from the
     * same sender, with the same parameters.
     * 
     * Fails if there are insufficient funds to pay for deposit.
     */
    v9420: new CallType(
        'Proxy.create_pure',
        sts.struct({
            proxyType: v9420.ProxyType,
            delay: sts.number(),
            index: sts.number(),
        })
    ),
}

export const killPure =  {
    name: 'Proxy.kill_pure',
    /**
     * Removes a previously spawned pure proxy.
     * 
     * WARNING: **All access to this account will be lost.** Any funds held in it will be
     * inaccessible.
     * 
     * Requires a `Signed` origin, and the sender account must have been created by a call to
     * `pure` with corresponding parameters.
     * 
     * - `spawner`: The account that originally called `pure` to create this account.
     * - `index`: The disambiguation index originally passed to `pure`. Probably `0`.
     * - `proxy_type`: The proxy type originally passed to `pure`.
     * - `height`: The height of the chain when the call to `pure` was processed.
     * - `ext_index`: The extrinsic index in which the call to `pure` was processed.
     * 
     * Fails with `NoPermission` in case the caller is not a previously created pure
     * account whose `pure` call has corresponding parameters.
     */
    v9300: new CallType(
        'Proxy.kill_pure',
        sts.struct({
            spawner: v9300.MultiAddress,
            proxyType: v9300.ProxyType,
            index: sts.number(),
            height: sts.number(),
            extIndex: sts.number(),
        })
    ),
    /**
     * Removes a previously spawned pure proxy.
     * 
     * WARNING: **All access to this account will be lost.** Any funds held in it will be
     * inaccessible.
     * 
     * Requires a `Signed` origin, and the sender account must have been created by a call to
     * `pure` with corresponding parameters.
     * 
     * - `spawner`: The account that originally called `pure` to create this account.
     * - `index`: The disambiguation index originally passed to `pure`. Probably `0`.
     * - `proxy_type`: The proxy type originally passed to `pure`.
     * - `height`: The height of the chain when the call to `pure` was processed.
     * - `ext_index`: The extrinsic index in which the call to `pure` was processed.
     * 
     * Fails with `NoPermission` in case the caller is not a previously created pure
     * account whose `pure` call has corresponding parameters.
     */
    v9420: new CallType(
        'Proxy.kill_pure',
        sts.struct({
            spawner: v9420.MultiAddress,
            proxyType: v9420.ProxyType,
            index: sts.number(),
            height: sts.number(),
            extIndex: sts.number(),
        })
    ),
}
