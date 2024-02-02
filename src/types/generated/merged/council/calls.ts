import * as soraPolkadotCalls from '../../sora-polkadot/council/calls'
import * as soraKusamaCalls from '../../sora-kusama/council/calls'


export const setMembers = {
	name: 'Council.set_members',
	soraPolkadotV10: soraPolkadotCalls.setMembers['v10'],
	soraKusamaV7: soraKusamaCalls.setMembers['v7'],
}

export const execute = {
	name: 'Council.execute',
	soraPolkadotV10: soraPolkadotCalls.execute['v10'],
	soraKusamaV7: soraKusamaCalls.execute['v7'],
	soraKusamaV9: soraKusamaCalls.execute['v9'],
}

export const propose = {
	name: 'Council.propose',
	soraPolkadotV10: soraPolkadotCalls.propose['v10'],
	soraKusamaV7: soraKusamaCalls.propose['v7'],
	soraKusamaV9: soraKusamaCalls.propose['v9'],
}

export const vote = {
	name: 'Council.vote',
	soraPolkadotV10: soraPolkadotCalls.vote['v10'],
	soraKusamaV7: soraKusamaCalls.vote['v7'],
}

export const closeOldWeight = {
	name: 'Council.close_old_weight',
	soraPolkadotV10: soraPolkadotCalls.closeOldWeight['v10'],
	soraKusamaV7: soraKusamaCalls.closeOldWeight['v7'],
}

export const disapproveProposal = {
	name: 'Council.disapprove_proposal',
	soraPolkadotV10: soraPolkadotCalls.disapproveProposal['v10'],
	soraKusamaV7: soraKusamaCalls.disapproveProposal['v7'],
}

export const close = {
	name: 'Council.close',
	soraPolkadotV10: soraPolkadotCalls.close['v10'],
	soraKusamaV7: soraKusamaCalls.close['v7'],
}
