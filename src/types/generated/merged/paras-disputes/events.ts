import * as kusamaEvents from '../../kusama/paras-disputes/events'


export const disputeInitiated = {
	name: 'ParasDisputes.DisputeInitiated',
	v9130Kusama: kusamaEvents.disputeInitiated['v9130'],
}

export const disputeConcluded = {
	name: 'ParasDisputes.DisputeConcluded',
	v9130Kusama: kusamaEvents.disputeConcluded['v9130'],
}

export const disputeTimedOut = {
	name: 'ParasDisputes.DisputeTimedOut',
	v9130Kusama: kusamaEvents.disputeTimedOut['v9130'],
}

export const revert = {
	name: 'ParasDisputes.Revert',
	v9130Kusama: kusamaEvents.revert['v9130'],
}
