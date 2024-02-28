import * as polkadotEvents from '../../polkadot/utility/events'


export const batchInterrupted = {
	name: 'Utility.BatchInterrupted',
	v0Polkadot: polkadotEvents.batchInterrupted['v0'],
	v9110Polkadot: polkadotEvents.batchInterrupted['v9110'],
	v9140Polkadot: polkadotEvents.batchInterrupted['v9140'],
	v9170Polkadot: polkadotEvents.batchInterrupted['v9170'],
	v9190Polkadot: polkadotEvents.batchInterrupted['v9190'],
	v9340Polkadot: polkadotEvents.batchInterrupted['v9340'],
	v9420Polkadot: polkadotEvents.batchInterrupted['v9420'],
	v9430Polkadot: polkadotEvents.batchInterrupted['v9430'],
}

export const batchCompleted = {
	name: 'Utility.BatchCompleted',
	v0Polkadot: polkadotEvents.batchCompleted['v0'],
}

export const newMultisig = {
	name: 'Utility.NewMultisig',
	v0Polkadot: polkadotEvents.newMultisig['v0'],
}

export const multisigApproval = {
	name: 'Utility.MultisigApproval',
	v0Polkadot: polkadotEvents.multisigApproval['v0'],
}

export const multisigExecuted = {
	name: 'Utility.MultisigExecuted',
	v0Polkadot: polkadotEvents.multisigExecuted['v0'],
}

export const multisigCancelled = {
	name: 'Utility.MultisigCancelled',
	v0Polkadot: polkadotEvents.multisigCancelled['v0'],
}

export const uncallable = {
	name: 'Utility.Uncallable',
	v0Polkadot: polkadotEvents.uncallable['v0'],
}

export const itemCompleted = {
	name: 'Utility.ItemCompleted',
	v9090Polkadot: polkadotEvents.itemCompleted['v9090'],
}

export const dispatchedAs = {
	name: 'Utility.DispatchedAs',
	v9140Polkadot: polkadotEvents.dispatchedAs['v9140'],
	v9170Polkadot: polkadotEvents.dispatchedAs['v9170'],
	v9190Polkadot: polkadotEvents.dispatchedAs['v9190'],
	v9340Polkadot: polkadotEvents.dispatchedAs['v9340'],
	v9420Polkadot: polkadotEvents.dispatchedAs['v9420'],
	v9430Polkadot: polkadotEvents.dispatchedAs['v9430'],
}

export const batchCompletedWithErrors = {
	name: 'Utility.BatchCompletedWithErrors',
	v9220Polkadot: polkadotEvents.batchCompletedWithErrors['v9220'],
}

export const itemFailed = {
	name: 'Utility.ItemFailed',
	v9220Polkadot: polkadotEvents.itemFailed['v9220'],
	v9340Polkadot: polkadotEvents.itemFailed['v9340'],
	v9420Polkadot: polkadotEvents.itemFailed['v9420'],
	v9430Polkadot: polkadotEvents.itemFailed['v9430'],
}
