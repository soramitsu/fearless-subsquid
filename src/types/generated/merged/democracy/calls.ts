import * as kusamaCalls from '../../kusama/democracy/calls'


export const propose = {
	name: 'Democracy.propose',
	v1020Kusama: kusamaCalls.propose['v1020'],
	v1022Kusama: kusamaCalls.propose['v1022'],
	v9320Kusama: kusamaCalls.propose['v9320'],
}

export const second = {
	name: 'Democracy.second',
	v1020Kusama: kusamaCalls.second['v1020'],
	v2005Kusama: kusamaCalls.second['v2005'],
	v9320Kusama: kusamaCalls.second['v9320'],
}

export const vote = {
	name: 'Democracy.vote',
	v1020Kusama: kusamaCalls.vote['v1020'],
	v1055Kusama: kusamaCalls.vote['v1055'],
	v9111Kusama: kusamaCalls.vote['v9111'],
}

export const proxyVote = {
	name: 'Democracy.proxy_vote',
	v1020Kusama: kusamaCalls.proxyVote['v1020'],
	v1055Kusama: kusamaCalls.proxyVote['v1055'],
}

export const emergencyCancel = {
	name: 'Democracy.emergency_cancel',
	v1020Kusama: kusamaCalls.emergencyCancel['v1020'],
}

export const externalPropose = {
	name: 'Democracy.external_propose',
	v1020Kusama: kusamaCalls.externalPropose['v1020'],
	v1022Kusama: kusamaCalls.externalPropose['v1022'],
	v9320Kusama: kusamaCalls.externalPropose['v9320'],
}

export const externalProposeMajority = {
	name: 'Democracy.external_propose_majority',
	v1020Kusama: kusamaCalls.externalProposeMajority['v1020'],
	v1022Kusama: kusamaCalls.externalProposeMajority['v1022'],
	v9320Kusama: kusamaCalls.externalProposeMajority['v9320'],
}

export const externalProposeDefault = {
	name: 'Democracy.external_propose_default',
	v1020Kusama: kusamaCalls.externalProposeDefault['v1020'],
	v1022Kusama: kusamaCalls.externalProposeDefault['v1022'],
	v9320Kusama: kusamaCalls.externalProposeDefault['v9320'],
}

export const fastTrack = {
	name: 'Democracy.fast_track',
	v1020Kusama: kusamaCalls.fastTrack['v1020'],
}

export const vetoExternal = {
	name: 'Democracy.veto_external',
	v1020Kusama: kusamaCalls.vetoExternal['v1020'],
}

export const cancelReferendum = {
	name: 'Democracy.cancel_referendum',
	v1020Kusama: kusamaCalls.cancelReferendum['v1020'],
}

export const cancelQueued = {
	name: 'Democracy.cancel_queued',
	v1020Kusama: kusamaCalls.cancelQueued['v1020'],
	v1030Kusama: kusamaCalls.cancelQueued['v1030'],
}

export const setProxy = {
	name: 'Democracy.set_proxy',
	v1020Kusama: kusamaCalls.setProxy['v1020'],
}

export const resignProxy = {
	name: 'Democracy.resign_proxy',
	v1020Kusama: kusamaCalls.resignProxy['v1020'],
}

export const removeProxy = {
	name: 'Democracy.remove_proxy',
	v1020Kusama: kusamaCalls.removeProxy['v1020'],
}

export const delegate = {
	name: 'Democracy.delegate',
	v1020Kusama: kusamaCalls.delegate['v1020'],
	v1055Kusama: kusamaCalls.delegate['v1055'],
	v9291Kusama: kusamaCalls.delegate['v9291'],
}

export const undelegate = {
	name: 'Democracy.undelegate',
	v1020Kusama: kusamaCalls.undelegate['v1020'],
}

export const clearPublicProposals = {
	name: 'Democracy.clear_public_proposals',
	v1022Kusama: kusamaCalls.clearPublicProposals['v1022'],
}

export const notePreimage = {
	name: 'Democracy.note_preimage',
	v1022Kusama: kusamaCalls.notePreimage['v1022'],
}

export const noteImminentPreimage = {
	name: 'Democracy.note_imminent_preimage',
	v1022Kusama: kusamaCalls.noteImminentPreimage['v1022'],
	v1030Kusama: kusamaCalls.noteImminentPreimage['v1030'],
}

export const reapPreimage = {
	name: 'Democracy.reap_preimage',
	v1022Kusama: kusamaCalls.reapPreimage['v1022'],
	v2005Kusama: kusamaCalls.reapPreimage['v2005'],
}

export const activateProxy = {
	name: 'Democracy.activate_proxy',
	v1050Kusama: kusamaCalls.activateProxy['v1050'],
}

export const closeProxy = {
	name: 'Democracy.close_proxy',
	v1050Kusama: kusamaCalls.closeProxy['v1050'],
}

export const deactivateProxy = {
	name: 'Democracy.deactivate_proxy',
	v1050Kusama: kusamaCalls.deactivateProxy['v1050'],
}

export const unlock = {
	name: 'Democracy.unlock',
	v1050Kusama: kusamaCalls.unlock['v1050'],
	v9291Kusama: kusamaCalls.unlock['v9291'],
}

export const openProxy = {
	name: 'Democracy.open_proxy',
	v1050Kusama: kusamaCalls.openProxy['v1050'],
}

export const removeVote = {
	name: 'Democracy.remove_vote',
	v1055Kusama: kusamaCalls.removeVote['v1055'],
}

export const removeOtherVote = {
	name: 'Democracy.remove_other_vote',
	v1055Kusama: kusamaCalls.removeOtherVote['v1055'],
	v9291Kusama: kusamaCalls.removeOtherVote['v9291'],
}

export const proxyDelegate = {
	name: 'Democracy.proxy_delegate',
	v1055Kusama: kusamaCalls.proxyDelegate['v1055'],
}

export const proxyUndelegate = {
	name: 'Democracy.proxy_undelegate',
	v1055Kusama: kusamaCalls.proxyUndelegate['v1055'],
}

export const proxyRemoveVote = {
	name: 'Democracy.proxy_remove_vote',
	v1055Kusama: kusamaCalls.proxyRemoveVote['v1055'],
}

export const enactProposal = {
	name: 'Democracy.enact_proposal',
	v1058Kusama: kusamaCalls.enactProposal['v1058'],
}

export const notePreimageOperational = {
	name: 'Democracy.note_preimage_operational',
	v2005Kusama: kusamaCalls.notePreimageOperational['v2005'],
}

export const noteImminentPreimageOperational = {
	name: 'Democracy.note_imminent_preimage_operational',
	v2005Kusama: kusamaCalls.noteImminentPreimageOperational['v2005'],
}

export const blacklist = {
	name: 'Democracy.blacklist',
	v2025Kusama: kusamaCalls.blacklist['v2025'],
}

export const cancelProposal = {
	name: 'Democracy.cancel_proposal',
	v2025Kusama: kusamaCalls.cancelProposal['v2025'],
}
