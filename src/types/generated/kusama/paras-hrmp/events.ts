import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9010 from '../v9010'

export const openChannelRequested =  {
    name: 'ParasHrmp.OpenChannelRequested',
    /**
     *  Open HRMP channel requested.
     *  \[sender, recipient, proposed_max_capacity, proposed_max_message_size\]
     */
    v9010: new EventType(
        'ParasHrmp.OpenChannelRequested',
        sts.tuple([v9010.ParaId, v9010.ParaId, sts.number(), sts.number()])
    ),
}

export const openChannelAccepted =  {
    name: 'ParasHrmp.OpenChannelAccepted',
    /**
     *  Open HRMP channel accepted. \[sender, recipient\]
     */
    v9010: new EventType(
        'ParasHrmp.OpenChannelAccepted',
        sts.tuple([v9010.ParaId, v9010.ParaId])
    ),
}

export const channelClosed =  {
    name: 'ParasHrmp.ChannelClosed',
    /**
     *  HRMP channel closed. \[by_parachain, channel_id\]
     */
    v9010: new EventType(
        'ParasHrmp.ChannelClosed',
        sts.tuple([v9010.ParaId, v9010.HrmpChannelId])
    ),
}
