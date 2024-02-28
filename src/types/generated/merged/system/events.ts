import * as polkadotEvents from '../../polkadot/system/events'


export const extrinsicSuccess = {
	name: 'System.ExtrinsicSuccess',
	v0Polkadot: polkadotEvents.extrinsicSuccess['v0'],
	v9170Polkadot: polkadotEvents.extrinsicSuccess['v9170'],
	v9291Polkadot: polkadotEvents.extrinsicSuccess['v9291'],
	v9340Polkadot: polkadotEvents.extrinsicSuccess['v9340'],
}

export const extrinsicFailed = {
	name: 'System.ExtrinsicFailed',
	v0Polkadot: polkadotEvents.extrinsicFailed['v0'],
	v9110Polkadot: polkadotEvents.extrinsicFailed['v9110'],
	v9170Polkadot: polkadotEvents.extrinsicFailed['v9170'],
	v9190Polkadot: polkadotEvents.extrinsicFailed['v9190'],
	v9291Polkadot: polkadotEvents.extrinsicFailed['v9291'],
	v9340Polkadot: polkadotEvents.extrinsicFailed['v9340'],
	v9420Polkadot: polkadotEvents.extrinsicFailed['v9420'],
	v9430Polkadot: polkadotEvents.extrinsicFailed['v9430'],
}

export const codeUpdated = {
	name: 'System.CodeUpdated',
	v0Polkadot: polkadotEvents.codeUpdated['v0'],
}

export const newAccount = {
	name: 'System.NewAccount',
	v0Polkadot: polkadotEvents.newAccount['v0'],
	v9170Polkadot: polkadotEvents.newAccount['v9170'],
}

export const killedAccount = {
	name: 'System.KilledAccount',
	v0Polkadot: polkadotEvents.killedAccount['v0'],
	v9170Polkadot: polkadotEvents.killedAccount['v9170'],
}

export const remarked = {
	name: 'System.Remarked',
	v30Polkadot: polkadotEvents.remarked['v30'],
	v9170Polkadot: polkadotEvents.remarked['v9170'],
}
