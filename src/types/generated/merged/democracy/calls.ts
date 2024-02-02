import * as soraPolkadotCalls from '../../sora-polkadot/democracy/calls'
import * as soraKusamaCalls from '../../sora-kusama/democracy/calls'


export const propose = {
	name: 'Democracy.propose',
	soraPolkadotV10: soraPolkadotCalls.propose['v10'],
	soraKusamaV7: soraKusamaCalls.propose['v7'],
}

export const second = {
	name: 'Democracy.second',
	soraPolkadotV10: soraPolkadotCalls.second['v10'],
	soraKusamaV7: soraKusamaCalls.second['v7'],
}

export const vote = {
	name: 'Democracy.vote',
	soraPolkadotV10: soraPolkadotCalls.vote['v10'],
	soraKusamaV7: soraKusamaCalls.vote['v7'],
}

export const emergencyCancel = {
	name: 'Democracy.emergency_cancel',
	soraPolkadotV10: soraPolkadotCalls.emergencyCancel['v10'],
	soraKusamaV7: soraKusamaCalls.emergencyCancel['v7'],
}

export const externalPropose = {
	name: 'Democracy.external_propose',
	soraPolkadotV10: soraPolkadotCalls.externalPropose['v10'],
	soraKusamaV7: soraKusamaCalls.externalPropose['v7'],
}

export const externalProposeMajority = {
	name: 'Democracy.external_propose_majority',
	soraPolkadotV10: soraPolkadotCalls.externalProposeMajority['v10'],
	soraKusamaV7: soraKusamaCalls.externalProposeMajority['v7'],
}

export const externalProposeDefault = {
	name: 'Democracy.external_propose_default',
	soraPolkadotV10: soraPolkadotCalls.externalProposeDefault['v10'],
	soraKusamaV7: soraKusamaCalls.externalProposeDefault['v7'],
}

export const fastTrack = {
	name: 'Democracy.fast_track',
	soraPolkadotV10: soraPolkadotCalls.fastTrack['v10'],
	soraKusamaV7: soraKusamaCalls.fastTrack['v7'],
}

export const vetoExternal = {
	name: 'Democracy.veto_external',
	soraPolkadotV10: soraPolkadotCalls.vetoExternal['v10'],
	soraKusamaV7: soraKusamaCalls.vetoExternal['v7'],
}

export const cancelReferendum = {
	name: 'Democracy.cancel_referendum',
	soraPolkadotV10: soraPolkadotCalls.cancelReferendum['v10'],
	soraKusamaV7: soraKusamaCalls.cancelReferendum['v7'],
}

export const delegate = {
	name: 'Democracy.delegate',
	soraPolkadotV10: soraPolkadotCalls.delegate['v10'],
	soraKusamaV7: soraKusamaCalls.delegate['v7'],
}

export const undelegate = {
	name: 'Democracy.undelegate',
	soraPolkadotV10: soraPolkadotCalls.undelegate['v10'],
	soraKusamaV7: soraKusamaCalls.undelegate['v7'],
}

export const clearPublicProposals = {
	name: 'Democracy.clear_public_proposals',
	soraPolkadotV10: soraPolkadotCalls.clearPublicProposals['v10'],
	soraKusamaV7: soraKusamaCalls.clearPublicProposals['v7'],
}

export const unlock = {
	name: 'Democracy.unlock',
	soraPolkadotV10: soraPolkadotCalls.unlock['v10'],
	soraKusamaV7: soraKusamaCalls.unlock['v7'],
}

export const removeVote = {
	name: 'Democracy.remove_vote',
	soraPolkadotV10: soraPolkadotCalls.removeVote['v10'],
	soraKusamaV7: soraKusamaCalls.removeVote['v7'],
}

export const removeOtherVote = {
	name: 'Democracy.remove_other_vote',
	soraPolkadotV10: soraPolkadotCalls.removeOtherVote['v10'],
	soraKusamaV7: soraKusamaCalls.removeOtherVote['v7'],
}

export const blacklist = {
	name: 'Democracy.blacklist',
	soraPolkadotV10: soraPolkadotCalls.blacklist['v10'],
	soraKusamaV7: soraKusamaCalls.blacklist['v7'],
}

export const cancelProposal = {
	name: 'Democracy.cancel_proposal',
	soraPolkadotV10: soraPolkadotCalls.cancelProposal['v10'],
	soraKusamaV7: soraKusamaCalls.cancelProposal['v7'],
}
