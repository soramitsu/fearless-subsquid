import * as soraPolkadotCalls from '../../sora-polkadot/preimage/calls'
import * as soraKusamaCalls from '../../sora-kusama/preimage/calls'


export const notePreimage = {
	name: 'Preimage.note_preimage',
	soraPolkadotV10: soraPolkadotCalls.notePreimage['v10'],
	soraKusamaV7: soraKusamaCalls.notePreimage['v7'],
}

export const unnotePreimage = {
	name: 'Preimage.unnote_preimage',
	soraPolkadotV10: soraPolkadotCalls.unnotePreimage['v10'],
	soraKusamaV7: soraKusamaCalls.unnotePreimage['v7'],
}

export const requestPreimage = {
	name: 'Preimage.request_preimage',
	soraPolkadotV10: soraPolkadotCalls.requestPreimage['v10'],
	soraKusamaV7: soraKusamaCalls.requestPreimage['v7'],
}

export const unrequestPreimage = {
	name: 'Preimage.unrequest_preimage',
	soraPolkadotV10: soraPolkadotCalls.unrequestPreimage['v10'],
	soraKusamaV7: soraKusamaCalls.unrequestPreimage['v7'],
}
