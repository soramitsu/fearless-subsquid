import * as kusamaCalls from '../../kusama/message-queue/calls'


export const reapPage = {
	name: 'MessageQueue.reap_page',
	v9430Kusama: kusamaCalls.reapPage['v9430'],
}

export const executeOverweight = {
	name: 'MessageQueue.execute_overweight',
	v9430Kusama: kusamaCalls.executeOverweight['v9430'],
}
