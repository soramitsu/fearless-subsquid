import * as polkadotEvents from '../../polkadot/paras/events'


export const currentCodeUpdated = {
	name: 'Paras.CurrentCodeUpdated',
	v9110Polkadot: polkadotEvents.currentCodeUpdated['v9110'],
}

export const currentHeadUpdated = {
	name: 'Paras.CurrentHeadUpdated',
	v9110Polkadot: polkadotEvents.currentHeadUpdated['v9110'],
}

export const codeUpgradeScheduled = {
	name: 'Paras.CodeUpgradeScheduled',
	v9110Polkadot: polkadotEvents.codeUpgradeScheduled['v9110'],
}

export const newHeadNoted = {
	name: 'Paras.NewHeadNoted',
	v9110Polkadot: polkadotEvents.newHeadNoted['v9110'],
}

export const actionQueued = {
	name: 'Paras.ActionQueued',
	v9110Polkadot: polkadotEvents.actionQueued['v9110'],
}

export const pvfCheckStarted = {
	name: 'Paras.PvfCheckStarted',
	v9170Polkadot: polkadotEvents.pvfCheckStarted['v9170'],
}

export const pvfCheckAccepted = {
	name: 'Paras.PvfCheckAccepted',
	v9170Polkadot: polkadotEvents.pvfCheckAccepted['v9170'],
}

export const pvfCheckRejected = {
	name: 'Paras.PvfCheckRejected',
	v9170Polkadot: polkadotEvents.pvfCheckRejected['v9170'],
}
