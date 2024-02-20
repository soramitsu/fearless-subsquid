import * as soraPolkadotStorage from '../../sora-polkadot/sudo/storage'
import * as soraKusamaStorage from '../../sora-kusama/sudo/storage'


export const key = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.key['v1'],
	v1SoraKusama: soraKusamaStorage.key['v1'],
	v7SoraKusama: soraKusamaStorage.key['v7'],
}
