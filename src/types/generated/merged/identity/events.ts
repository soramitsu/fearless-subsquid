import * as polkadotEvents from '../../polkadot/identity/events'


export const identitySet = {
	name: 'Identity.IdentitySet',
	v5Polkadot: polkadotEvents.identitySet['v5'],
	v9140Polkadot: polkadotEvents.identitySet['v9140'],
}

export const identityCleared = {
	name: 'Identity.IdentityCleared',
	v5Polkadot: polkadotEvents.identityCleared['v5'],
	v9140Polkadot: polkadotEvents.identityCleared['v9140'],
}

export const identityKilled = {
	name: 'Identity.IdentityKilled',
	v5Polkadot: polkadotEvents.identityKilled['v5'],
	v9140Polkadot: polkadotEvents.identityKilled['v9140'],
}

export const judgementRequested = {
	name: 'Identity.JudgementRequested',
	v5Polkadot: polkadotEvents.judgementRequested['v5'],
	v9140Polkadot: polkadotEvents.judgementRequested['v9140'],
}

export const judgementUnrequested = {
	name: 'Identity.JudgementUnrequested',
	v5Polkadot: polkadotEvents.judgementUnrequested['v5'],
	v9140Polkadot: polkadotEvents.judgementUnrequested['v9140'],
}

export const judgementGiven = {
	name: 'Identity.JudgementGiven',
	v5Polkadot: polkadotEvents.judgementGiven['v5'],
	v9140Polkadot: polkadotEvents.judgementGiven['v9140'],
}

export const registrarAdded = {
	name: 'Identity.RegistrarAdded',
	v5Polkadot: polkadotEvents.registrarAdded['v5'],
	v9140Polkadot: polkadotEvents.registrarAdded['v9140'],
}

export const subIdentityAdded = {
	name: 'Identity.SubIdentityAdded',
	v15Polkadot: polkadotEvents.subIdentityAdded['v15'],
	v9140Polkadot: polkadotEvents.subIdentityAdded['v9140'],
}

export const subIdentityRemoved = {
	name: 'Identity.SubIdentityRemoved',
	v15Polkadot: polkadotEvents.subIdentityRemoved['v15'],
	v9140Polkadot: polkadotEvents.subIdentityRemoved['v9140'],
}

export const subIdentityRevoked = {
	name: 'Identity.SubIdentityRevoked',
	v15Polkadot: polkadotEvents.subIdentityRevoked['v15'],
	v9140Polkadot: polkadotEvents.subIdentityRevoked['v9140'],
}
