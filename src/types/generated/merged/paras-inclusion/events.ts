import * as kusamaEvents from '../../kusama/paras-inclusion/events'


export const candidateBacked = {
	name: 'ParasInclusion.CandidateBacked',
	v9010Kusama: kusamaEvents.candidateBacked['v9010'],
}

export const candidateIncluded = {
	name: 'ParasInclusion.CandidateIncluded',
	v9010Kusama: kusamaEvents.candidateIncluded['v9010'],
}

export const candidateTimedOut = {
	name: 'ParasInclusion.CandidateTimedOut',
	v9010Kusama: kusamaEvents.candidateTimedOut['v9010'],
}
