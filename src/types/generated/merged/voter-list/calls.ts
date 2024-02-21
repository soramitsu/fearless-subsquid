import * as kusamaCalls from '../../kusama/voter-list/calls'


export const rebag = {
	name: 'VoterList.rebag',
	v9230Kusama: kusamaCalls.rebag['v9230'],
	v9291Kusama: kusamaCalls.rebag['v9291'],
}

export const putInFrontOf = {
	name: 'VoterList.put_in_front_of',
	v9230Kusama: kusamaCalls.putInFrontOf['v9230'],
	v9291Kusama: kusamaCalls.putInFrontOf['v9291'],
}

export const putInFrontOfOther = {
	name: 'VoterList.put_in_front_of_other',
	v1000000Kusama: kusamaCalls.putInFrontOfOther['v1000000'],
}
