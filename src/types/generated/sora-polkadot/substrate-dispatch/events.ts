import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v10 from '../v10'

export const messageDispatched =  {
    name: 'SubstrateDispatch.MessageDispatched',
    /**
     * Message has been dispatched with given result.
     */
    v1: new EventType(
        'SubstrateDispatch.MessageDispatched',
        sts.tuple([v1.MessageId, sts.result(() => sts.unit(), () => v1.DispatchError)])
    ),
    /**
     * Message has been dispatched with given result.
     */
    v10: new EventType(
        'SubstrateDispatch.MessageDispatched',
        sts.tuple([v10.MessageId, sts.result(() => sts.unit(), () => v10.DispatchError)])
    ),
}

export const messageRejected =  {
    name: 'SubstrateDispatch.MessageRejected',
    /**
     * Message has been rejected
     */
    v1: new EventType(
        'SubstrateDispatch.MessageRejected',
        v1.MessageId
    ),
    /**
     * Message has been rejected
     */
    v10: new EventType(
        'SubstrateDispatch.MessageRejected',
        v10.MessageId
    ),
}

export const messageDecodeFailed =  {
    name: 'SubstrateDispatch.MessageDecodeFailed',
    /**
     * We have failed to decode a Call from the message.
     */
    v1: new EventType(
        'SubstrateDispatch.MessageDecodeFailed',
        v1.MessageId
    ),
    /**
     * We have failed to decode a Call from the message.
     */
    v10: new EventType(
        'SubstrateDispatch.MessageDecodeFailed',
        v10.MessageId
    ),
}
