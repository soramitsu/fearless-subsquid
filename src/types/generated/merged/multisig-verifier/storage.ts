import * as soraPolkadotStorage from '../../sora-polkadot/multisig-verifier/storage'
import * as soraKusamaStorage from '../../sora-kusama/multisig-verifier/storage'


export const peerKeys = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.peerKeys['v10'],
	soraKusamaV7: soraKusamaStorage.peerKeys['v7'],
}
