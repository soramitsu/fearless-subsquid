import * as kusamaCalls from '../../kusama/balances/calls'


export const transfer = {
	name: 'Balances.transfer',
	v1020Kusama: kusamaCalls.transfer['v1020'],
	v1050Kusama: kusamaCalls.transfer['v1050'],
	v2028Kusama: kusamaCalls.transfer['v2028'],
	v9111Kusama: kusamaCalls.transfer['v9111'],
}

export const setBalance = {
	name: 'Balances.set_balance',
	v1020Kusama: kusamaCalls.setBalance['v1020'],
	v1050Kusama: kusamaCalls.setBalance['v1050'],
	v2028Kusama: kusamaCalls.setBalance['v2028'],
	v9111Kusama: kusamaCalls.setBalance['v9111'],
}

export const forceTransfer = {
	name: 'Balances.force_transfer',
	v1020Kusama: kusamaCalls.forceTransfer['v1020'],
	v1050Kusama: kusamaCalls.forceTransfer['v1050'],
	v2028Kusama: kusamaCalls.forceTransfer['v2028'],
	v9111Kusama: kusamaCalls.forceTransfer['v9111'],
}

export const transferKeepAlive = {
	name: 'Balances.transfer_keep_alive',
	v1020Kusama: kusamaCalls.transferKeepAlive['v1020'],
	v1050Kusama: kusamaCalls.transferKeepAlive['v1050'],
	v2028Kusama: kusamaCalls.transferKeepAlive['v2028'],
	v9111Kusama: kusamaCalls.transferKeepAlive['v9111'],
}

export const transferAll = {
	name: 'Balances.transfer_all',
	v9050Kusama: kusamaCalls.transferAll['v9050'],
	v9111Kusama: kusamaCalls.transferAll['v9111'],
}

export const forceUnreserve = {
	name: 'Balances.force_unreserve',
	v9111Kusama: kusamaCalls.forceUnreserve['v9111'],
}

export const transferAllowDeath = {
	name: 'Balances.transfer_allow_death',
	v9420Kusama: kusamaCalls.transferAllowDeath['v9420'],
}

export const setBalanceDeprecated = {
	name: 'Balances.set_balance_deprecated',
	v9420Kusama: kusamaCalls.setBalanceDeprecated['v9420'],
}

export const upgradeAccounts = {
	name: 'Balances.upgrade_accounts',
	v9420Kusama: kusamaCalls.upgradeAccounts['v9420'],
}

export const forceSetBalance = {
	name: 'Balances.force_set_balance',
	v9420Kusama: kusamaCalls.forceSetBalance['v9420'],
}
