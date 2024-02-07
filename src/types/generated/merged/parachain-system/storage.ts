import * as soraPolkadotStorage from '../../sora-polkadot/parachain-system/storage'
import * as soraKusamaStorage from '../../sora-kusama/parachain-system/storage'


export const pendingValidationCode = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.pendingValidationCode['v1'],
	v1SoraKusama: soraKusamaStorage.pendingValidationCode['v1'],
}

export const newValidationCode = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.newValidationCode['v1'],
	v1SoraKusama: soraKusamaStorage.newValidationCode['v1'],
}

export const validationData = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.validationData['v1'],
	v1SoraKusama: soraKusamaStorage.validationData['v1'],
}

export const didSetValidationCode = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.didSetValidationCode['v1'],
	v1SoraKusama: soraKusamaStorage.didSetValidationCode['v1'],
}

export const lastRelayChainBlockNumber = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.lastRelayChainBlockNumber['v1'],
	v7SoraKusama: soraKusamaStorage.lastRelayChainBlockNumber['v7'],
}

export const upgradeRestrictionSignal = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.upgradeRestrictionSignal['v1'],
	v1SoraKusama: soraKusamaStorage.upgradeRestrictionSignal['v1'],
}

export const relayStateProof = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.relayStateProof['v1'],
	v7SoraKusama: soraKusamaStorage.relayStateProof['v7'],
}

export const relevantMessagingState = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.relevantMessagingState['v1'],
	v1SoraKusama: soraKusamaStorage.relevantMessagingState['v1'],
}

export const hostConfiguration = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.hostConfiguration['v1'],
	v1SoraKusama: soraKusamaStorage.hostConfiguration['v1'],
	v7SoraKusama: soraKusamaStorage.hostConfiguration['v7'],
}

export const lastDmqMqcHead = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.lastDmqMqcHead['v1'],
	v1SoraKusama: soraKusamaStorage.lastDmqMqcHead['v1'],
}

export const lastHrmpMqcHeads = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.lastHrmpMqcHeads['v1'],
	v1SoraKusama: soraKusamaStorage.lastHrmpMqcHeads['v1'],
}

export const processedDownwardMessages = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.processedDownwardMessages['v1'],
	v1SoraKusama: soraKusamaStorage.processedDownwardMessages['v1'],
}

export const hrmpWatermark = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.hrmpWatermark['v1'],
	v1SoraKusama: soraKusamaStorage.hrmpWatermark['v1'],
}

export const hrmpOutboundMessages = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.hrmpOutboundMessages['v1'],
	v1SoraKusama: soraKusamaStorage.hrmpOutboundMessages['v1'],
}

export const upwardMessages = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.upwardMessages['v1'],
	v1SoraKusama: soraKusamaStorage.upwardMessages['v1'],
}

export const pendingUpwardMessages = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.pendingUpwardMessages['v1'],
	v1SoraKusama: soraKusamaStorage.pendingUpwardMessages['v1'],
}

export const announcedHrmpMessagesPerCandidate = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.announcedHrmpMessagesPerCandidate['v1'],
	v1SoraKusama: soraKusamaStorage.announcedHrmpMessagesPerCandidate['v1'],
}

export const reservedXcmpWeightOverride = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.reservedXcmpWeightOverride['v1'],
	v1SoraKusama: soraKusamaStorage.reservedXcmpWeightOverride['v1'],
	v7SoraKusama: soraKusamaStorage.reservedXcmpWeightOverride['v7'],
}

export const reservedDmpWeightOverride = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.reservedDmpWeightOverride['v1'],
	v1SoraKusama: soraKusamaStorage.reservedDmpWeightOverride['v1'],
	v7SoraKusama: soraKusamaStorage.reservedDmpWeightOverride['v7'],
}

export const authorizedUpgrade = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.authorizedUpgrade['v1'],
	v1SoraKusama: soraKusamaStorage.authorizedUpgrade['v1'],
}

export const customValidationHeadData = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.customValidationHeadData['v1'],
	v7SoraKusama: soraKusamaStorage.customValidationHeadData['v7'],
}
