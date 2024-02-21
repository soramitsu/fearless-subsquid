import * as kusamaEvents from '../../kusama/auctions/events'


export const auctionStarted = {
	name: 'Auctions.AuctionStarted',
	v9010Kusama: kusamaEvents.auctionStarted['v9010'],
	v9230Kusama: kusamaEvents.auctionStarted['v9230'],
}

export const auctionClosed = {
	name: 'Auctions.AuctionClosed',
	v9010Kusama: kusamaEvents.auctionClosed['v9010'],
	v9230Kusama: kusamaEvents.auctionClosed['v9230'],
}

export const wonDeploy = {
	name: 'Auctions.WonDeploy',
	v9010Kusama: kusamaEvents.wonDeploy['v9010'],
}

export const wonRenewal = {
	name: 'Auctions.WonRenewal',
	v9010Kusama: kusamaEvents.wonRenewal['v9010'],
}

export const reserved = {
	name: 'Auctions.Reserved',
	v9010Kusama: kusamaEvents.reserved['v9010'],
	v9230Kusama: kusamaEvents.reserved['v9230'],
}

export const unreserved = {
	name: 'Auctions.Unreserved',
	v9010Kusama: kusamaEvents.unreserved['v9010'],
	v9230Kusama: kusamaEvents.unreserved['v9230'],
}

export const reserveConfiscated = {
	name: 'Auctions.ReserveConfiscated',
	v9010Kusama: kusamaEvents.reserveConfiscated['v9010'],
	v9230Kusama: kusamaEvents.reserveConfiscated['v9230'],
}

export const bidAccepted = {
	name: 'Auctions.BidAccepted',
	v9010Kusama: kusamaEvents.bidAccepted['v9010'],
	v9230Kusama: kusamaEvents.bidAccepted['v9230'],
}

export const winningOffset = {
	name: 'Auctions.WinningOffset',
	v9010Kusama: kusamaEvents.winningOffset['v9010'],
	v9230Kusama: kusamaEvents.winningOffset['v9230'],
}
