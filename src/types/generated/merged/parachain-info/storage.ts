import * as soraPolkadotStorage from '../../sora-polkadot/parachain-info/storage'
import * as soraKusamaStorage from '../../sora-kusama/parachain-info/storage'


export const parachainId = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.parachainId['v1'],
	v1SoraKusama: soraKusamaStorage.parachainId['v1'],
}
