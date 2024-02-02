import * as soraPolkadotEvents from '../../sora-polkadot/scheduler/events'
import * as soraKusamaEvents from '../../sora-kusama/scheduler/events'


export const scheduled = {
	name: 'Scheduler.Scheduled',
	soraPolkadotV10: soraPolkadotEvents.scheduled['v10'],
	soraKusamaV7: soraKusamaEvents.scheduled['v7'],
}

export const canceled = {
	name: 'Scheduler.Canceled',
	soraPolkadotV10: soraPolkadotEvents.canceled['v10'],
	soraKusamaV7: soraKusamaEvents.canceled['v7'],
}

export const dispatched = {
	name: 'Scheduler.Dispatched',
	soraPolkadotV10: soraPolkadotEvents.dispatched['v10'],
	soraKusamaV7: soraKusamaEvents.dispatched['v7'],
}

export const callUnavailable = {
	name: 'Scheduler.CallUnavailable',
	soraPolkadotV10: soraPolkadotEvents.callUnavailable['v10'],
	soraKusamaV7: soraKusamaEvents.callUnavailable['v7'],
}

export const periodicFailed = {
	name: 'Scheduler.PeriodicFailed',
	soraPolkadotV10: soraPolkadotEvents.periodicFailed['v10'],
	soraKusamaV7: soraKusamaEvents.periodicFailed['v7'],
}

export const permanentlyOverweight = {
	name: 'Scheduler.PermanentlyOverweight',
	soraPolkadotV10: soraPolkadotEvents.permanentlyOverweight['v10'],
	soraKusamaV7: soraKusamaEvents.permanentlyOverweight['v7'],
}
