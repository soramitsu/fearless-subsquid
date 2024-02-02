import * as soraPolkadotStorage from '../../sora-polkadot/substrate-bridge-inbound-channel/storage'
import * as soraKusamaStorage from '../../sora-kusama/substrate-bridge-inbound-channel/storage'


export const channelNonces = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.channelNonces['v1'],
	soraPolkadotV10: soraPolkadotStorage.channelNonces['v10'],
	soraKusamaV7: soraKusamaStorage.channelNonces['v7'],
}

export const rewardFraction = {
	name: '',
	soraPolkadotV1: soraPolkadotStorage.rewardFraction['v1'],
}
