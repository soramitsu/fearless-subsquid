import * as soraPolkadotCalls from '../../sora-polkadot/system/calls'
import * as soraKusamaCalls from '../../sora-kusama/system/calls'


export const fillBlock = {
	name: 'System.fill_block',
	soraPolkadotV1: soraPolkadotCalls.fillBlock['v1'],
	soraKusamaV1: soraKusamaCalls.fillBlock['v1'],
}

export const remark = {
	name: 'System.remark',
	soraPolkadotV1: soraPolkadotCalls.remark['v1'],
	soraKusamaV1: soraKusamaCalls.remark['v1'],
}

export const setHeapPages = {
	name: 'System.set_heap_pages',
	soraPolkadotV1: soraPolkadotCalls.setHeapPages['v1'],
	soraKusamaV1: soraKusamaCalls.setHeapPages['v1'],
}

export const setCode = {
	name: 'System.set_code',
	soraPolkadotV1: soraPolkadotCalls.setCode['v1'],
	soraKusamaV1: soraKusamaCalls.setCode['v1'],
}

export const setCodeWithoutChecks = {
	name: 'System.set_code_without_checks',
	soraPolkadotV1: soraPolkadotCalls.setCodeWithoutChecks['v1'],
	soraKusamaV1: soraKusamaCalls.setCodeWithoutChecks['v1'],
}

export const setStorage = {
	name: 'System.set_storage',
	soraPolkadotV1: soraPolkadotCalls.setStorage['v1'],
	soraKusamaV1: soraKusamaCalls.setStorage['v1'],
}

export const killStorage = {
	name: 'System.kill_storage',
	soraPolkadotV1: soraPolkadotCalls.killStorage['v1'],
	soraKusamaV1: soraKusamaCalls.killStorage['v1'],
}

export const killPrefix = {
	name: 'System.kill_prefix',
	soraPolkadotV1: soraPolkadotCalls.killPrefix['v1'],
	soraKusamaV1: soraKusamaCalls.killPrefix['v1'],
}

export const remarkWithEvent = {
	name: 'System.remark_with_event',
	soraPolkadotV1: soraPolkadotCalls.remarkWithEvent['v1'],
	soraKusamaV1: soraKusamaCalls.remarkWithEvent['v1'],
}
