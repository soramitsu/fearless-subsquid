import * as kusamaCalls from '../../kusama/conviction-voting/calls'


export const vote = {
	name: 'ConvictionVoting.vote',
	v9320Kusama: kusamaCalls.vote['v9320'],
	v9340Kusama: kusamaCalls.vote['v9340'],
}

export const delegate = {
	name: 'ConvictionVoting.delegate',
	v9320Kusama: kusamaCalls.delegate['v9320'],
}

export const undelegate = {
	name: 'ConvictionVoting.undelegate',
	v9320Kusama: kusamaCalls.undelegate['v9320'],
}

export const unlock = {
	name: 'ConvictionVoting.unlock',
	v9320Kusama: kusamaCalls.unlock['v9320'],
}

export const removeVote = {
	name: 'ConvictionVoting.remove_vote',
	v9320Kusama: kusamaCalls.removeVote['v9320'],
}

export const removeOtherVote = {
	name: 'ConvictionVoting.remove_other_vote',
	v9320Kusama: kusamaCalls.removeOtherVote['v9320'],
}
