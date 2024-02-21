import * as kusamaEvents from '../../kusama/tips/events'


export const newTip = {
	name: 'Tips.NewTip',
	v2028Kusama: kusamaEvents.newTip['v2028'],
	v9130Kusama: kusamaEvents.newTip['v9130'],
}

export const tipClosing = {
	name: 'Tips.TipClosing',
	v2028Kusama: kusamaEvents.tipClosing['v2028'],
	v9130Kusama: kusamaEvents.tipClosing['v9130'],
}

export const tipClosed = {
	name: 'Tips.TipClosed',
	v2028Kusama: kusamaEvents.tipClosed['v2028'],
	v9130Kusama: kusamaEvents.tipClosed['v9130'],
}

export const tipRetracted = {
	name: 'Tips.TipRetracted',
	v2028Kusama: kusamaEvents.tipRetracted['v2028'],
	v9130Kusama: kusamaEvents.tipRetracted['v9130'],
}

export const tipSlashed = {
	name: 'Tips.TipSlashed',
	v2028Kusama: kusamaEvents.tipSlashed['v2028'],
	v9130Kusama: kusamaEvents.tipSlashed['v9130'],
}
