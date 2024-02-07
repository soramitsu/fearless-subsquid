import * as soraPolkadotCalls from '../../sora-polkadot/beefy-light-client/calls'
import * as soraKusamaCalls from '../../sora-kusama/beefy-light-client/calls'


export const initialize = {
	name: 'BeefyLightClient.initialize',
	v1SoraPolkadot: soraPolkadotCalls.initialize['v1'],
	v10SoraPolkadot: soraPolkadotCalls.initialize['v10'],
	v7SoraKusama: soraKusamaCalls.initialize['v7'],
}

export const submitSignatureCommitment = {
	name: 'BeefyLightClient.submit_signature_commitment',
	v1SoraPolkadot: soraPolkadotCalls.submitSignatureCommitment['v1'],
	v10SoraPolkadot: soraPolkadotCalls.submitSignatureCommitment['v10'],
	v7SoraKusama: soraKusamaCalls.submitSignatureCommitment['v7'],
}
