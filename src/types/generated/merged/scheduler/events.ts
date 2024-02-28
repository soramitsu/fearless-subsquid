import * as polkadotEvents from '../../polkadot/scheduler/events'


export const scheduled = {
	name: 'Scheduler.Scheduled',
	v0Polkadot: polkadotEvents.scheduled['v0'],
	v9170Polkadot: polkadotEvents.scheduled['v9170'],
}

export const canceled = {
	name: 'Scheduler.Canceled',
	v0Polkadot: polkadotEvents.canceled['v0'],
	v9170Polkadot: polkadotEvents.canceled['v9170'],
}

export const dispatched = {
	name: 'Scheduler.Dispatched',
	v0Polkadot: polkadotEvents.dispatched['v0'],
	v9110Polkadot: polkadotEvents.dispatched['v9110'],
	v9170Polkadot: polkadotEvents.dispatched['v9170'],
	v9190Polkadot: polkadotEvents.dispatched['v9190'],
	v9340Polkadot: polkadotEvents.dispatched['v9340'],
	v9420Polkadot: polkadotEvents.dispatched['v9420'],
	v9430Polkadot: polkadotEvents.dispatched['v9430'],
}

export const callLookupFailed = {
	name: 'Scheduler.CallLookupFailed',
	v9170Polkadot: polkadotEvents.callLookupFailed['v9170'],
}

export const callUnavailable = {
	name: 'Scheduler.CallUnavailable',
	v9340Polkadot: polkadotEvents.callUnavailable['v9340'],
}

export const periodicFailed = {
	name: 'Scheduler.PeriodicFailed',
	v9340Polkadot: polkadotEvents.periodicFailed['v9340'],
}

export const permanentlyOverweight = {
	name: 'Scheduler.PermanentlyOverweight',
	v9340Polkadot: polkadotEvents.permanentlyOverweight['v9340'],
}
