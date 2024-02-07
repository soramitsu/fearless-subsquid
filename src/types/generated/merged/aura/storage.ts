import * as soraPolkadotStorage from '../../sora-polkadot/aura/storage'
import * as soraKusamaStorage from '../../sora-kusama/aura/storage'


export const authorities = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.authorities['v1'],
	v1SoraKusama: soraKusamaStorage.authorities['v1'],
}

export const currentSlot = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.currentSlot['v1'],
	v1SoraKusama: soraKusamaStorage.currentSlot['v1'],
}
