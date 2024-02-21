import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'

export const nameSet =  {
    name: 'Nicks.NameSet',
    /**
     *  A name was set.
     */
    v1020: new EventType(
        'Nicks.NameSet',
        v1020.AccountId
    ),
}

export const nameForced =  {
    name: 'Nicks.NameForced',
    /**
     *  A name was forcibly set.
     */
    v1020: new EventType(
        'Nicks.NameForced',
        v1020.AccountId
    ),
}

export const nameChanged =  {
    name: 'Nicks.NameChanged',
    /**
     *  A name was changed.
     */
    v1020: new EventType(
        'Nicks.NameChanged',
        v1020.AccountId
    ),
}

export const nameCleared =  {
    name: 'Nicks.NameCleared',
    /**
     *  A name was cleared, and the given balance returned.
     */
    v1020: new EventType(
        'Nicks.NameCleared',
        sts.tuple([v1020.AccountId, v1020.Balance])
    ),
}

export const nameKilled =  {
    name: 'Nicks.NameKilled',
    /**
     *  A name was removed and the given balance slashed.
     */
    v1020: new EventType(
        'Nicks.NameKilled',
        sts.tuple([v1020.AccountId, v1020.Balance])
    ),
}
