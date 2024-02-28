import * as polkadotEvents from '../../polkadot/asset-rate/events'


export const assetRateCreated = {
	name: 'AssetRate.AssetRateCreated',
	v1001002Polkadot: polkadotEvents.assetRateCreated['v1001002'],
}

export const assetRateRemoved = {
	name: 'AssetRate.AssetRateRemoved',
	v1001002Polkadot: polkadotEvents.assetRateRemoved['v1001002'],
}

export const assetRateUpdated = {
	name: 'AssetRate.AssetRateUpdated',
	v1001002Polkadot: polkadotEvents.assetRateUpdated['v1001002'],
}
