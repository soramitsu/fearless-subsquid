import * as kusamaEvents from '../../kusama/conviction-voting/events'


export const delegated = {
	name: 'ConvictionVoting.Delegated',
	v9320Kusama: kusamaEvents.delegated['v9320'],
}

export const undelegated = {
	name: 'ConvictionVoting.Undelegated',
	v9320Kusama: kusamaEvents.undelegated['v9320'],
}
