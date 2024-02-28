import * as polkadotCalls from '../../polkadot/hrmp/calls'


export const hrmpInitOpenChannel = {
	name: 'Hrmp.hrmp_init_open_channel',
	v9110Polkadot: polkadotCalls.hrmpInitOpenChannel['v9110'],
}

export const hrmpAcceptOpenChannel = {
	name: 'Hrmp.hrmp_accept_open_channel',
	v9110Polkadot: polkadotCalls.hrmpAcceptOpenChannel['v9110'],
}

export const hrmpCloseChannel = {
	name: 'Hrmp.hrmp_close_channel',
	v9110Polkadot: polkadotCalls.hrmpCloseChannel['v9110'],
}

export const forceCleanHrmp = {
	name: 'Hrmp.force_clean_hrmp',
	v9110Polkadot: polkadotCalls.forceCleanHrmp['v9110'],
	v9170Polkadot: polkadotCalls.forceCleanHrmp['v9170'],
	v1001002Polkadot: polkadotCalls.forceCleanHrmp['v1001002'],
}

export const forceProcessHrmpOpen = {
	name: 'Hrmp.force_process_hrmp_open',
	v9110Polkadot: polkadotCalls.forceProcessHrmpOpen['v9110'],
	v9170Polkadot: polkadotCalls.forceProcessHrmpOpen['v9170'],
}

export const forceProcessHrmpClose = {
	name: 'Hrmp.force_process_hrmp_close',
	v9110Polkadot: polkadotCalls.forceProcessHrmpClose['v9110'],
	v9170Polkadot: polkadotCalls.forceProcessHrmpClose['v9170'],
}

export const hrmpCancelOpenRequest = {
	name: 'Hrmp.hrmp_cancel_open_request',
	v9110Polkadot: polkadotCalls.hrmpCancelOpenRequest['v9110'],
	v9170Polkadot: polkadotCalls.hrmpCancelOpenRequest['v9170'],
}

export const forceOpenHrmpChannel = {
	name: 'Hrmp.force_open_hrmp_channel',
	v9340Polkadot: polkadotCalls.forceOpenHrmpChannel['v9340'],
}

export const establishSystemChannel = {
	name: 'Hrmp.establish_system_channel',
	v1001002Polkadot: polkadotCalls.establishSystemChannel['v1001002'],
}

export const pokeChannelDeposits = {
	name: 'Hrmp.poke_channel_deposits',
	v1001002Polkadot: polkadotCalls.pokeChannelDeposits['v1001002'],
}
