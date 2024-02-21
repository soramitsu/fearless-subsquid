import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v9010 from '../v9010'
import * as v9040 from '../v9040'

export const setValidationUpgradeFrequency =  {
    name: 'ParachainsConfiguration.set_validation_upgrade_frequency',
    /**
     *  Set the validation upgrade frequency.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_validation_upgrade_frequency',
        sts.struct({
            new: v9010.BlockNumber,
        })
    ),
}

export const setValidationUpgradeDelay =  {
    name: 'ParachainsConfiguration.set_validation_upgrade_delay',
    /**
     *  Set the validation upgrade delay.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_validation_upgrade_delay',
        sts.struct({
            new: v9010.BlockNumber,
        })
    ),
}

export const setCodeRetentionPeriod =  {
    name: 'ParachainsConfiguration.set_code_retention_period',
    /**
     *  Set the acceptance period for an included candidate.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_code_retention_period',
        sts.struct({
            new: v9010.BlockNumber,
        })
    ),
}

export const setMaxCodeSize =  {
    name: 'ParachainsConfiguration.set_max_code_size',
    /**
     *  Set the max validation code size for incoming upgrades.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_max_code_size',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setMaxPovSize =  {
    name: 'ParachainsConfiguration.set_max_pov_size',
    /**
     *  Set the max POV block size for incoming upgrades.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_max_pov_size',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setMaxHeadDataSize =  {
    name: 'ParachainsConfiguration.set_max_head_data_size',
    /**
     *  Set the max head data size for paras.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_max_head_data_size',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setParathreadCores =  {
    name: 'ParachainsConfiguration.set_parathread_cores',
    /**
     *  Set the number of parathread execution cores.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_parathread_cores',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setParathreadRetries =  {
    name: 'ParachainsConfiguration.set_parathread_retries',
    /**
     *  Set the number of retries for a particular parathread.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_parathread_retries',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setGroupRotationFrequency =  {
    name: 'ParachainsConfiguration.set_group_rotation_frequency',
    /**
     *  Set the parachain validator-group rotation frequency
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_group_rotation_frequency',
        sts.struct({
            new: v9010.BlockNumber,
        })
    ),
}

export const setChainAvailabilityPeriod =  {
    name: 'ParachainsConfiguration.set_chain_availability_period',
    /**
     *  Set the availability period for parachains.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_chain_availability_period',
        sts.struct({
            new: v9010.BlockNumber,
        })
    ),
}

export const setThreadAvailabilityPeriod =  {
    name: 'ParachainsConfiguration.set_thread_availability_period',
    /**
     *  Set the availability period for parathreads.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_thread_availability_period',
        sts.struct({
            new: v9010.BlockNumber,
        })
    ),
}

export const setSchedulingLookahead =  {
    name: 'ParachainsConfiguration.set_scheduling_lookahead',
    /**
     *  Set the scheduling lookahead, in expected number of blocks at peak throughput.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_scheduling_lookahead',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setMaxValidatorsPerCore =  {
    name: 'ParachainsConfiguration.set_max_validators_per_core',
    /**
     *  Set the maximum number of validators to assign to any core.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_max_validators_per_core',
        sts.struct({
            new: sts.option(() => sts.number()),
        })
    ),
}

export const setMaxValidators =  {
    name: 'ParachainsConfiguration.set_max_validators',
    /**
     *  Set the maximum number of validators to use in parachain consensus.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_max_validators',
        sts.struct({
            new: sts.option(() => sts.number()),
        })
    ),
}

export const setDisputePeriod =  {
    name: 'ParachainsConfiguration.set_dispute_period',
    /**
     *  Set the dispute period, in number of sessions to keep for disputes.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_dispute_period',
        sts.struct({
            new: v9010.SessionIndex,
        })
    ),
}

export const setDisputePostConclusionAcceptancePeriod =  {
    name: 'ParachainsConfiguration.set_dispute_post_conclusion_acceptance_period',
    /**
     *  Set the dispute post conclusion acceptance period.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_dispute_post_conclusion_acceptance_period',
        sts.struct({
            new: v9010.BlockNumber,
        })
    ),
}

export const setDisputeMaxSpamSlots =  {
    name: 'ParachainsConfiguration.set_dispute_max_spam_slots',
    /**
     *  Set the maximum number of dispute spam slots.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_dispute_max_spam_slots',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setDisputeConclusionByTimeOutPeriod =  {
    name: 'ParachainsConfiguration.set_dispute_conclusion_by_time_out_period',
    /**
     *  Set the dispute conclusion by time out period.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_dispute_conclusion_by_time_out_period',
        sts.struct({
            new: v9010.BlockNumber,
        })
    ),
}

export const setNoShowSlots =  {
    name: 'ParachainsConfiguration.set_no_show_slots',
    /**
     *  Set the no show slots, in number of number of consensus slots.
     *  Must be at least 1.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_no_show_slots',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setNDelayTranches =  {
    name: 'ParachainsConfiguration.set_n_delay_tranches',
    /**
     *  Set the total number of delay tranches.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_n_delay_tranches',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setZerothDelayTrancheWidth =  {
    name: 'ParachainsConfiguration.set_zeroth_delay_tranche_width',
    /**
     *  Set the zeroth delay tranche width.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_zeroth_delay_tranche_width',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setNeededApprovals =  {
    name: 'ParachainsConfiguration.set_needed_approvals',
    /**
     *  Set the number of validators needed to approve a block.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_needed_approvals',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setRelayVrfModuloSamples =  {
    name: 'ParachainsConfiguration.set_relay_vrf_modulo_samples',
    /**
     *  Set the number of samples to do of the RelayVRFModulo approval assignment criterion.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_relay_vrf_modulo_samples',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setMaxUpwardQueueCount =  {
    name: 'ParachainsConfiguration.set_max_upward_queue_count',
    /**
     *  Sets the maximum items that can present in a upward dispatch queue at once.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_max_upward_queue_count',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setMaxUpwardQueueSize =  {
    name: 'ParachainsConfiguration.set_max_upward_queue_size',
    /**
     *  Sets the maximum total size of items that can present in a upward dispatch queue at once.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_max_upward_queue_size',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setMaxDownwardMessageSize =  {
    name: 'ParachainsConfiguration.set_max_downward_message_size',
    /**
     *  Set the critical downward message size.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_max_downward_message_size',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setPreferredDispatchableUpwardMessagesStepWeight =  {
    name: 'ParachainsConfiguration.set_preferred_dispatchable_upward_messages_step_weight',
    /**
     *  Sets the soft limit for the phase of dispatching dispatchable upward messages.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_preferred_dispatchable_upward_messages_step_weight',
        sts.struct({
            new: v9010.Weight,
        })
    ),
}

export const setMaxUpwardMessageSize =  {
    name: 'ParachainsConfiguration.set_max_upward_message_size',
    /**
     *  Sets the maximum size of an upward message that can be sent by a candidate.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_max_upward_message_size',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setMaxUpwardMessageNumPerCandidate =  {
    name: 'ParachainsConfiguration.set_max_upward_message_num_per_candidate',
    /**
     *  Sets the maximum number of messages that a candidate can contain.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_max_upward_message_num_per_candidate',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setHrmpOpenRequestTtl =  {
    name: 'ParachainsConfiguration.set_hrmp_open_request_ttl',
    /**
     *  Sets the number of sessions after which an HRMP open channel request expires.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_hrmp_open_request_ttl',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setHrmpSenderDeposit =  {
    name: 'ParachainsConfiguration.set_hrmp_sender_deposit',
    /**
     *  Sets the amount of funds that the sender should provide for opening an HRMP channel.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_hrmp_sender_deposit',
        sts.struct({
            new: v9010.Balance,
        })
    ),
}

export const setHrmpRecipientDeposit =  {
    name: 'ParachainsConfiguration.set_hrmp_recipient_deposit',
    /**
     *  Sets the amount of funds that the recipient should provide for accepting opening an HRMP
     *  channel.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_hrmp_recipient_deposit',
        sts.struct({
            new: v9010.Balance,
        })
    ),
}

export const setHrmpChannelMaxCapacity =  {
    name: 'ParachainsConfiguration.set_hrmp_channel_max_capacity',
    /**
     *  Sets the maximum number of messages allowed in an HRMP channel at once.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_hrmp_channel_max_capacity',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setHrmpChannelMaxTotalSize =  {
    name: 'ParachainsConfiguration.set_hrmp_channel_max_total_size',
    /**
     *  Sets the maximum total size of messages in bytes allowed in an HRMP channel at once.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_hrmp_channel_max_total_size',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setHrmpMaxParachainInboundChannels =  {
    name: 'ParachainsConfiguration.set_hrmp_max_parachain_inbound_channels',
    /**
     *  Sets the maximum number of inbound HRMP channels a parachain is allowed to accept.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_hrmp_max_parachain_inbound_channels',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setHrmpMaxParathreadInboundChannels =  {
    name: 'ParachainsConfiguration.set_hrmp_max_parathread_inbound_channels',
    /**
     *  Sets the maximum number of inbound HRMP channels a parathread is allowed to accept.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_hrmp_max_parathread_inbound_channels',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setHrmpChannelMaxMessageSize =  {
    name: 'ParachainsConfiguration.set_hrmp_channel_max_message_size',
    /**
     *  Sets the maximum size of a message that could ever be put into an HRMP channel.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_hrmp_channel_max_message_size',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setHrmpMaxParachainOutboundChannels =  {
    name: 'ParachainsConfiguration.set_hrmp_max_parachain_outbound_channels',
    /**
     *  Sets the maximum number of outbound HRMP channels a parachain is allowed to open.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_hrmp_max_parachain_outbound_channels',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setHrmpMaxParathreadOutboundChannels =  {
    name: 'ParachainsConfiguration.set_hrmp_max_parathread_outbound_channels',
    /**
     *  Sets the maximum number of outbound HRMP channels a parathread is allowed to open.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_hrmp_max_parathread_outbound_channels',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setHrmpMaxMessageNumPerCandidate =  {
    name: 'ParachainsConfiguration.set_hrmp_max_message_num_per_candidate',
    /**
     *  Sets the maximum number of outbound HRMP messages can be sent by a candidate.
     */
    v9010: new CallType(
        'ParachainsConfiguration.set_hrmp_max_message_num_per_candidate',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setUmpServiceTotalWeight =  {
    name: 'ParachainsConfiguration.set_ump_service_total_weight',
    /**
     *  Sets the soft limit for the phase of dispatching dispatchable upward messages.
     */
    v9040: new CallType(
        'ParachainsConfiguration.set_ump_service_total_weight',
        sts.struct({
            new: v9040.Weight,
        })
    ),
}
