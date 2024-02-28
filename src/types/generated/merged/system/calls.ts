import * as polkadotCalls from '../../polkadot/system/calls'


export const fillBlock = {
	name: 'System.fill_block',
	v0Polkadot: polkadotCalls.fillBlock['v0'],
}

export const remark = {
	name: 'System.remark',
	v0Polkadot: polkadotCalls.remark['v0'],
}

export const setHeapPages = {
	name: 'System.set_heap_pages',
	v0Polkadot: polkadotCalls.setHeapPages['v0'],
}

export const setCode = {
	name: 'System.set_code',
	v0Polkadot: polkadotCalls.setCode['v0'],
}

export const setCodeWithoutChecks = {
	name: 'System.set_code_without_checks',
	v0Polkadot: polkadotCalls.setCodeWithoutChecks['v0'],
}

export const setChangesTrieConfig = {
	name: 'System.set_changes_trie_config',
	v0Polkadot: polkadotCalls.setChangesTrieConfig['v0'],
}

export const setStorage = {
	name: 'System.set_storage',
	v0Polkadot: polkadotCalls.setStorage['v0'],
}

export const killStorage = {
	name: 'System.kill_storage',
	v0Polkadot: polkadotCalls.killStorage['v0'],
}

export const killPrefix = {
	name: 'System.kill_prefix',
	v0Polkadot: polkadotCalls.killPrefix['v0'],
}

export const suicide = {
	name: 'System.suicide',
	v0Polkadot: polkadotCalls.suicide['v0'],
}

export const remarkWithEvent = {
	name: 'System.remark_with_event',
	v30Polkadot: polkadotCalls.remarkWithEvent['v30'],
}
