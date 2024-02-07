import * as soraPolkadotEvents from '../../sora-polkadot/utility/events'
import * as soraKusamaEvents from '../../sora-kusama/utility/events'


export const batchInterrupted = {
	name: 'Utility.BatchInterrupted',
	v10SoraPolkadot: soraPolkadotEvents.batchInterrupted['v10'],
	v9SoraKusama: soraKusamaEvents.batchInterrupted['v9'],
}

export const batchCompleted = {
	name: 'Utility.BatchCompleted',
	v10SoraPolkadot: soraPolkadotEvents.batchCompleted['v10'],
	v9SoraKusama: soraKusamaEvents.batchCompleted['v9'],
}

export const batchCompletedWithErrors = {
	name: 'Utility.BatchCompletedWithErrors',
	v10SoraPolkadot: soraPolkadotEvents.batchCompletedWithErrors['v10'],
	v9SoraKusama: soraKusamaEvents.batchCompletedWithErrors['v9'],
}

export const itemCompleted = {
	name: 'Utility.ItemCompleted',
	v10SoraPolkadot: soraPolkadotEvents.itemCompleted['v10'],
	v9SoraKusama: soraKusamaEvents.itemCompleted['v9'],
}

export const itemFailed = {
	name: 'Utility.ItemFailed',
	v10SoraPolkadot: soraPolkadotEvents.itemFailed['v10'],
	v9SoraKusama: soraKusamaEvents.itemFailed['v9'],
}

export const dispatchedAs = {
	name: 'Utility.DispatchedAs',
	v10SoraPolkadot: soraPolkadotEvents.dispatchedAs['v10'],
	v9SoraKusama: soraKusamaEvents.dispatchedAs['v9'],
}
