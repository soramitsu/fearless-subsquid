import * as polkadotEvents from '../../polkadot/fast-unstake/events'


export const unstaked = {
	name: 'FastUnstake.Unstaked',
	v9300Polkadot: polkadotEvents.unstaked['v9300'],
	v9340Polkadot: polkadotEvents.unstaked['v9340'],
	v9420Polkadot: polkadotEvents.unstaked['v9420'],
	v9430Polkadot: polkadotEvents.unstaked['v9430'],
}

export const slashed = {
	name: 'FastUnstake.Slashed',
	v9300Polkadot: polkadotEvents.slashed['v9300'],
}

export const checking = {
	name: 'FastUnstake.Checking',
	v9300Polkadot: polkadotEvents.checking['v9300'],
}

export const errored = {
	name: 'FastUnstake.Errored',
	v9300Polkadot: polkadotEvents.errored['v9300'],
}

export const internalError = {
	name: 'FastUnstake.InternalError',
	v9300Polkadot: polkadotEvents.internalError['v9300'],
}

export const batchChecked = {
	name: 'FastUnstake.BatchChecked',
	v9340Polkadot: polkadotEvents.batchChecked['v9340'],
}

export const batchFinished = {
	name: 'FastUnstake.BatchFinished',
	v9340Polkadot: polkadotEvents.batchFinished['v9340'],
	v9420Polkadot: polkadotEvents.batchFinished['v9420'],
}
