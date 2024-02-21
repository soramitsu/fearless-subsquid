import * as kusamaEvents from '../../kusama/system/events'


export const extrinsicSuccess = {
	name: 'System.ExtrinsicSuccess',
	v1020Kusama: kusamaEvents.extrinsicSuccess['v1020'],
	v1058Kusama: kusamaEvents.extrinsicSuccess['v1058'],
	v1062Kusama: kusamaEvents.extrinsicSuccess['v1062'],
	v9160Kusama: kusamaEvents.extrinsicSuccess['v9160'],
	v9291Kusama: kusamaEvents.extrinsicSuccess['v9291'],
	v9320Kusama: kusamaEvents.extrinsicSuccess['v9320'],
}

export const extrinsicFailed = {
	name: 'System.ExtrinsicFailed',
	v1020Kusama: kusamaEvents.extrinsicFailed['v1020'],
	v1032Kusama: kusamaEvents.extrinsicFailed['v1032'],
	v1058Kusama: kusamaEvents.extrinsicFailed['v1058'],
	v1062Kusama: kusamaEvents.extrinsicFailed['v1062'],
	v9111Kusama: kusamaEvents.extrinsicFailed['v9111'],
	v9160Kusama: kusamaEvents.extrinsicFailed['v9160'],
	v9170Kusama: kusamaEvents.extrinsicFailed['v9170'],
	v9190Kusama: kusamaEvents.extrinsicFailed['v9190'],
	v9291Kusama: kusamaEvents.extrinsicFailed['v9291'],
	v9320Kusama: kusamaEvents.extrinsicFailed['v9320'],
	v9420Kusama: kusamaEvents.extrinsicFailed['v9420'],
	v9430Kusama: kusamaEvents.extrinsicFailed['v9430'],
}

export const codeUpdated = {
	name: 'System.CodeUpdated',
	v1045Kusama: kusamaEvents.codeUpdated['v1045'],
}

export const newAccount = {
	name: 'System.NewAccount',
	v1050Kusama: kusamaEvents.newAccount['v1050'],
	v9160Kusama: kusamaEvents.newAccount['v9160'],
}

export const killedAccount = {
	name: 'System.KilledAccount',
	v1050Kusama: kusamaEvents.killedAccount['v1050'],
	v9160Kusama: kusamaEvents.killedAccount['v9160'],
}

export const remarked = {
	name: 'System.Remarked',
	v2030Kusama: kusamaEvents.remarked['v2030'],
	v9160Kusama: kusamaEvents.remarked['v9160'],
}
