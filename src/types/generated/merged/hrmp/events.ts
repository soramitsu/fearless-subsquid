import * as polkadotEvents from '../../polkadot/hrmp/events'


export const openChannelRequested = {
	name: 'Hrmp.OpenChannelRequested',
	v9110Polkadot: polkadotEvents.openChannelRequested['v9110'],
	v1001002Polkadot: polkadotEvents.openChannelRequested['v1001002'],
}

export const openChannelCanceled = {
	name: 'Hrmp.OpenChannelCanceled',
	v9110Polkadot: polkadotEvents.openChannelCanceled['v9110'],
	v1001002Polkadot: polkadotEvents.openChannelCanceled['v1001002'],
}

export const openChannelAccepted = {
	name: 'Hrmp.OpenChannelAccepted',
	v9110Polkadot: polkadotEvents.openChannelAccepted['v9110'],
	v1001002Polkadot: polkadotEvents.openChannelAccepted['v1001002'],
}

export const channelClosed = {
	name: 'Hrmp.ChannelClosed',
	v9110Polkadot: polkadotEvents.channelClosed['v9110'],
	v1001002Polkadot: polkadotEvents.channelClosed['v1001002'],
}

export const hrmpChannelForceOpened = {
	name: 'Hrmp.HrmpChannelForceOpened',
	v9340Polkadot: polkadotEvents.hrmpChannelForceOpened['v9340'],
	v1001002Polkadot: polkadotEvents.hrmpChannelForceOpened['v1001002'],
}

export const hrmpSystemChannelOpened = {
	name: 'Hrmp.HrmpSystemChannelOpened',
	v1001002Polkadot: polkadotEvents.hrmpSystemChannelOpened['v1001002'],
}

export const openChannelDepositsUpdated = {
	name: 'Hrmp.OpenChannelDepositsUpdated',
	v1001002Polkadot: polkadotEvents.openChannelDepositsUpdated['v1001002'],
}
