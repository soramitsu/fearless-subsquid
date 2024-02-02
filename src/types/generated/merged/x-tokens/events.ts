import * as soraPolkadotEvents from '../../sora-polkadot/x-tokens/events'
import * as soraKusamaEvents from '../../sora-kusama/x-tokens/events'


export const transferredMultiAssets = {
	name: 'XTokens.TransferredMultiAssets',
	soraPolkadotV1: soraPolkadotEvents.transferredMultiAssets['v1'],
	soraPolkadotV10: soraPolkadotEvents.transferredMultiAssets['v10'],
	soraKusamaV7: soraKusamaEvents.transferredMultiAssets['v7'],
}
