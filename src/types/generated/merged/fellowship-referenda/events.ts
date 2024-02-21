import * as kusamaEvents from '../../kusama/fellowship-referenda/events'


export const submitted = {
	name: 'FellowshipReferenda.Submitted',
	v9320Kusama: kusamaEvents.submitted['v9320'],
}

export const decisionDepositPlaced = {
	name: 'FellowshipReferenda.DecisionDepositPlaced',
	v9320Kusama: kusamaEvents.decisionDepositPlaced['v9320'],
}

export const decisionDepositRefunded = {
	name: 'FellowshipReferenda.DecisionDepositRefunded',
	v9320Kusama: kusamaEvents.decisionDepositRefunded['v9320'],
}

export const depositSlashed = {
	name: 'FellowshipReferenda.DepositSlashed',
	v9320Kusama: kusamaEvents.depositSlashed['v9320'],
}

export const decisionStarted = {
	name: 'FellowshipReferenda.DecisionStarted',
	v9320Kusama: kusamaEvents.decisionStarted['v9320'],
}

export const confirmStarted = {
	name: 'FellowshipReferenda.ConfirmStarted',
	v9320Kusama: kusamaEvents.confirmStarted['v9320'],
}

export const confirmAborted = {
	name: 'FellowshipReferenda.ConfirmAborted',
	v9320Kusama: kusamaEvents.confirmAborted['v9320'],
}

export const confirmed = {
	name: 'FellowshipReferenda.Confirmed',
	v9320Kusama: kusamaEvents.confirmed['v9320'],
}

export const approved = {
	name: 'FellowshipReferenda.Approved',
	v9320Kusama: kusamaEvents.approved['v9320'],
}

export const rejected = {
	name: 'FellowshipReferenda.Rejected',
	v9320Kusama: kusamaEvents.rejected['v9320'],
}

export const timedOut = {
	name: 'FellowshipReferenda.TimedOut',
	v9320Kusama: kusamaEvents.timedOut['v9320'],
}

export const cancelled = {
	name: 'FellowshipReferenda.Cancelled',
	v9320Kusama: kusamaEvents.cancelled['v9320'],
}

export const killed = {
	name: 'FellowshipReferenda.Killed',
	v9320Kusama: kusamaEvents.killed['v9320'],
}

export const submissionDepositRefunded = {
	name: 'FellowshipReferenda.SubmissionDepositRefunded',
	v9350Kusama: kusamaEvents.submissionDepositRefunded['v9350'],
}

export const metadataSet = {
	name: 'FellowshipReferenda.MetadataSet',
	v9420Kusama: kusamaEvents.metadataSet['v9420'],
}

export const metadataCleared = {
	name: 'FellowshipReferenda.MetadataCleared',
	v9420Kusama: kusamaEvents.metadataCleared['v9420'],
}
