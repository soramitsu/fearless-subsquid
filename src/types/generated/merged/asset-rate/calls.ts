import * as polkadotCalls from '../../polkadot/asset-rate/calls'


export const create = {
	name: 'AssetRate.create',
	v1001002Polkadot: polkadotCalls.create['v1001002'],
}

export const update = {
	name: 'AssetRate.update',
	v1001002Polkadot: polkadotCalls.update['v1001002'],
}

export const remove = {
	name: 'AssetRate.remove',
	v1001002Polkadot: polkadotCalls.remove['v1001002'],
}
