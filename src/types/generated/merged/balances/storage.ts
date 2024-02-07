import * as soraPolkadotStorage from '../../sora-polkadot/balances/storage'
import * as soraKusamaStorage from '../../sora-kusama/balances/storage'


export const totalIssuance = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.totalIssuance['v1'],
	v1SoraKusama: soraKusamaStorage.totalIssuance['v1'],
}

export const account = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.account['v1'],
	v1SoraKusama: soraKusamaStorage.account['v1'],
}

export const locks = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.locks['v1'],
	v1SoraKusama: soraKusamaStorage.locks['v1'],
}

export const reserves = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.reserves['v1'],
	v1SoraKusama: soraKusamaStorage.reserves['v1'],
}

export const storageVersion = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.storageVersion['v1'],
	v1SoraKusama: soraKusamaStorage.storageVersion['v1'],
}

export const inactiveIssuance = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.inactiveIssuance['v10'],
	v7SoraKusama: soraKusamaStorage.inactiveIssuance['v7'],
}
