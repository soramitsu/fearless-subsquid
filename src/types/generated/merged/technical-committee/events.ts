import * as polkadotEvents from '../../polkadot/technical-committee/events'


export const proposed = {
	name: 'TechnicalCommittee.Proposed',
	v0Polkadot: polkadotEvents.proposed['v0'],
	v9140Polkadot: polkadotEvents.proposed['v9140'],
}

export const voted = {
	name: 'TechnicalCommittee.Voted',
	v0Polkadot: polkadotEvents.voted['v0'],
	v9140Polkadot: polkadotEvents.voted['v9140'],
}

export const approved = {
	name: 'TechnicalCommittee.Approved',
	v0Polkadot: polkadotEvents.approved['v0'],
	v9140Polkadot: polkadotEvents.approved['v9140'],
}

export const disapproved = {
	name: 'TechnicalCommittee.Disapproved',
	v0Polkadot: polkadotEvents.disapproved['v0'],
	v9140Polkadot: polkadotEvents.disapproved['v9140'],
}

export const executed = {
	name: 'TechnicalCommittee.Executed',
	v0Polkadot: polkadotEvents.executed['v0'],
	v9110Polkadot: polkadotEvents.executed['v9110'],
	v9140Polkadot: polkadotEvents.executed['v9140'],
	v9170Polkadot: polkadotEvents.executed['v9170'],
	v9190Polkadot: polkadotEvents.executed['v9190'],
	v9340Polkadot: polkadotEvents.executed['v9340'],
	v9420Polkadot: polkadotEvents.executed['v9420'],
	v9430Polkadot: polkadotEvents.executed['v9430'],
}

export const memberExecuted = {
	name: 'TechnicalCommittee.MemberExecuted',
	v0Polkadot: polkadotEvents.memberExecuted['v0'],
	v9110Polkadot: polkadotEvents.memberExecuted['v9110'],
	v9140Polkadot: polkadotEvents.memberExecuted['v9140'],
	v9170Polkadot: polkadotEvents.memberExecuted['v9170'],
	v9190Polkadot: polkadotEvents.memberExecuted['v9190'],
	v9340Polkadot: polkadotEvents.memberExecuted['v9340'],
	v9420Polkadot: polkadotEvents.memberExecuted['v9420'],
	v9430Polkadot: polkadotEvents.memberExecuted['v9430'],
}

export const closed = {
	name: 'TechnicalCommittee.Closed',
	v0Polkadot: polkadotEvents.closed['v0'],
	v9140Polkadot: polkadotEvents.closed['v9140'],
}
