import * as soraPolkadotCalls from '../../sora-polkadot/scheduler/calls'
import * as soraKusamaCalls from '../../sora-kusama/scheduler/calls'


export const schedule = {
	name: 'Scheduler.schedule',
	v10SoraPolkadot: soraPolkadotCalls.schedule['v10'],
	v7SoraKusama: soraKusamaCalls.schedule['v7'],
	v9SoraKusama: soraKusamaCalls.schedule['v9'],
}

export const cancel = {
	name: 'Scheduler.cancel',
	v10SoraPolkadot: soraPolkadotCalls.cancel['v10'],
	v7SoraKusama: soraKusamaCalls.cancel['v7'],
}

export const scheduleNamed = {
	name: 'Scheduler.schedule_named',
	v10SoraPolkadot: soraPolkadotCalls.scheduleNamed['v10'],
	v7SoraKusama: soraKusamaCalls.scheduleNamed['v7'],
	v9SoraKusama: soraKusamaCalls.scheduleNamed['v9'],
}

export const cancelNamed = {
	name: 'Scheduler.cancel_named',
	v10SoraPolkadot: soraPolkadotCalls.cancelNamed['v10'],
	v7SoraKusama: soraKusamaCalls.cancelNamed['v7'],
}

export const scheduleAfter = {
	name: 'Scheduler.schedule_after',
	v10SoraPolkadot: soraPolkadotCalls.scheduleAfter['v10'],
	v7SoraKusama: soraKusamaCalls.scheduleAfter['v7'],
	v9SoraKusama: soraKusamaCalls.scheduleAfter['v9'],
}

export const scheduleNamedAfter = {
	name: 'Scheduler.schedule_named_after',
	v10SoraPolkadot: soraPolkadotCalls.scheduleNamedAfter['v10'],
	v7SoraKusama: soraKusamaCalls.scheduleNamedAfter['v7'],
	v9SoraKusama: soraKusamaCalls.scheduleNamedAfter['v9'],
}
