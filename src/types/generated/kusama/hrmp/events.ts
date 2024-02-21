import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9090 from '../v9090'
import * as v9100 from '../v9100'
import * as v9111 from '../v9111'
import * as v9320 from '../v9320'
import * as v1001000 from '../v1001000'

export const openChannelRequested =  {
    name: 'Hrmp.OpenChannelRequested',
    /**
     *  Open HRMP channel requested.
     *  `[sender, recipient, proposed_max_capacity, proposed_max_message_size]`
     */
    v9090: new EventType(
        'Hrmp.OpenChannelRequested',
        sts.tuple([v9090.ParaId, v9090.ParaId, sts.number(), sts.number()])
    ),
    /**
     * Open HRMP channel requested.
     */
    v1001000: new EventType(
        'Hrmp.OpenChannelRequested',
        sts.struct({
            sender: v1001000.Id,
            recipient: v1001000.Id,
            proposedMaxCapacity: sts.number(),
            proposedMaxMessageSize: sts.number(),
        })
    ),
}

export const openChannelAccepted =  {
    name: 'Hrmp.OpenChannelAccepted',
    /**
     *  Open HRMP channel accepted. `[sender, recipient]`
     */
    v9090: new EventType(
        'Hrmp.OpenChannelAccepted',
        sts.tuple([v9090.ParaId, v9090.ParaId])
    ),
    /**
     * Open HRMP channel accepted.
     */
    v1001000: new EventType(
        'Hrmp.OpenChannelAccepted',
        sts.struct({
            sender: v1001000.Id,
            recipient: v1001000.Id,
        })
    ),
}

export const channelClosed =  {
    name: 'Hrmp.ChannelClosed',
    /**
     *  HRMP channel closed. `[by_parachain, channel_id]`
     */
    v9090: new EventType(
        'Hrmp.ChannelClosed',
        sts.tuple([v9090.ParaId, v9090.HrmpChannelId])
    ),
    /**
     * HRMP channel closed. `[by_parachain, channel_id]`
     */
    v9111: new EventType(
        'Hrmp.ChannelClosed',
        sts.tuple([v9111.Id, v9111.HrmpChannelId])
    ),
    /**
     * HRMP channel closed.
     */
    v1001000: new EventType(
        'Hrmp.ChannelClosed',
        sts.struct({
            byParachain: v1001000.Id,
            channelId: v1001000.HrmpChannelId,
        })
    ),
}

export const openChannelCanceled =  {
    name: 'Hrmp.OpenChannelCanceled',
    /**
     *  An HRMP channel request sent by the receiver was canceled by either party.
     *  `[by_parachain, channel_id]`
     */
    v9100: new EventType(
        'Hrmp.OpenChannelCanceled',
        sts.tuple([v9100.ParaId, v9100.HrmpChannelId])
    ),
    /**
     * An HRMP channel request sent by the receiver was canceled by either party.
     * `[by_parachain, channel_id]`
     */
    v9111: new EventType(
        'Hrmp.OpenChannelCanceled',
        sts.tuple([v9111.Id, v9111.HrmpChannelId])
    ),
    /**
     * An HRMP channel request sent by the receiver was canceled by either party.
     */
    v1001000: new EventType(
        'Hrmp.OpenChannelCanceled',
        sts.struct({
            byParachain: v1001000.Id,
            channelId: v1001000.HrmpChannelId,
        })
    ),
}

export const hrmpChannelForceOpened =  {
    name: 'Hrmp.HrmpChannelForceOpened',
    /**
     * An HRMP channel was opened via Root origin.
     * `[sender, recipient, proposed_max_capacity, proposed_max_message_size]`
     */
    v9320: new EventType(
        'Hrmp.HrmpChannelForceOpened',
        sts.tuple([v9320.Id, v9320.Id, sts.number(), sts.number()])
    ),
    /**
     * An HRMP channel was opened via Root origin.
     */
    v1001000: new EventType(
        'Hrmp.HrmpChannelForceOpened',
        sts.struct({
            sender: v1001000.Id,
            recipient: v1001000.Id,
            proposedMaxCapacity: sts.number(),
            proposedMaxMessageSize: sts.number(),
        })
    ),
}

export const hrmpSystemChannelOpened =  {
    name: 'Hrmp.HrmpSystemChannelOpened',
    /**
     * An HRMP channel was opened between two system chains.
     */
    v1001000: new EventType(
        'Hrmp.HrmpSystemChannelOpened',
        sts.struct({
            sender: v1001000.Id,
            recipient: v1001000.Id,
            proposedMaxCapacity: sts.number(),
            proposedMaxMessageSize: sts.number(),
        })
    ),
}

export const openChannelDepositsUpdated =  {
    name: 'Hrmp.OpenChannelDepositsUpdated',
    /**
     * An HRMP channel's deposits were updated.
     */
    v1001000: new EventType(
        'Hrmp.OpenChannelDepositsUpdated',
        sts.struct({
            sender: v1001000.Id,
            recipient: v1001000.Id,
        })
    ),
}
