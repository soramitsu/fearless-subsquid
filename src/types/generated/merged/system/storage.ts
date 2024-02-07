import * as soraPolkadotStorage from '../../sora-polkadot/system/storage'
import * as soraKusamaStorage from '../../sora-kusama/system/storage'


export const account = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.account['v1'],
	v1SoraKusama: soraKusamaStorage.account['v1'],
}

export const extrinsicCount = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.extrinsicCount['v1'],
	v1SoraKusama: soraKusamaStorage.extrinsicCount['v1'],
}

export const blockWeight = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.blockWeight['v1'],
	v1SoraKusama: soraKusamaStorage.blockWeight['v1'],
	v7SoraKusama: soraKusamaStorage.blockWeight['v7'],
}

export const allExtrinsicsLen = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.allExtrinsicsLen['v1'],
	v1SoraKusama: soraKusamaStorage.allExtrinsicsLen['v1'],
}

export const blockHash = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.blockHash['v1'],
	v1SoraKusama: soraKusamaStorage.blockHash['v1'],
}

export const extrinsicData = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.extrinsicData['v1'],
	v1SoraKusama: soraKusamaStorage.extrinsicData['v1'],
}

export const number = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.number['v1'],
	v1SoraKusama: soraKusamaStorage.number['v1'],
}

export const parentHash = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.parentHash['v1'],
	v1SoraKusama: soraKusamaStorage.parentHash['v1'],
}

export const digest = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.digest['v1'],
	v1SoraKusama: soraKusamaStorage.digest['v1'],
}

export const events = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.events['v1'],
	v10SoraPolkadot: soraPolkadotStorage.events['v10'],
	v1SoraKusama: soraKusamaStorage.events['v1'],
	v7SoraKusama: soraKusamaStorage.events['v7'],
	v9SoraKusama: soraKusamaStorage.events['v9'],
}

export const eventCount = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.eventCount['v1'],
	v1SoraKusama: soraKusamaStorage.eventCount['v1'],
}

export const eventTopics = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.eventTopics['v1'],
	v1SoraKusama: soraKusamaStorage.eventTopics['v1'],
}

export const lastRuntimeUpgrade = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.lastRuntimeUpgrade['v1'],
	v1SoraKusama: soraKusamaStorage.lastRuntimeUpgrade['v1'],
}

export const upgradedToU32RefCount = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.upgradedToU32RefCount['v1'],
	v1SoraKusama: soraKusamaStorage.upgradedToU32RefCount['v1'],
}

export const upgradedToTripleRefCount = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.upgradedToTripleRefCount['v1'],
	v1SoraKusama: soraKusamaStorage.upgradedToTripleRefCount['v1'],
}

export const executionPhase = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.executionPhase['v1'],
	v1SoraKusama: soraKusamaStorage.executionPhase['v1'],
}
