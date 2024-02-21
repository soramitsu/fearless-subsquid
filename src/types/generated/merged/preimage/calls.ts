import * as kusamaCalls from '../../kusama/preimage/calls'


export const notePreimage = {
	name: 'Preimage.note_preimage',
	v9160Kusama: kusamaCalls.notePreimage['v9160'],
}

export const unnotePreimage = {
	name: 'Preimage.unnote_preimage',
	v9160Kusama: kusamaCalls.unnotePreimage['v9160'],
}

export const requestPreimage = {
	name: 'Preimage.request_preimage',
	v9160Kusama: kusamaCalls.requestPreimage['v9160'],
}

export const unrequestPreimage = {
	name: 'Preimage.unrequest_preimage',
	v9160Kusama: kusamaCalls.unrequestPreimage['v9160'],
}

export const ensureUpdated = {
	name: 'Preimage.ensure_updated',
	v1001000Kusama: kusamaCalls.ensureUpdated['v1001000'],
}
