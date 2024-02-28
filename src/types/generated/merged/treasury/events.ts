import * as polkadotEvents from '../../polkadot/treasury/events'


export const proposed = {
	name: 'Treasury.Proposed',
	v0Polkadot: polkadotEvents.proposed['v0'],
	v9170Polkadot: polkadotEvents.proposed['v9170'],
}

export const spending = {
	name: 'Treasury.Spending',
	v0Polkadot: polkadotEvents.spending['v0'],
	v9170Polkadot: polkadotEvents.spending['v9170'],
}

export const awarded = {
	name: 'Treasury.Awarded',
	v0Polkadot: polkadotEvents.awarded['v0'],
	v9170Polkadot: polkadotEvents.awarded['v9170'],
}

export const rejected = {
	name: 'Treasury.Rejected',
	v0Polkadot: polkadotEvents.rejected['v0'],
	v9170Polkadot: polkadotEvents.rejected['v9170'],
}

export const burnt = {
	name: 'Treasury.Burnt',
	v0Polkadot: polkadotEvents.burnt['v0'],
	v9170Polkadot: polkadotEvents.burnt['v9170'],
}

export const rollover = {
	name: 'Treasury.Rollover',
	v0Polkadot: polkadotEvents.rollover['v0'],
	v9170Polkadot: polkadotEvents.rollover['v9170'],
}

export const deposit = {
	name: 'Treasury.Deposit',
	v0Polkadot: polkadotEvents.deposit['v0'],
	v9170Polkadot: polkadotEvents.deposit['v9170'],
}

export const newTip = {
	name: 'Treasury.NewTip',
	v0Polkadot: polkadotEvents.newTip['v0'],
}

export const tipClosing = {
	name: 'Treasury.TipClosing',
	v0Polkadot: polkadotEvents.tipClosing['v0'],
}

export const tipClosed = {
	name: 'Treasury.TipClosed',
	v0Polkadot: polkadotEvents.tipClosed['v0'],
}

export const tipRetracted = {
	name: 'Treasury.TipRetracted',
	v0Polkadot: polkadotEvents.tipRetracted['v0'],
}

export const bountyProposed = {
	name: 'Treasury.BountyProposed',
	v25Polkadot: polkadotEvents.bountyProposed['v25'],
}

export const bountyRejected = {
	name: 'Treasury.BountyRejected',
	v25Polkadot: polkadotEvents.bountyRejected['v25'],
}

export const bountyBecameActive = {
	name: 'Treasury.BountyBecameActive',
	v25Polkadot: polkadotEvents.bountyBecameActive['v25'],
}

export const bountyAwarded = {
	name: 'Treasury.BountyAwarded',
	v25Polkadot: polkadotEvents.bountyAwarded['v25'],
}

export const bountyClaimed = {
	name: 'Treasury.BountyClaimed',
	v25Polkadot: polkadotEvents.bountyClaimed['v25'],
}

export const bountyCanceled = {
	name: 'Treasury.BountyCanceled',
	v25Polkadot: polkadotEvents.bountyCanceled['v25'],
}

export const bountyExtended = {
	name: 'Treasury.BountyExtended',
	v25Polkadot: polkadotEvents.bountyExtended['v25'],
}

export const spendApproved = {
	name: 'Treasury.SpendApproved',
	v9250Polkadot: polkadotEvents.spendApproved['v9250'],
}

export const updatedInactive = {
	name: 'Treasury.UpdatedInactive',
	v9370Polkadot: polkadotEvents.updatedInactive['v9370'],
}

export const assetSpendApproved = {
	name: 'Treasury.AssetSpendApproved',
	v1001002Polkadot: polkadotEvents.assetSpendApproved['v1001002'],
}

export const assetSpendVoided = {
	name: 'Treasury.AssetSpendVoided',
	v1001002Polkadot: polkadotEvents.assetSpendVoided['v1001002'],
}

export const paid = {
	name: 'Treasury.Paid',
	v1001002Polkadot: polkadotEvents.paid['v1001002'],
}

export const paymentFailed = {
	name: 'Treasury.PaymentFailed',
	v1001002Polkadot: polkadotEvents.paymentFailed['v1001002'],
}

export const spendProcessed = {
	name: 'Treasury.SpendProcessed',
	v1001002Polkadot: polkadotEvents.spendProcessed['v1001002'],
}
