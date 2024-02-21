import * as kusamaCalls from '../../kusama/im-online/calls'


export const heartbeat = {
	name: 'ImOnline.heartbeat',
	v1020Kusama: kusamaCalls.heartbeat['v1020'],
	v1062Kusama: kusamaCalls.heartbeat['v1062'],
	v1000000Kusama: kusamaCalls.heartbeat['v1000000'],
}
