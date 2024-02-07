import * as soraPolkadotEvents from '../../sora-polkadot/elections-phragmen/events'
import * as soraKusamaEvents from '../../sora-kusama/elections-phragmen/events'


export const newTerm = {
	name: 'ElectionsPhragmen.NewTerm',
	v10SoraPolkadot: soraPolkadotEvents.newTerm['v10'],
	v9SoraKusama: soraKusamaEvents.newTerm['v9'],
}

export const emptyTerm = {
	name: 'ElectionsPhragmen.EmptyTerm',
	v10SoraPolkadot: soraPolkadotEvents.emptyTerm['v10'],
	v9SoraKusama: soraKusamaEvents.emptyTerm['v9'],
}

export const electionError = {
	name: 'ElectionsPhragmen.ElectionError',
	v10SoraPolkadot: soraPolkadotEvents.electionError['v10'],
	v9SoraKusama: soraKusamaEvents.electionError['v9'],
}

export const memberKicked = {
	name: 'ElectionsPhragmen.MemberKicked',
	v10SoraPolkadot: soraPolkadotEvents.memberKicked['v10'],
	v9SoraKusama: soraKusamaEvents.memberKicked['v9'],
}

export const renounced = {
	name: 'ElectionsPhragmen.Renounced',
	v10SoraPolkadot: soraPolkadotEvents.renounced['v10'],
	v9SoraKusama: soraKusamaEvents.renounced['v9'],
}

export const candidateSlashed = {
	name: 'ElectionsPhragmen.CandidateSlashed',
	v10SoraPolkadot: soraPolkadotEvents.candidateSlashed['v10'],
	v9SoraKusama: soraKusamaEvents.candidateSlashed['v9'],
}

export const seatHolderSlashed = {
	name: 'ElectionsPhragmen.SeatHolderSlashed',
	v10SoraPolkadot: soraPolkadotEvents.seatHolderSlashed['v10'],
	v9SoraKusama: soraKusamaEvents.seatHolderSlashed['v9'],
}
