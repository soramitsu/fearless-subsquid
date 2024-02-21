import * as kusamaEvents from '../../kusama/utility/events'


export const batchInterrupted = {
	name: 'Utility.BatchInterrupted',
	v1032Kusama: kusamaEvents.batchInterrupted['v1032'],
	v9111Kusama: kusamaEvents.batchInterrupted['v9111'],
	v9130Kusama: kusamaEvents.batchInterrupted['v9130'],
	v9160Kusama: kusamaEvents.batchInterrupted['v9160'],
	v9170Kusama: kusamaEvents.batchInterrupted['v9170'],
	v9190Kusama: kusamaEvents.batchInterrupted['v9190'],
	v9320Kusama: kusamaEvents.batchInterrupted['v9320'],
	v9420Kusama: kusamaEvents.batchInterrupted['v9420'],
	v9430Kusama: kusamaEvents.batchInterrupted['v9430'],
}

export const batchCompleted = {
	name: 'Utility.BatchCompleted',
	v1032Kusama: kusamaEvents.batchCompleted['v1032'],
}

export const newMultisig = {
	name: 'Utility.NewMultisig',
	v1032Kusama: kusamaEvents.newMultisig['v1032'],
	v1058Kusama: kusamaEvents.newMultisig['v1058'],
}

export const multisigApproval = {
	name: 'Utility.MultisigApproval',
	v1032Kusama: kusamaEvents.multisigApproval['v1032'],
	v1058Kusama: kusamaEvents.multisigApproval['v1058'],
}

export const multisigExecuted = {
	name: 'Utility.MultisigExecuted',
	v1032Kusama: kusamaEvents.multisigExecuted['v1032'],
	v1058Kusama: kusamaEvents.multisigExecuted['v1058'],
}

export const multisigCancelled = {
	name: 'Utility.MultisigCancelled',
	v1032Kusama: kusamaEvents.multisigCancelled['v1032'],
	v1058Kusama: kusamaEvents.multisigCancelled['v1058'],
}

export const uncallable = {
	name: 'Utility.Uncallable',
	v2005Kusama: kusamaEvents.uncallable['v2005'],
}

export const itemCompleted = {
	name: 'Utility.ItemCompleted',
	v9090Kusama: kusamaEvents.itemCompleted['v9090'],
}

export const dispatchedAs = {
	name: 'Utility.DispatchedAs',
	v9130Kusama: kusamaEvents.dispatchedAs['v9130'],
	v9160Kusama: kusamaEvents.dispatchedAs['v9160'],
	v9170Kusama: kusamaEvents.dispatchedAs['v9170'],
	v9190Kusama: kusamaEvents.dispatchedAs['v9190'],
	v9320Kusama: kusamaEvents.dispatchedAs['v9320'],
	v9420Kusama: kusamaEvents.dispatchedAs['v9420'],
	v9430Kusama: kusamaEvents.dispatchedAs['v9430'],
}

export const batchCompletedWithErrors = {
	name: 'Utility.BatchCompletedWithErrors',
	v9220Kusama: kusamaEvents.batchCompletedWithErrors['v9220'],
}

export const itemFailed = {
	name: 'Utility.ItemFailed',
	v9220Kusama: kusamaEvents.itemFailed['v9220'],
	v9320Kusama: kusamaEvents.itemFailed['v9320'],
	v9420Kusama: kusamaEvents.itemFailed['v9420'],
	v9430Kusama: kusamaEvents.itemFailed['v9430'],
}
