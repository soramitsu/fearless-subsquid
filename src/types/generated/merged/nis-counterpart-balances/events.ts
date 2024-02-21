import * as kusamaEvents from '../../kusama/nis-counterpart-balances/events'


export const endowed = {
	name: 'NisCounterpartBalances.Endowed',
	v9340Kusama: kusamaEvents.endowed['v9340'],
}

export const dustLost = {
	name: 'NisCounterpartBalances.DustLost',
	v9340Kusama: kusamaEvents.dustLost['v9340'],
}

export const transfer = {
	name: 'NisCounterpartBalances.Transfer',
	v9340Kusama: kusamaEvents.transfer['v9340'],
}

export const balanceSet = {
	name: 'NisCounterpartBalances.BalanceSet',
	v9340Kusama: kusamaEvents.balanceSet['v9340'],
	v9420Kusama: kusamaEvents.balanceSet['v9420'],
}

export const reserved = {
	name: 'NisCounterpartBalances.Reserved',
	v9340Kusama: kusamaEvents.reserved['v9340'],
}

export const unreserved = {
	name: 'NisCounterpartBalances.Unreserved',
	v9340Kusama: kusamaEvents.unreserved['v9340'],
}

export const reserveRepatriated = {
	name: 'NisCounterpartBalances.ReserveRepatriated',
	v9340Kusama: kusamaEvents.reserveRepatriated['v9340'],
}

export const deposit = {
	name: 'NisCounterpartBalances.Deposit',
	v9340Kusama: kusamaEvents.deposit['v9340'],
}

export const withdraw = {
	name: 'NisCounterpartBalances.Withdraw',
	v9340Kusama: kusamaEvents.withdraw['v9340'],
}

export const slashed = {
	name: 'NisCounterpartBalances.Slashed',
	v9340Kusama: kusamaEvents.slashed['v9340'],
}

export const minted = {
	name: 'NisCounterpartBalances.Minted',
	v9420Kusama: kusamaEvents.minted['v9420'],
}

export const burned = {
	name: 'NisCounterpartBalances.Burned',
	v9420Kusama: kusamaEvents.burned['v9420'],
}

export const suspended = {
	name: 'NisCounterpartBalances.Suspended',
	v9420Kusama: kusamaEvents.suspended['v9420'],
}

export const restored = {
	name: 'NisCounterpartBalances.Restored',
	v9420Kusama: kusamaEvents.restored['v9420'],
}

export const upgraded = {
	name: 'NisCounterpartBalances.Upgraded',
	v9420Kusama: kusamaEvents.upgraded['v9420'],
}

export const issued = {
	name: 'NisCounterpartBalances.Issued',
	v9420Kusama: kusamaEvents.issued['v9420'],
}

export const rescinded = {
	name: 'NisCounterpartBalances.Rescinded',
	v9420Kusama: kusamaEvents.rescinded['v9420'],
}

export const locked = {
	name: 'NisCounterpartBalances.Locked',
	v9420Kusama: kusamaEvents.locked['v9420'],
}

export const unlocked = {
	name: 'NisCounterpartBalances.Unlocked',
	v9420Kusama: kusamaEvents.unlocked['v9420'],
}

export const frozen = {
	name: 'NisCounterpartBalances.Frozen',
	v9420Kusama: kusamaEvents.frozen['v9420'],
}

export const thawed = {
	name: 'NisCounterpartBalances.Thawed',
	v9420Kusama: kusamaEvents.thawed['v9420'],
}
