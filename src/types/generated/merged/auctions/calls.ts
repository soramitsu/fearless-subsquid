import * as kusamaCalls from '../../kusama/auctions/calls'


export const newAuction = {
	name: 'Auctions.new_auction',
	v9010Kusama: kusamaCalls.newAuction['v9010'],
}

export const bid = {
	name: 'Auctions.bid',
	v9010Kusama: kusamaCalls.bid['v9010'],
}

export const cancelAuction = {
	name: 'Auctions.cancel_auction',
	v9010Kusama: kusamaCalls.cancelAuction['v9010'],
}
