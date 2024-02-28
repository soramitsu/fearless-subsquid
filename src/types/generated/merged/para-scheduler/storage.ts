import * as polkadotStorage from '../../polkadot/para-scheduler/storage'


export const validatorGroups = {
	name: '',
	v9110Polkadot: polkadotStorage.validatorGroups['v9110'],
}

export const parathreadQueue = {
	name: '',
	v9110Polkadot: polkadotStorage.parathreadQueue['v9110'],
}

export const availabilityCores = {
	name: '',
	v9110Polkadot: polkadotStorage.availabilityCores['v9110'],
	v1000001Polkadot: polkadotStorage.availabilityCores['v1000001'],
}

export const parathreadClaimIndex = {
	name: '',
	v9110Polkadot: polkadotStorage.parathreadClaimIndex['v9110'],
}

export const sessionStartBlock = {
	name: '',
	v9110Polkadot: polkadotStorage.sessionStartBlock['v9110'],
}

export const scheduled = {
	name: '',
	v9110Polkadot: polkadotStorage.scheduled['v9110'],
}

export const claimQueue = {
	name: '',
	v1000001Polkadot: polkadotStorage.claimQueue['v1000001'],
}
