import * as kusamaEvents from '../../kusama/paras-ump/events'


export const invalidFormat = {
	name: 'ParasUmp.InvalidFormat',
	v9040Kusama: kusamaEvents.invalidFormat['v9040'],
}

export const unsupportedVersion = {
	name: 'ParasUmp.UnsupportedVersion',
	v9040Kusama: kusamaEvents.unsupportedVersion['v9040'],
}

export const executedUpward = {
	name: 'ParasUmp.ExecutedUpward',
	v9040Kusama: kusamaEvents.executedUpward['v9040'],
}

export const weightExhausted = {
	name: 'ParasUmp.WeightExhausted',
	v9040Kusama: kusamaEvents.weightExhausted['v9040'],
}

export const upwardMessagesReceived = {
	name: 'ParasUmp.UpwardMessagesReceived',
	v9040Kusama: kusamaEvents.upwardMessagesReceived['v9040'],
}
