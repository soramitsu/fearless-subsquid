import * as soraPolkadotStorage from '../../sora-polkadot/multisig-verifier/storage'
import * as soraKusamaStorage from '../../sora-kusama/multisig-verifier/storage'


export const peerKeys = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.peerKeys['v10'],
	v7SoraKusama: soraKusamaStorage.peerKeys['v7'],
}
