import * as polkadotCalls from '../../polkadot/slots/calls'


export const newAuction = {
	name: 'Slots.new_auction',
	v0Polkadot: polkadotCalls.newAuction['v0'],
}

export const bid = {
	name: 'Slots.bid',
	v0Polkadot: polkadotCalls.bid['v0'],
}

export const bidRenew = {
	name: 'Slots.bid_renew',
	v0Polkadot: polkadotCalls.bidRenew['v0'],
}

export const setOffboarding = {
	name: 'Slots.set_offboarding',
	v0Polkadot: polkadotCalls.setOffboarding['v0'],
}

export const fixDeployData = {
	name: 'Slots.fix_deploy_data',
	v0Polkadot: polkadotCalls.fixDeployData['v0'],
}

export const elaborateDeployData = {
	name: 'Slots.elaborate_deploy_data',
	v0Polkadot: polkadotCalls.elaborateDeployData['v0'],
}

export const forceLease = {
	name: 'Slots.force_lease',
	v9110Polkadot: polkadotCalls.forceLease['v9110'],
}

export const clearAllLeases = {
	name: 'Slots.clear_all_leases',
	v9110Polkadot: polkadotCalls.clearAllLeases['v9110'],
}

export const triggerOnboard = {
	name: 'Slots.trigger_onboard',
	v9110Polkadot: polkadotCalls.triggerOnboard['v9110'],
}
