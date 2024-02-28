import * as polkadotStorage from '../../polkadot/vesting/storage'


export const vesting = {
	name: '',
	v0Polkadot: polkadotStorage.vesting['v0'],
	v9110Polkadot: polkadotStorage.vesting['v9110'],
}

export const storageVersion = {
	name: '',
	v9110Polkadot: polkadotStorage.storageVersion['v9110'],
}
