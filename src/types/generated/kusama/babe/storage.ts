import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v1058 from '../v1058'
import * as v2005 from '../v2005'
import * as v2026 from '../v2026'
import * as v2028 from '../v2028'
import * as v2030 from '../v2030'
import * as v9111 from '../v9111'
import * as v9220 from '../v9220'
import * as v9420 from '../v9420'

export const epochIndex =  {
    /**
     *  Current epoch index.
     */
    v1020: new StorageType('Babe.EpochIndex', 'Default', [], sts.bigint()) as EpochIndexV1020,
}

/**
 *  Current epoch index.
 */
export interface EpochIndexV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const authorities =  {
    /**
     *  Current epoch authorities.
     */
    v1020: new StorageType('Babe.Authorities', 'Default', [], sts.array(() => sts.tuple(() => [v1020.AuthorityId, v1020.BabeAuthorityWeight]))) as AuthoritiesV1020,
}

/**
 *  Current epoch authorities.
 */
export interface AuthoritiesV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1020.AuthorityId, v1020.BabeAuthorityWeight][]
    get(block: Block): Promise<([v1020.AuthorityId, v1020.BabeAuthorityWeight][] | undefined)>
}

export const genesisSlot =  {
    /**
     *  The slot at which the first epoch actually started. This is 0
     *  until the first block of the chain.
     */
    v1020: new StorageType('Babe.GenesisSlot', 'Default', [], sts.bigint()) as GenesisSlotV1020,
}

/**
 *  The slot at which the first epoch actually started. This is 0
 *  until the first block of the chain.
 */
export interface GenesisSlotV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const currentSlot =  {
    /**
     *  Current slot number.
     */
    v1020: new StorageType('Babe.CurrentSlot', 'Default', [], sts.bigint()) as CurrentSlotV1020,
}

/**
 *  Current slot number.
 */
export interface CurrentSlotV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const randomness =  {
    /**
     *  The epoch randomness for the *current* epoch.
     * 
     *  # Security
     * 
     *  This MUST NOT be used for gambling, as it can be influenced by a
     *  malicious validator in the short term. It MAY be used in many
     *  cryptographic protocols, however, so long as one remembers that this
     *  (like everything else on-chain) it is public. For example, it can be
     *  used where a number is needed that cannot have been chosen by an
     *  adversary, for purposes such as public-coin zero-knowledge proofs.
     */
    v1020: new StorageType('Babe.Randomness', 'Default', [], sts.bytes()) as RandomnessV1020,
}

/**
 *  The epoch randomness for the *current* epoch.
 * 
 *  # Security
 * 
 *  This MUST NOT be used for gambling, as it can be influenced by a
 *  malicious validator in the short term. It MAY be used in many
 *  cryptographic protocols, however, so long as one remembers that this
 *  (like everything else on-chain) it is public. For example, it can be
 *  used where a number is needed that cannot have been chosen by an
 *  adversary, for purposes such as public-coin zero-knowledge proofs.
 */
export interface RandomnessV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
    get(block: Block): Promise<(Bytes | undefined)>
}

export const nextRandomness =  {
    /**
     *  Next epoch randomness.
     */
    v1020: new StorageType('Babe.NextRandomness', 'Default', [], sts.bytes()) as NextRandomnessV1020,
}

/**
 *  Next epoch randomness.
 */
export interface NextRandomnessV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
    get(block: Block): Promise<(Bytes | undefined)>
}

export const segmentIndex =  {
    /**
     *  Randomness under construction.
     * 
     *  We make a tradeoff between storage accesses and list length.
     *  We store the under-construction randomness in segments of up to
     *  `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.
     * 
     *  Once a segment reaches this length, we begin the next one.
     *  We reset all segments and return to `0` at the beginning of every
     *  epoch.
     */
    v1020: new StorageType('Babe.SegmentIndex', 'Default', [], sts.number()) as SegmentIndexV1020,
}

/**
 *  Randomness under construction.
 * 
 *  We make a tradeoff between storage accesses and list length.
 *  We store the under-construction randomness in segments of up to
 *  `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.
 * 
 *  Once a segment reaches this length, we begin the next one.
 *  We reset all segments and return to `0` at the beginning of every
 *  epoch.
 */
export interface SegmentIndexV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const underConstruction =  {
    v1020: new StorageType('Babe.UnderConstruction', 'Default', [sts.number()], sts.array(() => sts.bytes())) as UnderConstructionV1020,
}

export interface UnderConstructionV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes[]
    get(block: Block, key: number): Promise<(Bytes[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<(Bytes[] | undefined)[]>
}

export const initialized =  {
    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    v1020: new StorageType('Babe.Initialized', 'Optional', [], v1020.MaybeVrf) as InitializedV1020,
    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    v9220: new StorageType('Babe.Initialized', 'Optional', [], sts.option(() => v9220.PreDigest)) as InitializedV9220,
    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    v9420: new StorageType('Babe.Initialized', 'Optional', [], sts.option(() => v9420.PreDigest)) as InitializedV9420,
}

/**
 *  Temporary value (cleared at block finalization) which is `Some`
 *  if per-block initialization has already been called for current block.
 */
export interface InitializedV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1020.MaybeVrf | undefined)>
}

/**
 *  Temporary value (cleared at block finalization) which is `Some`
 *  if per-block initialization has already been called for current block.
 */
export interface InitializedV9220  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<((v9220.PreDigest | undefined) | undefined)>
}

/**
 *  Temporary value (cleared at block finalization) which is `Some`
 *  if per-block initialization has already been called for current block.
 */
export interface InitializedV9420  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<((v9420.PreDigest | undefined) | undefined)>
}

export const lateness =  {
    /**
     *  How late the current block is compared to its parent.
     * 
     *  This entry is populated as part of block execution and is cleaned up
     *  on block finalization. Querying this storage entry outside of block
     *  execution context should always yield zero.
     */
    v1058: new StorageType('Babe.Lateness', 'Default', [], v1058.BlockNumber) as LatenessV1058,
}

/**
 *  How late the current block is compared to its parent.
 * 
 *  This entry is populated as part of block execution and is cleaned up
 *  on block finalization. Querying this storage entry outside of block
 *  execution context should always yield zero.
 */
export interface LatenessV1058  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1058.BlockNumber
    get(block: Block): Promise<(v1058.BlockNumber | undefined)>
}

export const nextEpochConfig =  {
    /**
     *  Next epoch configuration, if changed.
     */
    v2005: new StorageType('Babe.NextEpochConfig', 'Optional', [], v2005.NextConfigDescriptor) as NextEpochConfigV2005,
    /**
     *  The configuration for the next epoch, `None` if the config will not change
     *  (you can fallback to `EpochConfig` instead in that case).
     */
    v2030: new StorageType('Babe.NextEpochConfig', 'Optional', [], v2030.BabeEpochConfiguration) as NextEpochConfigV2030,
}

/**
 *  Next epoch configuration, if changed.
 */
export interface NextEpochConfigV2005  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v2005.NextConfigDescriptor | undefined)>
}

/**
 *  The configuration for the next epoch, `None` if the config will not change
 *  (you can fallback to `EpochConfig` instead in that case).
 */
export interface NextEpochConfigV2030  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v2030.BabeEpochConfiguration | undefined)>
}

export const authorVrfRandomness =  {
    /**
     *  Temporary value (cleared at block finalization) that includes the VRF output generated
     *  at this block. This field should always be populated during block processing unless
     *  secondary plain slots are enabled (which don't contain a VRF output).
     */
    v2026: new StorageType('Babe.AuthorVrfRandomness', 'Default', [], v2026.MaybeRandomness) as AuthorVrfRandomnessV2026,
}

/**
 *  Temporary value (cleared at block finalization) that includes the VRF output generated
 *  at this block. This field should always be populated during block processing unless
 *  secondary plain slots are enabled (which don't contain a VRF output).
 */
export interface AuthorVrfRandomnessV2026  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v2026.MaybeRandomness
    get(block: Block): Promise<(v2026.MaybeRandomness | undefined)>
}

export const nextAuthorities =  {
    /**
     *  Next epoch authorities.
     */
    v2028: new StorageType('Babe.NextAuthorities', 'Default', [], sts.array(() => sts.tuple(() => [v2028.AuthorityId, v2028.BabeAuthorityWeight]))) as NextAuthoritiesV2028,
}

/**
 *  Next epoch authorities.
 */
export interface NextAuthoritiesV2028  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v2028.AuthorityId, v2028.BabeAuthorityWeight][]
    get(block: Block): Promise<([v2028.AuthorityId, v2028.BabeAuthorityWeight][] | undefined)>
}

export const pendingEpochConfigChange =  {
    /**
     *  Pending epoch configuration change that will be applied when the next epoch is enacted.
     */
    v2030: new StorageType('Babe.PendingEpochConfigChange', 'Optional', [], v2030.NextConfigDescriptor) as PendingEpochConfigChangeV2030,
    /**
     *  Pending epoch configuration change that will be applied when the next epoch is enacted.
     */
    v9111: new StorageType('Babe.PendingEpochConfigChange', 'Optional', [], v9111.NextConfigDescriptor) as PendingEpochConfigChangeV9111,
}

/**
 *  Pending epoch configuration change that will be applied when the next epoch is enacted.
 */
export interface PendingEpochConfigChangeV2030  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v2030.NextConfigDescriptor | undefined)>
}

/**
 *  Pending epoch configuration change that will be applied when the next epoch is enacted.
 */
export interface PendingEpochConfigChangeV9111  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v9111.NextConfigDescriptor | undefined)>
}

export const epochStart =  {
    /**
     *  The block numbers when the last and current epoch have started, respectively `N-1` and
     *  `N`.
     *  NOTE: We track this is in order to annotate the block number when a given pool of
     *  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
     *  slots, which may be skipped, the block numbers may not line up with the slot numbers.
     */
    v2030: new StorageType('Babe.EpochStart', 'Default', [], sts.tuple(() => [v2030.BlockNumber, v2030.BlockNumber])) as EpochStartV2030,
}

/**
 *  The block numbers when the last and current epoch have started, respectively `N-1` and
 *  `N`.
 *  NOTE: We track this is in order to annotate the block number when a given pool of
 *  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
 *  slots, which may be skipped, the block numbers may not line up with the slot numbers.
 */
export interface EpochStartV2030  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v2030.BlockNumber, v2030.BlockNumber]
    get(block: Block): Promise<([v2030.BlockNumber, v2030.BlockNumber] | undefined)>
}

export const epochConfig =  {
    /**
     *  The configuration for the current epoch. Should never be `None` as it is initialized in genesis.
     */
    v2030: new StorageType('Babe.EpochConfig', 'Optional', [], v2030.BabeEpochConfiguration) as EpochConfigV2030,
}

/**
 *  The configuration for the current epoch. Should never be `None` as it is initialized in genesis.
 */
export interface EpochConfigV2030  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v2030.BabeEpochConfiguration | undefined)>
}

export const skippedEpochs =  {
    /**
     *  A list of the last 100 skipped epochs and the corresponding session index
     *  when the epoch was skipped.
     * 
     *  This is only used for validating equivocation proofs. An equivocation proof
     *  must contains a key-ownership proof for a given session, therefore we need a
     *  way to tie together sessions and epoch indices, i.e. we need to validate that
     *  a validator was the owner of a given key on a given session, and what the
     *  active epoch index was during that session.
     */
    v9420: new StorageType('Babe.SkippedEpochs', 'Default', [], sts.array(() => sts.tuple(() => [sts.bigint(), sts.number()]))) as SkippedEpochsV9420,
}

/**
 *  A list of the last 100 skipped epochs and the corresponding session index
 *  when the epoch was skipped.
 * 
 *  This is only used for validating equivocation proofs. An equivocation proof
 *  must contains a key-ownership proof for a given session, therefore we need a
 *  way to tie together sessions and epoch indices, i.e. we need to validate that
 *  a validator was the owner of a given key on a given session, and what the
 *  active epoch index was during that session.
 */
export interface SkippedEpochsV9420  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [bigint, number][]
    get(block: Block): Promise<([bigint, number][] | undefined)>
}
