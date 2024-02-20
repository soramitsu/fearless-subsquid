import * as soraPolkadotStorage from '../../sora-polkadot/bridge-data-signer/storage'
import * as soraKusamaStorage from '../../sora-kusama/bridge-data-signer/storage'


export const peers = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.peers['v10'],
	v7SoraKusama: soraKusamaStorage.peers['v7'],
}

export const pendingPeerUpdate = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.pendingPeerUpdate['v10'],
	v7SoraKusama: soraKusamaStorage.pendingPeerUpdate['v7'],
}

export const approvals = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.approvals['v10'],
	v7SoraKusama: soraKusamaStorage.approvals['v7'],
}
