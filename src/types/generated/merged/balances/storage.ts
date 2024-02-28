import * as polkadotStorage from '../../polkadot/balances/storage'


export const totalIssuance = {
	name: '',
	v0Polkadot: polkadotStorage.totalIssuance['v0'],
}

export const account = {
	name: '',
	v0Polkadot: polkadotStorage.account['v0'],
	v9420Polkadot: polkadotStorage.account['v9420'],
}

export const locks = {
	name: '',
	v0Polkadot: polkadotStorage.locks['v0'],
}

export const storageVersion = {
	name: '',
	v0Polkadot: polkadotStorage.storageVersion['v0'],
	v9110Polkadot: polkadotStorage.storageVersion['v9110'],
}

export const reserves = {
	name: '',
	v9050Polkadot: polkadotStorage.reserves['v9050'],
}

export const inactiveIssuance = {
	name: '',
	v9340Polkadot: polkadotStorage.inactiveIssuance['v9340'],
}

export const holds = {
	name: '',
	v9420Polkadot: polkadotStorage.holds['v9420'],
	v1000001Polkadot: polkadotStorage.holds['v1000001'],
	v1001002Polkadot: polkadotStorage.holds['v1001002'],
}

export const freezes = {
	name: '',
	v9420Polkadot: polkadotStorage.freezes['v9420'],
	v1001002Polkadot: polkadotStorage.freezes['v1001002'],
}
