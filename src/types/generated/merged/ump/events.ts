import * as polkadotEvents from '../../polkadot/ump/events'


export const invalidFormat = {
	name: 'Ump.InvalidFormat',
	v9110Polkadot: polkadotEvents.invalidFormat['v9110'],
}

export const unsupportedVersion = {
	name: 'Ump.UnsupportedVersion',
	v9110Polkadot: polkadotEvents.unsupportedVersion['v9110'],
}

export const executedUpward = {
	name: 'Ump.ExecutedUpward',
	v9110Polkadot: polkadotEvents.executedUpward['v9110'],
	v9170Polkadot: polkadotEvents.executedUpward['v9170'],
	v9420Polkadot: polkadotEvents.executedUpward['v9420'],
}

export const weightExhausted = {
	name: 'Ump.WeightExhausted',
	v9110Polkadot: polkadotEvents.weightExhausted['v9110'],
	v9291Polkadot: polkadotEvents.weightExhausted['v9291'],
	v9340Polkadot: polkadotEvents.weightExhausted['v9340'],
}

export const upwardMessagesReceived = {
	name: 'Ump.UpwardMessagesReceived',
	v9110Polkadot: polkadotEvents.upwardMessagesReceived['v9110'],
}

export const overweightEnqueued = {
	name: 'Ump.OverweightEnqueued',
	v9110Polkadot: polkadotEvents.overweightEnqueued['v9110'],
	v9291Polkadot: polkadotEvents.overweightEnqueued['v9291'],
	v9340Polkadot: polkadotEvents.overweightEnqueued['v9340'],
}

export const overweightServiced = {
	name: 'Ump.OverweightServiced',
	v9110Polkadot: polkadotEvents.overweightServiced['v9110'],
	v9291Polkadot: polkadotEvents.overweightServiced['v9291'],
	v9340Polkadot: polkadotEvents.overweightServiced['v9340'],
}
