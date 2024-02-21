import * as kusamaCalls from '../../kusama/sudo/calls'


export const sudo = {
	name: 'Sudo.sudo',
	v1020Kusama: kusamaCalls.sudo['v1020'],
	v1022Kusama: kusamaCalls.sudo['v1022'],
	v1024Kusama: kusamaCalls.sudo['v1024'],
}

export const setKey = {
	name: 'Sudo.set_key',
	v1020Kusama: kusamaCalls.setKey['v1020'],
}

export const sudoAs = {
	name: 'Sudo.sudo_as',
	v1020Kusama: kusamaCalls.sudoAs['v1020'],
	v1022Kusama: kusamaCalls.sudoAs['v1022'],
	v1024Kusama: kusamaCalls.sudoAs['v1024'],
}
