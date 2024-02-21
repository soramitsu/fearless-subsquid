import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v9010 from '../v9010'
import * as v9230 from '../v9230'
import * as v9430 from '../v9430'

export const parathreadRegistered =  {
    name: 'Registrar.ParathreadRegistered',
    /**
     *  A parathread was registered; its new ID is supplied.
     */
    v1020: new EventType(
        'Registrar.ParathreadRegistered',
        v1020.ParaId
    ),
}

export const parathreadDeregistered =  {
    name: 'Registrar.ParathreadDeregistered',
    /**
     *  The parathread of the supplied ID was de-registered.
     */
    v1020: new EventType(
        'Registrar.ParathreadDeregistered',
        v1020.ParaId
    ),
}

export const registered =  {
    name: 'Registrar.Registered',
    v9010: new EventType(
        'Registrar.Registered',
        sts.tuple([v9010.ParaId, v9010.AccountId])
    ),
    v9230: new EventType(
        'Registrar.Registered',
        sts.struct({
            paraId: v9230.Id,
            manager: v9230.AccountId32,
        })
    ),
}

export const deregistered =  {
    name: 'Registrar.Deregistered',
    v9010: new EventType(
        'Registrar.Deregistered',
        v9010.ParaId
    ),
    v9230: new EventType(
        'Registrar.Deregistered',
        sts.struct({
            paraId: v9230.Id,
        })
    ),
}

export const reserved =  {
    name: 'Registrar.Reserved',
    v9010: new EventType(
        'Registrar.Reserved',
        sts.tuple([v9010.ParaId, v9010.AccountId])
    ),
    v9230: new EventType(
        'Registrar.Reserved',
        sts.struct({
            paraId: v9230.Id,
            who: v9230.AccountId32,
        })
    ),
}

export const swapped =  {
    name: 'Registrar.Swapped',
    v9430: new EventType(
        'Registrar.Swapped',
        sts.struct({
            paraId: v9430.Id,
            otherId: v9430.Id,
        })
    ),
}
