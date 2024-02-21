import * as kusamaEvents from '../../kusama/phragmen-election/events'


export const newTerm = {
	name: 'PhragmenElection.NewTerm',
	v9010Kusama: kusamaEvents.newTerm['v9010'],
	v9130Kusama: kusamaEvents.newTerm['v9130'],
}

export const emptyTerm = {
	name: 'PhragmenElection.EmptyTerm',
	v9010Kusama: kusamaEvents.emptyTerm['v9010'],
}

export const electionError = {
	name: 'PhragmenElection.ElectionError',
	v9010Kusama: kusamaEvents.electionError['v9010'],
}

export const memberKicked = {
	name: 'PhragmenElection.MemberKicked',
	v9010Kusama: kusamaEvents.memberKicked['v9010'],
	v9130Kusama: kusamaEvents.memberKicked['v9130'],
}

export const renounced = {
	name: 'PhragmenElection.Renounced',
	v9010Kusama: kusamaEvents.renounced['v9010'],
	v9130Kusama: kusamaEvents.renounced['v9130'],
}

export const candidateSlashed = {
	name: 'PhragmenElection.CandidateSlashed',
	v9010Kusama: kusamaEvents.candidateSlashed['v9010'],
	v9130Kusama: kusamaEvents.candidateSlashed['v9130'],
}

export const seatHolderSlashed = {
	name: 'PhragmenElection.SeatHolderSlashed',
	v9010Kusama: kusamaEvents.seatHolderSlashed['v9010'],
	v9130Kusama: kusamaEvents.seatHolderSlashed['v9130'],
}
