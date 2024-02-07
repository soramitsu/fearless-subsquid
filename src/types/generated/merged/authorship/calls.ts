import * as soraPolkadotCalls from '../../sora-polkadot/authorship/calls'
import * as soraKusamaCalls from '../../sora-kusama/authorship/calls'


export const setUncles = {
	name: 'Authorship.set_uncles',
	v1SoraPolkadot: soraPolkadotCalls.setUncles['v1'],
	v1SoraKusama: soraKusamaCalls.setUncles['v1'],
}
