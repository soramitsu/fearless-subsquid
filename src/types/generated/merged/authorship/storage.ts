import * as soraPolkadotStorage from '../../sora-polkadot/authorship/storage'
import * as soraKusamaStorage from '../../sora-kusama/authorship/storage'


export const uncles = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.uncles['v1'],
	v1SoraKusama: soraKusamaStorage.uncles['v1'],
}

export const author = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.author['v1'],
	v1SoraKusama: soraKusamaStorage.author['v1'],
}

export const didSetUncles = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.didSetUncles['v1'],
	v1SoraKusama: soraKusamaStorage.didSetUncles['v1'],
}
