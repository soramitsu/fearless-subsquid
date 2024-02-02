import * as soraPolkadotCalls from '../../sora-polkadot/timestamp/calls'
import * as soraKusamaCalls from '../../sora-kusama/timestamp/calls'


export const set = {
	name: 'Timestamp.set',
	soraPolkadotV1: soraPolkadotCalls.set['v1'],
	soraKusamaV1: soraKusamaCalls.set['v1'],
}
