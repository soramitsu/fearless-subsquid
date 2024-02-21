import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v2024 from '../v2024'

export const dummy =  {
    name: 'DummySlots.Dummy',
    v2024: new EventType(
        'DummySlots.Dummy',
        v2024.AccountId
    ),
}
