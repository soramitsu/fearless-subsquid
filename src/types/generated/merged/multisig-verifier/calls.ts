import * as soraPolkadotCalls from '../../sora-polkadot/multisig-verifier/calls'
import * as soraKusamaCalls from '../../sora-kusama/multisig-verifier/calls'


export const initialize = {
	name: 'MultisigVerifier.initialize',
	soraPolkadotV10: soraPolkadotCalls.initialize['v10'],
	soraKusamaV7: soraKusamaCalls.initialize['v7'],
}

export const addPeer = {
	name: 'MultisigVerifier.add_peer',
	soraPolkadotV10: soraPolkadotCalls.addPeer['v10'],
	soraKusamaV7: soraKusamaCalls.addPeer['v7'],
}

export const removePeer = {
	name: 'MultisigVerifier.remove_peer',
	soraPolkadotV10: soraPolkadotCalls.removePeer['v10'],
	soraKusamaV7: soraKusamaCalls.removePeer['v7'],
}
