import * as kusamaEvents from '../../kusama/preimage/events'


export const noted = {
	name: 'Preimage.Noted',
	v9160Kusama: kusamaEvents.noted['v9160'],
}

export const requested = {
	name: 'Preimage.Requested',
	v9160Kusama: kusamaEvents.requested['v9160'],
}

export const cleared = {
	name: 'Preimage.Cleared',
	v9160Kusama: kusamaEvents.cleared['v9160'],
}
