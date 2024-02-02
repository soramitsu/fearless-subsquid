import * as soraPolkadotStorage from '../../sora-polkadot/balances/storage'
import * as soraKusamaStorage from '../../sora-kusama/balances/storage'


export const totalIssuance = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.totalIssuance['v1'],
	soraKusamaV1: soraKusamaStorage.totalIssuance['v1'],
}

export const account = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.account['v1'],
	soraKusamaV1: soraKusamaStorage.account['v1'],
}

export const locks = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.locks['v1'],
	soraKusamaV1: soraKusamaStorage.locks['v1'],
}

export const reserves = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.reserves['v1'],
	soraKusamaV1: soraKusamaStorage.reserves['v1'],
}

export const storageVersion = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.storageVersion['v1'],
	soraKusamaV1: soraKusamaStorage.storageVersion['v1'],
}

export const inactiveIssuance = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.inactiveIssuance['v10'],
	soraKusamaV7: soraKusamaStorage.inactiveIssuance['v7'],
}
