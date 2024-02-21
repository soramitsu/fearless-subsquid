import * as kusamaEvents from '../../kusama/crowdloan/events'


export const created = {
	name: 'Crowdloan.Created',
	v9010Kusama: kusamaEvents.created['v9010'],
	v9230Kusama: kusamaEvents.created['v9230'],
}

export const contributed = {
	name: 'Crowdloan.Contributed',
	v9010Kusama: kusamaEvents.contributed['v9010'],
	v9230Kusama: kusamaEvents.contributed['v9230'],
}

export const withdrew = {
	name: 'Crowdloan.Withdrew',
	v9010Kusama: kusamaEvents.withdrew['v9010'],
	v9230Kusama: kusamaEvents.withdrew['v9230'],
}

export const partiallyRefunded = {
	name: 'Crowdloan.PartiallyRefunded',
	v9010Kusama: kusamaEvents.partiallyRefunded['v9010'],
	v9230Kusama: kusamaEvents.partiallyRefunded['v9230'],
}

export const allRefunded = {
	name: 'Crowdloan.AllRefunded',
	v9010Kusama: kusamaEvents.allRefunded['v9010'],
	v9230Kusama: kusamaEvents.allRefunded['v9230'],
}

export const dissolved = {
	name: 'Crowdloan.Dissolved',
	v9010Kusama: kusamaEvents.dissolved['v9010'],
	v9230Kusama: kusamaEvents.dissolved['v9230'],
}

export const deployDataFixed = {
	name: 'Crowdloan.DeployDataFixed',
	v9010Kusama: kusamaEvents.deployDataFixed['v9010'],
}

export const onboarded = {
	name: 'Crowdloan.Onboarded',
	v9010Kusama: kusamaEvents.onboarded['v9010'],
}

export const handleBidResult = {
	name: 'Crowdloan.HandleBidResult',
	v9010Kusama: kusamaEvents.handleBidResult['v9010'],
	v9111Kusama: kusamaEvents.handleBidResult['v9111'],
	v9160Kusama: kusamaEvents.handleBidResult['v9160'],
	v9170Kusama: kusamaEvents.handleBidResult['v9170'],
	v9190Kusama: kusamaEvents.handleBidResult['v9190'],
	v9230Kusama: kusamaEvents.handleBidResult['v9230'],
	v9320Kusama: kusamaEvents.handleBidResult['v9320'],
	v9420Kusama: kusamaEvents.handleBidResult['v9420'],
	v9430Kusama: kusamaEvents.handleBidResult['v9430'],
}

export const edited = {
	name: 'Crowdloan.Edited',
	v9010Kusama: kusamaEvents.edited['v9010'],
	v9230Kusama: kusamaEvents.edited['v9230'],
}

export const memoUpdated = {
	name: 'Crowdloan.MemoUpdated',
	v9010Kusama: kusamaEvents.memoUpdated['v9010'],
	v9230Kusama: kusamaEvents.memoUpdated['v9230'],
}

export const addedToNewRaise = {
	name: 'Crowdloan.AddedToNewRaise',
	v9010Kusama: kusamaEvents.addedToNewRaise['v9010'],
	v9230Kusama: kusamaEvents.addedToNewRaise['v9230'],
}
