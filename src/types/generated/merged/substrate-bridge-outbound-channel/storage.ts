import * as soraPolkadotStorage from '../../sora-polkadot/substrate-bridge-outbound-channel/storage'
import * as soraKusamaStorage from '../../sora-kusama/substrate-bridge-outbound-channel/storage'


export const interval = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.interval['v1'],
	v7SoraKusama: soraKusamaStorage.interval['v7'],
}

export const messageQueues = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.messageQueues['v1'],
	v10SoraPolkadot: soraPolkadotStorage.messageQueues['v10'],
	v7SoraKusama: soraKusamaStorage.messageQueues['v7'],
}

export const channelNonces = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.channelNonces['v1'],
	v10SoraPolkadot: soraPolkadotStorage.channelNonces['v10'],
	v7SoraKusama: soraKusamaStorage.channelNonces['v7'],
}

export const fee = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.fee['v1'],
}

export const latestCommitment = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.latestCommitment['v10'],
	v7SoraKusama: soraKusamaStorage.latestCommitment['v7'],
}
