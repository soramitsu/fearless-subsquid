import * as kusamaCalls from '../../kusama/paras/calls'


export const forceSetCurrentCode = {
	name: 'Paras.force_set_current_code',
	v9010Kusama: kusamaCalls.forceSetCurrentCode['v9010'],
}

export const forceSetCurrentHead = {
	name: 'Paras.force_set_current_head',
	v9010Kusama: kusamaCalls.forceSetCurrentHead['v9010'],
}

export const forceScheduleCodeUpgrade = {
	name: 'Paras.force_schedule_code_upgrade',
	v9010Kusama: kusamaCalls.forceScheduleCodeUpgrade['v9010'],
	v9090Kusama: kusamaCalls.forceScheduleCodeUpgrade['v9090'],
}

export const forceNoteNewHead = {
	name: 'Paras.force_note_new_head',
	v9010Kusama: kusamaCalls.forceNoteNewHead['v9010'],
}

export const forceQueueAction = {
	name: 'Paras.force_queue_action',
	v9010Kusama: kusamaCalls.forceQueueAction['v9010'],
}

export const addTrustedValidationCode = {
	name: 'Paras.add_trusted_validation_code',
	v9160Kusama: kusamaCalls.addTrustedValidationCode['v9160'],
}

export const pokeUnusedValidationCode = {
	name: 'Paras.poke_unused_validation_code',
	v9160Kusama: kusamaCalls.pokeUnusedValidationCode['v9160'],
}

export const includePvfCheckStatement = {
	name: 'Paras.include_pvf_check_statement',
	v9160Kusama: kusamaCalls.includePvfCheckStatement['v9160'],
}

export const forceSetMostRecentContext = {
	name: 'Paras.force_set_most_recent_context',
	v1000000Kusama: kusamaCalls.forceSetMostRecentContext['v1000000'],
}
