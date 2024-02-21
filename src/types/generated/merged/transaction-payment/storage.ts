import * as kusamaStorage from '../../kusama/transaction-payment/storage'


export const nextFeeMultiplier = {
	name: '',
	v1020Kusama: kusamaStorage.nextFeeMultiplier['v1020'],
}

export const storageVersion = {
	name: '',
	v2011Kusama: kusamaStorage.storageVersion['v2011'],
	v9111Kusama: kusamaStorage.storageVersion['v9111'],
}
