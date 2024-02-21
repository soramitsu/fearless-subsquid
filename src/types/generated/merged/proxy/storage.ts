import * as kusamaStorage from '../../kusama/proxy/storage'


export const proxies = {
	name: '',
	v2005Kusama: kusamaStorage.proxies['v2005'],
	v2023Kusama: kusamaStorage.proxies['v2023'],
	v9180Kusama: kusamaStorage.proxies['v9180'],
	v9420Kusama: kusamaStorage.proxies['v9420'],
}

export const announcements = {
	name: '',
	v2023Kusama: kusamaStorage.announcements['v2023'],
}
