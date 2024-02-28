import * as polkadotEvents from '../../polkadot/para-inclusion/events'


export const candidateBacked = {
	name: 'ParaInclusion.CandidateBacked',
	v9110Polkadot: polkadotEvents.candidateBacked['v9110'],
}

export const candidateIncluded = {
	name: 'ParaInclusion.CandidateIncluded',
	v9110Polkadot: polkadotEvents.candidateIncluded['v9110'],
}

export const candidateTimedOut = {
	name: 'ParaInclusion.CandidateTimedOut',
	v9110Polkadot: polkadotEvents.candidateTimedOut['v9110'],
}

export const upwardMessagesReceived = {
	name: 'ParaInclusion.UpwardMessagesReceived',
	v9430Polkadot: polkadotEvents.upwardMessagesReceived['v9430'],
}
