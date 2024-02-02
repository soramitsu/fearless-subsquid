import * as soraPolkadotEvents from '../../sora-polkadot/technical-committee/events'
import * as soraKusamaEvents from '../../sora-kusama/technical-committee/events'


export const proposed = {
	name: 'TechnicalCommittee.Proposed',
	soraPolkadotV10: soraPolkadotEvents.proposed['v10'],
	soraKusamaV7: soraKusamaEvents.proposed['v7'],
}

export const voted = {
	name: 'TechnicalCommittee.Voted',
	soraPolkadotV10: soraPolkadotEvents.voted['v10'],
	soraKusamaV7: soraKusamaEvents.voted['v7'],
}

export const approved = {
	name: 'TechnicalCommittee.Approved',
	soraPolkadotV10: soraPolkadotEvents.approved['v10'],
	soraKusamaV7: soraKusamaEvents.approved['v7'],
}

export const disapproved = {
	name: 'TechnicalCommittee.Disapproved',
	soraPolkadotV10: soraPolkadotEvents.disapproved['v10'],
	soraKusamaV7: soraKusamaEvents.disapproved['v7'],
}

export const executed = {
	name: 'TechnicalCommittee.Executed',
	soraPolkadotV10: soraPolkadotEvents.executed['v10'],
	soraKusamaV7: soraKusamaEvents.executed['v7'],
}

export const memberExecuted = {
	name: 'TechnicalCommittee.MemberExecuted',
	soraPolkadotV10: soraPolkadotEvents.memberExecuted['v10'],
	soraKusamaV7: soraKusamaEvents.memberExecuted['v7'],
}

export const closed = {
	name: 'TechnicalCommittee.Closed',
	soraPolkadotV10: soraPolkadotEvents.closed['v10'],
	soraKusamaV7: soraKusamaEvents.closed['v7'],
}
