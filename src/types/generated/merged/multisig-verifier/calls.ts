import * as soraPolkadotCalls from '../../sora-polkadot/multisig-verifier/calls'
import * as soraKusamaCalls from '../../sora-kusama/multisig-verifier/calls'


export const initialize = {
	name: 'MultisigVerifier.initialize',
	v10SoraPolkadot: soraPolkadotCalls.initialize['v10'],
	v7SoraKusama: soraKusamaCalls.initialize['v7'],
}

export const addPeer = {
	name: 'MultisigVerifier.add_peer',
	v10SoraPolkadot: soraPolkadotCalls.addPeer['v10'],
	v7SoraKusama: soraKusamaCalls.addPeer['v7'],
}

export const removePeer = {
	name: 'MultisigVerifier.remove_peer',
	v10SoraPolkadot: soraPolkadotCalls.removePeer['v10'],
	v7SoraKusama: soraKusamaCalls.removePeer['v7'],
}
