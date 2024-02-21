import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'

export const sudid =  {
    name: 'Sudo.Sudid',
    /**
     *  A sudo just took place.
     */
    v1020: new EventType(
        'Sudo.Sudid',
        sts.boolean()
    ),
}

export const keyChanged =  {
    name: 'Sudo.KeyChanged',
    /**
     *  The sudoer just switched identity; the old key is supplied.
     */
    v1020: new EventType(
        'Sudo.KeyChanged',
        v1020.AccountId
    ),
}

export const sudoAsDone =  {
    name: 'Sudo.SudoAsDone',
    /**
     *  A sudo just took place.
     */
    v1020: new EventType(
        'Sudo.SudoAsDone',
        sts.boolean()
    ),
}
