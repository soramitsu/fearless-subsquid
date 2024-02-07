import * as soraPolkadotEvents from '../../sora-polkadot/substrate-dispatch/events'
import * as soraKusamaEvents from '../../sora-kusama/substrate-dispatch/events'


export const messageDispatched = {
	name: 'SubstrateDispatch.MessageDispatched',
	v1SoraPolkadot: soraPolkadotEvents.messageDispatched['v1'],
	v10SoraPolkadot: soraPolkadotEvents.messageDispatched['v10'],
	v7SoraKusama: soraKusamaEvents.messageDispatched['v7'],
}

export const messageRejected = {
	name: 'SubstrateDispatch.MessageRejected',
	v1SoraPolkadot: soraPolkadotEvents.messageRejected['v1'],
	v10SoraPolkadot: soraPolkadotEvents.messageRejected['v10'],
	v7SoraKusama: soraKusamaEvents.messageRejected['v7'],
}

export const messageDecodeFailed = {
	name: 'SubstrateDispatch.MessageDecodeFailed',
	v1SoraPolkadot: soraPolkadotEvents.messageDecodeFailed['v1'],
	v10SoraPolkadot: soraPolkadotEvents.messageDecodeFailed['v10'],
	v7SoraKusama: soraKusamaEvents.messageDecodeFailed['v7'],
}
