import * as soraPolkadotCalls from '../../sora-polkadot/democracy/calls'
import * as soraKusamaCalls from '../../sora-kusama/democracy/calls'


export const propose = {
	name: 'Democracy.propose',
	v10SoraPolkadot: soraPolkadotCalls.propose['v10'],
	v7SoraKusama: soraKusamaCalls.propose['v7'],
}

export const second = {
	name: 'Democracy.second',
	v10SoraPolkadot: soraPolkadotCalls.second['v10'],
	v7SoraKusama: soraKusamaCalls.second['v7'],
}

export const vote = {
	name: 'Democracy.vote',
	v10SoraPolkadot: soraPolkadotCalls.vote['v10'],
	v7SoraKusama: soraKusamaCalls.vote['v7'],
}

export const emergencyCancel = {
	name: 'Democracy.emergency_cancel',
	v10SoraPolkadot: soraPolkadotCalls.emergencyCancel['v10'],
	v7SoraKusama: soraKusamaCalls.emergencyCancel['v7'],
}

export const externalPropose = {
	name: 'Democracy.external_propose',
	v10SoraPolkadot: soraPolkadotCalls.externalPropose['v10'],
	v7SoraKusama: soraKusamaCalls.externalPropose['v7'],
}

export const externalProposeMajority = {
	name: 'Democracy.external_propose_majority',
	v10SoraPolkadot: soraPolkadotCalls.externalProposeMajority['v10'],
	v7SoraKusama: soraKusamaCalls.externalProposeMajority['v7'],
}

export const externalProposeDefault = {
	name: 'Democracy.external_propose_default',
	v10SoraPolkadot: soraPolkadotCalls.externalProposeDefault['v10'],
	v7SoraKusama: soraKusamaCalls.externalProposeDefault['v7'],
}

export const fastTrack = {
	name: 'Democracy.fast_track',
	v10SoraPolkadot: soraPolkadotCalls.fastTrack['v10'],
	v7SoraKusama: soraKusamaCalls.fastTrack['v7'],
}

export const vetoExternal = {
	name: 'Democracy.veto_external',
	v10SoraPolkadot: soraPolkadotCalls.vetoExternal['v10'],
	v7SoraKusama: soraKusamaCalls.vetoExternal['v7'],
}

export const cancelReferendum = {
	name: 'Democracy.cancel_referendum',
	v10SoraPolkadot: soraPolkadotCalls.cancelReferendum['v10'],
	v7SoraKusama: soraKusamaCalls.cancelReferendum['v7'],
}

export const delegate = {
	name: 'Democracy.delegate',
	v10SoraPolkadot: soraPolkadotCalls.delegate['v10'],
	v7SoraKusama: soraKusamaCalls.delegate['v7'],
}

export const undelegate = {
	name: 'Democracy.undelegate',
	v10SoraPolkadot: soraPolkadotCalls.undelegate['v10'],
	v7SoraKusama: soraKusamaCalls.undelegate['v7'],
}

export const clearPublicProposals = {
	name: 'Democracy.clear_public_proposals',
	v10SoraPolkadot: soraPolkadotCalls.clearPublicProposals['v10'],
	v7SoraKusama: soraKusamaCalls.clearPublicProposals['v7'],
}

export const unlock = {
	name: 'Democracy.unlock',
	v10SoraPolkadot: soraPolkadotCalls.unlock['v10'],
	v7SoraKusama: soraKusamaCalls.unlock['v7'],
}

export const removeVote = {
	name: 'Democracy.remove_vote',
	v10SoraPolkadot: soraPolkadotCalls.removeVote['v10'],
	v7SoraKusama: soraKusamaCalls.removeVote['v7'],
}

export const removeOtherVote = {
	name: 'Democracy.remove_other_vote',
	v10SoraPolkadot: soraPolkadotCalls.removeOtherVote['v10'],
	v7SoraKusama: soraKusamaCalls.removeOtherVote['v7'],
}

export const blacklist = {
	name: 'Democracy.blacklist',
	v10SoraPolkadot: soraPolkadotCalls.blacklist['v10'],
	v7SoraKusama: soraKusamaCalls.blacklist['v7'],
}

export const cancelProposal = {
	name: 'Democracy.cancel_proposal',
	v10SoraPolkadot: soraPolkadotCalls.cancelProposal['v10'],
	v7SoraKusama: soraKusamaCalls.cancelProposal['v7'],
}
