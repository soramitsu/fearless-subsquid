import * as kusamaEvents from '../../kusama/paras-hrmp/events'


export const openChannelRequested = {
	name: 'ParasHrmp.OpenChannelRequested',
	v9010Kusama: kusamaEvents.openChannelRequested['v9010'],
}

export const openChannelAccepted = {
	name: 'ParasHrmp.OpenChannelAccepted',
	v9010Kusama: kusamaEvents.openChannelAccepted['v9010'],
}

export const channelClosed = {
	name: 'ParasHrmp.ChannelClosed',
	v9010Kusama: kusamaEvents.channelClosed['v9010'],
}
