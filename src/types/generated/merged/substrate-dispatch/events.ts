import * as soraPolkadotEvents from '../../sora-polkadot/substrate-dispatch/events'
import * as soraKusamaEvents from '../../sora-kusama/substrate-dispatch/events'


export const messageDispatched = {
	name: 'SubstrateDispatch.MessageDispatched',
	soraPolkadotV1: soraPolkadotEvents.messageDispatched['v1'],
	soraPolkadotV10: soraPolkadotEvents.messageDispatched['v10'],
	soraKusamaV7: soraKusamaEvents.messageDispatched['v7'],
}

export const messageRejected = {
	name: 'SubstrateDispatch.MessageRejected',
	soraPolkadotV1: soraPolkadotEvents.messageRejected['v1'],
	soraPolkadotV10: soraPolkadotEvents.messageRejected['v10'],
	soraKusamaV7: soraKusamaEvents.messageRejected['v7'],
}

export const messageDecodeFailed = {
	name: 'SubstrateDispatch.MessageDecodeFailed',
	soraPolkadotV1: soraPolkadotEvents.messageDecodeFailed['v1'],
	soraPolkadotV10: soraPolkadotEvents.messageDecodeFailed['v10'],
	soraKusamaV7: soraKusamaEvents.messageDecodeFailed['v7'],
}
