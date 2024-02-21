import * as kusamaEvents from '../../kusama/election-provider-multi-phase/events'


export const solutionStored = {
	name: 'ElectionProviderMultiPhase.SolutionStored',
	v2029Kusama: kusamaEvents.solutionStored['v2029'],
	v9080Kusama: kusamaEvents.solutionStored['v9080'],
	v9111Kusama: kusamaEvents.solutionStored['v9111'],
	v9130Kusama: kusamaEvents.solutionStored['v9130'],
	v9291Kusama: kusamaEvents.solutionStored['v9291'],
	v9370Kusama: kusamaEvents.solutionStored['v9370'],
}

export const electionFinalized = {
	name: 'ElectionProviderMultiPhase.ElectionFinalized',
	v2029Kusama: kusamaEvents.electionFinalized['v2029'],
	v9111Kusama: kusamaEvents.electionFinalized['v9111'],
	v9130Kusama: kusamaEvents.electionFinalized['v9130'],
	v9291Kusama: kusamaEvents.electionFinalized['v9291'],
}

export const rewarded = {
	name: 'ElectionProviderMultiPhase.Rewarded',
	v2029Kusama: kusamaEvents.rewarded['v2029'],
	v9090Kusama: kusamaEvents.rewarded['v9090'],
	v9130Kusama: kusamaEvents.rewarded['v9130'],
}

export const slashed = {
	name: 'ElectionProviderMultiPhase.Slashed',
	v2029Kusama: kusamaEvents.slashed['v2029'],
	v9090Kusama: kusamaEvents.slashed['v9090'],
	v9130Kusama: kusamaEvents.slashed['v9130'],
}

export const signedPhaseStarted = {
	name: 'ElectionProviderMultiPhase.SignedPhaseStarted',
	v2029Kusama: kusamaEvents.signedPhaseStarted['v2029'],
	v9130Kusama: kusamaEvents.signedPhaseStarted['v9130'],
}

export const unsignedPhaseStarted = {
	name: 'ElectionProviderMultiPhase.UnsignedPhaseStarted',
	v2029Kusama: kusamaEvents.unsignedPhaseStarted['v2029'],
	v9130Kusama: kusamaEvents.unsignedPhaseStarted['v9130'],
}

export const electionFailed = {
	name: 'ElectionProviderMultiPhase.ElectionFailed',
	v9291Kusama: kusamaEvents.electionFailed['v9291'],
}

export const phaseTransitioned = {
	name: 'ElectionProviderMultiPhase.PhaseTransitioned',
	v9370Kusama: kusamaEvents.phaseTransitioned['v9370'],
}
