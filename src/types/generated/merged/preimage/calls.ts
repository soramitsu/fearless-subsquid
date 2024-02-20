import * as soraPolkadotCalls from '../../sora-polkadot/preimage/calls'
import * as soraKusamaCalls from '../../sora-kusama/preimage/calls'


export const notePreimage = {
	name: 'Preimage.note_preimage',
	v10SoraPolkadot: soraPolkadotCalls.notePreimage['v10'],
	v7SoraKusama: soraKusamaCalls.notePreimage['v7'],
}

export const unnotePreimage = {
	name: 'Preimage.unnote_preimage',
	v10SoraPolkadot: soraPolkadotCalls.unnotePreimage['v10'],
	v7SoraKusama: soraKusamaCalls.unnotePreimage['v7'],
}

export const requestPreimage = {
	name: 'Preimage.request_preimage',
	v10SoraPolkadot: soraPolkadotCalls.requestPreimage['v10'],
	v7SoraKusama: soraKusamaCalls.requestPreimage['v7'],
}

export const unrequestPreimage = {
	name: 'Preimage.unrequest_preimage',
	v10SoraPolkadot: soraPolkadotCalls.unrequestPreimage['v10'],
	v7SoraKusama: soraKusamaCalls.unrequestPreimage['v7'],
}
