import * as kusamaCalls from '../../kusama/nis-counterpart-balances/calls'


export const transfer = {
	name: 'NisCounterpartBalances.transfer',
	v9340Kusama: kusamaCalls.transfer['v9340'],
}

export const setBalance = {
	name: 'NisCounterpartBalances.set_balance',
	v9340Kusama: kusamaCalls.setBalance['v9340'],
}

export const forceTransfer = {
	name: 'NisCounterpartBalances.force_transfer',
	v9340Kusama: kusamaCalls.forceTransfer['v9340'],
}

export const transferKeepAlive = {
	name: 'NisCounterpartBalances.transfer_keep_alive',
	v9340Kusama: kusamaCalls.transferKeepAlive['v9340'],
}

export const transferAll = {
	name: 'NisCounterpartBalances.transfer_all',
	v9340Kusama: kusamaCalls.transferAll['v9340'],
}

export const forceUnreserve = {
	name: 'NisCounterpartBalances.force_unreserve',
	v9340Kusama: kusamaCalls.forceUnreserve['v9340'],
}

export const transferAllowDeath = {
	name: 'NisCounterpartBalances.transfer_allow_death',
	v9420Kusama: kusamaCalls.transferAllowDeath['v9420'],
}

export const setBalanceDeprecated = {
	name: 'NisCounterpartBalances.set_balance_deprecated',
	v9420Kusama: kusamaCalls.setBalanceDeprecated['v9420'],
}

export const upgradeAccounts = {
	name: 'NisCounterpartBalances.upgrade_accounts',
	v9420Kusama: kusamaCalls.upgradeAccounts['v9420'],
}

export const forceSetBalance = {
	name: 'NisCounterpartBalances.force_set_balance',
	v9420Kusama: kusamaCalls.forceSetBalance['v9420'],
}
