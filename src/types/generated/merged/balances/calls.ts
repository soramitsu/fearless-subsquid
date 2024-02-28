import * as polkadotCalls from '../../polkadot/balances/calls'


export const transfer = {
	name: 'Balances.transfer',
	v0Polkadot: polkadotCalls.transfer['v0'],
	v28Polkadot: polkadotCalls.transfer['v28'],
	v9110Polkadot: polkadotCalls.transfer['v9110'],
}

export const setBalance = {
	name: 'Balances.set_balance',
	v0Polkadot: polkadotCalls.setBalance['v0'],
	v28Polkadot: polkadotCalls.setBalance['v28'],
	v9110Polkadot: polkadotCalls.setBalance['v9110'],
}

export const forceTransfer = {
	name: 'Balances.force_transfer',
	v0Polkadot: polkadotCalls.forceTransfer['v0'],
	v28Polkadot: polkadotCalls.forceTransfer['v28'],
	v9110Polkadot: polkadotCalls.forceTransfer['v9110'],
}

export const transferKeepAlive = {
	name: 'Balances.transfer_keep_alive',
	v0Polkadot: polkadotCalls.transferKeepAlive['v0'],
	v28Polkadot: polkadotCalls.transferKeepAlive['v28'],
	v9110Polkadot: polkadotCalls.transferKeepAlive['v9110'],
}

export const transferAll = {
	name: 'Balances.transfer_all',
	v9050Polkadot: polkadotCalls.transferAll['v9050'],
	v9110Polkadot: polkadotCalls.transferAll['v9110'],
}

export const forceUnreserve = {
	name: 'Balances.force_unreserve',
	v9110Polkadot: polkadotCalls.forceUnreserve['v9110'],
}

export const transferAllowDeath = {
	name: 'Balances.transfer_allow_death',
	v9420Polkadot: polkadotCalls.transferAllowDeath['v9420'],
}

export const setBalanceDeprecated = {
	name: 'Balances.set_balance_deprecated',
	v9420Polkadot: polkadotCalls.setBalanceDeprecated['v9420'],
}

export const upgradeAccounts = {
	name: 'Balances.upgrade_accounts',
	v9420Polkadot: polkadotCalls.upgradeAccounts['v9420'],
}

export const forceSetBalance = {
	name: 'Balances.force_set_balance',
	v9420Polkadot: polkadotCalls.forceSetBalance['v9420'],
}
