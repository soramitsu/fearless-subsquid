import * as polkadotCalls from '../../polkadot/referenda/calls'


export const submit = {
	name: 'Referenda.submit',
	v9420Polkadot: polkadotCalls.submit['v9420'],
	v1000001Polkadot: polkadotCalls.submit['v1000001'],
}

export const placeDecisionDeposit = {
	name: 'Referenda.place_decision_deposit',
	v9420Polkadot: polkadotCalls.placeDecisionDeposit['v9420'],
}

export const refundDecisionDeposit = {
	name: 'Referenda.refund_decision_deposit',
	v9420Polkadot: polkadotCalls.refundDecisionDeposit['v9420'],
}

export const cancel = {
	name: 'Referenda.cancel',
	v9420Polkadot: polkadotCalls.cancel['v9420'],
}

export const kill = {
	name: 'Referenda.kill',
	v9420Polkadot: polkadotCalls.kill['v9420'],
}

export const nudgeReferendum = {
	name: 'Referenda.nudge_referendum',
	v9420Polkadot: polkadotCalls.nudgeReferendum['v9420'],
}

export const oneFewerDeciding = {
	name: 'Referenda.one_fewer_deciding',
	v9420Polkadot: polkadotCalls.oneFewerDeciding['v9420'],
}

export const refundSubmissionDeposit = {
	name: 'Referenda.refund_submission_deposit',
	v9420Polkadot: polkadotCalls.refundSubmissionDeposit['v9420'],
}

export const setMetadata = {
	name: 'Referenda.set_metadata',
	v9420Polkadot: polkadotCalls.setMetadata['v9420'],
}
