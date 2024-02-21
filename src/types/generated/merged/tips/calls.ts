import * as kusamaCalls from '../../kusama/tips/calls'


export const reportAwesome = {
	name: 'Tips.report_awesome',
	v2028Kusama: kusamaCalls.reportAwesome['v2028'],
	v9291Kusama: kusamaCalls.reportAwesome['v9291'],
}

export const retractTip = {
	name: 'Tips.retract_tip',
	v2028Kusama: kusamaCalls.retractTip['v2028'],
}

export const tipNew = {
	name: 'Tips.tip_new',
	v2028Kusama: kusamaCalls.tipNew['v2028'],
	v9291Kusama: kusamaCalls.tipNew['v9291'],
}

export const tip = {
	name: 'Tips.tip',
	v2028Kusama: kusamaCalls.tip['v2028'],
}

export const closeTip = {
	name: 'Tips.close_tip',
	v2028Kusama: kusamaCalls.closeTip['v2028'],
}

export const slashTip = {
	name: 'Tips.slash_tip',
	v2028Kusama: kusamaCalls.slashTip['v2028'],
}
