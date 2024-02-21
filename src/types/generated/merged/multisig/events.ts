import * as kusamaEvents from '../../kusama/multisig/events'


export const newMultisig = {
	name: 'Multisig.NewMultisig',
	v2005Kusama: kusamaEvents.newMultisig['v2005'],
	v9130Kusama: kusamaEvents.newMultisig['v9130'],
}

export const multisigApproval = {
	name: 'Multisig.MultisigApproval',
	v2005Kusama: kusamaEvents.multisigApproval['v2005'],
	v9130Kusama: kusamaEvents.multisigApproval['v9130'],
}

export const multisigExecuted = {
	name: 'Multisig.MultisigExecuted',
	v2005Kusama: kusamaEvents.multisigExecuted['v2005'],
	v9111Kusama: kusamaEvents.multisigExecuted['v9111'],
	v9130Kusama: kusamaEvents.multisigExecuted['v9130'],
	v9160Kusama: kusamaEvents.multisigExecuted['v9160'],
	v9170Kusama: kusamaEvents.multisigExecuted['v9170'],
	v9190Kusama: kusamaEvents.multisigExecuted['v9190'],
	v9320Kusama: kusamaEvents.multisigExecuted['v9320'],
	v9420Kusama: kusamaEvents.multisigExecuted['v9420'],
	v9430Kusama: kusamaEvents.multisigExecuted['v9430'],
}

export const multisigCancelled = {
	name: 'Multisig.MultisigCancelled',
	v2005Kusama: kusamaEvents.multisigCancelled['v2005'],
	v9130Kusama: kusamaEvents.multisigCancelled['v9130'],
}

export const uncallable = {
	name: 'Multisig.Uncallable',
	v2005Kusama: kusamaEvents.uncallable['v2005'],
}
