import * as polkadotCalls from '../../polkadot/voter-list/calls'


export const rebag = {
	name: 'VoterList.rebag',
	v9230Polkadot: polkadotCalls.rebag['v9230'],
	v9291Polkadot: polkadotCalls.rebag['v9291'],
}

export const putInFrontOf = {
	name: 'VoterList.put_in_front_of',
	v9230Polkadot: polkadotCalls.putInFrontOf['v9230'],
	v9291Polkadot: polkadotCalls.putInFrontOf['v9291'],
}

export const putInFrontOfOther = {
	name: 'VoterList.put_in_front_of_other',
	v1000001Polkadot: polkadotCalls.putInFrontOfOther['v1000001'],
}
