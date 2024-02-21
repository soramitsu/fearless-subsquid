import * as kusamaEvents from '../../kusama/scheduler/events'


export const scheduled = {
	name: 'Scheduler.Scheduled',
	v1058Kusama: kusamaEvents.scheduled['v1058'],
	v2005Kusama: kusamaEvents.scheduled['v2005'],
	v9160Kusama: kusamaEvents.scheduled['v9160'],
}

export const dispatched = {
	name: 'Scheduler.Dispatched',
	v1058Kusama: kusamaEvents.dispatched['v1058'],
	v9111Kusama: kusamaEvents.dispatched['v9111'],
	v9160Kusama: kusamaEvents.dispatched['v9160'],
	v9170Kusama: kusamaEvents.dispatched['v9170'],
	v9190Kusama: kusamaEvents.dispatched['v9190'],
	v9320Kusama: kusamaEvents.dispatched['v9320'],
	v9420Kusama: kusamaEvents.dispatched['v9420'],
	v9430Kusama: kusamaEvents.dispatched['v9430'],
}

export const canceled = {
	name: 'Scheduler.Canceled',
	v2005Kusama: kusamaEvents.canceled['v2005'],
	v9160Kusama: kusamaEvents.canceled['v9160'],
}

export const callLookupFailed = {
	name: 'Scheduler.CallLookupFailed',
	v9160Kusama: kusamaEvents.callLookupFailed['v9160'],
}

export const callUnavailable = {
	name: 'Scheduler.CallUnavailable',
	v9320Kusama: kusamaEvents.callUnavailable['v9320'],
}

export const periodicFailed = {
	name: 'Scheduler.PeriodicFailed',
	v9320Kusama: kusamaEvents.periodicFailed['v9320'],
}

export const permanentlyOverweight = {
	name: 'Scheduler.PermanentlyOverweight',
	v9320Kusama: kusamaEvents.permanentlyOverweight['v9320'],
}
