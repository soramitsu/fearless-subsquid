import * as kusamaEvents from '../../kusama/asset-rate/events'


export const assetRateCreated = {
	name: 'AssetRate.AssetRateCreated',
	v1001000Kusama: kusamaEvents.assetRateCreated['v1001000'],
}

export const assetRateRemoved = {
	name: 'AssetRate.AssetRateRemoved',
	v1001000Kusama: kusamaEvents.assetRateRemoved['v1001000'],
}

export const assetRateUpdated = {
	name: 'AssetRate.AssetRateUpdated',
	v1001000Kusama: kusamaEvents.assetRateUpdated['v1001000'],
}
