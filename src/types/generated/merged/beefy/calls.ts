import * as polkadotCalls from '../../polkadot/beefy/calls'


export const reportEquivocation = {
	name: 'Beefy.report_equivocation',
	v1001002Polkadot: polkadotCalls.reportEquivocation['v1001002'],
}

export const reportEquivocationUnsigned = {
	name: 'Beefy.report_equivocation_unsigned',
	v1001002Polkadot: polkadotCalls.reportEquivocationUnsigned['v1001002'],
}

export const setNewGenesis = {
	name: 'Beefy.set_new_genesis',
	v1001002Polkadot: polkadotCalls.setNewGenesis['v1001002'],
}
