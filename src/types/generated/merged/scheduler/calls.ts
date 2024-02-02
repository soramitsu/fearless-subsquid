import * as soraPolkadotCalls from '../../sora-polkadot/scheduler/calls'
import * as soraKusamaCalls from '../../sora-kusama/scheduler/calls'


export const schedule = {
	name: 'Scheduler.schedule',
	soraPolkadotV10: soraPolkadotCalls.schedule['v10'],
	soraKusamaV7: soraKusamaCalls.schedule['v7'],
	soraKusamaV9: soraKusamaCalls.schedule['v9'],
}

export const cancel = {
	name: 'Scheduler.cancel',
	soraPolkadotV10: soraPolkadotCalls.cancel['v10'],
	soraKusamaV7: soraKusamaCalls.cancel['v7'],
}

export const scheduleNamed = {
	name: 'Scheduler.schedule_named',
	soraPolkadotV10: soraPolkadotCalls.scheduleNamed['v10'],
	soraKusamaV7: soraKusamaCalls.scheduleNamed['v7'],
	soraKusamaV9: soraKusamaCalls.scheduleNamed['v9'],
}

export const cancelNamed = {
	name: 'Scheduler.cancel_named',
	soraPolkadotV10: soraPolkadotCalls.cancelNamed['v10'],
	soraKusamaV7: soraKusamaCalls.cancelNamed['v7'],
}

export const scheduleAfter = {
	name: 'Scheduler.schedule_after',
	soraPolkadotV10: soraPolkadotCalls.scheduleAfter['v10'],
	soraKusamaV7: soraKusamaCalls.scheduleAfter['v7'],
	soraKusamaV9: soraKusamaCalls.scheduleAfter['v9'],
}

export const scheduleNamedAfter = {
	name: 'Scheduler.schedule_named_after',
	soraPolkadotV10: soraPolkadotCalls.scheduleNamedAfter['v10'],
	soraKusamaV7: soraKusamaCalls.scheduleNamedAfter['v7'],
	soraKusamaV9: soraKusamaCalls.scheduleNamedAfter['v9'],
}
