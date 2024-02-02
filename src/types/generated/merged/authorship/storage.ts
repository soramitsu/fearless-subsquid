import * as soraPolkadotStorage from '../../sora-polkadot/authorship/storage'
import * as soraKusamaStorage from '../../sora-kusama/authorship/storage'


export const uncles = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.uncles['v1'],
	soraKusamaV1: soraKusamaStorage.uncles['v1'],
}

export const author = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.author['v1'],
	soraKusamaV1: soraKusamaStorage.author['v1'],
}

export const didSetUncles = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.didSetUncles['v1'],
	soraKusamaV1: soraKusamaStorage.didSetUncles['v1'],
}
