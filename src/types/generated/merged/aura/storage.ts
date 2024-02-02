import * as soraPolkadotStorage from '../../sora-polkadot/aura/storage'
import * as soraKusamaStorage from '../../sora-kusama/aura/storage'


export const authorities = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.authorities['v1'],
	soraKusamaV1: soraKusamaStorage.authorities['v1'],
}

export const currentSlot = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.currentSlot['v1'],
	soraKusamaV1: soraKusamaStorage.currentSlot['v1'],
}
