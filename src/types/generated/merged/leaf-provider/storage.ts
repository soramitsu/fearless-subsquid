import * as soraPolkadotStorage from '../../sora-polkadot/leaf-provider/storage'
import * as soraKusamaStorage from '../../sora-kusama/leaf-provider/storage'


export const latestDigest = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.latestDigest['v1'],
	v10SoraPolkadot: soraPolkadotStorage.latestDigest['v10'],
	v7SoraKusama: soraKusamaStorage.latestDigest['v7'],
}
