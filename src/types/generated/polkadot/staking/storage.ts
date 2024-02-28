import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v28 from '../v28'
import * as v29 from '../v29'
import * as v9050 from '../v9050'
import * as v9080 from '../v9080'
import * as v9110 from '../v9110'
import * as v9170 from '../v9170'
import * as v9190 from '../v9190'
import * as v9270 from '../v9270'
import * as v9300 from '../v9300'

export const historyDepth =  {
    /**
     *  Number of eras to keep in history.
     * 
     *  Information is kept for eras in `[current_era - history_depth; current_era]`.
     * 
     *  Must be more than the number of eras delayed by session otherwise.
     *  I.e. active era must always be in history.
     *  I.e. `active_era > current_era - history_depth` must be guaranteed.
     */
    v0: new StorageType('Staking.HistoryDepth', 'Default', [], sts.number()) as HistoryDepthV0,
}

/**
 *  Number of eras to keep in history.
 * 
 *  Information is kept for eras in `[current_era - history_depth; current_era]`.
 * 
 *  Must be more than the number of eras delayed by session otherwise.
 *  I.e. active era must always be in history.
 *  I.e. `active_era > current_era - history_depth` must be guaranteed.
 */
export interface HistoryDepthV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const validatorCount =  {
    /**
     *  The ideal number of staking participants.
     */
    v0: new StorageType('Staking.ValidatorCount', 'Default', [], sts.number()) as ValidatorCountV0,
}

/**
 *  The ideal number of staking participants.
 */
export interface ValidatorCountV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const minimumValidatorCount =  {
    /**
     *  Minimum number of staking participants before emergency conditions are imposed.
     */
    v0: new StorageType('Staking.MinimumValidatorCount', 'Default', [], sts.number()) as MinimumValidatorCountV0,
}

/**
 *  Minimum number of staking participants before emergency conditions are imposed.
 */
export interface MinimumValidatorCountV0  {
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
    v0: new StorageType('Staking.Invulnerables', 'Default', [], sts.array(() => v0.AccountId)) as InvulnerablesV0,
}

/**
 *  Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
 *  easy to initialize and the performance hit is minimal (we expect no more than four
 *  invulnerables) and restricted to testnets.
 */
export interface InvulnerablesV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.AccountId[]
    get(block: Block): Promise<(v0.AccountId[] | undefined)>
}

export const bonded =  {
    /**
     *  Map from all locked "stash" accounts to the controller account.
     */
    v0: new StorageType('Staking.Bonded', 'Optional', [v0.AccountId], v0.AccountId) as BondedV0,
}

/**
 *  Map from all locked "stash" accounts to the controller account.
 */
export interface BondedV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.AccountId): Promise<(v0.AccountId | undefined)>
    getMany(block: Block, keys: v0.AccountId[]): Promise<(v0.AccountId | undefined)[]>
    getKeys(block: Block): Promise<v0.AccountId[]>
    getKeys(block: Block, key: v0.AccountId): Promise<v0.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.AccountId): AsyncIterable<v0.AccountId[]>
    getPairs(block: Block): Promise<[k: v0.AccountId, v: (v0.AccountId | undefined)][]>
    getPairs(block: Block, key: v0.AccountId): Promise<[k: v0.AccountId, v: (v0.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.AccountId, v: (v0.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.AccountId): AsyncIterable<[k: v0.AccountId, v: (v0.AccountId | undefined)][]>
}

export const ledger =  {
    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     */
    v0: new StorageType('Staking.Ledger', 'Optional', [v0.AccountId], v0.StakingLedger) as LedgerV0,
}

/**
 *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
 */
export interface LedgerV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.AccountId): Promise<(v0.StakingLedger | undefined)>
    getMany(block: Block, keys: v0.AccountId[]): Promise<(v0.StakingLedger | undefined)[]>
    getKeys(block: Block): Promise<v0.AccountId[]>
    getKeys(block: Block, key: v0.AccountId): Promise<v0.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.AccountId): AsyncIterable<v0.AccountId[]>
    getPairs(block: Block): Promise<[k: v0.AccountId, v: (v0.StakingLedger | undefined)][]>
    getPairs(block: Block, key: v0.AccountId): Promise<[k: v0.AccountId, v: (v0.StakingLedger | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.AccountId, v: (v0.StakingLedger | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.AccountId): AsyncIterable<[k: v0.AccountId, v: (v0.StakingLedger | undefined)][]>
}

export const payee =  {
    /**
     *  Where the reward payment should be made. Keyed by stash.
     */
    v0: new StorageType('Staking.Payee', 'Default', [v0.AccountId], v0.RewardDestination) as PayeeV0,
}

/**
 *  Where the reward payment should be made. Keyed by stash.
 */
export interface PayeeV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.RewardDestination
    get(block: Block, key: v0.AccountId): Promise<(v0.RewardDestination | undefined)>
    getMany(block: Block, keys: v0.AccountId[]): Promise<(v0.RewardDestination | undefined)[]>
    getKeys(block: Block): Promise<v0.AccountId[]>
    getKeys(block: Block, key: v0.AccountId): Promise<v0.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.AccountId): AsyncIterable<v0.AccountId[]>
    getPairs(block: Block): Promise<[k: v0.AccountId, v: (v0.RewardDestination | undefined)][]>
    getPairs(block: Block, key: v0.AccountId): Promise<[k: v0.AccountId, v: (v0.RewardDestination | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.AccountId, v: (v0.RewardDestination | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.AccountId): AsyncIterable<[k: v0.AccountId, v: (v0.RewardDestination | undefined)][]>
}

export const validators =  {
    /**
     *  The map from (wannabe) validator stash key to the preferences of that validator.
     */
    v0: new StorageType('Staking.Validators', 'Default', [v0.AccountId], v0.ValidatorPrefs) as ValidatorsV0,
    /**
     *  The map from (wannabe) validator stash key to the preferences of that validator.
     */
    v28: new StorageType('Staking.Validators', 'Default', [v28.AccountId], v28.ValidatorPrefs) as ValidatorsV28,
}

/**
 *  The map from (wannabe) validator stash key to the preferences of that validator.
 */
export interface ValidatorsV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.ValidatorPrefs
    get(block: Block, key: v0.AccountId): Promise<(v0.ValidatorPrefs | undefined)>
    getMany(block: Block, keys: v0.AccountId[]): Promise<(v0.ValidatorPrefs | undefined)[]>
    getKeys(block: Block): Promise<v0.AccountId[]>
    getKeys(block: Block, key: v0.AccountId): Promise<v0.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.AccountId): AsyncIterable<v0.AccountId[]>
    getPairs(block: Block): Promise<[k: v0.AccountId, v: (v0.ValidatorPrefs | undefined)][]>
    getPairs(block: Block, key: v0.AccountId): Promise<[k: v0.AccountId, v: (v0.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.AccountId, v: (v0.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.AccountId): AsyncIterable<[k: v0.AccountId, v: (v0.ValidatorPrefs | undefined)][]>
}

/**
 *  The map from (wannabe) validator stash key to the preferences of that validator.
 */
export interface ValidatorsV28  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v28.ValidatorPrefs
    get(block: Block, key: v28.AccountId): Promise<(v28.ValidatorPrefs | undefined)>
    getMany(block: Block, keys: v28.AccountId[]): Promise<(v28.ValidatorPrefs | undefined)[]>
    getKeys(block: Block): Promise<v28.AccountId[]>
    getKeys(block: Block, key: v28.AccountId): Promise<v28.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v28.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v28.AccountId): AsyncIterable<v28.AccountId[]>
    getPairs(block: Block): Promise<[k: v28.AccountId, v: (v28.ValidatorPrefs | undefined)][]>
    getPairs(block: Block, key: v28.AccountId): Promise<[k: v28.AccountId, v: (v28.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v28.AccountId, v: (v28.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v28.AccountId): AsyncIterable<[k: v28.AccountId, v: (v28.ValidatorPrefs | undefined)][]>
}

export const nominators =  {
    /**
     *  The map from nominator stash key to the set of stash keys of all validators to nominate.
     */
    v0: new StorageType('Staking.Nominators', 'Optional', [v0.AccountId], v0.Nominations) as NominatorsV0,
}

/**
 *  The map from nominator stash key to the set of stash keys of all validators to nominate.
 */
export interface NominatorsV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.AccountId): Promise<(v0.Nominations | undefined)>
    getMany(block: Block, keys: v0.AccountId[]): Promise<(v0.Nominations | undefined)[]>
    getKeys(block: Block): Promise<v0.AccountId[]>
    getKeys(block: Block, key: v0.AccountId): Promise<v0.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.AccountId): AsyncIterable<v0.AccountId[]>
    getPairs(block: Block): Promise<[k: v0.AccountId, v: (v0.Nominations | undefined)][]>
    getPairs(block: Block, key: v0.AccountId): Promise<[k: v0.AccountId, v: (v0.Nominations | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.AccountId, v: (v0.Nominations | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.AccountId): AsyncIterable<[k: v0.AccountId, v: (v0.Nominations | undefined)][]>
}

export const currentEra =  {
    /**
     *  The current era index.
     * 
     *  This is the latest planned era, depending on how the Session pallet queues the validator
     *  set, it might be active or not.
     */
    v0: new StorageType('Staking.CurrentEra', 'Optional', [], v0.EraIndex) as CurrentEraV0,
}

/**
 *  The current era index.
 * 
 *  This is the latest planned era, depending on how the Session pallet queues the validator
 *  set, it might be active or not.
 */
export interface CurrentEraV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v0.EraIndex | undefined)>
}

export const activeEra =  {
    /**
     *  The active era information, it holds index and start.
     * 
     *  The active era is the era currently rewarded.
     *  Validator set of this era must be equal to `SessionInterface::validators`.
     */
    v0: new StorageType('Staking.ActiveEra', 'Optional', [], v0.ActiveEraInfo) as ActiveEraV0,
}

/**
 *  The active era information, it holds index and start.
 * 
 *  The active era is the era currently rewarded.
 *  Validator set of this era must be equal to `SessionInterface::validators`.
 */
export interface ActiveEraV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v0.ActiveEraInfo | undefined)>
}

export const erasStartSessionIndex =  {
    /**
     *  The session index at which the era start for the last `HISTORY_DEPTH` eras.
     */
    v0: new StorageType('Staking.ErasStartSessionIndex', 'Optional', [v0.EraIndex], v0.SessionIndex) as ErasStartSessionIndexV0,
}

/**
 *  The session index at which the era start for the last `HISTORY_DEPTH` eras.
 */
export interface ErasStartSessionIndexV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.EraIndex): Promise<(v0.SessionIndex | undefined)>
    getMany(block: Block, keys: v0.EraIndex[]): Promise<(v0.SessionIndex | undefined)[]>
    getKeys(block: Block): Promise<v0.EraIndex[]>
    getKeys(block: Block, key: v0.EraIndex): Promise<v0.EraIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.EraIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.EraIndex): AsyncIterable<v0.EraIndex[]>
    getPairs(block: Block): Promise<[k: v0.EraIndex, v: (v0.SessionIndex | undefined)][]>
    getPairs(block: Block, key: v0.EraIndex): Promise<[k: v0.EraIndex, v: (v0.SessionIndex | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.EraIndex, v: (v0.SessionIndex | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.EraIndex): AsyncIterable<[k: v0.EraIndex, v: (v0.SessionIndex | undefined)][]>
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
    v0: new StorageType('Staking.ErasStakers', 'Default', [v0.EraIndex, v0.AccountId], v0.Exposure) as ErasStakersV0,
}

/**
 *  Exposure of validator at era.
 * 
 *  This is keyed first by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 *  If stakers hasn't been set or has been removed then empty exposure is returned.
 */
export interface ErasStakersV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.Exposure
    get(block: Block, key1: v0.EraIndex, key2: v0.AccountId): Promise<(v0.Exposure | undefined)>
    getMany(block: Block, keys: [v0.EraIndex, v0.AccountId][]): Promise<(v0.Exposure | undefined)[]>
    getKeys(block: Block): Promise<[v0.EraIndex, v0.AccountId][]>
    getKeys(block: Block, key1: v0.EraIndex): Promise<[v0.EraIndex, v0.AccountId][]>
    getKeys(block: Block, key1: v0.EraIndex, key2: v0.AccountId): Promise<[v0.EraIndex, v0.AccountId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v0.EraIndex, v0.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v0.EraIndex): AsyncIterable<[v0.EraIndex, v0.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v0.EraIndex, key2: v0.AccountId): AsyncIterable<[v0.EraIndex, v0.AccountId][]>
    getPairs(block: Block): Promise<[k: [v0.EraIndex, v0.AccountId], v: (v0.Exposure | undefined)][]>
    getPairs(block: Block, key1: v0.EraIndex): Promise<[k: [v0.EraIndex, v0.AccountId], v: (v0.Exposure | undefined)][]>
    getPairs(block: Block, key1: v0.EraIndex, key2: v0.AccountId): Promise<[k: [v0.EraIndex, v0.AccountId], v: (v0.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v0.EraIndex, v0.AccountId], v: (v0.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v0.EraIndex): AsyncIterable<[k: [v0.EraIndex, v0.AccountId], v: (v0.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v0.EraIndex, key2: v0.AccountId): AsyncIterable<[k: [v0.EraIndex, v0.AccountId], v: (v0.Exposure | undefined)][]>
}

export const erasStakersClipped =  {
    /**
     *  Clipped Exposure of validator at era.
     * 
     *  This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the
     *  `T::MaxNominatorRewardedPerValidator` biggest stakers.
     *  (Note: the field `total` and `own` of the exposure remains unchanged).
     *  This is used to limit the i/o cost for the nominator payout.
     * 
     *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     */
    v0: new StorageType('Staking.ErasStakersClipped', 'Default', [v0.EraIndex, v0.AccountId], v0.Exposure) as ErasStakersClippedV0,
}

/**
 *  Clipped Exposure of validator at era.
 * 
 *  This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the
 *  `T::MaxNominatorRewardedPerValidator` biggest stakers.
 *  (Note: the field `total` and `own` of the exposure remains unchanged).
 *  This is used to limit the i/o cost for the nominator payout.
 * 
 *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 *  If stakers hasn't been set or has been removed then empty exposure is returned.
 */
export interface ErasStakersClippedV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.Exposure
    get(block: Block, key1: v0.EraIndex, key2: v0.AccountId): Promise<(v0.Exposure | undefined)>
    getMany(block: Block, keys: [v0.EraIndex, v0.AccountId][]): Promise<(v0.Exposure | undefined)[]>
    getKeys(block: Block): Promise<[v0.EraIndex, v0.AccountId][]>
    getKeys(block: Block, key1: v0.EraIndex): Promise<[v0.EraIndex, v0.AccountId][]>
    getKeys(block: Block, key1: v0.EraIndex, key2: v0.AccountId): Promise<[v0.EraIndex, v0.AccountId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v0.EraIndex, v0.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v0.EraIndex): AsyncIterable<[v0.EraIndex, v0.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v0.EraIndex, key2: v0.AccountId): AsyncIterable<[v0.EraIndex, v0.AccountId][]>
    getPairs(block: Block): Promise<[k: [v0.EraIndex, v0.AccountId], v: (v0.Exposure | undefined)][]>
    getPairs(block: Block, key1: v0.EraIndex): Promise<[k: [v0.EraIndex, v0.AccountId], v: (v0.Exposure | undefined)][]>
    getPairs(block: Block, key1: v0.EraIndex, key2: v0.AccountId): Promise<[k: [v0.EraIndex, v0.AccountId], v: (v0.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v0.EraIndex, v0.AccountId], v: (v0.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v0.EraIndex): AsyncIterable<[k: [v0.EraIndex, v0.AccountId], v: (v0.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v0.EraIndex, key2: v0.AccountId): AsyncIterable<[k: [v0.EraIndex, v0.AccountId], v: (v0.Exposure | undefined)][]>
}

export const erasValidatorPrefs =  {
    /**
     *  Similar to `ErasStakers`, this holds the preferences of validators.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     */
    v0: new StorageType('Staking.ErasValidatorPrefs', 'Default', [v0.EraIndex, v0.AccountId], v0.ValidatorPrefs) as ErasValidatorPrefsV0,
    /**
     *  Similar to `ErasStakers`, this holds the preferences of validators.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     */
    v28: new StorageType('Staking.ErasValidatorPrefs', 'Default', [v28.EraIndex, v28.AccountId], v28.ValidatorPrefs) as ErasValidatorPrefsV28,
}

/**
 *  Similar to `ErasStakers`, this holds the preferences of validators.
 * 
 *  This is keyed first by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 */
export interface ErasValidatorPrefsV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.ValidatorPrefs
    get(block: Block, key1: v0.EraIndex, key2: v0.AccountId): Promise<(v0.ValidatorPrefs | undefined)>
    getMany(block: Block, keys: [v0.EraIndex, v0.AccountId][]): Promise<(v0.ValidatorPrefs | undefined)[]>
    getKeys(block: Block): Promise<[v0.EraIndex, v0.AccountId][]>
    getKeys(block: Block, key1: v0.EraIndex): Promise<[v0.EraIndex, v0.AccountId][]>
    getKeys(block: Block, key1: v0.EraIndex, key2: v0.AccountId): Promise<[v0.EraIndex, v0.AccountId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v0.EraIndex, v0.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v0.EraIndex): AsyncIterable<[v0.EraIndex, v0.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v0.EraIndex, key2: v0.AccountId): AsyncIterable<[v0.EraIndex, v0.AccountId][]>
    getPairs(block: Block): Promise<[k: [v0.EraIndex, v0.AccountId], v: (v0.ValidatorPrefs | undefined)][]>
    getPairs(block: Block, key1: v0.EraIndex): Promise<[k: [v0.EraIndex, v0.AccountId], v: (v0.ValidatorPrefs | undefined)][]>
    getPairs(block: Block, key1: v0.EraIndex, key2: v0.AccountId): Promise<[k: [v0.EraIndex, v0.AccountId], v: (v0.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v0.EraIndex, v0.AccountId], v: (v0.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v0.EraIndex): AsyncIterable<[k: [v0.EraIndex, v0.AccountId], v: (v0.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v0.EraIndex, key2: v0.AccountId): AsyncIterable<[k: [v0.EraIndex, v0.AccountId], v: (v0.ValidatorPrefs | undefined)][]>
}

/**
 *  Similar to `ErasStakers`, this holds the preferences of validators.
 * 
 *  This is keyed first by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 */
export interface ErasValidatorPrefsV28  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v28.ValidatorPrefs
    get(block: Block, key1: v28.EraIndex, key2: v28.AccountId): Promise<(v28.ValidatorPrefs | undefined)>
    getMany(block: Block, keys: [v28.EraIndex, v28.AccountId][]): Promise<(v28.ValidatorPrefs | undefined)[]>
    getKeys(block: Block): Promise<[v28.EraIndex, v28.AccountId][]>
    getKeys(block: Block, key1: v28.EraIndex): Promise<[v28.EraIndex, v28.AccountId][]>
    getKeys(block: Block, key1: v28.EraIndex, key2: v28.AccountId): Promise<[v28.EraIndex, v28.AccountId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v28.EraIndex, v28.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v28.EraIndex): AsyncIterable<[v28.EraIndex, v28.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v28.EraIndex, key2: v28.AccountId): AsyncIterable<[v28.EraIndex, v28.AccountId][]>
    getPairs(block: Block): Promise<[k: [v28.EraIndex, v28.AccountId], v: (v28.ValidatorPrefs | undefined)][]>
    getPairs(block: Block, key1: v28.EraIndex): Promise<[k: [v28.EraIndex, v28.AccountId], v: (v28.ValidatorPrefs | undefined)][]>
    getPairs(block: Block, key1: v28.EraIndex, key2: v28.AccountId): Promise<[k: [v28.EraIndex, v28.AccountId], v: (v28.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v28.EraIndex, v28.AccountId], v: (v28.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v28.EraIndex): AsyncIterable<[k: [v28.EraIndex, v28.AccountId], v: (v28.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v28.EraIndex, key2: v28.AccountId): AsyncIterable<[k: [v28.EraIndex, v28.AccountId], v: (v28.ValidatorPrefs | undefined)][]>
}

export const erasValidatorReward =  {
    /**
     *  The total validator era payout for the last `HISTORY_DEPTH` eras.
     * 
     *  Eras that haven't finished yet or has been removed doesn't have reward.
     */
    v0: new StorageType('Staking.ErasValidatorReward', 'Optional', [v0.EraIndex], v0.BalanceOf) as ErasValidatorRewardV0,
}

/**
 *  The total validator era payout for the last `HISTORY_DEPTH` eras.
 * 
 *  Eras that haven't finished yet or has been removed doesn't have reward.
 */
export interface ErasValidatorRewardV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.EraIndex): Promise<(v0.BalanceOf | undefined)>
    getMany(block: Block, keys: v0.EraIndex[]): Promise<(v0.BalanceOf | undefined)[]>
    getKeys(block: Block): Promise<v0.EraIndex[]>
    getKeys(block: Block, key: v0.EraIndex): Promise<v0.EraIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.EraIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.EraIndex): AsyncIterable<v0.EraIndex[]>
    getPairs(block: Block): Promise<[k: v0.EraIndex, v: (v0.BalanceOf | undefined)][]>
    getPairs(block: Block, key: v0.EraIndex): Promise<[k: v0.EraIndex, v: (v0.BalanceOf | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.EraIndex, v: (v0.BalanceOf | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.EraIndex): AsyncIterable<[k: v0.EraIndex, v: (v0.BalanceOf | undefined)][]>
}

export const erasRewardPoints =  {
    /**
     *  Rewards for the last `HISTORY_DEPTH` eras.
     *  If reward hasn't been set or has been removed then 0 reward is returned.
     */
    v0: new StorageType('Staking.ErasRewardPoints', 'Default', [v0.EraIndex], v0.EraRewardPoints) as ErasRewardPointsV0,
}

/**
 *  Rewards for the last `HISTORY_DEPTH` eras.
 *  If reward hasn't been set or has been removed then 0 reward is returned.
 */
export interface ErasRewardPointsV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.EraRewardPoints
    get(block: Block, key: v0.EraIndex): Promise<(v0.EraRewardPoints | undefined)>
    getMany(block: Block, keys: v0.EraIndex[]): Promise<(v0.EraRewardPoints | undefined)[]>
    getKeys(block: Block): Promise<v0.EraIndex[]>
    getKeys(block: Block, key: v0.EraIndex): Promise<v0.EraIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.EraIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.EraIndex): AsyncIterable<v0.EraIndex[]>
    getPairs(block: Block): Promise<[k: v0.EraIndex, v: (v0.EraRewardPoints | undefined)][]>
    getPairs(block: Block, key: v0.EraIndex): Promise<[k: v0.EraIndex, v: (v0.EraRewardPoints | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.EraIndex, v: (v0.EraRewardPoints | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.EraIndex): AsyncIterable<[k: v0.EraIndex, v: (v0.EraRewardPoints | undefined)][]>
}

export const erasTotalStake =  {
    /**
     *  The total amount staked for the last `HISTORY_DEPTH` eras.
     *  If total hasn't been set or has been removed then 0 stake is returned.
     */
    v0: new StorageType('Staking.ErasTotalStake', 'Default', [v0.EraIndex], v0.BalanceOf) as ErasTotalStakeV0,
}

/**
 *  The total amount staked for the last `HISTORY_DEPTH` eras.
 *  If total hasn't been set or has been removed then 0 stake is returned.
 */
export interface ErasTotalStakeV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.BalanceOf
    get(block: Block, key: v0.EraIndex): Promise<(v0.BalanceOf | undefined)>
    getMany(block: Block, keys: v0.EraIndex[]): Promise<(v0.BalanceOf | undefined)[]>
    getKeys(block: Block): Promise<v0.EraIndex[]>
    getKeys(block: Block, key: v0.EraIndex): Promise<v0.EraIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.EraIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.EraIndex): AsyncIterable<v0.EraIndex[]>
    getPairs(block: Block): Promise<[k: v0.EraIndex, v: (v0.BalanceOf | undefined)][]>
    getPairs(block: Block, key: v0.EraIndex): Promise<[k: v0.EraIndex, v: (v0.BalanceOf | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.EraIndex, v: (v0.BalanceOf | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.EraIndex): AsyncIterable<[k: v0.EraIndex, v: (v0.BalanceOf | undefined)][]>
}

export const forceEra =  {
    /**
     *  Mode of era forcing.
     */
    v0: new StorageType('Staking.ForceEra', 'Default', [], v0.Forcing) as ForceEraV0,
}

/**
 *  Mode of era forcing.
 */
export interface ForceEraV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.Forcing
    get(block: Block): Promise<(v0.Forcing | undefined)>
}

export const slashRewardFraction =  {
    /**
     *  The percentage of the slash that is distributed to reporters.
     * 
     *  The rest of the slashed value is handled by the `Slash`.
     */
    v0: new StorageType('Staking.SlashRewardFraction', 'Default', [], v0.Perbill) as SlashRewardFractionV0,
}

/**
 *  The percentage of the slash that is distributed to reporters.
 * 
 *  The rest of the slashed value is handled by the `Slash`.
 */
export interface SlashRewardFractionV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.Perbill
    get(block: Block): Promise<(v0.Perbill | undefined)>
}

export const canceledSlashPayout =  {
    /**
     *  The amount of currency given to reporters of a slash event which was
     *  canceled by extraordinary circumstances (e.g. governance).
     */
    v0: new StorageType('Staking.CanceledSlashPayout', 'Default', [], v0.BalanceOf) as CanceledSlashPayoutV0,
}

/**
 *  The amount of currency given to reporters of a slash event which was
 *  canceled by extraordinary circumstances (e.g. governance).
 */
export interface CanceledSlashPayoutV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.BalanceOf
    get(block: Block): Promise<(v0.BalanceOf | undefined)>
}

export const unappliedSlashes =  {
    /**
     *  All unapplied slashes that are queued for later.
     */
    v0: new StorageType('Staking.UnappliedSlashes', 'Default', [v0.EraIndex], sts.array(() => v0.UnappliedSlash)) as UnappliedSlashesV0,
}

/**
 *  All unapplied slashes that are queued for later.
 */
export interface UnappliedSlashesV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.UnappliedSlash[]
    get(block: Block, key: v0.EraIndex): Promise<(v0.UnappliedSlash[] | undefined)>
    getMany(block: Block, keys: v0.EraIndex[]): Promise<(v0.UnappliedSlash[] | undefined)[]>
    getKeys(block: Block): Promise<v0.EraIndex[]>
    getKeys(block: Block, key: v0.EraIndex): Promise<v0.EraIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.EraIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.EraIndex): AsyncIterable<v0.EraIndex[]>
    getPairs(block: Block): Promise<[k: v0.EraIndex, v: (v0.UnappliedSlash[] | undefined)][]>
    getPairs(block: Block, key: v0.EraIndex): Promise<[k: v0.EraIndex, v: (v0.UnappliedSlash[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.EraIndex, v: (v0.UnappliedSlash[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.EraIndex): AsyncIterable<[k: v0.EraIndex, v: (v0.UnappliedSlash[] | undefined)][]>
}

export const bondedEras =  {
    /**
     *  A mapping from still-bonded eras to the first session index of that era.
     * 
     *  Must contains information for eras for the range:
     *  `[active_era - bounding_duration; active_era]`
     */
    v0: new StorageType('Staking.BondedEras', 'Default', [], sts.array(() => sts.tuple(() => [v0.EraIndex, v0.SessionIndex]))) as BondedErasV0,
}

/**
 *  A mapping from still-bonded eras to the first session index of that era.
 * 
 *  Must contains information for eras for the range:
 *  `[active_era - bounding_duration; active_era]`
 */
export interface BondedErasV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v0.EraIndex, v0.SessionIndex][]
    get(block: Block): Promise<([v0.EraIndex, v0.SessionIndex][] | undefined)>
}

export const validatorSlashInEra =  {
    /**
     *  All slashing events on validators, mapped by era to the highest slash proportion
     *  and slash value of the era.
     */
    v0: new StorageType('Staking.ValidatorSlashInEra', 'Optional', [v0.EraIndex, v0.AccountId], sts.tuple(() => [v0.Perbill, v0.BalanceOf])) as ValidatorSlashInEraV0,
}

/**
 *  All slashing events on validators, mapped by era to the highest slash proportion
 *  and slash value of the era.
 */
export interface ValidatorSlashInEraV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v0.EraIndex, key2: v0.AccountId): Promise<([v0.Perbill, v0.BalanceOf] | undefined)>
    getMany(block: Block, keys: [v0.EraIndex, v0.AccountId][]): Promise<([v0.Perbill, v0.BalanceOf] | undefined)[]>
    getKeys(block: Block): Promise<[v0.EraIndex, v0.AccountId][]>
    getKeys(block: Block, key1: v0.EraIndex): Promise<[v0.EraIndex, v0.AccountId][]>
    getKeys(block: Block, key1: v0.EraIndex, key2: v0.AccountId): Promise<[v0.EraIndex, v0.AccountId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v0.EraIndex, v0.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v0.EraIndex): AsyncIterable<[v0.EraIndex, v0.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v0.EraIndex, key2: v0.AccountId): AsyncIterable<[v0.EraIndex, v0.AccountId][]>
    getPairs(block: Block): Promise<[k: [v0.EraIndex, v0.AccountId], v: ([v0.Perbill, v0.BalanceOf] | undefined)][]>
    getPairs(block: Block, key1: v0.EraIndex): Promise<[k: [v0.EraIndex, v0.AccountId], v: ([v0.Perbill, v0.BalanceOf] | undefined)][]>
    getPairs(block: Block, key1: v0.EraIndex, key2: v0.AccountId): Promise<[k: [v0.EraIndex, v0.AccountId], v: ([v0.Perbill, v0.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v0.EraIndex, v0.AccountId], v: ([v0.Perbill, v0.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v0.EraIndex): AsyncIterable<[k: [v0.EraIndex, v0.AccountId], v: ([v0.Perbill, v0.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v0.EraIndex, key2: v0.AccountId): AsyncIterable<[k: [v0.EraIndex, v0.AccountId], v: ([v0.Perbill, v0.BalanceOf] | undefined)][]>
}

export const nominatorSlashInEra =  {
    /**
     *  All slashing events on nominators, mapped by era to the highest slash value of the era.
     */
    v0: new StorageType('Staking.NominatorSlashInEra', 'Optional', [v0.EraIndex, v0.AccountId], v0.BalanceOf) as NominatorSlashInEraV0,
}

/**
 *  All slashing events on nominators, mapped by era to the highest slash value of the era.
 */
export interface NominatorSlashInEraV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v0.EraIndex, key2: v0.AccountId): Promise<(v0.BalanceOf | undefined)>
    getMany(block: Block, keys: [v0.EraIndex, v0.AccountId][]): Promise<(v0.BalanceOf | undefined)[]>
    getKeys(block: Block): Promise<[v0.EraIndex, v0.AccountId][]>
    getKeys(block: Block, key1: v0.EraIndex): Promise<[v0.EraIndex, v0.AccountId][]>
    getKeys(block: Block, key1: v0.EraIndex, key2: v0.AccountId): Promise<[v0.EraIndex, v0.AccountId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v0.EraIndex, v0.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v0.EraIndex): AsyncIterable<[v0.EraIndex, v0.AccountId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v0.EraIndex, key2: v0.AccountId): AsyncIterable<[v0.EraIndex, v0.AccountId][]>
    getPairs(block: Block): Promise<[k: [v0.EraIndex, v0.AccountId], v: (v0.BalanceOf | undefined)][]>
    getPairs(block: Block, key1: v0.EraIndex): Promise<[k: [v0.EraIndex, v0.AccountId], v: (v0.BalanceOf | undefined)][]>
    getPairs(block: Block, key1: v0.EraIndex, key2: v0.AccountId): Promise<[k: [v0.EraIndex, v0.AccountId], v: (v0.BalanceOf | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v0.EraIndex, v0.AccountId], v: (v0.BalanceOf | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v0.EraIndex): AsyncIterable<[k: [v0.EraIndex, v0.AccountId], v: (v0.BalanceOf | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v0.EraIndex, key2: v0.AccountId): AsyncIterable<[k: [v0.EraIndex, v0.AccountId], v: (v0.BalanceOf | undefined)][]>
}

export const slashingSpans =  {
    /**
     *  Slashing spans for stash accounts.
     */
    v0: new StorageType('Staking.SlashingSpans', 'Optional', [v0.AccountId], v0.SlashingSpans) as SlashingSpansV0,
}

/**
 *  Slashing spans for stash accounts.
 */
export interface SlashingSpansV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.AccountId): Promise<(v0.SlashingSpans | undefined)>
    getMany(block: Block, keys: v0.AccountId[]): Promise<(v0.SlashingSpans | undefined)[]>
    getKeys(block: Block): Promise<v0.AccountId[]>
    getKeys(block: Block, key: v0.AccountId): Promise<v0.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.AccountId): AsyncIterable<v0.AccountId[]>
    getPairs(block: Block): Promise<[k: v0.AccountId, v: (v0.SlashingSpans | undefined)][]>
    getPairs(block: Block, key: v0.AccountId): Promise<[k: v0.AccountId, v: (v0.SlashingSpans | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.AccountId, v: (v0.SlashingSpans | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.AccountId): AsyncIterable<[k: v0.AccountId, v: (v0.SlashingSpans | undefined)][]>
}

export const spanSlash =  {
    /**
     *  Records information about the maximum slash of a stash within a slashing span,
     *  as well as how much reward has been paid out.
     */
    v0: new StorageType('Staking.SpanSlash', 'Default', [sts.tuple(() => [v0.AccountId, v0.SpanIndex])], v0.SpanRecord) as SpanSlashV0,
}

/**
 *  Records information about the maximum slash of a stash within a slashing span,
 *  as well as how much reward has been paid out.
 */
export interface SpanSlashV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.SpanRecord
    get(block: Block, key: [v0.AccountId, v0.SpanIndex]): Promise<(v0.SpanRecord | undefined)>
    getMany(block: Block, keys: [v0.AccountId, v0.SpanIndex][]): Promise<(v0.SpanRecord | undefined)[]>
    getKeys(block: Block): Promise<[v0.AccountId, v0.SpanIndex][]>
    getKeys(block: Block, key: [v0.AccountId, v0.SpanIndex]): Promise<[v0.AccountId, v0.SpanIndex][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v0.AccountId, v0.SpanIndex][]>
    getKeysPaged(pageSize: number, block: Block, key: [v0.AccountId, v0.SpanIndex]): AsyncIterable<[v0.AccountId, v0.SpanIndex][]>
    getPairs(block: Block): Promise<[k: [v0.AccountId, v0.SpanIndex], v: (v0.SpanRecord | undefined)][]>
    getPairs(block: Block, key: [v0.AccountId, v0.SpanIndex]): Promise<[k: [v0.AccountId, v0.SpanIndex], v: (v0.SpanRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v0.AccountId, v0.SpanIndex], v: (v0.SpanRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v0.AccountId, v0.SpanIndex]): AsyncIterable<[k: [v0.AccountId, v0.SpanIndex], v: (v0.SpanRecord | undefined)][]>
}

export const earliestUnappliedSlash =  {
    /**
     *  The earliest era for which we have a pending, unapplied slash.
     */
    v0: new StorageType('Staking.EarliestUnappliedSlash', 'Optional', [], v0.EraIndex) as EarliestUnappliedSlashV0,
}

/**
 *  The earliest era for which we have a pending, unapplied slash.
 */
export interface EarliestUnappliedSlashV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v0.EraIndex | undefined)>
}

export const snapshotValidators =  {
    /**
     *  Snapshot of validators at the beginning of the current election window. This should only
     *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
     */
    v0: new StorageType('Staking.SnapshotValidators', 'Optional', [], sts.array(() => v0.AccountId)) as SnapshotValidatorsV0,
}

/**
 *  Snapshot of validators at the beginning of the current election window. This should only
 *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
 */
export interface SnapshotValidatorsV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v0.AccountId[] | undefined)>
}

export const snapshotNominators =  {
    /**
     *  Snapshot of nominators at the beginning of the current election window. This should only
     *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
     */
    v0: new StorageType('Staking.SnapshotNominators', 'Optional', [], sts.array(() => v0.AccountId)) as SnapshotNominatorsV0,
}

/**
 *  Snapshot of nominators at the beginning of the current election window. This should only
 *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
 */
export interface SnapshotNominatorsV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v0.AccountId[] | undefined)>
}

export const queuedElected =  {
    /**
     *  The next validator set. At the end of an era, if this is available (potentially from the
     *  result of an offchain worker), it is immediately used. Otherwise, the on-chain election
     *  is executed.
     */
    v0: new StorageType('Staking.QueuedElected', 'Optional', [], v0.ElectionResult) as QueuedElectedV0,
}

/**
 *  The next validator set. At the end of an era, if this is available (potentially from the
 *  result of an offchain worker), it is immediately used. Otherwise, the on-chain election
 *  is executed.
 */
export interface QueuedElectedV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v0.ElectionResult | undefined)>
}

export const queuedScore =  {
    /**
     *  The score of the current [`QueuedElected`].
     */
    v0: new StorageType('Staking.QueuedScore', 'Optional', [], v0.PhragmenScore) as QueuedScoreV0,
}

/**
 *  The score of the current [`QueuedElected`].
 */
export interface QueuedScoreV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v0.PhragmenScore | undefined)>
}

export const eraElectionStatus =  {
    /**
     *  Flag to control the execution of the offchain election. When `Open(_)`, we accept
     *  solutions to be submitted.
     */
    v0: new StorageType('Staking.EraElectionStatus', 'Default', [], v0.ElectionStatus) as EraElectionStatusV0,
}

/**
 *  Flag to control the execution of the offchain election. When `Open(_)`, we accept
 *  solutions to be submitted.
 */
export interface EraElectionStatusV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.ElectionStatus
    get(block: Block): Promise<(v0.ElectionStatus | undefined)>
}

export const isCurrentSessionFinal =  {
    /**
     *  True if the current **planned** session is final. Note that this does not take era
     *  forcing into account.
     */
    v0: new StorageType('Staking.IsCurrentSessionFinal', 'Default', [], sts.boolean()) as IsCurrentSessionFinalV0,
}

/**
 *  True if the current **planned** session is final. Note that this does not take era
 *  forcing into account.
 */
export interface IsCurrentSessionFinalV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const storageVersion =  {
    /**
     *  True if network has been upgraded to this version.
     *  Storage version of the pallet.
     * 
     *  This is set to v3.0.0 for new networks.
     */
    v0: new StorageType('Staking.StorageVersion', 'Default', [], v0.Releases) as StorageVersionV0,
    /**
     *  True if network has been upgraded to this version.
     *  Storage version of the pallet.
     * 
     *  This is set to v7.0.0 for new networks.
     */
    v9110: new StorageType('Staking.StorageVersion', 'Default', [], v9110.Type_407) as StorageVersionV9110,
    /**
     *  True if network has been upgraded to this version.
     *  Storage version of the pallet.
     * 
     *  This is set to v7.0.0 for new networks.
     */
    v9190: new StorageType('Staking.StorageVersion', 'Default', [], v9190.Type_488) as StorageVersionV9190,
    /**
     *  True if network has been upgraded to this version.
     *  Storage version of the pallet.
     * 
     *  This is set to v7.0.0 for new networks.
     */
    v9270: new StorageType('Staking.StorageVersion', 'Default', [], v9270.Type_494) as StorageVersionV9270,
    /**
     *  True if network has been upgraded to this version.
     *  Storage version of the pallet.
     * 
     *  This is set to v7.0.0 for new networks.
     */
    v9300: new StorageType('Staking.StorageVersion', 'Default', [], v9300.Type_506) as StorageVersionV9300,
}

/**
 *  True if network has been upgraded to this version.
 *  Storage version of the pallet.
 * 
 *  This is set to v3.0.0 for new networks.
 */
export interface StorageVersionV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.Releases
    get(block: Block): Promise<(v0.Releases | undefined)>
}

/**
 *  True if network has been upgraded to this version.
 *  Storage version of the pallet.
 * 
 *  This is set to v7.0.0 for new networks.
 */
export interface StorageVersionV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9110.Type_407
    get(block: Block): Promise<(v9110.Type_407 | undefined)>
}

/**
 *  True if network has been upgraded to this version.
 *  Storage version of the pallet.
 * 
 *  This is set to v7.0.0 for new networks.
 */
export interface StorageVersionV9190  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9190.Type_488
    get(block: Block): Promise<(v9190.Type_488 | undefined)>
}

/**
 *  True if network has been upgraded to this version.
 *  Storage version of the pallet.
 * 
 *  This is set to v7.0.0 for new networks.
 */
export interface StorageVersionV9270  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9270.Type_494
    get(block: Block): Promise<(v9270.Type_494 | undefined)>
}

/**
 *  True if network has been upgraded to this version.
 *  Storage version of the pallet.
 * 
 *  This is set to v7.0.0 for new networks.
 */
export interface StorageVersionV9300  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9300.Type_506
    get(block: Block): Promise<(v9300.Type_506 | undefined)>
}

export const migrateEra =  {
    /**
     *  The era where we migrated from Lazy Payouts to Simple Payouts
     */
    v0: new StorageType('Staking.MigrateEra', 'Optional', [], v0.EraIndex) as MigrateEraV0,
}

/**
 *  The era where we migrated from Lazy Payouts to Simple Payouts
 */
export interface MigrateEraV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v0.EraIndex | undefined)>
}

export const currentPlannedSession =  {
    /**
     *  The last planned session scheduled by the session pallet.
     * 
     *  This is basically in sync with the call to [`SessionManager::new_session`].
     */
    v29: new StorageType('Staking.CurrentPlannedSession', 'Default', [], v29.SessionIndex) as CurrentPlannedSessionV29,
}

/**
 *  The last planned session scheduled by the session pallet.
 * 
 *  This is basically in sync with the call to [`SessionManager::new_session`].
 */
export interface CurrentPlannedSessionV29  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v29.SessionIndex
    get(block: Block): Promise<(v29.SessionIndex | undefined)>
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
    v9170: new StorageType('Staking.MinCommission', 'Default', [], v9170.Perbill) as MinCommissionV9170,
}

/**
 *  The minimum amount of commission that validators can set.
 * 
 *  If set to `0`, no limit exists.
 */
export interface MinCommissionV9170  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9170.Perbill
    get(block: Block): Promise<(v9170.Perbill | undefined)>
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
