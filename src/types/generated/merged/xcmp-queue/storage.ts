import * as soraPolkadotStorage from '../../sora-polkadot/xcmp-queue/storage'
import * as soraKusamaStorage from '../../sora-kusama/xcmp-queue/storage'


export const inboundXcmpStatus = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.inboundXcmpStatus['v1'],
	soraKusamaV1: soraKusamaStorage.inboundXcmpStatus['v1'],
	soraKusamaV7: soraKusamaStorage.inboundXcmpStatus['v7'],
}

export const inboundXcmpMessages = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.inboundXcmpMessages['v1'],
	soraKusamaV1: soraKusamaStorage.inboundXcmpMessages['v1'],
}

export const outboundXcmpStatus = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.outboundXcmpStatus['v1'],
	soraKusamaV1: soraKusamaStorage.outboundXcmpStatus['v1'],
	soraKusamaV7: soraKusamaStorage.outboundXcmpStatus['v7'],
}

export const outboundXcmpMessages = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.outboundXcmpMessages['v1'],
	soraKusamaV1: soraKusamaStorage.outboundXcmpMessages['v1'],
}

export const signalMessages = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.signalMessages['v1'],
	soraKusamaV1: soraKusamaStorage.signalMessages['v1'],
}

export const queueConfig = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.queueConfig['v1'],
	soraKusamaV1: soraKusamaStorage.queueConfig['v1'],
	soraKusamaV7: soraKusamaStorage.queueConfig['v7'],
}

export const overweight = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.overweight['v1'],
	soraKusamaV7: soraKusamaStorage.overweight['v7'],
}

export const overweightCount = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.overweightCount['v1'],
	soraKusamaV7: soraKusamaStorage.overweightCount['v7'],
}

export const queueSuspended = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.queueSuspended['v1'],
	soraKusamaV7: soraKusamaStorage.queueSuspended['v7'],
}

export const counterForOverweight = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.counterForOverweight['v10'],
	soraKusamaV7: soraKusamaStorage.counterForOverweight['v7'],
}
