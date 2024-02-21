import * as kusamaCalls from '../../kusama/vesting/calls'


export const vest = {
	name: 'Vesting.vest',
	v1050Kusama: kusamaCalls.vest['v1050'],
}

export const vestOther = {
	name: 'Vesting.vest_other',
	v1050Kusama: kusamaCalls.vestOther['v1050'],
	v2028Kusama: kusamaCalls.vestOther['v2028'],
	v9111Kusama: kusamaCalls.vestOther['v9111'],
}

export const vestedTransfer = {
	name: 'Vesting.vested_transfer',
	v1050Kusama: kusamaCalls.vestedTransfer['v1050'],
	v2028Kusama: kusamaCalls.vestedTransfer['v2028'],
	v9111Kusama: kusamaCalls.vestedTransfer['v9111'],
}

export const forceVestedTransfer = {
	name: 'Vesting.force_vested_transfer',
	v2011Kusama: kusamaCalls.forceVestedTransfer['v2011'],
	v2028Kusama: kusamaCalls.forceVestedTransfer['v2028'],
	v9111Kusama: kusamaCalls.forceVestedTransfer['v9111'],
}

export const mergeSchedules = {
	name: 'Vesting.merge_schedules',
	v9111Kusama: kusamaCalls.mergeSchedules['v9111'],
}
