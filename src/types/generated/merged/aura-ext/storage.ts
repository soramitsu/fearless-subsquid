import * as soraPolkadotStorage from '../../sora-polkadot/aura-ext/storage'
import * as soraKusamaStorage from '../../sora-kusama/aura-ext/storage'


export const authorities = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.authorities['v1'],
	v1SoraKusama: soraKusamaStorage.authorities['v1'],
}
