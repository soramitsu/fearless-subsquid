import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v26 from '../v26'
import * as v28 from '../v28'
import * as v30 from '../v30'
import * as v9110 from '../v9110'
import * as v9220 from '../v9220'
import * as v9420 from '../v9420'

export const epochIndex =  {
    /**
     *  Current epoch index.
     */
    v0: new StorageType('Babe.EpochIndex', 'Default', [], sts.bigint()) as EpochIndexV0,
}

/**
 *  Current epoch index.
 */
export interface EpochIndexV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const authorities =  {
    /**
     *  Current epoch authorities.
     */
    v0: new StorageType('Babe.Authorities', 'Default', [], sts.array(() => sts.tuple(() => [v0.AuthorityId, v0.BabeAuthorityWeight]))) as AuthoritiesV0,
}

/**
 *  Current epoch authorities.
 */
export interface AuthoritiesV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v0.AuthorityId, v0.BabeAuthorityWeight][]
    get(block: Block): Promise<([v0.AuthorityId, v0.BabeAuthorityWeight][] | undefined)>
}

export const genesisSlot =  {
    /**
     *  The slot at which the first epoch actually started. This is 0
     *  until the first block of the chain.
     */
    v0: new StorageType('Babe.GenesisSlot', 'Default', [], sts.bigint()) as GenesisSlotV0,
}

/**
 *  The slot at which the first epoch actually started. This is 0
 *  until the first block of the chain.
 */
export interface GenesisSlotV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const currentSlot =  {
    /**
     *  Current slot number.
     */
    v0: new StorageType('Babe.CurrentSlot', 'Default', [], sts.bigint()) as CurrentSlotV0,
}

/**
 *  Current slot number.
 */
export interface CurrentSlotV0  {
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
    v0: new StorageType('Babe.Randomness', 'Default', [], v0.Randomness) as RandomnessV0,
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
export interface RandomnessV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.Randomness
    get(block: Block): Promise<(v0.Randomness | undefined)>
}

export const nextEpochConfig =  {
    /**
     *  Next epoch configuration, if changed.
     */
    v0: new StorageType('Babe.NextEpochConfig', 'Optional', [], v0.NextConfigDescriptor) as NextEpochConfigV0,
    /**
     *  The configuration for the next epoch, `None` if the config will not change
     *  (you can fallback to `EpochConfig` instead in that case).
     */
    v30: new StorageType('Babe.NextEpochConfig', 'Optional', [], v30.BabeEpochConfiguration) as NextEpochConfigV30,
}

/**
 *  Next epoch configuration, if changed.
 */
export interface NextEpochConfigV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v0.NextConfigDescriptor | undefined)>
}

/**
 *  The configuration for the next epoch, `None` if the config will not change
 *  (you can fallback to `EpochConfig` instead in that case).
 */
export interface NextEpochConfigV30  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v30.BabeEpochConfiguration | undefined)>
}

export const nextRandomness =  {
    /**
     *  Next epoch randomness.
     */
    v0: new StorageType('Babe.NextRandomness', 'Default', [], v0.Randomness) as NextRandomnessV0,
}

/**
 *  Next epoch randomness.
 */
export interface NextRandomnessV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.Randomness
    get(block: Block): Promise<(v0.Randomness | undefined)>
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
    v0: new StorageType('Babe.SegmentIndex', 'Default', [], sts.number()) as SegmentIndexV0,
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
export interface SegmentIndexV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const underConstruction =  {
    /**
     *  TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
     */
    v0: new StorageType('Babe.UnderConstruction', 'Default', [sts.number()], sts.array(() => v0.Randomness)) as UnderConstructionV0,
}

/**
 *  TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
 */
export interface UnderConstructionV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.Randomness[]
    get(block: Block, key: number): Promise<(v0.Randomness[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v0.Randomness[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v0.Randomness[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v0.Randomness[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v0.Randomness[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v0.Randomness[] | undefined)][]>
}

export const initialized =  {
    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    v0: new StorageType('Babe.Initialized', 'Optional', [], v0.MaybeRandomness) as InitializedV0,
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
export interface InitializedV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v0.MaybeRandomness | undefined)>
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
    v0: new StorageType('Babe.Lateness', 'Default', [], v0.BlockNumber) as LatenessV0,
}

/**
 *  How late the current block is compared to its parent.
 * 
 *  This entry is populated as part of block execution and is cleaned up
 *  on block finalization. Querying this storage entry outside of block
 *  execution context should always yield zero.
 */
export interface LatenessV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.BlockNumber
    get(block: Block): Promise<(v0.BlockNumber | undefined)>
}

export const authorVrfRandomness =  {
    /**
     *  Temporary value (cleared at block finalization) that includes the VRF output generated
     *  at this block. This field should always be populated during block processing unless
     *  secondary plain slots are enabled (which don't contain a VRF output).
     */
    v26: new StorageType('Babe.AuthorVrfRandomness', 'Default', [], v26.MaybeRandomness) as AuthorVrfRandomnessV26,
}

/**
 *  Temporary value (cleared at block finalization) that includes the VRF output generated
 *  at this block. This field should always be populated during block processing unless
 *  secondary plain slots are enabled (which don't contain a VRF output).
 */
export interface AuthorVrfRandomnessV26  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v26.MaybeRandomness
    get(block: Block): Promise<(v26.MaybeRandomness | undefined)>
}

export const nextAuthorities =  {
    /**
     *  Next epoch authorities.
     */
    v28: new StorageType('Babe.NextAuthorities', 'Default', [], sts.array(() => sts.tuple(() => [v28.AuthorityId, v28.BabeAuthorityWeight]))) as NextAuthoritiesV28,
}

/**
 *  Next epoch authorities.
 */
export interface NextAuthoritiesV28  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v28.AuthorityId, v28.BabeAuthorityWeight][]
    get(block: Block): Promise<([v28.AuthorityId, v28.BabeAuthorityWeight][] | undefined)>
}

export const pendingEpochConfigChange =  {
    /**
     *  Pending epoch configuration change that will be applied when the next epoch is enacted.
     */
    v30: new StorageType('Babe.PendingEpochConfigChange', 'Optional', [], v30.NextConfigDescriptor) as PendingEpochConfigChangeV30,
    /**
     *  Pending epoch configuration change that will be applied when the next epoch is enacted.
     */
    v9110: new StorageType('Babe.PendingEpochConfigChange', 'Optional', [], v9110.NextConfigDescriptor) as PendingEpochConfigChangeV9110,
}

/**
 *  Pending epoch configuration change that will be applied when the next epoch is enacted.
 */
export interface PendingEpochConfigChangeV30  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v30.NextConfigDescriptor | undefined)>
}

/**
 *  Pending epoch configuration change that will be applied when the next epoch is enacted.
 */
export interface PendingEpochConfigChangeV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v9110.NextConfigDescriptor | undefined)>
}

export const epochStart =  {
    /**
     *  The block numbers when the last and current epoch have started, respectively `N-1` and
     *  `N`.
     *  NOTE: We track this is in order to annotate the block number when a given pool of
     *  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
     *  slots, which may be skipped, the block numbers may not line up with the slot numbers.
     */
    v30: new StorageType('Babe.EpochStart', 'Default', [], sts.tuple(() => [v30.BlockNumber, v30.BlockNumber])) as EpochStartV30,
}

/**
 *  The block numbers when the last and current epoch have started, respectively `N-1` and
 *  `N`.
 *  NOTE: We track this is in order to annotate the block number when a given pool of
 *  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
 *  slots, which may be skipped, the block numbers may not line up with the slot numbers.
 */
export interface EpochStartV30  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v30.BlockNumber, v30.BlockNumber]
    get(block: Block): Promise<([v30.BlockNumber, v30.BlockNumber] | undefined)>
}

export const epochConfig =  {
    /**
     *  The configuration for the current epoch. Should never be `None` as it is initialized in genesis.
     */
    v30: new StorageType('Babe.EpochConfig', 'Optional', [], v30.BabeEpochConfiguration) as EpochConfigV30,
}

/**
 *  The configuration for the current epoch. Should never be `None` as it is initialized in genesis.
 */
export interface EpochConfigV30  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v30.BabeEpochConfiguration | undefined)>
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
