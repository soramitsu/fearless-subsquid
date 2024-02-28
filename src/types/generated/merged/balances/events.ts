import * as polkadotEvents from '../../polkadot/balances/events'


export const endowed = {
	name: 'Balances.Endowed',
	v0Polkadot: polkadotEvents.endowed['v0'],
	v9140Polkadot: polkadotEvents.endowed['v9140'],
}

export const dustLost = {
	name: 'Balances.DustLost',
	v0Polkadot: polkadotEvents.dustLost['v0'],
	v9140Polkadot: polkadotEvents.dustLost['v9140'],
}

export const transfer = {
	name: 'Balances.Transfer',
	v0Polkadot: polkadotEvents.transfer['v0'],
	v9140Polkadot: polkadotEvents.transfer['v9140'],
}

export const balanceSet = {
	name: 'Balances.BalanceSet',
	v0Polkadot: polkadotEvents.balanceSet['v0'],
	v9140Polkadot: polkadotEvents.balanceSet['v9140'],
	v9420Polkadot: polkadotEvents.balanceSet['v9420'],
}

export const deposit = {
	name: 'Balances.Deposit',
	v0Polkadot: polkadotEvents.deposit['v0'],
	v9140Polkadot: polkadotEvents.deposit['v9140'],
}

export const reserved = {
	name: 'Balances.Reserved',
	v8Polkadot: polkadotEvents.reserved['v8'],
	v9140Polkadot: polkadotEvents.reserved['v9140'],
}

export const unreserved = {
	name: 'Balances.Unreserved',
	v8Polkadot: polkadotEvents.unreserved['v8'],
	v9140Polkadot: polkadotEvents.unreserved['v9140'],
}

export const reserveRepatriated = {
	name: 'Balances.ReserveRepatriated',
	v8Polkadot: polkadotEvents.reserveRepatriated['v8'],
	v9140Polkadot: polkadotEvents.reserveRepatriated['v9140'],
}

export const withdraw = {
	name: 'Balances.Withdraw',
	v9122Polkadot: polkadotEvents.withdraw['v9122'],
	v9140Polkadot: polkadotEvents.withdraw['v9140'],
}

export const slashed = {
	name: 'Balances.Slashed',
	v9122Polkadot: polkadotEvents.slashed['v9122'],
	v9140Polkadot: polkadotEvents.slashed['v9140'],
}

export const minted = {
	name: 'Balances.Minted',
	v9420Polkadot: polkadotEvents.minted['v9420'],
}

export const burned = {
	name: 'Balances.Burned',
	v9420Polkadot: polkadotEvents.burned['v9420'],
}

export const suspended = {
	name: 'Balances.Suspended',
	v9420Polkadot: polkadotEvents.suspended['v9420'],
}

export const restored = {
	name: 'Balances.Restored',
	v9420Polkadot: polkadotEvents.restored['v9420'],
}

export const upgraded = {
	name: 'Balances.Upgraded',
	v9420Polkadot: polkadotEvents.upgraded['v9420'],
}

export const issued = {
	name: 'Balances.Issued',
	v9420Polkadot: polkadotEvents.issued['v9420'],
}

export const rescinded = {
	name: 'Balances.Rescinded',
	v9420Polkadot: polkadotEvents.rescinded['v9420'],
}

export const locked = {
	name: 'Balances.Locked',
	v9420Polkadot: polkadotEvents.locked['v9420'],
}

export const unlocked = {
	name: 'Balances.Unlocked',
	v9420Polkadot: polkadotEvents.unlocked['v9420'],
}

export const frozen = {
	name: 'Balances.Frozen',
	v9420Polkadot: polkadotEvents.frozen['v9420'],
}

export const thawed = {
	name: 'Balances.Thawed',
	v9420Polkadot: polkadotEvents.thawed['v9420'],
}
