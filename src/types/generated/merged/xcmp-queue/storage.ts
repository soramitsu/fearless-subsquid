import * as soraPolkadotStorage from '../../sora-polkadot/xcmp-queue/storage'
import * as soraKusamaStorage from '../../sora-kusama/xcmp-queue/storage'


export const inboundXcmpStatus = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.inboundXcmpStatus['v1'],
	v1SoraKusama: soraKusamaStorage.inboundXcmpStatus['v1'],
	v7SoraKusama: soraKusamaStorage.inboundXcmpStatus['v7'],
}

export const inboundXcmpMessages = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.inboundXcmpMessages['v1'],
	v1SoraKusama: soraKusamaStorage.inboundXcmpMessages['v1'],
}

export const outboundXcmpStatus = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.outboundXcmpStatus['v1'],
	v1SoraKusama: soraKusamaStorage.outboundXcmpStatus['v1'],
	v7SoraKusama: soraKusamaStorage.outboundXcmpStatus['v7'],
}

export const outboundXcmpMessages = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.outboundXcmpMessages['v1'],
	v1SoraKusama: soraKusamaStorage.outboundXcmpMessages['v1'],
}

export const signalMessages = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.signalMessages['v1'],
	v1SoraKusama: soraKusamaStorage.signalMessages['v1'],
}

export const queueConfig = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.queueConfig['v1'],
	v1SoraKusama: soraKusamaStorage.queueConfig['v1'],
	v7SoraKusama: soraKusamaStorage.queueConfig['v7'],
}

export const overweight = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.overweight['v1'],
	v7SoraKusama: soraKusamaStorage.overweight['v7'],
}

export const overweightCount = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.overweightCount['v1'],
	v7SoraKusama: soraKusamaStorage.overweightCount['v7'],
}

export const queueSuspended = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.queueSuspended['v1'],
	v7SoraKusama: soraKusamaStorage.queueSuspended['v7'],
}

export const counterForOverweight = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.counterForOverweight['v10'],
	v7SoraKusama: soraKusamaStorage.counterForOverweight['v7'],
}
