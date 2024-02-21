import * as kusamaEvents from '../../kusama/hrmp/events'


export const openChannelRequested = {
	name: 'Hrmp.OpenChannelRequested',
	v9090Kusama: kusamaEvents.openChannelRequested['v9090'],
	v1001000Kusama: kusamaEvents.openChannelRequested['v1001000'],
}

export const openChannelAccepted = {
	name: 'Hrmp.OpenChannelAccepted',
	v9090Kusama: kusamaEvents.openChannelAccepted['v9090'],
	v1001000Kusama: kusamaEvents.openChannelAccepted['v1001000'],
}

export const channelClosed = {
	name: 'Hrmp.ChannelClosed',
	v9090Kusama: kusamaEvents.channelClosed['v9090'],
	v9111Kusama: kusamaEvents.channelClosed['v9111'],
	v1001000Kusama: kusamaEvents.channelClosed['v1001000'],
}

export const openChannelCanceled = {
	name: 'Hrmp.OpenChannelCanceled',
	v9100Kusama: kusamaEvents.openChannelCanceled['v9100'],
	v9111Kusama: kusamaEvents.openChannelCanceled['v9111'],
	v1001000Kusama: kusamaEvents.openChannelCanceled['v1001000'],
}

export const hrmpChannelForceOpened = {
	name: 'Hrmp.HrmpChannelForceOpened',
	v9320Kusama: kusamaEvents.hrmpChannelForceOpened['v9320'],
	v1001000Kusama: kusamaEvents.hrmpChannelForceOpened['v1001000'],
}

export const hrmpSystemChannelOpened = {
	name: 'Hrmp.HrmpSystemChannelOpened',
	v1001000Kusama: kusamaEvents.hrmpSystemChannelOpened['v1001000'],
}

export const openChannelDepositsUpdated = {
	name: 'Hrmp.OpenChannelDepositsUpdated',
	v1001000Kusama: kusamaEvents.openChannelDepositsUpdated['v1001000'],
}
