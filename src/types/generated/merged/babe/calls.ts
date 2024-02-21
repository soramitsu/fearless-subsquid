import * as kusamaCalls from '../../kusama/babe/calls'


export const reportEquivocation = {
	name: 'Babe.report_equivocation',
	v2015Kusama: kusamaCalls.reportEquivocation['v2015'],
	v9111Kusama: kusamaCalls.reportEquivocation['v9111'],
	v9130Kusama: kusamaCalls.reportEquivocation['v9130'],
}

export const reportEquivocationUnsigned = {
	name: 'Babe.report_equivocation_unsigned',
	v2015Kusama: kusamaCalls.reportEquivocationUnsigned['v2015'],
	v9111Kusama: kusamaCalls.reportEquivocationUnsigned['v9111'],
	v9130Kusama: kusamaCalls.reportEquivocationUnsigned['v9130'],
}

export const planConfigChange = {
	name: 'Babe.plan_config_change',
	v2030Kusama: kusamaCalls.planConfigChange['v2030'],
	v9111Kusama: kusamaCalls.planConfigChange['v9111'],
}
