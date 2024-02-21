import * as kusamaCalls from '../../kusama/configuration/calls'


export const setValidationUpgradeFrequency = {
	name: 'Configuration.set_validation_upgrade_frequency',
	v9090Kusama: kusamaCalls.setValidationUpgradeFrequency['v9090'],
}

export const setValidationUpgradeDelay = {
	name: 'Configuration.set_validation_upgrade_delay',
	v9090Kusama: kusamaCalls.setValidationUpgradeDelay['v9090'],
}

export const setCodeRetentionPeriod = {
	name: 'Configuration.set_code_retention_period',
	v9090Kusama: kusamaCalls.setCodeRetentionPeriod['v9090'],
}

export const setMaxCodeSize = {
	name: 'Configuration.set_max_code_size',
	v9090Kusama: kusamaCalls.setMaxCodeSize['v9090'],
}

export const setMaxPovSize = {
	name: 'Configuration.set_max_pov_size',
	v9090Kusama: kusamaCalls.setMaxPovSize['v9090'],
}

export const setMaxHeadDataSize = {
	name: 'Configuration.set_max_head_data_size',
	v9090Kusama: kusamaCalls.setMaxHeadDataSize['v9090'],
}

export const setParathreadCores = {
	name: 'Configuration.set_parathread_cores',
	v9090Kusama: kusamaCalls.setParathreadCores['v9090'],
}

export const setParathreadRetries = {
	name: 'Configuration.set_parathread_retries',
	v9090Kusama: kusamaCalls.setParathreadRetries['v9090'],
}

export const setGroupRotationFrequency = {
	name: 'Configuration.set_group_rotation_frequency',
	v9090Kusama: kusamaCalls.setGroupRotationFrequency['v9090'],
}

export const setChainAvailabilityPeriod = {
	name: 'Configuration.set_chain_availability_period',
	v9090Kusama: kusamaCalls.setChainAvailabilityPeriod['v9090'],
}

export const setThreadAvailabilityPeriod = {
	name: 'Configuration.set_thread_availability_period',
	v9090Kusama: kusamaCalls.setThreadAvailabilityPeriod['v9090'],
}

export const setSchedulingLookahead = {
	name: 'Configuration.set_scheduling_lookahead',
	v9090Kusama: kusamaCalls.setSchedulingLookahead['v9090'],
}

export const setMaxValidatorsPerCore = {
	name: 'Configuration.set_max_validators_per_core',
	v9090Kusama: kusamaCalls.setMaxValidatorsPerCore['v9090'],
}

export const setMaxValidators = {
	name: 'Configuration.set_max_validators',
	v9090Kusama: kusamaCalls.setMaxValidators['v9090'],
}

export const setDisputePeriod = {
	name: 'Configuration.set_dispute_period',
	v9090Kusama: kusamaCalls.setDisputePeriod['v9090'],
}

export const setDisputePostConclusionAcceptancePeriod = {
	name: 'Configuration.set_dispute_post_conclusion_acceptance_period',
	v9090Kusama: kusamaCalls.setDisputePostConclusionAcceptancePeriod['v9090'],
}

export const setDisputeMaxSpamSlots = {
	name: 'Configuration.set_dispute_max_spam_slots',
	v9090Kusama: kusamaCalls.setDisputeMaxSpamSlots['v9090'],
}

export const setDisputeConclusionByTimeOutPeriod = {
	name: 'Configuration.set_dispute_conclusion_by_time_out_period',
	v9090Kusama: kusamaCalls.setDisputeConclusionByTimeOutPeriod['v9090'],
}

export const setNoShowSlots = {
	name: 'Configuration.set_no_show_slots',
	v9090Kusama: kusamaCalls.setNoShowSlots['v9090'],
}

export const setNDelayTranches = {
	name: 'Configuration.set_n_delay_tranches',
	v9090Kusama: kusamaCalls.setNDelayTranches['v9090'],
}

export const setZerothDelayTrancheWidth = {
	name: 'Configuration.set_zeroth_delay_tranche_width',
	v9090Kusama: kusamaCalls.setZerothDelayTrancheWidth['v9090'],
}

export const setNeededApprovals = {
	name: 'Configuration.set_needed_approvals',
	v9090Kusama: kusamaCalls.setNeededApprovals['v9090'],
}

export const setRelayVrfModuloSamples = {
	name: 'Configuration.set_relay_vrf_modulo_samples',
	v9090Kusama: kusamaCalls.setRelayVrfModuloSamples['v9090'],
}

export const setMaxUpwardQueueCount = {
	name: 'Configuration.set_max_upward_queue_count',
	v9090Kusama: kusamaCalls.setMaxUpwardQueueCount['v9090'],
}

export const setMaxUpwardQueueSize = {
	name: 'Configuration.set_max_upward_queue_size',
	v9090Kusama: kusamaCalls.setMaxUpwardQueueSize['v9090'],
}

export const setMaxDownwardMessageSize = {
	name: 'Configuration.set_max_downward_message_size',
	v9090Kusama: kusamaCalls.setMaxDownwardMessageSize['v9090'],
}

export const setUmpServiceTotalWeight = {
	name: 'Configuration.set_ump_service_total_weight',
	v9090Kusama: kusamaCalls.setUmpServiceTotalWeight['v9090'],
	v9291Kusama: kusamaCalls.setUmpServiceTotalWeight['v9291'],
	v9320Kusama: kusamaCalls.setUmpServiceTotalWeight['v9320'],
}

export const setMaxUpwardMessageSize = {
	name: 'Configuration.set_max_upward_message_size',
	v9090Kusama: kusamaCalls.setMaxUpwardMessageSize['v9090'],
}

export const setMaxUpwardMessageNumPerCandidate = {
	name: 'Configuration.set_max_upward_message_num_per_candidate',
	v9090Kusama: kusamaCalls.setMaxUpwardMessageNumPerCandidate['v9090'],
}

export const setHrmpOpenRequestTtl = {
	name: 'Configuration.set_hrmp_open_request_ttl',
	v9090Kusama: kusamaCalls.setHrmpOpenRequestTtl['v9090'],
}

export const setHrmpSenderDeposit = {
	name: 'Configuration.set_hrmp_sender_deposit',
	v9090Kusama: kusamaCalls.setHrmpSenderDeposit['v9090'],
}

export const setHrmpRecipientDeposit = {
	name: 'Configuration.set_hrmp_recipient_deposit',
	v9090Kusama: kusamaCalls.setHrmpRecipientDeposit['v9090'],
}

export const setHrmpChannelMaxCapacity = {
	name: 'Configuration.set_hrmp_channel_max_capacity',
	v9090Kusama: kusamaCalls.setHrmpChannelMaxCapacity['v9090'],
}

export const setHrmpChannelMaxTotalSize = {
	name: 'Configuration.set_hrmp_channel_max_total_size',
	v9090Kusama: kusamaCalls.setHrmpChannelMaxTotalSize['v9090'],
}

export const setHrmpMaxParachainInboundChannels = {
	name: 'Configuration.set_hrmp_max_parachain_inbound_channels',
	v9090Kusama: kusamaCalls.setHrmpMaxParachainInboundChannels['v9090'],
}

export const setHrmpMaxParathreadInboundChannels = {
	name: 'Configuration.set_hrmp_max_parathread_inbound_channels',
	v9090Kusama: kusamaCalls.setHrmpMaxParathreadInboundChannels['v9090'],
}

export const setHrmpChannelMaxMessageSize = {
	name: 'Configuration.set_hrmp_channel_max_message_size',
	v9090Kusama: kusamaCalls.setHrmpChannelMaxMessageSize['v9090'],
}

export const setHrmpMaxParachainOutboundChannels = {
	name: 'Configuration.set_hrmp_max_parachain_outbound_channels',
	v9090Kusama: kusamaCalls.setHrmpMaxParachainOutboundChannels['v9090'],
}

export const setHrmpMaxParathreadOutboundChannels = {
	name: 'Configuration.set_hrmp_max_parathread_outbound_channels',
	v9090Kusama: kusamaCalls.setHrmpMaxParathreadOutboundChannels['v9090'],
}

export const setHrmpMaxMessageNumPerCandidate = {
	name: 'Configuration.set_hrmp_max_message_num_per_candidate',
	v9090Kusama: kusamaCalls.setHrmpMaxMessageNumPerCandidate['v9090'],
}

export const setUmpMaxIndividualWeight = {
	name: 'Configuration.set_ump_max_individual_weight',
	v9100Kusama: kusamaCalls.setUmpMaxIndividualWeight['v9100'],
	v9291Kusama: kusamaCalls.setUmpMaxIndividualWeight['v9291'],
	v9320Kusama: kusamaCalls.setUmpMaxIndividualWeight['v9320'],
}

export const setValidationUpgradeCooldown = {
	name: 'Configuration.set_validation_upgrade_cooldown',
	v9160Kusama: kusamaCalls.setValidationUpgradeCooldown['v9160'],
}

export const setPvfCheckingEnabled = {
	name: 'Configuration.set_pvf_checking_enabled',
	v9160Kusama: kusamaCalls.setPvfCheckingEnabled['v9160'],
}

export const setPvfVotingTtl = {
	name: 'Configuration.set_pvf_voting_ttl',
	v9160Kusama: kusamaCalls.setPvfVotingTtl['v9160'],
}

export const setMinimumValidationUpgradeDelay = {
	name: 'Configuration.set_minimum_validation_upgrade_delay',
	v9160Kusama: kusamaCalls.setMinimumValidationUpgradeDelay['v9160'],
}

export const setBypassConsistencyCheck = {
	name: 'Configuration.set_bypass_consistency_check',
	v9160Kusama: kusamaCalls.setBypassConsistencyCheck['v9160'],
}

export const setAsyncBackingParams = {
	name: 'Configuration.set_async_backing_params',
	v9420Kusama: kusamaCalls.setAsyncBackingParams['v9420'],
}

export const setExecutorParams = {
	name: 'Configuration.set_executor_params',
	v9420Kusama: kusamaCalls.setExecutorParams['v9420'],
}

export const setOnDemandCores = {
	name: 'Configuration.set_on_demand_cores',
	v1000000Kusama: kusamaCalls.setOnDemandCores['v1000000'],
}

export const setOnDemandRetries = {
	name: 'Configuration.set_on_demand_retries',
	v1000000Kusama: kusamaCalls.setOnDemandRetries['v1000000'],
}

export const setParasAvailabilityPeriod = {
	name: 'Configuration.set_paras_availability_period',
	v1000000Kusama: kusamaCalls.setParasAvailabilityPeriod['v1000000'],
}

export const setOnDemandBaseFee = {
	name: 'Configuration.set_on_demand_base_fee',
	v1000000Kusama: kusamaCalls.setOnDemandBaseFee['v1000000'],
}

export const setOnDemandFeeVariability = {
	name: 'Configuration.set_on_demand_fee_variability',
	v1000000Kusama: kusamaCalls.setOnDemandFeeVariability['v1000000'],
}

export const setOnDemandQueueMaxSize = {
	name: 'Configuration.set_on_demand_queue_max_size',
	v1000000Kusama: kusamaCalls.setOnDemandQueueMaxSize['v1000000'],
}

export const setOnDemandTargetQueueUtilization = {
	name: 'Configuration.set_on_demand_target_queue_utilization',
	v1000000Kusama: kusamaCalls.setOnDemandTargetQueueUtilization['v1000000'],
}

export const setOnDemandTtl = {
	name: 'Configuration.set_on_demand_ttl',
	v1000000Kusama: kusamaCalls.setOnDemandTtl['v1000000'],
}

export const setMinimumBackingVotes = {
	name: 'Configuration.set_minimum_backing_votes',
	v1000000Kusama: kusamaCalls.setMinimumBackingVotes['v1000000'],
}
