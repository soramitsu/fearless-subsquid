import * as kusamaCalls from '../../kusama/hrmp/calls'


export const hrmpInitOpenChannel = {
	name: 'Hrmp.hrmp_init_open_channel',
	v9090Kusama: kusamaCalls.hrmpInitOpenChannel['v9090'],
}

export const hrmpAcceptOpenChannel = {
	name: 'Hrmp.hrmp_accept_open_channel',
	v9090Kusama: kusamaCalls.hrmpAcceptOpenChannel['v9090'],
}

export const hrmpCloseChannel = {
	name: 'Hrmp.hrmp_close_channel',
	v9090Kusama: kusamaCalls.hrmpCloseChannel['v9090'],
	v9111Kusama: kusamaCalls.hrmpCloseChannel['v9111'],
}

export const forceCleanHrmp = {
	name: 'Hrmp.force_clean_hrmp',
	v9090Kusama: kusamaCalls.forceCleanHrmp['v9090'],
	v9170Kusama: kusamaCalls.forceCleanHrmp['v9170'],
	v1001000Kusama: kusamaCalls.forceCleanHrmp['v1001000'],
}

export const forceProcessHrmpOpen = {
	name: 'Hrmp.force_process_hrmp_open',
	v9090Kusama: kusamaCalls.forceProcessHrmpOpen['v9090'],
	v9170Kusama: kusamaCalls.forceProcessHrmpOpen['v9170'],
}

export const forceProcessHrmpClose = {
	name: 'Hrmp.force_process_hrmp_close',
	v9090Kusama: kusamaCalls.forceProcessHrmpClose['v9090'],
	v9170Kusama: kusamaCalls.forceProcessHrmpClose['v9170'],
}

export const hrmpCancelOpenRequest = {
	name: 'Hrmp.hrmp_cancel_open_request',
	v9100Kusama: kusamaCalls.hrmpCancelOpenRequest['v9100'],
	v9111Kusama: kusamaCalls.hrmpCancelOpenRequest['v9111'],
	v9170Kusama: kusamaCalls.hrmpCancelOpenRequest['v9170'],
}

export const forceOpenHrmpChannel = {
	name: 'Hrmp.force_open_hrmp_channel',
	v9320Kusama: kusamaCalls.forceOpenHrmpChannel['v9320'],
}

export const establishSystemChannel = {
	name: 'Hrmp.establish_system_channel',
	v1001000Kusama: kusamaCalls.establishSystemChannel['v1001000'],
}

export const pokeChannelDeposits = {
	name: 'Hrmp.poke_channel_deposits',
	v1001000Kusama: kusamaCalls.pokeChannelDeposits['v1001000'],
}
