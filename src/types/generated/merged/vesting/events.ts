import * as kusamaEvents from '../../kusama/vesting/events'


export const vestingUpdated = {
	name: 'Vesting.VestingUpdated',
	v1050Kusama: kusamaEvents.vestingUpdated['v1050'],
	v9130Kusama: kusamaEvents.vestingUpdated['v9130'],
}

export const vestingCompleted = {
	name: 'Vesting.VestingCompleted',
	v1050Kusama: kusamaEvents.vestingCompleted['v1050'],
	v9130Kusama: kusamaEvents.vestingCompleted['v9130'],
}
