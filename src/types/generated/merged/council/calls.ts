import * as soraPolkadotCalls from '../../sora-polkadot/council/calls'
import * as soraKusamaCalls from '../../sora-kusama/council/calls'


export const setMembers = {
	name: 'Council.set_members',
	v10SoraPolkadot: soraPolkadotCalls.setMembers['v10'],
	v7SoraKusama: soraKusamaCalls.setMembers['v7'],
}

export const execute = {
	name: 'Council.execute',
	v10SoraPolkadot: soraPolkadotCalls.execute['v10'],
	v7SoraKusama: soraKusamaCalls.execute['v7'],
	v9SoraKusama: soraKusamaCalls.execute['v9'],
}

export const propose = {
	name: 'Council.propose',
	v10SoraPolkadot: soraPolkadotCalls.propose['v10'],
	v7SoraKusama: soraKusamaCalls.propose['v7'],
	v9SoraKusama: soraKusamaCalls.propose['v9'],
}

export const vote = {
	name: 'Council.vote',
	v10SoraPolkadot: soraPolkadotCalls.vote['v10'],
	v7SoraKusama: soraKusamaCalls.vote['v7'],
}

export const closeOldWeight = {
	name: 'Council.close_old_weight',
	v10SoraPolkadot: soraPolkadotCalls.closeOldWeight['v10'],
	v7SoraKusama: soraKusamaCalls.closeOldWeight['v7'],
}

export const disapproveProposal = {
	name: 'Council.disapprove_proposal',
	v10SoraPolkadot: soraPolkadotCalls.disapproveProposal['v10'],
	v7SoraKusama: soraKusamaCalls.disapproveProposal['v7'],
}

export const close = {
	name: 'Council.close',
	v10SoraPolkadot: soraPolkadotCalls.close['v10'],
	v7SoraKusama: soraKusamaCalls.close['v7'],
}
