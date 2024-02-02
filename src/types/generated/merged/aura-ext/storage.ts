import * as soraPolkadotStorage from '../../sora-polkadot/aura-ext/storage'
import * as soraKusamaStorage from '../../sora-kusama/aura-ext/storage'


export const authorities = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.authorities['v1'],
	soraKusamaV1: soraKusamaStorage.authorities['v1'],
}
