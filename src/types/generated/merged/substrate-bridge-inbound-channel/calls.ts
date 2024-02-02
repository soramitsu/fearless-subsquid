import * as soraPolkadotCalls from '../../sora-polkadot/substrate-bridge-inbound-channel/calls'
import * as soraKusamaCalls from '../../sora-kusama/substrate-bridge-inbound-channel/calls'


export const submit = {
	name: 'SubstrateBridgeInboundChannel.submit',
	soraPolkadotV1: soraPolkadotCalls.submit['v1'],
	soraPolkadotV10: soraPolkadotCalls.submit['v10'],
	soraKusamaV7: soraKusamaCalls.submit['v7'],
}

export const setRewardFraction = {
	name: 'SubstrateBridgeInboundChannel.set_reward_fraction',
	soraPolkadotV1: soraPolkadotCalls.setRewardFraction['v1'],
}
