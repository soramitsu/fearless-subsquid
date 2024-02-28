import * as polkadotCalls from '../../polkadot/registrar/calls'


export const registerPara = {
	name: 'Registrar.register_para',
	v0Polkadot: polkadotCalls.registerPara['v0'],
}

export const deregisterPara = {
	name: 'Registrar.deregister_para',
	v0Polkadot: polkadotCalls.deregisterPara['v0'],
}

export const setThreadCount = {
	name: 'Registrar.set_thread_count',
	v0Polkadot: polkadotCalls.setThreadCount['v0'],
}

export const registerParathread = {
	name: 'Registrar.register_parathread',
	v0Polkadot: polkadotCalls.registerParathread['v0'],
}

export const selectParathread = {
	name: 'Registrar.select_parathread',
	v0Polkadot: polkadotCalls.selectParathread['v0'],
}

export const deregisterParathread = {
	name: 'Registrar.deregister_parathread',
	v0Polkadot: polkadotCalls.deregisterParathread['v0'],
}

export const swap = {
	name: 'Registrar.swap',
	v0Polkadot: polkadotCalls.swap['v0'],
	v9110Polkadot: polkadotCalls.swap['v9110'],
}

export const register = {
	name: 'Registrar.register',
	v9110Polkadot: polkadotCalls.register['v9110'],
}

export const forceRegister = {
	name: 'Registrar.force_register',
	v9110Polkadot: polkadotCalls.forceRegister['v9110'],
}

export const deregister = {
	name: 'Registrar.deregister',
	v9110Polkadot: polkadotCalls.deregister['v9110'],
}

export const forceRemoveLock = {
	name: 'Registrar.force_remove_lock',
	v9110Polkadot: polkadotCalls.forceRemoveLock['v9110'],
}

export const reserve = {
	name: 'Registrar.reserve',
	v9110Polkadot: polkadotCalls.reserve['v9110'],
}

export const removeLock = {
	name: 'Registrar.remove_lock',
	v9340Polkadot: polkadotCalls.removeLock['v9340'],
}

export const addLock = {
	name: 'Registrar.add_lock',
	v9340Polkadot: polkadotCalls.addLock['v9340'],
}

export const scheduleCodeUpgrade = {
	name: 'Registrar.schedule_code_upgrade',
	v9340Polkadot: polkadotCalls.scheduleCodeUpgrade['v9340'],
}

export const setCurrentHead = {
	name: 'Registrar.set_current_head',
	v9340Polkadot: polkadotCalls.setCurrentHead['v9340'],
}
