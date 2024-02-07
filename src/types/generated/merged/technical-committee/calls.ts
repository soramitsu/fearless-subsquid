import * as soraPolkadotCalls from '../../sora-polkadot/technical-committee/calls'
import * as soraKusamaCalls from '../../sora-kusama/technical-committee/calls'


export const setMembers = {
	name: 'TechnicalCommittee.set_members',
	v10SoraPolkadot: soraPolkadotCalls.setMembers['v10'],
	v7SoraKusama: soraKusamaCalls.setMembers['v7'],
}

export const execute = {
	name: 'TechnicalCommittee.execute',
	v10SoraPolkadot: soraPolkadotCalls.execute['v10'],
	v7SoraKusama: soraKusamaCalls.execute['v7'],
	v9SoraKusama: soraKusamaCalls.execute['v9'],
}

export const propose = {
	name: 'TechnicalCommittee.propose',
	v10SoraPolkadot: soraPolkadotCalls.propose['v10'],
	v7SoraKusama: soraKusamaCalls.propose['v7'],
	v9SoraKusama: soraKusamaCalls.propose['v9'],
}

export const vote = {
	name: 'TechnicalCommittee.vote',
	v10SoraPolkadot: soraPolkadotCalls.vote['v10'],
	v7SoraKusama: soraKusamaCalls.vote['v7'],
}

export const closeOldWeight = {
	name: 'TechnicalCommittee.close_old_weight',
	v10SoraPolkadot: soraPolkadotCalls.closeOldWeight['v10'],
	v7SoraKusama: soraKusamaCalls.closeOldWeight['v7'],
}

export const disapproveProposal = {
	name: 'TechnicalCommittee.disapprove_proposal',
	v10SoraPolkadot: soraPolkadotCalls.disapproveProposal['v10'],
	v7SoraKusama: soraKusamaCalls.disapproveProposal['v7'],
}

export const close = {
	name: 'TechnicalCommittee.close',
	v10SoraPolkadot: soraPolkadotCalls.close['v10'],
	v7SoraKusama: soraKusamaCalls.close['v7'],
}
