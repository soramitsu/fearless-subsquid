import * as polkadotCalls from '../../polkadot/grandpa/calls'


export const reportEquivocation = {
	name: 'Grandpa.report_equivocation',
	v0Polkadot: polkadotCalls.reportEquivocation['v0'],
}

export const reportEquivocationUnsigned = {
	name: 'Grandpa.report_equivocation_unsigned',
	v15Polkadot: polkadotCalls.reportEquivocationUnsigned['v15'],
}

export const noteStalled = {
	name: 'Grandpa.note_stalled',
	v23Polkadot: polkadotCalls.noteStalled['v23'],
}
