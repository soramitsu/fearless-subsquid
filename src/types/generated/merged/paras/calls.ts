import * as polkadotCalls from '../../polkadot/paras/calls'


export const forceSetCurrentCode = {
	name: 'Paras.force_set_current_code',
	v9110Polkadot: polkadotCalls.forceSetCurrentCode['v9110'],
}

export const forceSetCurrentHead = {
	name: 'Paras.force_set_current_head',
	v9110Polkadot: polkadotCalls.forceSetCurrentHead['v9110'],
}

export const forceScheduleCodeUpgrade = {
	name: 'Paras.force_schedule_code_upgrade',
	v9110Polkadot: polkadotCalls.forceScheduleCodeUpgrade['v9110'],
}

export const forceNoteNewHead = {
	name: 'Paras.force_note_new_head',
	v9110Polkadot: polkadotCalls.forceNoteNewHead['v9110'],
}

export const forceQueueAction = {
	name: 'Paras.force_queue_action',
	v9110Polkadot: polkadotCalls.forceQueueAction['v9110'],
}

export const addTrustedValidationCode = {
	name: 'Paras.add_trusted_validation_code',
	v9170Polkadot: polkadotCalls.addTrustedValidationCode['v9170'],
}

export const pokeUnusedValidationCode = {
	name: 'Paras.poke_unused_validation_code',
	v9170Polkadot: polkadotCalls.pokeUnusedValidationCode['v9170'],
}

export const includePvfCheckStatement = {
	name: 'Paras.include_pvf_check_statement',
	v9170Polkadot: polkadotCalls.includePvfCheckStatement['v9170'],
}

export const forceSetMostRecentContext = {
	name: 'Paras.force_set_most_recent_context',
	v1000001Polkadot: polkadotCalls.forceSetMostRecentContext['v1000001'],
}
