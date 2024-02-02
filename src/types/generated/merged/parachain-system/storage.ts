import * as soraPolkadotStorage from '../../sora-polkadot/parachain-system/storage'
import * as soraKusamaStorage from '../../sora-kusama/parachain-system/storage'


export const pendingValidationCode = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.pendingValidationCode['v1'],
	soraKusamaV1: soraKusamaStorage.pendingValidationCode['v1'],
}

export const newValidationCode = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.newValidationCode['v1'],
	soraKusamaV1: soraKusamaStorage.newValidationCode['v1'],
}

export const validationData = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.validationData['v1'],
	soraKusamaV1: soraKusamaStorage.validationData['v1'],
}

export const didSetValidationCode = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.didSetValidationCode['v1'],
	soraKusamaV1: soraKusamaStorage.didSetValidationCode['v1'],
}

export const lastRelayChainBlockNumber = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.lastRelayChainBlockNumber['v1'],
	soraKusamaV7: soraKusamaStorage.lastRelayChainBlockNumber['v7'],
}

export const upgradeRestrictionSignal = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.upgradeRestrictionSignal['v1'],
	soraKusamaV1: soraKusamaStorage.upgradeRestrictionSignal['v1'],
}

export const relayStateProof = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.relayStateProof['v1'],
	soraKusamaV7: soraKusamaStorage.relayStateProof['v7'],
}

export const relevantMessagingState = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.relevantMessagingState['v1'],
	soraKusamaV1: soraKusamaStorage.relevantMessagingState['v1'],
}

export const hostConfiguration = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.hostConfiguration['v1'],
	soraKusamaV1: soraKusamaStorage.hostConfiguration['v1'],
	soraKusamaV7: soraKusamaStorage.hostConfiguration['v7'],
}

export const lastDmqMqcHead = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.lastDmqMqcHead['v1'],
	soraKusamaV1: soraKusamaStorage.lastDmqMqcHead['v1'],
}

export const lastHrmpMqcHeads = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.lastHrmpMqcHeads['v1'],
	soraKusamaV1: soraKusamaStorage.lastHrmpMqcHeads['v1'],
}

export const processedDownwardMessages = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.processedDownwardMessages['v1'],
	soraKusamaV1: soraKusamaStorage.processedDownwardMessages['v1'],
}

export const hrmpWatermark = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.hrmpWatermark['v1'],
	soraKusamaV1: soraKusamaStorage.hrmpWatermark['v1'],
}

export const hrmpOutboundMessages = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.hrmpOutboundMessages['v1'],
	soraKusamaV1: soraKusamaStorage.hrmpOutboundMessages['v1'],
}

export const upwardMessages = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.upwardMessages['v1'],
	soraKusamaV1: soraKusamaStorage.upwardMessages['v1'],
}

export const pendingUpwardMessages = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.pendingUpwardMessages['v1'],
	soraKusamaV1: soraKusamaStorage.pendingUpwardMessages['v1'],
}

export const announcedHrmpMessagesPerCandidate = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.announcedHrmpMessagesPerCandidate['v1'],
	soraKusamaV1: soraKusamaStorage.announcedHrmpMessagesPerCandidate['v1'],
}

export const reservedXcmpWeightOverride = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.reservedXcmpWeightOverride['v1'],
	soraKusamaV1: soraKusamaStorage.reservedXcmpWeightOverride['v1'],
	soraKusamaV7: soraKusamaStorage.reservedXcmpWeightOverride['v7'],
}

export const reservedDmpWeightOverride = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.reservedDmpWeightOverride['v1'],
	soraKusamaV1: soraKusamaStorage.reservedDmpWeightOverride['v1'],
	soraKusamaV7: soraKusamaStorage.reservedDmpWeightOverride['v7'],
}

export const authorizedUpgrade = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.authorizedUpgrade['v1'],
	soraKusamaV1: soraKusamaStorage.authorizedUpgrade['v1'],
}

export const customValidationHeadData = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.customValidationHeadData['v1'],
	soraKusamaV7: soraKusamaStorage.customValidationHeadData['v7'],
}
