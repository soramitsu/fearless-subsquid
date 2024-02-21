import * as kusamaEvents from '../../kusama/ump/events'


export const invalidFormat = {
	name: 'Ump.InvalidFormat',
	v9090Kusama: kusamaEvents.invalidFormat['v9090'],
}

export const unsupportedVersion = {
	name: 'Ump.UnsupportedVersion',
	v9090Kusama: kusamaEvents.unsupportedVersion['v9090'],
}

export const executedUpward = {
	name: 'Ump.ExecutedUpward',
	v9090Kusama: kusamaEvents.executedUpward['v9090'],
	v9100Kusama: kusamaEvents.executedUpward['v9100'],
	v9111Kusama: kusamaEvents.executedUpward['v9111'],
	v9160Kusama: kusamaEvents.executedUpward['v9160'],
	v9381Kusama: kusamaEvents.executedUpward['v9381'],
}

export const weightExhausted = {
	name: 'Ump.WeightExhausted',
	v9090Kusama: kusamaEvents.weightExhausted['v9090'],
	v9291Kusama: kusamaEvents.weightExhausted['v9291'],
	v9320Kusama: kusamaEvents.weightExhausted['v9320'],
}

export const upwardMessagesReceived = {
	name: 'Ump.UpwardMessagesReceived',
	v9090Kusama: kusamaEvents.upwardMessagesReceived['v9090'],
}

export const overweightEnqueued = {
	name: 'Ump.OverweightEnqueued',
	v9100Kusama: kusamaEvents.overweightEnqueued['v9100'],
	v9291Kusama: kusamaEvents.overweightEnqueued['v9291'],
	v9320Kusama: kusamaEvents.overweightEnqueued['v9320'],
}

export const overweightServiced = {
	name: 'Ump.OverweightServiced',
	v9100Kusama: kusamaEvents.overweightServiced['v9100'],
	v9291Kusama: kusamaEvents.overweightServiced['v9291'],
	v9320Kusama: kusamaEvents.overweightServiced['v9320'],
}
