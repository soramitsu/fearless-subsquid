import * as kusamaEvents from '../../kusama/fast-unstake/events'


export const unstaked = {
	name: 'FastUnstake.Unstaked',
	v9300Kusama: kusamaEvents.unstaked['v9300'],
	v9320Kusama: kusamaEvents.unstaked['v9320'],
	v9420Kusama: kusamaEvents.unstaked['v9420'],
	v9430Kusama: kusamaEvents.unstaked['v9430'],
}

export const slashed = {
	name: 'FastUnstake.Slashed',
	v9300Kusama: kusamaEvents.slashed['v9300'],
}

export const checking = {
	name: 'FastUnstake.Checking',
	v9300Kusama: kusamaEvents.checking['v9300'],
}

export const errored = {
	name: 'FastUnstake.Errored',
	v9300Kusama: kusamaEvents.errored['v9300'],
}

export const internalError = {
	name: 'FastUnstake.InternalError',
	v9300Kusama: kusamaEvents.internalError['v9300'],
}

export const batchChecked = {
	name: 'FastUnstake.BatchChecked',
	v9340Kusama: kusamaEvents.batchChecked['v9340'],
}

export const batchFinished = {
	name: 'FastUnstake.BatchFinished',
	v9340Kusama: kusamaEvents.batchFinished['v9340'],
	v9381Kusama: kusamaEvents.batchFinished['v9381'],
}
