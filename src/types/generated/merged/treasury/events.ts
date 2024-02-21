import * as kusamaEvents from '../../kusama/treasury/events'


export const proposed = {
	name: 'Treasury.Proposed',
	v1020Kusama: kusamaEvents.proposed['v1020'],
	v9160Kusama: kusamaEvents.proposed['v9160'],
}

export const spending = {
	name: 'Treasury.Spending',
	v1020Kusama: kusamaEvents.spending['v1020'],
	v9160Kusama: kusamaEvents.spending['v9160'],
}

export const awarded = {
	name: 'Treasury.Awarded',
	v1020Kusama: kusamaEvents.awarded['v1020'],
	v9160Kusama: kusamaEvents.awarded['v9160'],
}

export const burnt = {
	name: 'Treasury.Burnt',
	v1020Kusama: kusamaEvents.burnt['v1020'],
	v9160Kusama: kusamaEvents.burnt['v9160'],
}

export const rollover = {
	name: 'Treasury.Rollover',
	v1020Kusama: kusamaEvents.rollover['v1020'],
	v9160Kusama: kusamaEvents.rollover['v9160'],
}

export const deposit = {
	name: 'Treasury.Deposit',
	v1020Kusama: kusamaEvents.deposit['v1020'],
	v9160Kusama: kusamaEvents.deposit['v9160'],
}

export const rejected = {
	name: 'Treasury.Rejected',
	v1032Kusama: kusamaEvents.rejected['v1032'],
	v9160Kusama: kusamaEvents.rejected['v9160'],
}

export const newTip = {
	name: 'Treasury.NewTip',
	v1038Kusama: kusamaEvents.newTip['v1038'],
}

export const tipClosing = {
	name: 'Treasury.TipClosing',
	v1038Kusama: kusamaEvents.tipClosing['v1038'],
}

export const tipClosed = {
	name: 'Treasury.TipClosed',
	v1038Kusama: kusamaEvents.tipClosed['v1038'],
}

export const tipRetracted = {
	name: 'Treasury.TipRetracted',
	v1038Kusama: kusamaEvents.tipRetracted['v1038'],
}

export const bountyProposed = {
	name: 'Treasury.BountyProposed',
	v2025Kusama: kusamaEvents.bountyProposed['v2025'],
}

export const bountyRejected = {
	name: 'Treasury.BountyRejected',
	v2025Kusama: kusamaEvents.bountyRejected['v2025'],
}

export const bountyBecameActive = {
	name: 'Treasury.BountyBecameActive',
	v2025Kusama: kusamaEvents.bountyBecameActive['v2025'],
}

export const bountyAwarded = {
	name: 'Treasury.BountyAwarded',
	v2025Kusama: kusamaEvents.bountyAwarded['v2025'],
}

export const bountyClaimed = {
	name: 'Treasury.BountyClaimed',
	v2025Kusama: kusamaEvents.bountyClaimed['v2025'],
}

export const bountyCanceled = {
	name: 'Treasury.BountyCanceled',
	v2025Kusama: kusamaEvents.bountyCanceled['v2025'],
}

export const bountyExtended = {
	name: 'Treasury.BountyExtended',
	v2025Kusama: kusamaEvents.bountyExtended['v2025'],
}

export const spendApproved = {
	name: 'Treasury.SpendApproved',
	v9250Kusama: kusamaEvents.spendApproved['v9250'],
}

export const updatedInactive = {
	name: 'Treasury.UpdatedInactive',
	v9370Kusama: kusamaEvents.updatedInactive['v9370'],
}

export const assetSpendApproved = {
	name: 'Treasury.AssetSpendApproved',
	v1001000Kusama: kusamaEvents.assetSpendApproved['v1001000'],
}

export const assetSpendVoided = {
	name: 'Treasury.AssetSpendVoided',
	v1001000Kusama: kusamaEvents.assetSpendVoided['v1001000'],
}

export const paid = {
	name: 'Treasury.Paid',
	v1001000Kusama: kusamaEvents.paid['v1001000'],
}

export const paymentFailed = {
	name: 'Treasury.PaymentFailed',
	v1001000Kusama: kusamaEvents.paymentFailed['v1001000'],
}

export const spendProcessed = {
	name: 'Treasury.SpendProcessed',
	v1001000Kusama: kusamaEvents.spendProcessed['v1001000'],
}
