import * as polkadotEvents from '../../polkadot/multisig/events'


export const newMultisig = {
	name: 'Multisig.NewMultisig',
	v5Polkadot: polkadotEvents.newMultisig['v5'],
	v9140Polkadot: polkadotEvents.newMultisig['v9140'],
}

export const multisigApproval = {
	name: 'Multisig.MultisigApproval',
	v5Polkadot: polkadotEvents.multisigApproval['v5'],
	v9140Polkadot: polkadotEvents.multisigApproval['v9140'],
}

export const multisigExecuted = {
	name: 'Multisig.MultisigExecuted',
	v5Polkadot: polkadotEvents.multisigExecuted['v5'],
	v9110Polkadot: polkadotEvents.multisigExecuted['v9110'],
	v9140Polkadot: polkadotEvents.multisigExecuted['v9140'],
	v9170Polkadot: polkadotEvents.multisigExecuted['v9170'],
	v9190Polkadot: polkadotEvents.multisigExecuted['v9190'],
	v9340Polkadot: polkadotEvents.multisigExecuted['v9340'],
	v9420Polkadot: polkadotEvents.multisigExecuted['v9420'],
	v9430Polkadot: polkadotEvents.multisigExecuted['v9430'],
}

export const multisigCancelled = {
	name: 'Multisig.MultisigCancelled',
	v5Polkadot: polkadotEvents.multisigCancelled['v5'],
	v9140Polkadot: polkadotEvents.multisigCancelled['v9140'],
}

export const uncallable = {
	name: 'Multisig.Uncallable',
	v5Polkadot: polkadotEvents.uncallable['v5'],
}
