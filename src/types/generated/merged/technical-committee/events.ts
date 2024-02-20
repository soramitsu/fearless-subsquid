import * as soraPolkadotEvents from '../../sora-polkadot/technical-committee/events'
import * as soraKusamaEvents from '../../sora-kusama/technical-committee/events'


export const proposed = {
	name: 'TechnicalCommittee.Proposed',
	v10SoraPolkadot: soraPolkadotEvents.proposed['v10'],
	v7SoraKusama: soraKusamaEvents.proposed['v7'],
}

export const voted = {
	name: 'TechnicalCommittee.Voted',
	v10SoraPolkadot: soraPolkadotEvents.voted['v10'],
	v7SoraKusama: soraKusamaEvents.voted['v7'],
}

export const approved = {
	name: 'TechnicalCommittee.Approved',
	v10SoraPolkadot: soraPolkadotEvents.approved['v10'],
	v7SoraKusama: soraKusamaEvents.approved['v7'],
}

export const disapproved = {
	name: 'TechnicalCommittee.Disapproved',
	v10SoraPolkadot: soraPolkadotEvents.disapproved['v10'],
	v7SoraKusama: soraKusamaEvents.disapproved['v7'],
}

export const executed = {
	name: 'TechnicalCommittee.Executed',
	v10SoraPolkadot: soraPolkadotEvents.executed['v10'],
	v7SoraKusama: soraKusamaEvents.executed['v7'],
}

export const memberExecuted = {
	name: 'TechnicalCommittee.MemberExecuted',
	v10SoraPolkadot: soraPolkadotEvents.memberExecuted['v10'],
	v7SoraKusama: soraKusamaEvents.memberExecuted['v7'],
}

export const closed = {
	name: 'TechnicalCommittee.Closed',
	v10SoraPolkadot: soraPolkadotEvents.closed['v10'],
	v7SoraKusama: soraKusamaEvents.closed['v7'],
}
