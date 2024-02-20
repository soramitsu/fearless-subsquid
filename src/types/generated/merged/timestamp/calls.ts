import * as soraPolkadotCalls from '../../sora-polkadot/timestamp/calls'
import * as soraKusamaCalls from '../../sora-kusama/timestamp/calls'


export const set = {
	name: 'Timestamp.set',
	v1SoraPolkadot: soraPolkadotCalls.set['v1'],
	v1SoraKusama: soraKusamaCalls.set['v1'],
}
