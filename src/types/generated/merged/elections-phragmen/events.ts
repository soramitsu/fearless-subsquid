import * as soraPolkadotEvents from '../../sora-polkadot/elections-phragmen/events'
import * as soraKusamaEvents from '../../sora-kusama/elections-phragmen/events'


export const newTerm = {
	name: 'ElectionsPhragmen.NewTerm',
	soraPolkadotV10: soraPolkadotEvents.newTerm['v10'],
	soraKusamaV9: soraKusamaEvents.newTerm['v9'],
}

export const emptyTerm = {
	name: 'ElectionsPhragmen.EmptyTerm',
	soraPolkadotV10: soraPolkadotEvents.emptyTerm['v10'],
	soraKusamaV9: soraKusamaEvents.emptyTerm['v9'],
}

export const electionError = {
	name: 'ElectionsPhragmen.ElectionError',
	soraPolkadotV10: soraPolkadotEvents.electionError['v10'],
	soraKusamaV9: soraKusamaEvents.electionError['v9'],
}

export const memberKicked = {
	name: 'ElectionsPhragmen.MemberKicked',
	soraPolkadotV10: soraPolkadotEvents.memberKicked['v10'],
	soraKusamaV9: soraKusamaEvents.memberKicked['v9'],
}

export const renounced = {
	name: 'ElectionsPhragmen.Renounced',
	soraPolkadotV10: soraPolkadotEvents.renounced['v10'],
	soraKusamaV9: soraKusamaEvents.renounced['v9'],
}

export const candidateSlashed = {
	name: 'ElectionsPhragmen.CandidateSlashed',
	soraPolkadotV10: soraPolkadotEvents.candidateSlashed['v10'],
	soraKusamaV9: soraKusamaEvents.candidateSlashed['v9'],
}

export const seatHolderSlashed = {
	name: 'ElectionsPhragmen.SeatHolderSlashed',
	soraPolkadotV10: soraPolkadotEvents.seatHolderSlashed['v10'],
	soraKusamaV9: soraKusamaEvents.seatHolderSlashed['v9'],
}
