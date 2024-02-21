import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9320 from '../v9320'
import * as v9420 from '../v9420'
import * as v9430 from '../v9430'

export const callWhitelisted =  {
    name: 'Whitelist.CallWhitelisted',
    v9320: new EventType(
        'Whitelist.CallWhitelisted',
        sts.struct({
            callHash: v9320.H256,
        })
    ),
}

export const whitelistedCallRemoved =  {
    name: 'Whitelist.WhitelistedCallRemoved',
    v9320: new EventType(
        'Whitelist.WhitelistedCallRemoved',
        sts.struct({
            callHash: v9320.H256,
        })
    ),
}

export const whitelistedCallDispatched =  {
    name: 'Whitelist.WhitelistedCallDispatched',
    v9320: new EventType(
        'Whitelist.WhitelistedCallDispatched',
        sts.struct({
            callHash: v9320.H256,
            result: sts.result(() => v9320.PostDispatchInfo, () => v9320.DispatchErrorWithPostInfo),
        })
    ),
    v9420: new EventType(
        'Whitelist.WhitelistedCallDispatched',
        sts.struct({
            callHash: v9420.H256,
            result: sts.result(() => v9420.PostDispatchInfo, () => v9420.DispatchErrorWithPostInfo),
        })
    ),
    v9430: new EventType(
        'Whitelist.WhitelistedCallDispatched',
        sts.struct({
            callHash: v9430.H256,
            result: sts.result(() => v9430.PostDispatchInfo, () => v9430.DispatchErrorWithPostInfo),
        })
    ),
}
