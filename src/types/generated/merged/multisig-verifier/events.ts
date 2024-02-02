import * as soraPolkadotEvents from '../../sora-polkadot/multisig-verifier/events'
import * as soraKusamaEvents from '../../sora-kusama/multisig-verifier/events'


export const networkInitialized = {
	name: 'MultisigVerifier.NetworkInitialized',
	soraPolkadotV10: soraPolkadotEvents.networkInitialized['v10'],
	soraKusamaV7: soraKusamaEvents.networkInitialized['v7'],
}

export const verificationSuccessful = {
	name: 'MultisigVerifier.VerificationSuccessful',
	soraPolkadotV10: soraPolkadotEvents.verificationSuccessful['v10'],
	soraKusamaV7: soraKusamaEvents.verificationSuccessful['v7'],
}

export const peerAdded = {
	name: 'MultisigVerifier.PeerAdded',
	soraPolkadotV10: soraPolkadotEvents.peerAdded['v10'],
	soraKusamaV7: soraKusamaEvents.peerAdded['v7'],
}

export const peerRemoved = {
	name: 'MultisigVerifier.PeerRemoved',
	soraPolkadotV10: soraPolkadotEvents.peerRemoved['v10'],
	soraKusamaV7: soraKusamaEvents.peerRemoved['v7'],
}
