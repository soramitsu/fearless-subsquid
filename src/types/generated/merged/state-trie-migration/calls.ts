import * as kusamaCalls from '../../kusama/state-trie-migration/calls'


export const controlAutoMigration = {
	name: 'StateTrieMigration.control_auto_migration',
	v1000000Kusama: kusamaCalls.controlAutoMigration['v1000000'],
}

export const continueMigrate = {
	name: 'StateTrieMigration.continue_migrate',
	v1000000Kusama: kusamaCalls.continueMigrate['v1000000'],
}

export const migrateCustomTop = {
	name: 'StateTrieMigration.migrate_custom_top',
	v1000000Kusama: kusamaCalls.migrateCustomTop['v1000000'],
}

export const migrateCustomChild = {
	name: 'StateTrieMigration.migrate_custom_child',
	v1000000Kusama: kusamaCalls.migrateCustomChild['v1000000'],
}

export const setSignedMaxLimits = {
	name: 'StateTrieMigration.set_signed_max_limits',
	v1000000Kusama: kusamaCalls.setSignedMaxLimits['v1000000'],
}

export const forceSetProgress = {
	name: 'StateTrieMigration.force_set_progress',
	v1000000Kusama: kusamaCalls.forceSetProgress['v1000000'],
}
