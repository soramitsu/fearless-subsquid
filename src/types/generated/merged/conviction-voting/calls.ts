import * as polkadotCalls from '../../polkadot/conviction-voting/calls'


export const vote = {
	name: 'ConvictionVoting.vote',
	v9420Polkadot: polkadotCalls.vote['v9420'],
}

export const delegate = {
	name: 'ConvictionVoting.delegate',
	v9420Polkadot: polkadotCalls.delegate['v9420'],
}

export const undelegate = {
	name: 'ConvictionVoting.undelegate',
	v9420Polkadot: polkadotCalls.undelegate['v9420'],
}

export const unlock = {
	name: 'ConvictionVoting.unlock',
	v9420Polkadot: polkadotCalls.unlock['v9420'],
}

export const removeVote = {
	name: 'ConvictionVoting.remove_vote',
	v9420Polkadot: polkadotCalls.removeVote['v9420'],
}

export const removeOtherVote = {
	name: 'ConvictionVoting.remove_other_vote',
	v9420Polkadot: polkadotCalls.removeOtherVote['v9420'],
}
