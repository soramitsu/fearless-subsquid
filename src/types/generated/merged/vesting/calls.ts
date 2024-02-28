import * as polkadotCalls from '../../polkadot/vesting/calls'


export const vest = {
	name: 'Vesting.vest',
	v0Polkadot: polkadotCalls.vest['v0'],
}

export const vestOther = {
	name: 'Vesting.vest_other',
	v0Polkadot: polkadotCalls.vestOther['v0'],
	v28Polkadot: polkadotCalls.vestOther['v28'],
	v9110Polkadot: polkadotCalls.vestOther['v9110'],
}

export const vestedTransfer = {
	name: 'Vesting.vested_transfer',
	v0Polkadot: polkadotCalls.vestedTransfer['v0'],
	v28Polkadot: polkadotCalls.vestedTransfer['v28'],
	v9110Polkadot: polkadotCalls.vestedTransfer['v9110'],
}

export const forceVestedTransfer = {
	name: 'Vesting.force_vested_transfer',
	v9Polkadot: polkadotCalls.forceVestedTransfer['v9'],
	v28Polkadot: polkadotCalls.forceVestedTransfer['v28'],
	v9110Polkadot: polkadotCalls.forceVestedTransfer['v9110'],
}

export const mergeSchedules = {
	name: 'Vesting.merge_schedules',
	v9110Polkadot: polkadotCalls.mergeSchedules['v9110'],
}
