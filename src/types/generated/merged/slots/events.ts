import * as polkadotEvents from '../../polkadot/slots/events'


export const newLeasePeriod = {
	name: 'Slots.NewLeasePeriod',
	v0Polkadot: polkadotEvents.newLeasePeriod['v0'],
	v9230Polkadot: polkadotEvents.newLeasePeriod['v9230'],
}

export const auctionStarted = {
	name: 'Slots.AuctionStarted',
	v0Polkadot: polkadotEvents.auctionStarted['v0'],
}

export const auctionClosed = {
	name: 'Slots.AuctionClosed',
	v0Polkadot: polkadotEvents.auctionClosed['v0'],
}

export const wonDeploy = {
	name: 'Slots.WonDeploy',
	v0Polkadot: polkadotEvents.wonDeploy['v0'],
}

export const wonRenewal = {
	name: 'Slots.WonRenewal',
	v0Polkadot: polkadotEvents.wonRenewal['v0'],
}

export const reserved = {
	name: 'Slots.Reserved',
	v0Polkadot: polkadotEvents.reserved['v0'],
}

export const unreserved = {
	name: 'Slots.Unreserved',
	v0Polkadot: polkadotEvents.unreserved['v0'],
}

export const leased = {
	name: 'Slots.Leased',
	v9110Polkadot: polkadotEvents.leased['v9110'],
	v9230Polkadot: polkadotEvents.leased['v9230'],
}
