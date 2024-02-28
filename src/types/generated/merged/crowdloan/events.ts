import * as polkadotEvents from '../../polkadot/crowdloan/events'


export const created = {
	name: 'Crowdloan.Created',
	v9110Polkadot: polkadotEvents.created['v9110'],
	v9230Polkadot: polkadotEvents.created['v9230'],
}

export const contributed = {
	name: 'Crowdloan.Contributed',
	v9110Polkadot: polkadotEvents.contributed['v9110'],
	v9230Polkadot: polkadotEvents.contributed['v9230'],
}

export const withdrew = {
	name: 'Crowdloan.Withdrew',
	v9110Polkadot: polkadotEvents.withdrew['v9110'],
	v9230Polkadot: polkadotEvents.withdrew['v9230'],
}

export const partiallyRefunded = {
	name: 'Crowdloan.PartiallyRefunded',
	v9110Polkadot: polkadotEvents.partiallyRefunded['v9110'],
	v9230Polkadot: polkadotEvents.partiallyRefunded['v9230'],
}

export const allRefunded = {
	name: 'Crowdloan.AllRefunded',
	v9110Polkadot: polkadotEvents.allRefunded['v9110'],
	v9230Polkadot: polkadotEvents.allRefunded['v9230'],
}

export const dissolved = {
	name: 'Crowdloan.Dissolved',
	v9110Polkadot: polkadotEvents.dissolved['v9110'],
	v9230Polkadot: polkadotEvents.dissolved['v9230'],
}

export const handleBidResult = {
	name: 'Crowdloan.HandleBidResult',
	v9110Polkadot: polkadotEvents.handleBidResult['v9110'],
	v9170Polkadot: polkadotEvents.handleBidResult['v9170'],
	v9190Polkadot: polkadotEvents.handleBidResult['v9190'],
	v9230Polkadot: polkadotEvents.handleBidResult['v9230'],
	v9340Polkadot: polkadotEvents.handleBidResult['v9340'],
	v9420Polkadot: polkadotEvents.handleBidResult['v9420'],
	v9430Polkadot: polkadotEvents.handleBidResult['v9430'],
}

export const edited = {
	name: 'Crowdloan.Edited',
	v9110Polkadot: polkadotEvents.edited['v9110'],
	v9230Polkadot: polkadotEvents.edited['v9230'],
}

export const memoUpdated = {
	name: 'Crowdloan.MemoUpdated',
	v9110Polkadot: polkadotEvents.memoUpdated['v9110'],
	v9230Polkadot: polkadotEvents.memoUpdated['v9230'],
}

export const addedToNewRaise = {
	name: 'Crowdloan.AddedToNewRaise',
	v9110Polkadot: polkadotEvents.addedToNewRaise['v9110'],
	v9230Polkadot: polkadotEvents.addedToNewRaise['v9230'],
}
