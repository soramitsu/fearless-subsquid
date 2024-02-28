import * as polkadotCalls from '../../polkadot/tips/calls'


export const reportAwesome = {
	name: 'Tips.report_awesome',
	v28Polkadot: polkadotCalls.reportAwesome['v28'],
	v9291Polkadot: polkadotCalls.reportAwesome['v9291'],
}

export const retractTip = {
	name: 'Tips.retract_tip',
	v28Polkadot: polkadotCalls.retractTip['v28'],
}

export const tipNew = {
	name: 'Tips.tip_new',
	v28Polkadot: polkadotCalls.tipNew['v28'],
	v9291Polkadot: polkadotCalls.tipNew['v9291'],
}

export const tip = {
	name: 'Tips.tip',
	v28Polkadot: polkadotCalls.tip['v28'],
}

export const closeTip = {
	name: 'Tips.close_tip',
	v28Polkadot: polkadotCalls.closeTip['v28'],
}

export const slashTip = {
	name: 'Tips.slash_tip',
	v28Polkadot: polkadotCalls.slashTip['v28'],
}
