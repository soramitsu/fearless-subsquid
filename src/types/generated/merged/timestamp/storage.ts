import * as soraPolkadotStorage from '../../sora-polkadot/timestamp/storage'
import * as soraKusamaStorage from '../../sora-kusama/timestamp/storage'


export const now = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.now['v1'],
	soraKusamaV1: soraKusamaStorage.now['v1'],
}

export const didUpdate = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.didUpdate['v1'],
	soraKusamaV1: soraKusamaStorage.didUpdate['v1'],
}
