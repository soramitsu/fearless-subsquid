import * as polkadotEvents from '../../polkadot/election-provider-multi-phase/events'


export const solutionStored = {
	name: 'ElectionProviderMultiPhase.SolutionStored',
	v29Polkadot: polkadotEvents.solutionStored['v29'],
	v9080Polkadot: polkadotEvents.solutionStored['v9080'],
	v9110Polkadot: polkadotEvents.solutionStored['v9110'],
	v9140Polkadot: polkadotEvents.solutionStored['v9140'],
	v9291Polkadot: polkadotEvents.solutionStored['v9291'],
	v9370Polkadot: polkadotEvents.solutionStored['v9370'],
}

export const electionFinalized = {
	name: 'ElectionProviderMultiPhase.ElectionFinalized',
	v29Polkadot: polkadotEvents.electionFinalized['v29'],
	v9110Polkadot: polkadotEvents.electionFinalized['v9110'],
	v9140Polkadot: polkadotEvents.electionFinalized['v9140'],
	v9291Polkadot: polkadotEvents.electionFinalized['v9291'],
}

export const rewarded = {
	name: 'ElectionProviderMultiPhase.Rewarded',
	v29Polkadot: polkadotEvents.rewarded['v29'],
	v9090Polkadot: polkadotEvents.rewarded['v9090'],
	v9140Polkadot: polkadotEvents.rewarded['v9140'],
}

export const slashed = {
	name: 'ElectionProviderMultiPhase.Slashed',
	v29Polkadot: polkadotEvents.slashed['v29'],
	v9090Polkadot: polkadotEvents.slashed['v9090'],
	v9140Polkadot: polkadotEvents.slashed['v9140'],
}

export const signedPhaseStarted = {
	name: 'ElectionProviderMultiPhase.SignedPhaseStarted',
	v29Polkadot: polkadotEvents.signedPhaseStarted['v29'],
	v9140Polkadot: polkadotEvents.signedPhaseStarted['v9140'],
}

export const unsignedPhaseStarted = {
	name: 'ElectionProviderMultiPhase.UnsignedPhaseStarted',
	v29Polkadot: polkadotEvents.unsignedPhaseStarted['v29'],
	v9140Polkadot: polkadotEvents.unsignedPhaseStarted['v9140'],
}

export const electionFailed = {
	name: 'ElectionProviderMultiPhase.ElectionFailed',
	v9291Polkadot: polkadotEvents.electionFailed['v9291'],
}

export const phaseTransitioned = {
	name: 'ElectionProviderMultiPhase.PhaseTransitioned',
	v9370Polkadot: polkadotEvents.phaseTransitioned['v9370'],
}
