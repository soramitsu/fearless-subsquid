import * as soraPolkadotStorage from '../../sora-polkadot/dmp-queue/storage'
import * as soraKusamaStorage from '../../sora-kusama/dmp-queue/storage'


export const configuration = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.configuration['v1'],
	v1SoraKusama: soraKusamaStorage.configuration['v1'],
	v7SoraKusama: soraKusamaStorage.configuration['v7'],
}

export const pageIndex = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.pageIndex['v1'],
	v1SoraKusama: soraKusamaStorage.pageIndex['v1'],
}

export const pages = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.pages['v1'],
	v1SoraKusama: soraKusamaStorage.pages['v1'],
}

export const overweight = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.overweight['v1'],
	v1SoraKusama: soraKusamaStorage.overweight['v1'],
}

export const counterForOverweight = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.counterForOverweight['v10'],
	v7SoraKusama: soraKusamaStorage.counterForOverweight['v7'],
}
