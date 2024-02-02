import * as soraPolkadotCalls from '../../sora-polkadot/utility/calls'
import * as soraKusamaCalls from '../../sora-kusama/utility/calls'


export const batch = {
	name: 'Utility.batch',
	soraPolkadotV10: soraPolkadotCalls.batch['v10'],
	soraKusamaV9: soraKusamaCalls.batch['v9'],
}

export const asDerivative = {
	name: 'Utility.as_derivative',
	soraPolkadotV10: soraPolkadotCalls.asDerivative['v10'],
	soraKusamaV9: soraKusamaCalls.asDerivative['v9'],
}

export const batchAll = {
	name: 'Utility.batch_all',
	soraPolkadotV10: soraPolkadotCalls.batchAll['v10'],
	soraKusamaV9: soraKusamaCalls.batchAll['v9'],
}

export const dispatchAs = {
	name: 'Utility.dispatch_as',
	soraPolkadotV10: soraPolkadotCalls.dispatchAs['v10'],
	soraKusamaV9: soraKusamaCalls.dispatchAs['v9'],
}

export const forceBatch = {
	name: 'Utility.force_batch',
	soraPolkadotV10: soraPolkadotCalls.forceBatch['v10'],
	soraKusamaV9: soraKusamaCalls.forceBatch['v9'],
}

export const withWeight = {
	name: 'Utility.with_weight',
	soraPolkadotV10: soraPolkadotCalls.withWeight['v10'],
	soraKusamaV9: soraKusamaCalls.withWeight['v9'],
}
