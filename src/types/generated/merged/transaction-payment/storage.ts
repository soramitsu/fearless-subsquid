import * as soraPolkadotStorage from '../../sora-polkadot/transaction-payment/storage'
import * as soraKusamaStorage from '../../sora-kusama/transaction-payment/storage'


export const nextFeeMultiplier = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.nextFeeMultiplier['v1'],
	v1SoraKusama: soraKusamaStorage.nextFeeMultiplier['v1'],
}

export const storageVersion = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.storageVersion['v1'],
	v1SoraKusama: soraKusamaStorage.storageVersion['v1'],
}
