import * as kusamaStorage from '../../kusama/election-provider-multi-phase/storage'


export const round = {
	name: '',
	v2029Kusama: kusamaStorage.round['v2029'],
}

export const currentPhase = {
	name: '',
	v2029Kusama: kusamaStorage.currentPhase['v2029'],
}

export const queuedSolution = {
	name: '',
	v2029Kusama: kusamaStorage.queuedSolution['v2029'],
	v9111Kusama: kusamaStorage.queuedSolution['v9111'],
	v9180Kusama: kusamaStorage.queuedSolution['v9180'],
}

export const snapshot = {
	name: '',
	v2029Kusama: kusamaStorage.snapshot['v2029'],
}

export const desiredTargets = {
	name: '',
	v2029Kusama: kusamaStorage.desiredTargets['v2029'],
}

export const snapshotMetadata = {
	name: '',
	v2029Kusama: kusamaStorage.snapshotMetadata['v2029'],
}

export const minimumUntrustedScore = {
	name: '',
	v9040Kusama: kusamaStorage.minimumUntrustedScore['v9040'],
	v9180Kusama: kusamaStorage.minimumUntrustedScore['v9180'],
}

export const signedSubmissionNextIndex = {
	name: '',
	v9080Kusama: kusamaStorage.signedSubmissionNextIndex['v9080'],
}

export const signedSubmissionIndices = {
	name: '',
	v9080Kusama: kusamaStorage.signedSubmissionIndices['v9080'],
	v9180Kusama: kusamaStorage.signedSubmissionIndices['v9180'],
	v9340Kusama: kusamaStorage.signedSubmissionIndices['v9340'],
}

export const signedSubmissionsMap = {
	name: '',
	v9080Kusama: kusamaStorage.signedSubmissionsMap['v9080'],
	v9111Kusama: kusamaStorage.signedSubmissionsMap['v9111'],
	v9160Kusama: kusamaStorage.signedSubmissionsMap['v9160'],
	v9180Kusama: kusamaStorage.signedSubmissionsMap['v9180'],
	v9220Kusama: kusamaStorage.signedSubmissionsMap['v9220'],
}
