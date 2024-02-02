import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v7 from '../v7'

export const messageDispatched =  {
    name: 'SubstrateDispatch.MessageDispatched',
    /**
     * Message has been dispatched with given result.
     */
    v7: new EventType(
        'SubstrateDispatch.MessageDispatched',
        sts.tuple([v7.MessageId, sts.result(() => sts.unit(), () => v7.DispatchError)])
    ),
}

export const messageRejected =  {
    name: 'SubstrateDispatch.MessageRejected',
    /**
     * Message has been rejected
     */
    v7: new EventType(
        'SubstrateDispatch.MessageRejected',
        v7.MessageId
    ),
}

export const messageDecodeFailed =  {
    name: 'SubstrateDispatch.MessageDecodeFailed',
    /**
     * We have failed to decode a Call from the message.
     */
    v7: new EventType(
        'SubstrateDispatch.MessageDecodeFailed',
        v7.MessageId
    ),
}
