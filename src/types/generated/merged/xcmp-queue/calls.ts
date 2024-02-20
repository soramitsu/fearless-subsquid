import * as soraPolkadotCalls from '../../sora-polkadot/xcmp-queue/calls'
import * as soraKusamaCalls from '../../sora-kusama/xcmp-queue/calls'


export const serviceOverweight = {
	name: 'XcmpQueue.service_overweight',
	v1SoraPolkadot: soraPolkadotCalls.serviceOverweight['v1'],
	v10SoraPolkadot: soraPolkadotCalls.serviceOverweight['v10'],
	v7SoraKusama: soraKusamaCalls.serviceOverweight['v7'],
}

export const suspendXcmExecution = {
	name: 'XcmpQueue.suspend_xcm_execution',
	v1SoraPolkadot: soraPolkadotCalls.suspendXcmExecution['v1'],
	v7SoraKusama: soraKusamaCalls.suspendXcmExecution['v7'],
}

export const resumeXcmExecution = {
	name: 'XcmpQueue.resume_xcm_execution',
	v1SoraPolkadot: soraPolkadotCalls.resumeXcmExecution['v1'],
	v7SoraKusama: soraKusamaCalls.resumeXcmExecution['v7'],
}

export const updateSuspendThreshold = {
	name: 'XcmpQueue.update_suspend_threshold',
	v1SoraPolkadot: soraPolkadotCalls.updateSuspendThreshold['v1'],
	v7SoraKusama: soraKusamaCalls.updateSuspendThreshold['v7'],
}

export const updateDropThreshold = {
	name: 'XcmpQueue.update_drop_threshold',
	v1SoraPolkadot: soraPolkadotCalls.updateDropThreshold['v1'],
	v7SoraKusama: soraKusamaCalls.updateDropThreshold['v7'],
}

export const updateResumeThreshold = {
	name: 'XcmpQueue.update_resume_threshold',
	v1SoraPolkadot: soraPolkadotCalls.updateResumeThreshold['v1'],
	v7SoraKusama: soraKusamaCalls.updateResumeThreshold['v7'],
}

export const updateThresholdWeight = {
	name: 'XcmpQueue.update_threshold_weight',
	v1SoraPolkadot: soraPolkadotCalls.updateThresholdWeight['v1'],
	v10SoraPolkadot: soraPolkadotCalls.updateThresholdWeight['v10'],
	v7SoraKusama: soraKusamaCalls.updateThresholdWeight['v7'],
}

export const updateWeightRestrictDecay = {
	name: 'XcmpQueue.update_weight_restrict_decay',
	v1SoraPolkadot: soraPolkadotCalls.updateWeightRestrictDecay['v1'],
	v10SoraPolkadot: soraPolkadotCalls.updateWeightRestrictDecay['v10'],
	v7SoraKusama: soraKusamaCalls.updateWeightRestrictDecay['v7'],
}

export const updateXcmpMaxIndividualWeight = {
	name: 'XcmpQueue.update_xcmp_max_individual_weight',
	v1SoraPolkadot: soraPolkadotCalls.updateXcmpMaxIndividualWeight['v1'],
	v10SoraPolkadot: soraPolkadotCalls.updateXcmpMaxIndividualWeight['v10'],
	v7SoraKusama: soraKusamaCalls.updateXcmpMaxIndividualWeight['v7'],
}
