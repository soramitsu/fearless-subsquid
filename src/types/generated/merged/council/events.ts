import * as soraPolkadotEvents from '../../sora-polkadot/council/events'
import * as soraKusamaEvents from '../../sora-kusama/council/events'


export const proposed = {
	name: 'Council.Proposed',
	v10SoraPolkadot: soraPolkadotEvents.proposed['v10'],
	v7SoraKusama: soraKusamaEvents.proposed['v7'],
}

export const voted = {
	name: 'Council.Voted',
	v10SoraPolkadot: soraPolkadotEvents.voted['v10'],
	v7SoraKusama: soraKusamaEvents.voted['v7'],
}

export const approved = {
	name: 'Council.Approved',
	v10SoraPolkadot: soraPolkadotEvents.approved['v10'],
	v7SoraKusama: soraKusamaEvents.approved['v7'],
}

export const disapproved = {
	name: 'Council.Disapproved',
	v10SoraPolkadot: soraPolkadotEvents.disapproved['v10'],
	v7SoraKusama: soraKusamaEvents.disapproved['v7'],
}

export const executed = {
	name: 'Council.Executed',
	v10SoraPolkadot: soraPolkadotEvents.executed['v10'],
	v7SoraKusama: soraKusamaEvents.executed['v7'],
}

export const memberExecuted = {
	name: 'Council.MemberExecuted',
	v10SoraPolkadot: soraPolkadotEvents.memberExecuted['v10'],
	v7SoraKusama: soraKusamaEvents.memberExecuted['v7'],
}

export const closed = {
	name: 'Council.Closed',
	v10SoraPolkadot: soraPolkadotEvents.closed['v10'],
	v7SoraKusama: soraKusamaEvents.closed['v7'],
}
