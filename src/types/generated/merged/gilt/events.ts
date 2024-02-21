import * as kusamaEvents from '../../kusama/gilt/events'


export const bidPlaced = {
	name: 'Gilt.BidPlaced',
	v9010Kusama: kusamaEvents.bidPlaced['v9010'],
	v9130Kusama: kusamaEvents.bidPlaced['v9130'],
}

export const bidRetracted = {
	name: 'Gilt.BidRetracted',
	v9010Kusama: kusamaEvents.bidRetracted['v9010'],
	v9130Kusama: kusamaEvents.bidRetracted['v9130'],
}

export const giltIssued = {
	name: 'Gilt.GiltIssued',
	v9010Kusama: kusamaEvents.giltIssued['v9010'],
	v9130Kusama: kusamaEvents.giltIssued['v9130'],
}

export const giltThawed = {
	name: 'Gilt.GiltThawed',
	v9010Kusama: kusamaEvents.giltThawed['v9010'],
	v9130Kusama: kusamaEvents.giltThawed['v9130'],
}
