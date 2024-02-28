import * as polkadotEvents from '../../polkadot/tips/events'


export const newTip = {
	name: 'Tips.NewTip',
	v28Polkadot: polkadotEvents.newTip['v28'],
	v9140Polkadot: polkadotEvents.newTip['v9140'],
}

export const tipClosing = {
	name: 'Tips.TipClosing',
	v28Polkadot: polkadotEvents.tipClosing['v28'],
	v9140Polkadot: polkadotEvents.tipClosing['v9140'],
}

export const tipClosed = {
	name: 'Tips.TipClosed',
	v28Polkadot: polkadotEvents.tipClosed['v28'],
	v9140Polkadot: polkadotEvents.tipClosed['v9140'],
}

export const tipRetracted = {
	name: 'Tips.TipRetracted',
	v28Polkadot: polkadotEvents.tipRetracted['v28'],
	v9140Polkadot: polkadotEvents.tipRetracted['v9140'],
}

export const tipSlashed = {
	name: 'Tips.TipSlashed',
	v28Polkadot: polkadotEvents.tipSlashed['v28'],
	v9140Polkadot: polkadotEvents.tipSlashed['v9140'],
}
