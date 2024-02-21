import * as kusamaStorage from '../../kusama/preimage/storage'


export const statusFor = {
	name: '',
	v9160Kusama: kusamaStorage.statusFor['v9160'],
	v9320Kusama: kusamaStorage.statusFor['v9320'],
}

export const preimageFor = {
	name: '',
	v9160Kusama: kusamaStorage.preimageFor['v9160'],
	v9320Kusama: kusamaStorage.preimageFor['v9320'],
}

export const requestStatusFor = {
	name: '',
	v1001000Kusama: kusamaStorage.requestStatusFor['v1001000'],
}
