import * as kusamaEvents from '../../kusama/im-online/events'


export const heartbeatReceived = {
	name: 'ImOnline.HeartbeatReceived',
	v1020Kusama: kusamaEvents.heartbeatReceived['v1020'],
	v9130Kusama: kusamaEvents.heartbeatReceived['v9130'],
}

export const allGood = {
	name: 'ImOnline.AllGood',
	v1020Kusama: kusamaEvents.allGood['v1020'],
}

export const someOffline = {
	name: 'ImOnline.SomeOffline',
	v1020Kusama: kusamaEvents.someOffline['v1020'],
	v9130Kusama: kusamaEvents.someOffline['v9130'],
}
