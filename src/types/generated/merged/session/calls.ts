import * as soraPolkadotCalls from '../../sora-polkadot/session/calls'
import * as soraKusamaCalls from '../../sora-kusama/session/calls'


export const setKeys = {
	name: 'Session.set_keys',
	v1SoraPolkadot: soraPolkadotCalls.setKeys['v1'],
	v1SoraKusama: soraKusamaCalls.setKeys['v1'],
	v7SoraKusama: soraKusamaCalls.setKeys['v7'],
}

export const purgeKeys = {
	name: 'Session.purge_keys',
	v1SoraPolkadot: soraPolkadotCalls.purgeKeys['v1'],
	v1SoraKusama: soraKusamaCalls.purgeKeys['v1'],
}
