import * as kusamaEvents from '../../kusama/referenda/events'


export const submitted = {
	name: 'Referenda.Submitted',
	v9320Kusama: kusamaEvents.submitted['v9320'],
}

export const decisionDepositPlaced = {
	name: 'Referenda.DecisionDepositPlaced',
	v9320Kusama: kusamaEvents.decisionDepositPlaced['v9320'],
}

export const decisionDepositRefunded = {
	name: 'Referenda.DecisionDepositRefunded',
	v9320Kusama: kusamaEvents.decisionDepositRefunded['v9320'],
}

export const depositSlashed = {
	name: 'Referenda.DepositSlashed',
	v9320Kusama: kusamaEvents.depositSlashed['v9320'],
}

export const decisionStarted = {
	name: 'Referenda.DecisionStarted',
	v9320Kusama: kusamaEvents.decisionStarted['v9320'],
}

export const confirmStarted = {
	name: 'Referenda.ConfirmStarted',
	v9320Kusama: kusamaEvents.confirmStarted['v9320'],
}

export const confirmAborted = {
	name: 'Referenda.ConfirmAborted',
	v9320Kusama: kusamaEvents.confirmAborted['v9320'],
}

export const confirmed = {
	name: 'Referenda.Confirmed',
	v9320Kusama: kusamaEvents.confirmed['v9320'],
}

export const approved = {
	name: 'Referenda.Approved',
	v9320Kusama: kusamaEvents.approved['v9320'],
}

export const rejected = {
	name: 'Referenda.Rejected',
	v9320Kusama: kusamaEvents.rejected['v9320'],
}

export const timedOut = {
	name: 'Referenda.TimedOut',
	v9320Kusama: kusamaEvents.timedOut['v9320'],
}

export const cancelled = {
	name: 'Referenda.Cancelled',
	v9320Kusama: kusamaEvents.cancelled['v9320'],
}

export const killed = {
	name: 'Referenda.Killed',
	v9320Kusama: kusamaEvents.killed['v9320'],
}

export const submissionDepositRefunded = {
	name: 'Referenda.SubmissionDepositRefunded',
	v9350Kusama: kusamaEvents.submissionDepositRefunded['v9350'],
}

export const metadataSet = {
	name: 'Referenda.MetadataSet',
	v9420Kusama: kusamaEvents.metadataSet['v9420'],
}

export const metadataCleared = {
	name: 'Referenda.MetadataCleared',
	v9420Kusama: kusamaEvents.metadataCleared['v9420'],
}
