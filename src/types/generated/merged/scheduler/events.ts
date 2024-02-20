import * as soraPolkadotEvents from '../../sora-polkadot/scheduler/events'
import * as soraKusamaEvents from '../../sora-kusama/scheduler/events'


export const scheduled = {
	name: 'Scheduler.Scheduled',
	v10SoraPolkadot: soraPolkadotEvents.scheduled['v10'],
	v7SoraKusama: soraKusamaEvents.scheduled['v7'],
}

export const canceled = {
	name: 'Scheduler.Canceled',
	v10SoraPolkadot: soraPolkadotEvents.canceled['v10'],
	v7SoraKusama: soraKusamaEvents.canceled['v7'],
}

export const dispatched = {
	name: 'Scheduler.Dispatched',
	v10SoraPolkadot: soraPolkadotEvents.dispatched['v10'],
	v7SoraKusama: soraKusamaEvents.dispatched['v7'],
}

export const callUnavailable = {
	name: 'Scheduler.CallUnavailable',
	v10SoraPolkadot: soraPolkadotEvents.callUnavailable['v10'],
	v7SoraKusama: soraKusamaEvents.callUnavailable['v7'],
}

export const periodicFailed = {
	name: 'Scheduler.PeriodicFailed',
	v10SoraPolkadot: soraPolkadotEvents.periodicFailed['v10'],
	v7SoraKusama: soraKusamaEvents.periodicFailed['v7'],
}

export const permanentlyOverweight = {
	name: 'Scheduler.PermanentlyOverweight',
	v10SoraPolkadot: soraPolkadotEvents.permanentlyOverweight['v10'],
	v7SoraKusama: soraKusamaEvents.permanentlyOverweight['v7'],
}
