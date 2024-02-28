import * as polkadotStorage from '../../polkadot/fast-unstake/storage'


export const head = {
	name: '',
	v9300Polkadot: polkadotStorage.head['v9300'],
	v9340Polkadot: polkadotStorage.head['v9340'],
}

export const queue = {
	name: '',
	v9300Polkadot: polkadotStorage.queue['v9300'],
}

export const counterForQueue = {
	name: '',
	v9300Polkadot: polkadotStorage.counterForQueue['v9300'],
}

export const erasToCheckPerBlock = {
	name: '',
	v9300Polkadot: polkadotStorage.erasToCheckPerBlock['v9300'],
}
