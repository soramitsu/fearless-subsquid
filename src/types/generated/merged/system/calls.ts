import * as soraPolkadotCalls from '../../sora-polkadot/system/calls'
import * as soraKusamaCalls from '../../sora-kusama/system/calls'


export const fillBlock = {
	name: 'System.fill_block',
	v1SoraPolkadot: soraPolkadotCalls.fillBlock['v1'],
	v1SoraKusama: soraKusamaCalls.fillBlock['v1'],
}

export const remark = {
	name: 'System.remark',
	v1SoraPolkadot: soraPolkadotCalls.remark['v1'],
	v1SoraKusama: soraKusamaCalls.remark['v1'],
}

export const setHeapPages = {
	name: 'System.set_heap_pages',
	v1SoraPolkadot: soraPolkadotCalls.setHeapPages['v1'],
	v1SoraKusama: soraKusamaCalls.setHeapPages['v1'],
}

export const setCode = {
	name: 'System.set_code',
	v1SoraPolkadot: soraPolkadotCalls.setCode['v1'],
	v1SoraKusama: soraKusamaCalls.setCode['v1'],
}

export const setCodeWithoutChecks = {
	name: 'System.set_code_without_checks',
	v1SoraPolkadot: soraPolkadotCalls.setCodeWithoutChecks['v1'],
	v1SoraKusama: soraKusamaCalls.setCodeWithoutChecks['v1'],
}

export const setStorage = {
	name: 'System.set_storage',
	v1SoraPolkadot: soraPolkadotCalls.setStorage['v1'],
	v1SoraKusama: soraKusamaCalls.setStorage['v1'],
}

export const killStorage = {
	name: 'System.kill_storage',
	v1SoraPolkadot: soraPolkadotCalls.killStorage['v1'],
	v1SoraKusama: soraKusamaCalls.killStorage['v1'],
}

export const killPrefix = {
	name: 'System.kill_prefix',
	v1SoraPolkadot: soraPolkadotCalls.killPrefix['v1'],
	v1SoraKusama: soraKusamaCalls.killPrefix['v1'],
}

export const remarkWithEvent = {
	name: 'System.remark_with_event',
	v1SoraPolkadot: soraPolkadotCalls.remarkWithEvent['v1'],
	v1SoraKusama: soraKusamaCalls.remarkWithEvent['v1'],
}
