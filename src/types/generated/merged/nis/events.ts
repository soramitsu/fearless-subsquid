import * as kusamaEvents from '../../kusama/nis/events'


export const bidPlaced = {
	name: 'Nis.BidPlaced',
	v9340Kusama: kusamaEvents.bidPlaced['v9340'],
}

export const bidRetracted = {
	name: 'Nis.BidRetracted',
	v9340Kusama: kusamaEvents.bidRetracted['v9340'],
}

export const bidDropped = {
	name: 'Nis.BidDropped',
	v9340Kusama: kusamaEvents.bidDropped['v9340'],
}

export const issued = {
	name: 'Nis.Issued',
	v9340Kusama: kusamaEvents.issued['v9340'],
}

export const thawed = {
	name: 'Nis.Thawed',
	v9340Kusama: kusamaEvents.thawed['v9340'],
}

export const funded = {
	name: 'Nis.Funded',
	v9340Kusama: kusamaEvents.funded['v9340'],
}

export const transferred = {
	name: 'Nis.Transferred',
	v9340Kusama: kusamaEvents.transferred['v9340'],
}
