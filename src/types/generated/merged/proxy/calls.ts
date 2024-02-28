import * as polkadotCalls from '../../polkadot/proxy/calls'


export const proxy = {
	name: 'Proxy.proxy',
	v5Polkadot: polkadotCalls.proxy['v5'],
	v6Polkadot: polkadotCalls.proxy['v6'],
	v7Polkadot: polkadotCalls.proxy['v7'],
	v9Polkadot: polkadotCalls.proxy['v9'],
	v10Polkadot: polkadotCalls.proxy['v10'],
	v11Polkadot: polkadotCalls.proxy['v11'],
	v13Polkadot: polkadotCalls.proxy['v13'],
	v14Polkadot: polkadotCalls.proxy['v14'],
	v15Polkadot: polkadotCalls.proxy['v15'],
	v17Polkadot: polkadotCalls.proxy['v17'],
	v18Polkadot: polkadotCalls.proxy['v18'],
	v23Polkadot: polkadotCalls.proxy['v23'],
	v24Polkadot: polkadotCalls.proxy['v24'],
	v25Polkadot: polkadotCalls.proxy['v25'],
	v26Polkadot: polkadotCalls.proxy['v26'],
	v28Polkadot: polkadotCalls.proxy['v28'],
	v29Polkadot: polkadotCalls.proxy['v29'],
	v30Polkadot: polkadotCalls.proxy['v30'],
	v9050Polkadot: polkadotCalls.proxy['v9050'],
	v9080Polkadot: polkadotCalls.proxy['v9080'],
	v9090Polkadot: polkadotCalls.proxy['v9090'],
	v9100Polkadot: polkadotCalls.proxy['v9100'],
	v9110Polkadot: polkadotCalls.proxy['v9110'],
	v9140Polkadot: polkadotCalls.proxy['v9140'],
	v9170Polkadot: polkadotCalls.proxy['v9170'],
	v9180Polkadot: polkadotCalls.proxy['v9180'],
	v9190Polkadot: polkadotCalls.proxy['v9190'],
	v9220Polkadot: polkadotCalls.proxy['v9220'],
	v9230Polkadot: polkadotCalls.proxy['v9230'],
	v9250Polkadot: polkadotCalls.proxy['v9250'],
	v9270Polkadot: polkadotCalls.proxy['v9270'],
	v9280Polkadot: polkadotCalls.proxy['v9280'],
	v9291Polkadot: polkadotCalls.proxy['v9291'],
	v9300Polkadot: polkadotCalls.proxy['v9300'],
	v9340Polkadot: polkadotCalls.proxy['v9340'],
	v9370Polkadot: polkadotCalls.proxy['v9370'],
	v9420Polkadot: polkadotCalls.proxy['v9420'],
	v9430Polkadot: polkadotCalls.proxy['v9430'],
	v1000001Polkadot: polkadotCalls.proxy['v1000001'],
	v1001002Polkadot: polkadotCalls.proxy['v1001002'],
}

export const addProxy = {
	name: 'Proxy.add_proxy',
	v5Polkadot: polkadotCalls.addProxy['v5'],
	v23Polkadot: polkadotCalls.addProxy['v23'],
	v9110Polkadot: polkadotCalls.addProxy['v9110'],
	v9291Polkadot: polkadotCalls.addProxy['v9291'],
	v9420Polkadot: polkadotCalls.addProxy['v9420'],
}

export const removeProxy = {
	name: 'Proxy.remove_proxy',
	v5Polkadot: polkadotCalls.removeProxy['v5'],
	v23Polkadot: polkadotCalls.removeProxy['v23'],
	v9110Polkadot: polkadotCalls.removeProxy['v9110'],
	v9291Polkadot: polkadotCalls.removeProxy['v9291'],
	v9420Polkadot: polkadotCalls.removeProxy['v9420'],
}

export const removeProxies = {
	name: 'Proxy.remove_proxies',
	v5Polkadot: polkadotCalls.removeProxies['v5'],
}

export const anonymous = {
	name: 'Proxy.anonymous',
	v5Polkadot: polkadotCalls.anonymous['v5'],
	v23Polkadot: polkadotCalls.anonymous['v23'],
	v9110Polkadot: polkadotCalls.anonymous['v9110'],
}

export const killAnonymous = {
	name: 'Proxy.kill_anonymous',
	v5Polkadot: polkadotCalls.killAnonymous['v5'],
	v9110Polkadot: polkadotCalls.killAnonymous['v9110'],
	v9291Polkadot: polkadotCalls.killAnonymous['v9291'],
}

export const announce = {
	name: 'Proxy.announce',
	v23Polkadot: polkadotCalls.announce['v23'],
	v9291Polkadot: polkadotCalls.announce['v9291'],
}

export const removeAnnouncement = {
	name: 'Proxy.remove_announcement',
	v23Polkadot: polkadotCalls.removeAnnouncement['v23'],
	v9291Polkadot: polkadotCalls.removeAnnouncement['v9291'],
}

export const rejectAnnouncement = {
	name: 'Proxy.reject_announcement',
	v23Polkadot: polkadotCalls.rejectAnnouncement['v23'],
	v9291Polkadot: polkadotCalls.rejectAnnouncement['v9291'],
}

export const proxyAnnounced = {
	name: 'Proxy.proxy_announced',
	v23Polkadot: polkadotCalls.proxyAnnounced['v23'],
	v24Polkadot: polkadotCalls.proxyAnnounced['v24'],
	v25Polkadot: polkadotCalls.proxyAnnounced['v25'],
	v26Polkadot: polkadotCalls.proxyAnnounced['v26'],
	v28Polkadot: polkadotCalls.proxyAnnounced['v28'],
	v29Polkadot: polkadotCalls.proxyAnnounced['v29'],
	v30Polkadot: polkadotCalls.proxyAnnounced['v30'],
	v9050Polkadot: polkadotCalls.proxyAnnounced['v9050'],
	v9080Polkadot: polkadotCalls.proxyAnnounced['v9080'],
	v9090Polkadot: polkadotCalls.proxyAnnounced['v9090'],
	v9100Polkadot: polkadotCalls.proxyAnnounced['v9100'],
	v9110Polkadot: polkadotCalls.proxyAnnounced['v9110'],
	v9140Polkadot: polkadotCalls.proxyAnnounced['v9140'],
	v9170Polkadot: polkadotCalls.proxyAnnounced['v9170'],
	v9180Polkadot: polkadotCalls.proxyAnnounced['v9180'],
	v9190Polkadot: polkadotCalls.proxyAnnounced['v9190'],
	v9220Polkadot: polkadotCalls.proxyAnnounced['v9220'],
	v9230Polkadot: polkadotCalls.proxyAnnounced['v9230'],
	v9250Polkadot: polkadotCalls.proxyAnnounced['v9250'],
	v9270Polkadot: polkadotCalls.proxyAnnounced['v9270'],
	v9280Polkadot: polkadotCalls.proxyAnnounced['v9280'],
	v9291Polkadot: polkadotCalls.proxyAnnounced['v9291'],
	v9300Polkadot: polkadotCalls.proxyAnnounced['v9300'],
	v9340Polkadot: polkadotCalls.proxyAnnounced['v9340'],
	v9370Polkadot: polkadotCalls.proxyAnnounced['v9370'],
	v9420Polkadot: polkadotCalls.proxyAnnounced['v9420'],
	v9430Polkadot: polkadotCalls.proxyAnnounced['v9430'],
	v1000001Polkadot: polkadotCalls.proxyAnnounced['v1000001'],
	v1001002Polkadot: polkadotCalls.proxyAnnounced['v1001002'],
}

export const createPure = {
	name: 'Proxy.create_pure',
	v9300Polkadot: polkadotCalls.createPure['v9300'],
	v9420Polkadot: polkadotCalls.createPure['v9420'],
}

export const killPure = {
	name: 'Proxy.kill_pure',
	v9300Polkadot: polkadotCalls.killPure['v9300'],
	v9420Polkadot: polkadotCalls.killPure['v9420'],
}
