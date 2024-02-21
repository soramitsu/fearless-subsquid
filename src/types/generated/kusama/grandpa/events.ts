import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v9130 from '../v9130'

export const newAuthorities =  {
    name: 'Grandpa.NewAuthorities',
    /**
     *  New authority set has been applied.
     */
    v1020: new EventType(
        'Grandpa.NewAuthorities',
        sts.array(() => v1020.NextAuthority)
    ),
    /**
     * New authority set has been applied.
     */
    v9130: new EventType(
        'Grandpa.NewAuthorities',
        sts.struct({
            authoritySet: sts.array(() => sts.tuple(() => [v9130.Public, sts.bigint()])),
        })
    ),
}

export const paused =  {
    name: 'Grandpa.Paused',
    /**
     *  Current authority set has been paused.
     */
    v1020: new EventType(
        'Grandpa.Paused',
        sts.unit()
    ),
}

export const resumed =  {
    name: 'Grandpa.Resumed',
    /**
     *  Current authority set has been resumed.
     */
    v1020: new EventType(
        'Grandpa.Resumed',
        sts.unit()
    ),
}
