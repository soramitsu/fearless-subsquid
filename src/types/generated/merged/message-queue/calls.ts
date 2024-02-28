import * as polkadotCalls from '../../polkadot/message-queue/calls'


export const reapPage = {
	name: 'MessageQueue.reap_page',
	v9430Polkadot: polkadotCalls.reapPage['v9430'],
}

export const executeOverweight = {
	name: 'MessageQueue.execute_overweight',
	v9430Polkadot: polkadotCalls.executeOverweight['v9430'],
}
