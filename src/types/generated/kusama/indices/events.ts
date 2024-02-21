import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v1050 from '../v1050'
import * as v2007 from '../v2007'
import * as v9130 from '../v9130'

export const newAccountIndex =  {
    name: 'Indices.NewAccountIndex',
    /**
     *  A new account index was assigned.
     * 
     *  This event is not triggered when an existing index is reassigned
     *  to another `AccountId`.
     */
    v1020: new EventType(
        'Indices.NewAccountIndex',
        sts.tuple([v1020.AccountId, v1020.AccountIndex])
    ),
}

export const indexAssigned =  {
    name: 'Indices.IndexAssigned',
    /**
     *  A account index was assigned.
     */
    v1050: new EventType(
        'Indices.IndexAssigned',
        sts.tuple([v1050.AccountId, v1050.AccountIndex])
    ),
    /**
     * A account index was assigned.
     */
    v9130: new EventType(
        'Indices.IndexAssigned',
        sts.struct({
            who: v9130.AccountId32,
            index: sts.number(),
        })
    ),
}

export const indexFreed =  {
    name: 'Indices.IndexFreed',
    /**
     *  A account index has been freed up (unassigned).
     */
    v1050: new EventType(
        'Indices.IndexFreed',
        v1050.AccountIndex
    ),
    /**
     * A account index has been freed up (unassigned).
     */
    v9130: new EventType(
        'Indices.IndexFreed',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const indexFrozen =  {
    name: 'Indices.IndexFrozen',
    /**
     *  A account index has been frozen to its current account ID.
     */
    v2007: new EventType(
        'Indices.IndexFrozen',
        sts.tuple([v2007.AccountIndex, v2007.AccountId])
    ),
    /**
     * A account index has been frozen to its current account ID.
     */
    v9130: new EventType(
        'Indices.IndexFrozen',
        sts.struct({
            index: sts.number(),
            who: v9130.AccountId32,
        })
    ),
}
