import * as kusamaCalls from '../../kusama/grandpa/calls'


export const reportMisbehavior = {
	name: 'Grandpa.report_misbehavior',
	v1020Kusama: kusamaCalls.reportMisbehavior['v1020'],
}

export const reportEquivocation = {
	name: 'Grandpa.report_equivocation',
	v2005Kusama: kusamaCalls.reportEquivocation['v2005'],
}

export const reportEquivocationUnsigned = {
	name: 'Grandpa.report_equivocation_unsigned',
	v2015Kusama: kusamaCalls.reportEquivocationUnsigned['v2015'],
}

export const noteStalled = {
	name: 'Grandpa.note_stalled',
	v2022Kusama: kusamaCalls.noteStalled['v2022'],
}
