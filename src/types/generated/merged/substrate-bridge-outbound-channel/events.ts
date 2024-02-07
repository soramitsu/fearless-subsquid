import * as soraPolkadotEvents from '../../sora-polkadot/substrate-bridge-outbound-channel/events'
import * as soraKusamaEvents from '../../sora-kusama/substrate-bridge-outbound-channel/events'


export const messageAccepted = {
	name: 'SubstrateBridgeOutboundChannel.MessageAccepted',
	v1SoraPolkadot: soraPolkadotEvents.messageAccepted['v1'],
	v10SoraPolkadot: soraPolkadotEvents.messageAccepted['v10'],
	v7SoraKusama: soraKusamaEvents.messageAccepted['v7'],
}
