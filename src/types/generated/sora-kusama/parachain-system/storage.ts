import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v7 from '../v7'

export const pendingValidationCode =  {
    /**
     *  In case of a scheduled upgrade, this storage field contains the validation code to be applied.
     * 
     *  As soon as the relay chain gives us the go-ahead signal, we will overwrite the [`:code`][well_known_keys::CODE]
     *  which will result the next block process with the new validation code. This concludes the upgrade process.
     * 
     *  [well_known_keys::CODE]: sp_core::storage::well_known_keys::CODE
     */
    v1: new StorageType('ParachainSystem.PendingValidationCode', 'Default', [], sts.bytes()) as PendingValidationCodeV1,
}

/**
 *  In case of a scheduled upgrade, this storage field contains the validation code to be applied.
 * 
 *  As soon as the relay chain gives us the go-ahead signal, we will overwrite the [`:code`][well_known_keys::CODE]
 *  which will result the next block process with the new validation code. This concludes the upgrade process.
 * 
 *  [well_known_keys::CODE]: sp_core::storage::well_known_keys::CODE
 */
export interface PendingValidationCodeV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
    get(block: Block): Promise<(Bytes | undefined)>
}

export const newValidationCode =  {
    /**
     *  Validation code that is set by the parachain and is to be communicated to collator and
     *  consequently the relay-chain.
     * 
     *  This will be cleared in `on_initialize` of each new block if no other pallet already set
     *  the value.
     */
    v1: new StorageType('ParachainSystem.NewValidationCode', 'Optional', [], sts.bytes()) as NewValidationCodeV1,
}

/**
 *  Validation code that is set by the parachain and is to be communicated to collator and
 *  consequently the relay-chain.
 * 
 *  This will be cleared in `on_initialize` of each new block if no other pallet already set
 *  the value.
 */
export interface NewValidationCodeV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(Bytes | undefined)>
}

export const validationData =  {
    /**
     *  The [`PersistedValidationData`] set for this block.
     *  This value is expected to be set only once per block and it's never stored
     *  in the trie.
     */
    v1: new StorageType('ParachainSystem.ValidationData', 'Optional', [], v1.V1PersistedValidationData) as ValidationDataV1,
}

/**
 *  The [`PersistedValidationData`] set for this block.
 *  This value is expected to be set only once per block and it's never stored
 *  in the trie.
 */
export interface ValidationDataV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1.V1PersistedValidationData | undefined)>
}

export const didSetValidationCode =  {
    /**
     *  Were the validation data set to notify the relay chain?
     */
    v1: new StorageType('ParachainSystem.DidSetValidationCode', 'Default', [], sts.boolean()) as DidSetValidationCodeV1,
}

/**
 *  Were the validation data set to notify the relay chain?
 */
export interface DidSetValidationCodeV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const upgradeRestrictionSignal =  {
    /**
     *  An option which indicates if the relay-chain restricts signalling a validation code upgrade.
     *  In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
     *  candidate will be invalid.
     * 
     *  This storage item is a mirror of the corresponding value for the current parachain from the
     *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
     *  set after the inherent.
     */
    v1: new StorageType('ParachainSystem.UpgradeRestrictionSignal', 'Default', [], sts.option(() => v1.V1UpgradeRestriction)) as UpgradeRestrictionSignalV1,
}

/**
 *  An option which indicates if the relay-chain restricts signalling a validation code upgrade.
 *  In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
 *  candidate will be invalid.
 * 
 *  This storage item is a mirror of the corresponding value for the current parachain from the
 *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
 *  set after the inherent.
 */
export interface UpgradeRestrictionSignalV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v1.V1UpgradeRestriction | undefined)
    get(block: Block): Promise<((v1.V1UpgradeRestriction | undefined) | undefined)>
}

export const relevantMessagingState =  {
    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    v1: new StorageType('ParachainSystem.RelevantMessagingState', 'Optional', [], v1.MessagingStateSnapshot) as RelevantMessagingStateV1,
}

/**
 *  The snapshot of some state related to messaging relevant to the current parachain as per
 *  the relay parent.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface RelevantMessagingStateV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1.MessagingStateSnapshot | undefined)>
}

export const hostConfiguration =  {
    /**
     *  The parachain host configuration that was obtained from the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    v1: new StorageType('ParachainSystem.HostConfiguration', 'Optional', [], v1.V1AbridgedHostConfiguration) as HostConfigurationV1,
    /**
     *  The parachain host configuration that was obtained from the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    v7: new StorageType('ParachainSystem.HostConfiguration', 'Optional', [], v7.V2AbridgedHostConfiguration) as HostConfigurationV7,
}

/**
 *  The parachain host configuration that was obtained from the relay parent.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface HostConfigurationV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1.V1AbridgedHostConfiguration | undefined)>
}

/**
 *  The parachain host configuration that was obtained from the relay parent.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface HostConfigurationV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v7.V2AbridgedHostConfiguration | undefined)>
}

export const lastDmqMqcHead =  {
    /**
     *  The last downward message queue chain head we have observed.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    v1: new StorageType('ParachainSystem.LastDmqMqcHead', 'Default', [], v1.MessageQueueChain) as LastDmqMqcHeadV1,
}

/**
 *  The last downward message queue chain head we have observed.
 * 
 *  This value is loaded before and saved after processing inbound downward messages carried
 *  by the system inherent.
 */
export interface LastDmqMqcHeadV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.MessageQueueChain
    get(block: Block): Promise<(v1.MessageQueueChain | undefined)>
}

export const lastHrmpMqcHeads =  {
    /**
     *  The message queue chain heads we have observed per each channel incoming channel.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    v1: new StorageType('ParachainSystem.LastHrmpMqcHeads', 'Default', [], sts.array(() => sts.tuple(() => [v1.Id, v1.MessageQueueChain]))) as LastHrmpMqcHeadsV1,
}

/**
 *  The message queue chain heads we have observed per each channel incoming channel.
 * 
 *  This value is loaded before and saved after processing inbound downward messages carried
 *  by the system inherent.
 */
export interface LastHrmpMqcHeadsV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1.Id, v1.MessageQueueChain][]
    get(block: Block): Promise<([v1.Id, v1.MessageQueueChain][] | undefined)>
}

export const processedDownwardMessages =  {
    /**
     *  Number of downward messages processed in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    v1: new StorageType('ParachainSystem.ProcessedDownwardMessages', 'Default', [], sts.number()) as ProcessedDownwardMessagesV1,
}

/**
 *  Number of downward messages processed in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ProcessedDownwardMessagesV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const hrmpWatermark =  {
    /**
     *  HRMP watermark that was set in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    v1: new StorageType('ParachainSystem.HrmpWatermark', 'Default', [], sts.number()) as HrmpWatermarkV1,
}

/**
 *  HRMP watermark that was set in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface HrmpWatermarkV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const hrmpOutboundMessages =  {
    /**
     *  HRMP messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    v1: new StorageType('ParachainSystem.HrmpOutboundMessages', 'Default', [], sts.array(() => v1.OutboundHrmpMessage)) as HrmpOutboundMessagesV1,
}

/**
 *  HRMP messages that were sent in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface HrmpOutboundMessagesV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.OutboundHrmpMessage[]
    get(block: Block): Promise<(v1.OutboundHrmpMessage[] | undefined)>
}

export const upwardMessages =  {
    /**
     *  Upward messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    v1: new StorageType('ParachainSystem.UpwardMessages', 'Default', [], sts.array(() => sts.bytes())) as UpwardMessagesV1,
}

/**
 *  Upward messages that were sent in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface UpwardMessagesV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes[]
    get(block: Block): Promise<(Bytes[] | undefined)>
}

export const pendingUpwardMessages =  {
    /**
     *  Upward messages that are still pending and not yet send to the relay chain.
     */
    v1: new StorageType('ParachainSystem.PendingUpwardMessages', 'Default', [], sts.array(() => sts.bytes())) as PendingUpwardMessagesV1,
}

/**
 *  Upward messages that are still pending and not yet send to the relay chain.
 */
export interface PendingUpwardMessagesV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes[]
    get(block: Block): Promise<(Bytes[] | undefined)>
}

export const announcedHrmpMessagesPerCandidate =  {
    /**
     *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
     *  announcing the weight of `on_initialize` and `on_finalize`.
     */
    v1: new StorageType('ParachainSystem.AnnouncedHrmpMessagesPerCandidate', 'Default', [], sts.number()) as AnnouncedHrmpMessagesPerCandidateV1,
}

/**
 *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
 *  announcing the weight of `on_initialize` and `on_finalize`.
 */
export interface AnnouncedHrmpMessagesPerCandidateV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const reservedXcmpWeightOverride =  {
    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    v1: new StorageType('ParachainSystem.ReservedXcmpWeightOverride', 'Optional', [], sts.bigint()) as ReservedXcmpWeightOverrideV1,
    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    v7: new StorageType('ParachainSystem.ReservedXcmpWeightOverride', 'Optional', [], v7.Weight) as ReservedXcmpWeightOverrideV7,
}

/**
 *  The weight we reserve at the beginning of the block for processing XCMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ReservedXcmpWeightOverrideV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(bigint | undefined)>
}

/**
 *  The weight we reserve at the beginning of the block for processing XCMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ReservedXcmpWeightOverrideV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v7.Weight | undefined)>
}

export const reservedDmpWeightOverride =  {
    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    v1: new StorageType('ParachainSystem.ReservedDmpWeightOverride', 'Optional', [], sts.bigint()) as ReservedDmpWeightOverrideV1,
    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    v7: new StorageType('ParachainSystem.ReservedDmpWeightOverride', 'Optional', [], v7.Weight) as ReservedDmpWeightOverrideV7,
}

/**
 *  The weight we reserve at the beginning of the block for processing DMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ReservedDmpWeightOverrideV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(bigint | undefined)>
}

/**
 *  The weight we reserve at the beginning of the block for processing DMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ReservedDmpWeightOverrideV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v7.Weight | undefined)>
}

export const authorizedUpgrade =  {
    /**
     *  The next authorized upgrade, if there is one.
     */
    v1: new StorageType('ParachainSystem.AuthorizedUpgrade', 'Optional', [], v1.H256) as AuthorizedUpgradeV1,
}

/**
 *  The next authorized upgrade, if there is one.
 */
export interface AuthorizedUpgradeV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1.H256 | undefined)>
}

export const lastRelayChainBlockNumber =  {
    /**
     *  The relay chain block number associated with the last parachain block.
     */
    v7: new StorageType('ParachainSystem.LastRelayChainBlockNumber', 'Default', [], sts.number()) as LastRelayChainBlockNumberV7,
}

/**
 *  The relay chain block number associated with the last parachain block.
 */
export interface LastRelayChainBlockNumberV7  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const relayStateProof =  {
    /**
     *  The state proof for the last relay parent block.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    v7: new StorageType('ParachainSystem.RelayStateProof', 'Optional', [], v7.StorageProof) as RelayStateProofV7,
}

/**
 *  The state proof for the last relay parent block.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface RelayStateProofV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v7.StorageProof | undefined)>
}

export const customValidationHeadData =  {
    /**
     *  A custom head data that should be returned as result of `validate_block`.
     * 
     *  See [`Pallet::set_custom_validation_head_data`] for more information.
     */
    v7: new StorageType('ParachainSystem.CustomValidationHeadData', 'Optional', [], sts.bytes()) as CustomValidationHeadDataV7,
}

/**
 *  A custom head data that should be returned as result of `validate_block`.
 * 
 *  See [`Pallet::set_custom_validation_head_data`] for more information.
 */
export interface CustomValidationHeadDataV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(Bytes | undefined)>
}
