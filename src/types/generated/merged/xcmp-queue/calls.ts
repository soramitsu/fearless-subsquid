import * as soraPolkadotCalls from '../../sora-polkadot/xcmp-queue/calls'
import * as soraKusamaCalls from '../../sora-kusama/xcmp-queue/calls'


export const serviceOverweight = {
	name: 'XcmpQueue.service_overweight',
	soraPolkadotV1: soraPolkadotCalls.serviceOverweight['v1'],
	soraPolkadotV10: soraPolkadotCalls.serviceOverweight['v10'],
	soraKusamaV7: soraKusamaCalls.serviceOverweight['v7'],
}

export const suspendXcmExecution = {
	name: 'XcmpQueue.suspend_xcm_execution',
	soraPolkadotV1: soraPolkadotCalls.suspendXcmExecution['v1'],
	soraKusamaV7: soraKusamaCalls.suspendXcmExecution['v7'],
}

export const resumeXcmExecution = {
	name: 'XcmpQueue.resume_xcm_execution',
	soraPolkadotV1: soraPolkadotCalls.resumeXcmExecution['v1'],
	soraKusamaV7: soraKusamaCalls.resumeXcmExecution['v7'],
}

export const updateSuspendThreshold = {
	name: 'XcmpQueue.update_suspend_threshold',
	soraPolkadotV1: soraPolkadotCalls.updateSuspendThreshold['v1'],
	soraKusamaV7: soraKusamaCalls.updateSuspendThreshold['v7'],
}

export const updateDropThreshold = {
	name: 'XcmpQueue.update_drop_threshold',
	soraPolkadotV1: soraPolkadotCalls.updateDropThreshold['v1'],
	soraKusamaV7: soraKusamaCalls.updateDropThreshold['v7'],
}

export const updateResumeThreshold = {
	name: 'XcmpQueue.update_resume_threshold',
	soraPolkadotV1: soraPolkadotCalls.updateResumeThreshold['v1'],
	soraKusamaV7: soraKusamaCalls.updateResumeThreshold['v7'],
}

export const updateThresholdWeight = {
	name: 'XcmpQueue.update_threshold_weight',
	soraPolkadotV1: soraPolkadotCalls.updateThresholdWeight['v1'],
	soraPolkadotV10: soraPolkadotCalls.updateThresholdWeight['v10'],
	soraKusamaV7: soraKusamaCalls.updateThresholdWeight['v7'],
}

export const updateWeightRestrictDecay = {
	name: 'XcmpQueue.update_weight_restrict_decay',
	soraPolkadotV1: soraPolkadotCalls.updateWeightRestrictDecay['v1'],
	soraPolkadotV10: soraPolkadotCalls.updateWeightRestrictDecay['v10'],
	soraKusamaV7: soraKusamaCalls.updateWeightRestrictDecay['v7'],
}

export const updateXcmpMaxIndividualWeight = {
	name: 'XcmpQueue.update_xcmp_max_individual_weight',
	soraPolkadotV1: soraPolkadotCalls.updateXcmpMaxIndividualWeight['v1'],
	soraPolkadotV10: soraPolkadotCalls.updateXcmpMaxIndividualWeight['v10'],
	soraKusamaV7: soraKusamaCalls.updateXcmpMaxIndividualWeight['v7'],
}
