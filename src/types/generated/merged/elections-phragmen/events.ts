import * as polkadotEvents from '../../polkadot/elections-phragmen/events'


export const newTerm = {
	name: 'ElectionsPhragmen.NewTerm',
	v0Polkadot: polkadotEvents.newTerm['v0'],
}

export const emptyTerm = {
	name: 'ElectionsPhragmen.EmptyTerm',
	v0Polkadot: polkadotEvents.emptyTerm['v0'],
}

export const memberKicked = {
	name: 'ElectionsPhragmen.MemberKicked',
	v0Polkadot: polkadotEvents.memberKicked['v0'],
}

export const memberRenounced = {
	name: 'ElectionsPhragmen.MemberRenounced',
	v0Polkadot: polkadotEvents.memberRenounced['v0'],
}

export const voterReported = {
	name: 'ElectionsPhragmen.VoterReported',
	v0Polkadot: polkadotEvents.voterReported['v0'],
}

export const electionError = {
	name: 'ElectionsPhragmen.ElectionError',
	v25Polkadot: polkadotEvents.electionError['v25'],
}

export const candidateSlashed = {
	name: 'ElectionsPhragmen.CandidateSlashed',
	v27Polkadot: polkadotEvents.candidateSlashed['v27'],
}

export const seatHolderSlashed = {
	name: 'ElectionsPhragmen.SeatHolderSlashed',
	v27Polkadot: polkadotEvents.seatHolderSlashed['v27'],
}

export const renounced = {
	name: 'ElectionsPhragmen.Renounced',
	v28Polkadot: polkadotEvents.renounced['v28'],
}
