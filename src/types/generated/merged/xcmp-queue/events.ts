import * as soraPolkadotEvents from '../../sora-polkadot/xcmp-queue/events'
import * as soraKusamaEvents from '../../sora-kusama/xcmp-queue/events'


export const success = {
	name: 'XcmpQueue.Success',
	v1SoraPolkadot: soraPolkadotEvents.success['v1'],
	v1SoraKusama: soraKusamaEvents.success['v1'],
	v7SoraKusama: soraKusamaEvents.success['v7'],
}

export const fail = {
	name: 'XcmpQueue.Fail',
	v1SoraPolkadot: soraPolkadotEvents.fail['v1'],
	v10SoraPolkadot: soraPolkadotEvents.fail['v10'],
	v1SoraKusama: soraKusamaEvents.fail['v1'],
	v7SoraKusama: soraKusamaEvents.fail['v7'],
}

export const badVersion = {
	name: 'XcmpQueue.BadVersion',
	v1SoraPolkadot: soraPolkadotEvents.badVersion['v1'],
	v1SoraKusama: soraKusamaEvents.badVersion['v1'],
	v7SoraKusama: soraKusamaEvents.badVersion['v7'],
}

export const badFormat = {
	name: 'XcmpQueue.BadFormat',
	v1SoraPolkadot: soraPolkadotEvents.badFormat['v1'],
	v1SoraKusama: soraKusamaEvents.badFormat['v1'],
	v7SoraKusama: soraKusamaEvents.badFormat['v7'],
}

export const upwardMessageSent = {
	name: 'XcmpQueue.UpwardMessageSent',
	v1SoraPolkadot: soraPolkadotEvents.upwardMessageSent['v1'],
	v1SoraKusama: soraKusamaEvents.upwardMessageSent['v1'],
}

export const xcmpMessageSent = {
	name: 'XcmpQueue.XcmpMessageSent',
	v1SoraPolkadot: soraPolkadotEvents.xcmpMessageSent['v1'],
	v1SoraKusama: soraKusamaEvents.xcmpMessageSent['v1'],
	v7SoraKusama: soraKusamaEvents.xcmpMessageSent['v7'],
}

export const overweightEnqueued = {
	name: 'XcmpQueue.OverweightEnqueued',
	v1SoraPolkadot: soraPolkadotEvents.overweightEnqueued['v1'],
	v7SoraKusama: soraKusamaEvents.overweightEnqueued['v7'],
}

export const overweightServiced = {
	name: 'XcmpQueue.OverweightServiced',
	v1SoraPolkadot: soraPolkadotEvents.overweightServiced['v1'],
	v7SoraKusama: soraKusamaEvents.overweightServiced['v7'],
}
