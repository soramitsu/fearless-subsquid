import * as soraPolkadotStorage from '../../sora-polkadot/dmp-queue/storage'
import * as soraKusamaStorage from '../../sora-kusama/dmp-queue/storage'


export const configuration = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.configuration['v1'],
	soraKusamaV1: soraKusamaStorage.configuration['v1'],
	soraKusamaV7: soraKusamaStorage.configuration['v7'],
}

export const pageIndex = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.pageIndex['v1'],
	soraKusamaV1: soraKusamaStorage.pageIndex['v1'],
}

export const pages = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.pages['v1'],
	soraKusamaV1: soraKusamaStorage.pages['v1'],
}

export const overweight = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.overweight['v1'],
	soraKusamaV1: soraKusamaStorage.overweight['v1'],
}

export const counterForOverweight = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.counterForOverweight['v10'],
	soraKusamaV7: soraKusamaStorage.counterForOverweight['v7'],
}
