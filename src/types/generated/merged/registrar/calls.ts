import * as kusamaCalls from '../../kusama/registrar/calls'


export const registerPara = {
	name: 'Registrar.register_para',
	v1020Kusama: kusamaCalls.registerPara['v1020'],
}

export const deregisterPara = {
	name: 'Registrar.deregister_para',
	v1020Kusama: kusamaCalls.deregisterPara['v1020'],
}

export const setThreadCount = {
	name: 'Registrar.set_thread_count',
	v1020Kusama: kusamaCalls.setThreadCount['v1020'],
}

export const registerParathread = {
	name: 'Registrar.register_parathread',
	v1020Kusama: kusamaCalls.registerParathread['v1020'],
}

export const selectParathread = {
	name: 'Registrar.select_parathread',
	v1020Kusama: kusamaCalls.selectParathread['v1020'],
}

export const deregisterParathread = {
	name: 'Registrar.deregister_parathread',
	v1020Kusama: kusamaCalls.deregisterParathread['v1020'],
}

export const swap = {
	name: 'Registrar.swap',
	v1020Kusama: kusamaCalls.swap['v1020'],
	v9010Kusama: kusamaCalls.swap['v9010'],
}

export const register = {
	name: 'Registrar.register',
	v9010Kusama: kusamaCalls.register['v9010'],
}

export const forceRegister = {
	name: 'Registrar.force_register',
	v9010Kusama: kusamaCalls.forceRegister['v9010'],
}

export const deregister = {
	name: 'Registrar.deregister',
	v9010Kusama: kusamaCalls.deregister['v9010'],
}

export const forceRemoveLock = {
	name: 'Registrar.force_remove_lock',
	v9010Kusama: kusamaCalls.forceRemoveLock['v9010'],
}

export const reserve = {
	name: 'Registrar.reserve',
	v9010Kusama: kusamaCalls.reserve['v9010'],
}

export const removeLock = {
	name: 'Registrar.remove_lock',
	v9320Kusama: kusamaCalls.removeLock['v9320'],
}

export const addLock = {
	name: 'Registrar.add_lock',
	v9320Kusama: kusamaCalls.addLock['v9320'],
}

export const scheduleCodeUpgrade = {
	name: 'Registrar.schedule_code_upgrade',
	v9320Kusama: kusamaCalls.scheduleCodeUpgrade['v9320'],
}

export const setCurrentHead = {
	name: 'Registrar.set_current_head',
	v9320Kusama: kusamaCalls.setCurrentHead['v9320'],
}
