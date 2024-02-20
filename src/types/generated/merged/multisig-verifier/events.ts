import * as soraPolkadotEvents from '../../sora-polkadot/multisig-verifier/events'
import * as soraKusamaEvents from '../../sora-kusama/multisig-verifier/events'


export const networkInitialized = {
	name: 'MultisigVerifier.NetworkInitialized',
	v10SoraPolkadot: soraPolkadotEvents.networkInitialized['v10'],
	v7SoraKusama: soraKusamaEvents.networkInitialized['v7'],
}

export const verificationSuccessful = {
	name: 'MultisigVerifier.VerificationSuccessful',
	v10SoraPolkadot: soraPolkadotEvents.verificationSuccessful['v10'],
	v7SoraKusama: soraKusamaEvents.verificationSuccessful['v7'],
}

export const peerAdded = {
	name: 'MultisigVerifier.PeerAdded',
	v10SoraPolkadot: soraPolkadotEvents.peerAdded['v10'],
	v7SoraKusama: soraKusamaEvents.peerAdded['v7'],
}

export const peerRemoved = {
	name: 'MultisigVerifier.PeerRemoved',
	v10SoraPolkadot: soraPolkadotEvents.peerRemoved['v10'],
	v7SoraKusama: soraKusamaEvents.peerRemoved['v7'],
}
