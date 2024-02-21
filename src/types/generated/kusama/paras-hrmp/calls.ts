import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v9010 from '../v9010'

export const hrmpInitOpenChannel =  {
    name: 'ParasHrmp.hrmp_init_open_channel',
    /**
     *  Initiate opening a channel from a parachain to a given recipient with given channel
     *  parameters.
     * 
     *  - `proposed_max_capacity` - specifies how many messages can be in the channel at once.
     *  - `proposed_max_message_size` - specifies the maximum size of any of the messages.
     * 
     *  These numbers are a subject to the relay-chain configuration limits.
     * 
     *  The channel can be opened only after the recipient confirms it and only on a session
     *  change.
     */
    v9010: new CallType(
        'ParasHrmp.hrmp_init_open_channel',
        sts.struct({
            recipient: v9010.ParaId,
            proposedMaxCapacity: sts.number(),
            proposedMaxMessageSize: sts.number(),
        })
    ),
}

export const hrmpAcceptOpenChannel =  {
    name: 'ParasHrmp.hrmp_accept_open_channel',
    /**
     *  Accept a pending open channel request from the given sender.
     * 
     *  The channel will be opened only on the next session boundary.
     */
    v9010: new CallType(
        'ParasHrmp.hrmp_accept_open_channel',
        sts.struct({
            sender: v9010.ParaId,
        })
    ),
}

export const hrmpCloseChannel =  {
    name: 'ParasHrmp.hrmp_close_channel',
    /**
     *  Initiate unilateral closing of a channel. The origin must be either the sender or the
     *  recipient in the channel being closed.
     * 
     *  The closure can only happen on a session change.
     */
    v9010: new CallType(
        'ParasHrmp.hrmp_close_channel',
        sts.struct({
            channelId: v9010.HrmpChannelId,
        })
    ),
}

export const forceCleanHrmp =  {
    name: 'ParasHrmp.force_clean_hrmp',
    /**
     *  This extrinsic triggers the cleanup of all the HRMP storage items that
     *  a para may have. Normally this happens once per session, but this allows
     *  you to trigger the cleanup immediately for a specific parachain.
     * 
     *  Origin must be Root.
     */
    v9010: new CallType(
        'ParasHrmp.force_clean_hrmp',
        sts.struct({
            para: v9010.ParaId,
        })
    ),
}

export const forceProcessHrmpOpen =  {
    name: 'ParasHrmp.force_process_hrmp_open',
    /**
     *  Force process hrmp open channel requests.
     * 
     *  If there are pending HRMP open channel requests, you can use this
     *  function process all of those requests immediately.
     */
    v9010: new CallType(
        'ParasHrmp.force_process_hrmp_open',
        sts.unit()
    ),
}

export const forceProcessHrmpClose =  {
    name: 'ParasHrmp.force_process_hrmp_close',
    /**
     *  Force process hrmp close channel requests.
     * 
     *  If there are pending HRMP close channel requests, you can use this
     *  function process all of those requests immediately.
     */
    v9010: new CallType(
        'ParasHrmp.force_process_hrmp_close',
        sts.unit()
    ),
}
