import * as kusamaEvents from '../../kusama/voter-list/events'


export const rebagged = {
	name: 'VoterList.Rebagged',
	v9230Kusama: kusamaEvents.rebagged['v9230'],
}

export const scoreUpdated = {
	name: 'VoterList.ScoreUpdated',
	v9230Kusama: kusamaEvents.scoreUpdated['v9230'],
}
