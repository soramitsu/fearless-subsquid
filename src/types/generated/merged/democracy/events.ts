import * as kusamaEvents from '../../kusama/democracy/events'


export const proposed = {
	name: 'Democracy.Proposed',
	v1020Kusama: kusamaEvents.proposed['v1020'],
	v9130Kusama: kusamaEvents.proposed['v9130'],
}

export const tabled = {
	name: 'Democracy.Tabled',
	v1020Kusama: kusamaEvents.tabled['v1020'],
	v9130Kusama: kusamaEvents.tabled['v9130'],
	v9320Kusama: kusamaEvents.tabled['v9320'],
}

export const externalTabled = {
	name: 'Democracy.ExternalTabled',
	v1020Kusama: kusamaEvents.externalTabled['v1020'],
}

export const started = {
	name: 'Democracy.Started',
	v1020Kusama: kusamaEvents.started['v1020'],
	v9130Kusama: kusamaEvents.started['v9130'],
}

export const passed = {
	name: 'Democracy.Passed',
	v1020Kusama: kusamaEvents.passed['v1020'],
	v9130Kusama: kusamaEvents.passed['v9130'],
}

export const notPassed = {
	name: 'Democracy.NotPassed',
	v1020Kusama: kusamaEvents.notPassed['v1020'],
	v9130Kusama: kusamaEvents.notPassed['v9130'],
}

export const cancelled = {
	name: 'Democracy.Cancelled',
	v1020Kusama: kusamaEvents.cancelled['v1020'],
	v9130Kusama: kusamaEvents.cancelled['v9130'],
}

export const executed = {
	name: 'Democracy.Executed',
	v1020Kusama: kusamaEvents.executed['v1020'],
	v9090Kusama: kusamaEvents.executed['v9090'],
	v9111Kusama: kusamaEvents.executed['v9111'],
	v9130Kusama: kusamaEvents.executed['v9130'],
	v9160Kusama: kusamaEvents.executed['v9160'],
	v9170Kusama: kusamaEvents.executed['v9170'],
	v9190Kusama: kusamaEvents.executed['v9190'],
}

export const delegated = {
	name: 'Democracy.Delegated',
	v1020Kusama: kusamaEvents.delegated['v1020'],
	v9130Kusama: kusamaEvents.delegated['v9130'],
}

export const undelegated = {
	name: 'Democracy.Undelegated',
	v1020Kusama: kusamaEvents.undelegated['v1020'],
	v9130Kusama: kusamaEvents.undelegated['v9130'],
}

export const vetoed = {
	name: 'Democracy.Vetoed',
	v1020Kusama: kusamaEvents.vetoed['v1020'],
	v9130Kusama: kusamaEvents.vetoed['v9130'],
}

export const preimageNoted = {
	name: 'Democracy.PreimageNoted',
	v1022Kusama: kusamaEvents.preimageNoted['v1022'],
	v9130Kusama: kusamaEvents.preimageNoted['v9130'],
}

export const preimageUsed = {
	name: 'Democracy.PreimageUsed',
	v1022Kusama: kusamaEvents.preimageUsed['v1022'],
	v9130Kusama: kusamaEvents.preimageUsed['v9130'],
}

export const preimageInvalid = {
	name: 'Democracy.PreimageInvalid',
	v1022Kusama: kusamaEvents.preimageInvalid['v1022'],
	v9130Kusama: kusamaEvents.preimageInvalid['v9130'],
}

export const preimageMissing = {
	name: 'Democracy.PreimageMissing',
	v1022Kusama: kusamaEvents.preimageMissing['v1022'],
	v9130Kusama: kusamaEvents.preimageMissing['v9130'],
}

export const preimageReaped = {
	name: 'Democracy.PreimageReaped',
	v1022Kusama: kusamaEvents.preimageReaped['v1022'],
	v9130Kusama: kusamaEvents.preimageReaped['v9130'],
}

export const unlocked = {
	name: 'Democracy.Unlocked',
	v1050Kusama: kusamaEvents.unlocked['v1050'],
}

export const blacklisted = {
	name: 'Democracy.Blacklisted',
	v2025Kusama: kusamaEvents.blacklisted['v2025'],
	v9130Kusama: kusamaEvents.blacklisted['v9130'],
}

export const voted = {
	name: 'Democracy.Voted',
	v9160Kusama: kusamaEvents.voted['v9160'],
}

export const seconded = {
	name: 'Democracy.Seconded',
	v9160Kusama: kusamaEvents.seconded['v9160'],
}

export const proposalCanceled = {
	name: 'Democracy.ProposalCanceled',
	v9250Kusama: kusamaEvents.proposalCanceled['v9250'],
}
