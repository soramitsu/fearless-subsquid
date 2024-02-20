import * as soraPolkadotCalls from '../../sora-polkadot/bridge-data-signer/calls'
import * as soraKusamaCalls from '../../sora-kusama/bridge-data-signer/calls'


export const registerNetwork = {
	name: 'BridgeDataSigner.register_network',
	v10SoraPolkadot: soraPolkadotCalls.registerNetwork['v10'],
	v7SoraKusama: soraKusamaCalls.registerNetwork['v7'],
}

export const approve = {
	name: 'BridgeDataSigner.approve',
	v10SoraPolkadot: soraPolkadotCalls.approve['v10'],
	v7SoraKusama: soraKusamaCalls.approve['v7'],
}

export const addPeer = {
	name: 'BridgeDataSigner.add_peer',
	v10SoraPolkadot: soraPolkadotCalls.addPeer['v10'],
	v7SoraKusama: soraKusamaCalls.addPeer['v7'],
}

export const removePeer = {
	name: 'BridgeDataSigner.remove_peer',
	v10SoraPolkadot: soraPolkadotCalls.removePeer['v10'],
	v7SoraKusama: soraKusamaCalls.removePeer['v7'],
}

export const finishRemovePeer = {
	name: 'BridgeDataSigner.finish_remove_peer',
	v10SoraPolkadot: soraPolkadotCalls.finishRemovePeer['v10'],
	v7SoraKusama: soraKusamaCalls.finishRemovePeer['v7'],
}

export const finishAddPeer = {
	name: 'BridgeDataSigner.finish_add_peer',
	v10SoraPolkadot: soraPolkadotCalls.finishAddPeer['v10'],
	v7SoraKusama: soraKusamaCalls.finishAddPeer['v7'],
}
