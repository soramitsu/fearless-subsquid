import * as kusamaStorage from '../../kusama/para-inclusion/storage'


export const availabilityBitfields = {
	name: '',
	v9090Kusama: kusamaStorage.availabilityBitfields['v9090'],
	v9111Kusama: kusamaStorage.availabilityBitfields['v9111'],
}

export const pendingAvailability = {
	name: '',
	v9090Kusama: kusamaStorage.pendingAvailability['v9090'],
	v9111Kusama: kusamaStorage.pendingAvailability['v9111'],
}

export const pendingAvailabilityCommitments = {
	name: '',
	v9090Kusama: kusamaStorage.pendingAvailabilityCommitments['v9090'],
}
