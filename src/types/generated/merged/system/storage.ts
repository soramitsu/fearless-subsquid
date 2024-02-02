import * as soraPolkadotStorage from '../../sora-polkadot/system/storage'
import * as soraKusamaStorage from '../../sora-kusama/system/storage'


export const account = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.account['v1'],
	soraKusamaV1: soraKusamaStorage.account['v1'],
}

export const extrinsicCount = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.extrinsicCount['v1'],
	soraKusamaV1: soraKusamaStorage.extrinsicCount['v1'],
}

export const blockWeight = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.blockWeight['v1'],
	soraKusamaV1: soraKusamaStorage.blockWeight['v1'],
	soraKusamaV7: soraKusamaStorage.blockWeight['v7'],
}

export const allExtrinsicsLen = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.allExtrinsicsLen['v1'],
	soraKusamaV1: soraKusamaStorage.allExtrinsicsLen['v1'],
}

export const blockHash = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.blockHash['v1'],
	soraKusamaV1: soraKusamaStorage.blockHash['v1'],
}

export const extrinsicData = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.extrinsicData['v1'],
	soraKusamaV1: soraKusamaStorage.extrinsicData['v1'],
}

export const number = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.number['v1'],
	soraKusamaV1: soraKusamaStorage.number['v1'],
}

export const parentHash = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.parentHash['v1'],
	soraKusamaV1: soraKusamaStorage.parentHash['v1'],
}

export const digest = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.digest['v1'],
	soraKusamaV1: soraKusamaStorage.digest['v1'],
}

export const events = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.events['v1'],
	soraPolkadotV10: soraPolkadotStorage.events['v10'],
	soraKusamaV1: soraKusamaStorage.events['v1'],
	soraKusamaV7: soraKusamaStorage.events['v7'],
	soraKusamaV9: soraKusamaStorage.events['v9'],
}

export const eventCount = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.eventCount['v1'],
	soraKusamaV1: soraKusamaStorage.eventCount['v1'],
}

export const eventTopics = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.eventTopics['v1'],
	soraKusamaV1: soraKusamaStorage.eventTopics['v1'],
}

export const lastRuntimeUpgrade = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.lastRuntimeUpgrade['v1'],
	soraKusamaV1: soraKusamaStorage.lastRuntimeUpgrade['v1'],
}

export const upgradedToU32RefCount = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.upgradedToU32RefCount['v1'],
	soraKusamaV1: soraKusamaStorage.upgradedToU32RefCount['v1'],
}

export const upgradedToTripleRefCount = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.upgradedToTripleRefCount['v1'],
	soraKusamaV1: soraKusamaStorage.upgradedToTripleRefCount['v1'],
}

export const executionPhase = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.executionPhase['v1'],
	soraKusamaV1: soraKusamaStorage.executionPhase['v1'],
}
