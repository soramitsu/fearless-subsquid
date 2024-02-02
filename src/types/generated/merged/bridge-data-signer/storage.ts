import * as soraPolkadotStorage from '../../sora-polkadot/bridge-data-signer/storage'
import * as soraKusamaStorage from '../../sora-kusama/bridge-data-signer/storage'


export const peers = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.peers['v10'],
	soraKusamaV7: soraKusamaStorage.peers['v7'],
}

export const pendingPeerUpdate = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.pendingPeerUpdate['v10'],
	soraKusamaV7: soraKusamaStorage.pendingPeerUpdate['v7'],
}

export const approvals = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.approvals['v10'],
	soraKusamaV7: soraKusamaStorage.approvals['v7'],
}
