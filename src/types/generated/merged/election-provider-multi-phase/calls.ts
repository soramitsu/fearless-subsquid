import * as polkadotCalls from '../../polkadot/election-provider-multi-phase/calls'


export const submitUnsigned = {
	name: 'ElectionProviderMultiPhase.submit_unsigned',
	v29Polkadot: polkadotCalls.submitUnsigned['v29'],
	v9100Polkadot: polkadotCalls.submitUnsigned['v9100'],
	v9110Polkadot: polkadotCalls.submitUnsigned['v9110'],
	v9180Polkadot: polkadotCalls.submitUnsigned['v9180'],
}

export const setMinimumUntrustedScore = {
	name: 'ElectionProviderMultiPhase.set_minimum_untrusted_score',
	v9050Polkadot: polkadotCalls.setMinimumUntrustedScore['v9050'],
	v9180Polkadot: polkadotCalls.setMinimumUntrustedScore['v9180'],
}

export const setEmergencyElectionResult = {
	name: 'ElectionProviderMultiPhase.set_emergency_election_result',
	v9050Polkadot: polkadotCalls.setEmergencyElectionResult['v9050'],
	v9090Polkadot: polkadotCalls.setEmergencyElectionResult['v9090'],
}

export const submit = {
	name: 'ElectionProviderMultiPhase.submit',
	v9080Polkadot: polkadotCalls.submit['v9080'],
	v9100Polkadot: polkadotCalls.submit['v9100'],
	v9110Polkadot: polkadotCalls.submit['v9110'],
	v9180Polkadot: polkadotCalls.submit['v9180'],
}

export const governanceFallback = {
	name: 'ElectionProviderMultiPhase.governance_fallback',
	v9170Polkadot: polkadotCalls.governanceFallback['v9170'],
}
