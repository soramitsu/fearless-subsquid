import * as polkadotStorage from '../../polkadot/proxy/storage'


export const proxies = {
	name: '',
	v5Polkadot: polkadotStorage.proxies['v5'],
	v23Polkadot: polkadotStorage.proxies['v23'],
	v9110Polkadot: polkadotStorage.proxies['v9110'],
	v9420Polkadot: polkadotStorage.proxies['v9420'],
}

export const announcements = {
	name: '',
	v23Polkadot: polkadotStorage.announcements['v23'],
}
