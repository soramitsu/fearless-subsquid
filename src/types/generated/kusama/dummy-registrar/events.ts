import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v2024 from '../v2024'

export const dummy =  {
    name: 'DummyRegistrar.Dummy',
    v2024: new EventType(
        'DummyRegistrar.Dummy',
        v2024.AccountId
    ),
}
