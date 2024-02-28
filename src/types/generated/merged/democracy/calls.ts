import * as polkadotCalls from '../../polkadot/democracy/calls'


export const propose = {
	name: 'Democracy.propose',
	v0Polkadot: polkadotCalls.propose['v0'],
	v9340Polkadot: polkadotCalls.propose['v9340'],
}

export const second = {
	name: 'Democracy.second',
	v0Polkadot: polkadotCalls.second['v0'],
	v9340Polkadot: polkadotCalls.second['v9340'],
}

export const vote = {
	name: 'Democracy.vote',
	v0Polkadot: polkadotCalls.vote['v0'],
	v9110Polkadot: polkadotCalls.vote['v9110'],
}

export const proxyVote = {
	name: 'Democracy.proxy_vote',
	v0Polkadot: polkadotCalls.proxyVote['v0'],
}

export const emergencyCancel = {
	name: 'Democracy.emergency_cancel',
	v0Polkadot: polkadotCalls.emergencyCancel['v0'],
}

export const externalPropose = {
	name: 'Democracy.external_propose',
	v0Polkadot: polkadotCalls.externalPropose['v0'],
	v9340Polkadot: polkadotCalls.externalPropose['v9340'],
}

export const externalProposeMajority = {
	name: 'Democracy.external_propose_majority',
	v0Polkadot: polkadotCalls.externalProposeMajority['v0'],
	v9340Polkadot: polkadotCalls.externalProposeMajority['v9340'],
}

export const externalProposeDefault = {
	name: 'Democracy.external_propose_default',
	v0Polkadot: polkadotCalls.externalProposeDefault['v0'],
	v9340Polkadot: polkadotCalls.externalProposeDefault['v9340'],
}

export const fastTrack = {
	name: 'Democracy.fast_track',
	v0Polkadot: polkadotCalls.fastTrack['v0'],
}

export const vetoExternal = {
	name: 'Democracy.veto_external',
	v0Polkadot: polkadotCalls.vetoExternal['v0'],
}

export const cancelReferendum = {
	name: 'Democracy.cancel_referendum',
	v0Polkadot: polkadotCalls.cancelReferendum['v0'],
}

export const cancelQueued = {
	name: 'Democracy.cancel_queued',
	v0Polkadot: polkadotCalls.cancelQueued['v0'],
}

export const activateProxy = {
	name: 'Democracy.activate_proxy',
	v0Polkadot: polkadotCalls.activateProxy['v0'],
}

export const closeProxy = {
	name: 'Democracy.close_proxy',
	v0Polkadot: polkadotCalls.closeProxy['v0'],
}

export const deactivateProxy = {
	name: 'Democracy.deactivate_proxy',
	v0Polkadot: polkadotCalls.deactivateProxy['v0'],
}

export const delegate = {
	name: 'Democracy.delegate',
	v0Polkadot: polkadotCalls.delegate['v0'],
	v9291Polkadot: polkadotCalls.delegate['v9291'],
}

export const undelegate = {
	name: 'Democracy.undelegate',
	v0Polkadot: polkadotCalls.undelegate['v0'],
}

export const clearPublicProposals = {
	name: 'Democracy.clear_public_proposals',
	v0Polkadot: polkadotCalls.clearPublicProposals['v0'],
}

export const notePreimage = {
	name: 'Democracy.note_preimage',
	v0Polkadot: polkadotCalls.notePreimage['v0'],
}

export const notePreimageOperational = {
	name: 'Democracy.note_preimage_operational',
	v0Polkadot: polkadotCalls.notePreimageOperational['v0'],
}

export const noteImminentPreimage = {
	name: 'Democracy.note_imminent_preimage',
	v0Polkadot: polkadotCalls.noteImminentPreimage['v0'],
}

export const noteImminentPreimageOperational = {
	name: 'Democracy.note_imminent_preimage_operational',
	v0Polkadot: polkadotCalls.noteImminentPreimageOperational['v0'],
}

export const reapPreimage = {
	name: 'Democracy.reap_preimage',
	v0Polkadot: polkadotCalls.reapPreimage['v0'],
}

export const unlock = {
	name: 'Democracy.unlock',
	v0Polkadot: polkadotCalls.unlock['v0'],
	v9291Polkadot: polkadotCalls.unlock['v9291'],
}

export const openProxy = {
	name: 'Democracy.open_proxy',
	v0Polkadot: polkadotCalls.openProxy['v0'],
}

export const removeVote = {
	name: 'Democracy.remove_vote',
	v0Polkadot: polkadotCalls.removeVote['v0'],
}

export const removeOtherVote = {
	name: 'Democracy.remove_other_vote',
	v0Polkadot: polkadotCalls.removeOtherVote['v0'],
	v9291Polkadot: polkadotCalls.removeOtherVote['v9291'],
}

export const proxyDelegate = {
	name: 'Democracy.proxy_delegate',
	v0Polkadot: polkadotCalls.proxyDelegate['v0'],
}

export const proxyUndelegate = {
	name: 'Democracy.proxy_undelegate',
	v0Polkadot: polkadotCalls.proxyUndelegate['v0'],
}

export const proxyRemoveVote = {
	name: 'Democracy.proxy_remove_vote',
	v0Polkadot: polkadotCalls.proxyRemoveVote['v0'],
}

export const enactProposal = {
	name: 'Democracy.enact_proposal',
	v0Polkadot: polkadotCalls.enactProposal['v0'],
}

export const blacklist = {
	name: 'Democracy.blacklist',
	v25Polkadot: polkadotCalls.blacklist['v25'],
}

export const cancelProposal = {
	name: 'Democracy.cancel_proposal',
	v25Polkadot: polkadotCalls.cancelProposal['v25'],
}

export const setMetadata = {
	name: 'Democracy.set_metadata',
	v9420Polkadot: polkadotCalls.setMetadata['v9420'],
}
