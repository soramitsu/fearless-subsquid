import * as kusamaEvents from '../../kusama/balances/events'


export const newAccount = {
	name: 'Balances.NewAccount',
	v1020Kusama: kusamaEvents.newAccount['v1020'],
}

export const reapedAccount = {
	name: 'Balances.ReapedAccount',
	v1020Kusama: kusamaEvents.reapedAccount['v1020'],
	v1031Kusama: kusamaEvents.reapedAccount['v1031'],
}

export const transfer = {
	name: 'Balances.Transfer',
	v1020Kusama: kusamaEvents.transfer['v1020'],
	v1050Kusama: kusamaEvents.transfer['v1050'],
	v9130Kusama: kusamaEvents.transfer['v9130'],
}

export const balanceSet = {
	name: 'Balances.BalanceSet',
	v1031Kusama: kusamaEvents.balanceSet['v1031'],
	v9130Kusama: kusamaEvents.balanceSet['v9130'],
	v9420Kusama: kusamaEvents.balanceSet['v9420'],
}

export const deposit = {
	name: 'Balances.Deposit',
	v1032Kusama: kusamaEvents.deposit['v1032'],
	v9130Kusama: kusamaEvents.deposit['v9130'],
}

export const endowed = {
	name: 'Balances.Endowed',
	v1050Kusama: kusamaEvents.endowed['v1050'],
	v9130Kusama: kusamaEvents.endowed['v9130'],
}

export const dustLost = {
	name: 'Balances.DustLost',
	v1050Kusama: kusamaEvents.dustLost['v1050'],
	v9130Kusama: kusamaEvents.dustLost['v9130'],
}

export const reserved = {
	name: 'Balances.Reserved',
	v2008Kusama: kusamaEvents.reserved['v2008'],
	v9130Kusama: kusamaEvents.reserved['v9130'],
}

export const unreserved = {
	name: 'Balances.Unreserved',
	v2008Kusama: kusamaEvents.unreserved['v2008'],
	v9130Kusama: kusamaEvents.unreserved['v9130'],
}

export const reserveRepatriated = {
	name: 'Balances.ReserveRepatriated',
	v2008Kusama: kusamaEvents.reserveRepatriated['v2008'],
	v9130Kusama: kusamaEvents.reserveRepatriated['v9130'],
}

export const withdraw = {
	name: 'Balances.Withdraw',
	v9122Kusama: kusamaEvents.withdraw['v9122'],
	v9130Kusama: kusamaEvents.withdraw['v9130'],
}

export const slashed = {
	name: 'Balances.Slashed',
	v9122Kusama: kusamaEvents.slashed['v9122'],
	v9130Kusama: kusamaEvents.slashed['v9130'],
}

export const minted = {
	name: 'Balances.Minted',
	v9420Kusama: kusamaEvents.minted['v9420'],
}

export const burned = {
	name: 'Balances.Burned',
	v9420Kusama: kusamaEvents.burned['v9420'],
}

export const suspended = {
	name: 'Balances.Suspended',
	v9420Kusama: kusamaEvents.suspended['v9420'],
}

export const restored = {
	name: 'Balances.Restored',
	v9420Kusama: kusamaEvents.restored['v9420'],
}

export const upgraded = {
	name: 'Balances.Upgraded',
	v9420Kusama: kusamaEvents.upgraded['v9420'],
}

export const issued = {
	name: 'Balances.Issued',
	v9420Kusama: kusamaEvents.issued['v9420'],
}

export const rescinded = {
	name: 'Balances.Rescinded',
	v9420Kusama: kusamaEvents.rescinded['v9420'],
}

export const locked = {
	name: 'Balances.Locked',
	v9420Kusama: kusamaEvents.locked['v9420'],
}

export const unlocked = {
	name: 'Balances.Unlocked',
	v9420Kusama: kusamaEvents.unlocked['v9420'],
}

export const frozen = {
	name: 'Balances.Frozen',
	v9420Kusama: kusamaEvents.frozen['v9420'],
}

export const thawed = {
	name: 'Balances.Thawed',
	v9420Kusama: kusamaEvents.thawed['v9420'],
}
