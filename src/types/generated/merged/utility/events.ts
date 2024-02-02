import * as soraPolkadotEvents from '../../sora-polkadot/utility/events'
import * as soraKusamaEvents from '../../sora-kusama/utility/events'


export const batchInterrupted = {
	name: 'Utility.BatchInterrupted',
	soraPolkadotV10: soraPolkadotEvents.batchInterrupted['v10'],
	soraKusamaV9: soraKusamaEvents.batchInterrupted['v9'],
}

export const batchCompleted = {
	name: 'Utility.BatchCompleted',
	soraPolkadotV10: soraPolkadotEvents.batchCompleted['v10'],
	soraKusamaV9: soraKusamaEvents.batchCompleted['v9'],
}

export const batchCompletedWithErrors = {
	name: 'Utility.BatchCompletedWithErrors',
	soraPolkadotV10: soraPolkadotEvents.batchCompletedWithErrors['v10'],
	soraKusamaV9: soraKusamaEvents.batchCompletedWithErrors['v9'],
}

export const itemCompleted = {
	name: 'Utility.ItemCompleted',
	soraPolkadotV10: soraPolkadotEvents.itemCompleted['v10'],
	soraKusamaV9: soraKusamaEvents.itemCompleted['v9'],
}

export const itemFailed = {
	name: 'Utility.ItemFailed',
	soraPolkadotV10: soraPolkadotEvents.itemFailed['v10'],
	soraKusamaV9: soraKusamaEvents.itemFailed['v9'],
}

export const dispatchedAs = {
	name: 'Utility.DispatchedAs',
	soraPolkadotV10: soraPolkadotEvents.dispatchedAs['v10'],
	soraKusamaV9: soraKusamaEvents.dispatchedAs['v9'],
}
