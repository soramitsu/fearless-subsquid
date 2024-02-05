import * as soraPolkadotEvents from '../../sora-polkadot/substrate-bridge-outbound-channel/events'
import * as soraKusamaEvents from '../../sora-kusama/substrate-bridge-outbound-channel/events'

export const messageAccepted = {
	name: 'SubstrateBridgeOutboundChannel.MessageAccepted',
	soraPolkadotV1: soraPolkadotEvents.messageAccepted['v1'],
	soraPolkadotV10: soraPolkadotEvents.messageAccepted['v10'],
	soraKusamaV7: soraKusamaEvents.messageAccepted['v7'],
}
