import * as polkadotCalls from '../../polkadot/preimage/calls'


export const notePreimage = {
	name: 'Preimage.note_preimage',
	v9170Polkadot: polkadotCalls.notePreimage['v9170'],
}

export const unnotePreimage = {
	name: 'Preimage.unnote_preimage',
	v9170Polkadot: polkadotCalls.unnotePreimage['v9170'],
}

export const requestPreimage = {
	name: 'Preimage.request_preimage',
	v9170Polkadot: polkadotCalls.requestPreimage['v9170'],
}

export const unrequestPreimage = {
	name: 'Preimage.unrequest_preimage',
	v9170Polkadot: polkadotCalls.unrequestPreimage['v9170'],
}

export const ensureUpdated = {
	name: 'Preimage.ensure_updated',
	v1001002Polkadot: polkadotCalls.ensureUpdated['v1001002'],
}
