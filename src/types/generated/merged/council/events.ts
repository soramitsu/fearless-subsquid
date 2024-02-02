import * as soraPolkadotEvents from '../../sora-polkadot/council/events'
import * as soraKusamaEvents from '../../sora-kusama/council/events'


export const proposed = {
	name: 'Council.Proposed',
	soraPolkadotV10: soraPolkadotEvents.proposed['v10'],
	soraKusamaV7: soraKusamaEvents.proposed['v7'],
}

export const voted = {
	name: 'Council.Voted',
	soraPolkadotV10: soraPolkadotEvents.voted['v10'],
	soraKusamaV7: soraKusamaEvents.voted['v7'],
}

export const approved = {
	name: 'Council.Approved',
	soraPolkadotV10: soraPolkadotEvents.approved['v10'],
	soraKusamaV7: soraKusamaEvents.approved['v7'],
}

export const disapproved = {
	name: 'Council.Disapproved',
	soraPolkadotV10: soraPolkadotEvents.disapproved['v10'],
	soraKusamaV7: soraKusamaEvents.disapproved['v7'],
}

export const executed = {
	name: 'Council.Executed',
	soraPolkadotV10: soraPolkadotEvents.executed['v10'],
	soraKusamaV7: soraKusamaEvents.executed['v7'],
}

export const memberExecuted = {
	name: 'Council.MemberExecuted',
	soraPolkadotV10: soraPolkadotEvents.memberExecuted['v10'],
	soraKusamaV7: soraKusamaEvents.memberExecuted['v7'],
}

export const closed = {
	name: 'Council.Closed',
	soraPolkadotV10: soraPolkadotEvents.closed['v10'],
	soraKusamaV7: soraKusamaEvents.closed['v7'],
}
