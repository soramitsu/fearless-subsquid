import * as polkadotStorage from '../../polkadot/election-provider-multi-phase/storage'


export const round = {
	name: '',
	v29Polkadot: polkadotStorage.round['v29'],
}

export const currentPhase = {
	name: '',
	v29Polkadot: polkadotStorage.currentPhase['v29'],
}

export const queuedSolution = {
	name: '',
	v29Polkadot: polkadotStorage.queuedSolution['v29'],
	v9110Polkadot: polkadotStorage.queuedSolution['v9110'],
	v9180Polkadot: polkadotStorage.queuedSolution['v9180'],
}

export const snapshot = {
	name: '',
	v29Polkadot: polkadotStorage.snapshot['v29'],
}

export const desiredTargets = {
	name: '',
	v29Polkadot: polkadotStorage.desiredTargets['v29'],
}

export const snapshotMetadata = {
	name: '',
	v29Polkadot: polkadotStorage.snapshotMetadata['v29'],
}

export const minimumUntrustedScore = {
	name: '',
	v9050Polkadot: polkadotStorage.minimumUntrustedScore['v9050'],
	v9180Polkadot: polkadotStorage.minimumUntrustedScore['v9180'],
}

export const signedSubmissionNextIndex = {
	name: '',
	v9080Polkadot: polkadotStorage.signedSubmissionNextIndex['v9080'],
}

export const signedSubmissionIndices = {
	name: '',
	v9080Polkadot: polkadotStorage.signedSubmissionIndices['v9080'],
	v9180Polkadot: polkadotStorage.signedSubmissionIndices['v9180'],
	v9340Polkadot: polkadotStorage.signedSubmissionIndices['v9340'],
}

export const signedSubmissionsMap = {
	name: '',
	v9080Polkadot: polkadotStorage.signedSubmissionsMap['v9080'],
	v9110Polkadot: polkadotStorage.signedSubmissionsMap['v9110'],
	v9170Polkadot: polkadotStorage.signedSubmissionsMap['v9170'],
	v9180Polkadot: polkadotStorage.signedSubmissionsMap['v9180'],
	v9220Polkadot: polkadotStorage.signedSubmissionsMap['v9220'],
}
