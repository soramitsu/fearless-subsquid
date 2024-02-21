import * as kusamaEvents from '../../kusama/identity/events'


export const identitySet = {
	name: 'Identity.IdentitySet',
	v1030Kusama: kusamaEvents.identitySet['v1030'],
	v9130Kusama: kusamaEvents.identitySet['v9130'],
}

export const identityCleared = {
	name: 'Identity.IdentityCleared',
	v1030Kusama: kusamaEvents.identityCleared['v1030'],
	v9130Kusama: kusamaEvents.identityCleared['v9130'],
}

export const identityKilled = {
	name: 'Identity.IdentityKilled',
	v1030Kusama: kusamaEvents.identityKilled['v1030'],
	v9130Kusama: kusamaEvents.identityKilled['v9130'],
}

export const judgementRequested = {
	name: 'Identity.JudgementRequested',
	v1030Kusama: kusamaEvents.judgementRequested['v1030'],
	v9130Kusama: kusamaEvents.judgementRequested['v9130'],
}

export const judgementUnrequested = {
	name: 'Identity.JudgementUnrequested',
	v1030Kusama: kusamaEvents.judgementUnrequested['v1030'],
	v9130Kusama: kusamaEvents.judgementUnrequested['v9130'],
}

export const judgementGiven = {
	name: 'Identity.JudgementGiven',
	v1030Kusama: kusamaEvents.judgementGiven['v1030'],
	v9130Kusama: kusamaEvents.judgementGiven['v9130'],
}

export const registrarAdded = {
	name: 'Identity.RegistrarAdded',
	v1030Kusama: kusamaEvents.registrarAdded['v1030'],
	v9130Kusama: kusamaEvents.registrarAdded['v9130'],
}

export const subIdentityAdded = {
	name: 'Identity.SubIdentityAdded',
	v2015Kusama: kusamaEvents.subIdentityAdded['v2015'],
	v9130Kusama: kusamaEvents.subIdentityAdded['v9130'],
}

export const subIdentityRemoved = {
	name: 'Identity.SubIdentityRemoved',
	v2015Kusama: kusamaEvents.subIdentityRemoved['v2015'],
	v9130Kusama: kusamaEvents.subIdentityRemoved['v9130'],
}

export const subIdentityRevoked = {
	name: 'Identity.SubIdentityRevoked',
	v2015Kusama: kusamaEvents.subIdentityRevoked['v2015'],
	v9130Kusama: kusamaEvents.subIdentityRevoked['v9130'],
}
