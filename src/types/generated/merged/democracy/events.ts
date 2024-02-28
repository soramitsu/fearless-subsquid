import * as polkadotEvents from '../../polkadot/democracy/events'


export const proposed = {
	name: 'Democracy.Proposed',
	v0Polkadot: polkadotEvents.proposed['v0'],
	v9140Polkadot: polkadotEvents.proposed['v9140'],
}

export const tabled = {
	name: 'Democracy.Tabled',
	v0Polkadot: polkadotEvents.tabled['v0'],
	v9140Polkadot: polkadotEvents.tabled['v9140'],
	v9340Polkadot: polkadotEvents.tabled['v9340'],
}

export const externalTabled = {
	name: 'Democracy.ExternalTabled',
	v0Polkadot: polkadotEvents.externalTabled['v0'],
}

export const started = {
	name: 'Democracy.Started',
	v0Polkadot: polkadotEvents.started['v0'],
	v9140Polkadot: polkadotEvents.started['v9140'],
}

export const passed = {
	name: 'Democracy.Passed',
	v0Polkadot: polkadotEvents.passed['v0'],
	v9140Polkadot: polkadotEvents.passed['v9140'],
}

export const notPassed = {
	name: 'Democracy.NotPassed',
	v0Polkadot: polkadotEvents.notPassed['v0'],
	v9140Polkadot: polkadotEvents.notPassed['v9140'],
}

export const cancelled = {
	name: 'Democracy.Cancelled',
	v0Polkadot: polkadotEvents.cancelled['v0'],
	v9140Polkadot: polkadotEvents.cancelled['v9140'],
}

export const executed = {
	name: 'Democracy.Executed',
	v0Polkadot: polkadotEvents.executed['v0'],
	v9090Polkadot: polkadotEvents.executed['v9090'],
	v9110Polkadot: polkadotEvents.executed['v9110'],
	v9140Polkadot: polkadotEvents.executed['v9140'],
	v9170Polkadot: polkadotEvents.executed['v9170'],
	v9190Polkadot: polkadotEvents.executed['v9190'],
}

export const delegated = {
	name: 'Democracy.Delegated',
	v0Polkadot: polkadotEvents.delegated['v0'],
	v9140Polkadot: polkadotEvents.delegated['v9140'],
}

export const undelegated = {
	name: 'Democracy.Undelegated',
	v0Polkadot: polkadotEvents.undelegated['v0'],
	v9140Polkadot: polkadotEvents.undelegated['v9140'],
}

export const vetoed = {
	name: 'Democracy.Vetoed',
	v0Polkadot: polkadotEvents.vetoed['v0'],
	v9140Polkadot: polkadotEvents.vetoed['v9140'],
}

export const preimageNoted = {
	name: 'Democracy.PreimageNoted',
	v0Polkadot: polkadotEvents.preimageNoted['v0'],
	v9140Polkadot: polkadotEvents.preimageNoted['v9140'],
}

export const preimageUsed = {
	name: 'Democracy.PreimageUsed',
	v0Polkadot: polkadotEvents.preimageUsed['v0'],
	v9140Polkadot: polkadotEvents.preimageUsed['v9140'],
}

export const preimageInvalid = {
	name: 'Democracy.PreimageInvalid',
	v0Polkadot: polkadotEvents.preimageInvalid['v0'],
	v9140Polkadot: polkadotEvents.preimageInvalid['v9140'],
}

export const preimageMissing = {
	name: 'Democracy.PreimageMissing',
	v0Polkadot: polkadotEvents.preimageMissing['v0'],
	v9140Polkadot: polkadotEvents.preimageMissing['v9140'],
}

export const preimageReaped = {
	name: 'Democracy.PreimageReaped',
	v0Polkadot: polkadotEvents.preimageReaped['v0'],
	v9140Polkadot: polkadotEvents.preimageReaped['v9140'],
}

export const unlocked = {
	name: 'Democracy.Unlocked',
	v0Polkadot: polkadotEvents.unlocked['v0'],
}

export const blacklisted = {
	name: 'Democracy.Blacklisted',
	v25Polkadot: polkadotEvents.blacklisted['v25'],
	v9140Polkadot: polkadotEvents.blacklisted['v9140'],
}

export const voted = {
	name: 'Democracy.Voted',
	v9170Polkadot: polkadotEvents.voted['v9170'],
}

export const seconded = {
	name: 'Democracy.Seconded',
	v9170Polkadot: polkadotEvents.seconded['v9170'],
}

export const proposalCanceled = {
	name: 'Democracy.ProposalCanceled',
	v9250Polkadot: polkadotEvents.proposalCanceled['v9250'],
}

export const metadataSet = {
	name: 'Democracy.MetadataSet',
	v9420Polkadot: polkadotEvents.metadataSet['v9420'],
}

export const metadataCleared = {
	name: 'Democracy.MetadataCleared',
	v9420Polkadot: polkadotEvents.metadataCleared['v9420'],
}

export const metadataTransferred = {
	name: 'Democracy.MetadataTransferred',
	v9420Polkadot: polkadotEvents.metadataTransferred['v9420'],
}
