import * as kusamaCalls from '../../kusama/system/calls'


export const fillBlock = {
	name: 'System.fill_block',
	v1020Kusama: kusamaCalls.fillBlock['v1020'],
	v1050Kusama: kusamaCalls.fillBlock['v1050'],
}

export const remark = {
	name: 'System.remark',
	v1020Kusama: kusamaCalls.remark['v1020'],
}

export const setHeapPages = {
	name: 'System.set_heap_pages',
	v1020Kusama: kusamaCalls.setHeapPages['v1020'],
}

export const setCode = {
	name: 'System.set_code',
	v1020Kusama: kusamaCalls.setCode['v1020'],
	v1042Kusama: kusamaCalls.setCode['v1042'],
}

export const setStorage = {
	name: 'System.set_storage',
	v1020Kusama: kusamaCalls.setStorage['v1020'],
}

export const killStorage = {
	name: 'System.kill_storage',
	v1020Kusama: kusamaCalls.killStorage['v1020'],
}

export const killPrefix = {
	name: 'System.kill_prefix',
	v1020Kusama: kusamaCalls.killPrefix['v1020'],
	v2005Kusama: kusamaCalls.killPrefix['v2005'],
}

export const setCodeWithoutChecks = {
	name: 'System.set_code_without_checks',
	v1042Kusama: kusamaCalls.setCodeWithoutChecks['v1042'],
}

export const setChangesTrieConfig = {
	name: 'System.set_changes_trie_config',
	v1042Kusama: kusamaCalls.setChangesTrieConfig['v1042'],
}

export const suicide = {
	name: 'System.suicide',
	v1050Kusama: kusamaCalls.suicide['v1050'],
}

export const migrateAccounts = {
	name: 'System.migrate_accounts',
	v1054Kusama: kusamaCalls.migrateAccounts['v1054'],
}

export const remarkWithEvent = {
	name: 'System.remark_with_event',
	v2030Kusama: kusamaCalls.remarkWithEvent['v2030'],
}
