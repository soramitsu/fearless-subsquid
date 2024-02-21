import * as kusamaCalls from '../../kusama/election-provider-multi-phase/calls'


export const submitUnsigned = {
	name: 'ElectionProviderMultiPhase.submit_unsigned',
	v2029Kusama: kusamaCalls.submitUnsigned['v2029'],
	v9010Kusama: kusamaCalls.submitUnsigned['v9010'],
	v9100Kusama: kusamaCalls.submitUnsigned['v9100'],
	v9111Kusama: kusamaCalls.submitUnsigned['v9111'],
	v9180Kusama: kusamaCalls.submitUnsigned['v9180'],
}

export const setMinimumUntrustedScore = {
	name: 'ElectionProviderMultiPhase.set_minimum_untrusted_score',
	v9040Kusama: kusamaCalls.setMinimumUntrustedScore['v9040'],
	v9180Kusama: kusamaCalls.setMinimumUntrustedScore['v9180'],
}

export const setEmergencyElectionResult = {
	name: 'ElectionProviderMultiPhase.set_emergency_election_result',
	v9050Kusama: kusamaCalls.setEmergencyElectionResult['v9050'],
	v9090Kusama: kusamaCalls.setEmergencyElectionResult['v9090'],
}

export const submit = {
	name: 'ElectionProviderMultiPhase.submit',
	v9080Kusama: kusamaCalls.submit['v9080'],
	v9100Kusama: kusamaCalls.submit['v9100'],
	v9111Kusama: kusamaCalls.submit['v9111'],
	v9180Kusama: kusamaCalls.submit['v9180'],
}

export const governanceFallback = {
	name: 'ElectionProviderMultiPhase.governance_fallback',
	v9170Kusama: kusamaCalls.governanceFallback['v9170'],
}
