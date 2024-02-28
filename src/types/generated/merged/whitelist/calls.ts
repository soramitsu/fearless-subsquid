import * as polkadotCalls from '../../polkadot/whitelist/calls'


export const whitelistCall = {
	name: 'Whitelist.whitelist_call',
	v9420Polkadot: polkadotCalls.whitelistCall['v9420'],
}

export const removeWhitelistedCall = {
	name: 'Whitelist.remove_whitelisted_call',
	v9420Polkadot: polkadotCalls.removeWhitelistedCall['v9420'],
}

export const dispatchWhitelistedCall = {
	name: 'Whitelist.dispatch_whitelisted_call',
	v9420Polkadot: polkadotCalls.dispatchWhitelistedCall['v9420'],
}

export const dispatchWhitelistedCallWithPreimage = {
	name: 'Whitelist.dispatch_whitelisted_call_with_preimage',
	v9420Polkadot: polkadotCalls.dispatchWhitelistedCallWithPreimage['v9420'],
	v9430Polkadot: polkadotCalls.dispatchWhitelistedCallWithPreimage['v9430'],
	v1000001Polkadot: polkadotCalls.dispatchWhitelistedCallWithPreimage['v1000001'],
	v1001002Polkadot: polkadotCalls.dispatchWhitelistedCallWithPreimage['v1001002'],
}
