import * as soraPolkadotCalls from '../../sora-polkadot/beefy-light-client/calls'
import * as soraKusamaCalls from '../../sora-kusama/beefy-light-client/calls'


export const initialize = {
	name: 'BeefyLightClient.initialize',
	soraPolkadotV1: soraPolkadotCalls.initialize['v1'],
	soraPolkadotV10: soraPolkadotCalls.initialize['v10'],
	soraKusamaV7: soraKusamaCalls.initialize['v7'],
}

export const submitSignatureCommitment = {
	name: 'BeefyLightClient.submit_signature_commitment',
	soraPolkadotV1: soraPolkadotCalls.submitSignatureCommitment['v1'],
	soraPolkadotV10: soraPolkadotCalls.submitSignatureCommitment['v10'],
	soraKusamaV7: soraKusamaCalls.submitSignatureCommitment['v7'],
}
