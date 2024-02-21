import * as kusamaEvents from '../../kusama/paras/events'


export const currentCodeUpdated = {
	name: 'Paras.CurrentCodeUpdated',
	v9010Kusama: kusamaEvents.currentCodeUpdated['v9010'],
}

export const currentHeadUpdated = {
	name: 'Paras.CurrentHeadUpdated',
	v9010Kusama: kusamaEvents.currentHeadUpdated['v9010'],
}

export const codeUpgradeScheduled = {
	name: 'Paras.CodeUpgradeScheduled',
	v9010Kusama: kusamaEvents.codeUpgradeScheduled['v9010'],
}

export const newHeadNoted = {
	name: 'Paras.NewHeadNoted',
	v9010Kusama: kusamaEvents.newHeadNoted['v9010'],
}

export const actionQueued = {
	name: 'Paras.ActionQueued',
	v9010Kusama: kusamaEvents.actionQueued['v9010'],
}

export const pvfCheckStarted = {
	name: 'Paras.PvfCheckStarted',
	v9160Kusama: kusamaEvents.pvfCheckStarted['v9160'],
}

export const pvfCheckAccepted = {
	name: 'Paras.PvfCheckAccepted',
	v9160Kusama: kusamaEvents.pvfCheckAccepted['v9160'],
}

export const pvfCheckRejected = {
	name: 'Paras.PvfCheckRejected',
	v9160Kusama: kusamaEvents.pvfCheckRejected['v9160'],
}
