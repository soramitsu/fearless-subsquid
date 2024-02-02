import * as soraPolkadotStorage from '../../sora-polkadot/parachain-info/storage'
import * as soraKusamaStorage from '../../sora-kusama/parachain-info/storage'


export const parachainId = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.parachainId['v1'],
	soraKusamaV1: soraKusamaStorage.parachainId['v1'],
}
