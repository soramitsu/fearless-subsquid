import * as soraPolkadotStorage from '../../sora-polkadot/sudo/storage'
import * as soraKusamaStorage from '../../sora-kusama/sudo/storage'


export const key = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.key['v1'],
	soraKusamaV1: soraKusamaStorage.key['v1'],
	soraKusamaV7: soraKusamaStorage.key['v7'],
}
