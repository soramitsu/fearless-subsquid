import * as kusamaStorage from '../../kusama/dmp/storage'


export const downwardMessageQueues = {
	name: '',
	v9090Kusama: kusamaStorage.downwardMessageQueues['v9090'],
	v9111Kusama: kusamaStorage.downwardMessageQueues['v9111'],
}

export const downwardMessageQueueHeads = {
	name: '',
	v9090Kusama: kusamaStorage.downwardMessageQueueHeads['v9090'],
}

export const deliveryFeeFactor = {
	name: '',
	v9420Kusama: kusamaStorage.deliveryFeeFactor['v9420'],
}
