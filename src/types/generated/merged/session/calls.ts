import * as soraPolkadotCalls from '../../sora-polkadot/session/calls'
import * as soraKusamaCalls from '../../sora-kusama/session/calls'


export const setKeys = {
	name: 'Session.set_keys',
	soraPolkadotV1: soraPolkadotCalls.setKeys['v1'],
	soraKusamaV1: soraKusamaCalls.setKeys['v1'],
	soraKusamaV7: soraKusamaCalls.setKeys['v7'],
}

export const purgeKeys = {
	name: 'Session.purge_keys',
	soraPolkadotV1: soraPolkadotCalls.purgeKeys['v1'],
	soraKusamaV1: soraKusamaCalls.purgeKeys['v1'],
}
