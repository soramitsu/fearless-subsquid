import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v1045 from '../v1045'
import * as v1050 from '../v1050'
import * as v1058 from '../v1058'
import * as v2028 from '../v2028'
import * as v2029 from '../v2029'
import * as v9050 from '../v9050'
import * as v9080 from '../v9080'
import * as v9111 from '../v9111'
import * as v9160 from '../v9160'
import * as v9190 from '../v9190'
import * as v9271 from '../v9271'
import * as v9300 from '../v9300'

export const validatorCount =  {
    /**
     *  The ideal number of staking participants.
     */
    v1020: new StorageType('Staking.ValidatorCount', 'Default', [], sts.number()) as ValidatorCountV1020,
}

/**
 *  The ideal number of staking participants.
 */
export interface ValidatorCountV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const minimumValidatorCount =  {
    /**
     *  Minimum number of staking participants before emergency conditions are imposed.
     */
    v1020: new StorageType('Staking.MinimumValidatorCount', 'Default', [], sts.number()) as MinimumValidatorCountV1020,
}

/**
 *  Minimum number of staking participants before emergency conditions are imposed.
 */
export interface MinimumValidatorCountV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const invulnerables =  {
    /**
     *  Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
     *  easy to initialize and the performance hit is minimal (we expect no more than four
     *  invulnerables) and restricted to testnets.
     */
    v1020: new StorageType('Staking.Invulnerables', 'Default', [], sts.array(() => v1020.AccountId)) as InvulnerablesV1020,
}

/**
 *  Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
 *  easy to initialize and the performance hit is minimal (we expect no more than four
 *  invulnerables) and restricted to testnets.
 */
export interface InvulnerablesV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.AccountId[]
    get(block: Block): Promise<(v1020.AccountId[] | undefined)>
}

export const bonded =  {
    /**
     *  Map from all locked "stash" accounts to the controller account.
     */
    v1020: new StorageType('Staking.Bonded', 'Optional', [v1020.AccountId], v1020.AccountId) as BondedV1020,
}

/**
 *  Map from all locked "stash" accounts to the controller account.
 */
export interface BondedV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1020.AccountId): Promise<(v1020.AccountId | undefined)>
    getMany(block: Block, keys: v1020.AccountId[]): Promise<(v1020.AccountId | undefined)[]>
}

export const ledger =  {
    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     */
    v1020: new StorageType('Staking.Ledger', 'Optional', [v1020.AccountId], v1020.StakingLedger) as LedgerV1020,
    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     */
    v1050: new StorageType('Staking.Ledger', 'Optional', [v1050.AccountId], v1050.StakingLedger) as LedgerV1050,
    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     */
    v1058: new StorageType('Staking.Ledger', 'Optional', [v1058.AccountId], v1058.StakingLedger) as LedgerV1058,
}

/**
 *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
 */
export interface LedgerV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1020.AccountId): Promise<(v1020.StakingLedger | undefined)>
    getMany(block: Block, keys: v1020.AccountId[]): Promise<(v1020.StakingLedger | undefined)[]>
}

/**
 *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
 */
export interface LedgerV1050  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1050.AccountId): Promise<(v1050.StakingLedger | undefined)>
    getMany(block: Block, keys: v1050.AccountId[]): Promise<(v1050.StakingLedger | undefined)[]>
}

/**
 *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
 */
export interface LedgerV1058  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1058.AccountId): Promise<(v1058.StakingLedger | undefined)>
    getMany(block: Block, keys: v1058.AccountId[]): Promise<(v1058.StakingLedger | undefined)[]>
    getKeys(block: Block): Promise<v1058.AccountId[]>
    getKeys(block: Block, key: v1058.AccountId): Promise<v1058.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1058.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1058.AccountId): AsyncIterable<v1058.AccountId[]>
    getPairs(block: Block): Promise<[k: v1058.AccountId, v: (v1058.StakingLedger | undefined)][]>
    getPairs(block: Block, key: v1058.AccountId): Promise<[k: v1058.AccountId, v: (v1058.StakingLedger | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1058.AccountId, v: (v1058.StakingLedger | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1058.AccountId): AsyncIterable<[k: v1058.AccountId, v: (v1058.StakingLedger | undefined)][]>
}

export const payee =  {
    /**
     *  Where the reward payment should be made. Keyed by stash.
     */
    v1020: new StorageType('Staking.Payee', 'Default', [v1020.AccountId], v1020.RewardDestination) as PayeeV1020,
}

/**
 *  Where the reward payment should be made. Keyed by stash.
 */
export interface PayeeV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.RewardDestination
    get(block: Block, key: v1020.AccountId): Promise<(v1020.RewardDestination | undefined)>
    getMany(block: Block, keys: v1020.AccountId[]): Promise<(v1020.RewardDestination | undefined)[]>
}

export const validators =  {
    /**
     *  The map from (wannabe) validator stash key to the preferences of that validator.
     */
    v1020: new StorageType('Staking.Validators', 'Default', [v1020.AccountId], v1020.ValidatorPrefs) as ValidatorsV1020,
    /**
     *  The map from (wannabe) validator stash key to the preferences of that validator.
     */
    v2028: new StorageType('Staking.Validators', 'Default', [v2028.AccountId], v2028.ValidatorPrefs) as ValidatorsV2028,
}

/**
 *  The map from (wannabe) validator stash key to the preferences of that validator.
 */
export interface ValidatorsV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.ValidatorPrefs
    get(block: Block, key: v1020.AccountId): Promise<(v1020.ValidatorPrefs | undefined)>
    getMany(block: Block, keys: v1020.AccountId[]): Promise<(v1020.ValidatorPrefs | undefined)[]>
}

/**
 *  The map from (wannabe) validator stash key to the preferences of that validator.
 */
export interface ValidatorsV2028  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v2028.ValidatorPrefs
    get(block: Block, key: v2028.AccountId): Promise<(v2028.ValidatorPrefs | undefined)>
    getMany(block: Block, keys: v2028.AccountId[]): Promise<(v2028.ValidatorPrefs | undefined)[]>
    getKeys(block: Block): Promise<v2028.AccountId[]>
    getKeys(block: Block, key: v2028.AccountId): Promise<v2028.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2028.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v2028.AccountId): AsyncIterable<v2028.AccountId[]>
    getPairs(block: Block): Promise<[k: v2028.AccountId, v: (v2028.ValidatorPrefs | undefined)][]>
    getPairs(block: Block, key: v2028.AccountId): Promise<[k: v2028.AccountId, v: (v2028.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2028.AccountId, v: (v2028.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2028.AccountId): AsyncIterable<[k: v2028.AccountId, v: (v2028.ValidatorPrefs | undefined)][]>
}

export const nominators =  {
    /**
     *  The map from nominator stash key to the set of stash keys of all validators to nominate.
     * 
     *  NOTE: is private so that we can ensure upgraded before all typical accesses.
     *  Direct storage APIs can still bypass this protection.
     */
    v1020: new StorageType('Staking.Nominators', 'Optional', [v1020.AccountId], v1020.Nominations) as NominatorsV1020,
}

/**
 *  The map from nominator stash key to the set of stash keys of all validators to nominate.
 * 
 *  NOTE: is private so that we can ensure upgraded before all typical accesses.
 *  Direct storage APIs can still bypass this protection.
 */
export interface NominatorsV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1020.AccountId): Promise<(v1020.Nominations | undefined)>
    getMany(block: Block, keys: v1020.AccountId[]): Promise<(v1020.Nominations | undefined)[]>
}

export const stakers =  {
    /**
     *  Nominators for a particular account that is in action right now. You can't iterate
     *  through validators here, but you can find them in the Session module.
     * 
     *  This is keyed by the stash account.
     */
    v1020: new StorageType('Staking.Stakers', 'Default', [v1020.AccountId], v1020.Exposure) as StakersV1020,
}

/**
 *  Nominators for a particular account that is in action right now. You can't iterate
 *  through validators here, but you can find them in the Session module.
 * 
 *  This is keyed by the stash account.
 */
export interface StakersV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.Exposure
    get(block: Block, key: v1020.AccountId): Promise<(v1020.Exposure | undefined)>
    getMany(block: Block, keys: v1020.AccountId[]): Promise<(v1020.Exposure | undefined)[]>
}

export const currentElected =  {
    /**
     *  The currently elected validator set keyed by stash account ID.
     */
    v1020: new StorageType('Staking.CurrentElected', 'Default', [], sts.array(() => v1020.AccountId)) as CurrentElectedV1020,
}

/**
 *  The currently elected validator set keyed by stash account ID.
 */
export interface CurrentElectedV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.AccountId[]
    get(block: Block): Promise<(v1020.AccountId[] | undefined)>
}

export const currentEra =  {
    /**
     *  The current era index.
     */
    v1020: new StorageType('Staking.CurrentEra', 'Default', [], v1020.EraIndex) as CurrentEraV1020,
    /**
     *  The current era index.
     * 
     *  This is the latest planned era, depending on how session module queues the validator
     *  set, it might be active or not.
     */
    v1050: new StorageType('Staking.CurrentEra', 'Optional', [], v1050.EraIndex) as CurrentEraV1050,
}

/**
 *  The current era index.
 */
export interface CurrentEraV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.EraIndex
    get(block: Block): Promise<(v1020.EraIndex | undefined)>
}

/**
 *  The current era index.
 * 
 *  This is the latest planned era, depending on how session module queues the validator
 *  set, it might be active or not.
 */
export interface CurrentEraV1050  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1050.EraIndex | undefined)>
}

export const currentEraStart =  {
    /**
     *  The start of the current era.
     */
    v1020: new StorageType('Staking.CurrentEraStart', 'Default', [], v1020.MomentOf) as CurrentEraStartV1020,
}

/**
 *  The start of the current era.
 */
export interface CurrentEraStartV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.MomentOf
    get(block: Block): Promise<(v1020.MomentOf | undefined)>
}

export const currentEraStartSessionIndex =  {
    /**
     *  The session index at which the current era started.
     */
    v1020: new StorageType('Staking.CurrentEraStartSessionIndex', 'Default', [], v1020.SessionIndex) as CurrentEraStartSessionIndexV1020,
}

/**
 *  The session index at which the current era started.
 */
export interface CurrentEraStartSessionIndexV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.SessionIndex
    get(block: Block): Promise<(v1020.SessionIndex | undefined)>
}

export const currentEraPointsEarned =  {
    /**
     *  Rewards for the current era. Using indices of current elected set.
     */
    v1020: new StorageType('Staking.CurrentEraPointsEarned', 'Default', [], v1020.EraPoints) as CurrentEraPointsEarnedV1020,
}

/**
 *  Rewards for the current era. Using indices of current elected set.
 */
export interface CurrentEraPointsEarnedV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.EraPoints
    get(block: Block): Promise<(v1020.EraPoints | undefined)>
}

export const slotStake =  {
    /**
     *  The amount of balance actively at stake for each validator slot, currently.
     * 
     *  This is used to derive rewards and punishments.
     */
    v1020: new StorageType('Staking.SlotStake', 'Default', [], v1020.BalanceOf) as SlotStakeV1020,
}

/**
 *  The amount of balance actively at stake for each validator slot, currently.
 * 
 *  This is used to derive rewards and punishments.
 */
export interface SlotStakeV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.BalanceOf
    get(block: Block): Promise<(v1020.BalanceOf | undefined)>
}

export const forceEra =  {
    /**
     *  True if the next session change will be a new era regardless of index.
     */
    v1020: new StorageType('Staking.ForceEra', 'Default', [], v1020.Forcing) as ForceEraV1020,
}

/**
 *  True if the next session change will be a new era regardless of index.
 */
export interface ForceEraV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.Forcing
    get(block: Block): Promise<(v1020.Forcing | undefined)>
}

export const slashRewardFraction =  {
    /**
     *  The percentage of the slash that is distributed to reporters.
     * 
     *  The rest of the slashed value is handled by the `Slash`.
     */
    v1020: new StorageType('Staking.SlashRewardFraction', 'Default', [], v1020.Perbill) as SlashRewardFractionV1020,
}

/**
 *  The percentage of the slash that is distributed to reporters.
 * 
 *  The rest of the slashed value is handled by the `Slash`.
 */
export interface SlashRewardFractionV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.Perbill
    get(block: Block): Promise<(v1020.Perbill | undefined)>
}

export const canceledSlashPayout =  {
    /**
     *  The amount of currency given to reporters of a slash event which was
     *  canceled by extraordinary circumstances (e.g. governance).
     */
    v1020: new StorageType('Staking.CanceledSlashPayout', 'Default', [], v1020.BalanceOf) as CanceledSlashPayoutV1020,
}

/**
 *  The amount of currency given to reporters of a slash event which was
 *  canceled by extraordinary circumstances (e.g. governance).
 */
export interface CanceledSlashPayoutV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.BalanceOf
    get(block: Block): Promise<(v1020.BalanceOf | undefined)>
}

export const unappliedSlashes =  {
    /**
     *  All unapplied slashes that are queued for later.
     */
    v1020: new StorageType('Staking.UnappliedSlashes', 'Default', [v1020.EraIndex], sts.array(() => v1020.UnappliedSlash)) as UnappliedSlashesV1020,
}

/**
 *  All unapplied slashes that are queued for later.
 */
export interface UnappliedSlashesV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.UnappliedSlash[]
    get(block: Block, key: v1020.EraIndex): Promise<(v1020.UnappliedSlash[] | undefined)>
    getMany(block: Block, keys: v1020.EraIndex[]): Promise<(v1020.UnappliedSlash[] | undefined)[]>
}

export const bondedEras =  {
    /**
     *  A mapping from still-bonded eras to the first session index of that era.
     */
    v1020: new StorageType('Staking.BondedEras', 'Default', [], sts.array(() => sts.tuple(() => [v1020.EraIndex, v1020.SessionIndex]))) as BondedErasV1020,
}

/**
 *  A mapping from still-bonded eras to the first session index of that era.
 */
export interface BondedErasV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1020.EraIndex, v1020.SessionIndex][]
    get(block: Block): Promise<([v1020.EraIndex, v1020.SessionIndex][] | undefined)>
}

export const validatorSlashInEra =  {
    /**
     *  All slashing events on validators, mapped by era to the highest slash proportion
     *  and slash value of the era.
     */
    v1020: new StorageType('Staking.ValidatorSlashInEra', 'Optional', [v1020.EraIndex, v1020.AccountId], sts.tuple(() => [v1020.Perbill, v1020.BalanceOf])) as ValidatorSlashInEraV1020,
}

/**
 *  All slashing events on validators, mapped by era to the highest slash proportion
 *  and slash value of the era.
 */
export interface ValidatorSlashInEraV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v1020.EraIndex, key2: v1020.AccountId): Promise<([v1020.Perbill, v1020.BalanceOf] | undefined)>
    getMany(block: Block, keys: [v1020.EraIndex, v1020.AccountId][]): Promise<([v1020.Perbill, v1020.BalanceOf] | undefined)[]>
}

export const nominatorSlashInEra =  {
    /**
     *  All slashing events on nominators, mapped by era to the highest slash value of the era.
     */
    v1020: new StorageType('Staking.NominatorSlashInEra', 'Optional', [v1020.EraIndex, v1020.AccountId], v1020.BalanceOf) as NominatorSlashInEraV1020,
}

/**
 *  All slashing events on nominators, mapped by era to the highest slash value of the era.
 */
export interface NominatorSlashInEraV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v1020.EraIndex, key2: v1020.AccountId): Promise<(v1020.BalanceOf | undefined)>
    getMany(block: Block, keys: [v1020.EraIndex, v1020.AccountId][]): Promise<(v1020.BalanceOf | undefined)[]>
}

export const slashingSpans =  {
    /**
     *  Slashing spans for stash accounts.
     */
    v1020: new StorageType('Staking.SlashingSpans', 'Optional', [v1020.AccountId], v1020.SlashingSpans) as SlashingSpansV1020,
    /**
     *  Slashing spans for stash accounts.
     */
    v1045: new StorageType('Staking.SlashingSpans', 'Optional', [v1045.AccountId], v1045.SlashingSpans) as SlashingSpansV1045,
}

/**
 *  Slashing spans for stash accounts.
 */
export interface SlashingSpansV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1020.AccountId): Promise<(v1020.SlashingSpans | undefined)>
    getMany(block: Block, keys: v1020.AccountId[]): Promise<(v1020.SlashingSpans | undefined)[]>
}

/**
 *  Slashing spans for stash accounts.
 */
export interface SlashingSpansV1045  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1045.AccountId): Promise<(v1045.SlashingSpans | undefined)>
    getMany(block: Block, keys: v1045.AccountId[]): Promise<(v1045.SlashingSpans | undefined)[]>
}

export const spanSlash =  {
    /**
     *  Records information about the maximum slash of a stash within a slashing span,
     *  as well as how much reward has been paid out.
     */
    v1020: new StorageType('Staking.SpanSlash', 'Default', [sts.tuple(() => [v1020.AccountId, v1020.SpanIndex])], v1020.SpanRecord) as SpanSlashV1020,
}

/**
 *  Records information about the maximum slash of a stash within a slashing span,
 *  as well as how much reward has been paid out.
 */
export interface SpanSlashV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.SpanRecord
    get(block: Block, key: [v1020.AccountId, v1020.SpanIndex]): Promise<(v1020.SpanRecord | undefined)>
    getMany(block: Block, keys: [v1020.AccountId, v1020.SpanIndex][]): Promise<(v1020.SpanRecord | undefined)[]>
}

export const earliestUnappliedSlash =  {
    /**
     *  The earliest era for which we have a pending, unapplied slash.
     */
    v1020: new StorageType('Staking.EarliestUnappliedSlash', 'Optional', [], v1020.EraIndex) as EarliestUnappliedSlashV1020,
}

/**
 *  The earliest era for which we have a pending, unapplied slash.
 */
export interface EarliestUnappliedSlashV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1020.EraIndex | undefined)>
}

export const storageVersion =  {
    /**
     *  The version of storage for upgrade.
     */
    v1020: new StorageType('Staking.StorageVersion', 'Default', [], sts.number()) as StorageVersionV1020,
    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    v1050: new StorageType('Staking.StorageVersion', 'Default', [], v1050.Releases) as StorageVersionV1050,
    /**
     *  True if network has been upgraded to this version.
     *  Storage version of the pallet.
     * 
     *  This is set to v7.0.0 for new networks.
     */
    v9111: new StorageType('Staking.StorageVersion', 'Default', [], v9111.Type_228) as StorageVersionV9111,
    /**
     *  True if network has been upgraded to this version.
     *  Storage version of the pallet.
     * 
     *  This is set to v7.0.0 for new networks.
     */
    v9190: new StorageType('Staking.StorageVersion', 'Default', [], v9190.Type_240) as StorageVersionV9190,
    /**
     *  True if network has been upgraded to this version.
     *  Storage version of the pallet.
     * 
     *  This is set to v7.0.0 for new networks.
     */
    v9271: new StorageType('Staking.StorageVersion', 'Default', [], v9271.Type_248) as StorageVersionV9271,
    /**
     *  True if network has been upgraded to this version.
     *  Storage version of the pallet.
     * 
     *  This is set to v7.0.0 for new networks.
     */
    v9300: new StorageType('Staking.StorageVersion', 'Default', [], v9300.Type_252) as StorageVersionV9300,
}

/**
 *  The version of storage for upgrade.
 */
export interface StorageVersionV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

/**
 *  Storage version of the pallet.
 * 
 *  This is set to v2.0.0 for new networks.
 */
export interface StorageVersionV1050  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1050.Releases
    get(block: Block): Promise<(v1050.Releases | undefined)>
}

/**
 *  True if network has been upgraded to this version.
 *  Storage version of the pallet.
 * 
 *  This is set to v7.0.0 for new networks.
 */
export interface StorageVersionV9111  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9111.Type_228
    get(block: Block): Promise<(v9111.Type_228 | undefined)>
}

/**
 *  True if network has been upgraded to this version.
 *  Storage version of the pallet.
 * 
 *  This is set to v7.0.0 for new networks.
 */
export interface StorageVersionV9190  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9190.Type_240
    get(block: Block): Promise<(v9190.Type_240 | undefined)>
}

/**
 *  True if network has been upgraded to this version.
 *  Storage version of the pallet.
 * 
 *  This is set to v7.0.0 for new networks.
 */
export interface StorageVersionV9271  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9271.Type_248
    get(block: Block): Promise<(v9271.Type_248 | undefined)>
}

/**
 *  True if network has been upgraded to this version.
 *  Storage version of the pallet.
 * 
 *  This is set to v7.0.0 for new networks.
 */
export interface StorageVersionV9300  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9300.Type_252
    get(block: Block): Promise<(v9300.Type_252 | undefined)>
}

export const historyDepth =  {
    /**
     *  Number of era to keep in history.
     * 
     *  Information is kept for eras in `[current_era - history_depth; current_era]
     * 
     *  Must be more than the number of era delayed by session otherwise.
     *  i.e. active era must always be in history.
     *  i.e. `active_era > current_era - history_depth` must be guaranteed.
     */
    v1050: new StorageType('Staking.HistoryDepth', 'Default', [], sts.number()) as HistoryDepthV1050,
}

/**
 *  Number of era to keep in history.
 * 
 *  Information is kept for eras in `[current_era - history_depth; current_era]
 * 
 *  Must be more than the number of era delayed by session otherwise.
 *  i.e. active era must always be in history.
 *  i.e. `active_era > current_era - history_depth` must be guaranteed.
 */
export interface HistoryDepthV1050  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const activeEra =  {
    /**
     *  The active era information, it holds index and start.
     * 
     *  The active era is the era currently rewarded.
     *  Validator set of this era must be equal to `SessionInterface::validators`.
     */
    v1050: new StorageType('Staking.ActiveEra', 'Optional', [], v1050.ActiveEraInfo) as ActiveEraV1050,
}

/**
 *  The active era information, it holds index and start.
 * 
 *  The active era is the era currently rewarded.
 *  Validator set of this era must be equal to `SessionInterface::validators`.
 */
export interface ActiveEraV1050  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1050.ActiveEraInfo | undefined)>
}

export const erasStartSessionIndex =  {
    /**
     *  The session index at which the era start for the last `HISTORY_DEPTH` eras
     */
    v1050: new StorageType('Staking.ErasStartSessionIndex', 'Optional', [v1050.EraIndex], v1050.SessionIndex) as ErasStartSessionIndexV1050,
}

/**
 *  The session index at which the era start for the last `HISTORY_DEPTH` eras
 */
export interface ErasStartSessionIndexV1050  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1050.EraIndex): Promise<(v1050.SessionIndex | undefined)>
    getMany(block: Block, keys: v1050.EraIndex[]): Promise<(v1050.SessionIndex | undefined)[]>
}

export const erasStakers =  {
    /**
     *  Exposure of validator at era.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     */
    v1050: new StorageType('Staking.ErasStakers', 'Default', [v1050.EraIndex, v1050.AccountId], v1050.Exposure) as ErasStakersV1050,
}

/**
 *  Exposure of validator at era.
 * 
 *  This is keyed first by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 *  If stakers hasn't been set or has been removed then empty exposure is returned.
 */
export interface ErasStakersV1050  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1050.Exposure
    get(block: Block, key1: v1050.EraIndex, key2: v1050.AccountId): Promise<(v1050.Exposure | undefined)>
    getMany(block: Block, keys: [v1050.EraIndex, v1050.AccountId][]): Promise<(v1050.Exposure | undefined)[]>
    getKeys(block: Block): Promise<[v1050.EraIndex, v1050.AccountId][]>
    getKeys(block: Block, key1: v1050.EraIndex): Promise<[v1050.EraIndex, v1050.AccountId][]>
    getKeys(block: Block, key1: v1050.EraIndex, key2: v1050.AccountId): Promise<[v1050.EraIndex, v1050.AccountId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1050.EraIndex, v1050.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1050.EraIndex): AsyncIterable<[v1050.EraIndex, v1050.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1050.EraIndex, key2: v1050.AccountId): AsyncIterable<[v1050.EraIndex, v1050.AccountId][]>
    getPairs(block: Block): Promise<[k: [v1050.EraIndex, v1050.AccountId], v: (v1050.Exposure | undefined)][]>
    getPairs(block: Block, key1: v1050.EraIndex): Promise<[k: [v1050.EraIndex, v1050.AccountId], v: (v1050.Exposure | undefined)][]>
    getPairs(block: Block, key1: v1050.EraIndex, key2: v1050.AccountId): Promise<[k: [v1050.EraIndex, v1050.AccountId], v: (v1050.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1050.EraIndex, v1050.AccountId], v: (v1050.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1050.EraIndex): AsyncIterable<[k: [v1050.EraIndex, v1050.AccountId], v: (v1050.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1050.EraIndex, key2: v1050.AccountId): AsyncIterable<[k: [v1050.EraIndex, v1050.AccountId], v: (v1050.Exposure | undefined)][]>
}

export const erasStakersClipped =  {
    /**
     *  Clipped Exposure of validator at era.
     * 
     *  This is similar to [`ErasStakers`] but number of nominators exposed is reduce to the
     *  `T::MaxNominatorRewardedPerValidator` biggest stakers.
     *  This is used to limit the i/o cost for the nominator payout.
     * 
     *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     */
    v1050: new StorageType('Staking.ErasStakersClipped', 'Default', [v1050.EraIndex, v1050.AccountId], v1050.Exposure) as ErasStakersClippedV1050,
}

/**
 *  Clipped Exposure of validator at era.
 * 
 *  This is similar to [`ErasStakers`] but number of nominators exposed is reduce to the
 *  `T::MaxNominatorRewardedPerValidator` biggest stakers.
 *  This is used to limit the i/o cost for the nominator payout.
 * 
 *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 *  If stakers hasn't been set or has been removed then empty exposure is returned.
 */
export interface ErasStakersClippedV1050  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1050.Exposure
    get(block: Block, key1: v1050.EraIndex, key2: v1050.AccountId): Promise<(v1050.Exposure | undefined)>
    getMany(block: Block, keys: [v1050.EraIndex, v1050.AccountId][]): Promise<(v1050.Exposure | undefined)[]>
    getKeys(block: Block): Promise<[v1050.EraIndex, v1050.AccountId][]>
    getKeys(block: Block, key1: v1050.EraIndex): Promise<[v1050.EraIndex, v1050.AccountId][]>
    getKeys(block: Block, key1: v1050.EraIndex, key2: v1050.AccountId): Promise<[v1050.EraIndex, v1050.AccountId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1050.EraIndex, v1050.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1050.EraIndex): AsyncIterable<[v1050.EraIndex, v1050.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1050.EraIndex, key2: v1050.AccountId): AsyncIterable<[v1050.EraIndex, v1050.AccountId][]>
    getPairs(block: Block): Promise<[k: [v1050.EraIndex, v1050.AccountId], v: (v1050.Exposure | undefined)][]>
    getPairs(block: Block, key1: v1050.EraIndex): Promise<[k: [v1050.EraIndex, v1050.AccountId], v: (v1050.Exposure | undefined)][]>
    getPairs(block: Block, key1: v1050.EraIndex, key2: v1050.AccountId): Promise<[k: [v1050.EraIndex, v1050.AccountId], v: (v1050.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1050.EraIndex, v1050.AccountId], v: (v1050.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1050.EraIndex): AsyncIterable<[k: [v1050.EraIndex, v1050.AccountId], v: (v1050.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1050.EraIndex, key2: v1050.AccountId): AsyncIterable<[k: [v1050.EraIndex, v1050.AccountId], v: (v1050.Exposure | undefined)][]>
}

export const erasValidatorPrefs =  {
    /**
     *  Similarly to `ErasStakers` this holds the preferences of validators.
     * 
     *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     */
    v1050: new StorageType('Staking.ErasValidatorPrefs', 'Default', [v1050.EraIndex, v1050.AccountId], v1050.ValidatorPrefs) as ErasValidatorPrefsV1050,
    /**
     *  Similar to `ErasStakers`, this holds the preferences of validators.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     */
    v2028: new StorageType('Staking.ErasValidatorPrefs', 'Default', [v2028.EraIndex, v2028.AccountId], v2028.ValidatorPrefs) as ErasValidatorPrefsV2028,
}

/**
 *  Similarly to `ErasStakers` this holds the preferences of validators.
 * 
 *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 */
export interface ErasValidatorPrefsV1050  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1050.ValidatorPrefs
    get(block: Block, key1: v1050.EraIndex, key2: v1050.AccountId): Promise<(v1050.ValidatorPrefs | undefined)>
    getMany(block: Block, keys: [v1050.EraIndex, v1050.AccountId][]): Promise<(v1050.ValidatorPrefs | undefined)[]>
    getKeys(block: Block): Promise<[v1050.EraIndex, v1050.AccountId][]>
    getKeys(block: Block, key1: v1050.EraIndex): Promise<[v1050.EraIndex, v1050.AccountId][]>
    getKeys(block: Block, key1: v1050.EraIndex, key2: v1050.AccountId): Promise<[v1050.EraIndex, v1050.AccountId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1050.EraIndex, v1050.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1050.EraIndex): AsyncIterable<[v1050.EraIndex, v1050.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1050.EraIndex, key2: v1050.AccountId): AsyncIterable<[v1050.EraIndex, v1050.AccountId][]>
    getPairs(block: Block): Promise<[k: [v1050.EraIndex, v1050.AccountId], v: (v1050.ValidatorPrefs | undefined)][]>
    getPairs(block: Block, key1: v1050.EraIndex): Promise<[k: [v1050.EraIndex, v1050.AccountId], v: (v1050.ValidatorPrefs | undefined)][]>
    getPairs(block: Block, key1: v1050.EraIndex, key2: v1050.AccountId): Promise<[k: [v1050.EraIndex, v1050.AccountId], v: (v1050.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1050.EraIndex, v1050.AccountId], v: (v1050.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1050.EraIndex): AsyncIterable<[k: [v1050.EraIndex, v1050.AccountId], v: (v1050.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1050.EraIndex, key2: v1050.AccountId): AsyncIterable<[k: [v1050.EraIndex, v1050.AccountId], v: (v1050.ValidatorPrefs | undefined)][]>
}

/**
 *  Similar to `ErasStakers`, this holds the preferences of validators.
 * 
 *  This is keyed first by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 */
export interface ErasValidatorPrefsV2028  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v2028.ValidatorPrefs
    get(block: Block, key1: v2028.EraIndex, key2: v2028.AccountId): Promise<(v2028.ValidatorPrefs | undefined)>
    getMany(block: Block, keys: [v2028.EraIndex, v2028.AccountId][]): Promise<(v2028.ValidatorPrefs | undefined)[]>
    getKeys(block: Block): Promise<[v2028.EraIndex, v2028.AccountId][]>
    getKeys(block: Block, key1: v2028.EraIndex): Promise<[v2028.EraIndex, v2028.AccountId][]>
    getKeys(block: Block, key1: v2028.EraIndex, key2: v2028.AccountId): Promise<[v2028.EraIndex, v2028.AccountId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v2028.EraIndex, v2028.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v2028.EraIndex): AsyncIterable<[v2028.EraIndex, v2028.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v2028.EraIndex, key2: v2028.AccountId): AsyncIterable<[v2028.EraIndex, v2028.AccountId][]>
    getPairs(block: Block): Promise<[k: [v2028.EraIndex, v2028.AccountId], v: (v2028.ValidatorPrefs | undefined)][]>
    getPairs(block: Block, key1: v2028.EraIndex): Promise<[k: [v2028.EraIndex, v2028.AccountId], v: (v2028.ValidatorPrefs | undefined)][]>
    getPairs(block: Block, key1: v2028.EraIndex, key2: v2028.AccountId): Promise<[k: [v2028.EraIndex, v2028.AccountId], v: (v2028.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v2028.EraIndex, v2028.AccountId], v: (v2028.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v2028.EraIndex): AsyncIterable<[k: [v2028.EraIndex, v2028.AccountId], v: (v2028.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v2028.EraIndex, key2: v2028.AccountId): AsyncIterable<[k: [v2028.EraIndex, v2028.AccountId], v: (v2028.ValidatorPrefs | undefined)][]>
}

export const erasValidatorReward =  {
    /**
     *  The total validator era payout for the last `HISTORY_DEPTH` eras.
     * 
     *  Eras that haven't finished yet or has been removed doesn't have reward.
     */
    v1050: new StorageType('Staking.ErasValidatorReward', 'Optional', [v1050.EraIndex], v1050.BalanceOf) as ErasValidatorRewardV1050,
}

/**
 *  The total validator era payout for the last `HISTORY_DEPTH` eras.
 * 
 *  Eras that haven't finished yet or has been removed doesn't have reward.
 */
export interface ErasValidatorRewardV1050  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1050.EraIndex): Promise<(v1050.BalanceOf | undefined)>
    getMany(block: Block, keys: v1050.EraIndex[]): Promise<(v1050.BalanceOf | undefined)[]>
}

export const erasRewardPoints =  {
    /**
     *  Rewards for the last `HISTORY_DEPTH` eras.
     *  If reward hasn't been set or has been removed then 0 reward is returned.
     */
    v1050: new StorageType('Staking.ErasRewardPoints', 'Default', [v1050.EraIndex], v1050.EraRewardPoints) as ErasRewardPointsV1050,
}

/**
 *  Rewards for the last `HISTORY_DEPTH` eras.
 *  If reward hasn't been set or has been removed then 0 reward is returned.
 */
export interface ErasRewardPointsV1050  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1050.EraRewardPoints
    get(block: Block, key: v1050.EraIndex): Promise<(v1050.EraRewardPoints | undefined)>
    getMany(block: Block, keys: v1050.EraIndex[]): Promise<(v1050.EraRewardPoints | undefined)[]>
}

export const erasTotalStake =  {
    /**
     *  The total amount staked for the last `HISTORY_DEPTH` eras.
     *  If total hasn't been set or has been removed then 0 stake is returned.
     */
    v1050: new StorageType('Staking.ErasTotalStake', 'Default', [v1050.EraIndex], v1050.BalanceOf) as ErasTotalStakeV1050,
}

/**
 *  The total amount staked for the last `HISTORY_DEPTH` eras.
 *  If total hasn't been set or has been removed then 0 stake is returned.
 */
export interface ErasTotalStakeV1050  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1050.BalanceOf
    get(block: Block, key: v1050.EraIndex): Promise<(v1050.BalanceOf | undefined)>
    getMany(block: Block, keys: v1050.EraIndex[]): Promise<(v1050.BalanceOf | undefined)[]>
}

export const snapshotValidators =  {
    /**
     *  Snapshot of validators at the beginning of the current election window. This should only
     *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
     */
    v1058: new StorageType('Staking.SnapshotValidators', 'Optional', [], sts.array(() => v1058.AccountId)) as SnapshotValidatorsV1058,
}

/**
 *  Snapshot of validators at the beginning of the current election window. This should only
 *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
 */
export interface SnapshotValidatorsV1058  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1058.AccountId[] | undefined)>
}

export const snapshotNominators =  {
    /**
     *  Snapshot of nominators at the beginning of the current election window. This should only
     *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
     */
    v1058: new StorageType('Staking.SnapshotNominators', 'Optional', [], sts.array(() => v1058.AccountId)) as SnapshotNominatorsV1058,
}

/**
 *  Snapshot of nominators at the beginning of the current election window. This should only
 *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
 */
export interface SnapshotNominatorsV1058  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1058.AccountId[] | undefined)>
}

export const queuedElected =  {
    /**
     *  The next validator set. At the end of an era, if this is available (potentially from the
     *  result of an offchain worker), it is immediately used. Otherwise, the on-chain election
     *  is executed.
     */
    v1058: new StorageType('Staking.QueuedElected', 'Optional', [], v1058.ElectionResult) as QueuedElectedV1058,
}

/**
 *  The next validator set. At the end of an era, if this is available (potentially from the
 *  result of an offchain worker), it is immediately used. Otherwise, the on-chain election
 *  is executed.
 */
export interface QueuedElectedV1058  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1058.ElectionResult | undefined)>
}

export const queuedScore =  {
    /**
     *  The score of the current [`QueuedElected`].
     */
    v1058: new StorageType('Staking.QueuedScore', 'Optional', [], v1058.PhragmenScore) as QueuedScoreV1058,
}

/**
 *  The score of the current [`QueuedElected`].
 */
export interface QueuedScoreV1058  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1058.PhragmenScore | undefined)>
}

export const eraElectionStatus =  {
    /**
     *  Flag to control the execution of the offchain election. When `Open(_)`, we accept
     *  solutions to be submitted.
     */
    v1058: new StorageType('Staking.EraElectionStatus', 'Default', [], v1058.ElectionStatus) as EraElectionStatusV1058,
}

/**
 *  Flag to control the execution of the offchain election. When `Open(_)`, we accept
 *  solutions to be submitted.
 */
export interface EraElectionStatusV1058  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1058.ElectionStatus
    get(block: Block): Promise<(v1058.ElectionStatus | undefined)>
}

export const isCurrentSessionFinal =  {
    /**
     *  True if the current **planned** session is final. Note that this does not take era
     *  forcing into account.
     */
    v1058: new StorageType('Staking.IsCurrentSessionFinal', 'Default', [], sts.boolean()) as IsCurrentSessionFinalV1058,
}

/**
 *  True if the current **planned** session is final. Note that this does not take era
 *  forcing into account.
 */
export interface IsCurrentSessionFinalV1058  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const migrateEra =  {
    /**
     *  The era where we migrated from Lazy Payouts to Simple Payouts
     */
    v1058: new StorageType('Staking.MigrateEra', 'Optional', [], v1058.EraIndex) as MigrateEraV1058,
}

/**
 *  The era where we migrated from Lazy Payouts to Simple Payouts
 */
export interface MigrateEraV1058  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1058.EraIndex | undefined)>
}

export const currentPlannedSession =  {
    /**
     *  The last planned session scheduled by the session pallet.
     * 
     *  This is basically in sync with the call to [`SessionManager::new_session`].
     */
    v2029: new StorageType('Staking.CurrentPlannedSession', 'Default', [], v2029.SessionIndex) as CurrentPlannedSessionV2029,
}

/**
 *  The last planned session scheduled by the session pallet.
 * 
 *  This is basically in sync with the call to [`SessionManager::new_session`].
 */
export interface CurrentPlannedSessionV2029  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v2029.SessionIndex
    get(block: Block): Promise<(v2029.SessionIndex | undefined)>
}

export const minNominatorBond =  {
    /**
     *  The minimum active bond to become and maintain the role of a nominator.
     */
    v9050: new StorageType('Staking.MinNominatorBond', 'Default', [], v9050.BalanceOf) as MinNominatorBondV9050,
}

/**
 *  The minimum active bond to become and maintain the role of a nominator.
 */
export interface MinNominatorBondV9050  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9050.BalanceOf
    get(block: Block): Promise<(v9050.BalanceOf | undefined)>
}

export const minValidatorBond =  {
    /**
     *  The minimum active bond to become and maintain the role of a validator.
     */
    v9050: new StorageType('Staking.MinValidatorBond', 'Default', [], v9050.BalanceOf) as MinValidatorBondV9050,
}

/**
 *  The minimum active bond to become and maintain the role of a validator.
 */
export interface MinValidatorBondV9050  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9050.BalanceOf
    get(block: Block): Promise<(v9050.BalanceOf | undefined)>
}

export const counterForValidators =  {
    /**
     *  A tracker to keep count of the number of items in the `Validators` map.
     */
    v9050: new StorageType('Staking.CounterForValidators', 'Default', [], sts.number()) as CounterForValidatorsV9050,
}

/**
 *  A tracker to keep count of the number of items in the `Validators` map.
 */
export interface CounterForValidatorsV9050  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const maxValidatorsCount =  {
    /**
     *  The maximum validator count before we stop allowing new validators to join.
     * 
     *  When this value is not set, no limits are enforced.
     */
    v9050: new StorageType('Staking.MaxValidatorsCount', 'Optional', [], sts.number()) as MaxValidatorsCountV9050,
}

/**
 *  The maximum validator count before we stop allowing new validators to join.
 * 
 *  When this value is not set, no limits are enforced.
 */
export interface MaxValidatorsCountV9050  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const counterForNominators =  {
    /**
     *  A tracker to keep count of the number of items in the `Nominators` map.
     */
    v9050: new StorageType('Staking.CounterForNominators', 'Default', [], sts.number()) as CounterForNominatorsV9050,
}

/**
 *  A tracker to keep count of the number of items in the `Nominators` map.
 */
export interface CounterForNominatorsV9050  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const maxNominatorsCount =  {
    /**
     *  The maximum nominator count before we stop allowing new validators to join.
     * 
     *  When this value is not set, no limits are enforced.
     */
    v9050: new StorageType('Staking.MaxNominatorsCount', 'Optional', [], sts.number()) as MaxNominatorsCountV9050,
}

/**
 *  The maximum nominator count before we stop allowing new validators to join.
 * 
 *  When this value is not set, no limits are enforced.
 */
export interface MaxNominatorsCountV9050  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const chillThreshold =  {
    /**
     *  The threshold for when users can start calling `chill_other` for other validators / nominators.
     *  The threshold is compared to the actual number of validators / nominators (`CountFor*`) in
     *  the system compared to the configured max (`Max*Count`).
     */
    v9080: new StorageType('Staking.ChillThreshold', 'Optional', [], v9080.Percent) as ChillThresholdV9080,
}

/**
 *  The threshold for when users can start calling `chill_other` for other validators / nominators.
 *  The threshold is compared to the actual number of validators / nominators (`CountFor*`) in
 *  the system compared to the configured max (`Max*Count`).
 */
export interface ChillThresholdV9080  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v9080.Percent | undefined)>
}

export const offendingValidators =  {
    /**
     *  Indices of validators that have offended in the active era and whether they are currently
     *  disabled.
     * 
     *  This value should be a superset of disabled validators since not all offences lead to the
     *  validator being disabled (if there was no slash). This is needed to track the percentage of
     *  validators that have offended in the current era, ensuring a new era is forced if
     *  `OffendingValidatorsThreshold` is reached. The vec is always kept sorted so that we can find
     *  whether a given validator has previously offended using binary search. It gets cleared when
     *  the era ends.
     */
    v9122: new StorageType('Staking.OffendingValidators', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), sts.boolean()]))) as OffendingValidatorsV9122,
}

/**
 *  Indices of validators that have offended in the active era and whether they are currently
 *  disabled.
 * 
 *  This value should be a superset of disabled validators since not all offences lead to the
 *  validator being disabled (if there was no slash). This is needed to track the percentage of
 *  validators that have offended in the current era, ensuring a new era is forced if
 *  `OffendingValidatorsThreshold` is reached. The vec is always kept sorted so that we can find
 *  whether a given validator has previously offended using binary search. It gets cleared when
 *  the era ends.
 */
export interface OffendingValidatorsV9122  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, boolean][]
    get(block: Block): Promise<([number, boolean][] | undefined)>
}

export const minCommission =  {
    /**
     *  The minimum amount of commission that validators can set.
     * 
     *  If set to `0`, no limit exists.
     */
    v9160: new StorageType('Staking.MinCommission', 'Default', [], v9160.Perbill) as MinCommissionV9160,
}

/**
 *  The minimum amount of commission that validators can set.
 * 
 *  If set to `0`, no limit exists.
 */
export interface MinCommissionV9160  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9160.Perbill
    get(block: Block): Promise<(v9160.Perbill | undefined)>
}

export const minimumActiveStake =  {
    /**
     *  The minimum active nominator stake of the last successful election.
     */
    v9360: new StorageType('Staking.MinimumActiveStake', 'Default', [], sts.bigint()) as MinimumActiveStakeV9360,
}

/**
 *  The minimum active nominator stake of the last successful election.
 */
export interface MinimumActiveStakeV9360  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}
