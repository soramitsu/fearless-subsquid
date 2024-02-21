import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v9320 from '../v9320'
import * as v9340 from '../v9340'
import * as v9350 from '../v9350'
import * as v9370 from '../v9370'
import * as v9381 from '../v9381'
import * as v9420 from '../v9420'
import * as v9430 from '../v9430'
import * as v1000000 from '../v1000000'
import * as v1001000 from '../v1001000'

export const whitelistCall =  {
    name: 'Whitelist.whitelist_call',
    v9320: new CallType(
        'Whitelist.whitelist_call',
        sts.struct({
            callHash: v9320.H256,
        })
    ),
}

export const removeWhitelistedCall =  {
    name: 'Whitelist.remove_whitelisted_call',
    v9320: new CallType(
        'Whitelist.remove_whitelisted_call',
        sts.struct({
            callHash: v9320.H256,
        })
    ),
}

export const dispatchWhitelistedCall =  {
    name: 'Whitelist.dispatch_whitelisted_call',
    v9320: new CallType(
        'Whitelist.dispatch_whitelisted_call',
        sts.struct({
            callHash: v9320.H256,
            callWeightWitness: v9320.Weight,
        })
    ),
    v9350: new CallType(
        'Whitelist.dispatch_whitelisted_call',
        sts.struct({
            callHash: v9350.H256,
            callEncodedLen: sts.number(),
            callWeightWitness: v9350.Weight,
        })
    ),
}

export const dispatchWhitelistedCallWithPreimage =  {
    name: 'Whitelist.dispatch_whitelisted_call_with_preimage',
    v9320: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v9320.Call,
        })
    ),
    v9340: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v9340.Call,
        })
    ),
    v9350: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v9350.Call,
        })
    ),
    v9370: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v9370.Call,
        })
    ),
    v9381: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v9381.Call,
        })
    ),
    v9420: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v9420.Call,
        })
    ),
    v9430: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v9430.Call,
        })
    ),
    /**
     * See [`Pallet::dispatch_whitelisted_call_with_preimage`].
     */
    v1000000: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v1000000.Call,
        })
    ),
    /**
     * See [`Pallet::dispatch_whitelisted_call_with_preimage`].
     */
    v1001000: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v1001000.Call,
        })
    ),
}
