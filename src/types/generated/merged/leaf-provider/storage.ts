import * as soraPolkadotStorage from '../../sora-polkadot/leaf-provider/storage'
import * as soraKusamaStorage from '../../sora-kusama/leaf-provider/storage'


export const latestDigest = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.latestDigest['v1'],
	soraPolkadotV10: soraPolkadotStorage.latestDigest['v10'],
	soraKusamaV7: soraKusamaStorage.latestDigest['v7'],
}
