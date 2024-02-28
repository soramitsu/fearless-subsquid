import * as polkadotEvents from '../../polkadot/paras-disputes/events'


export const disputeInitiated = {
	name: 'ParasDisputes.DisputeInitiated',
	v9180Polkadot: polkadotEvents.disputeInitiated['v9180'],
}

export const disputeConcluded = {
	name: 'ParasDisputes.DisputeConcluded',
	v9180Polkadot: polkadotEvents.disputeConcluded['v9180'],
}

export const disputeTimedOut = {
	name: 'ParasDisputes.DisputeTimedOut',
	v9180Polkadot: polkadotEvents.disputeTimedOut['v9180'],
}

export const revert = {
	name: 'ParasDisputes.Revert',
	v9180Polkadot: polkadotEvents.revert['v9180'],
}
