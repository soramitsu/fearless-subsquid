import * as kusamaEvents from '../../kusama/para-inclusion/events'


export const candidateBacked = {
	name: 'ParaInclusion.CandidateBacked',
	v9090Kusama: kusamaEvents.candidateBacked['v9090'],
	v9111Kusama: kusamaEvents.candidateBacked['v9111'],
}

export const candidateIncluded = {
	name: 'ParaInclusion.CandidateIncluded',
	v9090Kusama: kusamaEvents.candidateIncluded['v9090'],
	v9111Kusama: kusamaEvents.candidateIncluded['v9111'],
}

export const candidateTimedOut = {
	name: 'ParaInclusion.CandidateTimedOut',
	v9090Kusama: kusamaEvents.candidateTimedOut['v9090'],
	v9111Kusama: kusamaEvents.candidateTimedOut['v9111'],
}

export const upwardMessagesReceived = {
	name: 'ParaInclusion.UpwardMessagesReceived',
	v9430Kusama: kusamaEvents.upwardMessagesReceived['v9430'],
}
