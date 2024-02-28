import * as polkadotCalls from '../../polkadot/babe/calls'


export const reportEquivocation = {
	name: 'Babe.report_equivocation',
	v14Polkadot: polkadotCalls.reportEquivocation['v14'],
	v9110Polkadot: polkadotCalls.reportEquivocation['v9110'],
	v9140Polkadot: polkadotCalls.reportEquivocation['v9140'],
}

export const reportEquivocationUnsigned = {
	name: 'Babe.report_equivocation_unsigned',
	v14Polkadot: polkadotCalls.reportEquivocationUnsigned['v14'],
	v9110Polkadot: polkadotCalls.reportEquivocationUnsigned['v9110'],
	v9140Polkadot: polkadotCalls.reportEquivocationUnsigned['v9140'],
}

export const planConfigChange = {
	name: 'Babe.plan_config_change',
	v30Polkadot: polkadotCalls.planConfigChange['v30'],
	v9110Polkadot: polkadotCalls.planConfigChange['v9110'],
}
