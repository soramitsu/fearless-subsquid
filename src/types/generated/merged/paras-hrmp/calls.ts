import * as kusamaCalls from '../../kusama/paras-hrmp/calls'


export const hrmpInitOpenChannel = {
	name: 'ParasHrmp.hrmp_init_open_channel',
	v9010Kusama: kusamaCalls.hrmpInitOpenChannel['v9010'],
}

export const hrmpAcceptOpenChannel = {
	name: 'ParasHrmp.hrmp_accept_open_channel',
	v9010Kusama: kusamaCalls.hrmpAcceptOpenChannel['v9010'],
}

export const hrmpCloseChannel = {
	name: 'ParasHrmp.hrmp_close_channel',
	v9010Kusama: kusamaCalls.hrmpCloseChannel['v9010'],
}

export const forceCleanHrmp = {
	name: 'ParasHrmp.force_clean_hrmp',
	v9010Kusama: kusamaCalls.forceCleanHrmp['v9010'],
}

export const forceProcessHrmpOpen = {
	name: 'ParasHrmp.force_process_hrmp_open',
	v9010Kusama: kusamaCalls.forceProcessHrmpOpen['v9010'],
}

export const forceProcessHrmpClose = {
	name: 'ParasHrmp.force_process_hrmp_close',
	v9010Kusama: kusamaCalls.forceProcessHrmpClose['v9010'],
}
