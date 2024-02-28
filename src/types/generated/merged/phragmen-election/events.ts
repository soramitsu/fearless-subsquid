import * as polkadotEvents from '../../polkadot/phragmen-election/events'


export const newTerm = {
	name: 'PhragmenElection.NewTerm',
	v9050Polkadot: polkadotEvents.newTerm['v9050'],
	v9140Polkadot: polkadotEvents.newTerm['v9140'],
}

export const emptyTerm = {
	name: 'PhragmenElection.EmptyTerm',
	v9050Polkadot: polkadotEvents.emptyTerm['v9050'],
}

export const electionError = {
	name: 'PhragmenElection.ElectionError',
	v9050Polkadot: polkadotEvents.electionError['v9050'],
}

export const memberKicked = {
	name: 'PhragmenElection.MemberKicked',
	v9050Polkadot: polkadotEvents.memberKicked['v9050'],
	v9140Polkadot: polkadotEvents.memberKicked['v9140'],
}

export const renounced = {
	name: 'PhragmenElection.Renounced',
	v9050Polkadot: polkadotEvents.renounced['v9050'],
	v9140Polkadot: polkadotEvents.renounced['v9140'],
}

export const candidateSlashed = {
	name: 'PhragmenElection.CandidateSlashed',
	v9050Polkadot: polkadotEvents.candidateSlashed['v9050'],
	v9140Polkadot: polkadotEvents.candidateSlashed['v9140'],
}

export const seatHolderSlashed = {
	name: 'PhragmenElection.SeatHolderSlashed',
	v9050Polkadot: polkadotEvents.seatHolderSlashed['v9050'],
	v9140Polkadot: polkadotEvents.seatHolderSlashed['v9140'],
}
