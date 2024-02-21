import * as kusamaEvents from '../../kusama/slots/events'


export const newLeasePeriod = {
	name: 'Slots.NewLeasePeriod',
	v1020Kusama: kusamaEvents.newLeasePeriod['v1020'],
	v9230Kusama: kusamaEvents.newLeasePeriod['v9230'],
}

export const auctionStarted = {
	name: 'Slots.AuctionStarted',
	v1020Kusama: kusamaEvents.auctionStarted['v1020'],
}

export const auctionClosed = {
	name: 'Slots.AuctionClosed',
	v1020Kusama: kusamaEvents.auctionClosed['v1020'],
}

export const wonDeploy = {
	name: 'Slots.WonDeploy',
	v1020Kusama: kusamaEvents.wonDeploy['v1020'],
}

export const wonRenewal = {
	name: 'Slots.WonRenewal',
	v1020Kusama: kusamaEvents.wonRenewal['v1020'],
}

export const reserved = {
	name: 'Slots.Reserved',
	v1020Kusama: kusamaEvents.reserved['v1020'],
}

export const unreserved = {
	name: 'Slots.Unreserved',
	v1020Kusama: kusamaEvents.unreserved['v1020'],
}

export const leased = {
	name: 'Slots.Leased',
	v9010Kusama: kusamaEvents.leased['v9010'],
	v9230Kusama: kusamaEvents.leased['v9230'],
}
