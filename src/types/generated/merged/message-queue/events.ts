import * as kusamaEvents from '../../kusama/message-queue/events'


export const processingFailed = {
	name: 'MessageQueue.ProcessingFailed',
	v9430Kusama: kusamaEvents.processingFailed['v9430'],
}

export const processed = {
	name: 'MessageQueue.Processed',
	v9430Kusama: kusamaEvents.processed['v9430'],
}

export const overweightEnqueued = {
	name: 'MessageQueue.OverweightEnqueued',
	v9430Kusama: kusamaEvents.overweightEnqueued['v9430'],
}

export const pageReaped = {
	name: 'MessageQueue.PageReaped',
	v9430Kusama: kusamaEvents.pageReaped['v9430'],
}
