import * as soraPolkadotCalls from '../../sora-polkadot/utility/calls'
import * as soraKusamaCalls from '../../sora-kusama/utility/calls'


export const batch = {
	name: 'Utility.batch',
	v10SoraPolkadot: soraPolkadotCalls.batch['v10'],
	v9SoraKusama: soraKusamaCalls.batch['v9'],
}

export const asDerivative = {
	name: 'Utility.as_derivative',
	v10SoraPolkadot: soraPolkadotCalls.asDerivative['v10'],
	v9SoraKusama: soraKusamaCalls.asDerivative['v9'],
}

export const batchAll = {
	name: 'Utility.batch_all',
	v10SoraPolkadot: soraPolkadotCalls.batchAll['v10'],
	v9SoraKusama: soraKusamaCalls.batchAll['v9'],
}

export const dispatchAs = {
	name: 'Utility.dispatch_as',
	v10SoraPolkadot: soraPolkadotCalls.dispatchAs['v10'],
	v9SoraKusama: soraKusamaCalls.dispatchAs['v9'],
}

export const forceBatch = {
	name: 'Utility.force_batch',
	v10SoraPolkadot: soraPolkadotCalls.forceBatch['v10'],
	v9SoraKusama: soraKusamaCalls.forceBatch['v9'],
}

export const withWeight = {
	name: 'Utility.with_weight',
	v10SoraPolkadot: soraPolkadotCalls.withWeight['v10'],
	v9SoraKusama: soraKusamaCalls.withWeight['v9'],
}
