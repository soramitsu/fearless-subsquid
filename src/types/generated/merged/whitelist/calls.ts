import * as kusamaCalls from '../../kusama/whitelist/calls'


export const whitelistCall = {
	name: 'Whitelist.whitelist_call',
	v9320Kusama: kusamaCalls.whitelistCall['v9320'],
}

export const removeWhitelistedCall = {
	name: 'Whitelist.remove_whitelisted_call',
	v9320Kusama: kusamaCalls.removeWhitelistedCall['v9320'],
}

export const dispatchWhitelistedCall = {
	name: 'Whitelist.dispatch_whitelisted_call',
	v9320Kusama: kusamaCalls.dispatchWhitelistedCall['v9320'],
	v9350Kusama: kusamaCalls.dispatchWhitelistedCall['v9350'],
}

export const dispatchWhitelistedCallWithPreimage = {
	name: 'Whitelist.dispatch_whitelisted_call_with_preimage',
	v9320Kusama: kusamaCalls.dispatchWhitelistedCallWithPreimage['v9320'],
	v9340Kusama: kusamaCalls.dispatchWhitelistedCallWithPreimage['v9340'],
	v9350Kusama: kusamaCalls.dispatchWhitelistedCallWithPreimage['v9350'],
	v9370Kusama: kusamaCalls.dispatchWhitelistedCallWithPreimage['v9370'],
	v9381Kusama: kusamaCalls.dispatchWhitelistedCallWithPreimage['v9381'],
	v9420Kusama: kusamaCalls.dispatchWhitelistedCallWithPreimage['v9420'],
	v9430Kusama: kusamaCalls.dispatchWhitelistedCallWithPreimage['v9430'],
	v1000000Kusama: kusamaCalls.dispatchWhitelistedCallWithPreimage['v1000000'],
	v1001000Kusama: kusamaCalls.dispatchWhitelistedCallWithPreimage['v1001000'],
}
