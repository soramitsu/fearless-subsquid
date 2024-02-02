import * as soraPolkadotStorage from '../../sora-polkadot/substrate-bridge-outbound-channel/storage'
import * as soraKusamaStorage from '../../sora-kusama/substrate-bridge-outbound-channel/storage'


export const interval = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.interval['v1'],
	soraKusamaV7: soraKusamaStorage.interval['v7'],
}

export const messageQueues = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.messageQueues['v1'],
	soraPolkadotV10: soraPolkadotStorage.messageQueues['v10'],
	soraKusamaV7: soraKusamaStorage.messageQueues['v7'],
}

export const channelNonces = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.channelNonces['v1'],
	soraPolkadotV10: soraPolkadotStorage.channelNonces['v10'],
	soraKusamaV7: soraKusamaStorage.channelNonces['v7'],
}

export const fee = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.fee['v1'],
}

export const latestCommitment = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.latestCommitment['v10'],
	soraKusamaV7: soraKusamaStorage.latestCommitment['v7'],
}
