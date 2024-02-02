import * as soraPolkadotEvents from '../../sora-polkadot/xcmp-queue/events'
import * as soraKusamaEvents from '../../sora-kusama/xcmp-queue/events'


export const success = {
	name: 'XcmpQueue.Success',
	soraPolkadotV1: soraPolkadotEvents.success['v1'],
	soraKusamaV1: soraKusamaEvents.success['v1'],
	soraKusamaV7: soraKusamaEvents.success['v7'],
}

export const fail = {
	name: 'XcmpQueue.Fail',
	soraPolkadotV1: soraPolkadotEvents.fail['v1'],
	soraPolkadotV10: soraPolkadotEvents.fail['v10'],
	soraKusamaV1: soraKusamaEvents.fail['v1'],
	soraKusamaV7: soraKusamaEvents.fail['v7'],
}

export const badVersion = {
	name: 'XcmpQueue.BadVersion',
	soraPolkadotV1: soraPolkadotEvents.badVersion['v1'],
	soraKusamaV1: soraKusamaEvents.badVersion['v1'],
	soraKusamaV7: soraKusamaEvents.badVersion['v7'],
}

export const badFormat = {
	name: 'XcmpQueue.BadFormat',
	soraPolkadotV1: soraPolkadotEvents.badFormat['v1'],
	soraKusamaV1: soraKusamaEvents.badFormat['v1'],
	soraKusamaV7: soraKusamaEvents.badFormat['v7'],
}

export const upwardMessageSent = {
	name: 'XcmpQueue.UpwardMessageSent',
	soraPolkadotV1: soraPolkadotEvents.upwardMessageSent['v1'],
	soraKusamaV1: soraKusamaEvents.upwardMessageSent['v1'],
}

export const xcmpMessageSent = {
	name: 'XcmpQueue.XcmpMessageSent',
	soraPolkadotV1: soraPolkadotEvents.xcmpMessageSent['v1'],
	soraKusamaV1: soraKusamaEvents.xcmpMessageSent['v1'],
	soraKusamaV7: soraKusamaEvents.xcmpMessageSent['v7'],
}

export const overweightEnqueued = {
	name: 'XcmpQueue.OverweightEnqueued',
	soraPolkadotV1: soraPolkadotEvents.overweightEnqueued['v1'],
	soraKusamaV7: soraKusamaEvents.overweightEnqueued['v7'],
}

export const overweightServiced = {
	name: 'XcmpQueue.OverweightServiced',
	soraPolkadotV1: soraPolkadotEvents.overweightServiced['v1'],
	soraKusamaV7: soraKusamaEvents.overweightServiced['v7'],
}
