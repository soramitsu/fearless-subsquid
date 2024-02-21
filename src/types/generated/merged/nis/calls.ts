import * as kusamaCalls from '../../kusama/nis/calls'


export const placeBid = {
	name: 'Nis.place_bid',
	v9340Kusama: kusamaCalls.placeBid['v9340'],
}

export const retractBid = {
	name: 'Nis.retract_bid',
	v9340Kusama: kusamaCalls.retractBid['v9340'],
}

export const fundDeficit = {
	name: 'Nis.fund_deficit',
	v9340Kusama: kusamaCalls.fundDeficit['v9340'],
}

export const thaw = {
	name: 'Nis.thaw',
	v9340Kusama: kusamaCalls.thaw['v9340'],
}

export const thawPrivate = {
	name: 'Nis.thaw_private',
	v9381Kusama: kusamaCalls.thawPrivate['v9381'],
}

export const thawCommunal = {
	name: 'Nis.thaw_communal',
	v9381Kusama: kusamaCalls.thawCommunal['v9381'],
}

export const communify = {
	name: 'Nis.communify',
	v9381Kusama: kusamaCalls.communify['v9381'],
}

export const privatize = {
	name: 'Nis.privatize',
	v9381Kusama: kusamaCalls.privatize['v9381'],
}
