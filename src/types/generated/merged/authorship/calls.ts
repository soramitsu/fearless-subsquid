import * as polkadotCalls from '../../polkadot/authorship/calls'


export const setUncles = {
	name: 'Authorship.set_uncles',
	v0Polkadot: polkadotCalls.setUncles['v0'],
	v9110Polkadot: polkadotCalls.setUncles['v9110'],
	v9140Polkadot: polkadotCalls.setUncles['v9140'],
}
