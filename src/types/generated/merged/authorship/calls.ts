import * as soraPolkadotCalls from '../../sora-polkadot/authorship/calls'
import * as soraKusamaCalls from '../../sora-kusama/authorship/calls'


export const setUncles = {
	name: 'Authorship.set_uncles',
	soraPolkadotV1: soraPolkadotCalls.setUncles['v1'],
	soraKusamaV1: soraKusamaCalls.setUncles['v1'],
}
