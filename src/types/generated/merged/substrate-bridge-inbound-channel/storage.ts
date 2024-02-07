import * as soraPolkadotStorage from '../../sora-polkadot/substrate-bridge-inbound-channel/storage'
import * as soraKusamaStorage from '../../sora-kusama/substrate-bridge-inbound-channel/storage'


export const channelNonces = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.channelNonces['v1'],
	v10SoraPolkadot: soraPolkadotStorage.channelNonces['v10'],
	v7SoraKusama: soraKusamaStorage.channelNonces['v7'],
}

export const rewardFraction = {
	name: '',
	v1SoraPolkadot: soraPolkadotStorage.rewardFraction['v1'],
}
