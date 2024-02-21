import * as kusamaEvents from '../../kusama/state-trie-migration/events'


export const migrated = {
	name: 'StateTrieMigration.Migrated',
	v1000000Kusama: kusamaEvents.migrated['v1000000'],
}

export const slashed = {
	name: 'StateTrieMigration.Slashed',
	v1000000Kusama: kusamaEvents.slashed['v1000000'],
}

export const autoMigrationFinished = {
	name: 'StateTrieMigration.AutoMigrationFinished',
	v1000000Kusama: kusamaEvents.autoMigrationFinished['v1000000'],
}

export const halted = {
	name: 'StateTrieMigration.Halted',
	v1000000Kusama: kusamaEvents.halted['v1000000'],
}
