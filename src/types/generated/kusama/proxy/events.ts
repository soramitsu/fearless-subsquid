import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v2005 from '../v2005'
import * as v2023 from '../v2023'
import * as v9111 from '../v9111'
import * as v9130 from '../v9130'
import * as v9160 from '../v9160'
import * as v9170 from '../v9170'
import * as v9180 from '../v9180'
import * as v9190 from '../v9190'
import * as v9300 from '../v9300'
import * as v9320 from '../v9320'
import * as v9420 from '../v9420'
import * as v9430 from '../v9430'

export const proxyExecuted =  {
    name: 'Proxy.ProxyExecuted',
    /**
     *  A proxy was executed correctly, with the given result.
     */
    v2005: new EventType(
        'Proxy.ProxyExecuted',
        v2005.DispatchResult
    ),
    /**
     * A proxy was executed correctly, with the given \[result\].
     */
    v9111: new EventType(
        'Proxy.ProxyExecuted',
        sts.result(() => sts.unit(), () => v9111.DispatchError)
    ),
    /**
     * A proxy was executed correctly, with the given.
     */
    v9130: new EventType(
        'Proxy.ProxyExecuted',
        sts.struct({
            result: sts.result(() => sts.unit(), () => v9130.DispatchError),
        })
    ),
    /**
     * A proxy was executed correctly, with the given.
     */
    v9160: new EventType(
        'Proxy.ProxyExecuted',
        sts.struct({
            result: sts.result(() => sts.unit(), () => v9160.DispatchError),
        })
    ),
    /**
     * A proxy was executed correctly, with the given.
     */
    v9170: new EventType(
        'Proxy.ProxyExecuted',
        sts.struct({
            result: sts.result(() => sts.unit(), () => v9170.DispatchError),
        })
    ),
    /**
     * A proxy was executed correctly, with the given.
     */
    v9190: new EventType(
        'Proxy.ProxyExecuted',
        sts.struct({
            result: sts.result(() => sts.unit(), () => v9190.DispatchError),
        })
    ),
    /**
     * A proxy was executed correctly, with the given.
     */
    v9320: new EventType(
        'Proxy.ProxyExecuted',
        sts.struct({
            result: sts.result(() => sts.unit(), () => v9320.DispatchError),
        })
    ),
    /**
     * A proxy was executed correctly, with the given.
     */
    v9420: new EventType(
        'Proxy.ProxyExecuted',
        sts.struct({
            result: sts.result(() => sts.unit(), () => v9420.DispatchError),
        })
    ),
    /**
     * A proxy was executed correctly, with the given.
     */
    v9430: new EventType(
        'Proxy.ProxyExecuted',
        sts.struct({
            result: sts.result(() => sts.unit(), () => v9430.DispatchError),
        })
    ),
}

export const anonymousCreated =  {
    name: 'Proxy.AnonymousCreated',
    /**
     *  Anonymous account (first parameter) has been created by new proxy (second) with given
     *  disambiguation index and proxy type.
     */
    v2005: new EventType(
        'Proxy.AnonymousCreated',
        sts.tuple([v2005.AccountId, v2005.AccountId, v2005.ProxyType, sts.number()])
    ),
    /**
     * Anonymous account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    v9130: new EventType(
        'Proxy.AnonymousCreated',
        sts.struct({
            anonymous: v9130.AccountId32,
            who: v9130.AccountId32,
            proxyType: v9130.ProxyType,
            disambiguationIndex: sts.number(),
        })
    ),
    /**
     * Anonymous account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    v9180: new EventType(
        'Proxy.AnonymousCreated',
        sts.struct({
            anonymous: v9180.AccountId32,
            who: v9180.AccountId32,
            proxyType: v9180.ProxyType,
            disambiguationIndex: sts.number(),
        })
    ),
}

export const announced =  {
    name: 'Proxy.Announced',
    /**
     *  An announcement was placed to make a call in the future. [real, proxy, call_hash]
     */
    v2023: new EventType(
        'Proxy.Announced',
        sts.tuple([v2023.AccountId, v2023.AccountId, v2023.Hash])
    ),
    /**
     * An announcement was placed to make a call in the future.
     */
    v9130: new EventType(
        'Proxy.Announced',
        sts.struct({
            real: v9130.AccountId32,
            proxy: v9130.AccountId32,
            callHash: v9130.H256,
        })
    ),
}

export const proxyAdded =  {
    name: 'Proxy.ProxyAdded',
    /**
     * A proxy was added. \[delegator, delegatee, proxy_type, delay\]
     */
    v9111: new EventType(
        'Proxy.ProxyAdded',
        sts.tuple([v9111.AccountId32, v9111.AccountId32, v9111.ProxyType, sts.number()])
    ),
    /**
     * A proxy was added.
     */
    v9130: new EventType(
        'Proxy.ProxyAdded',
        sts.struct({
            delegator: v9130.AccountId32,
            delegatee: v9130.AccountId32,
            proxyType: v9130.ProxyType,
            delay: sts.number(),
        })
    ),
    /**
     * A proxy was added.
     */
    v9180: new EventType(
        'Proxy.ProxyAdded',
        sts.struct({
            delegator: v9180.AccountId32,
            delegatee: v9180.AccountId32,
            proxyType: v9180.ProxyType,
            delay: sts.number(),
        })
    ),
    /**
     * A proxy was added.
     */
    v9420: new EventType(
        'Proxy.ProxyAdded',
        sts.struct({
            delegator: v9420.AccountId32,
            delegatee: v9420.AccountId32,
            proxyType: v9420.ProxyType,
            delay: sts.number(),
        })
    ),
}

export const proxyRemoved =  {
    name: 'Proxy.ProxyRemoved',
    /**
     * A proxy was removed.
     */
    v9190: new EventType(
        'Proxy.ProxyRemoved',
        sts.struct({
            delegator: v9190.AccountId32,
            delegatee: v9190.AccountId32,
            proxyType: v9190.ProxyType,
            delay: sts.number(),
        })
    ),
    /**
     * A proxy was removed.
     */
    v9420: new EventType(
        'Proxy.ProxyRemoved',
        sts.struct({
            delegator: v9420.AccountId32,
            delegatee: v9420.AccountId32,
            proxyType: v9420.ProxyType,
            delay: sts.number(),
        })
    ),
}

export const pureCreated =  {
    name: 'Proxy.PureCreated',
    /**
     * A pure account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    v9300: new EventType(
        'Proxy.PureCreated',
        sts.struct({
            pure: v9300.AccountId32,
            who: v9300.AccountId32,
            proxyType: v9300.ProxyType,
            disambiguationIndex: sts.number(),
        })
    ),
    /**
     * A pure account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    v9420: new EventType(
        'Proxy.PureCreated',
        sts.struct({
            pure: v9420.AccountId32,
            who: v9420.AccountId32,
            proxyType: v9420.ProxyType,
            disambiguationIndex: sts.number(),
        })
    ),
}
