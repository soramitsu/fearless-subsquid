import * as polkadotEvents from '../../polkadot/vesting/events'


export const vestingUpdated = {
	name: 'Vesting.VestingUpdated',
	v0Polkadot: polkadotEvents.vestingUpdated['v0'],
	v9140Polkadot: polkadotEvents.vestingUpdated['v9140'],
}

export const vestingCompleted = {
	name: 'Vesting.VestingCompleted',
	v0Polkadot: polkadotEvents.vestingCompleted['v0'],
	v9140Polkadot: polkadotEvents.vestingCompleted['v9140'],
}
