import * as polkadotEvents from '../../polkadot/technical-membership/events'


export const memberAdded = {
	name: 'TechnicalMembership.MemberAdded',
	v0Polkadot: polkadotEvents.memberAdded['v0'],
}

export const memberRemoved = {
	name: 'TechnicalMembership.MemberRemoved',
	v0Polkadot: polkadotEvents.memberRemoved['v0'],
}

export const membersSwapped = {
	name: 'TechnicalMembership.MembersSwapped',
	v0Polkadot: polkadotEvents.membersSwapped['v0'],
}

export const membersReset = {
	name: 'TechnicalMembership.MembersReset',
	v0Polkadot: polkadotEvents.membersReset['v0'],
}

export const keyChanged = {
	name: 'TechnicalMembership.KeyChanged',
	v0Polkadot: polkadotEvents.keyChanged['v0'],
}

export const dummy = {
	name: 'TechnicalMembership.Dummy',
	v0Polkadot: polkadotEvents.dummy['v0'],
}
