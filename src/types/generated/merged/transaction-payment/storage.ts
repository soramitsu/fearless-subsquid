import * as soraPolkadotStorage from '../../sora-polkadot/transaction-payment/storage'
import * as soraKusamaStorage from '../../sora-kusama/transaction-payment/storage'


export const nextFeeMultiplier = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.nextFeeMultiplier['v1'],
	soraKusamaV1: soraKusamaStorage.nextFeeMultiplier['v1'],
}

export const storageVersion = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.storageVersion['v1'],
	soraKusamaV1: soraKusamaStorage.storageVersion['v1'],
}
