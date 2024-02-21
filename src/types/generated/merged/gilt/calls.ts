import * as kusamaCalls from '../../kusama/gilt/calls'


export const placeBid = {
	name: 'Gilt.place_bid',
	v9010Kusama: kusamaCalls.placeBid['v9010'],
}

export const retractBid = {
	name: 'Gilt.retract_bid',
	v9010Kusama: kusamaCalls.retractBid['v9010'],
}

export const setTarget = {
	name: 'Gilt.set_target',
	v9010Kusama: kusamaCalls.setTarget['v9010'],
}

export const thaw = {
	name: 'Gilt.thaw',
	v9010Kusama: kusamaCalls.thaw['v9010'],
}
