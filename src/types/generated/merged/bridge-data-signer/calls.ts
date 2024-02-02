import * as soraPolkadotCalls from '../../sora-polkadot/bridge-data-signer/calls'
import * as soraKusamaCalls from '../../sora-kusama/bridge-data-signer/calls'


export const registerNetwork = {
	name: 'BridgeDataSigner.register_network',
	soraPolkadotV10: soraPolkadotCalls.registerNetwork['v10'],
	soraKusamaV7: soraKusamaCalls.registerNetwork['v7'],
}

export const approve = {
	name: 'BridgeDataSigner.approve',
	soraPolkadotV10: soraPolkadotCalls.approve['v10'],
	soraKusamaV7: soraKusamaCalls.approve['v7'],
}

export const addPeer = {
	name: 'BridgeDataSigner.add_peer',
	soraPolkadotV10: soraPolkadotCalls.addPeer['v10'],
	soraKusamaV7: soraKusamaCalls.addPeer['v7'],
}

export const removePeer = {
	name: 'BridgeDataSigner.remove_peer',
	soraPolkadotV10: soraPolkadotCalls.removePeer['v10'],
	soraKusamaV7: soraKusamaCalls.removePeer['v7'],
}

export const finishRemovePeer = {
	name: 'BridgeDataSigner.finish_remove_peer',
	soraPolkadotV10: soraPolkadotCalls.finishRemovePeer['v10'],
	soraKusamaV7: soraKusamaCalls.finishRemovePeer['v7'],
}

export const finishAddPeer = {
	name: 'BridgeDataSigner.finish_add_peer',
	soraPolkadotV10: soraPolkadotCalls.finishAddPeer['v10'],
	soraKusamaV7: soraKusamaCalls.finishAddPeer['v7'],
}
