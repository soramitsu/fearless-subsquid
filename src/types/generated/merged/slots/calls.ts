import * as kusamaCalls from '../../kusama/slots/calls'


export const newAuction = {
	name: 'Slots.new_auction',
	v1020Kusama: kusamaCalls.newAuction['v1020'],
}

export const bid = {
	name: 'Slots.bid',
	v1020Kusama: kusamaCalls.bid['v1020'],
}

export const bidRenew = {
	name: 'Slots.bid_renew',
	v1020Kusama: kusamaCalls.bidRenew['v1020'],
}

export const setOffboarding = {
	name: 'Slots.set_offboarding',
	v1020Kusama: kusamaCalls.setOffboarding['v1020'],
	v1050Kusama: kusamaCalls.setOffboarding['v1050'],
}

export const fixDeployData = {
	name: 'Slots.fix_deploy_data',
	v1020Kusama: kusamaCalls.fixDeployData['v1020'],
	v1050Kusama: kusamaCalls.fixDeployData['v1050'],
}

export const elaborateDeployData = {
	name: 'Slots.elaborate_deploy_data',
	v1020Kusama: kusamaCalls.elaborateDeployData['v1020'],
}

export const forceLease = {
	name: 'Slots.force_lease',
	v9010Kusama: kusamaCalls.forceLease['v9010'],
}

export const clearAllLeases = {
	name: 'Slots.clear_all_leases',
	v9010Kusama: kusamaCalls.clearAllLeases['v9010'],
}

export const triggerOnboard = {
	name: 'Slots.trigger_onboard',
	v9010Kusama: kusamaCalls.triggerOnboard['v9010'],
}
