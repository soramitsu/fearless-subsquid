import * as polkadotEvents from '../../polkadot/auctions/events'


export const auctionStarted = {
	name: 'Auctions.AuctionStarted',
	v9110Polkadot: polkadotEvents.auctionStarted['v9110'],
	v9230Polkadot: polkadotEvents.auctionStarted['v9230'],
}

export const auctionClosed = {
	name: 'Auctions.AuctionClosed',
	v9110Polkadot: polkadotEvents.auctionClosed['v9110'],
	v9230Polkadot: polkadotEvents.auctionClosed['v9230'],
}

export const reserved = {
	name: 'Auctions.Reserved',
	v9110Polkadot: polkadotEvents.reserved['v9110'],
	v9230Polkadot: polkadotEvents.reserved['v9230'],
}

export const unreserved = {
	name: 'Auctions.Unreserved',
	v9110Polkadot: polkadotEvents.unreserved['v9110'],
	v9230Polkadot: polkadotEvents.unreserved['v9230'],
}

export const reserveConfiscated = {
	name: 'Auctions.ReserveConfiscated',
	v9110Polkadot: polkadotEvents.reserveConfiscated['v9110'],
	v9230Polkadot: polkadotEvents.reserveConfiscated['v9230'],
}

export const bidAccepted = {
	name: 'Auctions.BidAccepted',
	v9110Polkadot: polkadotEvents.bidAccepted['v9110'],
	v9230Polkadot: polkadotEvents.bidAccepted['v9230'],
}

export const winningOffset = {
	name: 'Auctions.WinningOffset',
	v9110Polkadot: polkadotEvents.winningOffset['v9110'],
	v9230Polkadot: polkadotEvents.winningOffset['v9230'],
}
