import * as polkadotEvents from '../../polkadot/message-queue/events'


export const processingFailed = {
	name: 'MessageQueue.ProcessingFailed',
	v9430Polkadot: polkadotEvents.processingFailed['v9430'],
}

export const processed = {
	name: 'MessageQueue.Processed',
	v9430Polkadot: polkadotEvents.processed['v9430'],
}

export const overweightEnqueued = {
	name: 'MessageQueue.OverweightEnqueued',
	v9430Polkadot: polkadotEvents.overweightEnqueued['v9430'],
}

export const pageReaped = {
	name: 'MessageQueue.PageReaped',
	v9430Polkadot: polkadotEvents.pageReaped['v9430'],
}
