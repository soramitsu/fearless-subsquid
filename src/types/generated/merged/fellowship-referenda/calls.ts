import * as kusamaCalls from '../../kusama/fellowship-referenda/calls'


export const submit = {
	name: 'FellowshipReferenda.submit',
	v9320Kusama: kusamaCalls.submit['v9320'],
	v9370Kusama: kusamaCalls.submit['v9370'],
	v9381Kusama: kusamaCalls.submit['v9381'],
	v9420Kusama: kusamaCalls.submit['v9420'],
}

export const placeDecisionDeposit = {
	name: 'FellowshipReferenda.place_decision_deposit',
	v9320Kusama: kusamaCalls.placeDecisionDeposit['v9320'],
}

export const refundDecisionDeposit = {
	name: 'FellowshipReferenda.refund_decision_deposit',
	v9320Kusama: kusamaCalls.refundDecisionDeposit['v9320'],
}

export const cancel = {
	name: 'FellowshipReferenda.cancel',
	v9320Kusama: kusamaCalls.cancel['v9320'],
}

export const kill = {
	name: 'FellowshipReferenda.kill',
	v9320Kusama: kusamaCalls.kill['v9320'],
}

export const nudgeReferendum = {
	name: 'FellowshipReferenda.nudge_referendum',
	v9320Kusama: kusamaCalls.nudgeReferendum['v9320'],
}

export const oneFewerDeciding = {
	name: 'FellowshipReferenda.one_fewer_deciding',
	v9320Kusama: kusamaCalls.oneFewerDeciding['v9320'],
}

export const refundSubmissionDeposit = {
	name: 'FellowshipReferenda.refund_submission_deposit',
	v9350Kusama: kusamaCalls.refundSubmissionDeposit['v9350'],
}

export const setMetadata = {
	name: 'FellowshipReferenda.set_metadata',
	v9420Kusama: kusamaCalls.setMetadata['v9420'],
}
