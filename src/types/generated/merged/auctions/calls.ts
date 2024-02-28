import * as polkadotCalls from '../../polkadot/auctions/calls'


export const newAuction = {
	name: 'Auctions.new_auction',
	v9110Polkadot: polkadotCalls.newAuction['v9110'],
}

export const bid = {
	name: 'Auctions.bid',
	v9110Polkadot: polkadotCalls.bid['v9110'],
}

export const cancelAuction = {
	name: 'Auctions.cancel_auction',
	v9110Polkadot: polkadotCalls.cancelAuction['v9110'],
}
