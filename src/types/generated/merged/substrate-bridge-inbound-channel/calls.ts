import * as soraPolkadotCalls from '../../sora-polkadot/substrate-bridge-inbound-channel/calls'
import * as soraKusamaCalls from '../../sora-kusama/substrate-bridge-inbound-channel/calls'


export const submit = {
	name: 'SubstrateBridgeInboundChannel.submit',
	v1SoraPolkadot: soraPolkadotCalls.submit['v1'],
	v10SoraPolkadot: soraPolkadotCalls.submit['v10'],
	v7SoraKusama: soraKusamaCalls.submit['v7'],
}

export const setRewardFraction = {
	name: 'SubstrateBridgeInboundChannel.set_reward_fraction',
	v1SoraPolkadot: soraPolkadotCalls.setRewardFraction['v1'],
}
