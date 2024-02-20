import * as soraPolkadotEvents from '../../sora-polkadot/x-tokens/events'
import * as soraKusamaEvents from '../../sora-kusama/x-tokens/events'


export const transferredMultiAssets = {
	name: 'XTokens.TransferredMultiAssets',
	v1SoraPolkadot: soraPolkadotEvents.transferredMultiAssets['v1'],
	v10SoraPolkadot: soraPolkadotEvents.transferredMultiAssets['v10'],
	v7SoraKusama: soraKusamaEvents.transferredMultiAssets['v7'],
}
