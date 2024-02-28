import * as polkadotCalls from '../../polkadot/crowdloan/calls'


export const create = {
	name: 'Crowdloan.create',
	v9110Polkadot: polkadotCalls.create['v9110'],
}

export const contribute = {
	name: 'Crowdloan.contribute',
	v9110Polkadot: polkadotCalls.contribute['v9110'],
}

export const withdraw = {
	name: 'Crowdloan.withdraw',
	v9110Polkadot: polkadotCalls.withdraw['v9110'],
}

export const refund = {
	name: 'Crowdloan.refund',
	v9110Polkadot: polkadotCalls.refund['v9110'],
}

export const dissolve = {
	name: 'Crowdloan.dissolve',
	v9110Polkadot: polkadotCalls.dissolve['v9110'],
}

export const edit = {
	name: 'Crowdloan.edit',
	v9110Polkadot: polkadotCalls.edit['v9110'],
}

export const addMemo = {
	name: 'Crowdloan.add_memo',
	v9110Polkadot: polkadotCalls.addMemo['v9110'],
}

export const poke = {
	name: 'Crowdloan.poke',
	v9110Polkadot: polkadotCalls.poke['v9110'],
}

export const contributeAll = {
	name: 'Crowdloan.contribute_all',
	v9170Polkadot: polkadotCalls.contributeAll['v9170'],
}
