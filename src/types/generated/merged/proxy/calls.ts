import * as kusamaCalls from '../../kusama/proxy/calls'


export const proxy = {
	name: 'Proxy.proxy',
	v2005Kusama: kusamaCalls.proxy['v2005'],
	v2007Kusama: kusamaCalls.proxy['v2007'],
	v2011Kusama: kusamaCalls.proxy['v2011'],
	v2013Kusama: kusamaCalls.proxy['v2013'],
	v2015Kusama: kusamaCalls.proxy['v2015'],
	v2022Kusama: kusamaCalls.proxy['v2022'],
	v2023Kusama: kusamaCalls.proxy['v2023'],
	v2024Kusama: kusamaCalls.proxy['v2024'],
	v2025Kusama: kusamaCalls.proxy['v2025'],
	v2026Kusama: kusamaCalls.proxy['v2026'],
	v2028Kusama: kusamaCalls.proxy['v2028'],
	v2029Kusama: kusamaCalls.proxy['v2029'],
	v2030Kusama: kusamaCalls.proxy['v2030'],
	v9010Kusama: kusamaCalls.proxy['v9010'],
	v9030Kusama: kusamaCalls.proxy['v9030'],
	v9040Kusama: kusamaCalls.proxy['v9040'],
	v9050Kusama: kusamaCalls.proxy['v9050'],
	v9080Kusama: kusamaCalls.proxy['v9080'],
	v9090Kusama: kusamaCalls.proxy['v9090'],
	v9100Kusama: kusamaCalls.proxy['v9100'],
	v9111Kusama: kusamaCalls.proxy['v9111'],
	v9122Kusama: kusamaCalls.proxy['v9122'],
	v9130Kusama: kusamaCalls.proxy['v9130'],
	v9160Kusama: kusamaCalls.proxy['v9160'],
	v9170Kusama: kusamaCalls.proxy['v9170'],
	v9180Kusama: kusamaCalls.proxy['v9180'],
	v9190Kusama: kusamaCalls.proxy['v9190'],
	v9220Kusama: kusamaCalls.proxy['v9220'],
	v9230Kusama: kusamaCalls.proxy['v9230'],
	v9250Kusama: kusamaCalls.proxy['v9250'],
	v9271Kusama: kusamaCalls.proxy['v9271'],
	v9291Kusama: kusamaCalls.proxy['v9291'],
	v9300Kusama: kusamaCalls.proxy['v9300'],
	v9320Kusama: kusamaCalls.proxy['v9320'],
	v9340Kusama: kusamaCalls.proxy['v9340'],
	v9350Kusama: kusamaCalls.proxy['v9350'],
	v9370Kusama: kusamaCalls.proxy['v9370'],
	v9381Kusama: kusamaCalls.proxy['v9381'],
	v9420Kusama: kusamaCalls.proxy['v9420'],
	v9430Kusama: kusamaCalls.proxy['v9430'],
	v1000000Kusama: kusamaCalls.proxy['v1000000'],
	v1001000Kusama: kusamaCalls.proxy['v1001000'],
}

export const addProxy = {
	name: 'Proxy.add_proxy',
	v2005Kusama: kusamaCalls.addProxy['v2005'],
	v2023Kusama: kusamaCalls.addProxy['v2023'],
	v9180Kusama: kusamaCalls.addProxy['v9180'],
	v9291Kusama: kusamaCalls.addProxy['v9291'],
	v9420Kusama: kusamaCalls.addProxy['v9420'],
}

export const removeProxy = {
	name: 'Proxy.remove_proxy',
	v2005Kusama: kusamaCalls.removeProxy['v2005'],
	v2023Kusama: kusamaCalls.removeProxy['v2023'],
	v9180Kusama: kusamaCalls.removeProxy['v9180'],
	v9291Kusama: kusamaCalls.removeProxy['v9291'],
	v9420Kusama: kusamaCalls.removeProxy['v9420'],
}

export const removeProxies = {
	name: 'Proxy.remove_proxies',
	v2005Kusama: kusamaCalls.removeProxies['v2005'],
}

export const anonymous = {
	name: 'Proxy.anonymous',
	v2005Kusama: kusamaCalls.anonymous['v2005'],
	v2023Kusama: kusamaCalls.anonymous['v2023'],
	v9180Kusama: kusamaCalls.anonymous['v9180'],
}

export const killAnonymous = {
	name: 'Proxy.kill_anonymous',
	v2005Kusama: kusamaCalls.killAnonymous['v2005'],
	v9180Kusama: kusamaCalls.killAnonymous['v9180'],
	v9291Kusama: kusamaCalls.killAnonymous['v9291'],
}

export const announce = {
	name: 'Proxy.announce',
	v2023Kusama: kusamaCalls.announce['v2023'],
	v9291Kusama: kusamaCalls.announce['v9291'],
}

export const removeAnnouncement = {
	name: 'Proxy.remove_announcement',
	v2023Kusama: kusamaCalls.removeAnnouncement['v2023'],
	v9291Kusama: kusamaCalls.removeAnnouncement['v9291'],
}

export const rejectAnnouncement = {
	name: 'Proxy.reject_announcement',
	v2023Kusama: kusamaCalls.rejectAnnouncement['v2023'],
	v9291Kusama: kusamaCalls.rejectAnnouncement['v9291'],
}

export const proxyAnnounced = {
	name: 'Proxy.proxy_announced',
	v2023Kusama: kusamaCalls.proxyAnnounced['v2023'],
	v2024Kusama: kusamaCalls.proxyAnnounced['v2024'],
	v2025Kusama: kusamaCalls.proxyAnnounced['v2025'],
	v2026Kusama: kusamaCalls.proxyAnnounced['v2026'],
	v2028Kusama: kusamaCalls.proxyAnnounced['v2028'],
	v2029Kusama: kusamaCalls.proxyAnnounced['v2029'],
	v2030Kusama: kusamaCalls.proxyAnnounced['v2030'],
	v9010Kusama: kusamaCalls.proxyAnnounced['v9010'],
	v9030Kusama: kusamaCalls.proxyAnnounced['v9030'],
	v9040Kusama: kusamaCalls.proxyAnnounced['v9040'],
	v9050Kusama: kusamaCalls.proxyAnnounced['v9050'],
	v9080Kusama: kusamaCalls.proxyAnnounced['v9080'],
	v9090Kusama: kusamaCalls.proxyAnnounced['v9090'],
	v9100Kusama: kusamaCalls.proxyAnnounced['v9100'],
	v9111Kusama: kusamaCalls.proxyAnnounced['v9111'],
	v9122Kusama: kusamaCalls.proxyAnnounced['v9122'],
	v9130Kusama: kusamaCalls.proxyAnnounced['v9130'],
	v9160Kusama: kusamaCalls.proxyAnnounced['v9160'],
	v9170Kusama: kusamaCalls.proxyAnnounced['v9170'],
	v9180Kusama: kusamaCalls.proxyAnnounced['v9180'],
	v9190Kusama: kusamaCalls.proxyAnnounced['v9190'],
	v9220Kusama: kusamaCalls.proxyAnnounced['v9220'],
	v9230Kusama: kusamaCalls.proxyAnnounced['v9230'],
	v9250Kusama: kusamaCalls.proxyAnnounced['v9250'],
	v9271Kusama: kusamaCalls.proxyAnnounced['v9271'],
	v9291Kusama: kusamaCalls.proxyAnnounced['v9291'],
	v9300Kusama: kusamaCalls.proxyAnnounced['v9300'],
	v9320Kusama: kusamaCalls.proxyAnnounced['v9320'],
	v9340Kusama: kusamaCalls.proxyAnnounced['v9340'],
	v9350Kusama: kusamaCalls.proxyAnnounced['v9350'],
	v9370Kusama: kusamaCalls.proxyAnnounced['v9370'],
	v9381Kusama: kusamaCalls.proxyAnnounced['v9381'],
	v9420Kusama: kusamaCalls.proxyAnnounced['v9420'],
	v9430Kusama: kusamaCalls.proxyAnnounced['v9430'],
	v1000000Kusama: kusamaCalls.proxyAnnounced['v1000000'],
	v1001000Kusama: kusamaCalls.proxyAnnounced['v1001000'],
}

export const createPure = {
	name: 'Proxy.create_pure',
	v9300Kusama: kusamaCalls.createPure['v9300'],
	v9420Kusama: kusamaCalls.createPure['v9420'],
}

export const killPure = {
	name: 'Proxy.kill_pure',
	v9300Kusama: kusamaCalls.killPure['v9300'],
	v9420Kusama: kusamaCalls.killPure['v9420'],
}
