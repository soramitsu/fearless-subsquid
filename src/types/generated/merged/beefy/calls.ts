import * as kusamaCalls from '../../kusama/beefy/calls'


export const reportEquivocation = {
	name: 'Beefy.report_equivocation',
	v1000000Kusama: kusamaCalls.reportEquivocation['v1000000'],
}

export const reportEquivocationUnsigned = {
	name: 'Beefy.report_equivocation_unsigned',
	v1000000Kusama: kusamaCalls.reportEquivocationUnsigned['v1000000'],
}

export const setNewGenesis = {
	name: 'Beefy.set_new_genesis',
	v1001000Kusama: kusamaCalls.setNewGenesis['v1001000'],
}
