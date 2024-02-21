import * as kusamaEvents from '../../kusama/elections-phragmen/events'


export const newTerm = {
	name: 'ElectionsPhragmen.NewTerm',
	v1020Kusama: kusamaEvents.newTerm['v1020'],
}

export const emptyTerm = {
	name: 'ElectionsPhragmen.EmptyTerm',
	v1020Kusama: kusamaEvents.emptyTerm['v1020'],
}

export const memberKicked = {
	name: 'ElectionsPhragmen.MemberKicked',
	v1020Kusama: kusamaEvents.memberKicked['v1020'],
}

export const memberRenounced = {
	name: 'ElectionsPhragmen.MemberRenounced',
	v1020Kusama: kusamaEvents.memberRenounced['v1020'],
}

export const voterReported = {
	name: 'ElectionsPhragmen.VoterReported',
	v1020Kusama: kusamaEvents.voterReported['v1020'],
}

export const electionError = {
	name: 'ElectionsPhragmen.ElectionError',
	v2025Kusama: kusamaEvents.electionError['v2025'],
}

export const candidateSlashed = {
	name: 'ElectionsPhragmen.CandidateSlashed',
	v2027Kusama: kusamaEvents.candidateSlashed['v2027'],
}

export const seatHolderSlashed = {
	name: 'ElectionsPhragmen.SeatHolderSlashed',
	v2027Kusama: kusamaEvents.seatHolderSlashed['v2027'],
}

export const renounced = {
	name: 'ElectionsPhragmen.Renounced',
	v2028Kusama: kusamaEvents.renounced['v2028'],
}
