import * as kusamaEvents from '../../kusama/recovery/events'


export const recoveryCreated = {
	name: 'Recovery.RecoveryCreated',
	v1040Kusama: kusamaEvents.recoveryCreated['v1040'],
	v9130Kusama: kusamaEvents.recoveryCreated['v9130'],
}

export const recoveryInitiated = {
	name: 'Recovery.RecoveryInitiated',
	v1040Kusama: kusamaEvents.recoveryInitiated['v1040'],
	v9130Kusama: kusamaEvents.recoveryInitiated['v9130'],
}

export const recoveryVouched = {
	name: 'Recovery.RecoveryVouched',
	v1040Kusama: kusamaEvents.recoveryVouched['v1040'],
	v9130Kusama: kusamaEvents.recoveryVouched['v9130'],
}

export const recoveryClosed = {
	name: 'Recovery.RecoveryClosed',
	v1040Kusama: kusamaEvents.recoveryClosed['v1040'],
	v9130Kusama: kusamaEvents.recoveryClosed['v9130'],
}

export const accountRecovered = {
	name: 'Recovery.AccountRecovered',
	v1040Kusama: kusamaEvents.accountRecovered['v1040'],
	v9130Kusama: kusamaEvents.accountRecovered['v9130'],
}

export const recoveryRemoved = {
	name: 'Recovery.RecoveryRemoved',
	v1040Kusama: kusamaEvents.recoveryRemoved['v1040'],
	v9130Kusama: kusamaEvents.recoveryRemoved['v9130'],
}
