import * as kusamaCalls from '../../kusama/crowdloan/calls'


export const create = {
	name: 'Crowdloan.create',
	v9010Kusama: kusamaCalls.create['v9010'],
}

export const contribute = {
	name: 'Crowdloan.contribute',
	v9010Kusama: kusamaCalls.contribute['v9010'],
}

export const withdraw = {
	name: 'Crowdloan.withdraw',
	v9010Kusama: kusamaCalls.withdraw['v9010'],
}

export const refund = {
	name: 'Crowdloan.refund',
	v9010Kusama: kusamaCalls.refund['v9010'],
}

export const dissolve = {
	name: 'Crowdloan.dissolve',
	v9010Kusama: kusamaCalls.dissolve['v9010'],
}

export const edit = {
	name: 'Crowdloan.edit',
	v9010Kusama: kusamaCalls.edit['v9010'],
}

export const addMemo = {
	name: 'Crowdloan.add_memo',
	v9010Kusama: kusamaCalls.addMemo['v9010'],
}

export const poke = {
	name: 'Crowdloan.poke',
	v9010Kusama: kusamaCalls.poke['v9010'],
}

export const contributeAll = {
	name: 'Crowdloan.contribute_all',
	v9160Kusama: kusamaCalls.contributeAll['v9160'],
}
