import * as soraPolkadotStorage from '../../sora-polkadot/timestamp/storage'
import * as soraKusamaStorage from '../../sora-kusama/timestamp/storage'


export const now = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.now['v1'],
	v1SoraKusama: soraKusamaStorage.now['v1'],
}

export const didUpdate = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.didUpdate['v1'],
	v1SoraKusama: soraKusamaStorage.didUpdate['v1'],
}
